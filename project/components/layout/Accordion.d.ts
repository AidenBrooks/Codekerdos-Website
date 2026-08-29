/**
 * FAQ accordion. Single-open, plus-to-cross toggle in cyan.
 * @startingPoint section="Layout" subtitle="Single-open FAQ accordion" viewport="700x300"
 */
export interface AccordionItem { q: string; a: string }
export interface AccordionProps {
  items?: AccordionItem[];
  onTint?: boolean;
}
export function Accordion(props: AccordionProps): JSX.Element;
