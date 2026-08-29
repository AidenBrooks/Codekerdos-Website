/**
 * The hero graphic frame: cyan-to-teal gradient panel with a radial glow breathing behind it
 * (opacity 0.6 to 1, 4s, infinite). The one recurring motion move of the brand.
 * @startingPoint section="Motion" subtitle="Hero orb with the breathing cyan glow" viewport="700x400"
 */
export interface GlowOrbProps {
  /** Square side in px. Default 380. */
  size?: number;
  /** Put the hero screenshot or illustration inside. */
  children?: React.ReactNode;
}
export function GlowOrb(props: GlowOrbProps): JSX.Element;
