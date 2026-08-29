/**
 * One beat of a numbered story sequence: big cyan numeral, H3, one paragraph,
 * and a framed visual panel that alternates sides down the page.
 */
export interface ProcessStepProps {
  n: number;
  title: React.ReactNode;
  body: React.ReactNode;
  /** true puts the visual on the left. Alternate down the sequence. */
  flip?: boolean;
  /** Screenshot, mock UI, or illustration for the framed panel. */
  visual?: React.ReactNode;
}
export function ProcessStep(props: ProcessStepProps): JSX.Element;
