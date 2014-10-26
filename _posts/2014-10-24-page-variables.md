---
tags: [test, "hello world"]
CustomVariables: my param
---


hello

page.content: ...

page.excerpt: ...

page.title: `{{ page.title }}`

page.url: `{{ page.url }}`

page.date: `{{ page.date }}`

page.id: `{{ page.id }}`

page.categories: `{{ page.categories }}`

page.tags: `{{ page.tags | jsonify }}`

page.path: `{{ page.path }}`

page.next.title: `{{ page.next.title }}`

page.previous.title: `{{ page.previous.title }}`

page.dir: `{{ page.dir }}`

page.CustomVariables: `{{ page.CustomVariables }}`
