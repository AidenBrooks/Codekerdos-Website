/**
 * Infinite horizontal strip of hiring-partner names, edge-masked. Wordmarks are set in Public Sans;
 * swap the children for real partner PNGs when they are available.
 */
export interface LogoMarqueeProps {
  /** Partner names, e.g. ['Microsoft','Amazon','Meta','Zomato']. */
  names?: string[];
  /** Seconds for a full loop. Default 28. */
  speed?: number;
}
export function LogoMarquee(props: LogoMarqueeProps): JSX.Element;
