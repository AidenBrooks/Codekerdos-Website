/**
 * Numbered "Why you should choose us?" card: step badge, title (+ optional LIVE pill), one paragraph.
 * @startingPoint section="Cards" subtitle="Numbered reason-to-believe cards" viewport="700x280"
 */
export interface FeatureCardProps {
  n: number;
  title: React.ReactNode;
  body: React.ReactNode;
  /** Shows the green LIVE pill beside the title. */
  live?: boolean;
  active?: boolean;
}
export function FeatureCard(props: FeatureCardProps): JSX.Element;
