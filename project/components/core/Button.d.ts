import * as React from 'react';

/**
 * CodeKerdos pill button. Primary is the cyan-to-blue gradient with a glow shadow;
 * tertiary (solid white) is the max-contrast option on the black hero.
 * @startingPoint section="Core" subtitle="Pill buttons: gradient, outline, white, text link" viewport="700x160"
 */
export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  /** Visual treatment. Default 'primary'. */
  variant?: 'primary' | 'secondary' | 'tertiary' | 'link';
  /** Default 'md'. */
  size?: 'sm' | 'md' | 'lg';
  /** Renders an <a> instead of a <button>. */
  href?: string;
  /** Trailing glyph, e.g. an arrow. */
  icon?: React.ReactNode;
  disabled?: boolean;
  children?: React.ReactNode;
}
export function Button(props: ButtonProps): JSX.Element;
