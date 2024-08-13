type SiteConfig = {
	// 显示名称
	name: string;
	// 头像链接
	avatarUrl: string;
	// 语言提问
	codeLangQuestion?: string;
	// 语言
	codeLangs: {
		icon: string; // src/assets/icons/ 目录下文件名
		name: string;
		usage: number; // 0-100
	}[];
	// 联系方式
	concats: {
		icon: string;
		name: string;
		link: string;
	}[];
	// 网站
	websites: {
		name: string;
		link: string;
	}[];
};

export const siteConfig: SiteConfig = {
	name: "皮皮休",
	avatarUrl:
		"https://gravatar.loli.net/avatar/6330e594f67655c88aa8a405328b7ee04160a714648d4b3982c52f4175c7f9e3?size=256",
	codeLangQuestion: "你平常使用哪些编程语言或技术，使用情况如何？",
	codeLangs: [
		{
			icon: "cpp",
			name: "C++",
			usage: 80,
		},
		{
			icon: "rust",
			name: "Rust",
			usage: 30,
		},
		{
			icon: "nodejs",
			name: "NodeJS",
			usage: 40,
		},
		{
			icon: "linux",
			name: "Linux",
			usage: 80,
		},
	],
	concats: [
		{
			icon: "github",
			name: "Github",
			link: "https://github.com/ticks-tan",
		},
		{
			icon: "mail",
			name: "Email",
			link: "mailto:ticks.cc@gmail.com",
		},
	],
	websites: [
		{
			name: "博客网站",
			link: "https://blog.ppixiu.com",
		},
		{
			name: "个人网盘",
			link: "https://pan.ticks.cc",
		},
		{
			name: "状态监控",
			link: "https://status.ppixiu.com",
		},
	],
};
