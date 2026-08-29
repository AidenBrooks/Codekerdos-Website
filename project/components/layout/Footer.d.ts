/**
 * Site footer: logo + newsletter capture, three link columns, legal bar.
 */
export interface FooterColumn { title: string; links: string[] }
export interface FooterProps {
  logo?: string;
  columns?: FooterColumn[];
}
export function Footer(props: FooterProps): JSX.Element;
