# github actions

github actions 是 GitHub 官方的 `CI/CD` 框架，也可以认为是 `CI/CD` 的升级版。只要项目有动作的时候就会自动触发配置好的流程脚本。例如发布 npm 模块、issue 上有人提紧急 bug 的时候发送短信、构建项目并发布等等。
GitHub Actions 可以自己创建、也可以共享（通过发布到[商店](https://github.com/marketplace?type=actions)）。

由于目前 github actions 尚处于 beta 阶段，目前须先到 [GitHub Actions page](https://github.com/features/actions) 上申请开通才可使用。

## Actions

动作，可以理解为执行一段脚本。需要在 Docker 容器内运行，可以访问代码、环境变量等

## Workflows

工作流，多个 action 组成一个工作流。action之间可以定义依赖关系。存储在 `.github/main.workflow` 文件中。

## 创建 Action

创建 action 只需要编写一个 `Dockerfile`，通常还要包含 `README.md` 和 `entrypoint.sh`。其他文件可随意。

一般单独创建某个 action 的仓库，在根目录中放置 `Dockerfile`。这样可以被其他仓库引用。
也可以放置在需要用到这个 `action` 的项目仓库中，这样一般仅被当前项目所用。

默认 `entrypoint.sh` 是该 action 的执行入口。需要的功能在该文件实现。如果比较复杂，可以调用外部脚本。

编写 `entrypoint.sh` 需要注意一下几点

1. 添加 `#!/bin/sh` 在头部，脚本尽量使用通用的 `shell` 语法
2. 添加 `set -eu` 确保程序报错时 action 不要继续往下执行
3. `entrypoint.sh` 需要添加执行权限 `chmod +x entrypoint.sh`

Dockerfile 的编写需要注意[这些地方](https://developer.github.com/actions/creating-github-actions/creating-a-docker-container/)

样例：

Dockerfile

```Dockerfile
FROM debian:9.5-slim

LABEL "com.github.actions.name"="Hello World"
LABEL "com.github.actions.description"="Write arguments to the standard output"
LABEL "com.github.actions.icon"="mic"
LABEL "com.github.actions.color"="purple"

LABEL "repository"="http://github.com/octocat/hello-world"
LABEL "homepage"="http://github.com/actions"
LABEL "maintainer"="Octocat <octocat@github.com>"

ADD entrypoint.sh /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
```

entrypoint.sh

```sh
#!/bin/sh -l
set -eu
sh -c "echo $*"
```

每个 action 都能访问网络和读写文件，对文件的修改在后续 action 中能保留。

在 action 中能访问的环境变量有[这些](https://developer.github.com/actions/creating-github-actions/accessing-the-runtime-environment/#environment-variables)，常用的有：

- GITHUB_ACTOR: 触发该 action 的人或 app
- GITHUB_TOKEN: 有所在仓库相关权限的 token

## 创建 Workflows

编辑可以通过可视化界面操作，具体查阅[这里](https://help.github.com/en/articles/creating-a-workflow-with-github-actions)

也可以通过编辑 `.github/main.workflow` 文件来创建、修改 workflow。

workflow 主要有两中类型块，分别为 workflow 块和 action 块，每种块都可以出现多次。

__[详细配置](https://developer.github.com/actions/managing-workflows/workflow-configuration-options/)__

### workflow 块

用于定义工作流。

样例：

1. 有代码 push 的时候执行 `action a` 和 `action b` 两个操作
2. 每隔15分钟执行一次 `action c`

```
workflow "IDENTIFIER" {
  on = "push"
  resolves = ["action a", "action b"]
}
workflow "IDENTIFIER" {
  on = "schedule(*/15 * * * *)"
  resolves = ["action c"]
}
```

### action 块

用于定义每个任务执行的内容和参数以及依赖。

常用配置

- uses: 使用的 `docker` 镜像，可以是已发布的 docker 镜像、独立的 GitHub 仓库或本仓库的相对路径
- runs: 运行的脚本，若定义了 entrypoint，一般可省略
- args: 拼接到 entrypoint 后的参数

样例：

1. `action a` 使用 `node:10` 镜像运行
2. `action b` 使用 `actions/heroku` 仓库、master 分支的 Dockerfile 描述的镜像运行
3. `action c` 使用本仓库下的 Dockerfile 描述的镜像运行
4. `action c` 依赖 `action a` 和 `action b`

```
action "action a" {
  uses = "node:10"
  runs = ["npm", "install"]
}
action "action b" {
  uses = "actions/heroku@master"
}
action "action c" {
  uses = "./action-c/"
  needs = ["action a", "action b"]
}
```

## 参考链接

- [GitHub Actions](https://developer.github.com/actions/)
- [Customizing your project with GitHub Actions](https://help.github.com/en/articles/customizing-your-project-with-github-actions)
- [Creating a workflow with GitHub Actions](https://help.github.com/en/articles/creating-a-workflow-with-github-actions)
- [Workflow configuration options](https://developer.github.com/actions/managing-workflows/workflow-configuration-options/)
