/**
 * Topic pill — "DSA", "System Design", "DevOps", "Gen AI". 8px/16px padding, pill radius.
 */
export interface TagProps {
  /** 'cyan' on dark surfaces, 'neutral' for quieter meta, 'ink' on tint sections. Default 'cyan'. */
  tone?: 'cyan' | 'neutral' | 'ink';
  children?: React.ReactNode;
}
export function Tag(props: TagProps): JSX.Element;
