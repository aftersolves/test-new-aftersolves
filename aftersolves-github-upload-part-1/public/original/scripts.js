var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res, err) => function __init() {
  if (err) throw err[0];
  try {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  } catch (e19) {
    throw err = [e19], e19;
  }
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// _astro/appear.DDFv8bZV.js
var appear_DDFv8bZV_exports = {};
__export(appear_DDFv8bZV_exports, {
  mount: () => e
});
function e(e19, { reduced: t11 }) {
  if (t11 || !(`IntersectionObserver` in window)) {
    e19.classList.add(`is-in`);
    return;
  }
  let n9 = new IntersectionObserver((t12) => {
    for (let r8 of t12) r8.isIntersecting && (e19.classList.add(`is-in`), n9.disconnect());
  });
  n9.observe(e19);
}
var init_appear_DDFv8bZV = __esm({
  "_astro/appear.DDFv8bZV.js"() {
    "use strict";
  }
});

// _astro/billing-toggle.Bz4Mihuo.js
var billing_toggle_Bz4Mihuo_exports = {};
__export(billing_toggle_Bz4Mihuo_exports, {
  mount: () => t
});
function e2(e19) {
  let t11 = e19 === `annual` ? `priceAnnual` : `priceMonthly`;
  for (let e20 of document.querySelectorAll(`[data-price-monthly][data-price-annual]`)) e20.textContent = e20.dataset[t11];
  for (let t12 of document.querySelectorAll(`[data-billing-state]`)) t12.dataset.billingState = e19;
  for (let t12 of document.querySelectorAll(`button[data-billing]`)) t12.setAttribute(`aria-pressed`, String(t12.dataset.billing === e19));
}
function t(t11) {
  for (let n9 of t11.querySelectorAll(`button[data-billing]`)) n9.addEventListener(`click`, () => e2(n9.dataset.billing));
}
var init_billing_toggle_Bz4Mihuo = __esm({
  "_astro/billing-toggle.Bz4Mihuo.js"() {
    "use strict";
  }
});

// _astro/blog-accordion.B_vhOEYM.js
var blog_accordion_B_vhOEYM_exports = {};
__export(blog_accordion_B_vhOEYM_exports, {
  mount: () => k
});
function d(e19) {
  return getComputedStyle(e19).flexDirection === `row` ? window.matchMedia(o).matches ? `accordion` : `scroller` : `stack`;
}
function p() {
  if (document.getElementById(u)) return;
  let e19 = document.createElement(`style`);
  e19.id = u, e19.textContent = `[data-fx~="blog-accordion"]::-webkit-scrollbar{display:none}`, document.head.appendChild(e19);
}
function m(e19) {
  let t11 = e19.clientWidth * s;
  return Math.round(Math.min(l, Math.max(c, t11)));
}
function _(t11, n9) {
  p(), t11.style.overflowX = `auto`, t11.style.overflowY = `hidden`, t11.style.scrollSnapType = `x mandatory`, t11.style.scrollbarWidth = `none`;
  let r8 = m(t11);
  n9.forEach((t12) => {
    t12.style.transition = ``, t12.style.flexBasis = r8 + `px`, t12.style.flexGrow = `0`, t12.style.flexShrink = `0`, t12.style.minWidth = `0px`, t12.style.scrollSnapAlign = `start`;
    let n10 = g(t12);
    n10 && (n10.style.transition = ``, n10.style.opacity = `1`, n10.style.pointerEvents = `auto`);
    let i8 = t12.querySelector(e3);
    i8 && (i8.style.width = r8 - 64 + `px`, i8.style.flexShrink = `0`);
  });
}
function v(e19, t11) {
  e19.style.overflowX = ``, e19.style.overflowY = ``, e19.style.scrollSnapType = ``, e19.style.scrollbarWidth = ``, t11.forEach((e20) => {
    e20.style.flexShrink = ``, e20.style.scrollSnapAlign = ``;
  });
}
function b(e19, t11) {
  let n9 = y(e19);
  return n9.length <= 1 ? false : y(t11).endsWith(n9);
}
function x(e19) {
  let t11 = ((e19.tagName === `A` ? e19 : null) ?? e19.querySelector(`a[href]`) ?? e19.closest(`a[href]`))?.getAttribute(`href`);
  if (!t11) return null;
  try {
    return new URL(t11, window.location.origin).pathname;
  } catch {
    return null;
  }
}
function S(e19) {
  let t11 = ``, n9 = false;
  for (let r8 of (e19 ?? ``).toLowerCase()) {
    if (r8.trim().length === 0) {
      n9 = t11.length > 0;
      continue;
    }
    n9 &&= (t11 += ` `, false), t11 += r8;
  }
  return t11;
}
function w(e19, t11) {
  return t11.length !== 0 && S(e19.textContent).includes(t11);
}
function T(e19, t11) {
  let n9 = t11;
  for (; n9.parentElement && n9.parentElement !== e19; ) n9 = n9.parentElement;
  return n9.parentElement === e19 ? n9 : t11;
}
function E(e19, t11) {
  let n9 = window.location.pathname, r8 = C(), i8 = [], o5 = [];
  for (t11.forEach((e20) => {
    let t12 = x(e20);
    t12 && b(t12, n9) || w(e20, r8) ? i8.push(e20) : o5.push(e20);
  }); o5.length > a; ) i8.push(o5.pop());
  return i8.forEach((t12) => T(e19, t12).style.display = `none`), o5.forEach((t12) => T(e19, t12).style.display = ``), { visible: o5, hidden: i8 };
}
function D(n9, r8) {
  if (!f(n9)) {
    r8.forEach((t11) => {
      let n10 = t11.querySelector(e3);
      n10 && (n10.style.width = ``, n10.style.flexShrink = ``);
    });
    return;
  }
  let i8 = parseFloat(getComputedStyle(n9).columnGap || `0`) || 0, a6 = n9.clientWidth - i8 * (r8.length - 1);
  if (a6 <= 0) return;
  let o5 = a6 * t2 / (t2 + r8.length - 1), s4 = Math.round(o5 - 64);
  s4 <= 0 || r8.forEach((t11) => {
    let n10 = t11.querySelector(e3);
    n10 && (n10.style.width = `${s4}px`, n10.style.flexShrink = `0`);
  });
}
function O(e19, t11, n9 = false) {
  e19.forEach((e20, r8) => {
    let i8 = n9 || r8 === t11;
    e20.style.flexBasis = n9 ? `` : `0px`, e20.style.minWidth = `0px`, e20.style.flexGrow = n9 ? `` : i8 ? `1.726384364820847` : `1`;
    let a6 = g(e20);
    a6 && (a6.style.opacity = i8 ? `1` : `0`, a6.style.pointerEvents = i8 ? `auto` : `none`);
  });
}
function k(e19, { reduced: t11 }) {
  let a6 = i, o5 = [], s4 = null;
  function c2() {
    if (s4?.(), s4 = null, o5 = E(e19, h(e19)).visible, o5.length === 0) return;
    let l2 = d(e19);
    if (l2 !== `accordion`) {
      l2 === `scroller` ? (O(o5, a6, true), _(e19, o5)) : (v(e19, o5), o5.forEach((e20) => e20.style.transition = ``), D(e19, o5), O(o5, a6, true));
      let t12 = () => c2();
      window.addEventListener(`resize`, t12), s4 = () => window.removeEventListener(`resize`, t12);
      return;
    }
    v(e19, o5);
    let u2 = [];
    o5.forEach((e20, i8) => {
      e20.style.transition = t11 ? `` : `flex-grow ${n} ${r}`;
      let s5 = g(e20);
      s5 && (s5.style.transition = t11 ? `` : `opacity ${n} ${r}`);
      let c3 = (e21) => {
        (e21.type !== `pointerdown` || e21.pointerType !== `mouse`) && (e21.type !== `pointerenter` || e21.pointerType === `mouse`) && a6 !== i8 && (a6 = i8, O(o5, a6));
      }, l3 = () => {
        a6 !== i8 && (a6 = i8, O(o5, a6));
      };
      e20.addEventListener(`pointerenter`, c3), e20.addEventListener(`pointerdown`, c3), e20.addEventListener(`focus`, l3), u2.push(() => {
        e20.removeEventListener(`pointerenter`, c3), e20.removeEventListener(`pointerdown`, c3), e20.removeEventListener(`focus`, l3);
      });
    });
    let p2 = (e20) => {
      e20.pointerType === `mouse` && a6 !== i && (a6 = i, O(o5, a6));
    };
    e19.addEventListener(`pointerleave`, p2), u2.push(() => e19.removeEventListener(`pointerleave`, p2));
    let m2 = () => {
      f(e19) ? D(e19, o5) : c2();
    };
    window.addEventListener(`resize`, m2), u2.push(() => window.removeEventListener(`resize`, m2)), s4 = () => u2.forEach((e20) => e20()), D(e19, o5), O(o5, a6);
  }
  c2();
}
var e3, t2, n, r, i, a, o, s, c, l, u, f, h, g, y, C;
var init_blog_accordion_B_vhOEYM = __esm({
  "_astro/blog-accordion.B_vhOEYM.js"() {
    "use strict";
    e3 = `[data-copy]`;
    t2 = 530 / 307;
    n = `0.5s`;
    r = `cubic-bezier(0.42, 0, 0.58, 1)`;
    i = 0;
    a = 3;
    o = `(min-width: 1200px)`;
    s = 0.46;
    c = 280;
    l = 420;
    u = `blog-row-scrollbar`;
    f = (e19) => d(e19) === `accordion`;
    h = (e19) => {
      let t11 = Array.from(e19.querySelectorAll(`[data-card]`));
      return t11.length > 0 ? t11 : Array.from(e19.children);
    };
    g = (e19) => e19.querySelector(`[data-panel]`) ?? e19.firstElementChild;
    y = (e19) => e19.length > 1 && e19.endsWith(`/`) ? e19.slice(0, -1) : e19;
    C = () => S(document.getElementById(`article-title`)?.textContent);
  }
});

// _astro/blog-tabs.CwLo7FeV.js
var blog_tabs_CwLo7FeV_exports = {};
__export(blog_tabs_CwLo7FeV_exports, {
  mount: () => e4
});
function e4(e19) {
  let t11 = Array.from(e19.querySelectorAll(`[data-tab]`)), n9 = Array.from(e19.querySelectorAll(`[data-category]`)), r8 = e19.querySelector(`[data-empty]`);
  function i8(e20) {
    let i9 = e20.toLowerCase();
    t11.forEach((t12) => t12.setAttribute(`aria-pressed`, String(t12.dataset.tab === e20)));
    let a6 = 0;
    n9.forEach((e21) => {
      let t12 = !i9 || e21.dataset.category.toLowerCase().includes(i9);
      e21.hidden = !t12, t12 && a6++;
    }), r8 && (r8.hidden = a6 > 0);
  }
  t11.forEach((e20) => e20.addEventListener(`click`, () => i8(e20.dataset.tab)));
}
var init_blog_tabs_CwLo7FeV = __esm({
  "_astro/blog-tabs.CwLo7FeV.js"() {
    "use strict";
  }
});

// _astro/contact-form.D3mQlCdf.js
var contact_form_D3mQlCdf_exports = {};
__export(contact_form_D3mQlCdf_exports, {
  mount: () => e5
});
// Build the JSON payload for the Aftersolves email worker (apimail.aftersolves.com).
// The worker's default action sends a "project booking request" email to
// hello@aftersolves.com (reply-to the submitter) from booking@aftersolves.com.
// It expects { name, email, business, phone, help, source }. We map the
// named fields generically so every form on the site (contact, get-a-quote,
// website/quote, and the six plan-specific forms) submits through one builder.
function buildPayload(form) {
  let fd = new FormData(form), raw = {};
  fd.forEach((v, k) => { raw[k] = raw[k] != null ? raw[k] + "\n" + v : v; });
  let name = raw[`Customer name`] || raw[`Your name`] || raw[`Name`] || ``;
  let email = raw[`Email address`] || raw[`Email`] || ``;
  let business = raw[`Business name`] || ``;
  let phone = raw[`Contact number`] || raw[`Phone`] || ``;
  let source = raw[`Source page`] || form.getAttribute(`data-source`) || location.pathname;
  let skip = { "Customer name": 1, "Your name": 1, "Name": 1, "Email address": 1, "Email": 1, "Business name": 1, "Contact number": 1, "Phone": 1, "Source page": 1 };
  // Ordered so the email reads top-down: plan context first, then the
  // visitor's category/budget, then their free-text requirements.
  let order = [`Service`, `Plan`, `Price`, `Billing`, `Selected service`, `Project budget`, `Business category`, `Business type (other)`, `Budget (monthly, MYR)`, `Budget (MYR)`, `Enquiry type`, `Project type`, `Business stage`, `Primary goal`, `How did you hear about us?`, `Project requirements`, `Additional information`, `Subject`, `Message`, `Category`];
  let lines = [], seen = {};
  for (let k of order) {
    if (raw[k] != null && raw[k] !== `` && !skip[k]) { lines.push(k + `: ` + raw[k]); seen[k] = 1; }
  }
  for (let k of Object.keys(raw)) {
    if (!skip[k] && !seen[k] && raw[k] !== ``) lines.push(k + `: ` + raw[k]);
  }
  return { name, email, business, phone, help: lines.join(`\n\n`), source };
}
function e5(e19) {
  let t11 = e19.querySelector(`button[type="submit"]`), n9 = t11?.querySelector(`.submit-label`);
  if (!t11 || !n9) return;
  let r8 = 0, i8 = (e20) => {
    t11.dataset.state = e20, n9.textContent = t11.dataset[`label${e20[0].toUpperCase()}${e20.slice(1)}`], t11.setAttribute(`aria-busy`, String(e20 === `sending`));
  };
  e19.addEventListener(`submit`, async (n10) => {
    if (n10.preventDefault(), t11.dataset.state === `sending`) return;
    clearTimeout(r8), i8(`sending`);
    let a6 = e19.getAttribute(`action`) || `https://apimail.aftersolves.com`;
    try {
      let p = buildPayload(e19);
      let t12 = await fetch(a6, { method: `POST`, headers: { "Content-Type": `application/json`, Accept: `application/json` }, body: JSON.stringify(p) });
      if (!t12.ok) throw Error(`Worker answered ${t12.status}`);
      let d = await t12.json().catch(() => ({}));
      if (d && d.success === false) throw Error(d.error || `Worker reported failure`);
      i8(`success`), e19.reset();
      // On success, redirect to a per-form confirmation page at
      // "<current-route>/successfully". Compute the route from the pathname so
      // every form (contact, get-a-quote, website/quote, and the six plan
      // forms under /booking/* and /website/*) lands on its own success page
      // without per-form config. Give the success label ~700ms to show first.
      let successUrl = successUrlFor(location.pathname);
      if (successUrl) setTimeout(() => { window.location.href = successUrl; }, 700);
    } catch (e20) {
      console.warn(`[contact-form]`, e20), i8(`error`);
    }
    r8 = setTimeout(() => i8(`idle`), 4e3);
  });
}
// Map the current pathname to its success-page route.
//   /booking/starter/      -> /booking/starter/successfully
//   /contact.html          -> /contact/successfully
//   /                      -> /successfully (home has no form, but be safe)
// Trailing .html is dropped; trailing slash preserved then "successfully" appended.
function successUrlFor(path) {
  if (!path) return `/successfully`;
  let p = path.replace(/\.html$/, ``).replace(/\/+$/, ``);
  return (p === `` ? `` : p) + `/successfully`;
}
var init_contact_form_D3mQlCdf = __esm({
  "_astro/contact-form.D3mQlCdf.js"() {
    "use strict";
  }
});

// _astro/faq.BPCtIieG.js
var faq_BPCtIieG_exports = {};
__export(faq_BPCtIieG_exports, {
  mount: () => n2
});
function n2(n9, { reduced: r8 }) {
  for (let i8 of n9.querySelectorAll(`details`)) {
    let n10 = i8.querySelector(`.answer`), a6 = null, o5 = null, s4 = () => {
      if (a6 &&= (a6.cancel(), null), o5) {
        let e19 = o5;
        o5 = null, e19();
      }
    }, c2 = () => {
      let n11 = i8.offsetHeight;
      if (i8.open = true, r8) return;
      let o6 = i8.offsetHeight - n11;
      a6 = i8.animate([{ clipPath: t3(o6) }, { clipPath: t3(0) }], { duration: 350, easing: e6 }), a6.onfinish = () => {
        a6 = null;
      };
    }, l2 = () => {
      if (r8) {
        i8.open = false;
        return;
      }
      let s5 = n10.offsetHeight;
      i8.classList.add(`is-closing`), i8.style.marginBottom = `-${s5}px`, o5 = () => {
        i8.open = false, i8.classList.remove(`is-closing`), i8.style.marginBottom = ``;
      };
      let c3 = i8.animate([{ clipPath: t3(0) }, { clipPath: t3(s5) }], { duration: 350, easing: e6, fill: `forwards` });
      a6 = c3, c3.onfinish = () => {
        if (a6 === c3) {
          if (a6 = null, o5) {
            let e19 = o5;
            o5 = null, e19();
          }
          c3.cancel();
        }
      };
    };
    i8.addEventListener(`click`, (e19) => {
      e19.target.closest(`a`) || (e19.preventDefault(), s4(), i8.open ? l2() : c2());
    });
  }
}
var e6, t3;
var init_faq_BPCtIieG = __esm({
  "_astro/faq.BPCtIieG.js"() {
    "use strict";
    e6 = `cubic-bezier(0.4, 0, 0.2, 1)`;
    t3 = (e19) => `inset(0px 0px ${e19}px 0px round 16px)`;
  }
});

// _astro/flow-lines.ByiPnCoc.js
var flow_lines_ByiPnCoc_exports = {};
__export(flow_lines_ByiPnCoc_exports, {
  mount: () => e7
});
function e7(e19, { reduced: t11 = false, signal: n9 } = {}) {
  let r8 = [], i8 = (e20) => (r8.push(e20), e20);
  n9?.addEventListener(`abort`, () => {
    r8.forEach((e20) => e20.disconnect());
    try {
      S2 && cancelAnimationFrame(S2);
    } catch {
    }
    try {
      for (let e20 of [`webgl2`, `webgl`]) a6.getContext(e20)?.getExtension(`WEBGL_lose_context`)?.loseContext();
      a6.remove();
    } catch {
    }
  });
  let a6 = document.createElement(`canvas`);
  a6.setAttribute(`aria-hidden`, `true`), a6.style.cssText = `position:absolute;inset:0;width:100%;height:100%;display:block;touch-action:pan-y;`;
  let o5 = a6.getContext(`webgl2`, { antialias: false, alpha: false, premultipliedAlpha: false, powerPreference: `low-power` });
  if (!o5) return;
  let s4 = (e20, t12) => {
    let n10 = o5.createShader(e20);
    return o5.shaderSource(n10, t12), o5.compileShader(n10), o5.getShaderParameter(n10, o5.COMPILE_STATUS) ? n10 : null;
  }, c2 = s4(o5.VERTEX_SHADER, `#version 300 es
in vec2 a;
void main() { gl_Position = vec4(a, 0.0, 1.0); }`), l2 = s4(o5.FRAGMENT_SHADER, `#version 300 es
precision highp float;
uniform vec2 uRes;      // canvas size in device px
uniform float uTime;
uniform vec3 uPtr;      // pointer (x, y in panel-height units, strength 0..1)
uniform float uDpr;
out vec4 o;

// 2D simplex noise (standard construction, own transcription)
vec3 perm(vec3 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }
float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865, 0.366025404, -0.577350269, 0.024390244);
  vec2 i = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = x0.x > x0.y ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = perm(perm(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
  m = m * m; m = m * m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 a0 = x - floor(x + 0.5);
  m *= 1.79284291 - 0.85373473 * (a0 * a0 + h * h);
  vec3 g;
  g.x = a0.x * x0.x + h.x * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

// Lines are isolines of the across-line coordinate in a frame rotated
// -45deg (rising to the right), bent by slow noise and by a soft Gaussian
// push that follows the eased pointer (centre of the panel when idle).
float across(vec2 p, float t, out float along) {
  vec2 q = p - vec2(0.5 * uRes.x / uRes.y, 0.5);
  const vec2 R = vec2(0.848, 0.530);     // cos/sin of the ~32deg line angle
  float u = q.x * R.x - q.y * R.y;       // along the lines
  float v = q.x * R.y + q.y * R.x;       // across the lines
  along = u;
  v += 0.13 * snoise(vec2(u * 0.75 - t * 0.06, v * 0.3 + t * 0.025));
  v += 0.02 * snoise(vec2(u * 1.6 + 7.0, v * 0.8 - t * 0.05));
  vec2 d = p - uPtr.xy;
  v += uPtr.z * exp(-dot(d, d) / (2.0 * 0.17 * 0.17));
  return v;
}

void main() {
  vec2 frag = vec2(gl_FragCoord.x, uRes.y - gl_FragCoord.y);
  vec2 p = frag / uRes.y;                 // panel-height units, y down
  float t = uTime * 0.45;
  float u;
  float v = across(p, t, u);

  // Monotone respacing g = G(v): squeezes neighbouring lines into ribbons
  // along the flow without changing the lines' shapes (0.17 * 3.2 < 1).
  float ph = 1.6 * snoise(vec2(v * 0.45, t * 0.05)) + t * 0.06;
  float g = v + 0.17 * sin(3.2 * v + ph);
  const float N = 38.0;                   // lines per panel-height unit
  float val = g * N;
  float fw = max(fwidth(val), 1e-4);      // val units per device px
  float px = (0.5 - abs(fract(val) - 0.5)) / fw;

  // brightness: packed lines glow; slow bands swell and fade over time
  float spacing = 1.0 / (fw * uDpr);      // CSS px between lines
  float bunch = 1.0 - smoothstep(8.0, 19.0, spacing);
  float band = snoise(vec2(u * 0.55 - t * 0.04, v * 1.0 + t * 0.03)) * 0.5 + 0.5;
  band = smoothstep(0.2, 0.85, band) * (0.8 + 0.2 * sin(t * 0.5 + v * 2.0));
  float lum = mix(0.1 + 0.3 * band, 0.55 + 0.7 * band, bunch);
  lum *= 0.65 + 0.35 * snoise(vec2(u * 2.2 - t * 0.2, g * 6.0));  // streaks
  lum = pow(clamp(lum, 0.0, 1.0), 1.5);

  float sig = (0.42 + 1.7 * lum * lum) * uDpr;
  float line = exp(-0.5 * px * px / (sig * sig));
  line *= 1.0 - smoothstep(0.3, 0.5, fw);

  float c = line * lum;
  vec3 bg = vec3(16.0 / 255.0);
  o = vec4(bg + (vec3(0.96) - bg) * c, 1.0);
}`);
  if (!c2 || !l2) return;
  let u2 = o5.createProgram();
  if (o5.attachShader(u2, c2), o5.attachShader(u2, l2), o5.linkProgram(u2), !o5.getProgramParameter(u2, o5.LINK_STATUS)) return;
  getComputedStyle(e19).position === `static` && (e19.style.position = `relative`), e19.style.touchAction = `pan-y`, e19.appendChild(a6), o5.useProgram(u2);
  let d2 = o5.createBuffer();
  o5.bindBuffer(o5.ARRAY_BUFFER, d2), o5.bufferData(o5.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), o5.STATIC_DRAW);
  let f2 = o5.getAttribLocation(u2, `a`);
  o5.enableVertexAttribArray(f2), o5.vertexAttribPointer(f2, 2, o5.FLOAT, false, 0, 0);
  let p2 = o5.getUniformLocation(u2, `uRes`), m2 = o5.getUniformLocation(u2, `uTime`), h2 = o5.getUniformLocation(u2, `uPtr`), g2 = o5.getUniformLocation(u2, `uDpr`), _2 = 0, v2 = 0, y2 = 1, b2 = 20, x2 = 0, S2 = 0, C2 = false, w2 = false, T2 = { x: 0, y: 0.5 }, E2 = { x: 0, y: 0.5 };
  function D2() {
    _2 && v2 && (o5.viewport(0, 0, a6.width, a6.height), o5.uniform2f(p2, a6.width, a6.height), o5.uniform1f(m2, b2), o5.uniform3f(h2, E2.x, E2.y, 0.17), o5.uniform1f(g2, y2), o5.drawArrays(o5.TRIANGLES, 0, 3));
  }
  function O2() {
    let t12 = e19.getBoundingClientRect();
    y2 = Math.min(window.devicePixelRatio || 1, 2), _2 = t12.width, v2 = t12.height, a6.width = Math.max(1, Math.round(_2 * y2)), a6.height = Math.max(1, Math.round(v2 * y2)), !w2 && v2 && (T2.x = _2 / v2 / 2, T2.y = 0.5), !x2 && v2 && (E2.x = T2.x, E2.y = T2.y), D2();
  }
  function k2(e20) {
    if (n9?.aborted) return;
    S2 = 0;
    let t12 = x2 ? Math.min((e20 - x2) / 1e3, 0.1) : 0;
    x2 = e20, b2 += t12;
    let r9 = 1 - Math.exp(-t12 / 0.3);
    E2.x += (T2.x - E2.x) * r9, E2.y += (T2.y - E2.y) * r9, D2(), C2 && !document.hidden && (S2 = requestAnimationFrame(k2));
  }
  let A = () => {
    !S2 && !t11 && C2 && !document.hidden && (x2 = 0, S2 = requestAnimationFrame(k2));
  }, j = () => {
    S2 && cancelAnimationFrame(S2), S2 = 0;
  };
  if (i8(new ResizeObserver(O2)).observe(e19), O2(), t11) {
    D2();
    return;
  }
  let M = e19.parentElement || e19;
  M.addEventListener(`pointermove`, (t12) => {
    let n10 = e19.getBoundingClientRect();
    n10.height && (w2 = true, T2.x = (t12.clientX - n10.left) / n10.height, T2.y = (t12.clientY - n10.top) / n10.height);
  }, { passive: true, signal: n9 });
  let N = () => {
    w2 = false, v2 && (T2.x = _2 / v2 / 2, T2.y = 0.5);
  };
  M.addEventListener(`pointerleave`, N, { passive: true, signal: n9 }), M.addEventListener(`pointercancel`, N, { passive: true, signal: n9 }), i8(new IntersectionObserver((e20) => {
    C2 = e20[e20.length - 1].isIntersecting, C2 ? A() : j();
  })).observe(e19), document.addEventListener(`visibilitychange`, () => document.hidden ? j() : A(), { signal: n9 });
}
var init_flow_lines_ByiPnCoc = __esm({
  "_astro/flow-lines.ByiPnCoc.js"() {
    "use strict";
  }
});

// _astro/horizontal-track.DneVlCUa.js
var horizontal_track_DneVlCUa_exports = {};
__export(horizontal_track_DneVlCUa_exports, {
  mount: () => e8
});
function e8(e19) {
  let t11 = e19.querySelector(`.changes-stage`), n9 = e19.querySelector(`.changes-viewport`), r8 = e19.querySelector(`.changes-track`), i8 = 0, a6 = () => {
    i8 = 0;
    let a7 = e19.getBoundingClientRect(), o6 = a7.height - t11.getBoundingClientRect().height;
    if (o6 <= 0) return;
    let s4 = Math.min(1, Math.max(0, -a7.top / o6)), c2 = Math.min(1160, n9.clientWidth - 40), l2 = Math.max(20, (n9.clientWidth - c2) / 2), u2 = Math.max(0, r8.offsetWidth - c2);
    r8.style.setProperty(`--track-x`, `${l2 - s4 * u2}px`);
  }, o5 = () => {
    i8 ||= requestAnimationFrame(a6);
  };
  a6(), addEventListener(`scroll`, o5, { passive: true }), addEventListener(`resize`, o5);
}
var init_horizontal_track_DneVlCUa = __esm({
  "_astro/horizontal-track.DneVlCUa.js"() {
    "use strict";
  }
});

// _astro/logo-ticker.BSB9RWU2.js
var logo_ticker_BSB9RWU2_exports = {};
__export(logo_ticker_BSB9RWU2_exports, {
  mount: () => e9
});
function e9(e19, { reduced: t11 }) {
  let n9 = e19.querySelector(`ul`);
  if (!n9 || t11) return;
  let r8 = Number(e19.dataset.velocity || 12), i8 = [...n9.children];
  if (!i8.length) return;
  let a6 = [], o5 = 0, s4 = () => {
    a6.forEach((e20) => {
      e20.style.transform = ``;
    }), n9.style.transform = ``;
    let t12 = parseFloat(getComputedStyle(n9).columnGap || `0`) || 0, r9 = i8.reduce((e20, n10) => e20 + n10.offsetWidth + t12, 0);
    n9.querySelectorAll(`[data-ticker-clone]`).forEach((e20) => e20.remove());
    let s5 = r9 > 0 ? Math.max(0, Math.ceil((e19.clientWidth + i8[0].offsetWidth) / r9) - 1) : 0;
    for (let e20 = 0; e20 < s5; e20++) for (let e21 of i8) {
      let t13 = e21.cloneNode(true);
      t13.setAttribute(`aria-hidden`, `true`), t13.dataset.tickerClone = ``, n9.appendChild(t13);
    }
    a6 = [...n9.children].map((e20) => ({ li: e20, left: e20.offsetLeft - n9.offsetLeft, width: e20.offsetWidth })), o5 = r9 * (s5 + 1);
  };
  s4();
  let c2 = 0, l2 = 0, u2 = true, d2 = (e20) => {
    if (l2 && u2) {
      c2 = (c2 + r8 * Math.min(e20 - l2, 100) / 1e3) % o5, n9.style.transform = `translateX(${-c2}px)`;
      for (let e21 of a6) {
        let t12 = e21.left + e21.width - c2 < 0;
        e21.li.style.transform = t12 ? `translateX(${o5}px)` : ``;
      }
    }
    l2 = e20, requestAnimationFrame(d2);
  };
  requestAnimationFrame(d2), `IntersectionObserver` in window && new IntersectionObserver(([e20]) => {
    u2 = e20.isIntersecting;
  }).observe(e19);
  let f2 = e19.clientWidth;
  window.addEventListener(`resize`, () => {
    e19.clientWidth !== f2 && (f2 = e19.clientWidth, s4());
  });
}
var init_logo_ticker_BSB9RWU2 = __esm({
  "_astro/logo-ticker.BSB9RWU2.js"() {
    "use strict";
  }
});

// _astro/nav.Bwr39cxT.js
var nav_Bwr39cxT_exports = {};
__export(nav_Bwr39cxT_exports, {
  mount: () => t4
});
function t4(t11) {
  let n9 = t11.querySelector(`.capsule`), r8 = t11.querySelector(`.nav-toggle`), i8 = false, a6 = () => t11.classList.toggle(`is-collapsed`, window.scrollY > 8 && !i8 && innerWidth >= e10);
  addEventListener(`scroll`, a6, { passive: true }), addEventListener(`resize`, a6);
  let o5 = (t12) => t12.pointerType === `mouse` && innerWidth >= e10;
  n9.addEventListener(`pointerenter`, (e19) => {
    o5(e19) && (i8 = true, a6());
  }), n9.addEventListener(`pointerleave`, (e19) => {
    o5(e19) && (i8 = false, a6());
  }), a6();
  let s4 = (e19) => {
    t11.classList.toggle(`is-open`, e19), r8.setAttribute(`aria-expanded`, String(e19)), r8.setAttribute(`aria-label`, e19 ? `Close menu` : `Open menu`);
  }, c2 = () => {
    r8.tabIndex = innerWidth < e10 ? 0 : -1, innerWidth >= e10 && s4(false);
  };
  c2(), addEventListener(`resize`, c2), r8.addEventListener(`click`, () => {
    innerWidth < e10 && s4(!t11.classList.contains(`is-open`));
  }), t11.querySelectorAll(`.menu a, .logo`).forEach((e19) => e19.addEventListener(`click`, () => s4(false))), document.addEventListener(`keydown`, (e19) => {
    e19.key === `Escape` && s4(false);
  });
}
var e10;
var init_nav_Bwr39cxT = __esm({
  "_astro/nav.Bwr39cxT.js"() {
    "use strict";
    e10 = 1200;
  }
});

// _astro/particle-field.BAvta5Gi.js
var particle_field_BAvta5Gi_exports = {};
__export(particle_field_BAvta5Gi_exports, {
  mount: () => i2
});
function t5(e19, t11, n9) {
  let r8 = e19.createShader(t11);
  return e19.shaderSource(r8, n9), e19.compileShader(r8), e19.getShaderParameter(r8, e19.COMPILE_STATUS) ? r8 : null;
}
function n3(e19, t11, n9) {
  let r8 = document.createElement(`canvas`);
  r8.width = t11, r8.height = n9;
  let i8 = r8.getContext(`2d`, { willReadFrequently: true });
  i8.imageSmoothingQuality = `high`, i8.filter = `blur(0.7px)`;
  let a6 = Math.max(t11 / e19.naturalWidth, n9 / e19.naturalHeight), o5 = e19.naturalWidth * a6, s4 = e19.naturalHeight * a6;
  return i8.drawImage(e19, (t11 - o5) / 2, (n9 - s4) / 2, o5, s4), i8.getImageData(0, 0, t11, n9).data;
}
function r2(e19, t11, n9, r8) {
  let i8 = new Float32Array(t11 * n9), a6 = 0;
  for (let t12 = 0, n10 = 0; t12 < i8.length; t12++, n10 += 4) {
    let r9 = ((e19[n10] * 0.3 + e19[n10 + 1] * 0.59 + e19[n10 + 2] * 0.11) / 255 - 0.06) / 0.94;
    a6 += r9 > 0 ? r9 : 0, i8[t12] = a6;
  }
  let o5 = new Float32Array(r8 * 2), s4 = new Float32Array(r8 * 2), c2 = new Uint8Array(r8 * 4);
  if (a6 <= 0) return { home: o5, seed: s4, col: c2, n: 0 };
  for (let n10 = 0; n10 < r8; n10++) {
    let r9 = Math.random() * a6, l2 = 0, u2 = i8.length - 1;
    for (; l2 < u2; ) {
      let e20 = l2 + u2 >> 1;
      i8[e20] < r9 ? l2 = e20 + 1 : u2 = e20;
    }
    let d2 = l2 % t11, f2 = l2 / t11 | 0, p2 = l2 * 4;
    o5[n10 * 2] = (d2 + Math.random()) * 4, o5[n10 * 2 + 1] = (f2 + Math.random()) * 4, s4[n10 * 2] = Math.random(), s4[n10 * 2 + 1] = Math.random();
    let m2 = 1 - 0.3 * Math.random();
    for (let t12 = 0; t12 < 3; t12++) c2[n10 * 4 + t12] = Math.round(255 * Math.min(1, 0.07 + 1.15 * (e19[p2 + t12] / 255)) * m2);
    c2[n10 * 4 + 3] = 255;
  }
  return { home: o5, seed: s4, col: c2, n: r8 };
}
function i2(i8, { reduced: a6, signal: o5 } = {}) {
  let s4 = [], c2 = (e19) => (s4.push(e19), e19);
  o5?.addEventListener(`abort`, () => {
    s4.forEach((e19) => e19.disconnect());
    try {
      z && cancelAnimationFrame(z);
    } catch {
    }
    try {
      for (let e19 of [`webgl2`, `webgl`]) u2.getContext(e19)?.getExtension(`WEBGL_lose_context`)?.loseContext();
      u2.remove();
    } catch {
    }
  });
  let l2 = i8.dataset.src;
  if (!l2) return;
  let u2 = document.createElement(`canvas`);
  u2.setAttribute(`aria-hidden`, `true`), u2.style.cssText = `position:absolute;inset:0;width:100%;height:100%;display:block;touch-action:pan-y`, getComputedStyle(i8).position === `static` && (i8.style.position = `relative`), i8.style.touchAction = `pan-y`;
  let d2;
  try {
    d2 = u2.getContext(`webgl`, { alpha: true, premultipliedAlpha: true, antialias: false });
  } catch {
    d2 = null;
  }
  if (!d2) return;
  let f2 = d2.createProgram(), p2 = t5(d2, d2.VERTEX_SHADER, `
attribute vec2 aHome;
attribute vec2 aOff;
attribute vec2 aSeed;
attribute vec4 aCol;
uniform vec2 uRes;
uniform float uT;
uniform float uDpr;
uniform float uAmp;
varying vec3 vCol;
varying float vEdge;
void main() {
  // idle drift: each dot loops on its own small 3D ellipse, period 2.5-4 s
  float ph = aSeed.x * 6.2831;
  float w = 6.2831 / (2.5 + 1.5 * fract(aSeed.y * 7.13 + aSeed.x * 3.7));
  float a = uT * w + ph;
  vec3 loop = vec3(sin(a), sin(a + 1.3 + aSeed.y * 2.0) * 0.8, cos(a + aSeed.x * 4.0));
  vec2 drift = loop.xy * uAmp;
  vec2 p = aHome + aOff + drift;
  gl_Position = vec4(p / uRes * 2.0 - 1.0, 0.0, 1.0) * vec4(1.0, -1.0, 1.0, 1.0);
  // ~1.8px \xB140%, and a few "nearer" dots a little larger
  float depth = pow(fract(aSeed.x * 47.31 + aSeed.y * 13.7), 10.0);
  float size = 1.8 * (0.6 + 0.8 * aSeed.y) * (1.0 + 0.6 * depth) * (1.0 + 0.1 * loop.z) * uDpr;
  gl_PointSize = size + 1.0;
  vEdge = 1.0 - 1.6 / (size + 1.0);
  vCol = aCol.rgb;
}`), m2 = t5(d2, d2.FRAGMENT_SHADER, `
precision mediump float;
varying vec3 vCol;
varying float vEdge;
void main() {
  float r = length(gl_PointCoord - 0.5) * 2.0;
  float a = 1.0 - smoothstep(vEdge * 0.6, 1.0, r);
  gl_FragColor = vec4(vCol * a, a);
}`);
  if (!p2 || !m2 || (d2.attachShader(f2, p2), d2.attachShader(f2, m2), d2.linkProgram(f2), !d2.getProgramParameter(f2, d2.LINK_STATUS))) return;
  d2.useProgram(f2);
  let h2 = (e19) => d2.getAttribLocation(f2, e19), g2 = h2(`aHome`), _2 = h2(`aOff`), v2 = h2(`aSeed`), y2 = h2(`aCol`), b2 = d2.getUniformLocation(f2, `uRes`), x2 = d2.getUniformLocation(f2, `uT`), S2 = d2.getUniformLocation(f2, `uDpr`), C2 = d2.getUniformLocation(f2, `uAmp`), w2 = d2.createBuffer(), T2 = d2.createBuffer(), E2 = d2.createBuffer(), D2 = d2.createBuffer();
  d2.enable(d2.BLEND), d2.blendFunc(d2.ONE, d2.ONE_MINUS_SRC_ALPHA), d2.clearColor(0, 0, 0, 0);
  let O2 = 0, k2 = 0, A = 1, j = 0, M = null, N = new Float32Array(), P = new Float32Array(), F = new Float32Array(), I = false, L = true, R = false, z = 0, B = 0, V = performance.now(), H = { x: 0, y: 0, px: 0, py: 0, vx: 0, vy: 0, on: false, t: 0, clock: 0 };
  function U(e19, t11, n9, r8, i9) {
    d2.bindBuffer(d2.ARRAY_BUFFER, e19), d2.enableVertexAttribArray(t11), d2.vertexAttribPointer(t11, n9, r8, i9, 0, 0);
  }
  function W() {
    if (!M || !O2 || !k2) return;
    let e19 = Math.round(0.0576036866359447 * O2 * k2 * Math.min(2, (781200 / (O2 * k2)) ** 0.3)), t11 = Math.ceil(O2 / 4), i9 = Math.ceil(k2 / 4), a7 = r2(n3(M, t11, i9), t11, i9, e19);
    j = a7.n, F = a7.home, N = new Float32Array(j * 2), P = new Float32Array(j * 2), d2.bindBuffer(d2.ARRAY_BUFFER, w2), d2.bufferData(d2.ARRAY_BUFFER, a7.home, d2.STATIC_DRAW), d2.bindBuffer(d2.ARRAY_BUFFER, E2), d2.bufferData(d2.ARRAY_BUFFER, a7.seed, d2.STATIC_DRAW), d2.bindBuffer(d2.ARRAY_BUFFER, D2), d2.bufferData(d2.ARRAY_BUFFER, a7.col, d2.STATIC_DRAW), d2.bindBuffer(d2.ARRAY_BUFFER, T2), d2.bufferData(d2.ARRAY_BUFFER, N, d2.DYNAMIC_DRAW), U(w2, g2, 2, d2.FLOAT, false), U(E2, v2, 2, d2.FLOAT, false), U(D2, y2, 4, d2.UNSIGNED_BYTE, true), U(T2, _2, 2, d2.FLOAT, false), I = false, G(0);
  }
  function G(e19) {
    d2.viewport(0, 0, u2.width, u2.height), d2.clear(d2.COLOR_BUFFER_BIT), j && (d2.uniform2f(b2, O2, k2), d2.uniform1f(x2, e19), d2.uniform1f(S2, A), d2.uniform1f(C2, a6 ? 0 : 1.25 * Math.max(0.4, Math.min(1, O2 / 1200, k2 / 651))), d2.drawArrays(d2.POINTS, 0, j));
  }
  function K(t11) {
    let n9 = H.on, r8 = H.px, i9 = H.py, a7 = H.x - r8, o6 = H.y - i9, s5 = a7 * a7 + o6 * o6, c3 = Math.min(r8, H.x) - 90, l3 = Math.max(r8, H.x) + 90, u3 = Math.min(i9, H.y) - 90, d3 = Math.max(i9, H.y) + 90, f3 = Math.hypot(H.vx, H.vy), p3 = Math.min(4, f3 * 0.0018181818181818182), m3 = f3 > 1 ? H.vx / f3 : 0, h3 = f3 > 1 ? H.vy / f3 : 0, g3 = 14e3 * (1 + 0.12 * Math.sin(H.clock * 2.2)) * t11, _3 = 55 * t11, v3 = Math.max(0, 1 - 12.6 * t11), y3 = 0;
    for (let f4 = 0, b3 = 0; f4 < j; f4++, b3 += 2) {
      let f5 = N[b3], x3 = N[b3 + 1], S3 = P[b3], C3 = P[b3 + 1];
      if (n9) {
        let t12 = F[b3] + f5, n10 = F[b3 + 1] + x3;
        if (t12 > c3 && t12 < l3 && n10 > u3 && n10 < d3) {
          let c4 = s5 > 0 ? ((t12 - r8) * a7 + (n10 - i9) * o6) / s5 : 1;
          c4 = c4 < 0 ? 0 : c4 > 1 ? 1 : c4;
          let l4 = t12 - (r8 + a7 * c4), u4 = n10 - (i9 + o6 * c4), d4 = l4 * l4 + u4 * u4;
          if (d4 < 8100) {
            let t13 = Math.sqrt(d4) + 1e-3, n11 = 1 - t13 / 90, r9 = n11 * n11 * g3, i10 = l4 / t13, a8 = u4 / t13;
            S3 += (i10 - a8 * e11 + m3 * p3) * r9, C3 += (a8 + i10 * e11 + h3 * p3) * r9;
          }
        }
      }
      if (f5 !== 0 || x3 !== 0 || S3 !== 0 || C3 !== 0) {
        S3 = (S3 - f5 * _3) * v3, C3 = (C3 - x3 * _3) * v3, f5 += S3 * t11, x3 += C3 * t11;
        let e19 = Math.abs(f5) + Math.abs(x3) + Math.abs(S3) * 0.05 + Math.abs(C3) * 0.05;
        e19 < 0.02 ? f5 = x3 = S3 = C3 = 0 : e19 > y3 && (y3 = e19), N[b3] = f5, N[b3 + 1] = x3, P[b3] = S3, P[b3 + 1] = C3;
      }
    }
    return H.px = H.x, H.py = H.y, y3 > 0;
  }
  function q(e19) {
    if (o5?.aborted || (z = 0, !R)) return;
    let t11 = Math.min(1 / 30, Math.max(0, (e19 - B) / 1e3));
    B = e19;
    let n9 = Math.exp(-t11 / 0.3);
    if (H.vx *= n9, H.vy *= n9, H.clock += t11, I || H.on) {
      let e20 = t11 > 1 / 70 ? 2 : 1, n10 = false;
      for (let r8 = 0; r8 < e20; r8++) n10 = K(t11 / e20) || n10;
      I = n10, d2.bindBuffer(d2.ARRAY_BUFFER, T2), d2.bufferSubData(d2.ARRAY_BUFFER, 0, N);
    }
    G((e19 - V) / 1e3), z = requestAnimationFrame(q);
  }
  function J() {
    let e19 = !a6 && L && !document.hidden && j > 0;
    e19 && !R ? (R = true, B = performance.now(), z = requestAnimationFrame(q)) : !e19 && R && (R = false, z && cancelAnimationFrame(z), z = 0);
  }
  function Y() {
    let e19 = i8.getBoundingClientRect(), t11 = e19.width, n9 = e19.height;
    t11 && n9 && (A = Math.min(2, window.devicePixelRatio || 1), u2.width = Math.round(t11 * A), u2.height = Math.round(n9 * A), Math.abs(t11 - O2) > 0.5 || Math.abs(n9 - k2) > 0.5 ? (O2 = t11, k2 = n9, W()) : G(a6 ? 0 : (performance.now() - V) / 1e3), J());
  }
  function X(e19, t11) {
    let n9 = i8.getBoundingClientRect(), r8 = e19 - n9.left, a7 = t11 - n9.top, o6 = performance.now();
    if (!H.on) H.px = r8, H.py = a7, H.vx = H.vy = 0;
    else {
      let e20 = Math.max(8, o6 - H.t) / 1e3;
      H.vx = H.vx * 0.5 + (r8 - H.x) / e20 * 0.5, H.vy = H.vy * 0.5 + (a7 - H.y) / e20 * 0.5;
    }
    H.x = r8, H.y = a7, H.t = o6, H.on = true;
  }
  let Z = () => {
    H.on = false, H.vx = H.vy = 0;
  };
  a6 || (i8.addEventListener(`pointermove`, (e19) => {
    e19.pointerType !== `touch` && X(e19.clientX, e19.clientY);
  }, { signal: o5 }), i8.addEventListener(`pointerleave`, (e19) => {
    e19.pointerType !== `touch` && Z();
  }, { signal: o5 }), i8.addEventListener(`touchstart`, (e19) => {
    let t11 = e19.touches[0];
    H.on = false, X(t11.clientX, t11.clientY);
  }, { passive: true }, { signal: o5 }), i8.addEventListener(`touchmove`, (e19) => {
    let t11 = e19.touches[0];
    X(t11.clientX, t11.clientY);
  }, { passive: true }, { signal: o5 }), i8.addEventListener(`touchend`, Z, { passive: true, signal: o5 }), i8.addEventListener(`touchcancel`, Z, { passive: true, signal: o5 })), u2.addEventListener(`webglcontextlost`, (e19) => {
    e19.preventDefault(), R = false, j = 0;
  }, { signal: o5 });
  let Q = new Image();
  Q.crossOrigin = `anonymous`, Q.decoding = `async`, Q.onload = () => {
    o5?.aborted || (M = Q, i8.appendChild(u2), c2(new ResizeObserver(Y)).observe(i8), c2(new IntersectionObserver(([e19]) => {
      L = e19.isIntersecting, J();
    }, { rootMargin: `100px` })).observe(i8), document.addEventListener(`visibilitychange`, J, { signal: o5 }), Y());
  }, Q.onerror = () => {
  }, Q.src = l2;
}
var e11;
var init_particle_field_BAvta5Gi = __esm({
  "_astro/particle-field.BAvta5Gi.js"() {
    "use strict";
    e11 = 0.5;
  }
});

// _astro/plan-tabs.BvPCxqT2.js
var plan_tabs_BvPCxqT2_exports = {};
__export(plan_tabs_BvPCxqT2_exports, {
  mount: () => e12
});
function e12(e19) {
  let t11 = [...e19.querySelectorAll(`button[data-plan-tab]`)];
  for (let n9 of t11) n9.addEventListener(`click`, () => {
    e19.dataset.plan = n9.dataset.planTab;
    for (let e20 of t11) e20.setAttribute(`aria-pressed`, String(e20 === n9));
  });
}
var init_plan_tabs_BvPCxqT2 = __esm({
  "_astro/plan-tabs.BvPCxqT2.js"() {
    "use strict";
  }
});

// _astro/rules-scroll.BGZGFtxw.js
var rules_scroll_BGZGFtxw_exports = {};
__export(rules_scroll_BGZGFtxw_exports, {
  mount: () => i3
});
function i3(i8, { reduced: a6 }) {
  let o5 = i8.querySelector(`#about-rules-stage`), s4 = i8.querySelector(`#about-rules-viewport`), c2 = i8.querySelector(`#about-rules-track`), l2 = [...c2.children], u2 = window.matchMedia(`(min-width: 700px)`), d2 = 0, f2 = 0, p2 = 0, m2 = () => {
    d2 = i8.getBoundingClientRect().height - o5.getBoundingClientRect().height;
    let e19 = c2.offsetWidth - s4.clientWidth;
    f2 = -(e19 > 0 ? e19 : 0);
  }, h2 = () => u2.matches && d2 > 0, g2 = () => {
    c2.style.transform = ``;
    for (let e19 of l2) e19.style.transform = ``, e19.style.opacity = ``;
  }, _2 = () => {
    if (p2 = 0, !h2()) {
      g2();
      return;
    }
    let o6 = n4(-i8.getBoundingClientRect().top / d2), s5 = r3(o6, t6[0], t6[1], 0, f2);
    c2.style.transform = s5 ? `translateX(${s5}px)` : ``, !a6 && l2.forEach((t11, n9) => {
      let [i9, a7] = e13[n9], s6 = r3(o6, i9, a7, 460, 0);
      t11.style.transform = s6 ? `translateY(${s6}px)` : ``, t11.style.opacity = String(r3(o6, i9, i9 + 0.02, 0, 1));
    });
  }, v2 = () => {
    p2 ||= requestAnimationFrame(_2);
  }, y2 = () => {
    m2(), v2();
  };
  m2(), _2(), window.addEventListener(`scroll`, v2, { passive: true }), window.addEventListener(`resize`, y2), u2.addEventListener(`change`, y2), `ResizeObserver` in window && new ResizeObserver(y2).observe(i8);
}
var e13, t6, n4, r3;
var init_rules_scroll_BGZGFtxw = __esm({
  "_astro/rules-scroll.BGZGFtxw.js"() {
    "use strict";
    e13 = [[0.04, 0.2], [0.2, 0.36], [0.36, 0.52], [0.66, 0.84]];
    t6 = [0.56, 0.78];
    n4 = (e19) => e19 < 0 ? 0 : e19 > 1 ? 1 : e19;
    r3 = (e19, t11, r8, i8, a6) => i8 + (a6 - i8) * n4((e19 - t11) / (r8 - t11));
  }
});

// _astro/shard-field.CNjId5JN.js
var shard_field_CNjId5JN_exports = {};
__export(shard_field_CNjId5JN_exports, {
  mount: () => s2
});
function r4(e19, t11) {
  let n9 = /rgba?\(([^)]+)\)/.exec(e19 || ``);
  if (n9) {
    let e20 = n9[1].split(`,`).map(parseFloat);
    if (e20.length < 4 || e20[3] > 0) return [e20[0] / 255, e20[1] / 255, e20[2] / 255];
  }
  let r8 = /^#?([0-9a-f]{6})$/i.exec(e19 || ``);
  if (r8) {
    let e20 = parseInt(r8[1], 16);
    return [(e20 >> 16) / 255, (e20 >> 8 & 255) / 255, (e20 & 255) / 255];
  }
  return t11;
}
function a2(e19, t11, n9, r8, i8) {
  let a6 = i8 * i8, o5 = a6 * i8;
  return 0.5 * (2 * t11 + (-e19 + n9) * i8 + (2 * e19 - 5 * t11 + 4 * n9 - r8) * a6 + (-e19 + 3 * t11 - 3 * n9 + r8) * o5);
}
function o2() {
  return (Math.random() + Math.random() + Math.random() + Math.random() - 2) * 1.73;
}
function s2(s4, { reduced: c2, signal: l2 } = {}) {
  let ee = [], u2 = (e19) => (ee.push(e19), e19);
  l2?.addEventListener(`abort`, () => {
    ee.forEach((e19) => e19.disconnect());
    try {
      Z && cancelAnimationFrame(Z);
    } catch {
    }
    try {
      for (let e19 of [`webgl2`, `webgl`]) d2.getContext(e19)?.getExtension(`WEBGL_lose_context`)?.loseContext();
      d2.remove();
    } catch {
    }
  });
  let d2 = document.createElement(`canvas`);
  d2.setAttribute(`aria-hidden`, `true`), d2.style.cssText = `position:absolute;inset:0;width:100%;height:100%;display:block;pointer-events:none;opacity:0;transition:opacity 1.4s ease`;
  let f2;
  try {
    f2 = d2.getContext(`webgl2`, { antialias: false, alpha: false, premultipliedAlpha: false, powerPreference: `low-power` });
  } catch {
    f2 = null;
  }
  if (!f2) return;
  let te = (e19, t11) => {
    let n9 = f2.createShader(e19);
    return f2.shaderSource(n9, t11), f2.compileShader(n9), f2.getShaderParameter(n9, f2.COMPILE_STATUS) ? n9 : null;
  }, p2 = (e19, t11) => {
    let n9 = te(f2.VERTEX_SHADER, e19), r8 = te(f2.FRAGMENT_SHADER, t11);
    if (!n9 || !r8) return null;
    let i8 = f2.createProgram();
    return f2.attachShader(i8, n9), f2.attachShader(i8, r8), f2.linkProgram(i8), f2.getProgramParameter(i8, f2.LINK_STATUS) ? i8 : null;
  }, m2 = p2(`#version 300 es
layout(location=0) in vec2 a_corner;
layout(location=1) in vec4 a_a; // x, y, length(px), angle
layout(location=2) in vec4 a_b; // width ratio, brightness, glint, hue
layout(location=3) in vec2 a_c; // accent flash, facet light (-1..1)
uniform vec2 u_res;
uniform float u_dpr;
const float E = 1.9;
out vec2 v_p;
out vec4 v_b;
out vec2 v_c;
out vec2 v_ca;
out float v_len;
void main(){
  v_c = a_c;
  float c = cos(a_a.w), s = sin(a_a.w);
  mat2 R = mat2(c, s, -s, c);
  vec2 local = a_corner * E;
  vec2 world = a_a.xy + R * (local * vec2(a_a.z, a_a.z * max(a_b.x, 0.35)));
  v_p = local * vec2(1.0, max(a_b.x, 0.35));
  v_b = a_b;
  v_len = a_a.z * u_dpr;
  // radial chromatic split, stronger toward the edges of the box, in local units
  vec2 rad = (a_a.xy - 0.5 * u_res) / max(u_res.x, u_res.y);
  vec2 ca = (vec2(1.0, 0.0) + rad * 1.6) * (0.11 + 1.1 / max(a_a.z, 1.0));
  v_ca = transpose(R) * ca;
  vec2 clip = world / u_res * 2.0 - 1.0;
  gl_Position = vec4(clip.x, -clip.y, 0.0, 1.0);
}`, `#version 300 es
precision highp float;
in vec2 v_p;
in vec4 v_b;
in vec2 v_c;
in vec2 v_ca;
in float v_len;
uniform vec3 u_c1;
uniform vec3 u_c2;
uniform float u_fade;
out vec4 o;
float dia(vec2 p, float k){ return abs(p.x) + abs(p.y) / k; }
void main(){
  float k = v_b.x;
  float aa = 0.05 + 1.5 / max(v_len * k, 1.0);
  float dG = dia(v_p, k);
  float cG = smoothstep(1.0 + aa, 1.0 - aa, dG);
  float cR = smoothstep(1.0 + aa, 1.0 - aa, dia(v_p + v_ca, k));
  float cB = smoothstep(1.0 + aa, 1.0 - aa, dia(v_p - v_ca, k));
  vec3 base = mix(mix(u_c1, u_c2, v_b.w), vec3(1.0), 0.18);
  // two facets either side of the spine, lit unequally, plus a bright ridge
  float facet = 0.8 + 0.22 * sign(v_p.y) * v_c.y;
  float ridge = exp(-abs(v_p.y) / k * 9.0) * 0.5;
  float taper = 1.0 - 0.35 * abs(v_p.x);
  vec3 col = base * (facet + ridge) * taper * cG;
  col += vec3(1.0, 0.32, 0.22) * max(cR - cG, 0.0) * 1.2;
  col += vec3(0.2, 0.5, 1.0) * max(cB - cG, 0.0) * 1.3;
  col += vec3(1.0) * v_b.z * cG * (0.5 + ridge);
  // soft halo stands in for bloom
  float halo = exp(-dG * 2.4) * (0.10 + 0.45 * v_b.z);
  col += mix(base, vec3(1.0), 0.2) * halo;
  col *= v_b.y;
  // shockwave flash in the accent (white)
  col += u_c2 * v_c.x * (cG * 1.1 + halo * 2.4);
  col *= u_fade;
  o = vec4(col, 0.0);
}`), h2 = p2(`#version 300 es
void main(){ vec2 p = vec2(gl_VertexID == 1 ? 3.0 : -1.0, gl_VertexID == 2 ? 3.0 : -1.0); gl_Position = vec4(p, 0.0, 1.0); }`, `#version 300 es
precision highp float;
uniform vec3 u_bg;
uniform float u_seed;
out vec4 o;
void main(){
  vec2 q = gl_FragCoord.xy + u_seed;
  float n = fract(sin(dot(q, vec2(12.9898, 78.233))) * 43758.5453);
  o = vec4(u_bg + (n - 0.5) * 0.014, 1.0);
}`);
  if (!m2 || !h2) return;
  getComputedStyle(s4).position === `static` && (s4.style.position = `relative`), s4.style.touchAction = `pan-y`, s4.appendChild(d2);
  let g2 = r4(s4.dataset.bg, [16 / 255, 16 / 255, 16 / 255]), _2 = (e19) => f2.getUniformLocation(m2, e19), v2 = f2.getUniformLocation(h2, `u_bg`), y2 = f2.getUniformLocation(h2, `u_seed`), ne = _2(`u_res`), b2 = _2(`u_dpr`), re = _2(`u_c1`), ie = _2(`u_c2`), ae = _2(`u_fade`), x2 = f2.createVertexArray();
  f2.bindVertexArray(x2);
  let S2 = f2.createBuffer();
  f2.bindBuffer(f2.ARRAY_BUFFER, S2), f2.bufferData(f2.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), f2.STATIC_DRAW), f2.enableVertexAttribArray(0), f2.vertexAttribPointer(0, 2, f2.FLOAT, false, 0, 0);
  let C2 = f2.createBuffer();
  f2.bindBuffer(f2.ARRAY_BUFFER, C2), f2.enableVertexAttribArray(1), f2.vertexAttribPointer(1, 4, f2.FLOAT, false, 40, 0), f2.vertexAttribDivisor(1, 1), f2.enableVertexAttribArray(2), f2.vertexAttribPointer(2, 4, f2.FLOAT, false, 40, 16), f2.vertexAttribDivisor(2, 1), f2.enableVertexAttribArray(3), f2.vertexAttribPointer(3, 2, f2.FLOAT, false, 40, 32), f2.vertexAttribDivisor(3, 1);
  let w2 = f2.createVertexArray(), T2 = 0, E2 = 0, D2 = 1, O2 = 1, k2 = new Float32Array(257), A = new Float32Array(257), oe = new Float32Array(257), se = new Float32Array(257), j = 0, M = null, N = null;
  function P() {
    let n9 = [], r8 = e14.map(([e19, t11]) => [e19 * T2, t11 * E2]);
    for (let e19 = 0; e19 < r8.length - 1; e19++) {
      let t11 = r8[Math.max(e19 - 1, 0)], i9 = r8[e19], o6 = r8[e19 + 1], s6 = r8[Math.min(e19 + 2, r8.length - 1)];
      for (let e20 = 0; e20 < 32; e20++) {
        let r9 = e20 / 32;
        n9.push([a2(t11[0], i9[0], o6[0], s6[0], r9), a2(t11[1], i9[1], o6[1], s6[1], r9)]);
      }
    }
    n9.push(r8[r8.length - 1]);
    let i8 = [0];
    for (let e19 = 1; e19 < n9.length; e19++) i8.push(i8[e19 - 1] + Math.hypot(n9[e19][0] - n9[e19 - 1][0], n9[e19][1] - n9[e19 - 1][1]));
    let o5 = i8[i8.length - 1], s5 = 0;
    for (let e19 = 0; e19 <= t7; e19++) {
      let r9 = e19 / t7 * o5;
      for (; s5 < n9.length - 2 && i8[s5 + 1] < r9; ) s5++;
      let a6 = (r9 - i8[s5]) / Math.max(i8[s5 + 1] - i8[s5], 1e-6);
      k2[e19] = n9[s5][0] + (n9[s5 + 1][0] - n9[s5][0]) * a6, A[e19] = n9[s5][1] + (n9[s5 + 1][1] - n9[s5][1]) * a6;
    }
    for (let e19 = 0; e19 <= t7; e19++) {
      let n10 = Math.max(e19 - 1, 0), r9 = Math.min(e19 + 1, t7), i9 = k2[r9] - k2[n10], a6 = A[r9] - A[n10], o6 = Math.hypot(i9, a6) || 1;
      oe[e19] = i9 / o6, se[e19] = a6 / o6;
    }
  }
  function ce(e19, t11) {
    let n9 = e19 * 17, r8 = t11 ? 0 : M[n9 + 11], i8 = t11 ? 0 : M[n9 + 12];
    M[n9] = t11 ? Math.random() : -Math.random() * 0.04, M[n9 + 1] = Math.random() < 0.12 ? (Math.random() * 2 - 1) * 1.8 : o2() * 0.5;
    let a6 = Math.random();
    M[n9 + 2] = a6;
    let s5 = Math.random();
    M[n9 + 3] = 1.3 + 11 * s5 ** 2.4 * (0.4 + 1.1 * a6 * a6), M[n9 + 4] = 0.24 + Math.random() * 0.2, Math.random() < 0.07 && (M[n9 + 3] *= 1.7, M[n9 + 4] *= 0.5), M[n9 + 5] = Math.random() * Math.PI * 2, M[n9 + 6] = (0.35 + Math.random() * 1.2) * (Math.random() < 0.5 ? -1 : 1), M[n9 + 7] = (Math.random() - 0.5) * 0.45, M[n9 + 8] = 0.65 + Math.random() * 0.7, M[n9 + 9] = +(Math.random() < 0.3), M[n9 + 10] = Math.random() < 0.15 ? 0.5 + Math.random() * 0.5 : Math.random() * 0.2, M[n9 + 11] = r8, M[n9 + 12] = i8, M[n9 + 13] = Math.abs(o2()) * 0.5 + Math.random() * 0.08, M[n9 + 14] = Math.random() * Math.PI * 2, M[n9 + 16] = (0.25 + Math.random() * 0.5) * (Math.random() < 0.8 ? 1 : -1), M[n9 + 15] = Math.random() * Math.PI * 2;
  }
  function F() {
    let e19 = s4.getBoundingClientRect();
    T2 = Math.max(1, e19.width), E2 = Math.max(1, e19.height), D2 = Math.min(window.devicePixelRatio || 1, 2), d2.width = Math.round(T2 * D2), d2.height = Math.round(E2 * D2), O2 = Math.max(0.72, Math.min(1.25, Math.hypot(T2, E2) / Math.hypot(1440, 792))), P();
    let t11 = Math.round(Math.max(1e3, Math.min(2500, T2 * E2 * 2500 / 1140480)));
    if (t11 !== j) {
      j = t11, M = new Float32Array(j * 17), N = new Float32Array(j * n5);
      for (let e20 = 0; e20 < j; e20++) ce(e20, true);
      f2.bindBuffer(f2.ARRAY_BUFFER, C2), f2.bufferData(f2.ARRAY_BUFFER, N.byteLength, f2.DYNAMIC_DRAW);
    }
  }
  let I = { x: 0, y: 0, in: false, sx: 0, sy: 0, vx: 0, vy: 0, pres: 0, down: false, downAt: 0, gathering: false, G: 0, Gv: 0 }, le = [0, 1, 2, 3].map(() => ({ on: false, x: 0, y: 0, t: 0, s: 1 })), L = 8, R = (e19, t11, n9) => {
    let r8 = le.find((e20) => !e20.on);
    r8 && (r8.on = true, r8.x = e19, r8.y = t11, r8.t = 0, r8.s = n9);
  }, z = (e19) => {
    let t11 = s4.getBoundingClientRect();
    I.x = e19.clientX - t11.left, I.y = e19.clientY - t11.top, I.in = I.x >= 0 && I.y >= 0 && I.x <= t11.width && I.y <= t11.height;
  }, B = (e19) => {
    let t11 = I.pres > 1e-3;
    z(e19), I.in && !t11 && (I.sx = I.x, I.sy = I.y, I.vx = I.vy = 0);
  }, V = (e19) => {
    I.down && (I.down = false, I.gathering && e19 && I.G > 0.3 && R(I.sx, I.sy, 1 + 0.8 * Math.min(1, I.G)), I.gathering = false);
  }, H = (e19) => {
    e19.button > 0 || e19.target instanceof Element && e19.target.closest(`a,button,input,select,textarea,label,summary,[role="button"],[role="link"]`) || (B(e19), I.in && (I.down = true, I.downAt = L, I.sx = I.x, I.sy = I.y, window.getSelection()?.removeAllRanges(), R(I.x, I.y, 1)));
  }, U = (e19) => {
    z(e19), V(true), e19.pointerType !== `mouse` && (I.in = false);
  }, ue = () => {
    V(false), I.in = false;
  };
  if (!c2) {
    let e19 = { passive: true };
    window.addEventListener(`pointermove`, B, { ...e19, signal: l2 }), window.addEventListener(`pointerdown`, H, { ...e19, signal: l2 }), window.addEventListener(`pointerup`, U, { ...e19, signal: l2 }), window.addEventListener(`pointercancel`, ue, { ...e19, signal: l2 }), window.addEventListener(`blur`, ue, { ...e19, signal: l2 }), document.documentElement.addEventListener(`pointerleave`, () => {
      I.in = false;
    }, { ...e19, signal: l2 });
    let t11 = (e20) => {
      I.down && e20.preventDefault();
    };
    document.addEventListener(`selectstart`, t11, { signal: l2 }), document.addEventListener(`dragstart`, t11, { signal: l2 });
  }
  let de = Math.PI * 2, fe = (e19) => e19 <= 0 ? 0 : e19 >= 1 ? 1 : e19 * e19 * (3 - 2 * e19);
  function pe(e19) {
    let t11 = 1156 * (I.x - I.sx) - 68 * I.vx, n9 = 1156 * (I.y - I.sy) - 68 * I.vy;
    I.vx += t11 * e19, I.vy += n9 * e19, I.sx += I.vx * e19, I.sy += I.vy * e19;
    let r8 = +!!I.in;
    I.pres += (r8 - I.pres) * (1 - Math.exp(-e19 / (I.in ? 0.035 : 0.085))), !I.in && I.down && V(true), I.down && !I.gathering && L - I.downAt > 0.15 && (I.gathering = true);
    let i8 = +!!I.gathering, a6 = I.gathering ? 5 : 4.5;
    I.Gv += (a6 * a6 * (i8 - I.G) - 2 * a6 * I.Gv) * e19, I.G += I.Gv * e19;
    for (let t12 of le) t12.on && (t12.t += e19) > 2.6 && (t12.on = false);
  }
  function W(e19, n9) {
    pe(e19);
    let r8 = I.sx, i8 = I.sy, a6 = I.pres, o5 = a6 * (1 - Math.min(1, Math.max(0, I.G))), s5 = E2 * 0.34, c3 = E2 * 0.13, l3 = E2 * 0.055 * o5, ee2 = 0.9 / E2, u3 = a6 * ((r8 / T2 - 0.5) * 2.2 + (i8 / E2 - 0.5) * 1.2), d3 = 2 * E2, f3 = E2 * 0.05, te2 = Math.hypot(T2, E2), p3 = E2 * 0.1, m3 = I.gathering, h3 = m3 ? n9 - I.downAt - 0.15 : 0, g3 = 0;
    for (let a7 = 0; a7 < j; a7++) {
      let _3 = a7 * 17, v3 = M[_3 + 2];
      M[_3] += 0.023809523809523808 * M[_3 + 8] * (0.7 + 0.6 * v3) * e19, M[_3] > 1.02 && ce(a7, false);
      let y3 = M[_3], ne2 = Math.min(Math.max(y3, 0), 1) * t7, b3 = Math.min(ne2 | 0, 255), re2 = ne2 - b3, ie2 = k2[b3] + (k2[b3 + 1] - k2[b3]) * re2, ae2 = A[b3] + (A[b3 + 1] - A[b3]) * re2, x3 = oe[b3], S3 = se[b3], C3 = -S3, w3 = x3, D3 = Math.min(E2, T2 * 0.8) * (0.25 - 0.08 * y3) * (1 + 0.15 * Math.sin(y3 * 9 + n9 * 0.15)), j2 = M[_3 + 1] * D3 + Math.sin(n9 * 0.3 + M[_3 + 15]) * 6 * O2, P2 = ie2 + C3 * j2 + (y3 < 0 ? x3 * y3 * T2 : 0), F2 = ae2 + w3 * j2 + (y3 < 0 ? S3 * y3 * T2 : 0), I2 = P2, L2 = F2, R2 = Math.atan2(S3, x3) * 0.6 + M[_3 + 7], z2 = 0, B2 = 0, V2 = 0;
      if (o5 > 2e-3) {
        let e20 = P2 - r8, t11 = F2 - i8, n10 = e20 * x3 + t11 * S3, a8 = e20 * C3 + t11 * w3 - ee2 * n10 * n10 * 0.5, o6 = Math.exp(-(n10 * n10) / (s5 * s5) - a8 * a8 / (c3 * c3));
        if (o6 > 3e-3) {
          let e21 = Math.tanh(a8 / (c3 * 0.35)), t12 = l3 * o6 * e21 * (0.7 + 0.5 * v3);
          P2 += C3 * t12, F2 += w3 * t12;
          let r9 = t12 * (-2 * n10 / (s5 * s5));
          z2 = Math.atan(r9 * 1.6);
        }
      }
      for (let e20 = 0; e20 < 4; e20++) {
        let t11 = le[e20];
        if (!t11.on) continue;
        let n10 = P2 - t11.x, r9 = F2 - t11.y, i9 = Math.hypot(n10, r9) || 1, a8 = t11.t - i9 / d3;
        if (a8 <= 0 || a8 > 1.9) continue;
        let o6 = Math.exp(-a8 * 2.6) * (1 - Math.exp(-a8 * 40)) / (1 + i9 / (0.7 * E2)), s6 = Math.sin(de * 1.5 * a8) * o6 * t11.s, c4 = s6 * f3 * (0.7 + 0.5 * v3);
        P2 += n10 / i9 * c4, F2 += r9 / i9 * c4, V2 += (Math.abs(s6) * 0.35 + Math.exp(-a8 * 13) * (1 - Math.exp(-a8 * 60)) / (1 + i9 / (0.9 * E2)) * 0.9) * t11.s, B2 += s6;
      }
      let H2 = M[_3 + 11], U2 = M[_3 + 12], ue2 = 0.1 + 0.6 * Math.min(1, Math.hypot(I2 - r8, L2 - i8) / te2 * 1.6) + 0.35 * (1 - v3), pe2 = m3 ? fe((h3 - ue2) / 0.55) : 0, W2 = m3 ? 6 : 4.6;
      U2 += (W2 * W2 * (pe2 - H2) - 2 * W2 * U2) * e19, H2 += U2 * e19, M[_3 + 11] = H2, M[_3 + 12] = U2;
      let G2 = 1;
      if (H2 > 1e-3) {
        let t11 = M[_3 + 13] * p3 * (1 + 0.18 * Math.sin(n9 * 0.7 + M[_3 + 15] * 3));
        M[_3 + 14] += M[_3 + 16] * e19 * (0.6 + 0.6 / (0.4 + M[_3 + 13]));
        let a8 = M[_3 + 14] + 0.4 * Math.sin(n9 * 0.33 + M[_3 + 13] * 4), o6 = r8 + Math.cos(a8) * t11 * 1.15, s6 = i8 + Math.sin(a8) * t11 * 0.9, c4 = Math.min(1, Math.max(0, H2));
        P2 += (o6 - P2) * c4, F2 += (s6 - F2) * c4;
        let l4 = a8 + (M[_3 + 16] > 0 ? Math.PI / 2 : -Math.PI / 2);
        R2 += Math.atan2(Math.sin(l4 - R2), Math.cos(l4 - R2)) * c4 * 0.8, G2 = 1 - 0.3 * c4;
      }
      M[_3 + 5] += M[_3 + 6] * e19;
      let K2 = M[_3 + 5], q2 = Math.abs(Math.sin(K2 + B2 * 1.2)), me2 = M[_3 + 3] * O2 * (1.35 - 0.6 * Math.min(Math.max(y3, 0), 1)) * G2 * (1 + 0.2 * Math.min(1, V2));
      R2 += z2 + 0.25 * Math.sin(K2 * 0.5 + M[_3 + 15]);
      let J2 = M[_3 + 4] * (0.25 + 0.75 * q2), Y2 = Math.min(1, (y3 + 0.02) / 0.08, (1.02 - y3) / 0.1), X2 = Math.max(Y2, Math.min(1, H2)), Z2 = Math.max(0, X2) * (1 - 0.6 * Math.min(1, Math.max(0, H2))) * (0.13 + 0.6 * v3 * v3) * (0.45 + 0.75 * q2) * (1.25 - 0.45 * Math.min(Math.max(y3, 0), 1)), Q2 = K2 * 2 + M[_3 + 15] + u3, $2 = M[_3 + 9] ? Math.max(0, Math.cos(Q2)) ** 22 * (0.9 + 1.6 * v3 * v3) : 0;
      N[g3++] = P2, N[g3++] = F2, N[g3++] = me2, N[g3++] = R2, N[g3++] = J2, N[g3++] = Z2, N[g3++] = $2, N[g3++] = M[_3 + 10], N[g3++] = Math.min(1.2, V2) * Math.max(0, X2) * (0.4 + 0.5 * v3), N[g3++] = Math.cos(K2 + u3 * 0.8);
    }
  }
  let G = i4(10724259), K = i4(15921906), q = 0, me = 0;
  function J() {
    f2.viewport(0, 0, d2.width, d2.height), f2.disable(f2.BLEND), f2.useProgram(h2), f2.bindVertexArray(w2), f2.uniform3f(v2, g2[0], g2[1], g2[2]), f2.uniform1f(y2, me++ % 64 * 17), f2.drawArrays(f2.TRIANGLES, 0, 3), f2.useProgram(m2), f2.bindVertexArray(x2), f2.uniform2f(ne, T2, E2), f2.uniform1f(b2, D2), f2.uniform3f(re, G[0] * 1.5, G[1] * 1.5, G[2] * 1.5), f2.uniform3f(ie, K[0] * 1.3, K[1] * 1.3, K[2] * 1.3), f2.uniform1f(ae, q), f2.bindBuffer(f2.ARRAY_BUFFER, C2), f2.bufferSubData(f2.ARRAY_BUFFER, 0, N), f2.enable(f2.BLEND), f2.blendFunc(f2.ONE, f2.ONE), f2.drawArraysInstanced(f2.TRIANGLE_STRIP, 0, 4, j);
  }
  if (F(), c2) {
    q = 1, W(0, L), J(), d2.style.transition = `none`, d2.style.opacity = `1`, u2(new ResizeObserver(() => {
      F(), W(0, L), J();
    })).observe(s4);
    return;
  }
  let Y = true, X = false, Z = 0, Q = 0, $ = -1, he = (e19) => {
    if (l2?.aborted || (Z = 0, !Y || !X)) return;
    let t11 = Q ? Math.min((e19 - Q) / 1e3, 1 / 20) : 1 / 60;
    Q = e19, $ < 0 && ($ = e19, d2.style.opacity = `1`);
    let n9 = (e19 - $) / 1e3;
    q = Math.min(1, Math.max(0, (n9 - 0.3) / 1.8)), q = q * q * (3 - 2 * q), L += t11, W(t11, L), J(), Z = requestAnimationFrame(he);
  }, ge = () => {
    !Z && Y && X && (Q = 0, Z = requestAnimationFrame(he));
  };
  u2(new ResizeObserver(() => {
    F(), Z || (W(0, L), J());
  })).observe(s4), u2(new IntersectionObserver((e19) => {
    X = e19[e19.length - 1].isIntersecting, ge();
  })).observe(s4), document.addEventListener(`visibilitychange`, () => {
    Y = !document.hidden, ge();
  }, { signal: l2 }), d2.addEventListener(`webglcontextlost`, (e19) => {
    e19.preventDefault(), cancelAnimationFrame(Z), Z = 0, X = false, d2.style.opacity = `0`;
  }, { signal: l2 });
}
var e14, t7, n5, i4;
var init_shard_field_CNjId5JN = __esm({
  "_astro/shard-field.CNjId5JN.js"() {
    "use strict";
    e14 = [[-0.12, 0.64], [0, 0.56], [0.14, 0.46], [0.3, 0.4], [0.47, 0.43], [0.63, 0.53], [0.8, 0.66], [0.95, 0.82], [1.12, 1]];
    t7 = 256;
    n5 = 10;
    i4 = (e19) => [(e19 >> 16) / 255, (e19 >> 8 & 255) / 255, (e19 & 255) / 255];
  }
});

// _astro/step-scroll.DZHgGbJ-.js
var step_scroll_DZHgGbJ_exports = {};
__export(step_scroll_DZHgGbJ_exports, {
  mount: () => o3
});
function i5(e19, t11, n9) {
  if (e19 <= t11[0]) return n9[0];
  for (let r8 = 1; r8 < t11.length; r8++) if (e19 <= t11[r8]) {
    let i8 = (e19 - t11[r8 - 1]) / (t11[r8] - t11[r8 - 1] || 1);
    return n9[r8 - 1] + (n9[r8] - n9[r8 - 1]) * i8;
  }
  return n9[n9.length - 1];
}
function a3(i8) {
  let a6 = i8 === 0, o5 = i8 === 3;
  return { stops: a6 ? [r5, 1] : o5 ? [0, n6] : [0, n6, r5, 1], xs: a6 ? [0, e15] : o5 ? [660, 0] : [660, 0, 0, e15], ys: a6 ? [0, t8] : o5 ? [120, 0] : [120, 0, 0, t8], rs: a6 ? [0, -30] : o5 ? [30, 0] : [30, 0, 0, -30], fadeStops: a6 ? [r5, 1] : o5 ? [0, 0.02] : [0, 0.02, r5, 1], fades: a6 ? [1, 0] : o5 ? [0, 1] : [0, 1, 1, 0], numStops: a6 ? [r5, 1] : o5 ? [0, 0.16] : [0, 0.16, r5, 1], nums: a6 ? [1, 0] : o5 ? [0, 1] : [0, 1, 1, 0] };
}
function o3(e19, { reduced: t11 }) {
  let n9 = e19.querySelector(`.how-stage`), r8 = [...e19.querySelectorAll(`.slide`)], o5 = [...e19.querySelectorAll(`.active`)], s4 = r8.map((e20, t12) => a3(t12)), c2 = 0, l2 = () => {
    if (c2 = 0, getComputedStyle(n9).position !== `sticky`) return;
    let a6 = e19.getBoundingClientRect(), l3 = a6.height - n9.getBoundingClientRect().height;
    if (l3 <= 0) return;
    let u3 = Math.min(1, Math.max(0, -a6.top / l3));
    r8.forEach((e20, n10) => {
      let r9 = u3 * 4 - n10, a7 = s4[n10], c3 = i5(r9, a7.fadeStops, a7.fades);
      e20.style.opacity = c3, e20.style.transform = t11 ? `none` : `translate(${i5(r9, a7.stops, a7.xs)}px, ${i5(r9, a7.stops, a7.ys)}px) rotate(${i5(r9, a7.stops, a7.rs)}deg)`, o5[n10].style.opacity = i5(r9, a7.numStops, a7.nums);
    });
  }, u2 = () => {
    c2 ||= requestAnimationFrame(l2);
  };
  l2(), addEventListener(`scroll`, u2, { passive: true }), addEventListener(`resize`, u2);
}
var e15, t8, n6, r5;
var init_step_scroll_DZHgGbJ = __esm({
  "_astro/step-scroll.DZHgGbJ-.js"() {
    "use strict";
    e15 = -560;
    t8 = -110;
    n6 = 0.34;
    r5 = 0.84;
  }
});

// _astro/team-switch.GQIA43C1.js
var team_switch_GQIA43C1_exports = {};
__export(team_switch_GQIA43C1_exports, {
  mount: () => s3
});
function s3(r8, { reduced: s4 }) {
  let c2 = [...r8.querySelectorAll(`.name-row`)], l2 = r8.querySelector(`#about-team-track`), u2 = [...l2.children], d2 = Math.max(0, c2.findIndex((e19) => e19.classList.contains(`is-active`))), f2 = () => {
    let e19 = u2[0], t11 = parseFloat(getComputedStyle(l2).columnGap || `0`) || 0;
    return e19 ? e19.offsetWidth + t11 : 0;
  }, p2 = f2(), m2 = new a4(-d2 * p2, (e19) => {
    l2.style.transform = e19 ? `translateX(${e19}px)` : ``;
  }, { restDelta: 0.5, restSpeed: 2 }), h2 = c2.map((e19, t11) => new a4(t11 === d2 ? 1 : n7, (t12) => {
    e19.style.opacity = String(t12);
  })), g2 = c2.map((e19, t11) => {
    let n9 = e19.querySelector(`.marker`);
    return new a4(+(t11 === d2), (e20) => {
      n9.style.opacity = String(e20);
    });
  }), _2 = u2.map((n9, r9) => {
    let s5 = n9.querySelector(`.about-team-photo`), c3 = n9.querySelector(`.veil`);
    return new a4(+(r9 === d2), (n10) => {
      s5.style.width = `${o4(e16.width, t9.width, n10)}%`, s5.style.height = `${o4(e16.height, t9.height, n10)}%`, c3.style.opacity = String(Math.min(1, Math.max(0, n10 / i6)));
    });
  }), v2 = (e19) => {
    e19 !== d2 && (d2 = e19, c2.forEach((t11, r9) => {
      let i8 = r9 === e19;
      t11.classList.toggle(`is-active`, i8), t11.setAttribute(`aria-pressed`, String(i8)), h2[r9].set(i8 ? 1 : n7, s4), g2[r9].set(+!!i8, s4);
    }), u2.forEach((t11, n9) => {
      t11.classList.toggle(`is-active`, n9 === e19), _2[n9].set(+(n9 === e19), s4);
    }), m2.set(-e19 * p2, s4));
  };
  c2.forEach((e19, t11) => e19.addEventListener(`click`, () => v2(t11))), u2.forEach((e19, t11) => e19.addEventListener(`click`, () => v2(t11))), window.addEventListener(`resize`, () => {
    let e19 = f2();
    e19 !== p2 && (p2 = e19, m2.set(-d2 * p2, s4));
  });
}
var e16, t9, n7, r6, i6, a4, o4;
var init_team_switch_GQIA43C1 = __esm({
  "_astro/team-switch.GQIA43C1.js"() {
    "use strict";
    e16 = { width: 72.2, height: 65.7 };
    t9 = { width: 100, height: 100 };
    n7 = 0.45;
    r6 = { stiffness: 210, damping: 30, mass: 0.9 };
    i6 = 0.22;
    a4 = class {
      constructor(e19, t11, { restDelta: n9 = 5e-3, restSpeed: r8 = 0.01 } = {}) {
        this.x = e19, this.v = 0, this.target = e19, this.onUpdate = t11, this.restDelta = n9, this.restSpeed = r8, this.raf = 0, this.last = 0, t11(e19);
      }
      set(e19, t11 = false) {
        if (this.target = e19, t11) {
          this.x = e19, this.v = 0, cancelAnimationFrame(this.raf), this.raf = 0, this.onUpdate(e19);
          return;
        }
        this.raf ||= (this.last = 0, requestAnimationFrame((e20) => this.tick(e20)));
      }
      tick(e19) {
        let t11 = this.last ? Math.min((e19 - this.last) / 1e3, 0.064) : 1 / 60;
        this.last = e19;
        let { stiffness: n9, damping: i8, mass: a6 } = r6, o5 = Math.max(1, Math.round(t11 * 1e3)), s4 = t11 / o5;
        for (let e20 = 0; e20 < o5; e20++) {
          let e21 = (-n9 * (this.x - this.target) - i8 * this.v) / a6;
          this.v += e21 * s4, this.x += this.v * s4;
        }
        if (Math.abs(this.x - this.target) < this.restDelta && Math.abs(this.v) < this.restSpeed) {
          this.x = this.target, this.v = 0, this.raf = 0, this.onUpdate(this.x);
          return;
        }
        this.onUpdate(this.x), this.raf = requestAnimationFrame((e20) => this.tick(e20));
      }
    };
    o4 = (e19, t11, n9) => e19 + (t11 - e19) * n9;
  }
});

// _astro/ticker.7yWQo5Ue.js
var ticker_7yWQo5Ue_exports = {};
__export(ticker_7yWQo5Ue_exports, {
  mount: () => e17
});
function e17(e19, { reduced: t11 }) {
  let n9 = e19.querySelector(`.ticker-track`), r8 = [...n9.children], i8 = parseFloat(getComputedStyle(n9).rowGap) || 0;
  if (r8.forEach((e20) => {
    let t12 = e20.cloneNode(true);
    t12.setAttribute(`aria-hidden`, `true`), t12.querySelectorAll(`a, button`).forEach((e21) => e21.setAttribute(`tabindex`, `-1`)), n9.appendChild(t12);
  }), t11) return;
  let a6 = 0, o5 = () => {
    a6 = r8.reduce((e20, t12) => e20 + t12.offsetHeight, 0) + i8 * r8.length;
  };
  o5(), new ResizeObserver(o5).observe(n9);
  let s4 = 0, c2 = performance.now(), l2 = false, u2 = false, d2 = 0, f2 = true;
  e19.addEventListener(`pointerenter`, (e20) => {
    e20.pointerType === `mouse` && (l2 = true);
  }), e19.addEventListener(`pointerleave`, () => {
    l2 = false;
  }), e19.addEventListener(`pointerdown`, (t12) => {
    u2 = true, d2 = t12.clientY, e19.setPointerCapture(t12.pointerId);
  }), e19.addEventListener(`pointermove`, (e20) => {
    u2 && (s4 -= e20.clientY - d2, d2 = e20.clientY);
  });
  let p2 = () => {
    u2 = false;
  };
  e19.addEventListener(`pointerup`, p2), e19.addEventListener(`pointercancel`, p2), new IntersectionObserver(([e20]) => {
    f2 = e20.isIntersecting;
  }, { rootMargin: `200px` }).observe(e19);
  let m2 = (e20) => {
    let t12 = Math.min(0.1, (e20 - c2) / 1e3);
    c2 = e20, f2 && !u2 && (s4 += (l2 ? 20 : 30) * t12), a6 > 0 && (s4 = (s4 % a6 + a6) % a6), n9.style.transform = `translateY(${-s4}px)`, requestAnimationFrame(m2);
  };
  requestAnimationFrame(m2);
}
var init_ticker_7yWQo5Ue = __esm({
  "_astro/ticker.7yWQo5Ue.js"() {
    "use strict";
  }
});

// _astro/Base.astro_astro_type_script_index_0_lang.BjzSm5-P.js
var e18 = window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;
function t10(t11) {
  let n9 = () => {
    let n10 = /* @__PURE__ */ new Map();
    for (let e19 of document.querySelectorAll(`[data-fx]`)) for (let t12 of e19.dataset.fx.split(/\s+/)) t12 && (n10.has(t12) || n10.set(t12, []), n10.get(t12).push(e19));
    for (let [r8, i8] of n10) {
      let n11 = t11[r8];
      if (!n11) {
        console.warn(`[fx] no module for`, r8);
        continue;
      }
      n11().then((t12) => i8.forEach((n12) => {
        try {
          t12.mount(n12, { reduced: e18 });
        } catch (e19) {
          console.error(`[fx]`, r8, e19);
        }
      }));
    }
  };
  document.readyState === `loading` ? document.addEventListener(`DOMContentLoaded`, n9) : n9();
}
var n8 = (function() {
  let e19 = typeof document < `u` && document.createElement(`link`).relList;
  return e19 && e19.supports && e19.supports(`modulepreload`) ? `modulepreload` : `preload`;
})();
var r7 = function(e19) {
  return `/` + e19;
};
var i7 = {};
var a5 = function(e19, t11, a6) {
  let o5 = Promise.resolve();
  if (t11 && t11.length > 0) {
    let l3 = function(e21) {
      return Promise.all(e21.map((e22) => Promise.resolve(e22).then((e23) => ({ status: `fulfilled`, value: e23 }), (e23) => ({ status: `rejected`, reason: e23 }))));
    }, u3 = function(e21) {
      return import.meta.resolve ? import.meta.resolve(e21) : new URL(e21, import.meta.url).href;
    };
    var l2 = l3, u2 = u3;
    let e20 = document.getElementsByTagName(`link`), s5 = document.querySelector(`meta[property=csp-nonce]`), c2 = s5?.nonce || s5?.getAttribute(`nonce`);
    o5 = l3(t11.map((t12) => {
      if (t12 = r7(t12, a6), t12 = u3(t12), t12 in i7) return;
      i7[t12] = true;
      let o6 = t12.endsWith(`.css`);
      for (let n9 = e20.length - 1; n9 >= 0; n9--) {
        let r8 = e20[n9];
        if (r8.href === t12 && (!o6 || r8.rel === `stylesheet`)) return;
      }
      let s6 = document.createElement(`link`);
      if (s6.rel = o6 ? `stylesheet` : n8, o6 || (s6.as = `script`), s6.crossOrigin = ``, s6.href = t12, c2 && s6.setAttribute(`nonce`, c2), document.head.appendChild(s6), o6) return new Promise((e21, n9) => {
        s6.addEventListener(`load`, e21), s6.addEventListener(`error`, () => n9(Error(`Unable to preload CSS for ${t12}`)));
      });
    }).filter((e21) => e21 !== void 0));
  }
  function s4(e20) {
    let t12 = new Event(`vite:preloadError`, { cancelable: true });
    if (t12.payload = e20, window.dispatchEvent(t12), !t12.defaultPrevented) throw e20;
  }
  return o5.then((t12) => {
    for (let e20 of t12 || []) e20.status === `rejected` && s4(e20.reason);
    return e19().catch(s4);
  });
};
t10(Object.fromEntries(Object.entries(Object.assign({ "./fx/appear.js": () => a5(() => Promise.resolve().then(() => (init_appear_DDFv8bZV(), appear_DDFv8bZV_exports)), []), "./fx/billing-toggle.js": () => a5(() => Promise.resolve().then(() => (init_billing_toggle_Bz4Mihuo(), billing_toggle_Bz4Mihuo_exports)), []), "./fx/blog-accordion.js": () => a5(() => Promise.resolve().then(() => (init_blog_accordion_B_vhOEYM(), blog_accordion_B_vhOEYM_exports)), []), "./fx/blog-tabs.js": () => a5(() => Promise.resolve().then(() => (init_blog_tabs_CwLo7FeV(), blog_tabs_CwLo7FeV_exports)), []), "./fx/contact-form.js": () => a5(() => Promise.resolve().then(() => (init_contact_form_D3mQlCdf(), contact_form_D3mQlCdf_exports)), []), "./fx/faq.js": () => a5(() => Promise.resolve().then(() => (init_faq_BPCtIieG(), faq_BPCtIieG_exports)), []), "./fx/flow-lines.js": () => a5(() => Promise.resolve().then(() => (init_flow_lines_ByiPnCoc(), flow_lines_ByiPnCoc_exports)), []), "./fx/horizontal-track.js": () => a5(() => Promise.resolve().then(() => (init_horizontal_track_DneVlCUa(), horizontal_track_DneVlCUa_exports)), []), "./fx/logo-ticker.js": () => a5(() => Promise.resolve().then(() => (init_logo_ticker_BSB9RWU2(), logo_ticker_BSB9RWU2_exports)), []), "./fx/nav.js": () => a5(() => Promise.resolve().then(() => (init_nav_Bwr39cxT(), nav_Bwr39cxT_exports)), []), "./fx/particle-field.js": () => a5(() => Promise.resolve().then(() => (init_particle_field_BAvta5Gi(), particle_field_BAvta5Gi_exports)), []), "./fx/plan-tabs.js": () => a5(() => Promise.resolve().then(() => (init_plan_tabs_BvPCxqT2(), plan_tabs_BvPCxqT2_exports)), []), "./fx/rules-scroll.js": () => a5(() => Promise.resolve().then(() => (init_rules_scroll_BGZGFtxw(), rules_scroll_BGZGFtxw_exports)), []), "./fx/shard-field.js": () => a5(() => Promise.resolve().then(() => (init_shard_field_CNjId5JN(), shard_field_CNjId5JN_exports)), []), "./fx/step-scroll.js": () => a5(() => Promise.resolve().then(() => (init_step_scroll_DZHgGbJ(), step_scroll_DZHgGbJ_exports)), []), "./fx/team-switch.js": () => a5(() => Promise.resolve().then(() => (init_team_switch_GQIA43C1(), team_switch_GQIA43C1_exports)), []), "./fx/ticker.js": () => a5(() => Promise.resolve().then(() => (init_ticker_7yWQo5Ue(), ticker_7yWQo5Ue_exports)), []) })).map(([e19, t11]) => [e19.replace(`./fx/`, ``).replace(`.js`, ``), t11])));
// === AFTERSOLVES EXTRAS START ===
// Appended 2026-11-07.
// 1. Always reset scroll to top when a page is shown.
// 2. Website development quote questionnaire wizard (self-mounting on <form class="qw">).
// Loaded on every page because scripts.js is referenced site-wide (ES module, deferred).

/* --- 1. Always reset scroll to top when switching pages.
   Browsers normally restore the previous scroll position on back/forward (bfcache).
   Setting scrollRestoration to "manual" + scrolling to 0 on pageshow makes every
   page arrival — fresh load, reload, back, forward — start at the top. --- */
(function () {
  if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  function top() { window.scrollTo(0, 0); }
  window.addEventListener("pageshow", top);
  if (document.readyState !== "loading") top();
})();

/* --- 2. Website development quote questionnaire wizard.
   Runs only on pages that contain a <form class="qw">. The form also carries
   data-fx="contact-form", so the existing handler submits it (Formspree action or
   simulated success). This module only manages step navigation, validation, the
   progress bar and a live review summary; on submit success it returns to step 1. --- */
(function () {
  function $all(root, sel) {
    return Array.prototype.slice.call(root.querySelectorAll(sel));
  }

  function mountWizard(form) {
    var steps = $all(form, ".qw-step");
    if (!steps.length) return;
    var progressBar = form.querySelector(".qw-progress-fill");
    var progressLabel = form.querySelector(".qw-progress-label");
    var reviewList = form.querySelector(".qw-review");
    var errorBoxes = $all(form, ".qw-error");
    var current = 0;

    function errorBox() {
      // each step has its own .qw-error; return the one inside the active step
      return steps[current] ? steps[current].querySelector(".qw-error") : errorBoxes[0];
    }

    function show(i) {
      current = Math.max(0, Math.min(i, steps.length - 1));
      steps.forEach(function (s, idx) {
        s.classList.toggle("is-active", idx === current);
      });
      if (progressBar) {
        var pct = Math.round(((current + 1) / steps.length) * 100);
        progressBar.style.setProperty("--qw-progress", pct + "%");
      }
      if (progressLabel) {
        progressLabel.textContent = "Step " + (current + 1) + " of " + steps.length;
      }
      var eb = errorBox();
      if (eb) eb.textContent = "";
      renderReview();
      // focus the first focusable input in the new step (without scrolling)
      var firstInput = steps[current].querySelector("input, select, textarea");
      if (firstInput) {
        try { firstInput.focus({ preventScroll: true }); } catch (e) { /* older browsers */ }
      }
    }

    function validate(step) {
      var required = $all(step, "[required]");
      // for radio groups, only one radio in the group carries [required]; dedupe by name
      var seenRadio = {};
      for (var i = 0; i < required.length; i++) {
        var el = required[i];
        var empty;
        if (el.type === "radio") {
          if (seenRadio[el.name]) continue;
          seenRadio[el.name] = true;
          var checked = step.querySelectorAll('[name="' + el.name + '"]:checked');
          empty = !checked.length;
        } else if (el.type === "checkbox") {
          empty = !el.checked;
        } else {
          empty = !String(el.value || "").trim();
        }
        if (empty) {
          var eb = errorBox();
          if (eb) eb.textContent = "Please complete this step to continue.";
          try { el.focus({ preventScroll: true }); } catch (e) { /* older browsers */ }
          return false;
        }
      }
      return true;
    }

    function escapeHtml(s) {
      return String(s).replace(/[&<>"']/g, function (c) {
        return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
      });
    }

    function labelTextFor(name) {
      // prefer an explicit <label for="NAME">, then a .field-label in the same .field
      var explicit = form.querySelector('label[for="' + name + '"]');
      if (explicit) return explicit.textContent.trim();
      var input = form.querySelector('[name="' + name + '"]');
      if (input) {
        var field = input.closest(".field");
        if (field) {
          var fl = field.querySelector(".field-label");
          if (fl) return fl.textContent.trim();
        }
      }
      return name;
    }

    function valueFor(name) {
      var first = form.querySelector('[name="' + name + '"]');
      if (!first) return "";
      var type = (first.getAttribute("type") || "").toLowerCase();
      if (type === "radio") {
        var checked = form.querySelector('[name="' + name + '"]:checked');
        return checked ? (checked.getAttribute("data-label") || checked.value) : "";
      }
      if (type === "checkbox") {
        var boxes = form.querySelectorAll('[name="' + name + '"]:checked');
        if (!boxes.length) return "";
        return Array.prototype.map.call(boxes, function (b) {
          return b.getAttribute("data-label") || b.value;
        }).join(", ");
      }
      return String(first.value || "").trim();
    }

    function renderReview() {
      if (!reviewList) return;
      var rows = [];
      var seen = {};
      var inputs = form.querySelectorAll("input, select, textarea");
      Array.prototype.forEach.call(inputs, function (el) {
        var name = el.name;
        if (!name || seen[name]) return;
        var type = (el.getAttribute("type") || "").toLowerCase();
        if (type === "radio" || type === "checkbox") {
          if (!form.querySelector('[name="' + name + '"]:checked')) return;
        } else {
          if (!String(el.value || "").trim()) return;
        }
        seen[name] = true;
        var label = labelTextFor(name);
        var val = valueFor(name);
        if (!val) return;
        rows.push(
          '<div class="qw-review-row"><dt>' + escapeHtml(label) +
          '</dt><dd>' + escapeHtml(val) + '</dd></div>'
        );
      });
      reviewList.innerHTML = rows.length
        ? rows.join("")
        : '<p class="qw-review-empty">Fill in the earlier steps to see your summary here.</p>';
    }

    // wire Next/Back
    $all(form, ".qw-next").forEach(function (btn) {
      btn.addEventListener("click", function () {
        if (!validate(steps[current])) return;
        if (current < steps.length - 1) show(current + 1);
      });
    });
    $all(form, ".qw-back").forEach(function (btn) {
      btn.addEventListener("click", function () {
        if (current > 0) show(current - 1);
      });
    });

    // keyboard: Enter on a radio/checkbox option advances (when the step is valid)
    form.addEventListener("keydown", function (e) {
      if (e.key !== "Enter") return;
      var t = e.target;
      if (!t) return;
      var type = (t.type || "").toLowerCase();
      if (type === "radio" || type === "checkbox") {
        e.preventDefault();
        if (validate(steps[current]) && current < steps.length - 1) show(current + 1);
      }
    });

    // the existing contact-form handler calls form.reset() on success; listen for that
    // and reveal the success panel + return the wizard to step 1.
    form.addEventListener("reset", function () {
      form.classList.add("is-sent");
      show(0);
      try { form.scrollIntoView({ block: "start", behavior: "smooth" }); } catch (e) { /* older browsers */ }
    });

    show(0);
  }

  function init() {
    var forms = document.querySelectorAll("form.qw");
    Array.prototype.forEach.call(forms, mountWizard);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

/* --- 3. Clear the page-load blur-in filter from <main> after it plays.
   The asw-blur-in animation uses fill-mode "both", which leaves <main> with
   filter: blur(0px) permanently after it finishes. A lingering filter on a
   major wrapper establishes a containing/stacking context that can break
   descendant backdrop-filters and position:fixed elements. Once the animation
   has played, drop it so <main> reverts to filter: none. A setTimeout backs up
   the animationend listener in case the module loads after the animation ended. --- */
(function () {
  function clearMain(m) {
    m.style.animation = "none";
  }
  function setup() {
    document.querySelectorAll("main").forEach(function (m) {
      var done = false;
      m.addEventListener("animationend", function (e) {
        if (done) return;
        if (e.animationName === "asw-blur-in") { done = true; clearMain(m); }
      });
      // fallback: if the animation already finished before the listener attached
      setTimeout(function () { if (!done) { done = true; clearMain(m); } }, 900);
    });
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setup);
  } else {
    setup();
  }
})();
// === AFTERSOLVES EXTRAS END ===

// === AFTERSOLVES v3 REVEAL OBSERVER START ===
(function () {
  "use strict";
  // Clear the safety-net timer armed by the inline head script — scripts.js loaded fine.
  try { if (window.__revealFallback) clearTimeout(window.__revealFallback); } catch (e) {}

  var SELECTORS = [
    ".page-head", ".section-head", ".about-story",
    ".feature-card", ".tech-card", ".work-card", ".team-profile",
    ".rule-card", ".offer-card", ".tier-card", ".stat-tile",
    ".faq-item", ".blog-card", ".whatwedo-card",
    ".leadership-card", ".project-card",
    ".bullet-list li", ".cap-list li"
  ];

  var reduced = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function reveal(el) { el.classList.add("is-in"); }

  function init() {
    var nodes = document.querySelectorAll(SELECTORS.join(","));
    if (!nodes.length) return;

    // Reduced motion: show everything immediately.
    if (reduced || !("IntersectionObserver" in window)) {
      nodes.forEach(reveal);
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      for (var i = 0; i < entries.length; i++) {
        var e = entries[i];
        if (e.isIntersecting) {
          reveal(e.target);
          io.unobserve(e.target);
        }
      }
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });

    nodes.forEach(function (el) {
      // Skip elements the existing data-fx='appear' module already owns.
      if (el.dataset && el.dataset.fx && el.dataset.fx.indexOf("appear") !== -1) {
        reveal(el); // make sure it's visible regardless
        return;
      }
      io.observe(el);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
// === AFTERSOLVES v3 REVEAL OBSERVER END ===

// === AFTERSOLVES new-aftersolves-v2 AUTO-REFRESH START ===
// Appended 2026-11-07. Implements "website auto refresh update, no saving any
// cache". Loaded on every page because scripts.js is referenced site-wide.
//
// Works together with the no-cache <meta http-equiv> tags (Cache-Control /
// Pragma / Expires) and the ?v=YYYYMMDD asset cache-busting query strings
// added to every page's style.css / pages.css / scripts.js references.
//
// Behaviour:
//   - visibilitychange: when the tab is hidden then shown again after at least
//     60 seconds, the page reloads from the server so a returning visitor picks
//     up any published update. The 60s threshold avoids reloading on quick tab
//     flicks (which would feel janky).
//   - pageshow (persisted === true): when the page is restored from the
//     back/forward cache it is a frozen snapshot, so it is reloaded for a fresh
//     copy. The reload is deferred out of the event handler with setTimeout for
//     cross-browser reliability.
// location.reload() re-fetches the document; the no-cache directives force the
// browser to revalidate instead of serving a stored copy.
(function () {
  var HIDDEN_THRESHOLD_MS = 60 * 1000;
  var hiddenSince = null;

  function reloadFromServer() {
    try { window.location.reload(); } catch (e) { /* no-op */ }
  }

  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "hidden") {
      hiddenSince = Date.now();
    } else if (hiddenSince !== null) {
      if ((Date.now() - hiddenSince) >= HIDDEN_THRESHOLD_MS) {
        reloadFromServer();
      }
      hiddenSince = null;
    }
  });

  window.addEventListener("pageshow", function (event) {
    if (event.persisted) {
      setTimeout(reloadFromServer, 0);
    }
  });

  if (document.visibilityState === "hidden") {
    hiddenSince = Date.now();
  }
})();
// === AFTERSOLVES new-aftersolves-v2 AUTO-REFRESH END ===

// === AFTERSOLVES new-aftersolves-v2.1 CATEGORY-CONDITIONAL START ===
// Appended 2026-11-07. On the plan-specific quote forms, each business-category
// <select> carries data-category-other="<id-of-the-please-specify-field-wrapper>".
// When the user picks "Other ..." the wrapper is shown (and the text input made
// required); for any other option the wrapper is hidden and the requirement is
// dropped so the form still submits cleanly. Self-mounting on DOMContentLoaded.
(function () {
  function init() {
    var selects = document.querySelectorAll("select[data-category-other]");
    selects.forEach(function (sel) {
      var wrapperId = sel.getAttribute("data-category-other");
      var wrapper = wrapperId ? document.getElementById(wrapperId) : null;
      if (!wrapper) return;
      var otherInput = wrapper.querySelector("input, textarea, select");

      function sync() {
        // Show the "please specify" field only for options whose value or text
        // starts with "Other" (covers "Other appointment businesses" and
        // "Other business type" on the booking / website forms).
        var isOther = sel.value && sel.value.toLowerCase().indexOf("other") === 0;
        if (isOther) {
          wrapper.hidden = false;
          if (otherInput) otherInput.required = true;
        } else {
          wrapper.hidden = true;
          if (otherInput) {
            otherInput.required = false;
            otherInput.value = "";
          }
        }
      }

      sel.addEventListener("change", sync);
      sync();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
// === AFTERSOLVES new-aftersolves-v2.1 CATEGORY-CONDITIONAL END ===


// === AFTERSOLVES new-aftersolves-v2.3 SUCCESS-TIMER START ===
// Appended 2026-11-07. On the per-form success pages, a .success-timer element
// carries data-redirect="/services" and data-seconds="8". This module counts
// down once per second, updates the .success-countdown label, and redirects
// to the target when it reaches zero. The visitor can also click the Home /
// Services buttons (manual links), so the timer is a convenience, not a
// trap. Self-mounting on DOMContentLoaded.
(function () {
  function init() {
    var timers = document.querySelectorAll(".success-timer[data-redirect]");
    timers.forEach(function (timer) {
      var target = timer.getAttribute("data-redirect") || "/services";
      var seconds = parseInt(timer.getAttribute("data-seconds"), 10);
      if (!(seconds > 0)) seconds = 8;
      var label = timer.querySelector(".success-countdown");
      var remaining = seconds;
      if (label) label.textContent = String(remaining);
      var iv = setInterval(function () {
        remaining -= 1;
        if (label) label.textContent = String(Math.max(0, remaining));
        if (remaining <= 0) {
          clearInterval(iv);
          window.location.href = target;
        }
      }, 1000);
      // Pause the countdown if the tab is hidden so we don't fire a redirect
      // the visitor never sees; resume (and finish if due) on return.
      function onVis() {
        if (document.visibilityState === "visible" && remaining <= 0) {
          window.location.href = target;
        }
      }
      document.addEventListener("visibilitychange", onVis);
    });
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
// === AFTERSOLVES new-aftersolves-v2.3 SUCCESS-TIMER END ===


// === AFTERSOLVES new-aftersolves-v2.3 NEWSLETTER-FORM START ===
// Appended 2026-11-07. The footer newsletter form carries
// data-fx="newsletter-form" and a single email field. On submit we POST
// { email, newsletter: true, source } as JSON to the Aftersolves email worker
// (the worker's newsletter action sends a confirmation email and registers
// the contact). Inline success / error feedback is shown next to the input;
// no page redirect. Self-mounting on DOMContentLoaded.
(function () {
  var WORKER = "https://apimail.aftersolves.com";
  function setState(form, state, msg) {
    form.dataset.state = state;
    var note = form.querySelector(".newsletter-note");
    if (note) {
      note.textContent = msg || "";
      note.dataset.state = state;
    }
    var btn = form.querySelector("button[type=submit]");
    if (btn) btn.dataset.state = state;
  }
  function init() {
    var forms = document.querySelectorAll('form[data-fx~="newsletter-form"]');
    forms.forEach(function (form) {
      var action = form.getAttribute("action") || WORKER;
      form.addEventListener("submit", async function (e) {
        e.preventDefault();
        if (form.dataset.state === "sending") return;
        var email = (form.querySelector('input[type="email"], input[name="email"]') || {}).value;
        if (!email) return;
        setState(form, "sending");
        try {
          var res = await fetch(action, {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify({ email: email.trim(), newsletter: true, source: location.pathname })
          });
          if (!res.ok) throw Error("Worker answered " + res.status);
          var data = await res.json().catch(function () { return {}; });
          if (data && data.success === false) throw Error(data.error || "Worker reported failure");
          setState(form, "success", "Thanks — check your inbox to confirm.");
          form.reset();
        } catch (err) {
          console.warn("[newsletter-form]", err);
          setState(form, "error", "That didn't send — try again.");
        }
        setTimeout(function () { setState(form, "idle", ""); }, 5000);
      });
    });
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
// === AFTERSOLVES new-aftersolves-v2.3 NEWSLETTER-FORM END ===
