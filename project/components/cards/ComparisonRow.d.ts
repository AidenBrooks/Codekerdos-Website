/**
 * One row of the "How CodeKerdos Compares" table. Green check + white text on our side; muted on theirs.
 * @startingPoint section="Cards" subtitle="Us-vs-others comparison rows" viewport="700x220"
 */
export interface ComparisonRowProps {
  /** Dimension being compared, e.g. "Course Duration". */
  label: React.ReactNode;
  /** CodeKerdos value. */
  ours: React.ReactNode;
  /** "Others" value. */
  theirs: React.ReactNode;
}
export function ComparisonRow(props: ComparisonRowProps): JSX.Element;
