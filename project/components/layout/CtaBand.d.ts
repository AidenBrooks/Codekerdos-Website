/**
 * Closing conversion band: centred display headline with a gradient-text emphasis phrase,
 * one action, and a short benefit list. The breathing glow sits behind it.
 */
export interface CtaBandProps {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  /** Trailing phrase rendered in gradient text. */
  emphasis?: React.ReactNode;
  sub?: React.ReactNode;
  /** Usually a single <Button size="lg">. */
  action?: React.ReactNode;
  /** Short proof lines, each prefixed with a green check. */
  benefits?: string[];
}
export function CtaBand(props: CtaBandProps): JSX.Element;
