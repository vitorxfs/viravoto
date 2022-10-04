export const SITE = {
	title: 'VIRA VOTO',
	description: 'Materiais e links compartilhados no grupo do telegram do Vira Voto 2022.',
	defaultLanguage: 'pt_BR',
};

export const OPEN_GRAPH = {
	image: {
		src: '/default-og-image.png',
		alt: 'Materiais e links compartilhados no grupo do telegram do Vira Voto 2022.'
	},
	// twitter: 'teseonze',
};

// This is the type of the frontmatter you put in the docs markdown files.
export type Frontmatter = {
	title: string;
	description: string;
	layout: string;
	image?: { src: string; alt: string };
	dir?: 'ltr' | 'rtl';
	ogLocale?: string;
	lang?: string;
};

export const KNOWN_LANGUAGES = {
	English: 'en',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/tree/main/examples/docs`;

export const COMMUNITY_INVITE_URL = `https://tinyurl.com/viravoto`;

export type Sidebar = Record<
	typeof KNOWN_LANGUAGE_CODES[number],
	Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
	en: {
		'Introdução': [
			{ text: '🚀 Vira Voto 2022', link: 'introducao' },
			{ text: '✏️ Como contribuir?', link: 'como-contribuir' },
		],
		'Estratégias': [
			{ text: '💬 Técnicas de Comunicação', link: 'tecnicas-de-comunicacao' },
			{ text: '🤔 Quais tópicos abordar?', link: 'quais-topicos-abordar' },
		],
		'Notícias': [
			{ text: '📰 Escândalos Bolsonaro', link: 'escandalos' },
			{ text: '💉 Genocídio na Pandemia', link: 'pandemia' },
		],
	},
};
