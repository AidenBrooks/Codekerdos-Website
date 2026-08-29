/**
 * Alumni quote on a rotating section tint. Cycle the tint across a grid: cyan, teal, orange, neutral.
 * @startingPoint section="Cards" subtitle="Alumni quote card on rotating section tints" viewport="700x300"
 */
export interface TestimonialCardProps {
  quote: string;
  name: string;
  /** One-line result, e.g. "SDE at Microsoft". */
  outcome?: string;
  avatar?: string;
  tint?: 'cyan' | 'teal' | 'orange' | 'neutral';
}
export function TestimonialCard(props: TestimonialCardProps): JSX.Element;
