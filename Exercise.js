import { r as react } from "./export.js";
var propTypes = { exports: {} };
var ReactPropTypesSecret$1 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;
var ReactPropTypesSecret = ReactPropTypesSecret_1;
function emptyFunction() {
}
function emptyFunctionWithReset() {
}
emptyFunctionWithReset.resetWarningCache = emptyFunction;
var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      return;
    }
    var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
    err.name = "Invariant Violation";
    throw err;
  }
  shim.isRequired = shim;
  function getShim() {
    return shim;
  }
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,
    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,
    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};
{
  propTypes.exports = factoryWithThrowingShims();
}
var PropTypes = propTypes.exports;
function e() {
  return (e = Object.assign || function(t) {
    for (var e2 = 1; e2 < arguments.length; e2++) {
      var n2 = arguments[e2];
      for (var r2 in n2)
        Object.prototype.hasOwnProperty.call(n2, r2) && (t[r2] = n2[r2]);
    }
    return t;
  }).apply(this, arguments);
}
const n$1 = ["children", "options"], r = ["allowFullScreen", "allowTransparency", "autoComplete", "autoFocus", "autoPlay", "cellPadding", "cellSpacing", "charSet", "className", "classId", "colSpan", "contentEditable", "contextMenu", "crossOrigin", "encType", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "frameBorder", "hrefLang", "inputMode", "keyParams", "keyType", "marginHeight", "marginWidth", "maxLength", "mediaGroup", "minLength", "noValidate", "radioGroup", "readOnly", "rowSpan", "spellCheck", "srcDoc", "srcLang", "srcSet", "tabIndex", "useMap"].reduce((t, e2) => (t[e2.toLowerCase()] = e2, t), { for: "htmlFor" }), o = { amp: "&", apos: "'", gt: ">", lt: "<", nbsp: "\xA0", quot: "\u201C" }, c = ["style", "script"], a = /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi, u = /mailto:/i, i = /\n{2,}$/, l$1 = /^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/, s = /^ *> ?/gm, _ = /^ {2,}\n/, f$1 = /^(?:( *[-*_]) *){3,}(?:\n *)+\n/, d = /^\s*(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n *)+\n?/, p$1 = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/, g = /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/, m$1 = /^(?:\n *)*\n/, y = /\r\n?/g, h = /^\[\^([^\]]+)](:.*)\n/, k$1 = /^\[\^([^\]]+)]/, x = /\f/g, b = /^\s*?\[(x|\s)\]/, v = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/, S = /^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/, $ = /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i, w = /&([a-z]+);/g, z = /^<!--[\s\S]*?(?:-->)/, E = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/, A = /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i, R = /^\{.*\}$/, I = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/, M = /^<([^ >]+@[^ >]+)>/, O = /^<([^ >]+:\/[^ >]+)>/, B = / *\n+$/, L = /(?:^|\n)( *)$/, T = /-([a-z])?/gi, j = /^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/, C = /^\[([^\]]*)\]:\s*(\S+)\s*("([^"]*)")?/, D = /^!\[([^\]]*)\] ?\[([^\]]*)\]/, N = /^\[([^\]]*)\] ?\[([^\]]*)\]/, Z = /(\[|\])/g, F = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/, P = /\t/g, G = /^ *\| */, H = /(^ *\||\| *$)/g, q$1 = / *$/, U = /^ *:-+: *$/, V = /^ *:-+ *$/, W = /^ *-+: *$/, Q = /^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/, X = /^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/, J = /^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/, K = /^\\([^0-9A-Za-z\s])/, Y = /^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i, tt = /^\n+/, et = /^([ \t]*)/, nt = /\\([^0-9A-Z\s])/gi, rt = new RegExp("^( *)((?:[*+-]|\\d+\\.)) +"), ot = new RegExp("^( *)((?:[*+-]|\\d+\\.)) +[^\\n]*(?:\\n(?!\\1(?:[*+-]|\\d+\\.) )[^\\n]*)*(\\n|$)", "gm"), ct = new RegExp("^( *)((?:[*+-]|\\d+\\.)) [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1(?:[*+-]|\\d+\\.) (?!(?:[*+-]|\\d+\\.) ))\\n*|\\s*\\n*$)"), at = "(?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*", ut = new RegExp("^\\[(" + at + `)\\]\\(\\s*<?((?:[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['"]([\\s\\S]*?)['"])?\\s*\\)`), it = new RegExp("^!\\[(" + at + `)\\]\\(\\s*<?((?:[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['"]([\\s\\S]*?)['"])?\\s*\\)`), lt = [l$1, p$1, d, v, S, z, ot, ct, j], st = [...lt, /^[^\n]+(?:  \n|\n{2,})/, $, A];
function _t(t) {
  return t.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, "a").replace(/[çÇ]/g, "c").replace(/[ðÐ]/g, "d").replace(/[ÈÉÊËéèêë]/g, "e").replace(/[ÏïÎîÍíÌì]/g, "i").replace(/[Ññ]/g, "n").replace(/[øØœŒÕõÔôÓóÒò]/g, "o").replace(/[ÜüÛûÚúÙù]/g, "u").replace(/[ŸÿÝý]/g, "y").replace(/[^a-z0-9- ]/gi, "").replace(/ /gi, "-").toLowerCase();
}
function ft(t) {
  return W.test(t) ? "right" : U.test(t) ? "center" : V.test(t) ? "left" : null;
}
function dt(t, e2, n2) {
  const r2 = n2.t;
  n2.t = true;
  const o2 = e2(t.trim(), n2);
  n2.t = r2;
  let c2 = [[]];
  return o2.forEach(function(t2, e3) {
    t2.type === "tableSeparator" ? e3 !== 0 && e3 !== o2.length - 1 && c2.push([]) : (t2.type !== "text" || o2[e3 + 1] != null && o2[e3 + 1].type !== "tableSeparator" || (t2.content = t2.content.replace(q$1, "")), c2[c2.length - 1].push(t2));
  }), c2;
}
function pt(t, e2, n2) {
  n2.o = true;
  const r2 = dt(t[1], e2, n2), o2 = t[2].replace(H, "").split("|").map(ft), c2 = function(t2, e3, n3) {
    return t2.trim().split("\n").map(function(t3) {
      return dt(t3, e3, n3);
    });
  }(t[3], e2, n2);
  return n2.o = false, { align: o2, cells: c2, header: r2, type: "table" };
}
function gt(t, e2) {
  return t.align[e2] == null ? {} : { textAlign: t.align[e2] };
}
function mt(t) {
  return function(e2, n2) {
    return n2.o ? t.exec(e2) : null;
  };
}
function yt(t) {
  return function(e2, n2) {
    return n2.o || n2.u ? t.exec(e2) : null;
  };
}
function ht(t) {
  return function(e2, n2) {
    return n2.o || n2.u ? null : t.exec(e2);
  };
}
function kt(t) {
  return function(e2) {
    return t.exec(e2);
  };
}
function xt(t, e2, n2) {
  if (e2.o || e2.u)
    return null;
  if (n2 && !n2.endsWith("\n"))
    return null;
  let r2 = "";
  t.split("\n").every((t2) => !lt.some((e3) => e3.test(t2)) && (r2 += t2 + "\n", t2.trim()));
  const o2 = r2.trimEnd();
  return o2 == "" ? null : [r2, o2];
}
function bt(t) {
  try {
    if (decodeURIComponent(t).replace(/[^A-Za-z0-9/:]/g, "").match(/^\s*(javascript|vbscript|data):/i))
      return null;
  } catch (t2) {
    return null;
  }
  return t;
}
function vt(t) {
  return t.replace(nt, "$1");
}
function St(t, e2, n2) {
  const r2 = n2.o || false, o2 = n2.u || false;
  n2.o = true, n2.u = true;
  const c2 = t(e2, n2);
  return n2.o = r2, n2.u = o2, c2;
}
function $t(t, e2, n2) {
  const r2 = n2.o || false, o2 = n2.u || false;
  n2.o = false, n2.u = true;
  const c2 = t(e2, n2);
  return n2.o = r2, n2.u = o2, c2;
}
function wt(t, e2, n2) {
  return n2.o = false, t(e2 + "\n\n", n2);
}
const zt = (t, e2, n2) => ({ content: St(e2, t[1], n2) });
function Et() {
  return {};
}
function At() {
  return null;
}
function Rt(...t) {
  return t.filter(Boolean).join(" ");
}
function It(t, e2, n2) {
  let r2 = t;
  const o2 = e2.split(".");
  for (; o2.length && (r2 = r2[o2[0]], r2 !== void 0); )
    o2.shift();
  return r2 || n2;
}
var Mt;
function Ot(n2, H2 = {}) {
  H2.overrides = H2.overrides || {}, H2.slugify = H2.slugify || _t, H2.namedCodesToUnicode = H2.namedCodesToUnicode ? e({}, o, H2.namedCodesToUnicode) : o;
  const q2 = H2.createElement || react.exports.createElement;
  function U2(t, n3, ...r2) {
    const o2 = It(H2.overrides, `${t}.props`, {});
    return q2(function(t2, e2) {
      const n4 = It(e2, t2);
      return n4 ? typeof n4 == "function" || typeof n4 == "object" && "render" in n4 ? n4 : It(e2, `${t2}.component`, t2) : t2;
    }(t, H2.overrides), e({}, n3, o2, { className: Rt(n3 == null ? void 0 : n3.className, o2.className) || void 0 }), ...r2);
  }
  function V2(e2) {
    let n3 = false;
    H2.forceInline ? n3 = true : H2.forceBlock || (n3 = F.test(e2) === false);
    const r2 = dt2(ft2(n3 ? e2 : `${e2.trimEnd().replace(tt, "")}

`, { o: n3 }));
    for (; typeof r2[r2.length - 1] == "string" && !r2[r2.length - 1].trim(); )
      r2.pop();
    if (H2.wrapper === null)
      return r2;
    const o2 = H2.wrapper || (n3 ? "span" : "div");
    let c2;
    if (r2.length > 1 || H2.forceWrapper)
      c2 = r2;
    else {
      if (r2.length === 1)
        return c2 = r2[0], typeof c2 == "string" ? U2("span", { key: "outer" }, c2) : c2;
      c2 = null;
    }
    return react.exports.createElement(o2, { key: "outer" }, c2);
  }
  function W2(e2) {
    const n3 = e2.match(a);
    return n3 ? n3.reduce(function(e3, n4, o2) {
      const c2 = n4.indexOf("=");
      if (c2 !== -1) {
        const a2 = function(t) {
          return t.indexOf("-") !== -1 && t.match(E) === null && (t = t.replace(T, function(t2, e4) {
            return e4.toUpperCase();
          })), t;
        }(n4.slice(0, c2)).trim(), u2 = function(t) {
          const e4 = t[0];
          return (e4 === '"' || e4 === "'") && t.length >= 2 && t[t.length - 1] === e4 ? t.slice(1, -1) : t;
        }(n4.slice(c2 + 1).trim()), i2 = r[a2] || a2, l2 = e3[i2] = function(t, e4) {
          return t === "style" ? e4.split(/;\s?/).reduce(function(t2, e5) {
            const n5 = e5.slice(0, e5.indexOf(":"));
            return t2[n5.replace(/(-[a-z])/g, (t3) => t3[1].toUpperCase())] = e5.slice(n5.length + 1).trim(), t2;
          }, {}) : t === "href" ? bt(e4) : (e4.match(R) && (e4 = e4.slice(1, e4.length - 1)), e4 === "true" || e4 !== "false" && e4);
        }(a2, u2);
        typeof l2 == "string" && ($.test(l2) || A.test(l2)) && (e3[i2] = react.exports.cloneElement(V2(l2.trim()), { key: o2 }));
      } else
        n4 !== "style" && (e3[r[n4] || n4] = true);
      return e3;
    }, {}) : void 0;
  }
  const nt2 = [], at2 = {}, lt2 = { blockQuote: { i: ht(l$1), l: Mt.HIGH, _: (t, e2, n3) => ({ content: e2(t[0].replace(s, ""), n3) }), p: (t, e2, n3) => U2("blockquote", { key: n3.g }, e2(t.content, n3)) }, breakLine: { i: kt(_), l: Mt.HIGH, _: Et, p: (t, e2, n3) => U2("br", { key: n3.g }) }, breakThematic: { i: ht(f$1), l: Mt.HIGH, _: Et, p: (t, e2, n3) => U2("hr", { key: n3.g }) }, codeBlock: { i: ht(p$1), l: Mt.MAX, _: (t) => ({ content: t[0].replace(/^ {4}/gm, "").replace(/\n+$/, ""), lang: void 0 }), p: (t, e2, n3) => U2("pre", { key: n3.g }, U2("code", { className: t.lang ? `lang-${t.lang}` : "" }, t.content)) }, codeFenced: { i: ht(d), l: Mt.MAX, _: (t) => ({ content: t[3], lang: t[2] || void 0, type: "codeBlock" }) }, codeInline: { i: yt(g), l: Mt.LOW, _: (t) => ({ content: t[2] }), p: (t, e2, n3) => U2("code", { key: n3.g }, t.content) }, footnote: { i: ht(h), l: Mt.MAX, _: (t) => (nt2.push({ footnote: t[2], identifier: t[1] }), {}), p: At }, footnoteReference: { i: mt(k$1), l: Mt.HIGH, _: (t) => ({ content: t[1], target: `#${H2.slugify(t[1])}` }), p: (t, e2, n3) => U2("a", { key: n3.g, href: bt(t.target) }, U2("sup", { key: n3.g }, t.content)) }, gfmTask: { i: mt(b), l: Mt.HIGH, _: (t) => ({ completed: t[1].toLowerCase() === "x" }), p: (t, e2, n3) => U2("input", { checked: t.completed, key: n3.g, readOnly: true, type: "checkbox" }) }, heading: { i: ht(v), l: Mt.HIGH, _: (t, e2, n3) => ({ content: St(e2, t[2], n3), id: H2.slugify(t[2]), level: t[1].length }), p: (t, e2, n3) => (t.tag = `h${t.level}`, U2(t.tag, { id: t.id, key: n3.g }, e2(t.content, n3))) }, headingSetext: { i: ht(S), l: Mt.MAX, _: (t, e2, n3) => ({ content: St(e2, t[1], n3), level: t[2] === "=" ? 1 : 2, type: "heading" }) }, htmlComment: { i: kt(z), l: Mt.HIGH, _: () => ({}), p: At }, image: { i: yt(it), l: Mt.HIGH, _: (t) => ({ alt: t[1], target: vt(t[2]), title: t[3] }), p: (t, e2, n3) => U2("img", { key: n3.g, alt: t.alt || void 0, title: t.title || void 0, src: bt(t.target) }) }, link: { i: mt(ut), l: Mt.LOW, _: (t, e2, n3) => ({ content: $t(e2, t[1], n3), target: vt(t[2]), title: t[3] }), p: (t, e2, n3) => U2("a", { key: n3.g, href: bt(t.target), title: t.title }, e2(t.content, n3)) }, linkAngleBraceStyleDetector: { i: mt(O), l: Mt.MAX, _: (t) => ({ content: [{ content: t[1], type: "text" }], target: t[1], type: "link" }) }, linkBareUrlDetector: { i: (t, e2) => e2.m ? null : mt(I)(t, e2), l: Mt.MAX, _: (t) => ({ content: [{ content: t[1], type: "text" }], target: t[1], title: void 0, type: "link" }) }, linkMailtoDetector: { i: mt(M), l: Mt.MAX, _(t) {
    let e2 = t[1], n3 = t[1];
    return u.test(n3) || (n3 = "mailto:" + n3), { content: [{ content: e2.replace("mailto:", ""), type: "text" }], target: n3, type: "link" };
  } }, list: { i(t, e2, n3) {
    const r2 = L.exec(n3);
    return !r2 || !e2.h && e2.o ? null : ct.exec(t = r2[1] + t);
  }, l: Mt.HIGH, _(t, e2, n3) {
    const r2 = t[2], o2 = r2.length > 1, c2 = o2 ? +r2 : void 0, a2 = t[0].replace(i, "\n").match(ot);
    let u2 = false;
    return { items: a2.map(function(t2, r3) {
      const o3 = rt.exec(t2)[0].length, c3 = new RegExp("^ {1," + o3 + "}", "gm"), i2 = t2.replace(c3, "").replace(rt, ""), l2 = r3 === a2.length - 1, s2 = i2.indexOf("\n\n") !== -1 || l2 && u2;
      u2 = s2;
      const _2 = n3.o, f2 = n3.h;
      let d2;
      n3.h = true, s2 ? (n3.o = false, d2 = i2.replace(B, "\n\n")) : (n3.o = true, d2 = i2.replace(B, ""));
      const p2 = e2(d2, n3);
      return n3.o = _2, n3.h = f2, p2;
    }), ordered: o2, start: c2 };
  }, p: (t, e2, n3) => U2(t.ordered ? "ol" : "ul", { key: n3.g, start: t.start }, t.items.map(function(t2, r2) {
    return U2("li", { key: r2 }, e2(t2, n3));
  })) }, newlineCoalescer: { i: ht(m$1), l: Mt.LOW, _: Et, p: () => "\n" }, paragraph: { i: xt, l: Mt.LOW, _: zt, p: (t, e2, n3) => U2("p", { key: n3.g }, e2(t.content, n3)) }, ref: { i: mt(C), l: Mt.MAX, _: (t) => (at2[t[1]] = { target: t[2], title: t[4] }, {}), p: At }, refImage: { i: yt(D), l: Mt.MAX, _: (t) => ({ alt: t[1] || void 0, ref: t[2] }), p: (t, e2, n3) => U2("img", { key: n3.g, alt: t.alt, src: bt(at2[t.ref].target), title: at2[t.ref].title }) }, refLink: { i: mt(N), l: Mt.MAX, _: (t, e2, n3) => ({ content: e2(t[1], n3), fallbackContent: e2(t[0].replace(Z, "\\$1"), n3), ref: t[2] }), p: (t, e2, n3) => at2[t.ref] ? U2("a", { key: n3.g, href: bt(at2[t.ref].target), title: at2[t.ref].title }, e2(t.content, n3)) : U2("span", { key: n3.g }, e2(t.fallbackContent, n3)) }, table: { i: ht(j), l: Mt.HIGH, _: pt, p: (t, e2, n3) => U2("table", { key: n3.g }, U2("thead", null, U2("tr", null, t.header.map(function(r2, o2) {
    return U2("th", { key: o2, style: gt(t, o2) }, e2(r2, n3));
  }))), U2("tbody", null, t.cells.map(function(r2, o2) {
    return U2("tr", { key: o2 }, r2.map(function(r3, o3) {
      return U2("td", { key: o3, style: gt(t, o3) }, e2(r3, n3));
    }));
  }))) }, tableSeparator: { i: function(t, e2) {
    return e2.t ? G.exec(t) : null;
  }, l: Mt.HIGH, _: function() {
    return { type: "tableSeparator" };
  }, p: () => " | " }, text: { i: kt(Y), l: Mt.MIN, _: (t) => ({ content: t[0].replace(w, (t2, e2) => H2.namedCodesToUnicode[e2] ? H2.namedCodesToUnicode[e2] : t2) }), p: (t) => t.content }, textBolded: { i: yt(Q), l: Mt.MED, _: (t, e2, n3) => ({ content: e2(t[2], n3) }), p: (t, e2, n3) => U2("strong", { key: n3.g }, e2(t.content, n3)) }, textEmphasized: { i: yt(X), l: Mt.LOW, _: (t, e2, n3) => ({ content: e2(t[2], n3) }), p: (t, e2, n3) => U2("em", { key: n3.g }, e2(t.content, n3)) }, textEscaped: { i: yt(K), l: Mt.HIGH, _: (t) => ({ content: t[1], type: "text" }) }, textStrikethroughed: { i: yt(J), l: Mt.LOW, _: zt, p: (t, e2, n3) => U2("del", { key: n3.g }, e2(t.content, n3)) } };
  H2.disableParsingRawHTML !== true && (lt2.htmlBlock = { i: kt($), l: Mt.HIGH, _(t, e2, n3) {
    const [, r2] = t[3].match(et), o2 = new RegExp(`^${r2}`, "gm"), a2 = t[3].replace(o2, ""), u2 = (i2 = a2, st.some((t2) => t2.test(i2)) ? wt : St);
    var i2;
    const l2 = t[1].toLowerCase(), s2 = c.indexOf(l2) !== -1;
    n3.m = n3.m || l2 === "a";
    const _2 = s2 ? t[3] : u2(e2, a2, n3);
    return n3.m = false, { attrs: W2(t[2]), content: _2, noInnerParse: s2, tag: s2 ? l2 : t[1] };
  }, p: (t, n3, r2) => U2(t.tag, e({ key: r2.g }, t.attrs), t.noInnerParse ? t.content : n3(t.content, r2)) }, lt2.htmlSelfClosing = { i: kt(A), l: Mt.HIGH, _: (t) => ({ attrs: W2(t[2] || ""), tag: t[1] }), p: (t, n3, r2) => U2(t.tag, e({}, t.attrs, { key: r2.g })) });
  const ft2 = function(t) {
    let e2 = Object.keys(t);
    function n3(r2, o2) {
      let c2 = [], a2 = "";
      for (; r2; ) {
        let u2 = 0;
        for (; u2 < e2.length; ) {
          const i2 = e2[u2], l2 = t[i2], s2 = l2.i(r2, o2, a2);
          if (s2) {
            const t2 = s2[0];
            r2 = r2.substring(t2.length);
            const e3 = l2._(s2, n3, o2);
            e3.type == null && (e3.type = i2), c2.push(e3), a2 = t2;
            break;
          }
          u2++;
        }
      }
      return c2;
    }
    return e2.sort(function(e3, n4) {
      let r2 = t[e3].l, o2 = t[n4].l;
      return r2 !== o2 ? r2 - o2 : e3 < n4 ? -1 : 1;
    }), function(t2, e3) {
      return n3(function(t3) {
        return t3.replace(y, "\n").replace(x, "").replace(P, "    ");
      }(t2), e3);
    };
  }(lt2), dt2 = (Ot2 = function(t) {
    return function(e2, n3, r2) {
      return t[e2.type].p(e2, n3, r2);
    };
  }(lt2), function t(e2, n3 = {}) {
    if (Array.isArray(e2)) {
      const r2 = n3.g, o2 = [];
      let c2 = false;
      for (let r3 = 0; r3 < e2.length; r3++) {
        n3.g = r3;
        const a2 = t(e2[r3], n3), u2 = typeof a2 == "string";
        u2 && c2 ? o2[o2.length - 1] += a2 : a2 !== null && o2.push(a2), c2 = u2;
      }
      return n3.g = r2, o2;
    }
    return Ot2(e2, t, n3);
  });
  var Ot2;
  const Bt = V2(n2);
  return nt2.length ? U2("div", null, Bt, U2("footer", { key: "footer" }, nt2.map(function(t) {
    return U2("div", { id: H2.slugify(t.identifier), key: t.identifier }, t.identifier, dt2(ft2(t.footnote, { o: true })));
  }))) : Bt;
}
!function(t) {
  t[t.MAX = 0] = "MAX", t[t.HIGH = 1] = "HIGH", t[t.MED = 2] = "MED", t[t.LOW = 3] = "LOW", t[t.MIN = 4] = "MIN";
}(Mt || (Mt = {}));
var Markdown = (e2) => {
  let { children: r2, options: o2 } = e2, c2 = function(t, e3) {
    if (t == null)
      return {};
    var n2, r3, o3 = {}, c3 = Object.keys(t);
    for (r3 = 0; r3 < c3.length; r3++)
      e3.indexOf(n2 = c3[r3]) >= 0 || (o3[n2] = t[n2]);
    return o3;
  }(e2, n$1);
  return react.exports.cloneElement(Ot(r2, o2), c2);
};
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f = react.exports, k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: true, ref: true, __self: true, __source: true };
function q(c2, a2, g2) {
  var b2, d2 = {}, e2 = null, h2 = null;
  g2 !== void 0 && (e2 = "" + g2);
  a2.key !== void 0 && (e2 = "" + a2.key);
  a2.ref !== void 0 && (h2 = a2.ref);
  for (b2 in a2)
    m.call(a2, b2) && !p.hasOwnProperty(b2) && (d2[b2] = a2[b2]);
  if (c2 && c2.defaultProps)
    for (b2 in a2 = c2.defaultProps, a2)
      d2[b2] === void 0 && (d2[b2] = a2[b2]);
  return { $$typeof: k, type: c2, key: e2, ref: h2, props: d2, _owner: n.current };
}
reactJsxRuntime_production_min.Fragment = l;
reactJsxRuntime_production_min.jsx = q;
reactJsxRuntime_production_min.jsxs = q;
{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}
const jsx = jsxRuntime.exports.jsx;
function Code({
  className,
  children
}) {
  return /* @__PURE__ */ jsx("code", {
    style: {
      border: className.search(/command/) > -1 ? "1px solid red" : ""
    },
    children
  });
}
Code.defaultProps = {
  className: "",
  children: []
};
Code.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)])
};
function Img({
  alt,
  src
}) {
  return /* @__PURE__ */ jsx("img", {
    width: "100%",
    alt,
    src: `../exoscale/${src}`
  });
}
Img.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
};
function Exercise({
  file
}) {
  return /* @__PURE__ */ jsx(Markdown, {
    options: {
      overrides: {
        code: {
          component: Code
        },
        img: {
          component: Img
        }
      }
    },
    children: file
  });
}
Exercise.propTypes = {
  file: PropTypes.string.isRequired
};
export { Exercise as E, jsx as j };
