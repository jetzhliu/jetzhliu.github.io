import fs from "fs"
import path from "path"
import yaml from "js-yaml"
import marked from "marked"

const root = path.resolve(__dirname, "../../..")
const postsPath = path.resolve(root, "_posts")
const posts = fs.readdirSync(postsPath).filter(name => /^\d{4}-\d{2}-\d{2}-.+\.md$/.test(name)).sort((a, b) => {
	if (a === b) return 0;
	return a > b ? -1 : 1;
}).map(name => {
	const { attr, text } = frontMatter(fs.readFileSync(path.join(postsPath, name), "utf8"));
	const slug = name.substring(11, name.length - 3).replace(/[^-_0-9a-zA-Z]/g, '');
	const date = name.substr(0, 10)
	return {
		title: attr.title || slug.replace('-', ' '),
		slug,
		published: attr.published === false ? false : true,
		text,
		attr,
		date,
		html: marked.parse(text)
	}
})

export default posts

function frontMatter(str) {
	const regex = /^---\n(.+?)\n---\n+/;
	const match = regex.exec(str);
	if (!match) {
		return {
			attr: {},
			text: str
		};
	} else {
		return {
			attr: yaml.safeLoad(match[1]),
			text: str.substr(match[0].length)
		};
	}
}