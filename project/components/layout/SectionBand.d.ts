/**
 * Full-width section wrapper with the brand's surface/tint palette, 1200px inner container
 * and 96px vertical rhythm. `bleed` adds the 120px black-to-tint gradient that softens
 * the hero-to-body handoff — use it on the first tint section only.
 */
export interface SectionBandProps {
  tone?: 'void' | 'surface' | 'cyan' | 'teal' | 'orange' | 'neutral';
  bleed?: boolean;
  children?: React.ReactNode;
}
export function SectionBand(props: SectionBandProps): JSX.Element;
