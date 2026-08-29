/**
 * Fade + 24px rise on scroll-into-view, one pass only. Stagger siblings 80ms apart.
 */
export interface RevealProps {
  /** Delay in ms — use index * 80 for staggered children. */
  delay?: number;
  children?: React.ReactNode;
}
export function Reveal(props: RevealProps): JSX.Element;
