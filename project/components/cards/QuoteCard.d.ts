/**
 * Endorsement card on dark: cyan quote glyph, display-weight quote, attribution row
 * with avatar and the company wordmark right-aligned. Use `size="lg"` for a featured quote.
 */
export interface QuoteCardProps {
  quote: React.ReactNode;
  name: string;
  role?: string;
  /** Company wordmark, right-aligned in the attribution row. */
  company?: string;
  avatar?: string;
  size?: 'md' | 'lg';
}
export function QuoteCard(props: QuoteCardProps): JSX.Element;
