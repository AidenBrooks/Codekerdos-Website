/**
 * Mentor tile for "Guided by Experts": round photo, name, current role at their company.
 * @startingPoint section="Cards" subtitle="Mentor tiles with photo, name, current role" viewport="700x280"
 */
export interface MentorCardProps {
  name: string;
  /** Verbatim from the roster, e.g. "CTO at Codekerdos & SDE-2 at Amazon". */
  role: string;
  photo?: string;
  linkedin?: string;
}
export function MentorCard(props: MentorCardProps): JSX.Element;
