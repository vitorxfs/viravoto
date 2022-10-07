import { GITHUB_PROJECT_URL, OG_TWITTER_USER, TELEGRAM_GROUP_URL } from "./env";

export const SITE = {
	title: 'VIRA VOTO',
	description: 'Materiais e links para auxiliar no vira voto 2022',
	defaultLanguage: 'pt_BR',
};

export const OPEN_GRAPH = {
	image: {
		src: 'default-og-image.png',
		alt: 'Materiais e links para auxiliar no vira voto 2022'
	},
	twitter: OG_TWITTER_USER,
};

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'XXXXXXXXXX',
	appId: 'XXXXXXXXXX',
	apiKey: 'XXXXXXXXXX',
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

export const GITHUB_EDIT_URL = GITHUB_PROJECT_URL;

export const COMMUNITY_INVITE_URL = TELEGRAM_GROUP_URL;

export type Sidebar =	Record<string, { text: string; link: string }[]>;
export const SIDEBAR: Sidebar = {
	'Introdução': [
		{ text: '⭐ Vira Voto 2022', link: 'introducao' },
		{ text: '✏️ Como contribuir?', link: 'como-contribuir' },
	],
	'Redes Sociais': [
		{ text: '➕ Perfis para seguir', link: 'nas-redes'},
		{ text: '⬇️ Como baixar videos, etc', link: 'tutorial'},
	],
	'Estratégias': [
		{ text: '🤔 Quais tópicos abordar?', link: 'quais-topicos-abordar' },
		{ text: '💬 Como Argumentar', link: 'tecnicas-de-comunicacao' },
	],
};
