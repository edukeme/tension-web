export interface SeoProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  noIndex?: boolean;
}

export const SITE_NAME = 'Tension';
export const SITE_URL = 'https://tension.app';
export const DEFAULT_OG = `${SITE_URL}/images/tension_hero_bg.png`;

export function buildTitle(pageTitle: string): string {
  return `${pageTitle} | ${SITE_NAME}`;
}
