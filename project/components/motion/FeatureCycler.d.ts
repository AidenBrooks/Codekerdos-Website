/**
 * Vertical label list where the active item bolds and a connector line draws to a live preview card.
 * Auto-advances every 4s, pauses on hover, clickable.
 * @startingPoint section="Motion" subtitle="Auto-cycling feature list with live preview" viewport="700x300"
 */
export interface FeatureCyclerItem { label: string; body: string }
export interface FeatureCyclerProps {
  items?: FeatureCyclerItem[];
  /** ms between advances. Default 4000. */
  interval?: number;
}
export function FeatureCycler(props: FeatureCyclerProps): JSX.Element;
