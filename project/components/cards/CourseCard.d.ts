/**
 * A featured-course card: meta pills, title, 2-line clamp, topic tags, instructor row, Explore link.
 * @startingPoint section="Cards" subtitle="Featured-course card with instructor row" viewport="700x400"
 */
export interface CourseCardProps {
  title: string;
  description: string;
  /** e.g. "5 Months" */
  duration?: string;
  /** e.g. "1,500+" */
  learners?: string;
  /** e.g. "4.9" */
  rating?: string;
  /** e.g. "1,200" */
  ratingCount?: string;
  tags?: string[];
  instructor?: string;
  instructorRole?: string;
  instructorAvatar?: string;
  href?: string;
}
export function CourseCard(props: CourseCardProps): JSX.Element;
