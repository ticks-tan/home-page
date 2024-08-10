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
	name: "Ticks",
	avatarUrl:
		"https://0.gravatar.com/avatar/6330e594f67655c88aa8a405328b7ee04160a714648d4b3982c52f4175c7f9e3?size=256",
	codeLangQuestion:
		"What's in your skill arsenal, and how do you rate your expertise?",
	codeLangs: [
		{
			icon: "cpp",
			name: "C++",
			usage: 80
		},
		{
			icon: "rust",
			name: "Rust",
			usage: 30
		},
		{
			icon: "nodejs",
			name: "NodeJS",
			usage: 40,
		},
		{
			icon: "linux",
			name: "Linux",
			usage: 80
		}
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
			name: "Blog WebSite",
			link: "https://blog.ticks.cc",
		},
		{
			name: "Personal Cloud Disk",
			link: "https://pan.ticks.cc",
		},
		{
			name: "Status Monitor",
			link: "https://status.ticks.cc",
		},
	],
};
