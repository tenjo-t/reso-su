export type SiteInfo = {
	rss: string;
	url: string;
	title: string;
	param: string;
	logo: string;
	creator?: string;
};

export const siteList = [
	{
		rss: "https://zenn.dev/feed",
		url: "https://zenn.dev/",
		title: "Zenn",
		param: "zenn",
		logo: "logo/zenn.svg",
	},
	{
		rss: "https://jser.info/rss/",
		url: "https://jser.info/",
		title: "JSer.info",
		param: "jser_info",
		logo: "logo/jser_info.png",
	},
	{
		rss: "https://gihyo.jp/feed/atom",
		url: "https://gihyo.jp/",
		title: "gihyo.jp",
		param: "gihyo_jp",
		logo: "",
	},
	{
		rss: "https://zenn.dev/topics/rust/feed",
		url: "https://zenn.dev/topics/rust",
		title: "Zenn (Rust)",
		param: "zenn_rust",
		logo: "logo/zenn.svg",
	},
	{
		rss: "https://blog.jxck.io/feeds/atom.xml",
		url: "https://blog.jxck.io/",
		title: "Jxck's blog",
		param: "blog_jxck",
		logo: "",
		creator: "Jxck",
	},
	{
		rss: "https://azukiazusa.dev/rss.xml",
		url: "https://azukiazusa.dev/",
		title: "azukiazusaのテックブログ2",
		param: "azukiazusa",
		logo: "",
		creator: "azukiazusa1",
	},
] satisfies SiteInfo[];
