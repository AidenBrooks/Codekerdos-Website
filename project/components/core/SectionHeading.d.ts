/** Eyebrow + H2 + optional subhead — the standard opener for every section. */
export interface SectionHeadingProps {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  sub?: React.ReactNode;
  align?: 'left' | 'center';
  /** true on the pale tint sections so text flips to ink. */
  onTint?: boolean;
}
export function SectionHeading(props: SectionHeadingProps): JSX.Element;
