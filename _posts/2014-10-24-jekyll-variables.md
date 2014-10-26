---
tags: test
---

refer: <http://jekyllrb.com/docs/variables/>

## Global Variables

VARIABLE | DESCRIPTION
-------- | -----------
`site` | Sitewide information + configuration settings from `_config.yml`. See below for details.
`page` | Page specific information + the *YAML front matter*. Custom variables set via the YAML Front Matter will be available here. See below for details.
`content` | In layout files, the rendered content of the Post or Page being wrapped. Not defined in Post or Page files.
`paginator` | When the `paginate` configuration option is set, this variable becomes available for use. See Pagination for details.

## Site Variables

VARIABLE | DESCRIPTION
-------- | -----------
`site.time` | The current time (when you run the jekyll command).
`site.pages` | A list of all Pages.
`site.posts` | A reverse chronological list of all Posts.
`site.related_posts` | If the page being processed is a Post, this contains a list of up to ten related Posts. By default, these are low quality but fast to compute. For high quality but slow to compute results, run the  jekyll command with the --lsi (latent semantic indexing) option.
`site.static_files` | A list of all static files (i.e. files not processed by Jekyll's converters or the Liquid renderer). Each file has three properties:  path, modified_time and extname.
`site.html_pages` | A list of all HTML Pages.
`site.collections` | A list of all the collections.
`site.data` | A list containing the data loaded from the YAML files located in the _data directory.
`site.documents` | A list of all the documents in every collection.
`site.categories.CATEGORY` | The list of all Posts in category CATEGORY.
`site.tags.TAG` | The list of all Posts with tag TAG.
`site.[CONFIGURATION_DATA]` | All the variables set via the command line and your _config.yml are available through the site variable. For example, if you have url: http://mysite.com in your configuration file, then in your Posts and Pages it will be stored in site.url. Jekyll does not parse changes to _config.yml in watch mode, you must restart Jekyll to see changes to variables.

## Page Variables

VARIABLE | DESCRIPTION
-------- | -----------
`page.content` | The content of the Page, rendered or un-rendered depending upon what Liquid is being processed and what page is.
`page.title` | The title of the Page.
`page.excerpt` | The un-rendered excerpt of the Page.
`page.url` | The URL of the Post without the domain, but with a leading slash, e.g. /2008/12/14/my-post.html
`page.date` | The Date assigned to the Post. This can be overridden in a Post’s front matter by specifying a new date/time in the format YYYY-MM-DD HH:MM:SS (assuming UTC), or YYYY-MM-DD HH:MM:SS +/-TTTT (to specify a time zone using an offset from UTC. e.g. 2008-12-14 10:30:00 +0900).
`page.id` | An identifier unique to the Post (useful in RSS feeds). e.g. /2008/12/14/my-post
`page.categories` | The list of categories to which this post belongs. Categories are derived from the directory structure above the _posts directory. For example, a post at /work/code/_posts/2008-12-24-closures.md would have this field set to ['work', 'code']. These can also be specified in the YAML Front Matter.
`page.tags` | The list of tags to which this post belongs. These can be specified in the YAML Front Matter.
`page.path` | The path to the raw post or page. Example usage: Linking back to the page or post’s source on GitHub. This can be overridden in the YAML Front Matter.
`page.next` | The next post relative to the position of the current post in site.posts. Returns nil for the last entry.
`page.previous` | The previous post relative to the position of the current post in site.posts. Returns nil for the first entry.

ProTip™: Use Custom Front Matter
Any custom front matter that you specify will be available under  page. For example, if you specify custom_css: true in a page’s front matter, that value will be available as page.custom_css.

## Paginator

VARIABLE | DESCRIPTION
-------- | -----------
`paginator.per_page` | Number of Posts per page.
`paginator.posts` | Posts available for that page.
`paginator.total_posts` | Total number of Posts.
`paginator.total_pages` | Total number of Pages.
`paginator.page` | The number of the current page.
`paginator.previous_page` | The number of the previous page.
`paginator.previous_page_path` | The path to the previous page.
`paginator.next_page` | The number of the next page.
`paginator.next_page_path` | The path to the next page.

Paginator variable availability
These are only available in index files, however they can be located in a subdirectory, such as /blog/index.html.
