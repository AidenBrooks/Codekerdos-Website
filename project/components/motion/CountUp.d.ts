/**
 * Counts a figure from 0 on scroll-into-view, 1.2s ease-out, once per mount.
 */
export interface CountUpProps {
  /** Target number. */
  to: number;
  /** e.g. "₹". */
  prefix?: string;
  /** e.g. "%", "+", "L". */
  suffix?: string;
  /** ms, default 1200. */
  duration?: number;
}
export function CountUp(props: CountUpProps): JSX.Element;
