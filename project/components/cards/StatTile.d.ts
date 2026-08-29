/**
 * A single outcome figure with one supporting line. Figure takes the gradient text fill.
 * @startingPoint section="Cards" subtitle="Gradient outcome figures with supporting copy" viewport="700x200"
 */
export interface StatTileProps {
  /** e.g. "92%", "40+" — already formatted. */
  value: React.ReactNode;
  label: React.ReactNode;
  onTint?: boolean;
}
export function StatTile(props: StatTileProps): JSX.Element;
