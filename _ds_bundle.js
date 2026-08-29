/* @ds-bundle: {"format":4,"namespace":"CodeKerdosDesignSystem_68bc71","components":[{"name":"ComparisonRow","sourcePath":"components/cards/ComparisonRow.jsx"},{"name":"CourseCard","sourcePath":"components/cards/CourseCard.jsx"},{"name":"FeatureCard","sourcePath":"components/cards/FeatureCard.jsx"},{"name":"MentorCard","sourcePath":"components/cards/MentorCard.jsx"},{"name":"ProcessStep","sourcePath":"components/cards/ProcessStep.jsx"},{"name":"QuoteCard","sourcePath":"components/cards/QuoteCard.jsx"},{"name":"StatTile","sourcePath":"components/cards/StatTile.jsx"},{"name":"TestimonialCard","sourcePath":"components/cards/TestimonialCard.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"StatusPill","sourcePath":"components/core/StatusPill.jsx"},{"name":"StepBadge","sourcePath":"components/core/StepBadge.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Accordion","sourcePath":"components/layout/Accordion.jsx"},{"name":"CtaBand","sourcePath":"components/layout/CtaBand.jsx"},{"name":"Footer","sourcePath":"components/layout/Footer.jsx"},{"name":"NavBar","sourcePath":"components/layout/NavBar.jsx"},{"name":"SectionBand","sourcePath":"components/layout/SectionBand.jsx"},{"name":"CountUp","sourcePath":"components/motion/CountUp.jsx"},{"name":"FeatureCycler","sourcePath":"components/motion/FeatureCycler.jsx"},{"name":"GlowOrb","sourcePath":"components/motion/GlowOrb.jsx"},{"name":"LogoMarquee","sourcePath":"components/motion/LogoMarquee.jsx"},{"name":"Reveal","sourcePath":"components/motion/Reveal.jsx"}],"sourceHashes":{"components/cards/ComparisonRow.jsx":"386fb94e328d","components/cards/CourseCard.jsx":"22f3208458e3","components/cards/FeatureCard.jsx":"18cd3857c68f","components/cards/MentorCard.jsx":"9ad2c80337c9","components/cards/ProcessStep.jsx":"8db7dd9edceb","components/cards/QuoteCard.jsx":"c97e62be7729","components/cards/StatTile.jsx":"e46605c52810","components/cards/TestimonialCard.jsx":"5e30a4ce0e7b","components/core/Button.jsx":"557cf6f741e7","components/core/Eyebrow.jsx":"fdac6321d7e3","components/core/SectionHeading.jsx":"671ae1d1300e","components/core/StatusPill.jsx":"c34d0624a47e","components/core/StepBadge.jsx":"be8c1a9ee443","components/core/Tag.jsx":"3b338a3169a0","components/layout/Accordion.jsx":"9c8ce96a797e","components/layout/CtaBand.jsx":"914de619ff68","components/layout/Footer.jsx":"2dbf7eb912bf","components/layout/NavBar.jsx":"5e2e5527b760","components/layout/SectionBand.jsx":"37d0dd0972d6","components/motion/CountUp.jsx":"647e8f7a98c7","components/motion/FeatureCycler.jsx":"d58f0440011b","components/motion/GlowOrb.jsx":"0e5a64c4300f","components/motion/LogoMarquee.jsx":"2836da1084d4","components/motion/Reveal.jsx":"d44cee22c1ba","image-slot.js":"fff26d081c8d","ui_kits/ck-website/image-slot.js":"fff26d081c8d","ui_kits/homepage/Hero.jsx":"d365316e9b89","ui_kits/homepage/Programs.jsx":"df6128bd400e","ui_kits/homepage/Proof.jsx":"38b9d3c0364b","ui_kits/homepage/data.js":"8d810f65e5ef","ui_kits/website-redesign/Mocks.jsx":"678e8d796fc9","ui_kits/website-redesign/RedesignHomeScreen.jsx":"589e0b64de94","ui_kits/website/ContactScreen.jsx":"c95c6aeb464d","ui_kits/website/CourseScreen.jsx":"f503a47e0a53","ui_kits/website/HomeScreen.jsx":"f36738e9e39c","ui_kits/website/data.js":"8d810f65e5ef"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CodeKerdosDesignSystem_68bc71 = window.CodeKerdosDesignSystem_68bc71 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/cards/ComparisonRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ComparisonRow({
  label,
  ours,
  theirs,
  style,
  ...rest
}) {
  const cell = {
    font: 'var(--type-body)',
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--ck-space-2)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr 1fr 1fr',
      gap: 'var(--ck-space-4)',
      alignItems: 'center',
      padding: '20px var(--ck-space-4)',
      borderRadius: 'var(--ck-radius-card)',
      background: 'var(--ck-elevated)',
      border: '1px solid var(--ck-border)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      ...cell,
      fontWeight: 600,
      color: 'var(--ck-white)',
      fontSize: 15
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      ...cell,
      color: 'var(--ck-white)',
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 20,
      height: 20,
      borderRadius: 999,
      flex: '0 0 auto',
      background: 'var(--ck-success)',
      color: 'var(--ck-success-ink)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 12,
      fontWeight: 700
    }
  }, "\u2713"), ours), /*#__PURE__*/React.createElement("div", {
    style: {
      ...cell,
      color: 'var(--ck-muted)'
    }
  }, theirs));
}
Object.assign(__ds_scope, { ComparisonRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ComparisonRow.jsx", error: String((e && e.message) || e) }); }

// components/cards/MentorCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function MentorCard({
  name,
  role,
  photo,
  linkedin,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--ck-space-3)',
      padding: 'var(--ck-space-4)',
      borderRadius: 'var(--ck-radius-card)',
      background: 'var(--ck-elevated)',
      border: '1px solid var(--ck-border)',
      boxShadow: hover ? 'var(--ck-shadow-card-hover)' : 'none',
      transform: hover ? 'translateY(var(--ck-lift))' : 'none',
      transition: 'all var(--ck-dur-hover) var(--ck-ease-out)',
      textAlign: 'center',
      alignItems: 'center',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 84,
      height: 84,
      borderRadius: 999,
      background: photo ? 'center/cover no-repeat url(' + photo + ')' : 'var(--ck-grad-orb)',
      border: '2px solid var(--ck-border-strong)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 16,
      fontWeight: 600,
      color: 'var(--ck-white)'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--ck-muted)',
      textWrap: 'pretty'
    }
  }, role)), linkedin ? /*#__PURE__*/React.createElement("a", {
    href: linkedin,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--ck-cyan)',
      textDecoration: 'none',
      letterSpacing: '0.4px'
    }
  }, "LinkedIn") : null);
}
Object.assign(__ds_scope, { MentorCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/MentorCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/ProcessStep.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ProcessStep({
  n,
  title,
  body,
  flip = false,
  visual,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--ck-space-6)',
      alignItems: 'center',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      order: flip ? 2 : 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--ck-space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 15,
      letterSpacing: '1.6px',
      color: 'var(--ck-cyan)'
    }
  }, String(n).padStart(2, '0')), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--ck-h3-size)',
      lineHeight: 'var(--ck-h3-lh)',
      letterSpacing: 'var(--ck-h3-track)',
      color: 'var(--ck-white)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--type-body-lg)',
      color: 'var(--ck-muted)',
      maxWidth: 460,
      textWrap: 'pretty'
    }
  }, body)), /*#__PURE__*/React.createElement("div", {
    style: {
      order: flip ? 1 : 2,
      minHeight: 260,
      borderRadius: 'var(--ck-radius-orb)',
      background: 'var(--ck-elevated)',
      border: '1px solid var(--ck-border)',
      padding: 'var(--ck-space-4)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: '-40% -20% auto auto',
      width: 320,
      height: 320,
      background: 'var(--ck-glow-radial)',
      opacity: 0.5,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%'
    }
  }, visual)));
}
Object.assign(__ds_scope, { ProcessStep });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ProcessStep.jsx", error: String((e && e.message) || e) }); }

// components/cards/QuoteCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function QuoteCard({
  quote,
  name,
  role,
  company,
  avatar,
  size = 'md',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const big = size === 'lg';
  return /*#__PURE__*/React.createElement("figure", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--ck-space-4)',
      padding: big ? 'var(--ck-space-5)' : 'var(--ck-card-padding)',
      borderRadius: 'var(--ck-radius-card)',
      background: 'var(--ck-elevated)',
      border: '1px solid ' + (hover ? 'var(--ck-border-strong)' : 'var(--ck-border)'),
      boxShadow: hover ? 'var(--ck-shadow-card-hover)' : 'var(--ck-shadow-card)',
      transform: hover ? 'translateY(var(--ck-lift))' : 'none',
      transition: 'all var(--ck-dur-hover) var(--ck-ease-out)',
      height: '100%',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: big ? 56 : 40,
      lineHeight: 0.6,
      color: 'var(--ck-cyan)',
      height: big ? 30 : 22
    }
  }, "\u201C"), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: big ? 24 : 18,
      lineHeight: 1.45,
      letterSpacing: big ? '-0.4px' : '-0.1px',
      color: 'var(--ck-white)',
      textWrap: 'pretty',
      flex: 1
    }
  }, quote), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--ck-space-3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: big ? 48 : 40,
      height: big ? 48 : 40,
      borderRadius: 999,
      flex: '0 0 auto',
      background: avatar ? 'center/cover no-repeat url(' + avatar + ')' : 'var(--ck-grad-orb)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      fontWeight: 700,
      color: 'var(--ck-white)'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--ck-muted)'
    }
  }, role)), company ? /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 14,
      letterSpacing: '-0.3px',
      color: 'var(--ck-muted)',
      opacity: 0.8,
      whiteSpace: 'nowrap'
    }
  }, company) : null));
}
Object.assign(__ds_scope, { QuoteCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/QuoteCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/StatTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StatTile({
  value,
  label,
  onTint = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--ck-space-2)',
      padding: 'var(--ck-space-4)',
      borderRadius: 'var(--ck-radius-card)',
      background: onTint ? 'rgba(255,255,255,0.6)' : 'var(--ck-elevated)',
      border: onTint ? '1px solid rgba(11,15,26,0.08)' : '1px solid var(--ck-border)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 44,
      lineHeight: 1,
      letterSpacing: '-1.2px',
      background: 'var(--ck-grad-text)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      color: 'var(--ck-cyan)'
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body)',
      color: onTint ? 'var(--ck-ink-muted)' : 'var(--ck-muted)'
    }
  }, label));
}
Object.assign(__ds_scope, { StatTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/StatTile.jsx", error: String((e && e.message) || e) }); }

// components/cards/TestimonialCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tints = {
  cyan: 'var(--ck-tint-cyan)',
  teal: 'var(--ck-tint-teal)',
  orange: 'var(--ck-tint-orange)',
  neutral: 'var(--ck-tint-neutral)'
};
function TestimonialCard({
  quote,
  name,
  outcome,
  avatar,
  tint = 'cyan',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("figure", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--ck-space-3)',
      padding: 'var(--ck-card-padding)',
      borderRadius: 'var(--ck-radius-card)',
      background: tints[tint] || tints.cyan,
      border: '1px solid rgba(11,15,26,0.06)',
      boxShadow: hover ? 'var(--ck-shadow-tint-card-hover)' : 'var(--ck-shadow-tint-card)',
      transform: hover ? 'translateY(var(--ck-lift))' : 'none',
      transition: 'transform var(--ck-dur-hover) var(--ck-ease-out), box-shadow var(--ck-dur-hover) var(--ck-ease-out)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 44,
      lineHeight: 0.6,
      color: 'var(--ck-teal-deep)',
      opacity: 0.35,
      height: 24
    }
  }, "\u201C"), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      font: 'var(--type-body-lg)',
      color: 'var(--ck-ink)',
      textWrap: 'pretty'
    }
  }, quote), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--ck-space-3)',
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 999,
      flex: '0 0 auto',
      background: avatar ? 'center/cover no-repeat url(' + avatar + ')' : 'var(--ck-grad-orb)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      fontWeight: 700,
      color: 'var(--ck-ink)'
    }
  }, name), outcome ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--ck-ink-muted)'
    }
  }, outcome) : null)));
}
Object.assign(__ds_scope, { TestimonialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/TestimonialCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 'var(--ck-space-2)',
  fontFamily: 'var(--font-body)',
  fontWeight: 600,
  letterSpacing: '0.1px',
  borderRadius: 'var(--ck-radius-pill)',
  cursor: 'pointer',
  border: 'none',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  transition: 'transform var(--ck-dur-hover) var(--ck-ease-out), box-shadow var(--ck-dur-hover) var(--ck-ease-out), background var(--ck-dur-hover) var(--ck-ease-out)'
};
const sizes = {
  sm: {
    fontSize: 13,
    padding: '9px 18px'
  },
  md: {
    fontSize: 15,
    padding: '13px 26px'
  },
  lg: {
    fontSize: 16,
    padding: '16px 34px'
  }
};
const variants = {
  primary: {
    background: 'var(--ck-grad-button)',
    color: 'var(--ck-white)',
    boxShadow: 'var(--ck-shadow-glow)'
  },
  secondary: {
    background: 'transparent',
    color: 'var(--ck-white)',
    boxShadow: 'inset 0 0 0 var(--ck-border-width-strong) var(--ck-outline)'
  },
  tertiary: {
    background: 'var(--ck-white)',
    color: 'var(--ck-ink)'
  },
  link: {
    background: 'transparent',
    color: 'var(--ck-cyan)',
    padding: 0,
    boxShadow: 'none'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  href,
  icon,
  disabled,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const v = variants[variant] || variants.primary;
  const s = {
    ...base,
    ...(variant === 'link' ? {
      fontSize: sizes[size].fontSize
    } : sizes[size]),
    ...v,
    ...(hover && !disabled && variant === 'primary' ? {
      boxShadow: 'var(--ck-shadow-glow-strong)',
      transform: 'translateY(-2px)'
    } : null),
    ...(hover && !disabled && variant === 'secondary' ? {
      boxShadow: 'inset 0 0 0 var(--ck-border-width-strong) var(--ck-cyan)'
    } : null),
    ...(hover && !disabled && variant === 'tertiary' ? {
      transform: 'translateY(-2px)'
    } : null),
    ...(hover && !disabled && variant === 'link' ? {
      opacity: 0.75
    } : null),
    ...(disabled ? {
      opacity: 0.4,
      cursor: 'not-allowed',
      boxShadow: 'none'
    } : null),
    ...style
  };
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    disabled: !href && disabled ? true : undefined,
    style: s,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), children, icon ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontSize: '1.05em',
      lineHeight: 1
    }
  }, icon) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Eyebrow({
  children,
  tone = 'cyan',
  style,
  ...rest
}) {
  const colors = {
    cyan: 'var(--ck-cyan)',
    muted: 'var(--ck-muted)',
    ink: 'var(--ck-ink-muted)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--ck-eyebrow-weight)',
      fontSize: 'var(--ck-eyebrow-size)',
      letterSpacing: 'var(--ck-eyebrow-track)',
      textTransform: 'uppercase',
      color: colors[tone] || colors.cyan,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionHeading({
  eyebrow,
  title,
  sub,
  align = 'left',
  onTint = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--ck-space-3)',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align === 'center' ? 'center' : 'left',
      maxWidth: align === 'center' ? 680 : 760,
      ...style
    }
  }, rest), eyebrow ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 'var(--ck-eyebrow-size)',
      letterSpacing: 'var(--ck-eyebrow-track)',
      textTransform: 'uppercase',
      color: onTint ? 'var(--ck-teal-deep)' : 'var(--ck-cyan)'
    }
  }, eyebrow) : null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--ck-h2-weight)',
      fontSize: 'var(--ck-h2-size)',
      lineHeight: 'var(--ck-h2-lh)',
      letterSpacing: 'var(--ck-h2-track)',
      color: onTint ? 'var(--ck-ink)' : 'var(--ck-white)',
      textWrap: 'pretty'
    }
  }, title), sub ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--type-body-lg)',
      color: onTint ? 'var(--ck-ink-muted)' : 'var(--ck-muted)',
      textWrap: 'pretty'
    }
  }, sub) : null);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/StatusPill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StatusPill({
  children = 'LIVE',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '4px 10px',
      borderRadius: 'var(--ck-radius-pill)',
      background: 'var(--ck-success)',
      color: 'var(--ck-success-ink)',
      fontFamily: 'var(--font-body)',
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: 'var(--ck-eyebrow-track)',
      textTransform: 'uppercase',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      borderRadius: 999,
      background: 'var(--ck-success-ink)'
    }
  }), children);
}
Object.assign(__ds_scope, { StatusPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatusPill.jsx", error: String((e && e.message) || e) }); }

// components/core/StepBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StepBadge({
  n,
  active = false,
  style,
  ...rest
}) {
  const label = String(n).padStart(2, '0');
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: 52,
      height: 52,
      borderRadius: 'var(--ck-radius-step)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 18,
      letterSpacing: '-0.3px',
      background: active ? 'var(--ck-grad-orb)' : 'var(--ck-elevated)',
      border: active ? '1px solid transparent' : '1px solid var(--ck-border)',
      color: active ? 'var(--ck-white)' : 'var(--ck-muted)',
      boxShadow: active ? 'var(--ck-shadow-glow)' : 'none',
      transition: 'all var(--ck-dur-hover) var(--ck-ease-out)',
      flex: '0 0 auto',
      ...style
    }
  }, rest), label);
}
Object.assign(__ds_scope, { StepBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StepBadge.jsx", error: String((e && e.message) || e) }); }

// components/cards/FeatureCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function FeatureCard({
  n,
  title,
  body,
  live = false,
  active = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--ck-space-3)',
      padding: 'var(--ck-card-padding)',
      borderRadius: 'var(--ck-radius-card)',
      background: 'var(--ck-elevated)',
      border: '1px solid ' + (active || hover ? 'var(--ck-border-strong)' : 'var(--ck-border)'),
      transform: hover ? 'translateY(var(--ck-lift))' : 'none',
      transition: 'all var(--ck-dur-hover) var(--ck-ease-out)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.StepBadge, {
    n: n,
    active: active || hover
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--ck-space-2)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--ck-h4-size)',
      color: 'var(--ck-white)'
    }
  }, title), live ? /*#__PURE__*/React.createElement(__ds_scope.StatusPill, null, "Live") : null), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--type-body)',
      color: 'var(--ck-muted)',
      textWrap: 'pretty'
    }
  }, body));
}
Object.assign(__ds_scope, { FeatureCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/FeatureCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  children,
  tone = 'cyan',
  style,
  ...rest
}) {
  const tones = {
    cyan: {
      background: 'var(--ck-veil-cyan)',
      border: '1px solid var(--ck-border-strong)',
      color: 'var(--ck-cyan)'
    },
    neutral: {
      background: 'var(--ck-veil-white)',
      border: '1px solid var(--ck-border)',
      color: 'var(--ck-muted)'
    },
    ink: {
      background: 'var(--ck-veil-ink)',
      border: '1px solid rgba(11,15,26,0.10)',
      color: 'var(--ck-ink)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--ck-space-1)',
      padding: '8px 16px',
      borderRadius: 'var(--ck-radius-pill)',
      font: 'var(--type-body)',
      fontSize: 13,
      fontWeight: 500,
      ...(tones[tone] || tones.cyan),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/cards/CourseCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function CourseCard({
  title,
  description,
  duration,
  learners,
  rating,
  ratingCount,
  tags = [],
  instructor,
  instructorRole,
  instructorAvatar,
  href = '#',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const meta = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    padding: '6px 12px',
    borderRadius: 'var(--ck-radius-chip)',
    background: 'var(--ck-veil-white)',
    border: '1px solid var(--ck-border)',
    color: 'var(--ck-muted)',
    fontFamily: 'var(--font-body)',
    fontSize: 12,
    fontWeight: 500
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--ck-space-3)',
      padding: 'var(--ck-card-padding)',
      borderRadius: 'var(--ck-radius-card)',
      background: 'var(--ck-elevated)',
      border: '1px solid var(--ck-border)',
      boxShadow: hover ? 'var(--ck-shadow-card-hover)' : 'var(--ck-shadow-card)',
      transform: hover ? 'translateY(var(--ck-lift))' : 'none',
      transition: 'transform var(--ck-dur-hover) var(--ck-ease-out), box-shadow var(--ck-dur-hover) var(--ck-ease-out)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--ck-space-2)',
      alignItems: 'center'
    }
  }, duration ? /*#__PURE__*/React.createElement("span", {
    style: meta
  }, duration) : null, learners ? /*#__PURE__*/React.createElement("span", {
    style: meta
  }, learners, " learners") : null, rating ? /*#__PURE__*/React.createElement("span", {
    style: {
      ...meta,
      color: 'var(--ck-cyan)',
      background: 'var(--ck-veil-cyan)',
      borderColor: 'var(--ck-border-strong)'
    }
  }, rating, ratingCount ? ' (' + ratingCount + ')' : '') : null), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--ck-h4-weight)',
      fontSize: 'var(--ck-h4-size)',
      lineHeight: 1.3,
      letterSpacing: '-0.1px',
      color: 'var(--ck-white)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--type-body)',
      color: 'var(--ck-muted)',
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden'
    }
  }, description), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--ck-space-2)'
    }
  }, tags.map(t => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: t
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--ck-border)',
      margin: '4px 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--ck-space-3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 999,
      flex: '0 0 auto',
      background: instructorAvatar ? 'center/cover no-repeat url(' + instructorAvatar + ')' : 'var(--ck-grad-orb)',
      border: '1px solid var(--ck-border-strong)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--ck-white)'
    }
  }, instructor), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: 'var(--ck-muted)'
    }
  }, instructorRole || 'Instructor')), /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--ck-cyan)',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      whiteSpace: 'nowrap'
    }
  }, "Explore ", /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      transform: hover ? 'translateX(3px)' : 'none',
      transition: 'transform var(--ck-dur-hover) var(--ck-ease-out)'
    }
  }, "\u2192"))));
}
Object.assign(__ds_scope, { CourseCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/CourseCard.jsx", error: String((e && e.message) || e) }); }

// components/layout/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Accordion({
  items = [],
  onTint = false,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(0);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--ck-space-2)',
      ...style
    }
  }, rest), items.map((it, i) => {
    const isOpen = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: it.q,
      style: {
        borderRadius: 'var(--ck-radius-card)',
        background: onTint ? 'rgba(255,255,255,0.7)' : 'var(--ck-elevated)',
        border: '1px solid ' + (onTint ? 'rgba(11,15,26,0.08)' : isOpen ? 'var(--ck-border-strong)' : 'var(--ck-border)'),
        overflow: 'hidden',
        transition: 'border-color var(--ck-dur-hover) var(--ck-ease-out)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(isOpen ? -1 : i),
      style: {
        appearance: 'none',
        width: '100%',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        padding: '20px var(--ck-space-4)',
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--ck-space-3)',
        textAlign: 'left',
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 17,
        color: onTint ? 'var(--ck-ink)' : 'var(--ck-white)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, it.q), /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        color: 'var(--ck-cyan)',
        fontSize: 20,
        lineHeight: 1,
        transform: isOpen ? 'rotate(45deg)' : 'none',
        transition: 'transform var(--ck-dur-hover) var(--ck-ease-out)'
      }
    }, "+")), isOpen ? /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '0 var(--ck-space-4) 20px',
        font: 'var(--type-body)',
        color: onTint ? 'var(--ck-ink-muted)' : 'var(--ck-muted)',
        textWrap: 'pretty'
      }
    }, it.a) : null);
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/layout/CtaBand.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function CtaBand({
  eyebrow,
  title,
  emphasis,
  sub,
  action,
  benefits = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 'var(--ck-radius-orb)',
      background: 'var(--ck-elevated)',
      border: '1px solid var(--ck-border-strong)',
      padding: 'var(--ck-space-6) var(--ck-space-5)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: '50%',
      bottom: '-45%',
      width: 720,
      height: 720,
      transform: 'translateX(-50%)',
      background: 'var(--ck-glow-radial)',
      animation: 'ck-glow-pulse var(--ck-dur-pulse) var(--ck-ease-in-out) infinite',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 760,
      margin: '0 auto',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--ck-space-4)',
      alignItems: 'center'
    }
  }, eyebrow ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 'var(--ck-eyebrow-size)',
      letterSpacing: 'var(--ck-eyebrow-track)',
      textTransform: 'uppercase',
      color: 'var(--ck-cyan)'
    }
  }, eyebrow) : null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 48,
      lineHeight: 1.06,
      letterSpacing: '-1.2px',
      color: 'var(--ck-white)',
      textWrap: 'balance'
    }
  }, title, emphasis ? /*#__PURE__*/React.createElement(React.Fragment, null, ' ', /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'var(--ck-grad-text)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    }
  }, emphasis)) : null), action, sub ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--type-body-lg)',
      color: 'var(--ck-muted)',
      maxWidth: 560,
      textWrap: 'pretty'
    }
  }, sub) : null, benefits.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--ck-space-5)',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginTop: 'var(--ck-space-2)'
    }
  }, benefits.map(b => /*#__PURE__*/React.createElement("span", {
    key: b,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--ck-space-2)',
      font: 'var(--type-body)',
      color: 'var(--ck-white)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: 'var(--ck-success)',
      fontWeight: 700
    }
  }, "\u2713"), b))) : null));
}
Object.assign(__ds_scope, { CtaBand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/CtaBand.jsx", error: String((e && e.message) || e) }); }

// components/layout/Footer.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Footer({
  logo,
  columns = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: {
      background: 'var(--ck-void)',
      borderTop: '1px solid var(--ck-border)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--ck-container)',
      margin: '0 auto',
      padding: 'var(--ck-space-6) var(--ck-space-5) var(--ck-space-5)',
      display: 'grid',
      gridTemplateColumns: '1.4fr repeat(3, 1fr)',
      gap: 'var(--ck-space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--ck-space-3)'
    }
  }, logo ? /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: "CodeKerdos",
    style: {
      height: 34,
      alignSelf: 'flex-start'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 22,
      color: 'var(--ck-white)'
    }
  }, "CodeKerdos"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--type-body)',
      color: 'var(--ck-muted)',
      maxWidth: 300
    }
  }, "Join our newsletter to stay up to date on features and releases."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--ck-space-2)'
    }
  }, /*#__PURE__*/React.createElement("input", {
    placeholder: "Enter your email",
    style: {
      flex: 1,
      minWidth: 0,
      padding: '12px 16px',
      borderRadius: 'var(--ck-radius-pill)',
      background: 'var(--ck-elevated)',
      border: '1px solid var(--ck-border)',
      color: 'var(--ck-white)',
      font: 'var(--type-body)',
      outline: 'none'
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm"
  }, "Submit"))), columns.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.title,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--ck-space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--ck-eyebrow-size)',
      fontWeight: 700,
      letterSpacing: 'var(--ck-eyebrow-track)',
      textTransform: 'uppercase',
      color: 'var(--ck-white)'
    }
  }, col.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--ck-space-2)'
    }
  }, col.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      font: 'var(--type-body)',
      color: 'var(--ck-muted)',
      textDecoration: 'none'
    }
  }, l)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--ck-container)',
      margin: '0 auto',
      padding: 'var(--ck-space-4) var(--ck-space-5)',
      borderTop: '1px solid var(--ck-border)',
      display: 'flex',
      justifyContent: 'space-between',
      gap: 'var(--ck-space-4)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body)',
      fontSize: 13,
      color: 'var(--ck-muted)'
    }
  }, "\xA9 2025 Codekerdos. All rights reserved."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--ck-space-4)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      font: 'var(--type-body)',
      fontSize: 13,
      color: 'var(--ck-muted)',
      textDecoration: 'none'
    }
  }, "Privacy Policy"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      font: 'var(--type-body)',
      fontSize: 13,
      color: 'var(--ck-muted)',
      textDecoration: 'none'
    }
  }, "Terms and Conditions"))));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Footer.jsx", error: String((e && e.message) || e) }); }

// components/layout/NavBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function NavBar({
  logo,
  links = [],
  onNavigate,
  active,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: 'rgba(0,0,0,0.72)',
      backdropFilter: 'var(--ck-blur-nav)',
      WebkitBackdropFilter: 'var(--ck-blur-nav)',
      borderBottom: '1px solid var(--ck-border)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("nav", {
    style: {
      maxWidth: 'var(--ck-container)',
      margin: '0 auto',
      padding: '14px var(--ck-space-5)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--ck-space-5)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate('home');
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      flex: '0 0 auto'
    }
  }, logo ? /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: "CodeKerdos",
    style: {
      height: 30,
      display: 'block'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 20,
      letterSpacing: '-0.6px',
      color: 'var(--ck-white)'
    }
  }, "CodeKerdos")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--ck-space-4)',
      flex: 1,
      justifyContent: 'center'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: l.href || '#',
    onClick: e => {
      if (onNavigate) {
        e.preventDefault();
        onNavigate(l.id || l.label);
      }
    },
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      fontWeight: 500,
      textDecoration: 'none',
      color: active === (l.id || l.label) ? 'var(--ck-cyan)' : 'var(--ck-muted)',
      transition: 'color var(--ck-dur-hover) var(--ck-ease-out)',
      whiteSpace: 'nowrap'
    }
  }, l.label))), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: "secondary"
  }, "Login")));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/layout/SectionBand.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tints = {
  void: 'var(--ck-void)',
  surface: 'var(--ck-surface)',
  cyan: 'var(--ck-tint-cyan)',
  teal: 'var(--ck-tint-teal)',
  orange: 'var(--ck-tint-orange)',
  neutral: 'var(--ck-tint-neutral)'
};
function SectionBand({
  tone = 'surface',
  bleed = false,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      background: tints[tone] || tints.surface,
      position: 'relative',
      ...style
    }
  }, rest), bleed ? /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 120,
      background: 'linear-gradient(180deg, var(--ck-void) 0%, ' + (tints[tone] || tints.surface) + ' 100%)',
      pointerEvents: 'none'
    }
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--ck-container)',
      margin: '0 auto',
      padding: 'var(--ck-section-y) var(--ck-space-5)'
    }
  }, children));
}
Object.assign(__ds_scope, { SectionBand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SectionBand.jsx", error: String((e && e.message) || e) }); }

// components/motion/CountUp.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function CountUp({
  to,
  prefix = '',
  suffix = '',
  duration = 1200,
  style,
  ...rest
}) {
  const ref = React.useRef(null);
  const [val, setVal] = React.useState(0);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const run = () => {
      const t0 = performance.now();
      const step = now => {
        const p = Math.min(1, (now - t0) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        setVal(Math.round(to * eased));
        if (p < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    };
    if (typeof IntersectionObserver === 'undefined') {
      run();
      return;
    }
    const io = new IntersectionObserver(entries => {
      if (entries.some(e => e.isIntersecting)) {
        run();
        io.disconnect();
      }
    }, {
      threshold: 0.4
    });
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to, duration]);
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    style: style
  }, rest), prefix, val.toLocaleString('en-IN'), suffix);
}
Object.assign(__ds_scope, { CountUp });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/motion/CountUp.jsx", error: String((e && e.message) || e) }); }

// components/motion/FeatureCycler.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function FeatureCycler({
  items = [],
  interval = 4000,
  style,
  ...rest
}) {
  const [i, setI] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  React.useEffect(() => {
    if (paused || items.length < 2) return;
    const t = setInterval(() => setI(p => (p + 1) % items.length), interval);
    return () => clearInterval(t);
  }, [paused, items.length, interval]);
  const active = items[i] || {};
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setPaused(true),
    onMouseLeave: () => setPaused(false),
    style: {
      display: 'grid',
      gridTemplateColumns: '260px 1fr',
      gap: 'var(--ck-space-5)',
      alignItems: 'center',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--ck-space-2)'
    }
  }, items.map((it, idx) => /*#__PURE__*/React.createElement("button", {
    key: it.label,
    onClick: () => setI(idx),
    style: {
      appearance: 'none',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      textAlign: 'left',
      padding: '10px 0',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--ck-space-3)',
      fontFamily: 'var(--font-display)',
      fontSize: 18,
      fontWeight: idx === i ? 700 : 500,
      color: idx === i ? 'var(--ck-white)' : 'var(--ck-muted)',
      transition: 'color var(--ck-dur-hover) var(--ck-ease-out)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      height: 2,
      width: idx === i ? 28 : 12,
      background: idx === i ? 'var(--ck-cyan)' : 'var(--ck-border-strong)',
      transition: 'width var(--ck-dur-hover) var(--ck-ease-out), background var(--ck-dur-hover) var(--ck-ease-out)'
    }
  }), it.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--ck-radius-card)',
      background: 'var(--ck-elevated)',
      border: '1px solid var(--ck-border-strong)',
      padding: 'var(--ck-card-padding)',
      minHeight: 180,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--ck-space-2)',
      boxShadow: 'var(--ck-shadow-card)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--ck-eyebrow-size)',
      fontWeight: 700,
      letterSpacing: 'var(--ck-eyebrow-track)',
      textTransform: 'uppercase',
      color: 'var(--ck-cyan)'
    }
  }, active.label), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--type-body-lg)',
      color: 'var(--ck-muted)',
      textWrap: 'pretty'
    }
  }, active.body)));
}
Object.assign(__ds_scope, { FeatureCycler });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/motion/FeatureCycler.jsx", error: String((e && e.message) || e) }); }

// components/motion/GlowOrb.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function GlowOrb({
  size = 380,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      width: size,
      height: size,
      flex: '0 0 auto',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: '-30%',
      background: 'var(--ck-glow-radial)',
      animation: 'ck-glow-pulse var(--ck-dur-pulse) var(--ck-ease-in-out) infinite',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 'var(--ck-radius-orb)',
      background: 'var(--ck-grad-orb)',
      border: '1px solid var(--ck-border-strong)',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, children));
}
Object.assign(__ds_scope, { GlowOrb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/motion/GlowOrb.jsx", error: String((e && e.message) || e) }); }

// components/motion/LogoMarquee.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function LogoMarquee({
  names = [],
  speed = 28,
  style,
  ...rest
}) {
  const row = names.concat(names);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      overflow: 'hidden',
      position: 'relative',
      maskImage: 'linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)',
      WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--ck-space-6)',
      width: 'max-content',
      animation: 'ck-marquee ' + speed + 's linear infinite'
    }
  }, row.map((n, i) => /*#__PURE__*/React.createElement("span", {
    key: n + i,
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 20,
      fontWeight: 700,
      letterSpacing: '-0.4px',
      color: 'var(--ck-muted)',
      opacity: 0.7,
      whiteSpace: 'nowrap'
    }
  }, n))));
}
Object.assign(__ds_scope, { LogoMarquee });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/motion/LogoMarquee.jsx", error: String((e && e.message) || e) }); }

// components/motion/Reveal.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Reveal({
  children,
  delay = 0,
  style,
  ...rest
}) {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(entries => {
      if (entries.some(e => e.isIntersecting)) {
        setShown(true);
        io.disconnect();
      }
    }, {
      threshold: 0.15
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    style: {
      opacity: shown ? 1 : 0,
      transform: shown ? 'none' : 'translateY(24px)',
      transition: 'opacity var(--ck-dur-reveal) var(--ck-ease-out) ' + delay + 'ms, transform var(--ck-dur-reveal) var(--ck-ease-out) ' + delay + 'ms',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Reveal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/motion/Reveal.jsx", error: String((e && e.message) || e) }); }

// image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever a design needs an image.
 * You control the slot's shape; it sizes to its container by default. When the search_stock_photos tool
 * is available, prefill the slot by default — write the photo's URL into
 * src (with credit/credit-href); the user can still fill or replace it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The sidecar is a SIBLING of the HTML file that uses this component: the
 * read is a document-relative fetch, and the host resolves the bridge's
 * sidecar writes into the previewed file's directory to match (same
 * contract as design_canvas.jsx). Pages in the same directory share one
 * sidecar; keep slot ids distinct across them.
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          Initial framing baseline: cover | contain.   (default 'cover')
 *                cover starts the image filling the frame (overflow cropped);
 *                contain starts it fully visible (letterboxed). Either way the
 *                user can always pan/scale from there — double-click, or the
 *                Edit control, enters reframe mode (drag to move, scroll or
 *                corner-handles to scale; Escape / click-out commits). The
 *                crop persists alongside the image in the sidecar.
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. Prefill it with a real
 *                photo via search_stock_photos when that tool is available
 *                (set credit/credit-href from the result). A user drop
 *                overrides it; clearing the drop reveals src again.
 *   credit       Attribution text shown as a small overlay at the
 *                bottom-left of the filled slot. REQUIRED whenever src
 *                points at any Unsplash host (images.unsplash.com,
 *                plus.unsplash.com, …): an Unsplash src with no credit
 *                renders an error tile INSTEAD of the photo (Unsplash
 *                terms forbid showing their photos unattributed). Use the
 *                exact form 'Photo by {photographer name} on Unsplash' —
 *                the overlay then links the name to credit-href and
 *                'Unsplash' to the Unsplash homepage, and links back to
 *                unsplash.com automatically get the required utm referral
 *                params appended at render time. The credit belongs to
 *                the src image, so it only shows while src is what's
 *                displayed — a user-dropped image hides it.
 *   credit-href  Link for the photographer's name in the credit overlay
 *                (their Unsplash profile URL from the stock-photo search
 *                results). http(s) URLs only — anything else renders the
 *                name as plain text.
 *
 * Sizing: the slot fills its container by default (width/height 100%).
 * Put it in a sized wrapper — absolutely positioned, a grid cell, a fixed
 * frame — and it takes exactly that box. When the parent's height is
 * indefinite (ordinary flow), it falls back to full width at a 3:2 aspect
 * ratio instead of collapsing. In a shrink-to-fit parent (a float,
 * width:max-content, an unsized absolute wrapper), percentages have
 * nothing to resolve against — size the slot or its wrapper explicitly
 * there. For a fixed-size slot, set
 * width/height on the element itself (inline style), which overrides the
 * default. When
 * layering content above a slot (full-bleed layouts), make the overlay
 * click-through — pointer-events: none on scrims/text plates, re-enabled
 * on interactive children — so the slot's hover controls stay reachable.
 * Keep the slot's bottom-left corner visually clear as well: the credit
 * overlay renders there, and a dark fade or text plate covering it hides
 * the attribution Unsplash's terms require — end the fade above that
 * corner, or keep it nearly transparent where the credit sits.
 *
 * Usage:
 *   <div style="position:relative;width:100%;height:100%">      <!-- full-bleed: -->
 *     <image-slot id="bg" shape="rect"></image-slot>            <!-- fills the wrapper -->
 *   </div>
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';

  // Unsplash terms require visible attribution wherever their photos
  // display, and every link back to unsplash.com must carry utm referral
  // params. Two render-time rules enforce that here:
  //  - an Unsplash-src slot with NO credit attribute renders an error
  //    tile INSTEAD of the photo (an uncredited Unsplash photo on screen
  //    is itself the terms violation, so it never renders bare);
  //  - rendered credit links pointing at unsplash.com get the referral
  //    params appended when absent (credit-href values live in page
  //    content that can't be edited after the fact).
  // Keep the utm_source value in sync with UTM_SOURCE in
  // platform/web-agent/unsplash.ts — this file is a project-local
  // artifact and cannot import it (equality is pinned by tests).
  const UNSPLASH_HOMEPAGE_HREF = 'https://unsplash.com/?utm_source=claude_design&utm_medium=referral';
  // Host rule mirrors the hotlink validator that admits Unsplash srcs into
  // pages in the first place (cdn$ in unsplash.ts: apex or any subdomain)
  // — Unsplash+ results serve from plus.unsplash.com, not just images.*,
  // and an admitted-but-uncredited photo must error whatever unsplash
  // host it rides on.
  // Trailing-dot FQDNs (images.unsplash.com.) are the same host to the
  // browser but would miss the regex — strip one dot so the check fails
  // CLOSED (unrecognized-but-real Unsplash srcs must error, not render).
  const isUnsplashHost = u => {
    try {
      return /(^|\.)unsplash\.com$/.test(new URL(u, document.baseURI).hostname.replace(/\.$/, ''));
    } catch {
      return false;
    }
  };
  // Render-time referral normalization for links back to Unsplash:
  // appends utm_source/utm_medium when absent, preserves every existing
  // query param, never overwrites an existing utm_source, and passes
  // non-Unsplash URLs through untouched. Input is an ABSOLUTE validated
  // http(s) URL (the credit render funnel resolves + validates first).
  const withReferral = href => {
    try {
      const u = new URL(href);
      if (!/(^|\.)unsplash\.com$/.test(u.hostname.replace(/\.$/, ''))) {
        return href;
      }
      if (!u.searchParams.has('utm_source')) {
        u.searchParams.set('utm_source', 'claude_design');
      }
      if (!u.searchParams.has('utm_medium')) {
        u.searchParams.set('utm_medium', 'referral');
      }
      return u.toString();
    } catch (e) {
      return href;
    }
  };
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  // Unload-time flush: save()'s serialization defers a mid-RTT re-fire to a
  // .then that never runs in an unloading document, silently dropping a
  // pagehide commit. Post the current slots immediately instead — content
  // is a superset snapshot of any in-flight save's, the write is a
  // whole-file last-writer-wins replace, and postMessage FIFO delivers it
  // to the host after the in-flight one, so a backend-side reorder at
  // worst reproduces the dropped-commit outcome this flush improves on.
  // Guarded on the initial sidecar read: pre-hydration slots can miss
  // other slots' persisted entries, and flushing it would clobber them —
  // that narrow case stays best-effort (the in-memory merge in load()
  // cannot happen in an unloading document anyway).
  function flushNow() {
    if (!loaded) return;
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    try {
      Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {});
    } catch (e) {}
  }
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet =
  // Fill the container by default: slots are usually placed inside a
  // sized wrapper (a hero frame, a grid cell, an inset:0 layer) and are
  // expected to take that box — a fixed intrinsic size would render as
  // a small tile in the corner of a full-bleed wrapper instead.
  // aspect-ratio is the companion fallback that keeps a bare slot
  // visible when the parent's height is indefinite: height:100%
  // resolves to auto there, and the ratio then derives height from
  // width instead of letting the slot collapse to zero height.
  // Explicit width/height on the element override all of this.
  // color:inherit (not a fixed near-black): the placeholder chrome —
  // empty-state icon/caption (currentColor) and the dashed ring — must
  // read on dark decks too, and the slide's own text color is the one
  // color guaranteed to contrast with the slide background. The soft
  // look comes from opacity on those parts, not from a baked-in alpha.
  ':host{display:block;position:relative;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;' + '  width:100%;height:100%;aspect-ratio:3/2}' + '.empty .cap,.empty .sub{opacity:.75}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(127,127,127,.08)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  // popover=manual promotes the spill to the top layer on reframe, so it is
  // not clipped by any overflow:hidden / clip-path / scroll-container
  // ancestor (a plain z-index can't escape overflow clipping). UA popover
  // defaults (inset:0;margin:auto) are reset; _applyView sets viewport px.
  '.spill{position:fixed;margin:0;inset:auto;border:0;padding:0;background:transparent;' + '  overflow:visible;transform:translate(-50%,-50%);z-index:1;cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px}' + '.empty:hover .sub{opacity:1}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed currentColor;' + '  opacity:.35;transition:border-color .12s,opacity .12s}' + ':host([data-over]) .ring{border-color:#c96442;opacity:1}' + ':host([data-filled]) .ring{display:none}' +
  // Controls overlay INSIDE the frame, pinned to the top-right corner, so
  // a full-bleed slot in an overflow:hidden container still shows them
  // (the old below-mask placement got clipped). Credit sits bottom-left,
  // so top-right avoids collision. The blurred pill background keeps them
  // legible over the image.
  // The UA [popover] base rule styles the element in EVERY state (only
  // display:none is gated on :not(:popover-open), and the display:flex
  // below overrides that) — so the UA resets live HERE, like .spill's,
  // or the ordinary hover-state strip renders as a bordered Canvas box
  // centered by margin:auto. inset:auto precedes top/right (shorthand).
  '.ctl{position:absolute;inset:auto;top:8px;right:8px;margin:0;border:0;padding:0;' + '  background:transparent;overflow:visible;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' +
  // While reframing, the spill owns the top layer and would swallow every
  // click on the in-frame controls. Promoting .ctl into the top layer
  // ABOVE the spill (shown after it — later popovers stack higher) keeps
  // Edit-as-toggle and Replace clickable mid-reframe. _applyView pins it
  // to the frame's top-right in viewport px (translateX(-100%)
  // right-aligns against the computed left edge); inset:auto clears the
  // base rule's top/right so the inline left/top position it alone.
  '.ctl:popover-open{position:fixed;inset:auto;transform:translateX(-100%)}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}' +
  // Replacement in flight: after a src swap the browser keeps painting
  // the PREVIOUS image until the new one decodes, so a Replace would
  // flash the old photo and then pop. Hide the stale frame (visibility,
  // not display — _applyView geometry still applies) and spin until the
  // new image reports in (load/error clears data-swapping).
  ':host([data-swapping]) .frame img{visibility:hidden}' + '.loading{position:absolute;inset:0;display:none;align-items:center;' + '  justify-content:center;pointer-events:none}' + ':host([data-swapping]) .loading{display:flex}' + '.loading::after{content:"";width:22px;height:22px;border-radius:50%;' + '  border:2px solid rgba(127,127,127,.25);border-top-color:currentColor;' + '  animation:om-slot-spin .7s linear infinite}' + '@keyframes om-slot-spin{to{transform:rotate(360deg)}}' +
  // Reduced motion: the static two-tone ring still reads as "working".
  '@media (prefers-reduced-motion:reduce){.loading::after{animation:none}}' + '.credit{position:absolute;left:6px;bottom:6px;max-width:calc(100% - 12px);display:none;' + '  padding:3px 7px;border-radius:5px;background:rgba(0,0,0,.55);color:#fff;' + '  font:10px/1.2 system-ui,-apple-system,sans-serif;text-decoration:none;' + '  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;backdrop-filter:blur(6px)}' +
  // The credit is a SPAN holding one or two <a>s (Unsplash's prescribed
  // form links the photographer AND Unsplash) — anchors style inline so
  // the overlay reads as one line of text.
  '.credit a{color:inherit;text-decoration:none}' + '.credit a:hover,.credit a:focus-visible{text-decoration:underline}' + ':host([data-filled][data-credit]) .credit{display:block}' +
  // Exports must ship JUST the image — no hover controls, no credit chip
  // (the host marks <html data-om-exporting> for the capture window; the
  // page-level hide script can't reach shadow DOM, this rule can).
  ':host-context([data-om-exporting]) .ctl,' + ':host-context([data-om-exporting]) .credit{display:none !important}' +
  // Print must ship just the image too: the hover-gated controls can be
  // mid-hover when print() fires, and the credit chip is screen chrome —
  // the same rule the capture window gets, keyed on print media instead
  // of the host's data-om-exporting mark (the print path sets no mark).
  '@media print{.ctl,.credit{display:none !important}}' +
  // No export-window mask rules here on purpose: the export capture
  // releases the replacement mask by REMOVING data-swapping (the
  // shadow-root pass in pages/export/shared.ts HIDE_EXPORT_CHROME_SCRIPT)
  // — attribute removal works in every engine (:host-context is
  // Chromium-only), is scoped by construction to slots actually
  // mid-swap, and hides the spinner through the same gate. A masked img
  // would otherwise be silently dropped from PPTX decks (the capture
  // walk skips visibility:hidden imgs).
  // Attribution error tile: REPLACES the photo when an Unsplash src has
  // no credit attribute — rendering the photo uncredited is the terms
  // violation, so the photo must not appear at all.
  // Calm and neutral on purpose (review feedback): the tile informs the
  // user; the fix instructions are machine-facing (usage docblock, tool
  // description, and the turn-end scan's bounce copy name the attributes
  // for the agent).
  '.attr-error{position:absolute;inset:0;display:none;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  background:#f2f1ef;color:#6e6c66;user-select:none;' + '  font:13px/1.45 system-ui,-apple-system,sans-serif}' + '.attr-error svg{opacity:.55}' + '.attr-error .cap{max-width:92%;font-weight:500;letter-spacing:.01em}' + ':host([data-attribution-error]) .attr-error{display:flex}' + ':host([data-attribution-error]) .ring{display:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  const warnIcon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/>' + '<path d="M12 9v4"/><path d="M12 17h.01"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'placeholder', 'src', 'id', 'credit', 'credit-href'];
    }

    /** Duplicate-slide hook (called by deck-stage, see its
     *  _remintDuplicateIds): copy this id's stored image, if any, under a
     *  freshly minted key and return that key — so a duplicated slide's
     *  slot keeps its dropped photo instead of reverting to the
     *  placeholder. 'isFree' is the caller's uniqueness check (document
     *  ids); candidates must ALSO be unused in the sidecar, which can
     *  hold keys from other pages sharing the project root. (An EMPTY
     *  slot on another page leaves no sidecar entry, so its id is not
     *  detectable here — a minted key can collide with it and that slot
     *  would show this photo. Same blast radius as two pages reusing an
     *  id by hand, which the shared sidecar already permits.) Returns null
     *  when no id could be minted (caller strips the id, today's
     *  behavior). */
    static cloneSlot(fromId, isFree) {
      if (typeof fromId !== 'string' || !fromId) return null;
      // Pre-hydration the store can't veto candidates or source the copy
      // — degrade to the strip (today's behavior) rather than mint
      // against keys we can't see yet. Any rendered (= droppable) slot
      // means load() has already settled.
      if (!loaded) return null;
      const stem = fromId.replace(/-\d+$/, '') || fromId;
      for (let n = 2; n < 100; n++) {
        const toId = stem + '-' + n;
        if (toId === fromId) continue;
        if (slots[toId] !== undefined) {
          // Reuse a key holding this exact value (bytes AND crop) if no
          // live element here owns it — a duplicate op the host refused
          // after minting leaves such a key behind, and reusing keeps
          // refused retries from accumulating one orphaned copy per
          // attempt. Full equality (not just bytes) so a byte-identical
          // key another PAGE owns with its own crop is stepped past, not
          // adopted or rewritten. (Entries without .u never match.)
          const prev = getSlot(toId);
          const cur = getSlot(fromId);
          if (!(prev && cur && prev.u && prev.u === cur.u && prev.s === cur.s && prev.x === cur.x && prev.y === cur.y && (typeof isFree !== 'function' || isFree(toId)))) continue;
          return toId;
        }
        if (typeof isFree === 'function' && !isFree(toId)) continue;
        const v = getSlot(fromId);
        if (v) setSlot(toId, Object.assign({}, v));
        return toId;
      }
      return null;
    }
    constructor() {
      super();
      // clonable: rail thumbnails deep-clone slides and carry this shadow
      // along; reuse an already-cloned root so upgrade-after-clone works.
      // (Deliberately NOT serializable — a getHTML consumer would embed
      // multi-MB sidecar data-URLs into serialized page HTML.)
      const root = this.shadowRoot || this.attachShadow({
        mode: 'open',
        clonable: true
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="attr-error" part="attribution-error">' + warnIcon + '    <div class="cap">This photo needs attribution</div></div>' + '  <div class="loading" part="loading"></div>' + '  <div class="ring" part="ring"></div>' + '</div>' +
      // Outside .frame, like .spill/.ctl — the frame's overflow:hidden +
      // border-radius/clip-path would cut the credit off on circle/pill/mask.
      // A SPAN, not an <a>: the prescribed Unsplash credit holds two links
      // (photographer + Unsplash), built per-render in _render().
      '<span class="credit" part="credit"></span>' + '<div class="spill" popover="manual" data-dc-edit-transparent>' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' +
      // data-dc-edit-transparent: the DC editor's edit-mode picker lets
      // clicks through for chrome marked with it (EDIT_TRANSPARENT_SEL)
      // — without it, Replace/Edit clicks in Edit mode are swallowed by
      // element selection and the controls look dead.
      '<div class="ctl" popover="manual" data-dc-edit-transparent><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="edit" title="Reframe image">Edit</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ctl = root.querySelector('.ctl');
      this._credit = root.querySelector('.credit');
      this._attrError = root.querySelector('.attr-error');
      // Credit clicks open the link, not browse/reframe.
      this._credit.addEventListener('click', e => e.stopPropagation());
      this._credit.addEventListener('dblclick', e => e.stopPropagation());
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      // Encode-in-flight marker (the owning _ingest generation): while set,
      // the same-src "nothing in flight" clear in _render must not fire —
      // the stored value still points at the OLD image until the encode
      // lands, so that clear would unmask the stale image mid-replace.
      this._swapGen = 0;
      // Render-owned swap in flight: set when _render assigns a new src,
      // cleared only by the img's own load/error (or the empty branch).
      // img.complete CANNOT stand in for this — setting src only QUEUES
      // the current-request swap (a microtask), so synchronously after an
      // assignment, complete still reports the OLD settled request. The
      // pick path does exactly that: the host sets src, credit, and
      // credit-href back-to-back in one task, and renders #2/#3 would
      // read the stale complete === true and drop the mask one render
      // after it was set.
      this._loadPending = false;
      // See _render's empty branch: a transient attribution-error wipe of a
      // showing image must make the follow-up render a replacement (spinner),
      // not a first fill (blank frame).
      this._hidShowing = false;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        // The hidden controls are opacity-0 but still tabbable — without
        // this gate a keyboard user could drive them on a read-only share
        // link (mirrors the dblclick handler's editable gate).
        if (!this.hasAttribute('data-editable')) return;
        if (act === 'replace') {
          this._exitReframe(true);
          // Host-owned picker (Unsplash modal; it also offers local import).
          this.dispatchEvent(new CustomEvent('image-slot:pick', {
            bubbles: true,
            composed: true,
            detail: {
              id: this.id || null
            }
          }));
        }
        if (act === 'edit') {
          if (!this._reframes()) return;
          if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      // load/error also release the replacement-in-flight mask (via the
      // single discipline in _releaseMask): the swap is only revealed once
      // the new image can actually paint (on error the frame shows its
      // background, same as a fresh slot with a broken src).
      this._img.addEventListener('load', () => {
        this._loadPending = false;
        this._releaseMask(true);
        this._applyView();
      });
      this._img.addEventListener('error', () => {
        this._loadPending = false;
        this._releaseMask(true);
      });
      // Gated only on editable — any filled slot can be repositioned/scaled,
      // regardless of fit. Share links (no writeFile) stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
          const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // The host may inject window.omelette.writeFile AFTER the first render;
      // re-render on hover so the editable-gated controls reliably appear.
      this.addEventListener('pointerenter', this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('pointerenter', this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      // commit=false: a disconnect is not a user intent — committing here
      // would persist whatever half-finished drag a React remount or DOM
      // splice happened to interrupt. Deliberate exits commit on their own
      // paths (Escape/click-out/toggle), and unloads commit via pagehide.
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._signalReframe(true);
      // Best-effort commit when the document unloads mid-reframe (a host
      // navigation racing the enter signal, a manual reload, tab close):
      // the sidecar write rides the host bridge, which outlives this
      // document, so the crop survives even though the mode dies with the
      // DOM. Held on the instance so _exitReframe detaches exactly what
      // was attached.
      this._pagehide = () => {
        this._exitReframe(true);
        flushNow();
      };
      window.addEventListener('pagehide', this._pagehide);
      // Promote spill to the top layer, then keep it pinned over the frame:
      // scroll/resize cover the common cases, and a per-frame rect check
      // catches layout shifts that fire neither (an image above finishing
      // load, streamed DOM pushing the slot down, an ancestor transform
      // change) so the overlay can't detach from the frame.
      try {
        this._spill.showPopover();
      } catch {}
      // After the spill, so the controls stack above it in the top layer.
      try {
        this._ctl.showPopover();
      } catch {}
      this._reposition = () => {
        if (this.hasAttribute('data-reframe')) this._applyView();
      };
      window.addEventListener('scroll', this._reposition, true);
      window.addEventListener('resize', this._reposition);
      this._lastRect = '';
      this._watch = () => {
        if (!this.hasAttribute('data-reframe')) return;
        const r = this.getBoundingClientRect();
        const key = r.left + ',' + r.top + ',' + r.width + ',' + r.height;
        if (key !== this._lastRect) {
          this._lastRect = key;
          this._applyView();
        }
        this._watchId = requestAnimationFrame(this._watch);
      };
      this._watchId = requestAnimationFrame(this._watch);
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (this._reposition) {
        window.removeEventListener('scroll', this._reposition, true);
        window.removeEventListener('resize', this._reposition);
        this._reposition = null;
      }
      if (this._watchId) {
        cancelAnimationFrame(this._watchId);
        this._watchId = 0;
      }
      if (this._pagehide) {
        window.removeEventListener('pagehide', this._pagehide);
        this._pagehide = null;
      }
      try {
        this._spill.hidePopover();
      } catch {}
      try {
        this._ctl.hidePopover();
      } catch {}
      this._ctl.style.left = '';
      this._ctl.style.top = '';
      if (commit) this._commitView();
      this._signalReframe(false);
    }

    // Reframe state lives only in this DOM until commit, invisible to the
    // host's dirty signals — announce enter/exit so the host can hold
    // auto-reloads for exactly the gesture (the guest bundle forwards
    // image-slot:reframe to the host as imageSlotReframe). Dispatched on
    // the element (composed, so it escapes shadow roots) while connected;
    // a disconnected exit (disconnectedCallback) falls back to document so
    // the host still hears it.
    _signalReframe(active) {
      const target = this.isConnected ? this : document;
      target.dispatchEvent(new CustomEvent('image-slot:reframe', {
        bubbles: true,
        composed: true,
        detail: {
          active: active,
          id: this.id || null
        }
      }));
    }

    // Public: host's "Import from computer" calls this to run local browse.
    openFilePicker() {
      this._exitReframe(true);
      this._input.click();
    }

    // A src write is a newer intent for this slot's content — the host
    // pick path (setImageSlotImage) or an agent edit — so it must win
    // over any encode still in flight from an earlier drop: left live,
    // that encode lands later, passes _ingest's gen guard, and its
    // setSlot silently overwrites the pick (the stored value shadows
    // src in _render). Bumping _gen kills the encode before its own
    // _swapGen clear runs, so clear the dead claim here too — otherwise
    // _releaseMask (gated on !_swapGen) never fires and the pick's
    // spinner is stranded. src ONLY: the pick sets credit/credit-href
    // in the same task, and clearing _swapGen on those would let the
    // same-src branch unmask the old image mid-encode.
    attributeChangedCallback(name, oldVal, newVal) {
      if (name === 'src' && oldVal !== newVal) {
        this._gen++;
        this._swapGen = 0;
      }
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      // Replacing a shown image: surface the swap through the encode too,
      // not just the decode — otherwise the old photo sits there with no
      // feedback while the canvas re-encode runs. An empty slot keeps its
      // placeholder (no spinner) until the encode lands, as before.
      // _swapGen guards the mask against re-renders DURING the encode
      // (pointerenter, ResizeObserver, another slot's store write): the
      // stored value still resolves to the old image there, so _render's
      // same-src clear would otherwise unmask it mid-replace.
      if (this.hasAttribute('data-filled')) {
        this.setAttribute('data-swapping', '');
        this._swapGen = gen;
      }
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        // Clear BEFORE setSlot: its synchronous re-render must see no
        // pending encode, so a byte-identical re-upload (same data URL, no
        // load event coming) still clears the mask via the complete branch.
        this._swapGen = 0;
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._swapGen = 0;
        // Reveal the kept old image — unless another replacement (a
        // remote pick's src swap) is still in flight, in which case the
        // mask stays until THAT image settles (its load/error releases).
        this._releaseMask();
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is available on any filled slot — the user can
    // always reposition/scale. `fit` only sets the initial baseline (see
    // _geom): contain starts fully-visible, cover starts frame-filling.
    _reframes() {
      return this.hasAttribute('data-filled');
    }

    // The single release discipline for the replacement-in-flight mask
    // (data-swapping). The mask comes off only when BOTH hold:
    //  - no encode is pending (_swapGen) — mid-encode the stored value
    //    still resolves to the old image, so any reveal paints it;
    //  - the frame img has settled on its current src — an unsettled src
    //    means some replacement is still in flight (e.g. a remote pick),
    //    whoever started it, and revealing would paint the previous
    //    frame. The load/error listeners pass settled=true (the event IS
    //    the settlement signal, per spec complete is true by then);
    //    other callers rely on the complete flag (covers loaded AND
    //    failed).
    // Every release path funnels through here EXCEPT _render's empty
    // branch (the img is being cleared — nothing will ever settle).
    _releaseMask(settled) {
      if (!this._swapGen && !this._loadPending && (settled || this._img.complete)) {
        this.removeAttribute('data-swapping');
      }
    }

    // Baseline geometry, shared by clamp/apply/resize. `base` is the scale at
    // view-scale s=1: cover = fill the frame (overflow on the looser axis),
    // contain = fit fully inside (letterboxed). Zooming a contain image past
    // s where it overflows naturally becomes a crop. Null until the img has
    // loaded (naturalWidth is 0 before that) or when the slot has no layout
    // box — ResizeObserver fires with a 0×0 rect under display:none, and
    // clamping against a degenerate 1×1 frame would silently pull the stored
    // pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
      const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
      return {
        iw,
        ih,
        fw,
        fh,
        base
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      // Top-layer controls: pin to the frame's top-right in viewport px
      // (the same 8px inset as the in-frame layout; unscaled — top-layer UI
      // reads as chrome, not page content). BEFORE the geometry branch:
      // placement needs only the frame rect, and a not-yet-loaded or broken
      // src must not leave the promoted strip floating unpositioned. Gated
      // on the popover actually being open: without the Popover API,
      // showPopover() threw (swallowed in _enterReframe), .ctl stays in
      // its in-frame absolute layout, and viewport-px coordinates would
      // shove it off-frame — and matches(':popover-open') itself throws
      // there (unknown pseudo-class), hence the try/catch.
      if (this.hasAttribute('data-reframe')) {
        let onTop = false;
        try {
          onTop = this._ctl.matches(':popover-open');
        } catch {}
        if (onTop) {
          const r = this.getBoundingClientRect();
          this._ctl.style.left = r.right - 8 + 'px';
          this._ctl.style.top = r.top + 8 + 'px';
        }
      }
      if (!g) {
        // Dimensions not known yet (before img load) — centered fit so there
        // is no flash of an unpositioned image before the geometry lands.
        const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = contain ? 'contain' : 'cover';
        return;
      }
      // Baseline (cover-fill or contain-fit) × view scale. Width/height and
      // left/top are all frame-% — depends only on the frame aspect ratio, so
      // a responsive resize keeps the same crop. The spill layer mirrors the
      // same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      if (this.hasAttribute('data-reframe')) {
        // Top-layer spill: position in viewport px over the frame. The top
        // layer escapes ancestor transforms entirely, so EVERY term must be
        // in viewport units: getBoundingClientRect gives the frame's scaled
        // origin AND size, and the rect/layout ratio rescales the ghost —
        // sizing from layout px alone renders it 1/scale too large under a
        // scaled deck slide. Inner ghost + handles stay box-relative.
        const r = this.getBoundingClientRect();
        const sx = g.fw ? r.width / g.fw : 1;
        const sy = g.fh ? r.height / g.fh : 1;
        this._spill.style.width = g.iw * k * sx + 'px';
        this._spill.style.height = g.ih * k * sy + 'px';
        this._spill.style.left = r.left + (50 + this._view.x) / 100 * r.width + 'px';
        this._spill.style.top = r.top + (50 + this._view.y) / 100 * r.height + 'px';
      }
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      // An Unsplash src with no credit attribute must NOT render — showing
      // the photo uncredited is the Unsplash-terms violation itself. The
      // error tile replaces the photo until the credit is written. A
      // user-dropped image is the user's own content and always renders.
      // Trimmed: credit is agent/user-editable content, and a whitespace-
      // only value must count as missing — otherwise it would suppress the
      // error tile AND render an empty credit box (no text, no links),
      // exactly the unattributed state this gate exists to prevent.
      const credit = (this.getAttribute('credit') || '').trim();
      const attrError = !!(!credit && !this._userUrl && srcAttr && isUnsplashHost(srcAttr));
      this.toggleAttribute('data-attribution-error', attrError);
      if (url && !attrError) {
        const prev = this._img.getAttribute('src');
        if (prev !== url) {
          // Replacing an already-shown image: mark the swap BEFORE setting
          // src so the stale frame is never revealed (see the data-swapping
          // stylesheet rules). First fill (prev empty) keeps the existing
          // placeholder-until-load behavior — no spinner. _hidShowing
          // covers the pick path's transient attribution-error wipe: prev
          // is gone, but an image WAS showing, so this is a replacement.
          if (prev || this._hidShowing) this.setAttribute('data-swapping', '');
          // Mark the swap BEFORE assigning src: complete keeps reporting
          // the old settled request until the browser's
          // update-the-image-data microtask runs, so same-task re-renders
          // (the pick path's credit/credit-href setAttributes) need this
          // flag, not complete, to know a load is in flight.
          this._loadPending = true;
          this._img.src = url;
          this._ghost.src = url;
        } else {
          // Same-src re-render — release if settled, so an ingest-set
          // spinner can't stick after a byte-identical re-upload (same
          // data URL, no further load event ever fires).
          this._releaseMask();
        }
        this._hidShowing = false;
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this.removeAttribute('data-swapping');
        // The src is being removed — no load/error will ever fire for it.
        this._loadPending = false;
        // A transient attribution-error wipe of a showing image happens on
        // the pick path: the host sets src one setAttribute before credit,
        // so render N hides the old image (attrError) and render N+1
        // restores a URL. Remember the wipe so that restore renders as a
        // replacement (spinner), not a first fill (blank frame).
        this._hidShowing = attrError && !!this._img.getAttribute('src');
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        // The error tile owns the blocked-photo state; .empty stays for
        // the genuinely-empty slot.
        this._empty.style.display = attrError ? 'none' : 'flex';
        this.removeAttribute('data-filled');
      }

      // Credit belongs to the author src, so a user drop hides it.
      // textContent + the http(s)-only funnel keep external strings inert.
      const showCredit = !!(url && credit && !this._userUrl && !attrError);
      this._credit.textContent = '';
      if (showCredit) {
        // Validate once (resolved against the document, http(s) only),
        // then append the terms-required utm referral params to links
        // that point back at unsplash.com.
        let href = '';
        const rawHref = this.getAttribute('credit-href') || '';
        if (rawHref) {
          try {
            const u = new URL(rawHref, document.baseURI);
            if (u.protocol === 'http:' || u.protocol === 'https:') {
              href = withReferral(u.href);
            }
          } catch {}
        }
        const mkLink = (text, linkHref) => {
          const a = document.createElement('a');
          a.setAttribute('target', '_blank');
          a.setAttribute('rel', 'noopener noreferrer');
          a.setAttribute('href', linkHref);
          a.textContent = text;
          return a;
        };
        // Unsplash's prescribed credit is TWO links — the photographer's
        // name to their profile (credit-href) and 'Unsplash' to the
        // homepage. Render that split whenever the text has the canonical
        // shape; other text keeps the legacy single-link rendering.
        const m = /^Photo by (.+) on Unsplash$/.exec(credit);
        if (m) {
          this._credit.appendChild(document.createTextNode('Photo by '));
          this._credit.appendChild(href ? mkLink(m[1], href) : document.createTextNode(m[1]));
          this._credit.appendChild(document.createTextNode(' on '));
          this._credit.appendChild(mkLink('Unsplash', UNSPLASH_HOMEPAGE_HREF));
        } else if (href) {
          this._credit.appendChild(mkLink(credit, href));
        } else {
          this._credit.textContent = credit;
        }
      }
      this.toggleAttribute('data-credit', showCredit);
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "image-slot.js", error: String((e && e.message) || e) }); }

// ui_kits/ck-website/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever a design needs an image.
 * You control the slot's shape; it sizes to its container by default. When the search_stock_photos tool
 * is available, prefill the slot by default — write the photo's URL into
 * src (with credit/credit-href); the user can still fill or replace it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The sidecar is a SIBLING of the HTML file that uses this component: the
 * read is a document-relative fetch, and the host resolves the bridge's
 * sidecar writes into the previewed file's directory to match (same
 * contract as design_canvas.jsx). Pages in the same directory share one
 * sidecar; keep slot ids distinct across them.
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          Initial framing baseline: cover | contain.   (default 'cover')
 *                cover starts the image filling the frame (overflow cropped);
 *                contain starts it fully visible (letterboxed). Either way the
 *                user can always pan/scale from there — double-click, or the
 *                Edit control, enters reframe mode (drag to move, scroll or
 *                corner-handles to scale; Escape / click-out commits). The
 *                crop persists alongside the image in the sidecar.
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. Prefill it with a real
 *                photo via search_stock_photos when that tool is available
 *                (set credit/credit-href from the result). A user drop
 *                overrides it; clearing the drop reveals src again.
 *   credit       Attribution text shown as a small overlay at the
 *                bottom-left of the filled slot. REQUIRED whenever src
 *                points at any Unsplash host (images.unsplash.com,
 *                plus.unsplash.com, …): an Unsplash src with no credit
 *                renders an error tile INSTEAD of the photo (Unsplash
 *                terms forbid showing their photos unattributed). Use the
 *                exact form 'Photo by {photographer name} on Unsplash' —
 *                the overlay then links the name to credit-href and
 *                'Unsplash' to the Unsplash homepage, and links back to
 *                unsplash.com automatically get the required utm referral
 *                params appended at render time. The credit belongs to
 *                the src image, so it only shows while src is what's
 *                displayed — a user-dropped image hides it.
 *   credit-href  Link for the photographer's name in the credit overlay
 *                (their Unsplash profile URL from the stock-photo search
 *                results). http(s) URLs only — anything else renders the
 *                name as plain text.
 *
 * Sizing: the slot fills its container by default (width/height 100%).
 * Put it in a sized wrapper — absolutely positioned, a grid cell, a fixed
 * frame — and it takes exactly that box. When the parent's height is
 * indefinite (ordinary flow), it falls back to full width at a 3:2 aspect
 * ratio instead of collapsing. In a shrink-to-fit parent (a float,
 * width:max-content, an unsized absolute wrapper), percentages have
 * nothing to resolve against — size the slot or its wrapper explicitly
 * there. For a fixed-size slot, set
 * width/height on the element itself (inline style), which overrides the
 * default. When
 * layering content above a slot (full-bleed layouts), make the overlay
 * click-through — pointer-events: none on scrims/text plates, re-enabled
 * on interactive children — so the slot's hover controls stay reachable.
 * Keep the slot's bottom-left corner visually clear as well: the credit
 * overlay renders there, and a dark fade or text plate covering it hides
 * the attribution Unsplash's terms require — end the fade above that
 * corner, or keep it nearly transparent where the credit sits.
 *
 * Usage:
 *   <div style="position:relative;width:100%;height:100%">      <!-- full-bleed: -->
 *     <image-slot id="bg" shape="rect"></image-slot>            <!-- fills the wrapper -->
 *   </div>
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';

  // Unsplash terms require visible attribution wherever their photos
  // display, and every link back to unsplash.com must carry utm referral
  // params. Two render-time rules enforce that here:
  //  - an Unsplash-src slot with NO credit attribute renders an error
  //    tile INSTEAD of the photo (an uncredited Unsplash photo on screen
  //    is itself the terms violation, so it never renders bare);
  //  - rendered credit links pointing at unsplash.com get the referral
  //    params appended when absent (credit-href values live in page
  //    content that can't be edited after the fact).
  // Keep the utm_source value in sync with UTM_SOURCE in
  // platform/web-agent/unsplash.ts — this file is a project-local
  // artifact and cannot import it (equality is pinned by tests).
  const UNSPLASH_HOMEPAGE_HREF = 'https://unsplash.com/?utm_source=claude_design&utm_medium=referral';
  // Host rule mirrors the hotlink validator that admits Unsplash srcs into
  // pages in the first place (cdn$ in unsplash.ts: apex or any subdomain)
  // — Unsplash+ results serve from plus.unsplash.com, not just images.*,
  // and an admitted-but-uncredited photo must error whatever unsplash
  // host it rides on.
  // Trailing-dot FQDNs (images.unsplash.com.) are the same host to the
  // browser but would miss the regex — strip one dot so the check fails
  // CLOSED (unrecognized-but-real Unsplash srcs must error, not render).
  const isUnsplashHost = u => {
    try {
      return /(^|\.)unsplash\.com$/.test(new URL(u, document.baseURI).hostname.replace(/\.$/, ''));
    } catch {
      return false;
    }
  };
  // Render-time referral normalization for links back to Unsplash:
  // appends utm_source/utm_medium when absent, preserves every existing
  // query param, never overwrites an existing utm_source, and passes
  // non-Unsplash URLs through untouched. Input is an ABSOLUTE validated
  // http(s) URL (the credit render funnel resolves + validates first).
  const withReferral = href => {
    try {
      const u = new URL(href);
      if (!/(^|\.)unsplash\.com$/.test(u.hostname.replace(/\.$/, ''))) {
        return href;
      }
      if (!u.searchParams.has('utm_source')) {
        u.searchParams.set('utm_source', 'claude_design');
      }
      if (!u.searchParams.has('utm_medium')) {
        u.searchParams.set('utm_medium', 'referral');
      }
      return u.toString();
    } catch (e) {
      return href;
    }
  };
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  // Unload-time flush: save()'s serialization defers a mid-RTT re-fire to a
  // .then that never runs in an unloading document, silently dropping a
  // pagehide commit. Post the current slots immediately instead — content
  // is a superset snapshot of any in-flight save's, the write is a
  // whole-file last-writer-wins replace, and postMessage FIFO delivers it
  // to the host after the in-flight one, so a backend-side reorder at
  // worst reproduces the dropped-commit outcome this flush improves on.
  // Guarded on the initial sidecar read: pre-hydration slots can miss
  // other slots' persisted entries, and flushing it would clobber them —
  // that narrow case stays best-effort (the in-memory merge in load()
  // cannot happen in an unloading document anyway).
  function flushNow() {
    if (!loaded) return;
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    try {
      Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {});
    } catch (e) {}
  }
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet =
  // Fill the container by default: slots are usually placed inside a
  // sized wrapper (a hero frame, a grid cell, an inset:0 layer) and are
  // expected to take that box — a fixed intrinsic size would render as
  // a small tile in the corner of a full-bleed wrapper instead.
  // aspect-ratio is the companion fallback that keeps a bare slot
  // visible when the parent's height is indefinite: height:100%
  // resolves to auto there, and the ratio then derives height from
  // width instead of letting the slot collapse to zero height.
  // Explicit width/height on the element override all of this.
  // color:inherit (not a fixed near-black): the placeholder chrome —
  // empty-state icon/caption (currentColor) and the dashed ring — must
  // read on dark decks too, and the slide's own text color is the one
  // color guaranteed to contrast with the slide background. The soft
  // look comes from opacity on those parts, not from a baked-in alpha.
  ':host{display:block;position:relative;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;' + '  width:100%;height:100%;aspect-ratio:3/2}' + '.empty .cap,.empty .sub{opacity:.75}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(127,127,127,.08)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  // popover=manual promotes the spill to the top layer on reframe, so it is
  // not clipped by any overflow:hidden / clip-path / scroll-container
  // ancestor (a plain z-index can't escape overflow clipping). UA popover
  // defaults (inset:0;margin:auto) are reset; _applyView sets viewport px.
  '.spill{position:fixed;margin:0;inset:auto;border:0;padding:0;background:transparent;' + '  overflow:visible;transform:translate(-50%,-50%);z-index:1;cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px}' + '.empty:hover .sub{opacity:1}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed currentColor;' + '  opacity:.35;transition:border-color .12s,opacity .12s}' + ':host([data-over]) .ring{border-color:#c96442;opacity:1}' + ':host([data-filled]) .ring{display:none}' +
  // Controls overlay INSIDE the frame, pinned to the top-right corner, so
  // a full-bleed slot in an overflow:hidden container still shows them
  // (the old below-mask placement got clipped). Credit sits bottom-left,
  // so top-right avoids collision. The blurred pill background keeps them
  // legible over the image.
  // The UA [popover] base rule styles the element in EVERY state (only
  // display:none is gated on :not(:popover-open), and the display:flex
  // below overrides that) — so the UA resets live HERE, like .spill's,
  // or the ordinary hover-state strip renders as a bordered Canvas box
  // centered by margin:auto. inset:auto precedes top/right (shorthand).
  '.ctl{position:absolute;inset:auto;top:8px;right:8px;margin:0;border:0;padding:0;' + '  background:transparent;overflow:visible;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' +
  // While reframing, the spill owns the top layer and would swallow every
  // click on the in-frame controls. Promoting .ctl into the top layer
  // ABOVE the spill (shown after it — later popovers stack higher) keeps
  // Edit-as-toggle and Replace clickable mid-reframe. _applyView pins it
  // to the frame's top-right in viewport px (translateX(-100%)
  // right-aligns against the computed left edge); inset:auto clears the
  // base rule's top/right so the inline left/top position it alone.
  '.ctl:popover-open{position:fixed;inset:auto;transform:translateX(-100%)}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}' +
  // Replacement in flight: after a src swap the browser keeps painting
  // the PREVIOUS image until the new one decodes, so a Replace would
  // flash the old photo and then pop. Hide the stale frame (visibility,
  // not display — _applyView geometry still applies) and spin until the
  // new image reports in (load/error clears data-swapping).
  ':host([data-swapping]) .frame img{visibility:hidden}' + '.loading{position:absolute;inset:0;display:none;align-items:center;' + '  justify-content:center;pointer-events:none}' + ':host([data-swapping]) .loading{display:flex}' + '.loading::after{content:"";width:22px;height:22px;border-radius:50%;' + '  border:2px solid rgba(127,127,127,.25);border-top-color:currentColor;' + '  animation:om-slot-spin .7s linear infinite}' + '@keyframes om-slot-spin{to{transform:rotate(360deg)}}' +
  // Reduced motion: the static two-tone ring still reads as "working".
  '@media (prefers-reduced-motion:reduce){.loading::after{animation:none}}' + '.credit{position:absolute;left:6px;bottom:6px;max-width:calc(100% - 12px);display:none;' + '  padding:3px 7px;border-radius:5px;background:rgba(0,0,0,.55);color:#fff;' + '  font:10px/1.2 system-ui,-apple-system,sans-serif;text-decoration:none;' + '  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;backdrop-filter:blur(6px)}' +
  // The credit is a SPAN holding one or two <a>s (Unsplash's prescribed
  // form links the photographer AND Unsplash) — anchors style inline so
  // the overlay reads as one line of text.
  '.credit a{color:inherit;text-decoration:none}' + '.credit a:hover,.credit a:focus-visible{text-decoration:underline}' + ':host([data-filled][data-credit]) .credit{display:block}' +
  // Exports must ship JUST the image — no hover controls, no credit chip
  // (the host marks <html data-om-exporting> for the capture window; the
  // page-level hide script can't reach shadow DOM, this rule can).
  ':host-context([data-om-exporting]) .ctl,' + ':host-context([data-om-exporting]) .credit{display:none !important}' +
  // Print must ship just the image too: the hover-gated controls can be
  // mid-hover when print() fires, and the credit chip is screen chrome —
  // the same rule the capture window gets, keyed on print media instead
  // of the host's data-om-exporting mark (the print path sets no mark).
  '@media print{.ctl,.credit{display:none !important}}' +
  // No export-window mask rules here on purpose: the export capture
  // releases the replacement mask by REMOVING data-swapping (the
  // shadow-root pass in pages/export/shared.ts HIDE_EXPORT_CHROME_SCRIPT)
  // — attribute removal works in every engine (:host-context is
  // Chromium-only), is scoped by construction to slots actually
  // mid-swap, and hides the spinner through the same gate. A masked img
  // would otherwise be silently dropped from PPTX decks (the capture
  // walk skips visibility:hidden imgs).
  // Attribution error tile: REPLACES the photo when an Unsplash src has
  // no credit attribute — rendering the photo uncredited is the terms
  // violation, so the photo must not appear at all.
  // Calm and neutral on purpose (review feedback): the tile informs the
  // user; the fix instructions are machine-facing (usage docblock, tool
  // description, and the turn-end scan's bounce copy name the attributes
  // for the agent).
  '.attr-error{position:absolute;inset:0;display:none;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  background:#f2f1ef;color:#6e6c66;user-select:none;' + '  font:13px/1.45 system-ui,-apple-system,sans-serif}' + '.attr-error svg{opacity:.55}' + '.attr-error .cap{max-width:92%;font-weight:500;letter-spacing:.01em}' + ':host([data-attribution-error]) .attr-error{display:flex}' + ':host([data-attribution-error]) .ring{display:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  const warnIcon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/>' + '<path d="M12 9v4"/><path d="M12 17h.01"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'placeholder', 'src', 'id', 'credit', 'credit-href'];
    }

    /** Duplicate-slide hook (called by deck-stage, see its
     *  _remintDuplicateIds): copy this id's stored image, if any, under a
     *  freshly minted key and return that key — so a duplicated slide's
     *  slot keeps its dropped photo instead of reverting to the
     *  placeholder. 'isFree' is the caller's uniqueness check (document
     *  ids); candidates must ALSO be unused in the sidecar, which can
     *  hold keys from other pages sharing the project root. (An EMPTY
     *  slot on another page leaves no sidecar entry, so its id is not
     *  detectable here — a minted key can collide with it and that slot
     *  would show this photo. Same blast radius as two pages reusing an
     *  id by hand, which the shared sidecar already permits.) Returns null
     *  when no id could be minted (caller strips the id, today's
     *  behavior). */
    static cloneSlot(fromId, isFree) {
      if (typeof fromId !== 'string' || !fromId) return null;
      // Pre-hydration the store can't veto candidates or source the copy
      // — degrade to the strip (today's behavior) rather than mint
      // against keys we can't see yet. Any rendered (= droppable) slot
      // means load() has already settled.
      if (!loaded) return null;
      const stem = fromId.replace(/-\d+$/, '') || fromId;
      for (let n = 2; n < 100; n++) {
        const toId = stem + '-' + n;
        if (toId === fromId) continue;
        if (slots[toId] !== undefined) {
          // Reuse a key holding this exact value (bytes AND crop) if no
          // live element here owns it — a duplicate op the host refused
          // after minting leaves such a key behind, and reusing keeps
          // refused retries from accumulating one orphaned copy per
          // attempt. Full equality (not just bytes) so a byte-identical
          // key another PAGE owns with its own crop is stepped past, not
          // adopted or rewritten. (Entries without .u never match.)
          const prev = getSlot(toId);
          const cur = getSlot(fromId);
          if (!(prev && cur && prev.u && prev.u === cur.u && prev.s === cur.s && prev.x === cur.x && prev.y === cur.y && (typeof isFree !== 'function' || isFree(toId)))) continue;
          return toId;
        }
        if (typeof isFree === 'function' && !isFree(toId)) continue;
        const v = getSlot(fromId);
        if (v) setSlot(toId, Object.assign({}, v));
        return toId;
      }
      return null;
    }
    constructor() {
      super();
      // clonable: rail thumbnails deep-clone slides and carry this shadow
      // along; reuse an already-cloned root so upgrade-after-clone works.
      // (Deliberately NOT serializable — a getHTML consumer would embed
      // multi-MB sidecar data-URLs into serialized page HTML.)
      const root = this.shadowRoot || this.attachShadow({
        mode: 'open',
        clonable: true
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="attr-error" part="attribution-error">' + warnIcon + '    <div class="cap">This photo needs attribution</div></div>' + '  <div class="loading" part="loading"></div>' + '  <div class="ring" part="ring"></div>' + '</div>' +
      // Outside .frame, like .spill/.ctl — the frame's overflow:hidden +
      // border-radius/clip-path would cut the credit off on circle/pill/mask.
      // A SPAN, not an <a>: the prescribed Unsplash credit holds two links
      // (photographer + Unsplash), built per-render in _render().
      '<span class="credit" part="credit"></span>' + '<div class="spill" popover="manual" data-dc-edit-transparent>' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' +
      // data-dc-edit-transparent: the DC editor's edit-mode picker lets
      // clicks through for chrome marked with it (EDIT_TRANSPARENT_SEL)
      // — without it, Replace/Edit clicks in Edit mode are swallowed by
      // element selection and the controls look dead.
      '<div class="ctl" popover="manual" data-dc-edit-transparent><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="edit" title="Reframe image">Edit</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ctl = root.querySelector('.ctl');
      this._credit = root.querySelector('.credit');
      this._attrError = root.querySelector('.attr-error');
      // Credit clicks open the link, not browse/reframe.
      this._credit.addEventListener('click', e => e.stopPropagation());
      this._credit.addEventListener('dblclick', e => e.stopPropagation());
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      // Encode-in-flight marker (the owning _ingest generation): while set,
      // the same-src "nothing in flight" clear in _render must not fire —
      // the stored value still points at the OLD image until the encode
      // lands, so that clear would unmask the stale image mid-replace.
      this._swapGen = 0;
      // Render-owned swap in flight: set when _render assigns a new src,
      // cleared only by the img's own load/error (or the empty branch).
      // img.complete CANNOT stand in for this — setting src only QUEUES
      // the current-request swap (a microtask), so synchronously after an
      // assignment, complete still reports the OLD settled request. The
      // pick path does exactly that: the host sets src, credit, and
      // credit-href back-to-back in one task, and renders #2/#3 would
      // read the stale complete === true and drop the mask one render
      // after it was set.
      this._loadPending = false;
      // See _render's empty branch: a transient attribution-error wipe of a
      // showing image must make the follow-up render a replacement (spinner),
      // not a first fill (blank frame).
      this._hidShowing = false;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        // The hidden controls are opacity-0 but still tabbable — without
        // this gate a keyboard user could drive them on a read-only share
        // link (mirrors the dblclick handler's editable gate).
        if (!this.hasAttribute('data-editable')) return;
        if (act === 'replace') {
          this._exitReframe(true);
          // Host-owned picker (Unsplash modal; it also offers local import).
          this.dispatchEvent(new CustomEvent('image-slot:pick', {
            bubbles: true,
            composed: true,
            detail: {
              id: this.id || null
            }
          }));
        }
        if (act === 'edit') {
          if (!this._reframes()) return;
          if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      // load/error also release the replacement-in-flight mask (via the
      // single discipline in _releaseMask): the swap is only revealed once
      // the new image can actually paint (on error the frame shows its
      // background, same as a fresh slot with a broken src).
      this._img.addEventListener('load', () => {
        this._loadPending = false;
        this._releaseMask(true);
        this._applyView();
      });
      this._img.addEventListener('error', () => {
        this._loadPending = false;
        this._releaseMask(true);
      });
      // Gated only on editable — any filled slot can be repositioned/scaled,
      // regardless of fit. Share links (no writeFile) stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
          const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // The host may inject window.omelette.writeFile AFTER the first render;
      // re-render on hover so the editable-gated controls reliably appear.
      this.addEventListener('pointerenter', this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('pointerenter', this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      // commit=false: a disconnect is not a user intent — committing here
      // would persist whatever half-finished drag a React remount or DOM
      // splice happened to interrupt. Deliberate exits commit on their own
      // paths (Escape/click-out/toggle), and unloads commit via pagehide.
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._signalReframe(true);
      // Best-effort commit when the document unloads mid-reframe (a host
      // navigation racing the enter signal, a manual reload, tab close):
      // the sidecar write rides the host bridge, which outlives this
      // document, so the crop survives even though the mode dies with the
      // DOM. Held on the instance so _exitReframe detaches exactly what
      // was attached.
      this._pagehide = () => {
        this._exitReframe(true);
        flushNow();
      };
      window.addEventListener('pagehide', this._pagehide);
      // Promote spill to the top layer, then keep it pinned over the frame:
      // scroll/resize cover the common cases, and a per-frame rect check
      // catches layout shifts that fire neither (an image above finishing
      // load, streamed DOM pushing the slot down, an ancestor transform
      // change) so the overlay can't detach from the frame.
      try {
        this._spill.showPopover();
      } catch {}
      // After the spill, so the controls stack above it in the top layer.
      try {
        this._ctl.showPopover();
      } catch {}
      this._reposition = () => {
        if (this.hasAttribute('data-reframe')) this._applyView();
      };
      window.addEventListener('scroll', this._reposition, true);
      window.addEventListener('resize', this._reposition);
      this._lastRect = '';
      this._watch = () => {
        if (!this.hasAttribute('data-reframe')) return;
        const r = this.getBoundingClientRect();
        const key = r.left + ',' + r.top + ',' + r.width + ',' + r.height;
        if (key !== this._lastRect) {
          this._lastRect = key;
          this._applyView();
        }
        this._watchId = requestAnimationFrame(this._watch);
      };
      this._watchId = requestAnimationFrame(this._watch);
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (this._reposition) {
        window.removeEventListener('scroll', this._reposition, true);
        window.removeEventListener('resize', this._reposition);
        this._reposition = null;
      }
      if (this._watchId) {
        cancelAnimationFrame(this._watchId);
        this._watchId = 0;
      }
      if (this._pagehide) {
        window.removeEventListener('pagehide', this._pagehide);
        this._pagehide = null;
      }
      try {
        this._spill.hidePopover();
      } catch {}
      try {
        this._ctl.hidePopover();
      } catch {}
      this._ctl.style.left = '';
      this._ctl.style.top = '';
      if (commit) this._commitView();
      this._signalReframe(false);
    }

    // Reframe state lives only in this DOM until commit, invisible to the
    // host's dirty signals — announce enter/exit so the host can hold
    // auto-reloads for exactly the gesture (the guest bundle forwards
    // image-slot:reframe to the host as imageSlotReframe). Dispatched on
    // the element (composed, so it escapes shadow roots) while connected;
    // a disconnected exit (disconnectedCallback) falls back to document so
    // the host still hears it.
    _signalReframe(active) {
      const target = this.isConnected ? this : document;
      target.dispatchEvent(new CustomEvent('image-slot:reframe', {
        bubbles: true,
        composed: true,
        detail: {
          active: active,
          id: this.id || null
        }
      }));
    }

    // Public: host's "Import from computer" calls this to run local browse.
    openFilePicker() {
      this._exitReframe(true);
      this._input.click();
    }

    // A src write is a newer intent for this slot's content — the host
    // pick path (setImageSlotImage) or an agent edit — so it must win
    // over any encode still in flight from an earlier drop: left live,
    // that encode lands later, passes _ingest's gen guard, and its
    // setSlot silently overwrites the pick (the stored value shadows
    // src in _render). Bumping _gen kills the encode before its own
    // _swapGen clear runs, so clear the dead claim here too — otherwise
    // _releaseMask (gated on !_swapGen) never fires and the pick's
    // spinner is stranded. src ONLY: the pick sets credit/credit-href
    // in the same task, and clearing _swapGen on those would let the
    // same-src branch unmask the old image mid-encode.
    attributeChangedCallback(name, oldVal, newVal) {
      if (name === 'src' && oldVal !== newVal) {
        this._gen++;
        this._swapGen = 0;
      }
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      // Replacing a shown image: surface the swap through the encode too,
      // not just the decode — otherwise the old photo sits there with no
      // feedback while the canvas re-encode runs. An empty slot keeps its
      // placeholder (no spinner) until the encode lands, as before.
      // _swapGen guards the mask against re-renders DURING the encode
      // (pointerenter, ResizeObserver, another slot's store write): the
      // stored value still resolves to the old image there, so _render's
      // same-src clear would otherwise unmask it mid-replace.
      if (this.hasAttribute('data-filled')) {
        this.setAttribute('data-swapping', '');
        this._swapGen = gen;
      }
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        // Clear BEFORE setSlot: its synchronous re-render must see no
        // pending encode, so a byte-identical re-upload (same data URL, no
        // load event coming) still clears the mask via the complete branch.
        this._swapGen = 0;
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._swapGen = 0;
        // Reveal the kept old image — unless another replacement (a
        // remote pick's src swap) is still in flight, in which case the
        // mask stays until THAT image settles (its load/error releases).
        this._releaseMask();
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is available on any filled slot — the user can
    // always reposition/scale. `fit` only sets the initial baseline (see
    // _geom): contain starts fully-visible, cover starts frame-filling.
    _reframes() {
      return this.hasAttribute('data-filled');
    }

    // The single release discipline for the replacement-in-flight mask
    // (data-swapping). The mask comes off only when BOTH hold:
    //  - no encode is pending (_swapGen) — mid-encode the stored value
    //    still resolves to the old image, so any reveal paints it;
    //  - the frame img has settled on its current src — an unsettled src
    //    means some replacement is still in flight (e.g. a remote pick),
    //    whoever started it, and revealing would paint the previous
    //    frame. The load/error listeners pass settled=true (the event IS
    //    the settlement signal, per spec complete is true by then);
    //    other callers rely on the complete flag (covers loaded AND
    //    failed).
    // Every release path funnels through here EXCEPT _render's empty
    // branch (the img is being cleared — nothing will ever settle).
    _releaseMask(settled) {
      if (!this._swapGen && !this._loadPending && (settled || this._img.complete)) {
        this.removeAttribute('data-swapping');
      }
    }

    // Baseline geometry, shared by clamp/apply/resize. `base` is the scale at
    // view-scale s=1: cover = fill the frame (overflow on the looser axis),
    // contain = fit fully inside (letterboxed). Zooming a contain image past
    // s where it overflows naturally becomes a crop. Null until the img has
    // loaded (naturalWidth is 0 before that) or when the slot has no layout
    // box — ResizeObserver fires with a 0×0 rect under display:none, and
    // clamping against a degenerate 1×1 frame would silently pull the stored
    // pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
      const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
      return {
        iw,
        ih,
        fw,
        fh,
        base
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      // Top-layer controls: pin to the frame's top-right in viewport px
      // (the same 8px inset as the in-frame layout; unscaled — top-layer UI
      // reads as chrome, not page content). BEFORE the geometry branch:
      // placement needs only the frame rect, and a not-yet-loaded or broken
      // src must not leave the promoted strip floating unpositioned. Gated
      // on the popover actually being open: without the Popover API,
      // showPopover() threw (swallowed in _enterReframe), .ctl stays in
      // its in-frame absolute layout, and viewport-px coordinates would
      // shove it off-frame — and matches(':popover-open') itself throws
      // there (unknown pseudo-class), hence the try/catch.
      if (this.hasAttribute('data-reframe')) {
        let onTop = false;
        try {
          onTop = this._ctl.matches(':popover-open');
        } catch {}
        if (onTop) {
          const r = this.getBoundingClientRect();
          this._ctl.style.left = r.right - 8 + 'px';
          this._ctl.style.top = r.top + 8 + 'px';
        }
      }
      if (!g) {
        // Dimensions not known yet (before img load) — centered fit so there
        // is no flash of an unpositioned image before the geometry lands.
        const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = contain ? 'contain' : 'cover';
        return;
      }
      // Baseline (cover-fill or contain-fit) × view scale. Width/height and
      // left/top are all frame-% — depends only on the frame aspect ratio, so
      // a responsive resize keeps the same crop. The spill layer mirrors the
      // same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      if (this.hasAttribute('data-reframe')) {
        // Top-layer spill: position in viewport px over the frame. The top
        // layer escapes ancestor transforms entirely, so EVERY term must be
        // in viewport units: getBoundingClientRect gives the frame's scaled
        // origin AND size, and the rect/layout ratio rescales the ghost —
        // sizing from layout px alone renders it 1/scale too large under a
        // scaled deck slide. Inner ghost + handles stay box-relative.
        const r = this.getBoundingClientRect();
        const sx = g.fw ? r.width / g.fw : 1;
        const sy = g.fh ? r.height / g.fh : 1;
        this._spill.style.width = g.iw * k * sx + 'px';
        this._spill.style.height = g.ih * k * sy + 'px';
        this._spill.style.left = r.left + (50 + this._view.x) / 100 * r.width + 'px';
        this._spill.style.top = r.top + (50 + this._view.y) / 100 * r.height + 'px';
      }
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      // An Unsplash src with no credit attribute must NOT render — showing
      // the photo uncredited is the Unsplash-terms violation itself. The
      // error tile replaces the photo until the credit is written. A
      // user-dropped image is the user's own content and always renders.
      // Trimmed: credit is agent/user-editable content, and a whitespace-
      // only value must count as missing — otherwise it would suppress the
      // error tile AND render an empty credit box (no text, no links),
      // exactly the unattributed state this gate exists to prevent.
      const credit = (this.getAttribute('credit') || '').trim();
      const attrError = !!(!credit && !this._userUrl && srcAttr && isUnsplashHost(srcAttr));
      this.toggleAttribute('data-attribution-error', attrError);
      if (url && !attrError) {
        const prev = this._img.getAttribute('src');
        if (prev !== url) {
          // Replacing an already-shown image: mark the swap BEFORE setting
          // src so the stale frame is never revealed (see the data-swapping
          // stylesheet rules). First fill (prev empty) keeps the existing
          // placeholder-until-load behavior — no spinner. _hidShowing
          // covers the pick path's transient attribution-error wipe: prev
          // is gone, but an image WAS showing, so this is a replacement.
          if (prev || this._hidShowing) this.setAttribute('data-swapping', '');
          // Mark the swap BEFORE assigning src: complete keeps reporting
          // the old settled request until the browser's
          // update-the-image-data microtask runs, so same-task re-renders
          // (the pick path's credit/credit-href setAttributes) need this
          // flag, not complete, to know a load is in flight.
          this._loadPending = true;
          this._img.src = url;
          this._ghost.src = url;
        } else {
          // Same-src re-render — release if settled, so an ingest-set
          // spinner can't stick after a byte-identical re-upload (same
          // data URL, no further load event ever fires).
          this._releaseMask();
        }
        this._hidShowing = false;
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this.removeAttribute('data-swapping');
        // The src is being removed — no load/error will ever fire for it.
        this._loadPending = false;
        // A transient attribution-error wipe of a showing image happens on
        // the pick path: the host sets src one setAttribute before credit,
        // so render N hides the old image (attrError) and render N+1
        // restores a URL. Remember the wipe so that restore renders as a
        // replacement (spinner), not a first fill (blank frame).
        this._hidShowing = attrError && !!this._img.getAttribute('src');
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        // The error tile owns the blocked-photo state; .empty stays for
        // the genuinely-empty slot.
        this._empty.style.display = attrError ? 'none' : 'flex';
        this.removeAttribute('data-filled');
      }

      // Credit belongs to the author src, so a user drop hides it.
      // textContent + the http(s)-only funnel keep external strings inert.
      const showCredit = !!(url && credit && !this._userUrl && !attrError);
      this._credit.textContent = '';
      if (showCredit) {
        // Validate once (resolved against the document, http(s) only),
        // then append the terms-required utm referral params to links
        // that point back at unsplash.com.
        let href = '';
        const rawHref = this.getAttribute('credit-href') || '';
        if (rawHref) {
          try {
            const u = new URL(rawHref, document.baseURI);
            if (u.protocol === 'http:' || u.protocol === 'https:') {
              href = withReferral(u.href);
            }
          } catch {}
        }
        const mkLink = (text, linkHref) => {
          const a = document.createElement('a');
          a.setAttribute('target', '_blank');
          a.setAttribute('rel', 'noopener noreferrer');
          a.setAttribute('href', linkHref);
          a.textContent = text;
          return a;
        };
        // Unsplash's prescribed credit is TWO links — the photographer's
        // name to their profile (credit-href) and 'Unsplash' to the
        // homepage. Render that split whenever the text has the canonical
        // shape; other text keeps the legacy single-link rendering.
        const m = /^Photo by (.+) on Unsplash$/.exec(credit);
        if (m) {
          this._credit.appendChild(document.createTextNode('Photo by '));
          this._credit.appendChild(href ? mkLink(m[1], href) : document.createTextNode(m[1]));
          this._credit.appendChild(document.createTextNode(' on '));
          this._credit.appendChild(mkLink('Unsplash', UNSPLASH_HOMEPAGE_HREF));
        } else if (href) {
          this._credit.appendChild(mkLink(credit, href));
        } else {
          this._credit.textContent = credit;
        }
      }
      this.toggleAttribute('data-credit', showCredit);
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ck-website/image-slot.js", error: String((e && e.message) || e) }); }

// ui_kits/homepage/Hero.jsx
try { (() => {
const D = window.CK_DATA;
function Nav() {
  const [solid, setSolid] = React.useState(false);
  React.useEffect(() => {
    const f = () => setSolid(window.scrollY > 24);
    window.addEventListener('scroll', f);
    return () => window.removeEventListener('scroll', f);
  }, []);
  return /*#__PURE__*/React.createElement("header", {
    className: "nav",
    "data-solid": solid ? '1' : '0'
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav-in"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    className: "brand"
  }, /*#__PURE__*/React.createElement("span", {
    className: "brand-mark"
  }, "CK"), /*#__PURE__*/React.createElement("span", {
    className: "brand-word"
  }, "CodeKerdos")), /*#__PURE__*/React.createElement("nav", {
    className: "nav-links"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#programs"
  }, "Programs"), /*#__PURE__*/React.createElement("a", {
    href: "#why"
  }, "Why us"), /*#__PURE__*/React.createElement("a", {
    href: "#outcomes"
  }, "Outcomes"), /*#__PURE__*/React.createElement("a", {
    href: "#mentors"
  }, "Mentors"), /*#__PURE__*/React.createElement("a", {
    href: "#faq"
  }, "FAQs")), /*#__PURE__*/React.createElement("div", {
    className: "nav-cta"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#programs",
    className: "ghost-btn"
  }, "Browse courses"), /*#__PURE__*/React.createElement("a", {
    href: "#cta",
    className: "pill-btn"
  }, "Book a free call"))));
}
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    className: "hero",
    id: "top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mesh",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("i", {
    className: "orb o1"
  }), /*#__PURE__*/React.createElement("i", {
    className: "orb o2"
  }), /*#__PURE__*/React.createElement("i", {
    className: "orb o3"
  })), /*#__PURE__*/React.createElement("div", {
    className: "grid-lines",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-badge"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), "Live cohorts \xB7 Gen AI infused curriculum"), /*#__PURE__*/React.createElement("h1", {
    className: "hero-h1"
  }, "Learn the way", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", null, "engineers"), " actually work."), /*#__PURE__*/React.createElement("p", {
    className: "hero-sub"
  }, "Live classes with senior engineers from Amazon, Oracle, Walmart and Visa. Real projects, 1:1 mentorship, mock interviews, and placement assistance \u2014 for freshers and working professionals alike."), /*#__PURE__*/React.createElement("div", {
    className: "hero-actions"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#programs",
    className: "cta-primary"
  }, "Explore programs", /*#__PURE__*/React.createElement("span", {
    className: "arrow"
  }, "\u2192")), /*#__PURE__*/React.createElement("a", {
    href: "#cta",
    className: "cta-secondary"
  }, "Talk to a counselor")), /*#__PURE__*/React.createElement("div", {
    className: "hero-stats"
  }, /*#__PURE__*/React.createElement(Stat, {
    n: "10K+",
    l: "Learners mentored"
  }), /*#__PURE__*/React.createElement(Stat, {
    n: "9",
    l: "Career-track programs"
  }), /*#__PURE__*/React.createElement(Stat, {
    n: "4.9",
    l: "Average course rating"
  }), /*#__PURE__*/React.createElement(Stat, {
    n: "15+",
    l: "Deployable projects"
  }))));
}
function Stat({
  n,
  l
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "hstat"
  }, /*#__PURE__*/React.createElement("b", null, n), /*#__PURE__*/React.createElement("span", null, l));
}
function Marquee() {
  const row = [...D.partners, ...D.partners];
  return /*#__PURE__*/React.createElement("section", {
    className: "marquee-wrap",
    "aria-label": "Where our learners work"
  }, /*#__PURE__*/React.createElement("p", {
    className: "marquee-label"
  }, "Our learners now build at"), /*#__PURE__*/React.createElement("div", {
    className: "marquee"
  }, /*#__PURE__*/React.createElement("div", {
    className: "marquee-track"
  }, row.map((p, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "logo-chip"
  }, p)))));
}
Object.assign(window, {
  Nav,
  Hero,
  Marquee
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/homepage/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/homepage/Programs.jsx
try { (() => {
const DD = window.CK_DATA;
function SectionHead({
  eyebrow,
  title,
  sub,
  dark
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: 'sec-head' + (dark ? ' on-tint' : '')
  }, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow"
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    className: "sec-title"
  }, title), sub ? /*#__PURE__*/React.createElement("p", {
    className: "sec-sub"
  }, sub) : null);
}
const SPANS = ['b-wide', 'b-tall', '', '', 'b-wide', '', '', '', 'b-wide'];
function Why() {
  return /*#__PURE__*/React.createElement("section", {
    className: "sec sec-dark",
    id: "why"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Why CodeKerdos",
    title: "Nine reasons people stay until they get the offer",
    sub: "Every program runs on the same spine: live teaching, AI-era tooling, and support that does not stop at the last class."
  }), /*#__PURE__*/React.createElement("div", {
    className: "bento"
  }, DD.reasons.map((r, i) => /*#__PURE__*/React.createElement("article", {
    key: r.n,
    className: 'bento-card ' + SPANS[i]
  }, /*#__PURE__*/React.createElement("div", {
    className: "bento-top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, String(r.n).padStart(2, '0')), r.live ? /*#__PURE__*/React.createElement("span", {
    className: "live"
  }, /*#__PURE__*/React.createElement("i", null), "Live") : null), /*#__PURE__*/React.createElement("h3", null, r.title), /*#__PURE__*/React.createElement("p", null, r.body))))));
}
function Programs() {
  const rail = React.useRef(null);
  const nudge = d => rail.current && rail.current.scrollBy({
    left: d * 400,
    behavior: 'smooth'
  });
  return /*#__PURE__*/React.createElement("section", {
    className: "sec sec-dark",
    id: "programs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rail-head"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Programs",
    title: "Pick the track that matches where you are"
  }), /*#__PURE__*/React.createElement("div", {
    className: "rail-nav"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => nudge(-1),
    "aria-label": "Previous"
  }, "\u2190"), /*#__PURE__*/React.createElement("button", {
    onClick: () => nudge(1),
    "aria-label": "Next"
  }, "\u2192")))), /*#__PURE__*/React.createElement("div", {
    className: "rail",
    ref: rail
  }, /*#__PURE__*/React.createElement("div", {
    className: "rail-pad"
  }), DD.courses.map(c => /*#__PURE__*/React.createElement("article", {
    key: c.slug,
    className: "course"
  }, /*#__PURE__*/React.createElement("div", {
    className: "course-meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rating"
  }, "\u2605 ", c.rating), /*#__PURE__*/React.createElement("span", {
    className: "sep"
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, c.ratingCount, " ratings"), /*#__PURE__*/React.createElement("span", {
    className: "sep"
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, c.duration)), /*#__PURE__*/React.createElement("h3", null, c.title), /*#__PURE__*/React.createElement("p", null, c.description), /*#__PURE__*/React.createElement("div", {
    className: "tags"
  }, c.tags.map(t => /*#__PURE__*/React.createElement("span", {
    key: t
  }, t))), /*#__PURE__*/React.createElement("div", {
    className: "course-foot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mentor"
  }, /*#__PURE__*/React.createElement("span", {
    className: "avatar"
  }, c.instructor.split(' ').map(w => w[0]).slice(0, 2).join('')), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, c.instructor), /*#__PURE__*/React.createElement("em", null, c.instructorRole))), /*#__PURE__*/React.createElement("span", {
    className: "learners"
  }, c.learners, " enrolled")), /*#__PURE__*/React.createElement("a", {
    href: "#cta",
    className: "course-link"
  }, "View curriculum \u2192"))), /*#__PURE__*/React.createElement("div", {
    className: "rail-pad"
  })));
}
function Compare() {
  return /*#__PURE__*/React.createElement("section", {
    className: "sec sec-dark"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap narrow"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "The difference",
    title: "CodeKerdos vs. the usual upskilling course"
  }), /*#__PURE__*/React.createElement("div", {
    className: "cmp"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cmp-head"
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("b", {
    className: "ours"
  }, "CodeKerdos"), /*#__PURE__*/React.createElement("b", {
    className: "theirs"
  }, "Typical platform")), DD.comparison.map(r => /*#__PURE__*/React.createElement("div", {
    className: "cmp-row",
    key: r.label
  }, /*#__PURE__*/React.createElement("span", {
    className: "cmp-label"
  }, r.label), /*#__PURE__*/React.createElement("span", {
    className: "cmp-ours"
  }, /*#__PURE__*/React.createElement("i", {
    className: "tick"
  }, "\u2713"), r.ours), /*#__PURE__*/React.createElement("span", {
    className: "cmp-theirs"
  }, r.theirs))))));
}
Object.assign(window, {
  SectionHead,
  Why,
  Programs,
  Compare
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/homepage/Programs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/homepage/Proof.jsx
try { (() => {
const P = window.CK_DATA;
function Outcomes() {
  return /*#__PURE__*/React.createElement("section", {
    className: "sec sec-tint",
    id: "outcomes"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    dark: true,
    eyebrow: "Outcomes",
    title: "They started where you are now",
    sub: "Offers from Microsoft, OLA, Capgemini, MakeMyTrip and Tata Cliq \u2014 written up by the people who got them."
  }), /*#__PURE__*/React.createElement("div", {
    className: "quotes"
  }, P.testimonials.map((t, i) => /*#__PURE__*/React.createElement("figure", {
    key: i,
    className: 'quote t-' + t.tint
  }, /*#__PURE__*/React.createElement("blockquote", null, t.quote), /*#__PURE__*/React.createElement("figcaption", null, /*#__PURE__*/React.createElement("span", {
    className: "avatar dark"
  }, t.name.split(' ').map(w => w[0]).slice(0, 2).join('')), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, t.name), /*#__PURE__*/React.createElement("em", null, t.outcome))))))));
}
function Mentors() {
  return /*#__PURE__*/React.createElement("section", {
    className: "sec sec-dark",
    id: "mentors"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Mentors",
    title: "Taught by people still shipping in production"
  }), /*#__PURE__*/React.createElement("div", {
    className: "mentors"
  }, P.mentors.map(m => /*#__PURE__*/React.createElement("div", {
    className: "mcard",
    key: m.name
  }, /*#__PURE__*/React.createElement("span", {
    className: "avatar lg"
  }, m.name.replace('-', ' ').split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase()), /*#__PURE__*/React.createElement("b", null, m.name.replace('-', ' ')), /*#__PURE__*/React.createElement("em", null, m.role))))));
}
function Journey() {
  return /*#__PURE__*/React.createElement("section", {
    className: "sec sec-dark"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "How it works",
    title: "Seven steps from first call to first offer"
  }), /*#__PURE__*/React.createElement("ol", {
    className: "steps"
  }, P.journey.map((s, i) => /*#__PURE__*/React.createElement("li", {
    key: s.title
  }, /*#__PURE__*/React.createElement("span", {
    className: "step-n"
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, s.title), /*#__PURE__*/React.createElement("p", null, s.body)))))));
}
function Faq() {
  const [open, setOpen] = React.useState(0);
  return /*#__PURE__*/React.createElement("section", {
    className: "sec sec-dark",
    id: "faq"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap narrow"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "FAQs",
    title: "Questions we get before every cohort"
  }), /*#__PURE__*/React.createElement("div", {
    className: "faq"
  }, P.faqs.map((f, i) => /*#__PURE__*/React.createElement("div", {
    className: 'faq-item' + (open === i ? ' is-open' : ''),
    key: i
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(open === i ? -1 : i)
  }, /*#__PURE__*/React.createElement("span", null, f.q.replace(/^\d+\.\s*/, '')), /*#__PURE__*/React.createElement("i", null, open === i ? '−' : '+')), open === i ? /*#__PURE__*/React.createElement("p", null, f.a) : null)))));
}
function Cta() {
  return /*#__PURE__*/React.createElement("section", {
    className: "cta-band",
    id: "cta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mesh sm",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("i", {
    className: "orb o1"
  }), /*#__PURE__*/React.createElement("i", {
    className: "orb o2"
  })), /*#__PURE__*/React.createElement("div", {
    className: "wrap narrow cta-in"
  }, /*#__PURE__*/React.createElement("h2", null, "Next cohort starts soon.", /*#__PURE__*/React.createElement("br", null), "Find out if it fits you."), /*#__PURE__*/React.createElement("p", null, "A 20-minute call: your background, a quick skill check, and an honest answer on which track to take \u2014 or whether to wait."), /*#__PURE__*/React.createElement("div", {
    className: "hero-actions center"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    className: "cta-primary"
  }, "Book a free counseling call", /*#__PURE__*/React.createElement("span", {
    className: "arrow"
  }, "\u2192")), /*#__PURE__*/React.createElement("a", {
    href: "#programs",
    className: "cta-secondary"
  }, "See all programs"))));
}
function Foot() {
  const cols = [{
    t: 'Programs',
    l: ['DSA + System Design', 'DevOps & SRE', 'Generative AI', 'AI FDE Program', 'Cloud & DevOps']
  }, {
    t: 'Company',
    l: ['Overview', 'Masterclass', 'Testimonials', 'FAQs', 'Contact us']
  }, {
    t: 'Follow',
    l: ['LinkedIn', 'Instagram', 'YouTube', 'Facebook']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    className: "foot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap foot-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "foot-brand"
  }, /*#__PURE__*/React.createElement("span", {
    className: "brand-mark"
  }, "CK"), /*#__PURE__*/React.createElement("p", null, "Career-track engineering programs, taught live by working engineers.")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    className: "foot-col",
    key: c.t
  }, /*#__PURE__*/React.createElement("h4", null, c.t), c.l.map(x => /*#__PURE__*/React.createElement("a", {
    href: "#top",
    key: x
  }, x))))), /*#__PURE__*/React.createElement("div", {
    className: "wrap foot-base"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 CodeKerdos"), /*#__PURE__*/React.createElement("span", null, "Privacy \xB7 Terms")));
}
Object.assign(window, {
  Outcomes,
  Mentors,
  Journey,
  Faq,
  Cta,
  Foot
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/homepage/Proof.jsx", error: String((e && e.message) || e) }); }

// ui_kits/homepage/data.js
try { (() => {
window.CK_DATA = {
  nav: [{
    label: 'Overview',
    id: 'home'
  }, {
    label: 'Courses',
    id: 'courses'
  }, {
    label: 'Masterclass',
    id: 'home'
  }, {
    label: 'Testimonials',
    id: 'home'
  }, {
    label: 'Contact',
    id: 'contact'
  }],
  courses: [{
    slug: 'dsa-system-design',
    title: 'Advance DSA + System Design',
    duration: '5 Months',
    learners: '1,500+',
    rating: '4.9',
    ratingCount: '1,200',
    description: 'Learn core Data Structures and Algorithms (DSA) with real-world coding problems and optimized solutions. Learn to think from brute force to optimal.',
    tags: ['DSA', 'System Design', '+1'],
    instructor: 'Soumyadeep Paul',
    instructorRole: 'CTO at Codekerdos & SDE-2 at Amazon'
  }, {
    slug: 'devops',
    title: 'DevOps & SRE Interview Preparation',
    duration: '5 Months',
    learners: '1,800+',
    rating: '4.8',
    ratingCount: '1,500',
    description: 'Master DevOps and Site Reliability Engineering by building strong fundamentals in Linux, Git, CI/CD, Kubernetes and observability.',
    tags: ['DevOps', 'SRE', '+2'],
    instructor: 'Yadnesh Nikam',
    instructorRole: 'Senior DevOps & MLOps Specialist at Holcim'
  }, {
    slug: 'generative-ai',
    title: 'Generative AI',
    duration: '5 Months',
    learners: '1,300+',
    rating: '4.9',
    ratingCount: '1,100',
    description: 'Master Large Language Models (LLMs), prompt engineering, and advanced fine-tuning techniques to build cutting-edge AI products.',
    tags: ['AI', 'LLMs', '+1'],
    instructor: 'Saksham Arora',
    instructorRole: 'Software Engineer 2 @ Intuit | Ex - Microsoft'
  }, {
    slug: 'ai-fde-program',
    title: 'AI FDE Program',
    duration: '5 Months',
    learners: '1,100+',
    rating: '4.8',
    ratingCount: '1,000',
    description: 'Become a production-ready AI Forward Deployed Engineer by learning how to design, build, deploy, and scale enterprise AI systems.',
    tags: ['AI', 'FDE', '+1'],
    instructor: 'Amol Mahajan',
    instructorRole: 'Instructor'
  }, {
    slug: 'agentic-ai-bootcamp',
    title: 'Agentic AI & Multi-Agent Systems Bootcamp',
    duration: '5 Months',
    learners: '1,100+',
    rating: '4.8',
    ratingCount: '1,000',
    description: 'Master the future of AI with our Agentic AI & AI Agents Bootcamp. This program provides an in-depth understanding of agent orchestration.',
    tags: ['AI', 'Agents', '+1'],
    instructor: 'Sankalp Saxena',
    instructorRole: 'Instructor'
  }, {
    slug: 'advanced-system-design-interview-prep',
    title: 'Advanced System Design + Interview Preparation',
    duration: '3 Months',
    learners: '1,600+',
    rating: '4.9',
    ratingCount: '1,300',
    description: 'Learn System Design fundamentals, including high-level architecture, scalability, and fault-tolerance. Apply your knowledge to real interviews.',
    tags: ['System Design', 'Interview Prep'],
    instructor: 'Baba Hayath Shaik',
    instructorRole: 'Principal Software Engineer at Autodesk'
  }, {
    slug: 'launchpad-fullstack',
    title: 'LaunchPad Full Stack Web Development',
    duration: '9 Months',
    learners: '2,000+',
    rating: '4.8',
    ratingCount: '1,800',
    description: 'Become a Full-Stack Developer with Java Frontend, Backend & AI/ML integration in real-world projects through live mentorship.',
    tags: ['Full Stack', 'Web Development', '+1'],
    instructor: 'Yogesh sharma',
    instructorRole: 'Founder & CEO at CodeKerdos'
  }, {
    slug: 'cloud-devops',
    title: 'Cloud & DevOps Engineering Program',
    duration: '3 Months',
    learners: '1,400+',
    rating: '4.9',
    ratingCount: '1,200',
    description: 'Master Cloud and DevOps with AWS, Linux, Docker, Kubernetes, Jenkins, and Terraform. Build real-world DevOps projects end to end.',
    tags: ['Cloud', 'DevOps', '+1'],
    instructor: 'Debjyoti Maity',
    instructorRole: 'SRE at Improving'
  }],
  reasons: [{
    n: 1,
    title: 'Live Classes + Recordings',
    live: true,
    body: 'Learn in real time and revisit lessons anytime with recorded sessions.'
  }, {
    n: 2,
    title: 'Gen AI Infused Curriculum',
    body: "Stay ahead with AI-powered learning tailored to modern industry needs. Every module is built around tools you'll actually use on the job."
  }, {
    n: 3,
    title: 'Hands-on AI',
    body: 'Build practical skills through real-world AI projects.'
  }, {
    n: 4,
    title: 'Certifications',
    body: 'Earn recognized credentials to boost your profile.'
  }, {
    n: 5,
    title: 'Lifetime Support',
    body: 'Mentorship whenever you need it, even after completion.'
  }, {
    n: 6,
    title: 'Mock Interviews',
    body: 'Simulated interviews to sharpen your confidence.'
  }, {
    n: 7,
    title: 'Affordable Education',
    body: 'Quality learning without breaking the bank, with transparent pricing and no hidden fees.'
  }, {
    n: 8,
    title: 'Doubt-Clearing',
    body: 'Dedicated sessions to resolve your queries fast.'
  }, {
    n: 9,
    title: 'Placement Assistance',
    body: 'Direct connections with hiring companies to help you land the right role.'
  }],
  testimonials: [{
    tint: 'cyan',
    name: 'Vrutik Patel',
    outcome: 'Microsoft',
    quote: "CodeKerdos didn't just teach me skills - it transformed the way I think and solve problems. With their constant guidance and interview prep, I achieved my dream role at Microsoft."
  }, {
    tint: 'teal',
    name: 'Avinash V',
    outcome: 'Tata Cliq',
    quote: "The hands-on projects gave me practical coding skills I could apply right away, and Yogesh Sir's feedback really boosted my confidence."
  }, {
    tint: 'orange',
    name: 'Deepak Saini',
    outcome: 'OLA Technologies',
    quote: "It was not just about theory, I was able to work on real-world projects that truly brought the concepts to life."
  }, {
    tint: 'neutral',
    name: 'Sanjana',
    outcome: 'SDE1 at MMT',
    quote: "I joined CodeKerdos with the goal of improving my coding skills and breaking into the software industry. Today, I'm proud to say that I've landed a role as SDE1 at MMT."
  }, {
    tint: 'orange',
    name: 'Kamaldeep Singh',
    outcome: 'Capgemini',
    quote: 'CodeKerdos turned my coding skills into a career. With their guidance and practice-driven approach, I cracked my interviews and landed a role at Capgemini.'
  }, {
    tint: 'cyan',
    name: 'Parth Raval',
    outcome: 'Professional growth',
    quote: 'Comprehensive, affordable training with hands-on coding practice, expert mentors, and a supportive community.'
  }],
  mentors: [{
    name: 'Yogesh Sharma',
    role: 'Founder & CEO at CodeKerdos'
  }, {
    name: 'Soumyadeep Paul',
    role: 'CTO at Codekerdos & SDE-2 at Amazon'
  }, {
    name: 'Yadnesh Nikam',
    role: 'Senior DevOps & MLOps Specialist at Holcim'
  }, {
    name: 'Baba Hayath Shaik',
    role: 'Principal Software Engineer at Autodesk'
  }, {
    name: 'Bhavesh-vaswani',
    role: 'SDE-3 at Walmart'
  }, {
    name: 'Saksham Arora',
    role: 'Software Engineer 2 @ Intuit | Ex - Microsoft'
  }, {
    name: 'Manaswini De',
    role: 'SWE at Visa'
  }, {
    name: 'Kritica Rani',
    role: 'Software Developer at Docusign'
  }, {
    name: 'Yash Bansal',
    role: 'DevOps Application Developer III at Oracle'
  }, {
    name: 'Anirban Paul',
    role: 'Lead AI/ML Engineer at Oracle'
  }],
  comparison: [{
    label: 'Course Duration',
    ours: '5-6 Months',
    theirs: '8-10 Months'
  }, {
    label: 'Live Mentor Access',
    ours: 'Weekly 1:1 + On-Demand',
    theirs: 'Limited Mentorship'
  }, {
    label: 'Hands-On Projects',
    ours: '15+ Real Deployable Projects',
    theirs: 'Few Practical Projects'
  }, {
    label: 'Job Support',
    ours: 'Real Career Support + Placement Assistance',
    theirs: 'Unrealistic Placement Promises'
  }, {
    label: 'Doubt Clearing',
    ours: '1:1 + Live + Chat',
    theirs: 'Limited Sessions'
  }, {
    label: 'Flexibility',
    ours: 'Freshers + Working Professional',
    theirs: 'Standardized Path'
  }, {
    label: 'Lifetime Access and Support',
    ours: 'Learning + Placement Assistance',
    theirs: 'No'
  }],
  faqs: [{
    q: '1. What do Beginner, Intermediate, and Advanced tracks mean?',
    a: "Think of these as different starting lines - all heading toward the same finish. Beginner: You're new to coding or brushing off the rust. Intermediate: You've got the basics nailed but want to get sharper at problem-solving, DSA, and real-world development. Advanced: You've already been in the game and want to master System Design, DevOps, and building products that scale."
  }, {
    q: '2. Do all tracks start at the same time?',
    a: "Yes! Everyone starts together, but your journey is tailored to your skill level. You'll still get access to shared community events, hackathons, and workshops - so there's plenty of cross-learning."
  }, {
    q: '3. How do I know which track to pick?',
    a: "Don't stress about this. We'll run you through a quick skill check before you start. Based on your current level, work experience, and career goals, we'll guide you to the track that fits you best."
  }, {
    q: '4. How long is the program?',
    a: "Most learners finish in 6 to 9 months - enough time to build strong fundamentals, work on real-world projects, and get job-ready, without losing momentum. And yes, we've built the schedule so even full-time working professionals can keep up without burning out."
  }],
  journey: [{
    title: 'Discover & Decide',
    body: "Your journey begins with exploration. Whether through demo sessions or career counseling, you'll get clarity on which courses best fit your goals."
  }, {
    title: 'Enrollment Made Easy',
    body: "Once you're ready, enrolling is simple and flexible. With multiple payment options, EMI plans, and quick onboarding, you gain instant access to learning resources."
  }, {
    title: 'Learn Through Live & Interactive Training',
    body: 'Dive into structured learning with live classes conducted by industry experts. Each session is interactive, engaging, and designed for real-world application.'
  }, {
    title: 'Hands-on Practice & Real-World Projects',
    body: "Theory alone isn't enough. Every course includes assignments, case studies, and capstone projects using real tools."
  }, {
    title: 'Continuous Mentorship & Support',
    body: "Our mentors provide 1:1 support, clear your doubts, and give personalized feedback on your work. You're never stuck and always moving forward."
  }, {
    title: 'Build, Showcase & Get Certified',
    body: "You'll have mastered tools, finished projects, and earned a certificate recognized by industry professionals."
  }, {
    title: 'Career Assistance & Growth',
    body: 'CodeKerdos supports you with placement guidance, career counseling, and networking opportunities. From resume building to referrals.'
  }],
  partners: ['Microsoft', 'Amazon', 'Meta', 'Zomato', 'Flipkart', 'Samsung', 'Swiggy', 'Oracle', 'Google']
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/homepage/data.js", error: String((e && e.message) || e) }); }

// ui_kits/website-redesign/Mocks.jsx
try { (() => {
/* Stale-bundle fallback: ProcessStep / QuoteCard / CtaBand were added to the design system
   after the currently-served _ds_bundle.js was compiled. These minimal stand-ins only mount
   when the bundle does not yet export them; once it recompiles the real components win. */
(function () {
  const NS = window.CodeKerdosDesignSystem_68bc71 || (window.CodeKerdosDesignSystem_68bc71 = {});
  if (!NS.ProcessStep) NS.ProcessStep = function ProcessStep(p) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'var(--ck-space-6)',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        order: p.flip ? 2 : 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--ck-space-3)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 15,
        letterSpacing: '1.6px',
        color: 'var(--ck-cyan)'
      }
    }, String(p.n).padStart(2, '0')), /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: 0,
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 'var(--ck-h3-size)',
        lineHeight: 1.2,
        letterSpacing: '-0.3px',
        color: 'var(--ck-white)'
      }
    }, p.title), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        font: 'var(--type-body-lg)',
        color: 'var(--ck-muted)',
        maxWidth: 460,
        textWrap: 'pretty'
      }
    }, p.body)), /*#__PURE__*/React.createElement("div", {
      style: {
        order: p.flip ? 1 : 2,
        minHeight: 260,
        borderRadius: 'var(--ck-radius-orb)',
        background: 'var(--ck-elevated)',
        border: '1px solid var(--ck-border)',
        padding: 'var(--ck-space-4)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: 'absolute',
        inset: '-40% -20% auto auto',
        width: 320,
        height: 320,
        background: 'var(--ck-glow-radial)',
        opacity: 0.5,
        pointerEvents: 'none'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        width: '100%'
      }
    }, p.visual)));
  };
  if (!NS.QuoteCard) NS.QuoteCard = function QuoteCard(p) {
    const big = p.size === 'lg';
    return /*#__PURE__*/React.createElement("figure", {
      style: {
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--ck-space-4)',
        padding: big ? 'var(--ck-space-5)' : 'var(--ck-card-padding)',
        borderRadius: 'var(--ck-radius-card)',
        background: 'var(--ck-elevated)',
        border: '1px solid var(--ck-border)',
        boxShadow: 'var(--ck-shadow-card)',
        height: '100%',
        ...p.style
      }
    }, /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: big ? 56 : 40,
        lineHeight: 0.6,
        color: 'var(--ck-cyan)',
        height: big ? 30 : 22
      }
    }, "\u201C"), /*#__PURE__*/React.createElement("blockquote", {
      style: {
        margin: 0,
        fontFamily: 'var(--font-display)',
        fontWeight: 500,
        fontSize: big ? 24 : 18,
        lineHeight: 1.45,
        letterSpacing: big ? '-0.4px' : '-0.1px',
        color: 'var(--ck-white)',
        textWrap: 'pretty',
        flex: 1
      }
    }, p.quote), /*#__PURE__*/React.createElement("figcaption", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--ck-space-3)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: big ? 48 : 40,
        height: big ? 48 : 40,
        borderRadius: 999,
        flex: '0 0 auto',
        background: 'var(--ck-grad-orb)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 15,
        fontWeight: 700,
        color: 'var(--ck-white)'
      }
    }, p.name), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 13,
        color: 'var(--ck-muted)'
      }
    }, p.role)), p.company ? /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 'auto',
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 14,
        letterSpacing: '-0.3px',
        color: 'var(--ck-muted)',
        opacity: 0.8,
        whiteSpace: 'nowrap'
      }
    }, p.company) : null));
  };
  if (!NS.CtaBand) NS.CtaBand = function CtaBand(p) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 'var(--ck-radius-orb)',
        background: 'var(--ck-elevated)',
        border: '1px solid var(--ck-border-strong)',
        padding: 'var(--ck-space-6) var(--ck-space-5)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: 'absolute',
        left: '50%',
        bottom: '-45%',
        width: 720,
        height: 720,
        transform: 'translateX(-50%)',
        background: 'var(--ck-glow-radial)',
        animation: 'ck-glow-pulse var(--ck-dur-pulse) var(--ck-ease-in-out) infinite',
        pointerEvents: 'none'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        maxWidth: 760,
        margin: '0 auto',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--ck-space-4)',
        alignItems: 'center'
      }
    }, p.eyebrow ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 'var(--ck-eyebrow-size)',
        letterSpacing: 'var(--ck-eyebrow-track)',
        textTransform: 'uppercase',
        color: 'var(--ck-cyan)'
      }
    }, p.eyebrow) : null, /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 48,
        lineHeight: 1.06,
        letterSpacing: '-1.2px',
        color: 'var(--ck-white)',
        textWrap: 'balance'
      }
    }, p.title, p.emphasis ? /*#__PURE__*/React.createElement(React.Fragment, null, ' ', /*#__PURE__*/React.createElement("span", {
      style: {
        background: 'var(--ck-grad-text)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }
    }, p.emphasis)) : null), p.action, p.sub ? /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        font: 'var(--type-body-lg)',
        color: 'var(--ck-muted)',
        maxWidth: 560,
        textWrap: 'pretty'
      }
    }, p.sub) : null, (p.benefits || []).length ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 'var(--ck-space-5)',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: 'var(--ck-space-2)'
      }
    }, p.benefits.map(b => /*#__PURE__*/React.createElement("span", {
      key: b,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--ck-space-2)',
        font: 'var(--type-body)',
        color: 'var(--ck-white)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        color: 'var(--ck-success)',
        fontWeight: 700
      }
    }, "\u2713"), b))) : null));
  };
})();
const panel = {
  borderRadius: 'var(--ck-radius-card)',
  background: 'var(--ck-surface)',
  border: '1px solid var(--ck-border-strong)',
  padding: 'var(--ck-space-4)',
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--ck-space-3)',
  boxShadow: 'var(--ck-shadow-card)'
};
const rowLabel = {
  font: 'var(--type-body)',
  fontSize: 12,
  color: 'var(--ck-muted)'
};
function MockIntake() {
  return /*#__PURE__*/React.createElement("div", {
    style: panel
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '1.6px',
      textTransform: 'uppercase',
      color: 'var(--ck-cyan)'
    }
  }, "Skill check \xB7 5 questions"), [['Where are you now?', 'Working professional, 3 yrs'], ['Target role', 'Backend / AI engineer'], ['Hours per week', '8-10'], ['Timeline', 'Next 6 months']].map(([q, a]) => /*#__PURE__*/React.createElement("div", {
    key: q,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: rowLabel
  }, q), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 14px',
      borderRadius: 'var(--ck-radius-chip)',
      background: 'var(--ck-elevated)',
      border: '1px solid var(--ck-border)',
      font: 'var(--type-body)',
      fontSize: 13,
      color: 'var(--ck-white)'
    }
  }, a))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      alignSelf: 'flex-start',
      padding: '9px 18px',
      borderRadius: 'var(--ck-radius-pill)',
      background: 'var(--ck-grad-button)',
      boxShadow: 'var(--ck-shadow-glow)',
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 600,
      color: '#fff'
    }
  }, "See my track"));
}
function MockMatch() {
  const rows = [{
    t: 'Advance DSA + System Design',
    m: '96% match',
    on: true
  }, {
    t: 'Generative AI',
    m: '88% match'
  }, {
    t: 'Cloud & DevOps Engineering',
    m: '71% match'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--ck-space-2)'
    }
  }, rows.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--ck-space-3)',
      padding: '14px 16px',
      borderRadius: 'var(--ck-radius-card)',
      background: r.on ? 'var(--ck-surface)' : 'rgba(11,15,26,0.6)',
      border: '1px solid ' + (r.on ? 'var(--ck-cyan)' : 'var(--ck-border)'),
      boxShadow: r.on ? 'var(--ck-shadow-glow)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 999,
      background: 'var(--ck-grad-orb)',
      flex: '0 0 auto'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 14,
      color: r.on ? 'var(--ck-white)' : 'var(--ck-muted)'
    }
  }, r.t), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body)',
      fontSize: 12,
      fontWeight: 600,
      color: r.on ? 'var(--ck-cyan)' : 'var(--ck-muted)'
    }
  }, r.m))));
}
function MockLive() {
  return /*#__PURE__*/React.createElement("div", {
    style: panel
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--ck-space-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: 999,
      background: 'var(--ck-success)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body)',
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--ck-white)'
    }
  }, "Live now \xB7 Sharding & replication"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      font: 'var(--type-body)',
      fontSize: 12,
      color: 'var(--ck-muted)'
    }
  }, "48 in class")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 96,
      borderRadius: 'var(--ck-radius-chip)',
      background: 'var(--ck-grad-orb)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 42,
      height: 42,
      borderRadius: 999,
      background: 'rgba(0,0,0,0.35)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontSize: 15
    }
  }, "\u25B6")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--ck-space-2)',
      flexWrap: 'wrap'
    }
  }, ['Recording ready', 'Notes', 'Doubt thread'].map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      padding: '7px 13px',
      borderRadius: 'var(--ck-radius-pill)',
      background: 'var(--ck-veil-cyan)',
      border: '1px solid var(--ck-border-strong)',
      font: 'var(--type-body)',
      fontSize: 12,
      color: 'var(--ck-cyan)'
    }
  }, t))));
}
function MockProjects() {
  const rows = [['url-shortener', 'deployed', 'var(--ck-success)'], ['rag-search-api', 'deployed', 'var(--ck-success)'], ['k8s-autoscaler', 'in review', 'var(--ck-orange)'], ['agentic-support-bot', 'building', 'var(--ck-muted)']];
  return /*#__PURE__*/React.createElement("div", {
    style: panel
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '1.6px',
      textTransform: 'uppercase',
      color: 'var(--ck-cyan)'
    }
  }, "Portfolio \xB7 15+ projects"), rows.map(([n, s, c]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--ck-space-3)',
      paddingBottom: 10,
      borderBottom: '1px solid var(--ck-border)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--ck-white)',
      flex: 1
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body)',
      fontSize: 12,
      color: c
    }
  }, s))));
}
function MockOffer() {
  return /*#__PURE__*/React.createElement("div", {
    style: panel
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '1.6px',
      textTransform: 'uppercase',
      color: 'var(--ck-cyan)'
    }
  }, "Placement track"), [['Resume reviewed', '✓'], ['4 mock interviews cleared', '✓'], ['Referrals sent', '3'], ['Offers in hand', '2']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--ck-space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      font: 'var(--type-body)',
      fontSize: 13,
      color: 'var(--ck-white)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body)',
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--ck-success)'
    }
  }, v))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--ck-border)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--ck-space-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 30,
      letterSpacing: '-1px',
      background: 'var(--ck-grad-text)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    }
  }, "120%"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body)',
      fontSize: 13,
      color: 'var(--ck-muted)'
    }
  }, "average CTC hike")));
}
function MockHeroStack() {
  const people = [{
    n: 'Vrutik Patel',
    r: 'SDE · Microsoft',
    t: 'DSA + System Design'
  }, {
    n: 'Tushar Yadav',
    r: 'Software Engineer · Paytm',
    t: 'Generative AI'
  }, {
    n: 'Kuppuraj T',
    r: 'DevOps Engineer · TCS',
    t: 'Cloud & DevOps'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      maxWidth: 440
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: '-22%',
      background: 'var(--ck-glow-radial)',
      animation: 'ck-glow-pulse var(--ck-dur-pulse) var(--ck-ease-in-out) infinite',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--ck-space-3)'
    }
  }, people.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: p.n,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--ck-space-3)',
      padding: '16px 18px',
      borderRadius: 'var(--ck-radius-card)',
      background: 'var(--ck-elevated)',
      border: '1px solid var(--ck-border-strong)',
      boxShadow: 'var(--ck-shadow-card)',
      marginLeft: i === 1 ? 32 : 0,
      marginRight: i === 1 ? 0 : 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 42,
      height: 42,
      borderRadius: 999,
      background: 'var(--ck-grad-orb)',
      flex: '0 0 auto'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--ck-white)'
    }
  }, p.n), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body)',
      fontSize: 12,
      color: 'var(--ck-muted)'
    }
  }, p.r)), /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '6px 12px',
      borderRadius: 'var(--ck-radius-pill)',
      background: 'var(--ck-veil-cyan)',
      border: '1px solid var(--ck-border-strong)',
      font: 'var(--type-body)',
      fontSize: 11,
      color: 'var(--ck-cyan)',
      whiteSpace: 'nowrap'
    }
  }, p.t))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 132,
      borderRadius: 'var(--ck-radius-orb)',
      background: 'var(--ck-grad-orb)',
      border: '1px solid var(--ck-border-strong)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 'var(--ck-space-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 52,
      height: 52,
      borderRadius: 999,
      background: 'rgba(0,0,0,0.35)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontSize: 18
    }
  }, "\u25B6"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 18,
      bottom: 14,
      font: 'var(--type-body)',
      fontSize: 12,
      fontWeight: 600,
      color: 'rgba(255,255,255,0.9)'
    }
  }, "Watch a live class"))));
}
Object.assign(window, {
  MockIntake,
  MockMatch,
  MockLive,
  MockProjects,
  MockOffer,
  MockHeroStack
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website-redesign/Mocks.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website-redesign/RedesignHomeScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  Tag,
  StatusPill,
  Eyebrow,
  SectionHeading,
  CourseCard,
  TestimonialCard,
  StatTile,
  ComparisonRow,
  MentorCard,
  ProcessStep,
  QuoteCard,
  Reveal,
  CountUp,
  FeatureCycler,
  LogoMarquee,
  SectionBand,
  Accordion,
  CtaBand
} = window.CodeKerdosDesignSystem_68bc71;
const D = window.CK_DATA;

/* 1 — Hero: badge, headline with gradient emphasis, three inline chips, one CTA, floating profile stack */
function Hero({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ck-void)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--ck-container)',
      margin: '0 auto',
      padding: '88px var(--ck-space-5) 72px',
      display: 'grid',
      gridTemplateColumns: '1.1fr 0.9fr',
      gap: 'var(--ck-space-6)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--ck-space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      alignSelf: 'flex-start',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--ck-space-2)',
      padding: '8px 16px',
      borderRadius: 'var(--ck-radius-pill)',
      background: 'var(--ck-veil-cyan)',
      border: '1px solid var(--ck-border-strong)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: 'var(--ck-cyan)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 'var(--ck-eyebrow-size)',
      letterSpacing: 'var(--ck-eyebrow-track)',
      textTransform: 'uppercase',
      color: 'var(--ck-cyan)'
    }
  }, "India's most practical AI engineering platform")), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 62,
      lineHeight: 1.04,
      letterSpacing: '-1.8px',
      color: 'var(--ck-white)',
      textWrap: 'balance'
    }
  }, "Build AI products, crack top interviews and", ' ', /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic',
      fontWeight: 700,
      background: 'var(--ck-grad-text)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    }
  }, "get hired faster.")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--type-body-lg)',
      color: 'var(--ck-muted)',
      maxWidth: 540,
      textWrap: 'pretty'
    }
  }, "No guesswork, no recorded-video graveyard, no unrealistic placement promises."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--ck-space-5)',
      flexWrap: 'wrap'
    }
  }, [['Live mentorship', 'Weekly 1:1 + on-demand'], ['Transparent pricing', 'EMI, no hidden fees'], ['Curated tracks', 'Matched to your level']].map(([t, s]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      gap: 'var(--ck-space-2)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 20,
      height: 20,
      borderRadius: 999,
      flex: '0 0 auto',
      marginTop: 2,
      background: 'var(--ck-veil-cyan-hover)',
      border: '1px solid var(--ck-cyan)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--ck-cyan)',
      fontSize: 11,
      fontWeight: 700
    }
  }, "\u2713"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--ck-white)'
    }
  }, t), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body)',
      fontSize: 12,
      color: 'var(--ck-muted)'
    }
  }, s))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--ck-space-3)',
      flexWrap: 'wrap',
      marginTop: 'var(--ck-space-2)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => onNavigate('contact')
  }, "Book A Free Webinar"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    onClick: () => onNavigate('contact')
  }, "Request a Callback")))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120,
    style: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(MockHeroStack, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--ck-border)',
      padding: '32px 0 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--ck-container)',
      margin: '0 auto',
      padding: '0 var(--ck-space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--ck-space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--ck-space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 26,
      height: 26,
      borderRadius: 999,
      background: 'var(--ck-veil-cyan)',
      border: '1px solid var(--ck-border-strong)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--ck-cyan)',
      fontSize: 12
    }
  }, "\u2605"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 17,
      color: 'var(--ck-white)'
    }
  }, "Our learners work at the best in the business.")), /*#__PURE__*/React.createElement(LogoMarquee, {
    names: D.partners
  }), /*#__PURE__*/React.createElement(LogoMarquee, {
    names: ['Paytm', 'IBM', 'TCS', 'KapturCx', 'LiveRamp', 'MakeMyTrip', 'Capgemini', 'OLA', 'Tata Cliq'],
    speed: 36
  }))));
}

/* 2 — Numbered process sequence with alternating visual panels */
function Process() {
  const steps = [{
    n: 1,
    title: 'Share where you are.',
    body: 'Answer a five-question skill check and a counselor maps you to the beginner, intermediate or advanced track — free, before you pay anything.',
    visual: /*#__PURE__*/React.createElement(MockIntake, null)
  }, {
    n: 2,
    title: 'Get matched to one track.',
    body: 'We curate the programs that fit your level, target role and hours per week, so you commit to one thing instead of collecting eight courses.',
    visual: /*#__PURE__*/React.createElement(MockMatch, null),
    flip: true
  }, {
    n: 3,
    title: 'Learn live, then rewatch.',
    body: 'Live cohorts run by working engineers, every session recorded, with doubt threads and 1:1 mentor time between classes.',
    visual: /*#__PURE__*/React.createElement(MockLive, null)
  }, {
    n: 4,
    title: 'Ship 15+ real projects.',
    body: 'Deployable projects reviewed by a mentor, not toy exercises — the portfolio is the thing you take into the interview.',
    visual: /*#__PURE__*/React.createElement(MockProjects, null),
    flip: true
  }, {
    n: 5,
    title: 'Walk into interviews ready.',
    body: 'Resume review, mock interviews with FAANG mentors, referrals and placement assistance that stays open for life.',
    visual: /*#__PURE__*/React.createElement(MockOffer, null)
  }];
  return /*#__PURE__*/React.createElement(SectionBand, {
    tone: "surface"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--ck-space-6)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      maxWidth: 860,
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 46,
      lineHeight: 1.08,
      letterSpacing: '-1.4px',
      color: 'var(--ck-white)',
      textWrap: 'balance'
    }
  }, "Get job-ready without guessing what to learn next."), steps.map(s => /*#__PURE__*/React.createElement(Reveal, {
    key: s.n
  }, /*#__PURE__*/React.createElement(ProcessStep, s)))));
}

/* 3 — Vertical label list drawing into a live preview */
function Curriculum() {
  return /*#__PURE__*/React.createElement(SectionBand, {
    tone: "void"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--ck-space-5)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      maxWidth: 820,
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 46,
      lineHeight: 1.08,
      letterSpacing: '-1.4px',
      color: 'var(--ck-white)',
      textWrap: 'balance'
    }
  }, "A curriculum that maps to the job, not the syllabus."), /*#__PURE__*/React.createElement(FeatureCycler, {
    items: [{
      label: 'DSA',
      body: 'Complexity, patterns and the habit of moving from brute force to optimal under time pressure.'
    }, {
      label: 'System Design',
      body: 'High-level architecture, scalability, caching, queues and fault tolerance — with written trade-offs.'
    }, {
      label: 'Gen AI',
      body: 'LLMs, prompt engineering, RAG and fine-tuning, applied to products that serve real traffic.'
    }, {
      label: 'Agentic AI',
      body: 'Agent orchestration and multi-agent systems, from tool use to evaluation harnesses.'
    }, {
      label: 'DevOps & SRE',
      body: 'Linux, Git, CI/CD, Docker, Kubernetes, Terraform and observability you can operate on call.'
    }, {
      label: 'Interview Prep',
      body: 'Weekly mocks with mentors from Amazon, Walmart and Microsoft, plus resume and referral support.'
    }]
  })));
}

/* 4 — Two-paragraph rigor statement with a single CTA */
function Rigor({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement(SectionBand, {
    tone: "surface"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--ck-space-6)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 44,
      lineHeight: 1.08,
      letterSpacing: '-1.3px',
      color: 'var(--ck-white)',
      textWrap: 'balance'
    }
  }, "Five to six months of real work, so you skip the eight-month detour."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--ck-space-4)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--type-body-lg)',
      color: 'var(--ck-muted)',
      textWrap: 'pretty'
    }
  }, "Every module is built around tools you'll actually use on the job and ends in something deployed. Mentors are working engineers at Amazon, Walmart, Autodesk, Microsoft, Intuit, Oracle, Visa and Docusign \u2014 they review your code, not a rubric."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--type-body-lg)',
      color: 'var(--ck-muted)',
      textWrap: 'pretty'
    }
  }, "The schedule is built for people with a full-time job, which is why most learners finish in six to nine months without burning out. Learning material and placement assistance stay open after you finish."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--ck-space-3)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => onNavigate('contact')
  }, "Book A Free Webinar"), /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    icon: "\u2192"
  }, "Latest placement report")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 'var(--ck-space-3)',
      marginTop: 'var(--ck-space-2)'
    }
  }, /*#__PURE__*/React.createElement(StatTile, {
    value: /*#__PURE__*/React.createElement(CountUp, {
      to: 92,
      suffix: "%"
    }),
    label: "Landed jobs within 6 months."
  }), /*#__PURE__*/React.createElement(StatTile, {
    value: /*#__PURE__*/React.createElement(CountUp, {
      to: 40,
      suffix: "+"
    }),
    label: "Mentors from FAANG & top tech."
  })))));
}

/* 5 — Endorsement grid, featured quote first */
function Backed() {
  return /*#__PURE__*/React.createElement(SectionBand, {
    tone: "void"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--ck-space-5)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      maxWidth: 720,
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 46,
      lineHeight: 1.08,
      letterSpacing: '-1.4px',
      color: 'var(--ck-white)',
      textWrap: 'balance'
    }
  }, "Taught by engineers who ship at scale."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr',
      gap: 'var(--ck-space-4)'
    }
  }, /*#__PURE__*/React.createElement(QuoteCard, {
    size: "lg",
    quote: "CodeKerdos was the game-changer in my journey, transforming my approach to complex problems. The rigorous curriculum in advance DSA + System Design and the incredible mentorship gave me the confidence I needed to succeed in top-tier interviews.",
    name: "Harsh Vardhan",
    role: "Alumnus \xB7 DSA + System Design",
    company: "FAANG"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--ck-space-4)'
    }
  }, /*#__PURE__*/React.createElement(QuoteCard, {
    quote: "Today, I work on backend systems powering AI voice products that handle over 1M+ calls daily at scale.",
    name: "Saksham Srivastava",
    role: "Software Engineer",
    company: "KapturCx"
  }), /*#__PURE__*/React.createElement(QuoteCard, {
    quote: "The hands-on projects and mentorship helped me gain confidence in CI/CD, Docker, Kubernetes, cloud platforms, and automation.",
    name: "Kuppuraj T",
    role: "DevOps Engineer",
    company: "TCS"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gap: 'var(--ck-space-4)'
    }
  }, D.mentors.slice(0, 5).map((m, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: m.name,
    delay: i * 80
  }, /*#__PURE__*/React.createElement(MentorCard, _extends({}, m, {
    linkedin: "#",
    style: {
      height: '100%'
    }
  })))))));
}

/* 6 — Course catalogue */
function Courses({
  onOpenCourse
}) {
  return /*#__PURE__*/React.createElement(SectionBand, {
    tone: "cyan",
    bleed: true
  }, /*#__PURE__*/React.createElement("div", {
    id: "courses",
    style: {
      paddingTop: 40,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--ck-space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 'var(--ck-space-5)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      maxWidth: 620,
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 46,
      lineHeight: 1.08,
      letterSpacing: '-1.4px',
      color: 'var(--ck-ink)',
      textWrap: 'balance'
    }
  }, "Eight live tracks. Pick the one that fits."), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-lg)',
      color: 'var(--ck-ink-muted)',
      maxWidth: 380,
      textWrap: 'pretty'
    }
  }, "Freshers and working professionals, from three to nine months.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 'var(--ck-space-4)'
    }
  }, D.courses.map((c, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: c.slug,
    delay: i % 4 * 80
  }, /*#__PURE__*/React.createElement(CourseCard, _extends({}, c, {
    href: "#",
    onClick: () => onOpenCourse(c.slug),
    style: {
      height: '100%',
      cursor: 'pointer'
    }
  })))))));
}

/* 7 — Alumni outcomes carousel */
function Outcomes() {
  const [page, setPage] = React.useState(0);
  const perPage = 3;
  const pages = Math.ceil(D.testimonials.length / perPage);
  const shown = D.testimonials.slice(page * perPage, page * perPage + perPage);
  const arrow = {
    width: 40,
    height: 40,
    borderRadius: 999,
    cursor: 'pointer',
    background: 'transparent',
    border: '1px solid rgba(11,15,26,0.16)',
    color: 'var(--ck-ink)',
    fontSize: 16,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center'
  };
  return /*#__PURE__*/React.createElement(SectionBand, {
    tone: "teal"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--ck-space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 'var(--ck-space-5)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      maxWidth: 660,
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 46,
      lineHeight: 1.08,
      letterSpacing: '-1.4px',
      color: 'var(--ck-ink)',
      textWrap: 'balance'
    }
  }, "Helping learners land the exact role they want."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--ck-space-2)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: arrow,
    onClick: () => setPage(p => (p - 1 + pages) % pages),
    "aria-label": "Previous"
  }, "\u2190"), /*#__PURE__*/React.createElement("button", {
    style: arrow,
    onClick: () => setPage(p => (p + 1) % pages),
    "aria-label": "Next"
  }, "\u2192"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--ck-space-4)'
    }
  }, shown.map(t => /*#__PURE__*/React.createElement(TestimonialCard, _extends({
    key: t.name
  }, t, {
    style: {
      height: '100%'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 'var(--ck-space-4)'
    }
  }, /*#__PURE__*/React.createElement(StatTile, {
    onTint: true,
    value: /*#__PURE__*/React.createElement(CountUp, {
      to: 92,
      suffix: "%"
    }),
    label: "Of graduates landed jobs within 6 months."
  }), /*#__PURE__*/React.createElement(StatTile, {
    onTint: true,
    value: /*#__PURE__*/React.createElement(CountUp, {
      to: 120,
      suffix: "%"
    }),
    label: "Average hike in learners' CTC."
  }), /*#__PURE__*/React.createElement(StatTile, {
    onTint: true,
    value: /*#__PURE__*/React.createElement(CountUp, {
      to: 50,
      suffix: "+"
    }),
    label: "Top tech companies hire from us."
  }), /*#__PURE__*/React.createElement(StatTile, {
    onTint: true,
    value: /*#__PURE__*/React.createElement(CountUp, {
      to: 15,
      suffix: "+"
    }),
    label: "Deployable projects in your portfolio."
  }))));
}

/* 8 — Comparison */
function Compare() {
  return /*#__PURE__*/React.createElement(SectionBand, {
    tone: "void"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--ck-space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 'var(--ck-space-5)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      maxWidth: 560,
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 46,
      lineHeight: 1.08,
      letterSpacing: '-1.4px',
      color: 'var(--ck-white)',
      textWrap: 'balance'
    }
  }, "Clear, honest, and built for outcomes."), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-lg)',
      color: 'var(--ck-muted)',
      maxWidth: 400,
      textWrap: 'pretty'
    }
  }, "When you're investing in your future, it's smart to compare.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr 1fr 1fr',
      gap: 'var(--ck-space-4)',
      padding: '0 var(--ck-space-4)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "muted"
  }, "Product comparison"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 16,
      color: 'var(--ck-cyan)'
    }
  }, "CodeKerdos"), /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "muted"
  }, "Others")), D.comparison.map((r, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: r.label,
    delay: i * 60
  }, /*#__PURE__*/React.createElement(ComparisonRow, r))))));
}

/* 9 — FAQ with support line */
function Faqs() {
  return /*#__PURE__*/React.createElement(SectionBand, {
    tone: "neutral"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '0.8fr 1.2fr',
      gap: 'var(--ck-space-6)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--ck-space-3)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 42,
      lineHeight: 1.08,
      letterSpacing: '-1.2px',
      color: 'var(--ck-ink)',
      textWrap: 'balance'
    }
  }, "Frequently asked questions"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--type-body-lg)',
      color: 'var(--ck-ink-muted)',
      textWrap: 'pretty'
    }
  }, "Have more questions? Call us at ", /*#__PURE__*/React.createElement("a", {
    href: "tel:+919266404473",
    style: {
      color: 'var(--ck-teal-deep)',
      fontWeight: 600
    }
  }, "+91 92664 04473"), " and a counselor will walk you through it.")), /*#__PURE__*/React.createElement(Accordion, {
    onTint: true,
    items: D.faqs
  })));
}

/* 10 — Referral + closing CTA */
function Closing({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement(SectionBand, {
    tone: "void"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--ck-space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.2fr 0.8fr',
      gap: 'var(--ck-space-5)',
      alignItems: 'center',
      padding: 'var(--ck-space-5)',
      borderRadius: 'var(--ck-radius-orb)',
      background: 'var(--ck-elevated)',
      border: '1px solid var(--ck-border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--ck-space-3)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Refer & earn"), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 30,
      letterSpacing: '-0.8px',
      color: 'var(--ck-white)'
    }
  }, "They save 10%. You earn \u20B92,999."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--type-body)',
      color: 'var(--ck-muted)',
      maxWidth: 520,
      textWrap: 'pretty'
    }
  }, "Unlimited referrals, credited once your friend completes enrollment. To refer someone, call us at +91 92664 04473.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--ck-space-2)'
    }
  }, ['Unlimited referrals', 'Your friends save, you earn', 'Credited on enrollment'].map(t => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      gap: 'var(--ck-space-2)',
      alignItems: 'center',
      font: 'var(--type-body)',
      color: 'var(--ck-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: 'var(--ck-success)',
      fontWeight: 700
    }
  }, "\u2713"), t)))), /*#__PURE__*/React.createElement(CtaBand, {
    eyebrow: "Next cohort starts monthly",
    title: "You're one call away from",
    emphasis: "your next role.",
    action: /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      onClick: () => onNavigate('contact')
    }, "Book A Free Webinar"),
    sub: "Get clarity, guidance, and support from industry professionals \u2014 the counseling call is free.",
    benefits: ['5-6 months, not 8-10', '15+ real deployable projects', 'Lifetime access and support']
  })));
}
function RedesignHomeScreen({
  onNavigate,
  onOpenCourse
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, {
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement(Process, null), /*#__PURE__*/React.createElement(Curriculum, null), /*#__PURE__*/React.createElement(Rigor, {
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement(Backed, null), /*#__PURE__*/React.createElement(Courses, {
    onOpenCourse: onOpenCourse
  }), /*#__PURE__*/React.createElement(Outcomes, null), /*#__PURE__*/React.createElement(Compare, null), /*#__PURE__*/React.createElement(Faqs, null), /*#__PURE__*/React.createElement(Closing, {
    onNavigate: onNavigate
  }));
}
Object.assign(window, {
  RedesignHomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website-redesign/RedesignHomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  Tag,
  Eyebrow,
  SectionHeading,
  MentorCard,
  StatTile,
  SectionBand,
  Reveal
} = window.CodeKerdosDesignSystem_68bc71;
const CTD = window.CK_DATA;
function ContactScreen({
  onNavigate
}) {
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    phone: '',
    track: 'Advance DSA + System Design',
    level: 'Working professional'
  });
  const [sent, setSent] = React.useState(false);
  const field = {
    padding: '14px 18px',
    borderRadius: 'var(--ck-radius-chip)',
    background: 'var(--ck-elevated)',
    border: '1px solid var(--ck-border)',
    color: 'var(--ck-white)',
    font: 'var(--type-body)',
    outline: 'none',
    width: '100%'
  };
  const set = k => e => setForm(f => ({
    ...f,
    [k]: e.target.value
  }));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ck-void)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--ck-container)',
      margin: '0 auto',
      padding: '64px var(--ck-space-5) 96px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--ck-space-5)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--ck-space-4)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate('home'),
    style: {
      appearance: 'none',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      padding: 0,
      font: 'var(--type-body)',
      color: 'var(--ck-cyan)',
      alignSelf: 'flex-start'
    }
  }, "\u2190 Back to overview"), /*#__PURE__*/React.createElement(Eyebrow, null, "Free 1:1 career counseling"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 56,
      lineHeight: 1.05,
      letterSpacing: '-1.5px',
      color: 'var(--ck-white)',
      textWrap: 'balance'
    }
  }, "Book your free 1:1 career counseling today."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--type-body-lg)',
      color: 'var(--ck-muted)',
      maxWidth: 520,
      textWrap: 'pretty'
    }
  }, "Get clarity, guidance, and support from industry professionals. Tell us where you are and we will point you at the right track."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--ck-space-2)',
      flexWrap: 'wrap'
    }
  }, ['Gurugram', 'Bangalore', 'Delhi', 'Hyderabad', 'Chennai', 'Mumbai', 'Kolkata'].map(c => /*#__PURE__*/React.createElement(Tag, {
    key: c,
    tone: "neutral"
  }, c))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--ck-space-3)',
      marginTop: 'var(--ck-space-3)'
    }
  }, /*#__PURE__*/React.createElement(StatTile, {
    value: "40+",
    label: "Mentors from FAANG & top tech firms."
  }), /*#__PURE__*/React.createElement(StatTile, {
    value: "\u20B92,999",
    label: "Cashback for every successful referral."
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--ck-space-5)',
      borderRadius: 'var(--ck-radius-orb)',
      background: 'var(--ck-elevated)',
      border: '1px solid var(--ck-border-strong)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--ck-space-3)',
      boxShadow: 'var(--ck-shadow-card)'
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--ck-space-3)',
      padding: 'var(--ck-space-4) 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 44,
      height: 44,
      borderRadius: 999,
      background: 'var(--ck-success)',
      color: 'var(--ck-success-ink)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 20,
      fontWeight: 700
    }
  }, "\u2713"), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--ck-h3-size)',
      letterSpacing: '-0.3px',
      color: 'var(--ck-white)'
    }
  }, "You're on the list, ", form.name || 'friend', "."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--type-body)',
      color: 'var(--ck-muted)'
    }
  }, "A counselor will call you on ", form.phone || 'your number', " within one working day. You can also reach us at +91 92664 04473."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => setSent(false)
  }, "Submit another")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Eyebrow, null, "Grab your spot"), /*#__PURE__*/React.createElement("input", {
    style: field,
    placeholder: "Full name",
    value: form.name,
    onChange: set('name')
  }), /*#__PURE__*/React.createElement("input", {
    style: field,
    placeholder: "Work email",
    value: form.email,
    onChange: set('email')
  }), /*#__PURE__*/React.createElement("input", {
    style: field,
    placeholder: "Phone (+91)",
    value: form.phone,
    onChange: set('phone')
  }), /*#__PURE__*/React.createElement("select", {
    style: field,
    value: form.track,
    onChange: set('track')
  }, CTD.courses.map(c => /*#__PURE__*/React.createElement("option", {
    key: c.slug
  }, c.title))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--ck-space-2)',
      flexWrap: 'wrap'
    }
  }, ['Fresher', 'Working professional'].map(l => /*#__PURE__*/React.createElement("button", {
    key: l,
    onClick: () => setForm(f => ({
      ...f,
      level: l
    })),
    style: {
      appearance: 'none',
      cursor: 'pointer',
      padding: '8px 16px',
      borderRadius: 'var(--ck-radius-pill)',
      font: 'var(--type-body)',
      fontSize: 13,
      fontWeight: 500,
      background: form.level === l ? 'var(--ck-veil-cyan-hover)' : 'transparent',
      border: '1px solid ' + (form.level === l ? 'var(--ck-cyan)' : 'var(--ck-border-strong)'),
      color: form.level === l ? 'var(--ck-cyan)' : 'var(--ck-muted)'
    }
  }, l))), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    style: {
      justifyContent: 'center'
    },
    onClick: () => setSent(true)
  }, "Grab Your Spot"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--type-body)',
      fontSize: 12,
      color: 'var(--ck-muted)'
    }
  }, "By submitting you agree to our Privacy Policy and consent to receive updates from CodeKerdos."))))), /*#__PURE__*/React.createElement(SectionBand, {
    tone: "teal",
    bleed: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 40,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--ck-space-5)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    onTint: true,
    eyebrow: "Who you'll talk to",
    title: "Guided by experts.",
    sub: "Personalized mentorship to accelerate your learning and career growth."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gap: 'var(--ck-space-4)'
    }
  }, CTD.mentors.slice(0, 5).map((m, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: m.name,
    delay: i * 80
  }, /*#__PURE__*/React.createElement(MentorCard, _extends({}, m, {
    linkedin: "#",
    style: {
      height: '100%'
    }
  }))))))));
}
Object.assign(window, {
  ContactScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CourseScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  Tag,
  StatusPill,
  StepBadge,
  Eyebrow,
  SectionHeading,
  CourseCard,
  TestimonialCard,
  StatTile,
  MentorCard,
  Reveal,
  CountUp,
  SectionBand,
  Accordion
} = window.CodeKerdosDesignSystem_68bc71;
const CD = window.CK_DATA;
const MODULES = [{
  title: 'Foundations',
  body: 'Language fundamentals, complexity analysis, and how to move from brute force to optimal.'
}, {
  title: 'Core Data Structures',
  body: 'Arrays, strings, hashing, stacks, queues, trees and graphs with interview-grade problem sets.'
}, {
  title: 'Algorithm Patterns',
  body: 'Two pointers, sliding window, recursion, dynamic programming and greedy strategies.'
}, {
  title: 'System Design Fundamentals',
  body: 'High-level architecture, scalability, caching, queues and fault tolerance.'
}, {
  title: 'Design Deep Dives',
  body: 'Design a feed, a rate limiter, a live-streaming pipeline — with trade-off write-ups.'
}, {
  title: 'Interview Simulation',
  body: 'Weekly mocks with mentors from Amazon, Walmart and Microsoft, plus resume review.'
}];
function CourseScreen({
  slug,
  onNavigate,
  onOpenCourse
}) {
  const course = CD.courses.find(c => c.slug === slug) || CD.courses[0];
  const others = CD.courses.filter(c => c.slug !== course.slug).slice(0, 4);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ck-void)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--ck-container)',
      margin: '0 auto',
      padding: '64px var(--ck-space-5) 80px',
      display: 'grid',
      gridTemplateColumns: '1.3fr 0.7fr',
      gap: 'var(--ck-space-5)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--ck-space-4)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate('home'),
    style: {
      appearance: 'none',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      padding: 0,
      font: 'var(--type-body)',
      color: 'var(--ck-cyan)',
      alignSelf: 'flex-start'
    }
  }, "\u2190 All courses"), /*#__PURE__*/React.createElement(Eyebrow, null, "Live cohort \xB7 Starts every month"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 52,
      lineHeight: 1.06,
      letterSpacing: '-1.4px',
      color: 'var(--ck-white)',
      textWrap: 'balance'
    }
  }, course.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--type-body-lg)',
      color: 'var(--ck-muted)',
      maxWidth: 620,
      textWrap: 'pretty'
    }
  }, course.description), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--ck-space-2)',
      flexWrap: 'wrap'
    }
  }, course.tags.filter(t => t[0] !== '+').map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t
  }, t)), /*#__PURE__*/React.createElement(StatusPill, null, "Live")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--ck-space-3)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => onNavigate('contact')
  }, "Book A Free Webinar"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary"
  }, "Brochure"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--ck-space-4)',
      borderRadius: 'var(--ck-radius-card)',
      background: 'var(--ck-elevated)',
      border: '1px solid var(--ck-border-strong)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--ck-space-3)',
      boxShadow: 'var(--ck-shadow-card)'
    }
  }, [['Duration', course.duration], ['Learners', course.learners], ['Rating', course.rating + ' (' + course.ratingCount + ')'], ['Format', 'Live + Recordings'], ['Projects', '15+ deployable']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 'var(--ck-space-3)',
      font: 'var(--type-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ck-muted)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ck-white)',
      fontWeight: 600
    }
  }, v))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--ck-border)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--ck-space-3)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 999,
      background: 'var(--ck-grad-orb)',
      flex: '0 0 auto'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--ck-white)'
    }
  }, course.instructor), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: 'var(--ck-muted)'
    }
  }, course.instructorRole))), /*#__PURE__*/React.createElement(Button, {
    variant: "tertiary",
    style: {
      justifyContent: 'center'
    }
  }, "Request a Callback")))), /*#__PURE__*/React.createElement(SectionBand, {
    tone: "cyan",
    bleed: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 40,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--ck-space-5)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    onTint: true,
    eyebrow: "Curriculum",
    title: "Six modules, built for interviews and the job.",
    sub: "Every module ships an assignment, a code review, and a mock."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--ck-space-4)'
    }
  }, MODULES.map((m, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: m.title,
    delay: i * 80
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--ck-space-4)',
      borderRadius: 'var(--ck-radius-card)',
      background: 'rgba(255,255,255,0.7)',
      border: '1px solid rgba(11,15,26,0.08)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--ck-space-2)',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: '1.2px',
      color: 'var(--ck-teal-deep)'
    }
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--ck-h4-size)',
      color: 'var(--ck-ink)'
    }
  }, m.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--type-body)',
      color: 'var(--ck-ink-muted)',
      textWrap: 'pretty'
    }
  }, m.body))))))), /*#__PURE__*/React.createElement(SectionBand, {
    tone: "surface"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '0.8fr 1.2fr',
      gap: 'var(--ck-space-5)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Proof",
    title: "Alumni from this track.",
    sub: "Outcomes reported by learners after finishing the cohort."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--ck-space-4)'
    }
  }, CD.testimonials.slice(0, 2).map(t => /*#__PURE__*/React.createElement(TestimonialCard, _extends({
    key: t.name
  }, t))), /*#__PURE__*/React.createElement(StatTile, {
    value: /*#__PURE__*/React.createElement(CountUp, {
      to: 92,
      suffix: "%"
    }),
    label: "Landed jobs within 6 months of finishing."
  }), /*#__PURE__*/React.createElement(StatTile, {
    value: /*#__PURE__*/React.createElement(CountUp, {
      to: 15,
      suffix: "+"
    }),
    label: "Deployable projects in your portfolio."
  })))), /*#__PURE__*/React.createElement(SectionBand, {
    tone: "neutral"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '0.8fr 1.2fr',
      gap: 'var(--ck-space-5)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    onTint: true,
    eyebrow: "FAQs",
    title: "Before you enroll."
  }), /*#__PURE__*/React.createElement(Accordion, {
    onTint: true,
    items: CD.faqs.slice(0, 3)
  }))), /*#__PURE__*/React.createElement(SectionBand, {
    tone: "void"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--ck-space-5)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Other tracks",
    title: "Not quite the fit?"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 'var(--ck-space-4)'
    }
  }, others.map(c => /*#__PURE__*/React.createElement(CourseCard, _extends({
    key: c.slug
  }, c, {
    href: "#",
    onClick: () => onOpenCourse(c.slug),
    style: {
      height: '100%',
      cursor: 'pointer'
    }
  })))))));
}
Object.assign(window, {
  CourseScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CourseScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  Tag,
  StatusPill,
  StepBadge,
  Eyebrow,
  SectionHeading,
  CourseCard,
  TestimonialCard,
  StatTile,
  ComparisonRow,
  FeatureCard,
  MentorCard,
  GlowOrb,
  Reveal,
  CountUp,
  FeatureCycler,
  LogoMarquee,
  SectionBand,
  Accordion
} = window.CodeKerdosDesignSystem_68bc71;
const D = window.CK_DATA;
function Hero({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ck-void)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--ck-container)',
      margin: '0 auto',
      padding: '80px var(--ck-space-5) 96px',
      display: 'grid',
      gridTemplateColumns: '1.15fr 0.85fr',
      gap: 'var(--ck-space-5)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--ck-space-4)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "India's most practical AI engineering platform"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 64,
      lineHeight: 1.04,
      letterSpacing: '-1.5px',
      color: 'var(--ck-white)',
      textWrap: 'balance'
    }
  }, "Build AI Products.", /*#__PURE__*/React.createElement("br", null), "Crack top interviews.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'var(--ck-grad-text)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    }
  }, "Get hired faster.")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--type-body-lg)',
      color: 'var(--ck-muted)',
      maxWidth: 560,
      textWrap: 'pretty'
    }
  }, "Master DSA & System Design, Gen-AI with RAG & Agentic AI, DevOps/SRE, and AI FDE with Live Mentorship and Real-World Production-Grade Projects."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--ck-space-3)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => onNavigate('contact')
  }, "Book A Free Webinar"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    onClick: () => onNavigate('contact')
  }, "Request a Callback")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--ck-space-2)',
      flexWrap: 'wrap',
      marginTop: 'var(--ck-space-2)'
    }
  }, /*#__PURE__*/React.createElement(Tag, null, "Live Sessions"), /*#__PURE__*/React.createElement(Tag, null, "Expert Mentorship"), /*#__PURE__*/React.createElement(Tag, null, "Lifetime Access")))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120,
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(GlowOrb, {
    size: 380
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: 'var(--ck-space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 46,
      letterSpacing: '-1.5px',
      color: 'var(--ck-white)'
    }
  }, "15+"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body)',
      color: 'rgba(255,255,255,0.82)',
      marginTop: 6
    }
  }, "real deployable projects,", /*#__PURE__*/React.createElement("br", null), "shipped with a mentor"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--ck-space-4)',
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(StatusPill, null, "Live cohort")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--ck-border)',
      padding: '28px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--ck-container)',
      margin: '0 auto',
      padding: '0 var(--ck-space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 'var(--ck-space-3)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "muted"
  }, "Our learners work at")), /*#__PURE__*/React.createElement(LogoMarquee, {
    names: D.partners
  }))));
}
function Reasons() {
  return /*#__PURE__*/React.createElement(SectionBand, {
    tone: "cyan",
    bleed: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 40,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--ck-space-5)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    onTint: true,
    align: "center",
    eyebrow: "Why CodeKerdos",
    title: "Why you should choose us?",
    sub: "Here are just a few reasons why students choose our courses.",
    style: {
      margin: '0 auto'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--ck-space-4)'
    }
  }, D.reasons.map((r, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: r.n,
    delay: i * 80
  }, /*#__PURE__*/React.createElement(FeatureCard, _extends({}, r, {
    style: {
      height: '100%'
    }
  })))))));
}
function Included() {
  return /*#__PURE__*/React.createElement(SectionBand, {
    tone: "surface"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--ck-space-5)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "What's included",
    title: "Everything comes with the seat.",
    sub: "Hover to hold a card; it advances on its own every four seconds."
  }), /*#__PURE__*/React.createElement(FeatureCycler, {
    items: [{
      label: 'Live Sessions',
      body: 'Learn in real time and revisit lessons anytime with recorded sessions.'
    }, {
      label: 'Expert Mentorship',
      body: 'Weekly 1:1 plus on-demand access to mentors from FAANG and top tech firms.'
    }, {
      label: 'Real-world Projects',
      body: '15+ real deployable projects, built with the tools you will use on the job.'
    }, {
      label: 'Career Support',
      body: 'Resume building, mock interviews, referrals and placement assistance.'
    }, {
      label: 'Lifetime Access',
      body: 'Learning material and placement assistance stay open after you finish.'
    }]
  })));
}
function Outcomes() {
  return /*#__PURE__*/React.createElement(SectionBand, {
    tone: "teal"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--ck-space-5)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    onTint: true,
    eyebrow: "Outcomes",
    title: "Where learning meets opportunity.",
    sub: "Helping you bridge the gap between learning and earning."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 'var(--ck-space-4)'
    }
  }, /*#__PURE__*/React.createElement(StatTile, {
    onTint: true,
    value: /*#__PURE__*/React.createElement(CountUp, {
      to: 92,
      suffix: "%"
    }),
    label: "Of graduates landed jobs within 6 months."
  }), /*#__PURE__*/React.createElement(StatTile, {
    onTint: true,
    value: /*#__PURE__*/React.createElement(CountUp, {
      to: 120,
      suffix: "%"
    }),
    label: "Average hike in learners' CTC."
  }), /*#__PURE__*/React.createElement(StatTile, {
    onTint: true,
    value: /*#__PURE__*/React.createElement(CountUp, {
      to: 50,
      suffix: "+"
    }),
    label: "Top tech companies hire from us."
  }), /*#__PURE__*/React.createElement(StatTile, {
    onTint: true,
    value: /*#__PURE__*/React.createElement(CountUp, {
      to: 40,
      suffix: "+"
    }),
    label: "Mentors from FAANG & top tech firms."
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "tertiary",
    style: {
      background: 'var(--ck-ink)',
      color: 'var(--ck-white)'
    },
    icon: "\u2192"
  }, "Latest Placement Report"))));
}
function Courses({
  onOpenCourse
}) {
  return /*#__PURE__*/React.createElement(SectionBand, {
    tone: "void"
  }, /*#__PURE__*/React.createElement("div", {
    id: "courses",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--ck-space-5)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Featured courses",
    title: "Eight programs. One outcome.",
    sub: "Live cohorts across DSA, System Design, DevOps and AI \u2014 pick the track that matches where you are."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 'var(--ck-space-4)'
    }
  }, D.courses.map((c, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: c.slug,
    delay: i % 4 * 80
  }, /*#__PURE__*/React.createElement(CourseCard, _extends({}, c, {
    href: "#",
    onClick: () => onOpenCourse(c.slug),
    style: {
      height: '100%',
      cursor: 'pointer'
    }
  })))))));
}
function Voices() {
  return /*#__PURE__*/React.createElement(SectionBand, {
    tone: "orange"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--ck-space-5)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    onTint: true,
    eyebrow: "Testimonials",
    title: "Where dreams meet results.",
    sub: "Hear the voices of our alumni who've made their mark."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--ck-space-4)'
    }
  }, D.testimonials.map((t, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: t.name,
    delay: i % 3 * 80
  }, /*#__PURE__*/React.createElement(TestimonialCard, _extends({}, t, {
    style: {
      height: '100%'
    }
  })))))));
}
function Mentors() {
  return /*#__PURE__*/React.createElement(SectionBand, {
    tone: "surface"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--ck-space-5)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Guided by experts",
    title: "Mentors who ship at scale.",
    sub: "Personalized mentorship to accelerate your learning and career growth."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gap: 'var(--ck-space-4)'
    }
  }, D.mentors.map((m, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: m.name,
    delay: i % 5 * 80
  }, /*#__PURE__*/React.createElement(MentorCard, _extends({}, m, {
    linkedin: "#",
    style: {
      height: '100%'
    }
  })))))));
}
function Journey() {
  const [active, setActive] = React.useState(0);
  return /*#__PURE__*/React.createElement(SectionBand, {
    tone: "void"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--ck-space-5)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "The path",
    title: "Your learning journey with CodeKerdos.",
    sub: "From your first counselling session to landing your dream job, CodeKerdos supports you at every turn."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 'var(--ck-space-4)'
    }
  }, D.journey.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.title,
    onMouseEnter: () => setActive(i),
    style: {
      display: 'flex',
      gap: 'var(--ck-space-4)',
      padding: 'var(--ck-space-4)',
      borderRadius: 'var(--ck-radius-card)',
      background: active === i ? 'var(--ck-elevated)' : 'transparent',
      border: '1px solid ' + (active === i ? 'var(--ck-border-strong)' : 'var(--ck-border)'),
      transition: 'all var(--ck-dur-hover) var(--ck-ease-out)'
    }
  }, /*#__PURE__*/React.createElement(StepBadge, {
    n: i + 1,
    active: active === i
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--ck-h4-size)',
      color: 'var(--ck-white)'
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--type-body)',
      color: 'var(--ck-muted)',
      textWrap: 'pretty'
    }
  }, s.body)))))));
}
function Compare() {
  return /*#__PURE__*/React.createElement(SectionBand, {
    tone: "neutral"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--ck-space-5)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    onTint: true,
    eyebrow: "Comparison",
    title: "How CodeKerdos compares.",
    sub: "When you're investing in your future, it's smart to compare. Clear, honest, and built for outcomes."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr 1fr 1fr',
      gap: 'var(--ck-space-4)',
      padding: '0 var(--ck-space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body)',
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '1.6px',
      textTransform: 'uppercase',
      color: 'var(--ck-ink-muted)'
    }
  }, "Product comparison"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 16,
      color: 'var(--ck-ink)'
    }
  }, "CodeKerdos"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body)',
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '1.6px',
      textTransform: 'uppercase',
      color: 'var(--ck-ink-muted)'
    }
  }, "Others")), D.comparison.map((r, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: r.label,
    delay: i * 60
  }, /*#__PURE__*/React.createElement(ComparisonRow, r))))));
}
function Faqs() {
  return /*#__PURE__*/React.createElement(SectionBand, {
    tone: "neutral",
    style: {
      paddingBottom: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '0.8fr 1.2fr',
      gap: 'var(--ck-space-5)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    onTint: true,
    eyebrow: "FAQs",
    title: "Questions, answered.",
    sub: "Whether you're curious about how to get started or need assistance with troubleshooting, we've got you covered."
  }), /*#__PURE__*/React.createElement(Accordion, {
    onTint: true,
    items: D.faqs
  })));
}
function Referral({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement(SectionBand, {
    tone: "void"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.2fr 0.8fr',
      gap: 'var(--ck-space-5)',
      alignItems: 'center',
      padding: 'var(--ck-space-5)',
      borderRadius: 'var(--ck-radius-orb)',
      background: 'var(--ck-elevated)',
      border: '1px solid var(--ck-border-strong)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--ck-space-3)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Refer & earn"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--ck-h2-size)',
      lineHeight: 1.1,
      letterSpacing: '-0.8px',
      color: 'var(--ck-white)'
    }
  }, "They save 10%. You earn \u20B92,999."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--type-body-lg)',
      color: 'var(--ck-muted)',
      maxWidth: 520,
      textWrap: 'pretty'
    }
  }, "Share your unique referral link with friends, classmates, or colleagues. When someone signs up through your link, they receive a 10% discount on their first course. For each successful referral, you earn \u20B92999/- cashback towards your next course purchase."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--ck-space-3)',
      flexWrap: 'wrap',
      marginTop: 'var(--ck-space-2)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => onNavigate('contact')
  }, "Start Sharing"), /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    icon: "\u2192"
  }, "+91 92664 04473"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--ck-space-2)'
    }
  }, ['Unlimited referrals — invite as many friends as you want', 'Mutual benefit — your friends save, and you earn rewards', 'Transparency — rewards credited once your friend enrolls'].map(t => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      gap: 'var(--ck-space-2)',
      alignItems: 'flex-start',
      font: 'var(--type-body)',
      color: 'var(--ck-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: 'var(--ck-success)',
      fontWeight: 700
    }
  }, "\u2713"), t)))));
}
function HomeScreen({
  onNavigate,
  onOpenCourse
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, {
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement(Reasons, null), /*#__PURE__*/React.createElement(Included, null), /*#__PURE__*/React.createElement(Outcomes, null), /*#__PURE__*/React.createElement(Courses, {
    onOpenCourse: onOpenCourse
  }), /*#__PURE__*/React.createElement(Voices, null), /*#__PURE__*/React.createElement(Mentors, null), /*#__PURE__*/React.createElement(Journey, null), /*#__PURE__*/React.createElement(Compare, null), /*#__PURE__*/React.createElement(Faqs, null), /*#__PURE__*/React.createElement(Referral, {
    onNavigate: onNavigate
  }));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
window.CK_DATA = {
  nav: [{
    label: 'Overview',
    id: 'home'
  }, {
    label: 'Courses',
    id: 'courses'
  }, {
    label: 'Masterclass',
    id: 'home'
  }, {
    label: 'Testimonials',
    id: 'home'
  }, {
    label: 'Contact',
    id: 'contact'
  }],
  courses: [{
    slug: 'dsa-system-design',
    title: 'Advance DSA + System Design',
    duration: '5 Months',
    learners: '1,500+',
    rating: '4.9',
    ratingCount: '1,200',
    description: 'Learn core Data Structures and Algorithms (DSA) with real-world coding problems and optimized solutions. Learn to think from brute force to optimal.',
    tags: ['DSA', 'System Design', '+1'],
    instructor: 'Soumyadeep Paul',
    instructorRole: 'CTO at Codekerdos & SDE-2 at Amazon'
  }, {
    slug: 'devops',
    title: 'DevOps & SRE Interview Preparation',
    duration: '5 Months',
    learners: '1,800+',
    rating: '4.8',
    ratingCount: '1,500',
    description: 'Master DevOps and Site Reliability Engineering by building strong fundamentals in Linux, Git, CI/CD, Kubernetes and observability.',
    tags: ['DevOps', 'SRE', '+2'],
    instructor: 'Yadnesh Nikam',
    instructorRole: 'Senior DevOps & MLOps Specialist at Holcim'
  }, {
    slug: 'generative-ai',
    title: 'Generative AI',
    duration: '5 Months',
    learners: '1,300+',
    rating: '4.9',
    ratingCount: '1,100',
    description: 'Master Large Language Models (LLMs), prompt engineering, and advanced fine-tuning techniques to build cutting-edge AI products.',
    tags: ['AI', 'LLMs', '+1'],
    instructor: 'Saksham Arora',
    instructorRole: 'Software Engineer 2 @ Intuit | Ex - Microsoft'
  }, {
    slug: 'ai-fde-program',
    title: 'AI FDE Program',
    duration: '5 Months',
    learners: '1,100+',
    rating: '4.8',
    ratingCount: '1,000',
    description: 'Become a production-ready AI Forward Deployed Engineer by learning how to design, build, deploy, and scale enterprise AI systems.',
    tags: ['AI', 'FDE', '+1'],
    instructor: 'Amol Mahajan',
    instructorRole: 'Instructor'
  }, {
    slug: 'agentic-ai-bootcamp',
    title: 'Agentic AI & Multi-Agent Systems Bootcamp',
    duration: '5 Months',
    learners: '1,100+',
    rating: '4.8',
    ratingCount: '1,000',
    description: 'Master the future of AI with our Agentic AI & AI Agents Bootcamp. This program provides an in-depth understanding of agent orchestration.',
    tags: ['AI', 'Agents', '+1'],
    instructor: 'Sankalp Saxena',
    instructorRole: 'Instructor'
  }, {
    slug: 'advanced-system-design-interview-prep',
    title: 'Advanced System Design + Interview Preparation',
    duration: '3 Months',
    learners: '1,600+',
    rating: '4.9',
    ratingCount: '1,300',
    description: 'Learn System Design fundamentals, including high-level architecture, scalability, and fault-tolerance. Apply your knowledge to real interviews.',
    tags: ['System Design', 'Interview Prep'],
    instructor: 'Baba Hayath Shaik',
    instructorRole: 'Principal Software Engineer at Autodesk'
  }, {
    slug: 'launchpad-fullstack',
    title: 'LaunchPad Full Stack Web Development',
    duration: '9 Months',
    learners: '2,000+',
    rating: '4.8',
    ratingCount: '1,800',
    description: 'Become a Full-Stack Developer with Java Frontend, Backend & AI/ML integration in real-world projects through live mentorship.',
    tags: ['Full Stack', 'Web Development', '+1'],
    instructor: 'Yogesh sharma',
    instructorRole: 'Founder & CEO at CodeKerdos'
  }, {
    slug: 'cloud-devops',
    title: 'Cloud & DevOps Engineering Program',
    duration: '3 Months',
    learners: '1,400+',
    rating: '4.9',
    ratingCount: '1,200',
    description: 'Master Cloud and DevOps with AWS, Linux, Docker, Kubernetes, Jenkins, and Terraform. Build real-world DevOps projects end to end.',
    tags: ['Cloud', 'DevOps', '+1'],
    instructor: 'Debjyoti Maity',
    instructorRole: 'SRE at Improving'
  }],
  reasons: [{
    n: 1,
    title: 'Live Classes + Recordings',
    live: true,
    body: 'Learn in real time and revisit lessons anytime with recorded sessions.'
  }, {
    n: 2,
    title: 'Gen AI Infused Curriculum',
    body: "Stay ahead with AI-powered learning tailored to modern industry needs. Every module is built around tools you'll actually use on the job."
  }, {
    n: 3,
    title: 'Hands-on AI',
    body: 'Build practical skills through real-world AI projects.'
  }, {
    n: 4,
    title: 'Certifications',
    body: 'Earn recognized credentials to boost your profile.'
  }, {
    n: 5,
    title: 'Lifetime Support',
    body: 'Mentorship whenever you need it, even after completion.'
  }, {
    n: 6,
    title: 'Mock Interviews',
    body: 'Simulated interviews to sharpen your confidence.'
  }, {
    n: 7,
    title: 'Affordable Education',
    body: 'Quality learning without breaking the bank, with transparent pricing and no hidden fees.'
  }, {
    n: 8,
    title: 'Doubt-Clearing',
    body: 'Dedicated sessions to resolve your queries fast.'
  }, {
    n: 9,
    title: 'Placement Assistance',
    body: 'Direct connections with hiring companies to help you land the right role.'
  }],
  testimonials: [{
    tint: 'cyan',
    name: 'Vrutik Patel',
    outcome: 'Microsoft',
    quote: "CodeKerdos didn't just teach me skills - it transformed the way I think and solve problems. With their constant guidance and interview prep, I achieved my dream role at Microsoft."
  }, {
    tint: 'teal',
    name: 'Avinash V',
    outcome: 'Tata Cliq',
    quote: "The hands-on projects gave me practical coding skills I could apply right away, and Yogesh Sir's feedback really boosted my confidence."
  }, {
    tint: 'orange',
    name: 'Deepak Saini',
    outcome: 'OLA Technologies',
    quote: "It was not just about theory, I was able to work on real-world projects that truly brought the concepts to life."
  }, {
    tint: 'neutral',
    name: 'Sanjana',
    outcome: 'SDE1 at MMT',
    quote: "I joined CodeKerdos with the goal of improving my coding skills and breaking into the software industry. Today, I'm proud to say that I've landed a role as SDE1 at MMT."
  }, {
    tint: 'orange',
    name: 'Kamaldeep Singh',
    outcome: 'Capgemini',
    quote: 'CodeKerdos turned my coding skills into a career. With their guidance and practice-driven approach, I cracked my interviews and landed a role at Capgemini.'
  }, {
    tint: 'cyan',
    name: 'Parth Raval',
    outcome: 'Professional growth',
    quote: 'Comprehensive, affordable training with hands-on coding practice, expert mentors, and a supportive community.'
  }],
  mentors: [{
    name: 'Yogesh Sharma',
    role: 'Founder & CEO at CodeKerdos'
  }, {
    name: 'Soumyadeep Paul',
    role: 'CTO at Codekerdos & SDE-2 at Amazon'
  }, {
    name: 'Yadnesh Nikam',
    role: 'Senior DevOps & MLOps Specialist at Holcim'
  }, {
    name: 'Baba Hayath Shaik',
    role: 'Principal Software Engineer at Autodesk'
  }, {
    name: 'Bhavesh-vaswani',
    role: 'SDE-3 at Walmart'
  }, {
    name: 'Saksham Arora',
    role: 'Software Engineer 2 @ Intuit | Ex - Microsoft'
  }, {
    name: 'Manaswini De',
    role: 'SWE at Visa'
  }, {
    name: 'Kritica Rani',
    role: 'Software Developer at Docusign'
  }, {
    name: 'Yash Bansal',
    role: 'DevOps Application Developer III at Oracle'
  }, {
    name: 'Anirban Paul',
    role: 'Lead AI/ML Engineer at Oracle'
  }],
  comparison: [{
    label: 'Course Duration',
    ours: '5-6 Months',
    theirs: '8-10 Months'
  }, {
    label: 'Live Mentor Access',
    ours: 'Weekly 1:1 + On-Demand',
    theirs: 'Limited Mentorship'
  }, {
    label: 'Hands-On Projects',
    ours: '15+ Real Deployable Projects',
    theirs: 'Few Practical Projects'
  }, {
    label: 'Job Support',
    ours: 'Real Career Support + Placement Assistance',
    theirs: 'Unrealistic Placement Promises'
  }, {
    label: 'Doubt Clearing',
    ours: '1:1 + Live + Chat',
    theirs: 'Limited Sessions'
  }, {
    label: 'Flexibility',
    ours: 'Freshers + Working Professional',
    theirs: 'Standardized Path'
  }, {
    label: 'Lifetime Access and Support',
    ours: 'Learning + Placement Assistance',
    theirs: 'No'
  }],
  faqs: [{
    q: '1. What do Beginner, Intermediate, and Advanced tracks mean?',
    a: "Think of these as different starting lines - all heading toward the same finish. Beginner: You're new to coding or brushing off the rust. Intermediate: You've got the basics nailed but want to get sharper at problem-solving, DSA, and real-world development. Advanced: You've already been in the game and want to master System Design, DevOps, and building products that scale."
  }, {
    q: '2. Do all tracks start at the same time?',
    a: "Yes! Everyone starts together, but your journey is tailored to your skill level. You'll still get access to shared community events, hackathons, and workshops - so there's plenty of cross-learning."
  }, {
    q: '3. How do I know which track to pick?',
    a: "Don't stress about this. We'll run you through a quick skill check before you start. Based on your current level, work experience, and career goals, we'll guide you to the track that fits you best."
  }, {
    q: '4. How long is the program?',
    a: "Most learners finish in 6 to 9 months - enough time to build strong fundamentals, work on real-world projects, and get job-ready, without losing momentum. And yes, we've built the schedule so even full-time working professionals can keep up without burning out."
  }],
  journey: [{
    title: 'Discover & Decide',
    body: "Your journey begins with exploration. Whether through demo sessions or career counseling, you'll get clarity on which courses best fit your goals."
  }, {
    title: 'Enrollment Made Easy',
    body: "Once you're ready, enrolling is simple and flexible. With multiple payment options, EMI plans, and quick onboarding, you gain instant access to learning resources."
  }, {
    title: 'Learn Through Live & Interactive Training',
    body: 'Dive into structured learning with live classes conducted by industry experts. Each session is interactive, engaging, and designed for real-world application.'
  }, {
    title: 'Hands-on Practice & Real-World Projects',
    body: "Theory alone isn't enough. Every course includes assignments, case studies, and capstone projects using real tools."
  }, {
    title: 'Continuous Mentorship & Support',
    body: "Our mentors provide 1:1 support, clear your doubts, and give personalized feedback on your work. You're never stuck and always moving forward."
  }, {
    title: 'Build, Showcase & Get Certified',
    body: "You'll have mastered tools, finished projects, and earned a certificate recognized by industry professionals."
  }, {
    title: 'Career Assistance & Growth',
    body: 'CodeKerdos supports you with placement guidance, career counseling, and networking opportunities. From resume building to referrals.'
  }],
  partners: ['Microsoft', 'Amazon', 'Meta', 'Zomato', 'Flipkart', 'Samsung', 'Swiggy', 'Oracle', 'Google']
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

__ds_ns.ComparisonRow = __ds_scope.ComparisonRow;

__ds_ns.CourseCard = __ds_scope.CourseCard;

__ds_ns.FeatureCard = __ds_scope.FeatureCard;

__ds_ns.MentorCard = __ds_scope.MentorCard;

__ds_ns.ProcessStep = __ds_scope.ProcessStep;

__ds_ns.QuoteCard = __ds_scope.QuoteCard;

__ds_ns.StatTile = __ds_scope.StatTile;

__ds_ns.TestimonialCard = __ds_scope.TestimonialCard;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.StatusPill = __ds_scope.StatusPill;

__ds_ns.StepBadge = __ds_scope.StepBadge;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.CtaBand = __ds_scope.CtaBand;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.SectionBand = __ds_scope.SectionBand;

__ds_ns.CountUp = __ds_scope.CountUp;

__ds_ns.FeatureCycler = __ds_scope.FeatureCycler;

__ds_ns.GlowOrb = __ds_scope.GlowOrb;

__ds_ns.LogoMarquee = __ds_scope.LogoMarquee;

__ds_ns.Reveal = __ds_scope.Reveal;

})();
