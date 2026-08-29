/**
 * Sticky translucent top nav: logo left, centred text links, Login button right.
 * @startingPoint section="Layout" subtitle="Sticky translucent top navigation" viewport="1280x88"
 */
export interface NavBarLink { label: string; href?: string; id?: string }
export interface NavBarProps {
  /** URL of the full CodeKerdos logo (assets/codekerdos-logo-full.jpeg). */
  logo?: string;
  links?: NavBarLink[];
  active?: string;
  onNavigate?: (id: string) => void;
}
export function NavBar(props: NavBarProps): JSX.Element;
