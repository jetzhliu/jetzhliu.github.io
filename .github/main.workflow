workflow "GitHub Gages" {
  on = "push"
  resolves = ["GitHub Pages Deploy"]
}

action "Build" {
  uses = "docker://node:12"
  runs = ["sh", "-c", "npm install && npm run export"]
}

action "GitHub Pages Deploy" {
  uses = "maxheld83/ghpages@v0.2.1"
  needs = ["Build"]
  env = {
    BUILD_DIR = "__sapper__/export"
  }
  secrets = ["GITHUB_TOKEN"]
}
