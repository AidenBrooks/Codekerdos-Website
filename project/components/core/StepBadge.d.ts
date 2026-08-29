/**
 * 52x52 numbered badge for story beats ("01 Live Classes + Recordings", journey steps).
 * @startingPoint section="Core" subtitle="Numbered story-beat badges, active + inactive" viewport="700x140"
 */
export interface StepBadgeProps {
  /** Step number; rendered zero-padded to two digits. */
  n: number;
  /** Active step takes the cyan-to-teal gradient fill. */
  active?: boolean;
}
export function StepBadge(props: StepBadgeProps): JSX.Element;
