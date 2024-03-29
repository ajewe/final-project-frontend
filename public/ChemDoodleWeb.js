//
// ChemDoodle Web Components 9.4.0
//
// https://web.chemdoodle.com
//
// Copyright 2009-2022 iChemLabs, LLC.  All rights reserved.
//
// The ChemDoodle Web Components library is licensed under version 3
// of the GNU GENERAL PUBLIC LICENSE.
//
// You may redistribute it and/or modify it under the terms of the
// GNU General Public License as published by the Free Software Foundation,
// either version 3 of the License, or (at your option) any later version.
//
// As an exception to the GPL, you may distribute this packed form of
// the code without the copy of the GPL license normally required,
// provided you include this license notice and a URL through which
// recipients can access the corresponding unpacked source code.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// ChemDoodle Web Components employs 3rd party libraries under the MIT
// license. For a full list with links to the original source, go to:
// https://web.chemdoodle.com/installation/download/#libraries
//
// Please contact iChemLabs <https://www.ichemlabs.com/contact-us> for
// alternate licensing options.
//
"use strict";
let ChemDoodle = (function () {
  let e = {
    iChemLabs: {},
    informatics: {},
    io: {},
    lib: {},
    notations: {},
    structures: {},
  };
  e.structures.d2 = {};
  e.structures.d3 = {};
  e.getVersion = function () {
    return "9.4.0";
  };
  return e;
})();
(function (e, p, n) {
  (function (e, d) {
    "object" === typeof module && "object" === typeof module.exports
      ? (module.exports = e.document
          ? d(e, !0)
          : function (k) {
              if (!k.document)
                throw Error("jQuery requires a window with a document");
              return d(k);
            })
      : d(e);
  })("undefined" !== typeof e ? e : this, function (e, d) {
    function k(a) {
      var f = !!a && "length" in a && a.length,
        b = t.type(a);
      return "function" === b || t.isWindow(a)
        ? !1
        : "array" === b ||
            0 === f ||
            ("number" === typeof f && 0 < f && f - 1 in a);
    }
    function b(a, f, b) {
      if (t.isFunction(f))
        return t.grep(a, function (a, c) {
          return !!f.call(a, c, a) !== b;
        });
      if (f.nodeType)
        return t.grep(a, function (a) {
          return (a === f) !== b;
        });
      if ("string" === typeof f) {
        if (ob.test(f)) return t.filter(f, a, b);
        f = t.filter(f, a);
      }
      return t.grep(a, function (a) {
        return -1 < Ca.call(f, a) !== b;
      });
    }
    function c(a, f) {
      for (; (a = a[f]) && 1 !== a.nodeType; );
      return a;
    }
    function h(a) {
      var f = {};
      t.each(a.match(ka) || [], function (a, b) {
        f[b] = !0;
      });
      return f;
    }
    function a() {
      I.removeEventListener("DOMContentLoaded", a);
      e.removeEventListener("load", a);
      t.ready();
    }
    function g() {
      this.expando = t.expando + g.uid++;
    }
    function l(a, f, b) {
      if (b === n && 1 === a.nodeType)
        if (
          ((b = "data-" + f.replace(Ta, "-$\x26").toLowerCase()),
          (b = a.getAttribute(b)),
          "string" === typeof b)
        ) {
          try {
            b =
              "true" === b
                ? !0
                : "false" === b
                ? !1
                : "null" === b
                ? null
                : +b + "" === b
                ? +b
                : pb.test(b)
                ? t.parseJSON(b)
                : b;
          } catch (ec) {}
          Y.set(a, f, b);
        } else b = n;
      return b;
    }
    function v(a, f, b, c) {
      var g = 1,
        q = 20,
        h = c
          ? function () {
              return c.cur();
            }
          : function () {
              return t.css(a, f, "");
            },
        m = h(),
        G = (b && b[3]) || (t.cssNumber[f] ? "" : "px"),
        d = (t.cssNumber[f] || ("px" !== G && +m)) && pa.exec(t.css(a, f));
      if (d && d[3] !== G) {
        G = G || d[3];
        b = b || [];
        d = +m || 1;
        do (g = g || ".5"), (d /= g), t.style(a, f, d + G);
        while (g !== (g = h() / m) && 1 !== g && --q);
      }
      if (b) {
        d = +d || +m || 0;
        var l = b[1] ? d + (b[1] + 1) * b[2] : +b[2];
        c && ((c.unit = G), (c.start = d), (c.end = l));
      }
      return l;
    }
    function m(a, f) {
      var b =
        "undefined" !== typeof a.getElementsByTagName
          ? a.getElementsByTagName(f || "*")
          : "undefined" !== typeof a.querySelectorAll
          ? a.querySelectorAll(f || "*")
          : [];
      return f === n || (f && t.nodeName(a, f)) ? t.merge([a], b) : b;
    }
    function x(a, f) {
      for (var b = 0, c = a.length; b < c; b++)
        M.set(a[b], "globalEval", !f || M.get(f[b], "globalEval"));
    }
    function u(a, f, b, c, g) {
      for (
        var q,
          h,
          G,
          d = f.createDocumentFragment(),
          l = [],
          v = 0,
          e = a.length;
        v < e;
        v++
      )
        if ((q = a[v]) || 0 === q)
          if ("object" === t.type(q)) t.merge(l, q.nodeType ? [q] : q);
          else if (rb.test(q)) {
            h = h || d.appendChild(f.createElement("div"));
            G = (Ua.exec(q) || ["", ""])[1].toLowerCase();
            G = ba[G] || ba._default;
            h.innerHTML = G[1] + t.htmlPrefilter(q) + G[2];
            for (G = G[0]; G--; ) h = h.lastChild;
            t.merge(l, h.childNodes);
            h = d.firstChild;
            h.textContent = "";
          } else l.push(f.createTextNode(q));
      d.textContent = "";
      for (v = 0; (q = l[v++]); )
        if (c && -1 < t.inArray(q, c)) g && g.push(q);
        else if (
          ((a = t.contains(q.ownerDocument, q)),
          (h = m(d.appendChild(q), "script")),
          a && x(h),
          b)
        )
          for (G = 0; (q = h[G++]); ) Va.test(q.type || "") && b.push(q);
      return d;
    }
    function w() {
      return !0;
    }
    function r() {
      return !1;
    }
    function y() {
      try {
        return I.activeElement;
      } catch (G) {}
    }
    function f(a, b, c, g, q, h) {
      var m;
      if ("object" === typeof b) {
        "string" !== typeof c && ((g = g || c), (c = n));
        for (m in b) f(a, m, c, g, b[m], h);
        return a;
      }
      null == g && null == q
        ? ((q = c), (g = c = n))
        : null == q &&
          ("string" === typeof c
            ? ((q = g), (g = n))
            : ((q = g), (g = c), (c = n)));
      if (!1 === q) q = r;
      else if (!q) return a;
      if (1 === h) {
        var G = q;
        q = function (a) {
          t().off(a);
          return G.apply(this, arguments);
        };
        q.guid = G.guid || (G.guid = t.guid++);
      }
      return a.each(function () {
        t.event.add(this, b, q, g, c);
      });
    }
    function q(a, f) {
      return t.nodeName(a, "table") &&
        t.nodeName(11 !== f.nodeType ? f : f.firstChild, "tr")
        ? a.getElementsByTagName("tbody")[0] ||
            a.appendChild(a.ownerDocument.createElement("tbody"))
        : a;
    }
    function A(a) {
      a.type = (null !== a.getAttribute("type")) + "/" + a.type;
      return a;
    }
    function C(a) {
      var f = sb.exec(a.type);
      f ? (a.type = f[1]) : a.removeAttribute("type");
      return a;
    }
    function B(a, f) {
      var b, c;
      if (1 === f.nodeType) {
        if (M.hasData(a)) {
          var g = M.access(a);
          var q = M.set(f, g);
          if ((g = g.events))
            for (c in (delete q.handle, (q.events = {}), g))
              for (q = 0, b = g[c].length; q < b; q++)
                t.event.add(f, c, g[c][q]);
        }
        Y.hasData(a) && ((a = Y.access(a)), (a = t.extend({}, a)), Y.set(f, a));
      }
    }
    function p(a, f, b, c) {
      f = Wa.apply([], f);
      var g,
        q = 0,
        h = a.length,
        d = h - 1,
        G = f[0],
        l = t.isFunction(G);
      if (l || (1 < h && "string" === typeof G && !T.checkClone && tb.test(G)))
        return a.each(function (g) {
          var q = a.eq(g);
          l && (f[0] = G.call(this, g, q.html()));
          p(q, f, b, c);
        });
      if (h) {
        var v = u(f, a[0].ownerDocument, !1, a, c);
        var e = v.firstChild;
        1 === v.childNodes.length && (v = e);
        if (e || c) {
          e = t.map(m(v, "script"), A);
          for (g = e.length; q < h; q++) {
            var k = v;
            q !== d &&
              ((k = t.clone(k, !0, !0)), g && t.merge(e, m(k, "script")));
            b.call(a[q], k, q);
          }
          if (g)
            for (
              v = e[e.length - 1].ownerDocument, t.map(e, C), q = 0;
              q < g;
              q++
            )
              (k = e[q]),
                Va.test(k.type || "") &&
                  !M.access(k, "globalEval") &&
                  t.contains(v, k) &&
                  (k.src
                    ? t._evalUrl && t._evalUrl(k.src)
                    : t.globalEval(k.textContent.replace(vb, "")));
        }
      }
      return a;
    }
    function F(a, f, b) {
      for (var c = f ? t.filter(f, a) : a, g = 0; null != (f = c[g]); g++)
        b || 1 !== f.nodeType || t.cleanData(m(f)),
          f.parentNode &&
            (b && t.contains(f.ownerDocument, f) && x(m(f, "script")),
            f.parentNode.removeChild(f));
      return a;
    }
    function L(a, f) {
      a = t(f.createElement(a)).appendTo(f.body);
      f = t.css(a[0], "display");
      a.detach();
      return f;
    }
    function H(a) {
      var f = I,
        b = Xa[a];
      b ||
        ((b = L(a, f)),
        ("none" !== b && b) ||
          ((Da = (
            Da ||
            t("\x3ciframe frameborder\x3d'0' width\x3d'0' height\x3d'0'/\x3e")
          ).appendTo(f.documentElement)),
          (f = Da[0].contentDocument),
          f.write(),
          f.close(),
          (b = L(a, f)),
          Da.detach()),
        (Xa[a] = b));
      return b;
    }
    function K(a, f, b) {
      var c = a.style;
      var g = (b = b || Ea(a)) ? b.getPropertyValue(f) || b[f] : n;
      ("" !== g && g !== n) ||
        t.contains(a.ownerDocument, a) ||
        (g = t.style(a, f));
      if (b && !T.pixelMarginRight() && Ja.test(g) && Ya.test(f)) {
        a = c.width;
        f = c.minWidth;
        var q = c.maxWidth;
        c.minWidth = c.maxWidth = c.width = g;
        g = b.width;
        c.width = a;
        c.minWidth = f;
        c.maxWidth = q;
      }
      return g !== n ? g + "" : g;
    }
    function N(a, f) {
      return {
        get: function () {
          if (a()) delete this.get;
          else return (this.get = f).apply(this, arguments);
        },
      };
    }
    function P(a) {
      if (a in Za) return a;
      for (var f = a[0].toUpperCase() + a.slice(1), b = $a.length; b--; )
        if (((a = $a[b] + f), a in Za)) return a;
    }
    function Z(a, f, b) {
      return (a = pa.exec(f))
        ? Math.max(0, a[2] - (b || 0)) + (a[3] || "px")
        : f;
    }
    function E(a, f, b, c, g) {
      f = b === (c ? "border" : "content") ? 4 : "width" === f ? 1 : 0;
      for (var q = 0; 4 > f; f += 2)
        "margin" === b && (q += t.css(a, b + la[f], !0, g)),
          c
            ? ("content" === b && (q -= t.css(a, "padding" + la[f], !0, g)),
              "margin" !== b &&
                (q -= t.css(a, "border" + la[f] + "Width", !0, g)))
            : ((q += t.css(a, "padding" + la[f], !0, g)),
              "padding" !== b &&
                (q += t.css(a, "border" + la[f] + "Width", !0, g)));
      return q;
    }
    function fa(a, f, b) {
      var c = !0,
        g = "width" === f ? a.offsetWidth : a.offsetHeight,
        q = Ea(a),
        h = "border-box" === t.css(a, "boxSizing", !1, q);
      if (0 >= g || null == g) {
        g = K(a, f, q);
        if (0 > g || null == g) g = a.style[f];
        if (Ja.test(g)) return g;
        c = h && (T.boxSizingReliable() || g === a.style[f]);
        g = parseFloat(g) || 0;
      }
      return g + E(a, f, b || (h ? "border" : "content"), c, q) + "px";
    }
    function J(a, f) {
      for (var b, c, g, q = [], h = 0, m = a.length; h < m; h++)
        (c = a[h]),
          c.style &&
            ((q[h] = M.get(c, "olddisplay")),
            (b = c.style.display),
            f
              ? (q[h] || "none" !== b || (c.style.display = ""),
                "" === c.style.display &&
                  ma(c) &&
                  (q[h] = M.access(c, "olddisplay", H(c.nodeName))))
              : ((g = ma(c)),
                ("none" === b && g) ||
                  M.set(c, "olddisplay", g ? b : t.css(c, "display"))));
      for (h = 0; h < m; h++)
        (c = a[h]),
          !c.style ||
            (f && "none" !== c.style.display && "" !== c.style.display) ||
            (c.style.display = f ? q[h] || "" : "none");
      return a;
    }
    function O(a, f, b, c, g) {
      return new O.prototype.init(a, f, b, c, g);
    }
    function Q() {
      e.setTimeout(function () {
        ta = n;
      });
      return (ta = t.now());
    }
    function V(a, f) {
      var b = 0,
        c = { height: a };
      for (f = f ? 1 : 0; 4 > b; b += 2 - f) {
        var g = la[b];
        c["margin" + g] = c["padding" + g] = a;
      }
      f && (c.opacity = c.width = a);
      return c;
    }
    function X(a, f, b) {
      for (
        var c,
          g = (R.tweeners[f] || []).concat(R.tweeners["*"]),
          q = 0,
          h = g.length;
        q < h;
        q++
      )
        if ((c = g[q].call(b, f, a))) return c;
    }
    function ha(a, f) {
      var b, c;
      for (b in a) {
        var g = t.camelCase(b);
        var q = f[g];
        var h = a[b];
        t.isArray(h) && ((q = h[1]), (h = a[b] = h[0]));
        b !== g && ((a[g] = h), delete a[b]);
        if ((c = t.cssHooks[g]) && "expand" in c)
          for (b in ((h = c.expand(h)), delete a[g], h))
            b in a || ((a[b] = h[b]), (f[b] = q));
        else f[g] = q;
      }
    }
    function R(a, f, b) {
      var c,
        g = 0,
        q = R.prefilters.length,
        h = t.Deferred().always(function () {
          delete m.elem;
        }),
        m = function () {
          if (c) return !1;
          var f = ta || Q();
          f = Math.max(0, d.startTime + d.duration - f);
          for (
            var b = 1 - (f / d.duration || 0), g = 0, q = d.tweens.length;
            g < q;
            g++
          )
            d.tweens[g].run(b);
          h.notifyWith(a, [d, b, f]);
          if (1 > b && q) return f;
          h.resolveWith(a, [d]);
          return !1;
        },
        d = h.promise({
          elem: a,
          props: t.extend({}, f),
          opts: t.extend(
            !0,
            { specialEasing: {}, easing: t.easing._default },
            b
          ),
          originalProperties: f,
          originalOptions: b,
          startTime: ta || Q(),
          duration: b.duration,
          tweens: [],
          createTween: function (f, b) {
            f = t.Tween(
              a,
              d.opts,
              f,
              b,
              d.opts.specialEasing[f] || d.opts.easing
            );
            d.tweens.push(f);
            return f;
          },
          stop: function (f) {
            var b = 0,
              g = f ? d.tweens.length : 0;
            if (c) return this;
            for (c = !0; b < g; b++) d.tweens[b].run(1);
            f
              ? (h.notifyWith(a, [d, 1, 0]), h.resolveWith(a, [d, f]))
              : h.rejectWith(a, [d, f]);
            return this;
          },
        });
      b = d.props;
      for (ha(b, d.opts.specialEasing); g < q; g++)
        if ((f = R.prefilters[g].call(d, a, b, d.opts)))
          return (
            t.isFunction(f.stop) &&
              (t._queueHooks(d.elem, d.opts.queue).stop = t.proxy(f.stop, f)),
            f
          );
      t.map(b, X, d);
      t.isFunction(d.opts.start) && d.opts.start.call(a, d);
      t.fx.timer(t.extend(m, { elem: a, anim: d, queue: d.opts.queue }));
      return d
        .progress(d.opts.progress)
        .done(d.opts.done, d.opts.complete)
        .fail(d.opts.fail)
        .always(d.opts.always);
    }
    function U(a) {
      return (a.getAttribute && a.getAttribute("class")) || "";
    }
    function ca(a) {
      return function (f, b) {
        "string" !== typeof f && ((b = f), (f = "*"));
        var c = 0,
          g = f.toLowerCase().match(ka) || [];
        if (t.isFunction(b))
          for (; (f = g[c++]); )
            "+" === f[0]
              ? ((f = f.slice(1) || "*"), (a[f] = a[f] || []).unshift(b))
              : (a[f] = a[f] || []).push(b);
      };
    }
    function ia(a, f, b, c) {
      function g(d) {
        var m;
        q[d] = !0;
        t.each(a[d] || [], function (a, d) {
          a = d(f, b, c);
          if ("string" === typeof a && !h && !q[a])
            return f.dataTypes.unshift(a), g(a), !1;
          if (h) return !(m = a);
        });
        return m;
      }
      var q = {},
        h = a === Ka;
      return g(f.dataTypes[0]) || (!q["*"] && g("*"));
    }
    function aa(a, f) {
      var b,
        c,
        g = t.ajaxSettings.flatOptions || {};
      for (b in f) f[b] !== n && ((g[b] ? a : c || (c = {}))[b] = f[b]);
      c && t.extend(!0, a, c);
      return a;
    }
    function da(a, f, b, c) {
      var g;
      if (t.isArray(f))
        t.each(f, function (f, g) {
          b || wb.test(a)
            ? c(a, g)
            : da(
                a + "[" + ("object" === typeof g && null != g ? f : "") + "]",
                g,
                b,
                c
              );
        });
      else if (b || "object" !== t.type(f)) c(a, f);
      else for (g in f) da(a + "[" + g + "]", f[g], b, c);
    }
    function na(a) {
      return t.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
    }
    var ea = [],
      I = e.document,
      oa = ea.slice,
      Wa = ea.concat,
      La = ea.push,
      Ca = ea.indexOf,
      Fa = {},
      xb = Fa.toString,
      ua = Fa.hasOwnProperty,
      T = {},
      t = function (a, f) {
        return new t.fn.init(a, f);
      },
      yb = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      zb = /^-ms-/,
      Ab = /-([\da-z])/gi,
      Bb = function (a, f) {
        return f.toUpperCase();
      };
    t.fn = t.prototype = {
      jquery: "2.2.4",
      constructor: t,
      selector: "",
      length: 0,
      toArray: function () {
        return oa.call(this);
      },
      get: function (a) {
        return null != a
          ? 0 > a
            ? this[a + this.length]
            : this[a]
          : oa.call(this);
      },
      pushStack: function (a) {
        a = t.merge(this.constructor(), a);
        a.prevObject = this;
        a.context = this.context;
        return a;
      },
      each: function (a) {
        return t.each(this, a);
      },
      map: function (a) {
        return this.pushStack(
          t.map(this, function (f, b) {
            return a.call(f, b, f);
          })
        );
      },
      slice: function () {
        return this.pushStack(oa.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (a) {
        var f = this.length;
        a = +a + (0 > a ? f : 0);
        return this.pushStack(0 <= a && a < f ? [this[a]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: La,
      sort: ea.sort,
      splice: ea.splice,
    };
    t.extend = t.fn.extend = function () {
      var a,
        f,
        b,
        c = arguments[0] || {},
        g = 1,
        q = arguments.length,
        h = !1;
      "boolean" === typeof c && ((h = c), (c = arguments[g] || {}), g++);
      "object" === typeof c || t.isFunction(c) || (c = {});
      g === q && ((c = this), g--);
      for (; g < q; g++)
        if (null != (a = arguments[g]))
          for (f in a) {
            var d = c[f];
            var m = a[f];
            c !== m &&
              (h && m && (t.isPlainObject(m) || (b = t.isArray(m)))
                ? (b
                    ? ((b = !1), (d = d && t.isArray(d) ? d : []))
                    : (d = d && t.isPlainObject(d) ? d : {}),
                  (c[f] = t.extend(h, d, m)))
                : m !== n && (c[f] = m));
          }
      return c;
    };
    t.extend({
      expando: "jQuery" + ("2.2.4" + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (a) {
        throw Error(a);
      },
      noop: function () {},
      isFunction: function (a) {
        return "function" === t.type(a);
      },
      isArray: Array.isArray,
      isWindow: function (a) {
        return null != a && a === a.window;
      },
      isNumeric: function (a) {
        var f = a && a.toString();
        return !t.isArray(a) && 0 <= f - parseFloat(f) + 1;
      },
      isPlainObject: function (a) {
        var f;
        if (
          "object" !== t.type(a) ||
          a.nodeType ||
          t.isWindow(a) ||
          (a.constructor &&
            !ua.call(a, "constructor") &&
            !ua.call(a.constructor.prototype || {}, "isPrototypeOf"))
        )
          return !1;
        for (f in a);
        return f === n || ua.call(a, f);
      },
      isEmptyObject: function (a) {
        for (var f in a) return !1;
        return !0;
      },
      type: function (a) {
        return null == a
          ? a + ""
          : "object" === typeof a || "function" === typeof a
          ? Fa[xb.call(a)] || "object"
          : typeof a;
      },
      globalEval: function (a) {
        var f = eval;
        if ((a = t.trim(a)))
          1 === a.indexOf("use strict")
            ? ((f = I.createElement("script")),
              (f.text = a),
              I.head.appendChild(f).parentNode.removeChild(f))
            : f(a);
      },
      camelCase: function (a) {
        return a.replace(zb, "ms-").replace(Ab, Bb);
      },
      nodeName: function (a, f) {
        return a.nodeName && a.nodeName.toLowerCase() === f.toLowerCase();
      },
      each: function (a, f) {
        var b,
          c = 0;
        if (k(a))
          for (b = a.length; c < b && !1 !== f.call(a[c], c, a[c]); c++);
        else for (c in a) if (!1 === f.call(a[c], c, a[c])) break;
        return a;
      },
      trim: function (a) {
        return null == a ? "" : (a + "").replace(yb, "");
      },
      makeArray: function (a, f) {
        f = f || [];
        null != a &&
          (k(Object(a))
            ? t.merge(f, "string" === typeof a ? [a] : a)
            : La.call(f, a));
        return f;
      },
      inArray: function (a, f, b) {
        return null == f ? -1 : Ca.call(f, a, b);
      },
      merge: function (a, f) {
        for (var b = +f.length, c = 0, g = a.length; c < b; c++) a[g++] = f[c];
        a.length = g;
        return a;
      },
      grep: function (a, f, b) {
        for (var c = [], g = 0, q = a.length, h = !b; g < q; g++)
          (b = !f(a[g], g)), b !== h && c.push(a[g]);
        return c;
      },
      map: function (a, f, b) {
        var c,
          g = 0,
          q = [];
        if (k(a))
          for (c = a.length; g < c; g++) {
            var h = f(a[g], g, b);
            null != h && q.push(h);
          }
        else for (g in a) (h = f(a[g], g, b)), null != h && q.push(h);
        return Wa.apply([], q);
      },
      guid: 1,
      proxy: function (a, f) {
        if ("string" === typeof f) {
          var b = a[f];
          f = a;
          a = b;
        }
        if (!t.isFunction(a)) return n;
        var c = oa.call(arguments, 2);
        b = function () {
          return a.apply(f || this, c.concat(oa.call(arguments)));
        };
        b.guid = a.guid = a.guid || t.guid++;
        return b;
      },
      now: Date.now,
      support: T,
    });
    "function" === typeof Symbol &&
      (t.fn[Symbol.iterator] = ea[Symbol.iterator]);
    t.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (a, f) {
        Fa["[object " + f + "]"] = f.toLowerCase();
      }
    );
    var sa = (function (a) {
      function f(a, f, b, c) {
        var g,
          q,
          h,
          d,
          m = f && f.ownerDocument,
          l = f ? f.nodeType : 9;
        b = b || [];
        if ("string" !== typeof a || !a || (1 !== l && 9 !== l && 11 !== l))
          return b;
        if (
          !c &&
          ((f ? f.ownerDocument || f : N) !== B && wa(f), (f = f || B), D)
        ) {
          if (11 !== l && (d = oa.exec(a)))
            if ((g = d[1]))
              if (9 === l)
                if ((q = f.getElementById(g))) {
                  if (q.id === g) return b.push(q), b;
                } else return b;
              else {
                if (m && (q = m.getElementById(g)) && K(f, q) && q.id === g)
                  return b.push(q), b;
              }
            else {
              if (d[2]) return R.apply(b, f.getElementsByTagName(a)), b;
              if (
                (g = d[3]) &&
                W.getElementsByClassName &&
                f.getElementsByClassName
              )
                return R.apply(b, f.getElementsByClassName(g)), b;
            }
          if (!(!W.qsa || fa[a + " "] || (F && F.test(a)))) {
            if (1 !== l) {
              m = f;
              var e = a;
            } else if ("object" !== f.nodeName.toLowerCase()) {
              (h = f.getAttribute("id"))
                ? (h = h.replace(ta, "\\$\x26"))
                : f.setAttribute("id", (h = E));
              d = ma(a);
              g = d.length;
              for (q = ea.test(h) ? "#" + h : "[id\x3d'" + h + "']"; g--; )
                d[g] = q + " " + k(d[g]);
              e = d.join(",");
              m = (la.test(a) && v(f.parentNode)) || f;
            }
            if (e)
              try {
                return R.apply(b, m.querySelectorAll(e)), b;
              } catch (jc) {
              } finally {
                h === E && f.removeAttribute("id");
              }
          }
        }
        return xa(a.replace(aa, "$1"), f, b, c);
      }
      function b() {
        function a(b, c) {
          f.push(b + " ") > S.cacheLength && delete a[f.shift()];
          return (a[b + " "] = c);
        }
        var f = [];
        return a;
      }
      function c(a) {
        a[E] = !0;
        return a;
      }
      function g(a) {
        var f = B.createElement("div");
        try {
          return !!a(f);
        } catch (hc) {
          return !1;
        } finally {
          f.parentNode && f.parentNode.removeChild(f);
        }
      }
      function q(a, f) {
        a = a.split("|");
        for (var b = a.length; b--; ) S.attrHandle[a[b]] = f;
      }
      function h(a, f) {
        var b = f && a,
          c =
            b &&
            1 === a.nodeType &&
            1 === f.nodeType &&
            (~f.sourceIndex || -2147483648) - (~a.sourceIndex || -2147483648);
        if (c) return c;
        if (b) for (; (b = b.nextSibling); ) if (b === f) return -1;
        return a ? 1 : -1;
      }
      function d(a) {
        return function (f) {
          return "input" === f.nodeName.toLowerCase() && f.type === a;
        };
      }
      function m(a) {
        return function (f) {
          var b = f.nodeName.toLowerCase();
          return ("input" === b || "button" === b) && f.type === a;
        };
      }
      function l(a) {
        return c(function (f) {
          f = +f;
          return c(function (b, c) {
            for (var g, q = a([], b.length, f), h = q.length; h--; )
              b[(g = q[h])] && (b[g] = !(c[g] = b[g]));
          });
        });
      }
      function v(a) {
        return a && "undefined" !== typeof a.getElementsByTagName && a;
      }
      function e() {}
      function k(a) {
        for (var f = 0, b = a.length, c = ""; f < b; f++) c += a[f].value;
        return c;
      }
      function G(a, f, b) {
        var c = f.dir,
          g = b && "parentNode" === c,
          q = J++;
        return f.first
          ? function (f, b, q) {
              for (; (f = f[c]); ) if (1 === f.nodeType || g) return a(f, b, q);
            }
          : function (f, b, h) {
              var d,
                m = [P, q];
              if (h)
                for (; (f = f[c]); ) {
                  if ((1 === f.nodeType || g) && a(f, b, h)) return !0;
                }
              else
                for (; (f = f[c]); )
                  if (1 === f.nodeType || g) {
                    var l = f[E] || (f[E] = {});
                    l = l[f.uniqueID] || (l[f.uniqueID] = {});
                    if ((d = l[c]) && d[0] === P && d[1] === q)
                      return (m[2] = d[2]);
                    l[c] = m;
                    if ((m[2] = a(f, b, h))) return !0;
                  }
            };
      }
      function u(a) {
        return 1 < a.length
          ? function (f, b, c) {
              for (var g = a.length; g--; ) if (!a[g](f, b, c)) return !1;
              return !0;
            }
          : a[0];
      }
      function A(a, f, b, c, g) {
        for (var q, h = [], d = 0, m = a.length, l = null != f; d < m; d++)
          if ((q = a[d])) if (!b || b(q, c, g)) h.push(q), l && f.push(d);
        return h;
      }
      function x(a, b, g, q, h, d) {
        q && !q[E] && (q = x(q));
        h && !h[E] && (h = x(h, d));
        return c(function (c, d, m, l) {
          var v,
            e = [],
            k = [],
            G = d.length,
            u;
          if (!(u = c)) {
            u = b || "*";
            for (
              var x = m.nodeType ? [m] : m, w = [], r = 0, n = x.length;
              r < n;
              r++
            )
              f(u, x[r], w);
            u = w;
          }
          u = !a || (!c && b) ? u : A(u, e, a, m, l);
          x = g ? (h || (c ? a : G || q) ? [] : d) : u;
          g && g(u, x, m, l);
          if (q) {
            var z = A(x, k);
            q(z, [], m, l);
            for (m = z.length; m--; ) if ((v = z[m])) x[k[m]] = !(u[k[m]] = v);
          }
          if (c) {
            if (h || a) {
              if (h) {
                z = [];
                for (m = x.length; m--; ) (v = x[m]) && z.push((u[m] = v));
                h(null, (x = []), z, l);
              }
              for (m = x.length; m--; )
                (v = x[m]) &&
                  -1 < (z = h ? ha(c, v) : e[m]) &&
                  (c[z] = !(d[z] = v));
            }
          } else (x = A(x === d ? x.splice(G, x.length) : x)), h ? h(null, d, x, l) : R.apply(d, x);
        });
      }
      function w(a) {
        var f,
          b,
          c = a.length,
          g = S.relative[a[0].type];
        var q = g || S.relative[" "];
        for (
          var h = g ? 1 : 0,
            d = G(
              function (a) {
                return a === f;
              },
              q,
              !0
            ),
            m = G(
              function (a) {
                return -1 < ha(f, a);
              },
              q,
              !0
            ),
            l = [
              function (a, b, c) {
                a =
                  (!g && (c || b !== t)) ||
                  ((f = b).nodeType ? d(a, b, c) : m(a, b, c));
                f = null;
                return a;
              },
            ];
          h < c;
          h++
        )
          if ((q = S.relative[a[h].type])) l = [G(u(l), q)];
          else {
            q = S.filter[a[h].type].apply(null, a[h].matches);
            if (q[E]) {
              for (b = ++h; b < c && !S.relative[a[b].type]; b++);
              return x(
                1 < h && u(l),
                1 < h &&
                  k(
                    a
                      .slice(0, h - 1)
                      .concat({ value: " " === a[h - 2].type ? "*" : "" })
                  ).replace(aa, "$1"),
                q,
                h < b && w(a.slice(h, b)),
                b < c && w((a = a.slice(b))),
                b < c && k(a)
              );
            }
            l.push(q);
          }
        return u(l);
      }
      function r(a, b) {
        var g = 0 < b.length,
          q = 0 < a.length,
          h = function (c, h, d, m, l) {
            var v,
              e,
              k = 0,
              G = "0",
              u = c && [],
              x = [],
              w = t,
              r = c || (q && S.find.TAG("*", l)),
              n = (P += null == w ? 1 : Math.random() || 0.1),
              z = r.length;
            for (
              l && (t = h === B || h || l);
              G !== z && null != (v = r[G]);
              G++
            ) {
              if (q && v) {
                var Ia = 0;
                h || v.ownerDocument === B || (wa(v), (d = !D));
                for (; (e = a[Ia++]); )
                  if (e(v, h || B, d)) {
                    m.push(v);
                    break;
                  }
                l && (P = n);
              }
              g && ((v = !e && v) && k--, c && u.push(v));
            }
            k += G;
            if (g && G !== k) {
              for (Ia = 0; (e = b[Ia++]); ) e(u, x, h, d);
              if (c) {
                if (0 < k) for (; G--; ) u[G] || x[G] || (x[G] = Q.call(m));
                x = A(x);
              }
              R.apply(m, x);
              l && !c && 0 < x.length && 1 < k + b.length && f.uniqueSort(m);
            }
            l && ((P = n), (t = w));
            return u;
          };
        return g ? c(h) : h;
      }
      var z,
        t,
        y,
        C,
        B,
        p,
        D,
        F,
        H,
        L,
        K,
        E = "sizzle" + 1 * new Date(),
        N = a.document,
        P = 0,
        J = 0,
        Z = b(),
        O = b(),
        fa = b(),
        ca = function (a, f) {
          a === f && (C = !0);
          return 0;
        },
        V = {}.hasOwnProperty,
        I = [],
        Q = I.pop,
        X = I.push,
        R = I.push,
        M = I.slice,
        ha = function (a, f) {
          for (var b = 0, c = a.length; b < c; b++) if (a[b] === f) return b;
          return -1;
        },
        ia = /[\x20\t\r\n\f]+/g,
        aa = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
        U = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
        T = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,
        da = /=[\x20\t\r\n\f]*([^\]'"]*?)[\x20\t\r\n\f]*\]/g,
        Y =
          /:((?:\\.|[\w-]|[^\x00-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,
        ea = /^(?:\\.|[\w-]|[^\x00-\xa0])+$/,
        ba = {
          ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
          CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
          TAG: /^((?:\\.|[\w-]|[^\x00-\xa0])+|[*])/,
          ATTR: /^\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\]/,
          PSEUDO:
            /^:((?:\\.|[\w-]|[^\x00-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,
          CHILD:
            /^:(only|first|last|nth|nth-last)-(child|of-type)(?:\([\x20\t\r\n\f]*(even|odd|(([+-]|)(\d*)n|)[\x20\t\r\n\f]*(?:([+-]|)[\x20\t\r\n\f]*(\d+)|))[\x20\t\r\n\f]*\)|)/i,
          bool: /^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i,
          needsContext:
            /^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i,
        },
        ka = /^(?:input|select|textarea|button)$/i,
        na = /^h\d$/i,
        ja = /^[^{]+\{\s*\[native \w/,
        oa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        la = /[+~]/,
        ta = /'|\\/g,
        qa = /\\([\da-f]{1,6}[\x20\t\r\n\f]?|([\x20\t\r\n\f])|.)/gi,
        ra = function (a, f, b) {
          a = "0x" + f - 65536;
          return a !== a || b
            ? f
            : 0 > a
            ? String.fromCharCode(a + 65536)
            : String.fromCharCode((a >> 10) | 55296, (a & 1023) | 56320);
        },
        sa = function () {
          wa();
        };
      try {
        R.apply((I = M.call(N.childNodes)), N.childNodes),
          I[N.childNodes.length].nodeType;
      } catch (gc) {
        R = {
          apply: I.length
            ? function (a, f) {
                X.apply(a, M.call(f));
              }
            : function (a, f) {
                for (var b = a.length, c = 0; (a[b++] = f[c++]); );
                a.length = b - 1;
              },
        };
      }
      var W = (f.support = {});
      var va = (f.isXML = function (a) {
        return (a = a && (a.ownerDocument || a).documentElement)
          ? "HTML" !== a.nodeName
          : !1;
      });
      var wa = (f.setDocument = function (a) {
        var f;
        a = a ? a.ownerDocument || a : N;
        if (a === B || 9 !== a.nodeType || !a.documentElement) return B;
        B = a;
        p = B.documentElement;
        D = !va(B);
        (f = B.defaultView) &&
          f.top !== f &&
          (f.addEventListener
            ? f.addEventListener("unload", sa, !1)
            : f.attachEvent && f.attachEvent("onunload", sa));
        W.attributes = g(function (a) {
          a.className = "i";
          return !a.getAttribute("className");
        });
        W.getElementsByTagName = g(function (a) {
          a.appendChild(B.createComment(""));
          return !a.getElementsByTagName("*").length;
        });
        W.getElementsByClassName = ja.test(B.getElementsByClassName);
        W.getById = g(function (a) {
          p.appendChild(a).id = E;
          return !B.getElementsByName || !B.getElementsByName(E).length;
        });
        W.getById
          ? ((S.find.ID = function (a, f) {
              if ("undefined" !== typeof f.getElementById && D)
                return (a = f.getElementById(a)) ? [a] : [];
            }),
            (S.filter.ID = function (a) {
              var f = a.replace(qa, ra);
              return function (a) {
                return a.getAttribute("id") === f;
              };
            }))
          : (delete S.find.ID,
            (S.filter.ID = function (a) {
              var f = a.replace(qa, ra);
              return function (a) {
                return (
                  (a =
                    "undefined" !== typeof a.getAttributeNode &&
                    a.getAttributeNode("id")) && a.value === f
                );
              };
            }));
        S.find.TAG = W.getElementsByTagName
          ? function (a, f) {
              if ("undefined" !== typeof f.getElementsByTagName)
                return f.getElementsByTagName(a);
              if (W.qsa) return f.querySelectorAll(a);
            }
          : function (a, f) {
              var b = [],
                c = 0;
              f = f.getElementsByTagName(a);
              if ("*" === a) {
                for (; (a = f[c++]); ) 1 === a.nodeType && b.push(a);
                return b;
              }
              return f;
            };
        S.find.CLASS =
          W.getElementsByClassName &&
          function (a, f) {
            if ("undefined" !== typeof f.getElementsByClassName && D)
              return f.getElementsByClassName(a);
          };
        H = [];
        F = [];
        if ((W.qsa = ja.test(B.querySelectorAll)))
          g(function (a) {
            p.appendChild(a).innerHTML =
              "\x3ca id\x3d'" +
              E +
              "'\x3e\x3c/a\x3e\x3cselect id\x3d'" +
              E +
              "-\r\\' msallowcapture\x3d''\x3e\x3coption selected\x3d''\x3e\x3c/option\x3e\x3c/select\x3e";
            a.querySelectorAll("[msallowcapture^\x3d'']").length &&
              F.push("[*^$]\x3d[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
            a.querySelectorAll("[selected]").length ||
              F.push(
                "\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)"
              );
            a.querySelectorAll("[id~\x3d" + E + "-]").length || F.push("~\x3d");
            a.querySelectorAll(":checked").length || F.push(":checked");
            a.querySelectorAll("a#" + E + "+*").length || F.push(".#.+[+~]");
          }),
            g(function (a) {
              var f = B.createElement("input");
              f.setAttribute("type", "hidden");
              a.appendChild(f).setAttribute("name", "D");
              a.querySelectorAll("[name\x3dd]").length &&
                F.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?\x3d");
              a.querySelectorAll(":enabled").length ||
                F.push(":enabled", ":disabled");
              a.querySelectorAll("*,:x");
              F.push(",.*:");
            });
        (W.matchesSelector = ja.test(
          (L =
            p.matches ||
            p.webkitMatchesSelector ||
            p.mozMatchesSelector ||
            p.oMatchesSelector ||
            p.msMatchesSelector)
        )) &&
          g(function (a) {
            W.disconnectedMatch = L.call(a, "div");
            L.call(a, "[s!\x3d'']:x");
            H.push(
              "!\x3d",
              ":((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?\x3d)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)"
            );
          });
        F = F.length && new RegExp(F.join("|"));
        H = H.length && new RegExp(H.join("|"));
        K =
          (f = ja.test(p.compareDocumentPosition)) || ja.test(p.contains)
            ? function (a, f) {
                var b = 9 === a.nodeType ? a.documentElement : a;
                f = f && f.parentNode;
                return (
                  a === f ||
                  !!(
                    f &&
                    1 === f.nodeType &&
                    (b.contains
                      ? b.contains(f)
                      : a.compareDocumentPosition &&
                        a.compareDocumentPosition(f) & 16)
                  )
                );
              }
            : function (a, f) {
                if (f) for (; (f = f.parentNode); ) if (f === a) return !0;
                return !1;
              };
        ca = f
          ? function (a, f) {
              if (a === f) return (C = !0), 0;
              var b = !a.compareDocumentPosition - !f.compareDocumentPosition;
              if (b) return b;
              b =
                (a.ownerDocument || a) === (f.ownerDocument || f)
                  ? a.compareDocumentPosition(f)
                  : 1;
              return b & 1 ||
                (!W.sortDetached && f.compareDocumentPosition(a) === b)
                ? a === B || (a.ownerDocument === N && K(N, a))
                  ? -1
                  : f === B || (f.ownerDocument === N && K(N, f))
                  ? 1
                  : y
                  ? ha(y, a) - ha(y, f)
                  : 0
                : b & 4
                ? -1
                : 1;
            }
          : function (a, f) {
              if (a === f) return (C = !0), 0;
              var b = 0,
                c = a.parentNode,
                g = f.parentNode,
                q = [a],
                d = [f];
              if (!c || !g)
                return a === B
                  ? -1
                  : f === B
                  ? 1
                  : c
                  ? -1
                  : g
                  ? 1
                  : y
                  ? ha(y, a) - ha(y, f)
                  : 0;
              if (c === g) return h(a, f);
              for (; (a = a.parentNode); ) q.unshift(a);
              for (a = f; (a = a.parentNode); ) d.unshift(a);
              for (; q[b] === d[b]; ) b++;
              return b ? h(q[b], d[b]) : q[b] === N ? -1 : d[b] === N ? 1 : 0;
            };
        return B;
      });
      f.matches = function (a, b) {
        return f(a, null, null, b);
      };
      f.matchesSelector = function (a, b) {
        (a.ownerDocument || a) !== B && wa(a);
        b = b.replace(da, "\x3d'$1']");
        if (
          !(
            !W.matchesSelector ||
            !D ||
            fa[b + " "] ||
            (H && H.test(b)) ||
            (F && F.test(b))
          )
        )
          try {
            var c = L.call(a, b);
            if (
              c ||
              W.disconnectedMatch ||
              (a.document && 11 !== a.document.nodeType)
            )
              return c;
          } catch (ic) {}
        return 0 < f(b, B, null, [a]).length;
      };
      f.contains = function (a, f) {
        (a.ownerDocument || a) !== B && wa(a);
        return K(a, f);
      };
      f.attr = function (a, f) {
        (a.ownerDocument || a) !== B && wa(a);
        var b = S.attrHandle[f.toLowerCase()];
        b = b && V.call(S.attrHandle, f.toLowerCase()) ? b(a, f, !D) : n;
        return b !== n
          ? b
          : W.attributes || !D
          ? a.getAttribute(f)
          : (b = a.getAttributeNode(f)) && b.specified
          ? b.value
          : null;
      };
      f.error = function (a) {
        throw Error("Syntax error, unrecognized expression: " + a);
      };
      f.uniqueSort = function (a) {
        var f,
          b = [],
          c = 0,
          g = 0;
        C = !W.detectDuplicates;
        y = !W.sortStable && a.slice(0);
        a.sort(ca);
        if (C) {
          for (; (f = a[g++]); ) f === a[g] && (c = b.push(g));
          for (; c--; ) a.splice(b[c], 1);
        }
        y = null;
        return a;
      };
      var pa = (f.getText = function (a) {
        var f = "",
          b = 0;
        var c = a.nodeType;
        if (!c) for (; (c = a[b++]); ) f += pa(c);
        else if (1 === c || 9 === c || 11 === c) {
          if ("string" === typeof a.textContent) return a.textContent;
          for (a = a.firstChild; a; a = a.nextSibling) f += pa(a);
        } else if (3 === c || 4 === c) return a.nodeValue;
        return f;
      });
      var S = (f.selectors = {
        cacheLength: 50,
        createPseudo: c,
        match: ba,
        attrHandle: {},
        find: {},
        relative: {
          "\x3e": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (a) {
            a[1] = a[1].replace(qa, ra);
            a[3] = (a[3] || a[4] || a[5] || "").replace(qa, ra);
            "~\x3d" === a[2] && (a[3] = " " + a[3] + " ");
            return a.slice(0, 4);
          },
          CHILD: function (a) {
            a[1] = a[1].toLowerCase();
            "nth" === a[1].slice(0, 3)
              ? (a[3] || f.error(a[0]),
                (a[4] = +(a[4]
                  ? a[5] + (a[6] || 1)
                  : 2 * ("even" === a[3] || "odd" === a[3]))),
                (a[5] = +(a[7] + a[8] || "odd" === a[3])))
              : a[3] && f.error(a[0]);
            return a;
          },
          PSEUDO: function (a) {
            var f,
              b = !a[6] && a[2];
            if (ba.CHILD.test(a[0])) return null;
            a[3]
              ? (a[2] = a[4] || a[5] || "")
              : b &&
                Y.test(b) &&
                (f = ma(b, !0)) &&
                (f = b.indexOf(")", b.length - f) - b.length) &&
                ((a[0] = a[0].slice(0, f)), (a[2] = b.slice(0, f)));
            return a.slice(0, 3);
          },
        },
        filter: {
          TAG: function (a) {
            var f = a.replace(qa, ra).toLowerCase();
            return "*" === a
              ? function () {
                  return !0;
                }
              : function (a) {
                  return a.nodeName && a.nodeName.toLowerCase() === f;
                };
          },
          CLASS: function (a) {
            var f = Z[a + " "];
            return (
              f ||
              ((f = new RegExp(
                "(^|[\\x20\\t\\r\\n\\f])" + a + "([\\x20\\t\\r\\n\\f]|$)"
              )),
              Z(a, function (a) {
                return f.test(
                  ("string" === typeof a.className && a.className) ||
                    ("undefined" !== typeof a.getAttribute &&
                      a.getAttribute("class")) ||
                    ""
                );
              }))
            );
          },
          ATTR: function (a, b, c) {
            return function (g) {
              g = f.attr(g, a);
              if (null == g) return "!\x3d" === b;
              if (!b) return !0;
              g += "";
              return "\x3d" === b
                ? g === c
                : "!\x3d" === b
                ? g !== c
                : "^\x3d" === b
                ? c && 0 === g.indexOf(c)
                : "*\x3d" === b
                ? c && -1 < g.indexOf(c)
                : "$\x3d" === b
                ? c && g.slice(-c.length) === c
                : "~\x3d" === b
                ? -1 < (" " + g.replace(ia, " ") + " ").indexOf(c)
                : "|\x3d" === b
                ? g === c || g.slice(0, c.length + 1) === c + "-"
                : !1;
            };
          },
          CHILD: function (a, f, b, c, g) {
            var q = "nth" !== a.slice(0, 3),
              h = "last" !== a.slice(-4),
              d = "of-type" === f;
            return 1 === c && 0 === g
              ? function (a) {
                  return !!a.parentNode;
                }
              : function (f, b, m) {
                  var l, v;
                  b = q !== h ? "nextSibling" : "previousSibling";
                  var e = f.parentNode,
                    k = d && f.nodeName.toLowerCase();
                  m = !m && !d;
                  var G = !1;
                  if (e) {
                    if (q) {
                      for (; b; ) {
                        for (l = f; (l = l[b]); )
                          if (
                            d
                              ? l.nodeName.toLowerCase() === k
                              : 1 === l.nodeType
                          )
                            return !1;
                        var u = (b = "only" === a && !u && "nextSibling");
                      }
                      return !0;
                    }
                    u = [h ? e.firstChild : e.lastChild];
                    if (h && m) {
                      l = e;
                      var A = l[E] || (l[E] = {});
                      A = A[l.uniqueID] || (A[l.uniqueID] = {});
                      G = A[a] || [];
                      G = (v = G[0] === P && G[1]) && G[2];
                      for (
                        l = v && e.childNodes[v];
                        (l = (++v && l && l[b]) || (G = v = 0) || u.pop());

                      )
                        if (1 === l.nodeType && ++G && l === f) {
                          A[a] = [P, v, G];
                          break;
                        }
                    } else if (
                      (m &&
                        ((l = f),
                        (A = l[E] || (l[E] = {})),
                        (A = A[l.uniqueID] || (A[l.uniqueID] = {})),
                        (G = A[a] || []),
                        (G = v = G[0] === P && G[1])),
                      !1 === G)
                    )
                      for (
                        ;
                        (l = (++v && l && l[b]) || (G = v = 0) || u.pop()) &&
                        ((d
                          ? l.nodeName.toLowerCase() !== k
                          : 1 !== l.nodeType) ||
                          !++G ||
                          (m &&
                            ((A = l[E] || (l[E] = {})),
                            (A = A[l.uniqueID] || (A[l.uniqueID] = {})),
                            (A[a] = [P, G])),
                          l !== f));

                      );
                    G -= g;
                    return G === c || (0 === G % c && 0 <= G / c);
                  }
                };
          },
          PSEUDO: function (a, b) {
            var g =
              S.pseudos[a] ||
              S.setFilters[a.toLowerCase()] ||
              f.error("unsupported pseudo: " + a);
            if (g[E]) return g(b);
            if (1 < g.length) {
              var q = [a, a, "", b];
              return S.setFilters.hasOwnProperty(a.toLowerCase())
                ? c(function (a, f) {
                    for (var c, q = g(a, b), h = q.length; h--; )
                      (c = ha(a, q[h])), (a[c] = !(f[c] = q[h]));
                  })
                : function (a) {
                    return g(a, 0, q);
                  };
            }
            return g;
          },
        },
        pseudos: {
          not: c(function (a) {
            var f = [],
              b = [],
              g = ua(a.replace(aa, "$1"));
            return g[E]
              ? c(function (a, f, b, c) {
                  c = g(a, null, c, []);
                  for (var q = a.length; q--; )
                    if ((b = c[q])) a[q] = !(f[q] = b);
                })
              : function (a, c, q) {
                  f[0] = a;
                  g(f, null, q, b);
                  f[0] = null;
                  return !b.pop();
                };
          }),
          has: c(function (a) {
            return function (b) {
              return 0 < f(a, b).length;
            };
          }),
          contains: c(function (a) {
            a = a.replace(qa, ra);
            return function (f) {
              return -1 < (f.textContent || f.innerText || pa(f)).indexOf(a);
            };
          }),
          lang: c(function (a) {
            ea.test(a || "") || f.error("unsupported lang: " + a);
            a = a.replace(qa, ra).toLowerCase();
            return function (f) {
              var b;
              do
                if (
                  (b = D
                    ? f.lang
                    : f.getAttribute("xml:lang") || f.getAttribute("lang"))
                )
                  return (
                    (b = b.toLowerCase()), b === a || 0 === b.indexOf(a + "-")
                  );
              while ((f = f.parentNode) && 1 === f.nodeType);
              return !1;
            };
          }),
          target: function (f) {
            var b = a.location && a.location.hash;
            return b && b.slice(1) === f.id;
          },
          root: function (a) {
            return a === p;
          },
          focus: function (a) {
            return (
              a === B.activeElement &&
              (!B.hasFocus || B.hasFocus()) &&
              !!(a.type || a.href || ~a.tabIndex)
            );
          },
          enabled: function (a) {
            return !1 === a.disabled;
          },
          disabled: function (a) {
            return !0 === a.disabled;
          },
          checked: function (a) {
            var f = a.nodeName.toLowerCase();
            return (
              ("input" === f && !!a.checked) || ("option" === f && !!a.selected)
            );
          },
          selected: function (a) {
            a.parentNode && a.parentNode.selectedIndex;
            return !0 === a.selected;
          },
          empty: function (a) {
            for (a = a.firstChild; a; a = a.nextSibling)
              if (6 > a.nodeType) return !1;
            return !0;
          },
          parent: function (a) {
            return !S.pseudos.empty(a);
          },
          header: function (a) {
            return na.test(a.nodeName);
          },
          input: function (a) {
            return ka.test(a.nodeName);
          },
          button: function (a) {
            var f = a.nodeName.toLowerCase();
            return ("input" === f && "button" === a.type) || "button" === f;
          },
          text: function (a) {
            var f;
            return (
              "input" === a.nodeName.toLowerCase() &&
              "text" === a.type &&
              (null == (f = a.getAttribute("type")) ||
                "text" === f.toLowerCase())
            );
          },
          first: l(function () {
            return [0];
          }),
          last: l(function (a, f) {
            return [f - 1];
          }),
          eq: l(function (a, f, b) {
            return [0 > b ? b + f : b];
          }),
          even: l(function (a, f) {
            for (var b = 0; b < f; b += 2) a.push(b);
            return a;
          }),
          odd: l(function (a, f) {
            for (var b = 1; b < f; b += 2) a.push(b);
            return a;
          }),
          lt: l(function (a, f, b) {
            for (f = 0 > b ? b + f : b; 0 <= --f; ) a.push(f);
            return a;
          }),
          gt: l(function (a, f, b) {
            for (b = 0 > b ? b + f : b; ++b < f; ) a.push(b);
            return a;
          }),
        },
      });
      S.pseudos.nth = S.pseudos.eq;
      for (z in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
        S.pseudos[z] = d(z);
      for (z in { submit: !0, reset: !0 }) S.pseudos[z] = m(z);
      e.prototype = S.filters = S.pseudos;
      S.setFilters = new e();
      var ma = (f.tokenize = function (a, b) {
        var c, g, q, h, d;
        if ((h = O[a + " "])) return b ? 0 : h.slice(0);
        h = a;
        var m = [];
        for (d = S.preFilter; h; ) {
          if (!l || (c = U.exec(h)))
            c && (h = h.slice(c[0].length) || h), m.push((g = []));
          var l = !1;
          if ((c = T.exec(h)))
            (l = c.shift()),
              g.push({ value: l, type: c[0].replace(aa, " ") }),
              (h = h.slice(l.length));
          for (q in S.filter)
            !(c = ba[q].exec(h)) ||
              (d[q] && !(c = d[q](c))) ||
              ((l = c.shift()),
              g.push({ value: l, type: q, matches: c }),
              (h = h.slice(l.length)));
          if (!l) break;
        }
        return b ? h.length : h ? f.error(a) : O(a, m).slice(0);
      });
      var ua = (f.compile = function (a, f) {
        var b,
          c = [],
          g = [],
          q = fa[a + " "];
        if (!q) {
          f || (f = ma(a));
          for (b = f.length; b--; ) (q = w(f[b])), q[E] ? c.push(q) : g.push(q);
          q = fa(a, r(g, c));
          q.selector = a;
        }
        return q;
      });
      var xa = (f.select = function (a, f, b, c) {
        var g,
          q,
          h,
          d = "function" === typeof a && a,
          m = !c && ma((a = d.selector || a));
        b = b || [];
        if (1 === m.length) {
          var l = (m[0] = m[0].slice(0));
          if (
            2 < l.length &&
            "ID" === (q = l[0]).type &&
            W.getById &&
            9 === f.nodeType &&
            D &&
            S.relative[l[1].type]
          ) {
            f = (S.find.ID(q.matches[0].replace(qa, ra), f) || [])[0];
            if (!f) return b;
            d && (f = f.parentNode);
            a = a.slice(l.shift().value.length);
          }
          for (g = ba.needsContext.test(a) ? 0 : l.length; g--; ) {
            q = l[g];
            if (S.relative[(h = q.type)]) break;
            if ((h = S.find[h]))
              if (
                (c = h(
                  q.matches[0].replace(qa, ra),
                  (la.test(l[0].type) && v(f.parentNode)) || f
                ))
              ) {
                l.splice(g, 1);
                a = c.length && k(l);
                if (!a) return R.apply(b, c), b;
                break;
              }
          }
        }
        (d || ua(a, m))(
          c,
          f,
          !D,
          b,
          !f || (la.test(a) && v(f.parentNode)) || f
        );
        return b;
      });
      W.sortStable = E.split("").sort(ca).join("") === E;
      W.detectDuplicates = !!C;
      wa();
      W.sortDetached = g(function (a) {
        return a.compareDocumentPosition(B.createElement("div")) & 1;
      });
      g(function (a) {
        a.innerHTML = "\x3ca href\x3d'#'\x3e\x3c/a\x3e";
        return "#" === a.firstChild.getAttribute("href");
      }) ||
        q("type|href|height|width", function (a, f, b) {
          if (!b) return a.getAttribute(f, "type" === f.toLowerCase() ? 1 : 2);
        });
      (W.attributes &&
        g(function (a) {
          a.innerHTML = "\x3cinput/\x3e";
          a.firstChild.setAttribute("value", "");
          return "" === a.firstChild.getAttribute("value");
        })) ||
        q("value", function (a, f, b) {
          if (!b && "input" === a.nodeName.toLowerCase()) return a.defaultValue;
        });
      g(function (a) {
        return null == a.getAttribute("disabled");
      }) ||
        q(
          "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          function (a, f, b) {
            var c;
            if (!b)
              return !0 === a[f]
                ? f.toLowerCase()
                : (c = a.getAttributeNode(f)) && c.specified
                ? c.value
                : null;
          }
        );
      return f;
    })(e);
    t.find = sa;
    t.expr = sa.selectors;
    t.expr[":"] = t.expr.pseudos;
    t.uniqueSort = t.unique = sa.uniqueSort;
    t.text = sa.getText;
    t.isXMLDoc = sa.isXML;
    t.contains = sa.contains;
    var va = function (a, f, b) {
        for (var c = [], g = b !== n; (a = a[f]) && 9 !== a.nodeType; )
          if (1 === a.nodeType) {
            if (g && t(a).is(b)) break;
            c.push(a);
          }
        return c;
      },
      ab = function (a, f) {
        for (var b = []; a; a = a.nextSibling)
          1 === a.nodeType && a !== f && b.push(a);
        return b;
      },
      bb = t.expr.match.needsContext,
      cb = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
      ob = /^.[^:#\[\.,]*$/;
    t.filter = function (a, f, b) {
      var c = f[0];
      b && (a = ":not(" + a + ")");
      return 1 === f.length && 1 === c.nodeType
        ? t.find.matchesSelector(c, a)
          ? [c]
          : []
        : t.find.matches(
            a,
            t.grep(f, function (a) {
              return 1 === a.nodeType;
            })
          );
    };
    t.fn.extend({
      find: function (a) {
        var f,
          b = this.length,
          c = [],
          g = this;
        if ("string" !== typeof a)
          return this.pushStack(
            t(a).filter(function () {
              for (f = 0; f < b; f++) if (t.contains(g[f], this)) return !0;
            })
          );
        for (f = 0; f < b; f++) t.find(a, g[f], c);
        c = this.pushStack(1 < b ? t.unique(c) : c);
        c.selector = this.selector ? this.selector + " " + a : a;
        return c;
      },
      filter: function (a) {
        return this.pushStack(b(this, a || [], !1));
      },
      not: function (a) {
        return this.pushStack(b(this, a || [], !0));
      },
      is: function (a) {
        return !!b(
          this,
          "string" === typeof a && bb.test(a) ? t(a) : a || [],
          !1
        ).length;
      },
    });
    var Db = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (t.fn.init = function (a, f, b) {
      if (!a) return this;
      b = b || Eb;
      if ("string" === typeof a) {
        var c =
          "\x3c" === a[0] && "\x3e" === a[a.length - 1] && 3 <= a.length
            ? [null, a, null]
            : Db.exec(a);
        if (!c || (!c[1] && f))
          return !f || f.jquery
            ? (f || b).find(a)
            : this.constructor(f).find(a);
        if (c[1]) {
          if (
            ((f = f instanceof t ? f[0] : f),
            t.merge(
              this,
              t.parseHTML(c[1], f && f.nodeType ? f.ownerDocument || f : I, !0)
            ),
            cb.test(c[1]) && t.isPlainObject(f))
          )
            for (c in f)
              if (t.isFunction(this[c])) this[c](f[c]);
              else this.attr(c, f[c]);
        } else
          (f = I.getElementById(c[2])) &&
            f.parentNode &&
            ((this.length = 1), (this[0] = f)),
            (this.context = I),
            (this.selector = a);
        return this;
      }
      if (a.nodeType)
        return (this.context = this[0] = a), (this.length = 1), this;
      if (t.isFunction(a)) return b.ready !== n ? b.ready(a) : a(t);
      a.selector !== n &&
        ((this.selector = a.selector), (this.context = a.context));
      return t.makeArray(a, this);
    }).prototype = t.fn;
    var Eb = t(I);
    var Fb = /^(?:parents|prev(?:Until|All))/,
      Gb = { children: !0, contents: !0, next: !0, prev: !0 };
    t.fn.extend({
      has: function (a) {
        var f = t(a, this),
          b = f.length;
        return this.filter(function () {
          for (var a = 0; a < b; a++) if (t.contains(this, f[a])) return !0;
        });
      },
      closest: function (a, f) {
        for (
          var b,
            c = 0,
            g = this.length,
            q = [],
            h =
              bb.test(a) || "string" !== typeof a ? t(a, f || this.context) : 0;
          c < g;
          c++
        )
          for (b = this[c]; b && b !== f; b = b.parentNode)
            if (
              11 > b.nodeType &&
              (h
                ? -1 < h.index(b)
                : 1 === b.nodeType && t.find.matchesSelector(b, a))
            ) {
              q.push(b);
              break;
            }
        return this.pushStack(1 < q.length ? t.uniqueSort(q) : q);
      },
      index: function (a) {
        return a
          ? "string" === typeof a
            ? Ca.call(t(a), this[0])
            : Ca.call(this, a.jquery ? a[0] : a)
          : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
      },
      add: function (a, f) {
        return this.pushStack(t.uniqueSort(t.merge(this.get(), t(a, f))));
      },
      addBack: function (a) {
        return this.add(
          null == a ? this.prevObject : this.prevObject.filter(a)
        );
      },
    });
    t.each(
      {
        parent: function (a) {
          return (a = a.parentNode) && 11 !== a.nodeType ? a : null;
        },
        parents: function (a) {
          return va(a, "parentNode");
        },
        parentsUntil: function (a, f, b) {
          return va(a, "parentNode", b);
        },
        next: function (a) {
          return c(a, "nextSibling");
        },
        prev: function (a) {
          return c(a, "previousSibling");
        },
        nextAll: function (a) {
          return va(a, "nextSibling");
        },
        prevAll: function (a) {
          return va(a, "previousSibling");
        },
        nextUntil: function (a, f, b) {
          return va(a, "nextSibling", b);
        },
        prevUntil: function (a, f, b) {
          return va(a, "previousSibling", b);
        },
        siblings: function (a) {
          return ab((a.parentNode || {}).firstChild, a);
        },
        children: function (a) {
          return ab(a.firstChild);
        },
        contents: function (a) {
          return a.contentDocument || t.merge([], a.childNodes);
        },
      },
      function (a, f) {
        t.fn[a] = function (b, c) {
          var g = t.map(this, f, b);
          "Until" !== a.slice(-5) && (c = b);
          c && "string" === typeof c && (g = t.filter(c, g));
          1 < this.length &&
            (Gb[a] || t.uniqueSort(g), Fb.test(a) && g.reverse());
          return this.pushStack(g);
        };
      }
    );
    var ka = /\S+/g;
    t.Callbacks = function (a) {
      a = "string" === typeof a ? h(a) : t.extend({}, a);
      var f,
        b,
        c,
        g,
        q = [],
        d = [],
        m = -1,
        l = function () {
          g = a.once;
          for (c = f = !0; d.length; m = -1)
            for (b = d.shift(); ++m < q.length; )
              !1 === q[m].apply(b[0], b[1]) &&
                a.stopOnFalse &&
                ((m = q.length), (b = !1));
          a.memory || (b = !1);
          f = !1;
          g && (q = b ? [] : "");
        },
        v = {
          add: function () {
            q &&
              (b && !f && ((m = q.length - 1), d.push(b)),
              (function ub(f) {
                t.each(f, function (f, b) {
                  t.isFunction(b)
                    ? (a.unique && v.has(b)) || q.push(b)
                    : b && b.length && "string" !== t.type(b) && ub(b);
                });
              })(arguments),
              b && !f && l());
            return this;
          },
          remove: function () {
            t.each(arguments, function (a, f) {
              for (var b; -1 < (b = t.inArray(f, q, b)); )
                q.splice(b, 1), b <= m && m--;
            });
            return this;
          },
          has: function (a) {
            return a ? -1 < t.inArray(a, q) : 0 < q.length;
          },
          empty: function () {
            q && (q = []);
            return this;
          },
          disable: function () {
            g = d = [];
            q = b = "";
            return this;
          },
          disabled: function () {
            return !q;
          },
          lock: function () {
            g = d = [];
            b || (q = b = "");
            return this;
          },
          locked: function () {
            return !!g;
          },
          fireWith: function (a, b) {
            g ||
              ((b = b || []),
              (b = [a, b.slice ? b.slice() : b]),
              d.push(b),
              f || l());
            return this;
          },
          fire: function () {
            v.fireWith(this, arguments);
            return this;
          },
          fired: function () {
            return !!c;
          },
        };
      return v;
    };
    t.extend({
      Deferred: function (a) {
        var f = [
            ["resolve", "done", t.Callbacks("once memory"), "resolved"],
            ["reject", "fail", t.Callbacks("once memory"), "rejected"],
            ["notify", "progress", t.Callbacks("memory")],
          ],
          b = "pending",
          c = {
            state: function () {
              return b;
            },
            always: function () {
              g.done(arguments).fail(arguments);
              return this;
            },
            then: function () {
              var a = arguments;
              return t
                .Deferred(function (b) {
                  t.each(f, function (f, q) {
                    var h = t.isFunction(a[f]) && a[f];
                    g[q[1]](function () {
                      var a = h && h.apply(this, arguments);
                      if (a && t.isFunction(a.promise))
                        a.promise()
                          .progress(b.notify)
                          .done(b.resolve)
                          .fail(b.reject);
                      else
                        b[q[0] + "With"](
                          this === c ? b.promise() : this,
                          h ? [a] : arguments
                        );
                    });
                  });
                  a = null;
                })
                .promise();
            },
            promise: function (a) {
              return null != a ? t.extend(a, c) : c;
            },
          },
          g = {};
        c.pipe = c.then;
        t.each(f, function (a, q) {
          var h = q[2],
            d = q[3];
          c[q[1]] = h.add;
          d &&
            h.add(
              function () {
                b = d;
              },
              f[a ^ 1][2].disable,
              f[2][2].lock
            );
          g[q[0]] = function () {
            g[q[0] + "With"](this === g ? c : this, arguments);
            return this;
          };
          g[q[0] + "With"] = h.fireWith;
        });
        c.promise(g);
        a && a.call(g, g);
        return g;
      },
      when: function (a) {
        var f = 0,
          b = oa.call(arguments),
          c = b.length,
          g = 1 !== c || (a && t.isFunction(a.promise)) ? c : 0,
          q = 1 === g ? a : t.Deferred(),
          h = function (a, f, b) {
            return function (c) {
              f[a] = this;
              b[a] = 1 < arguments.length ? oa.call(arguments) : c;
              b === m ? q.notifyWith(f, b) : --g || q.resolveWith(f, b);
            };
          },
          d;
        if (1 < c) {
          var m = Array(c);
          var l = Array(c);
          for (d = Array(c); f < c; f++)
            b[f] && t.isFunction(b[f].promise)
              ? b[f]
                  .promise()
                  .progress(h(f, l, m))
                  .done(h(f, d, b))
                  .fail(q.reject)
              : --g;
        }
        g || q.resolveWith(d, b);
        return q.promise();
      },
    });
    var Ga;
    t.fn.ready = function (a) {
      t.ready.promise().done(a);
      return this;
    };
    t.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function (a) {
        a ? t.readyWait++ : t.ready(!0);
      },
      ready: function (a) {
        (!0 === a ? --t.readyWait : t.isReady) ||
          ((t.isReady = !0),
          (!0 !== a && 0 < --t.readyWait) ||
            (Ga.resolveWith(I, [t]),
            t.fn.triggerHandler &&
              (t(I).triggerHandler("ready"), t(I).off("ready"))));
      },
    });
    t.ready.promise = function (f) {
      Ga ||
        ((Ga = t.Deferred()),
        "complete" === I.readyState ||
        ("loading" !== I.readyState && !I.documentElement.doScroll)
          ? e.setTimeout(t.ready)
          : (I.addEventListener("DOMContentLoaded", a),
            e.addEventListener("load", a)));
      return Ga.promise(f);
    };
    t.ready.promise();
    var ja = function (a, f, b, c, g, q, h) {
        var d = 0,
          m = a.length,
          l = null == b;
        if ("object" === t.type(b))
          for (d in ((g = !0), b)) ja(a, f, d, b[d], !0, q, h);
        else if (
          c !== n &&
          ((g = !0),
          t.isFunction(c) || (h = !0),
          l &&
            (h
              ? (f.call(a, c), (f = null))
              : ((l = f),
                (f = function (a, f, b) {
                  return l.call(t(a), b);
                }))),
          f)
        )
          for (; d < m; d++) f(a[d], b, h ? c : c.call(a[d], d, f(a[d], b)));
        return g ? a : l ? f.call(a) : m ? f(a[0], b) : q;
      },
      xa = function (a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
      };
    g.uid = 1;
    g.prototype = {
      register: function (a, f) {
        f = f || {};
        a.nodeType
          ? (a[this.expando] = f)
          : Object.defineProperty(a, this.expando, {
              value: f,
              writable: !0,
              configurable: !0,
            });
        return a[this.expando];
      },
      cache: function (a) {
        if (!xa(a)) return {};
        var f = a[this.expando];
        f ||
          ((f = {}),
          xa(a) &&
            (a.nodeType
              ? (a[this.expando] = f)
              : Object.defineProperty(a, this.expando, {
                  value: f,
                  configurable: !0,
                })));
        return f;
      },
      set: function (a, f, b) {
        var c;
        a = this.cache(a);
        if ("string" === typeof f) a[f] = b;
        else for (c in f) a[c] = f[c];
        return a;
      },
      get: function (a, f) {
        return f === n ? this.cache(a) : a[this.expando] && a[this.expando][f];
      },
      access: function (a, f, b) {
        if (f === n || (f && "string" === typeof f && b === n))
          return (
            (b = this.get(a, f)), b !== n ? b : this.get(a, t.camelCase(f))
          );
        this.set(a, f, b);
        return b !== n ? b : f;
      },
      remove: function (a, f) {
        var b = a[this.expando];
        if (b !== n) {
          if (f === n) this.register(a);
          else {
            if (t.isArray(f)) var c = f.concat(f.map(t.camelCase));
            else {
              var g = t.camelCase(f);
              f in b
                ? (c = [f, g])
                : ((c = g), (c = c in b ? [c] : c.match(ka) || []));
            }
            for (g = c.length; g--; ) delete b[c[g]];
          }
          if (f === n || t.isEmptyObject(b))
            a.nodeType ? (a[this.expando] = n) : delete a[this.expando];
        }
      },
      hasData: function (a) {
        a = a[this.expando];
        return a !== n && !t.isEmptyObject(a);
      },
    };
    var M = new g(),
      Y = new g(),
      pb = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Ta = /[A-Z]/g;
    t.extend({
      hasData: function (a) {
        return Y.hasData(a) || M.hasData(a);
      },
      data: function (a, f, b) {
        return Y.access(a, f, b);
      },
      removeData: function (a, f) {
        Y.remove(a, f);
      },
      _data: function (a, f, b) {
        return M.access(a, f, b);
      },
      _removeData: function (a, f) {
        M.remove(a, f);
      },
    });
    t.fn.extend({
      data: function (a, f) {
        var b,
          c = this[0],
          g = c && c.attributes;
        if (a === n) {
          if (this.length) {
            var q = Y.get(c);
            if (1 === c.nodeType && !M.get(c, "hasDataAttrs")) {
              for (b = g.length; b--; )
                if (g[b]) {
                  var h = g[b].name;
                  0 === h.indexOf("data-") &&
                    ((h = t.camelCase(h.slice(5))), l(c, h, q[h]));
                }
              M.set(c, "hasDataAttrs", !0);
            }
          }
          return q;
        }
        return "object" === typeof a
          ? this.each(function () {
              Y.set(this, a);
            })
          : ja(
              this,
              function (f) {
                if (c && f === n) {
                  var b =
                    Y.get(c, a) ||
                    Y.get(c, a.replace(Ta, "-$\x26").toLowerCase());
                  if (b !== n) return b;
                  var g = t.camelCase(a);
                  b = Y.get(c, g);
                  if (b !== n) return b;
                  b = l(c, g, n);
                  if (b !== n) return b;
                } else
                  (g = t.camelCase(a)),
                    this.each(function () {
                      var b = Y.get(this, g);
                      Y.set(this, g, f);
                      -1 < a.indexOf("-") && b !== n && Y.set(this, a, f);
                    });
              },
              null,
              f,
              1 < arguments.length,
              null,
              !0
            );
      },
      removeData: function (a) {
        return this.each(function () {
          Y.remove(this, a);
        });
      },
    });
    t.extend({
      queue: function (a, f, b) {
        if (a) {
          f = (f || "fx") + "queue";
          var c = M.get(a, f);
          b &&
            (!c || t.isArray(b)
              ? (c = M.access(a, f, t.makeArray(b)))
              : c.push(b));
          return c || [];
        }
      },
      dequeue: function (a, f) {
        f = f || "fx";
        var b = t.queue(a, f),
          c = b.length,
          g = b.shift(),
          q = t._queueHooks(a, f),
          h = function () {
            t.dequeue(a, f);
          };
        "inprogress" === g && ((g = b.shift()), c--);
        g &&
          ("fx" === f && b.unshift("inprogress"),
          delete q.stop,
          g.call(a, h, q));
        !c && q && q.empty.fire();
      },
      _queueHooks: function (a, f) {
        var b = f + "queueHooks";
        return (
          M.get(a, b) ||
          M.access(a, b, {
            empty: t.Callbacks("once memory").add(function () {
              M.remove(a, [f + "queue", b]);
            }),
          })
        );
      },
    });
    t.fn.extend({
      queue: function (a, f) {
        var b = 2;
        "string" !== typeof a && ((f = a), (a = "fx"), b--);
        return arguments.length < b
          ? t.queue(this[0], a)
          : f === n
          ? this
          : this.each(function () {
              var b = t.queue(this, a, f);
              t._queueHooks(this, a);
              "fx" === a && "inprogress" !== b[0] && t.dequeue(this, a);
            });
      },
      dequeue: function (a) {
        return this.each(function () {
          t.dequeue(this, a);
        });
      },
      clearQueue: function (a) {
        return this.queue(a || "fx", []);
      },
      promise: function (a, f) {
        var b,
          c = 1,
          g = t.Deferred(),
          q = this,
          h = this.length,
          d = function () {
            --c || g.resolveWith(q, [q]);
          };
        "string" !== typeof a && ((f = a), (a = n));
        for (a = a || "fx"; h--; )
          (b = M.get(q[h], a + "queueHooks")) &&
            b.empty &&
            (c++, b.empty.add(d));
        d();
        return g.promise(f);
      },
    });
    var db = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      pa = new RegExp("^(?:([+-])\x3d|)(" + db + ")([a-z%]*)$", "i"),
      la = ["Top", "Right", "Bottom", "Left"],
      ma = function (a, f) {
        a = f || a;
        return (
          "none" === t.css(a, "display") || !t.contains(a.ownerDocument, a)
        );
      },
      eb = /^(?:checkbox|radio)$/i,
      Ua = /<([\w:-]+)/,
      Va = /^$|\/(?:java|ecma)script/i,
      ba = {
        option: [1, "\x3cselect multiple\x3d'multiple'\x3e", "\x3c/select\x3e"],
        thead: [1, "\x3ctable\x3e", "\x3c/table\x3e"],
        col: [
          2,
          "\x3ctable\x3e\x3ccolgroup\x3e",
          "\x3c/colgroup\x3e\x3c/table\x3e",
        ],
        tr: [2, "\x3ctable\x3e\x3ctbody\x3e", "\x3c/tbody\x3e\x3c/table\x3e"],
        td: [
          3,
          "\x3ctable\x3e\x3ctbody\x3e\x3ctr\x3e",
          "\x3c/tr\x3e\x3c/tbody\x3e\x3c/table\x3e",
        ],
        _default: [0, "", ""],
      };
    ba.optgroup = ba.option;
    ba.tbody = ba.tfoot = ba.colgroup = ba.caption = ba.thead;
    ba.th = ba.td;
    var rb = /<|&#?\w+;/;
    (function () {
      var a = I.createDocumentFragment().appendChild(I.createElement("div")),
        f = I.createElement("input");
      f.setAttribute("type", "radio");
      f.setAttribute("checked", "checked");
      f.setAttribute("name", "t");
      a.appendChild(f);
      T.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked;
      a.innerHTML = "\x3ctextarea\x3ex\x3c/textarea\x3e";
      T.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue;
    })();
    var Hb = /^key/,
      Ib = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      fb = /^([^.]*)(?:\.(.+)|)/;
    t.event = {
      global: {},
      add: function (a, f, b, c, g) {
        var q, h, d, m, l;
        if ((d = M.get(a))) {
          if (b.handler) {
            var v = b;
            b = v.handler;
            g = v.selector;
          }
          b.guid || (b.guid = t.guid++);
          (h = d.events) || (h = d.events = {});
          (q = d.handle) ||
            (q = d.handle =
              function (f) {
                return "undefined" !== typeof t && t.event.triggered !== f.type
                  ? t.event.dispatch.apply(a, arguments)
                  : n;
              });
          f = (f || "").match(ka) || [""];
          for (d = f.length; d--; ) {
            var e = fb.exec(f[d]) || [];
            var k = (m = e[1]);
            var u = (e[2] || "").split(".").sort();
            k &&
              ((e = t.event.special[k] || {}),
              (k = (g ? e.delegateType : e.bindType) || k),
              (e = t.event.special[k] || {}),
              (m = t.extend(
                {
                  type: k,
                  origType: m,
                  data: c,
                  handler: b,
                  guid: b.guid,
                  selector: g,
                  needsContext: g && t.expr.match.needsContext.test(g),
                  namespace: u.join("."),
                },
                v
              )),
              (l = h[k]) ||
                ((l = h[k] = []),
                (l.delegateCount = 0),
                (e.setup && !1 !== e.setup.call(a, c, u, q)) ||
                  (a.addEventListener && a.addEventListener(k, q))),
              e.add &&
                (e.add.call(a, m), m.handler.guid || (m.handler.guid = b.guid)),
              g ? l.splice(l.delegateCount++, 0, m) : l.push(m),
              (t.event.global[k] = !0));
          }
        }
      },
      remove: function (a, f, b, c, g) {
        var q,
          h,
          d,
          m,
          l,
          v = M.hasData(a) && M.get(a);
        if (v && (d = v.events)) {
          f = (f || "").match(ka) || [""];
          for (m = f.length; m--; ) {
            var e = fb.exec(f[m]) || [];
            var k = (l = e[1]);
            var u = (e[2] || "").split(".").sort();
            if (k) {
              var A = t.event.special[k] || {};
              k = (c ? A.delegateType : A.bindType) || k;
              var x = d[k] || [];
              e =
                e[2] &&
                new RegExp("(^|\\.)" + u.join("\\.(?:.*\\.|)") + "(\\.|$)");
              for (h = q = x.length; q--; ) {
                var w = x[q];
                (!g && l !== w.origType) ||
                  (b && b.guid !== w.guid) ||
                  (e && !e.test(w.namespace)) ||
                  (c && c !== w.selector && ("**" !== c || !w.selector)) ||
                  (x.splice(q, 1),
                  w.selector && x.delegateCount--,
                  A.remove && A.remove.call(a, w));
              }
              h &&
                !x.length &&
                ((A.teardown && !1 !== A.teardown.call(a, u, v.handle)) ||
                  t.removeEvent(a, k, v.handle),
                delete d[k]);
            } else for (k in d) t.event.remove(a, k + f[m], b, c, !0);
          }
          t.isEmptyObject(d) && M.remove(a, "handle events");
        }
      },
      dispatch: function (a) {
        a = t.event.fix(a);
        var f,
          b,
          c,
          g = oa.call(arguments);
        var q = (M.get(this, "events") || {})[a.type] || [];
        var h = t.event.special[a.type] || {};
        g[0] = a;
        a.delegateTarget = this;
        if (!h.preDispatch || !1 !== h.preDispatch.call(this, a)) {
          var d = t.event.handlers.call(this, a, q);
          for (q = 0; (c = d[q++]) && !a.isPropagationStopped(); )
            for (
              a.currentTarget = c.elem, f = 0;
              (b = c.handlers[f++]) && !a.isImmediatePropagationStopped();

            )
              if (!a.rnamespace || a.rnamespace.test(b.namespace))
                (a.handleObj = b),
                  (a.data = b.data),
                  (b = (
                    (t.event.special[b.origType] || {}).handle || b.handler
                  ).apply(c.elem, g)),
                  b !== n &&
                    !1 === (a.result = b) &&
                    (a.preventDefault(), a.stopPropagation());
          h.postDispatch && h.postDispatch.call(this, a);
          return a.result;
        }
      },
      handlers: function (a, f) {
        var b,
          c = [],
          g = f.delegateCount,
          q = a.target;
        if (
          g &&
          q.nodeType &&
          ("click" !== a.type || isNaN(a.button) || 1 > a.button)
        )
          for (; q !== this; q = q.parentNode || this)
            if (1 === q.nodeType && (!0 !== q.disabled || "click" !== a.type)) {
              var h = [];
              for (b = 0; b < g; b++) {
                var d = f[b];
                var m = d.selector + " ";
                h[m] === n &&
                  (h[m] = d.needsContext
                    ? -1 < t(m, this).index(q)
                    : t.find(m, this, null, [q]).length);
                h[m] && h.push(d);
              }
              h.length && c.push({ elem: q, handlers: h });
            }
        g < f.length && c.push({ elem: this, handlers: f.slice(g) });
        return c;
      },
      props:
        "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
          " "
        ),
      fixHooks: {},
      keyHooks: {
        props: ["char", "charCode", "key", "keyCode"],
        filter: function (a, f) {
          null == a.which &&
            (a.which = null != f.charCode ? f.charCode : f.keyCode);
          return a;
        },
      },
      mouseHooks: {
        props:
          "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(
            " "
          ),
        filter: function (a, f) {
          var b = f.button;
          if (null == a.pageX && null != f.clientX) {
            var c = a.target.ownerDocument || I;
            var g = c.documentElement;
            c = c.body;
            a.pageX =
              f.clientX +
              ((g && g.scrollLeft) || (c && c.scrollLeft) || 0) -
              ((g && g.clientLeft) || (c && c.clientLeft) || 0);
            a.pageY =
              f.clientY +
              ((g && g.scrollTop) || (c && c.scrollTop) || 0) -
              ((g && g.clientTop) || (c && c.clientTop) || 0);
          }
          a.which ||
            b === n ||
            (a.which = b & 1 ? 1 : b & 2 ? 3 : b & 4 ? 2 : 0);
          return a;
        },
      },
      fix: function (a) {
        if (a[t.expando]) return a;
        var f = a.type;
        var b = a,
          c = this.fixHooks[f];
        c ||
          (this.fixHooks[f] = c =
            Ib.test(f) ? this.mouseHooks : Hb.test(f) ? this.keyHooks : {});
        var g = c.props ? this.props.concat(c.props) : this.props;
        a = new t.Event(b);
        for (f = g.length; f--; ) {
          var q = g[f];
          a[q] = b[q];
        }
        a.target || (a.target = I);
        3 === a.target.nodeType && (a.target = a.target.parentNode);
        return c.filter ? c.filter(a, b) : a;
      },
      special: {
        load: { noBubble: !0 },
        focus: {
          trigger: function () {
            if (this !== y() && this.focus) return this.focus(), !1;
          },
          delegateType: "focusin",
        },
        blur: {
          trigger: function () {
            if (this === y() && this.blur) return this.blur(), !1;
          },
          delegateType: "focusout",
        },
        click: {
          trigger: function () {
            if (
              "checkbox" === this.type &&
              this.click &&
              t.nodeName(this, "input")
            )
              return this.click(), !1;
          },
          _default: function (a) {
            return t.nodeName(a.target, "a");
          },
        },
        beforeunload: {
          postDispatch: function (a) {
            a.result !== n &&
              a.originalEvent &&
              (a.originalEvent.returnValue = a.result);
          },
        },
      },
    };
    t.removeEvent = function (a, f, b) {
      a.removeEventListener && a.removeEventListener(f, b);
    };
    t.Event = function (a, f) {
      if (!(this instanceof t.Event)) return new t.Event(a, f);
      a && a.type
        ? ((this.originalEvent = a),
          (this.type = a.type),
          (this.isDefaultPrevented =
            a.defaultPrevented ||
            (a.defaultPrevented === n && !1 === a.returnValue)
              ? w
              : r))
        : (this.type = a);
      f && t.extend(this, f);
      this.timeStamp = (a && a.timeStamp) || t.now();
      this[t.expando] = !0;
    };
    t.Event.prototype = {
      constructor: t.Event,
      isDefaultPrevented: r,
      isPropagationStopped: r,
      isImmediatePropagationStopped: r,
      isSimulated: !1,
      preventDefault: function () {
        var a = this.originalEvent;
        this.isDefaultPrevented = w;
        a && !this.isSimulated && a.preventDefault();
      },
      stopPropagation: function () {
        var a = this.originalEvent;
        this.isPropagationStopped = w;
        a && !this.isSimulated && a.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var a = this.originalEvent;
        this.isImmediatePropagationStopped = w;
        a && !this.isSimulated && a.stopImmediatePropagation();
        this.stopPropagation();
      },
    };
    t.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (a, f) {
        t.event.special[a] = {
          delegateType: f,
          bindType: f,
          handle: function (a) {
            var b = a.relatedTarget,
              c = a.handleObj;
            if (!b || (b !== this && !t.contains(this, b))) {
              a.type = c.origType;
              var g = c.handler.apply(this, arguments);
              a.type = f;
            }
            return g;
          },
        };
      }
    );
    t.fn.extend({
      on: function (a, b, c, g) {
        return f(this, a, b, c, g);
      },
      one: function (a, b, c, g) {
        return f(this, a, b, c, g, 1);
      },
      off: function (a, f, b) {
        if (a && a.preventDefault && a.handleObj) {
          var c = a.handleObj;
          t(a.delegateTarget).off(
            c.namespace ? c.origType + "." + c.namespace : c.origType,
            c.selector,
            c.handler
          );
          return this;
        }
        if ("object" === typeof a) {
          for (c in a) this.off(c, f, a[c]);
          return this;
        }
        if (!1 === f || "function" === typeof f) (b = f), (f = n);
        !1 === b && (b = r);
        return this.each(function () {
          t.event.remove(this, a, b, f);
        });
      },
    });
    var Jb =
        /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
      Kb = /<script|<style|<link/i,
      tb = /checked\s*(?:[^=]|=\s*.checked.)/i,
      sb = /^true\/(.*)/,
      vb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    t.extend({
      htmlPrefilter: function (a) {
        return a.replace(Jb, "\x3c$1\x3e\x3c/$2\x3e");
      },
      clone: function (a, f, b) {
        var c,
          g = a.cloneNode(!0),
          q = t.contains(a.ownerDocument, a);
        if (
          !(
            T.noCloneChecked ||
            (1 !== a.nodeType && 11 !== a.nodeType) ||
            t.isXMLDoc(a)
          )
        ) {
          var h = m(g);
          var d = m(a);
          var l = 0;
          for (c = d.length; l < c; l++) {
            var v = d[l],
              e = h[l],
              k = e.nodeName.toLowerCase();
            if ("input" === k && eb.test(v.type)) e.checked = v.checked;
            else if ("input" === k || "textarea" === k)
              e.defaultValue = v.defaultValue;
          }
        }
        if (f)
          if (b)
            for (d = d || m(a), h = h || m(g), l = 0, c = d.length; l < c; l++)
              B(d[l], h[l]);
          else B(a, g);
        h = m(g, "script");
        0 < h.length && x(h, !q && m(a, "script"));
        return g;
      },
      cleanData: function (a) {
        for (var f, b, c, g = t.event.special, q = 0; (b = a[q]) !== n; q++)
          if (xa(b)) {
            if ((f = b[M.expando])) {
              if (f.events)
                for (c in f.events)
                  g[c] ? t.event.remove(b, c) : t.removeEvent(b, c, f.handle);
              b[M.expando] = n;
            }
            b[Y.expando] && (b[Y.expando] = n);
          }
      },
    });
    t.fn.extend({
      domManip: p,
      detach: function (a) {
        return F(this, a, !0);
      },
      remove: function (a) {
        return F(this, a);
      },
      text: function (a) {
        return ja(
          this,
          function (a) {
            return a === n
              ? t.text(this)
              : this.empty().each(function () {
                  if (
                    1 === this.nodeType ||
                    11 === this.nodeType ||
                    9 === this.nodeType
                  )
                    this.textContent = a;
                });
          },
          null,
          a,
          arguments.length
        );
      },
      append: function () {
        return p(this, arguments, function (a) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            q(this, a).appendChild(a);
        });
      },
      prepend: function () {
        return p(this, arguments, function (a) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var f = q(this, a);
            f.insertBefore(a, f.firstChild);
          }
        });
      },
      before: function () {
        return p(this, arguments, function (a) {
          this.parentNode && this.parentNode.insertBefore(a, this);
        });
      },
      after: function () {
        return p(this, arguments, function (a) {
          this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
        });
      },
      empty: function () {
        for (var a, f = 0; null != (a = this[f]); f++)
          1 === a.nodeType && (t.cleanData(m(a, !1)), (a.textContent = ""));
        return this;
      },
      clone: function (a, f) {
        a = null == a ? !1 : a;
        f = null == f ? a : f;
        return this.map(function () {
          return t.clone(this, a, f);
        });
      },
      html: function (a) {
        return ja(
          this,
          function (a) {
            var f = this[0] || {},
              b = 0,
              c = this.length;
            if (a === n && 1 === f.nodeType) return f.innerHTML;
            if (
              "string" === typeof a &&
              !Kb.test(a) &&
              !ba[(Ua.exec(a) || ["", ""])[1].toLowerCase()]
            ) {
              a = t.htmlPrefilter(a);
              try {
                for (; b < c; b++)
                  (f = this[b] || {}),
                    1 === f.nodeType &&
                      (t.cleanData(m(f, !1)), (f.innerHTML = a));
                f = 0;
              } catch (fc) {}
            }
            f && this.empty().append(a);
          },
          null,
          a,
          arguments.length
        );
      },
      replaceWith: function () {
        var a = [];
        return p(
          this,
          arguments,
          function (f) {
            var b = this.parentNode;
            0 > t.inArray(this, a) &&
              (t.cleanData(m(this)), b && b.replaceChild(f, this));
          },
          a
        );
      },
    });
    t.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (a, f) {
        t.fn[a] = function (a) {
          for (var b = [], c = t(a), g = c.length - 1, q = 0; q <= g; q++)
            (a = q === g ? this : this.clone(!0)),
              t(c[q])[f](a),
              La.apply(b, a.get());
          return this.pushStack(b);
        };
      }
    );
    var Da,
      Xa = { HTML: "block", BODY: "block" },
      Ya = /^margin/,
      Ja = new RegExp("^(" + db + ")(?!px)[a-z%]+$", "i"),
      Ea = function (a) {
        var f = a.ownerDocument.defaultView;
        (f && f.opener) || (f = e);
        return f.getComputedStyle(a);
      },
      Na = function (a, f, b, c) {
        var g,
          q = {};
        for (g in f) (q[g] = a.style[g]), (a.style[g] = f[g]);
        b = b.apply(a, c || []);
        for (g in f) a.style[g] = q[g];
        return b;
      },
      ya = I.documentElement;
    (function () {
      function a() {
        h.style.cssText =
          "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%";
        h.innerHTML = "";
        ya.appendChild(q);
        var a = e.getComputedStyle(h);
        f = "1%" !== a.top;
        g = "2px" === a.marginLeft;
        b = "4px" === a.width;
        h.style.marginRight = "50%";
        c = "4px" === a.marginRight;
        ya.removeChild(q);
      }
      var f,
        b,
        c,
        g,
        q = I.createElement("div"),
        h = I.createElement("div");
      h.style &&
        ((h.style.backgroundClip = "content-box"),
        (h.cloneNode(!0).style.backgroundClip = ""),
        (T.clearCloneStyle = "content-box" === h.style.backgroundClip),
        (q.style.cssText =
          "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
        q.appendChild(h),
        t.extend(T, {
          pixelPosition: function () {
            a();
            return f;
          },
          boxSizingReliable: function () {
            null == b && a();
            return b;
          },
          pixelMarginRight: function () {
            null == b && a();
            return c;
          },
          reliableMarginLeft: function () {
            null == b && a();
            return g;
          },
          reliableMarginRight: function () {
            var a = h.appendChild(I.createElement("div"));
            a.style.cssText = h.style.cssText =
              "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0";
            a.style.marginRight = a.style.width = "0";
            h.style.width = "1px";
            ya.appendChild(q);
            var f = !parseFloat(e.getComputedStyle(a).marginRight);
            ya.removeChild(q);
            h.removeChild(a);
            return f;
          },
        }));
    })();
    var Lb = /^(none|table(?!-c[ea]).+)/,
      Mb = { position: "absolute", visibility: "hidden", display: "block" },
      gb = { letterSpacing: "0", fontWeight: "400" },
      $a = ["Webkit", "O", "Moz", "ms"],
      Za = I.createElement("div").style;
    t.extend({
      cssHooks: {
        opacity: {
          get: function (a, f) {
            if (f) return (a = K(a, "opacity")), "" === a ? "1" : a;
          },
        },
      },
      cssNumber: {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
      },
      cssProps: { float: "cssFloat" },
      style: function (a, f, b, c) {
        if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
          var g,
            q = t.camelCase(f),
            h = a.style;
          f = t.cssProps[q] || (t.cssProps[q] = P(q) || q);
          var d = t.cssHooks[f] || t.cssHooks[q];
          if (b !== n) {
            var m = typeof b;
            "string" === m &&
              (g = pa.exec(b)) &&
              g[1] &&
              ((b = v(a, f, g)), (m = "number"));
            null != b &&
              b === b &&
              ("number" === m &&
                (b += (g && g[3]) || (t.cssNumber[q] ? "" : "px")),
              T.clearCloneStyle ||
                "" !== b ||
                0 !== f.indexOf("background") ||
                (h[f] = "inherit"),
              (d && "set" in d && (b = d.set(a, b, c)) === n) || (h[f] = b));
          } else
            return d && "get" in d && (g = d.get(a, !1, c)) !== n ? g : h[f];
        }
      },
      css: function (a, f, b, c) {
        var g;
        var q = t.camelCase(f);
        f = t.cssProps[q] || (t.cssProps[q] = P(q) || q);
        (q = t.cssHooks[f] || t.cssHooks[q]) &&
          "get" in q &&
          (g = q.get(a, !0, b));
        g === n && (g = K(a, f, c));
        "normal" === g && f in gb && (g = gb[f]);
        return "" === b || b
          ? ((a = parseFloat(g)), !0 === b || isFinite(a) ? a || 0 : g)
          : g;
      },
    });
    t.each(["height", "width"], function (a, f) {
      t.cssHooks[f] = {
        get: function (a, b, c) {
          if (b)
            return Lb.test(t.css(a, "display")) && 0 === a.offsetWidth
              ? Na(a, Mb, function () {
                  return fa(a, f, c);
                })
              : fa(a, f, c);
        },
        set: function (a, b, c) {
          var g,
            q = c && Ea(a);
          (c =
            c &&
            E(a, f, c, "border-box" === t.css(a, "boxSizing", !1, q), q)) &&
            (g = pa.exec(b)) &&
            "px" !== (g[3] || "px") &&
            ((a.style[f] = b), (b = t.css(a, f)));
          return Z(a, b, c);
        },
      };
    });
    t.cssHooks.marginLeft = N(T.reliableMarginLeft, function (a, f) {
      if (f)
        return (
          (parseFloat(K(a, "marginLeft")) ||
            a.getBoundingClientRect().left -
              Na(a, { marginLeft: 0 }, function () {
                return a.getBoundingClientRect().left;
              })) + "px"
        );
    });
    t.cssHooks.marginRight = N(T.reliableMarginRight, function (a, f) {
      if (f) return Na(a, { display: "inline-block" }, K, [a, "marginRight"]);
    });
    t.each({ margin: "", padding: "", border: "Width" }, function (a, f) {
      t.cssHooks[a + f] = {
        expand: function (b) {
          var c = 0,
            g = {};
          for (b = "string" === typeof b ? b.split(" ") : [b]; 4 > c; c++)
            g[a + la[c] + f] = b[c] || b[c - 2] || b[0];
          return g;
        },
      };
      Ya.test(a) || (t.cssHooks[a + f].set = Z);
    });
    t.fn.extend({
      css: function (a, f) {
        return ja(
          this,
          function (a, f, b) {
            var c,
              g = {},
              q = 0;
            if (t.isArray(f)) {
              b = Ea(a);
              for (c = f.length; q < c; q++) g[f[q]] = t.css(a, f[q], !1, b);
              return g;
            }
            return b !== n ? t.style(a, f, b) : t.css(a, f);
          },
          a,
          f,
          1 < arguments.length
        );
      },
      show: function () {
        return J(this, !0);
      },
      hide: function () {
        return J(this);
      },
      toggle: function (a) {
        return "boolean" === typeof a
          ? a
            ? this.show()
            : this.hide()
          : this.each(function () {
              ma(this) ? t(this).show() : t(this).hide();
            });
      },
    });
    t.Tween = O;
    O.prototype = {
      constructor: O,
      init: function (a, f, b, c, g, q) {
        this.elem = a;
        this.prop = b;
        this.easing = g || t.easing._default;
        this.options = f;
        this.start = this.now = this.cur();
        this.end = c;
        this.unit = q || (t.cssNumber[b] ? "" : "px");
      },
      cur: function () {
        var a = O.propHooks[this.prop];
        return a && a.get ? a.get(this) : O.propHooks._default.get(this);
      },
      run: function (a) {
        var f,
          b = O.propHooks[this.prop];
        this.pos = this.options.duration
          ? (f = t.easing[this.easing](
              a,
              this.options.duration * a,
              0,
              1,
              this.options.duration
            ))
          : (f = a);
        this.now = (this.end - this.start) * f + this.start;
        this.options.step && this.options.step.call(this.elem, this.now, this);
        b && b.set ? b.set(this) : O.propHooks._default.set(this);
        return this;
      },
    };
    O.prototype.init.prototype = O.prototype;
    O.propHooks = {
      _default: {
        get: function (a) {
          return 1 !== a.elem.nodeType ||
            (null != a.elem[a.prop] && null == a.elem.style[a.prop])
            ? a.elem[a.prop]
            : (a = t.css(a.elem, a.prop, "")) && "auto" !== a
            ? a
            : 0;
        },
        set: function (a) {
          if (t.fx.step[a.prop]) t.fx.step[a.prop](a);
          else
            1 !== a.elem.nodeType ||
            (null == a.elem.style[t.cssProps[a.prop]] && !t.cssHooks[a.prop])
              ? (a.elem[a.prop] = a.now)
              : t.style(a.elem, a.prop, a.now + a.unit);
        },
      },
    };
    O.propHooks.scrollTop = O.propHooks.scrollLeft = {
      set: function (a) {
        a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
      },
    };
    t.easing = {
      linear: function (a) {
        return a;
      },
      swing: function (a) {
        return 0.5 - Math.cos(a * Math.PI) / 2;
      },
      _default: "swing",
    };
    t.fx = O.prototype.init;
    t.fx.step = {};
    var ta,
      Ha,
      Nb = /^(?:toggle|show|hide)$/,
      Ob = /queueHooks$/;
    t.Animation = t.extend(R, {
      tweeners: {
        "*": [
          function (a, f) {
            var b = this.createTween(a, f);
            v(b.elem, a, pa.exec(f), b);
            return b;
          },
        ],
      },
      tweener: function (a, f) {
        t.isFunction(a) ? ((f = a), (a = ["*"])) : (a = a.match(ka));
        for (var b, c = 0, g = a.length; c < g; c++)
          (b = a[c]),
            (R.tweeners[b] = R.tweeners[b] || []),
            R.tweeners[b].unshift(f);
      },
      prefilters: [
        function (a, f, b) {
          var c,
            g = this,
            q = {},
            h = a.style,
            d = a.nodeType && ma(a),
            m = M.get(a, "fxshow");
          if (!b.queue) {
            var l = t._queueHooks(a, "fx");
            if (null == l.unqueued) {
              l.unqueued = 0;
              var v = l.empty.fire;
              l.empty.fire = function () {
                l.unqueued || v();
              };
            }
            l.unqueued++;
            g.always(function () {
              g.always(function () {
                l.unqueued--;
                t.queue(a, "fx").length || l.empty.fire();
              });
            });
          }
          if (1 === a.nodeType && ("height" in f || "width" in f)) {
            b.overflow = [h.overflow, h.overflowX, h.overflowY];
            var e = t.css(a, "display");
            var k = "none" === e ? M.get(a, "olddisplay") || H(a.nodeName) : e;
            "inline" === k &&
              "none" === t.css(a, "float") &&
              (h.display = "inline-block");
          }
          b.overflow &&
            ((h.overflow = "hidden"),
            g.always(function () {
              h.overflow = b.overflow[0];
              h.overflowX = b.overflow[1];
              h.overflowY = b.overflow[2];
            }));
          for (c in f)
            if (((k = f[c]), Nb.exec(k))) {
              delete f[c];
              var u = u || "toggle" === k;
              if (k === (d ? "hide" : "show"))
                if ("show" === k && m && m[c] !== n) d = !0;
                else continue;
              q[c] = (m && m[c]) || t.style(a, c);
            } else e = n;
          if (t.isEmptyObject(q))
            "inline" === ("none" === e ? H(a.nodeName) : e) && (h.display = e);
          else
            for (c in (m
              ? "hidden" in m && (d = m.hidden)
              : (m = M.access(a, "fxshow", {})),
            u && (m.hidden = !d),
            d
              ? t(a).show()
              : g.done(function () {
                  t(a).hide();
                }),
            g.done(function () {
              var f;
              M.remove(a, "fxshow");
              for (f in q) t.style(a, f, q[f]);
            }),
            q))
              (f = X(d ? m[c] : 0, c, g)),
                c in m ||
                  ((m[c] = f.start),
                  d &&
                    ((f.end = f.start),
                    (f.start = "width" === c || "height" === c ? 1 : 0)));
        },
      ],
      prefilter: function (a, f) {
        f ? R.prefilters.unshift(a) : R.prefilters.push(a);
      },
    });
    t.speed = function (a, f, b) {
      var c =
        a && "object" === typeof a
          ? t.extend({}, a)
          : {
              complete: b || (!b && f) || (t.isFunction(a) && a),
              duration: a,
              easing: (b && f) || (f && !t.isFunction(f) && f),
            };
      c.duration = t.fx.off
        ? 0
        : "number" === typeof c.duration
        ? c.duration
        : c.duration in t.fx.speeds
        ? t.fx.speeds[c.duration]
        : t.fx.speeds._default;
      if (null == c.queue || !0 === c.queue) c.queue = "fx";
      c.old = c.complete;
      c.complete = function () {
        t.isFunction(c.old) && c.old.call(this);
        c.queue && t.dequeue(this, c.queue);
      };
      return c;
    };
    t.fn.extend({
      fadeTo: function (a, f, b, c) {
        return this.filter(ma)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: f }, a, b, c);
      },
      animate: function (a, f, b, c) {
        var g = t.isEmptyObject(a),
          q = t.speed(f, b, c);
        f = function () {
          var f = R(this, t.extend({}, a), q);
          (g || M.get(this, "finish")) && f.stop(!0);
        };
        f.finish = f;
        return g || !1 === q.queue ? this.each(f) : this.queue(q.queue, f);
      },
      stop: function (a, f, b) {
        var c = function (a) {
          var f = a.stop;
          delete a.stop;
          f(b);
        };
        "string" !== typeof a && ((b = f), (f = a), (a = n));
        f && !1 !== a && this.queue(a || "fx", []);
        return this.each(function () {
          var f = !0,
            g = null != a && a + "queueHooks",
            q = t.timers,
            h = M.get(this);
          if (g) h[g] && h[g].stop && c(h[g]);
          else for (g in h) h[g] && h[g].stop && Ob.test(g) && c(h[g]);
          for (g = q.length; g--; )
            q[g].elem !== this ||
              (null != a && q[g].queue !== a) ||
              (q[g].anim.stop(b), (f = !1), q.splice(g, 1));
          (!f && b) || t.dequeue(this, a);
        });
      },
      finish: function (a) {
        !1 !== a && (a = a || "fx");
        return this.each(function () {
          var f = M.get(this),
            b = f[a + "queue"];
          var c = f[a + "queueHooks"];
          var g = t.timers,
            q = b ? b.length : 0;
          f.finish = !0;
          t.queue(this, a, []);
          c && c.stop && c.stop.call(this, !0);
          for (c = g.length; c--; )
            g[c].elem === this &&
              g[c].queue === a &&
              (g[c].anim.stop(!0), g.splice(c, 1));
          for (c = 0; c < q; c++) b[c] && b[c].finish && b[c].finish.call(this);
          delete f.finish;
        });
      },
    });
    t.each(["toggle", "show", "hide"], function (a, f) {
      var b = t.fn[f];
      t.fn[f] = function (a, c, g) {
        return null == a || "boolean" === typeof a
          ? b.apply(this, arguments)
          : this.animate(V(f, !0), a, c, g);
      };
    });
    t.each(
      {
        slideDown: V("show"),
        slideUp: V("hide"),
        slideToggle: V("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (a, f) {
        t.fn[a] = function (a, b, c) {
          return this.animate(f, a, b, c);
        };
      }
    );
    t.timers = [];
    t.fx.tick = function () {
      var a = 0,
        f = t.timers;
      for (ta = t.now(); a < f.length; a++) {
        var b = f[a];
        b() || f[a] !== b || f.splice(a--, 1);
      }
      f.length || t.fx.stop();
      ta = n;
    };
    t.fx.timer = function (a) {
      t.timers.push(a);
      a() ? t.fx.start() : t.timers.pop();
    };
    t.fx.interval = 13;
    t.fx.start = function () {
      Ha || (Ha = e.setInterval(t.fx.tick, t.fx.interval));
    };
    t.fx.stop = function () {
      e.clearInterval(Ha);
      Ha = null;
    };
    t.fx.speeds = { slow: 600, fast: 200, _default: 400 };
    t.fn.delay = function (a, f) {
      a = t.fx ? t.fx.speeds[a] || a : a;
      return this.queue(f || "fx", function (f, b) {
        var c = e.setTimeout(f, a);
        b.stop = function () {
          e.clearTimeout(c);
        };
      });
    };
    (function () {
      var a = I.createElement("input"),
        f = I.createElement("select"),
        b = f.appendChild(I.createElement("option"));
      a.type = "checkbox";
      T.checkOn = "" !== a.value;
      T.optSelected = b.selected;
      f.disabled = !0;
      T.optDisabled = !b.disabled;
      a = I.createElement("input");
      a.value = "t";
      a.type = "radio";
      T.radioValue = "t" === a.value;
    })();
    var za = t.expr.attrHandle;
    t.fn.extend({
      attr: function (a, f) {
        return ja(this, t.attr, a, f, 1 < arguments.length);
      },
      removeAttr: function (a) {
        return this.each(function () {
          t.removeAttr(this, a);
        });
      },
    });
    t.extend({
      attr: function (a, f, b) {
        var c,
          g = a.nodeType;
        if (3 !== g && 8 !== g && 2 !== g) {
          if ("undefined" === typeof a.getAttribute) return t.prop(a, f, b);
          if (1 !== g || !t.isXMLDoc(a)) {
            f = f.toLowerCase();
            var q = t.attrHooks[f] || (t.expr.match.bool.test(f) ? Pb : n);
          }
          if (b !== n) {
            if (null === b) {
              t.removeAttr(a, f);
              return;
            }
            if (q && "set" in q && (c = q.set(a, b, f)) !== n) return c;
            a.setAttribute(f, b + "");
            return b;
          }
          if (q && "get" in q && null !== (c = q.get(a, f))) return c;
          c = t.find.attr(a, f);
          return null == c ? n : c;
        }
      },
      attrHooks: {
        type: {
          set: function (a, f) {
            if (!T.radioValue && "radio" === f && t.nodeName(a, "input")) {
              var b = a.value;
              a.setAttribute("type", f);
              b && (a.value = b);
              return f;
            }
          },
        },
      },
      removeAttr: function (a, f) {
        var b = 0,
          c = f && f.match(ka);
        if (c && 1 === a.nodeType)
          for (; (f = c[b++]); ) {
            var g = t.propFix[f] || f;
            t.expr.match.bool.test(f) && (a[g] = !1);
            a.removeAttribute(f);
          }
      },
    });
    var Pb = {
      set: function (a, f, b) {
        !1 === f ? t.removeAttr(a, b) : a.setAttribute(b, b);
        return b;
      },
    };
    t.each(t.expr.match.bool.source.match(/\w+/g), function (a, f) {
      var b = za[f] || t.find.attr;
      za[f] = function (a, f, c) {
        if (!c) {
          var g = za[f];
          za[f] = q;
          var q = null != b(a, f, c) ? f.toLowerCase() : null;
          za[f] = g;
        }
        return q;
      };
    });
    var Qb = /^(?:input|select|textarea|button)$/i,
      Rb = /^(?:a|area)$/i;
    t.fn.extend({
      prop: function (a, f) {
        return ja(this, t.prop, a, f, 1 < arguments.length);
      },
      removeProp: function (a) {
        return this.each(function () {
          delete this[t.propFix[a] || a];
        });
      },
    });
    t.extend({
      prop: function (a, f, b) {
        var c,
          g = a.nodeType;
        if (3 !== g && 8 !== g && 2 !== g) {
          if (1 !== g || !t.isXMLDoc(a)) {
            f = t.propFix[f] || f;
            var q = t.propHooks[f];
          }
          return b !== n
            ? q && "set" in q && (c = q.set(a, b, f)) !== n
              ? c
              : (a[f] = b)
            : q && "get" in q && null !== (c = q.get(a, f))
            ? c
            : a[f];
        }
      },
      propHooks: {
        tabIndex: {
          get: function (a) {
            var f = t.find.attr(a, "tabindex");
            return f
              ? parseInt(f, 10)
              : Qb.test(a.nodeName) || (Rb.test(a.nodeName) && a.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    });
    T.optSelected ||
      (t.propHooks.selected = {
        get: function (a) {
          (a = a.parentNode) && a.parentNode && a.parentNode.selectedIndex;
          return null;
        },
        set: function (a) {
          if ((a = a.parentNode))
            a.selectedIndex, a.parentNode && a.parentNode.selectedIndex;
        },
      });
    t.each(
      "tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(
        " "
      ),
      function () {
        t.propFix[this.toLowerCase()] = this;
      }
    );
    var Oa = /[\t\r\n\f]/g;
    t.fn.extend({
      addClass: function (a) {
        var f,
          b,
          c,
          g,
          q,
          h = 0;
        if (t.isFunction(a))
          return this.each(function (f) {
            t(this).addClass(a.call(this, f, U(this)));
          });
        if ("string" === typeof a && a)
          for (f = a.match(ka) || []; (b = this[h++]); ) {
            var d = U(b);
            if ((c = 1 === b.nodeType && (" " + d + " ").replace(Oa, " "))) {
              for (q = 0; (g = f[q++]); )
                0 > c.indexOf(" " + g + " ") && (c += g + " ");
              c = t.trim(c);
              d !== c && b.setAttribute("class", c);
            }
          }
        return this;
      },
      removeClass: function (a) {
        var f,
          b,
          c,
          g,
          q,
          h = 0;
        if (t.isFunction(a))
          return this.each(function (f) {
            t(this).removeClass(a.call(this, f, U(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ("string" === typeof a && a)
          for (f = a.match(ka) || []; (b = this[h++]); ) {
            var d = U(b);
            if ((c = 1 === b.nodeType && (" " + d + " ").replace(Oa, " "))) {
              for (q = 0; (g = f[q++]); )
                for (; -1 < c.indexOf(" " + g + " "); )
                  c = c.replace(" " + g + " ", " ");
              c = t.trim(c);
              d !== c && b.setAttribute("class", c);
            }
          }
        return this;
      },
      toggleClass: function (a, f) {
        var b = typeof a;
        return "boolean" === typeof f && "string" === b
          ? f
            ? this.addClass(a)
            : this.removeClass(a)
          : t.isFunction(a)
          ? this.each(function (b) {
              t(this).toggleClass(a.call(this, b, U(this), f), f);
            })
          : this.each(function () {
              var f, c;
              if ("string" === b) {
                var g = 0;
                var q = t(this);
                for (c = a.match(ka) || []; (f = c[g++]); )
                  q.hasClass(f) ? q.removeClass(f) : q.addClass(f);
              } else if (a === n || "boolean" === b) (f = U(this)) && M.set(this, "__className__", f), this.setAttribute && this.setAttribute("class", f || !1 === a ? "" : M.get(this, "__className__") || "");
            });
      },
      hasClass: function (a) {
        var f,
          b = 0;
        for (a = " " + a + " "; (f = this[b++]); )
          if (
            1 === f.nodeType &&
            -1 < (" " + U(f) + " ").replace(Oa, " ").indexOf(a)
          )
            return !0;
        return !1;
      },
    });
    var Sb = /\r/g,
      Tb = /[\x20\t\r\n\f]+/g;
    t.fn.extend({
      val: function (a) {
        var f,
          b,
          c = this[0];
        if (arguments.length) {
          var g = t.isFunction(a);
          return this.each(function (b) {
            1 === this.nodeType &&
              ((b = g ? a.call(this, b, t(this).val()) : a),
              null == b
                ? (b = "")
                : "number" === typeof b
                ? (b += "")
                : t.isArray(b) &&
                  (b = t.map(b, function (a) {
                    return null == a ? "" : a + "";
                  })),
              (f =
                t.valHooks[this.type] ||
                t.valHooks[this.nodeName.toLowerCase()]),
              (f && "set" in f && f.set(this, b, "value") !== n) ||
                (this.value = b));
          });
        }
        if (c) {
          if (
            (f = t.valHooks[c.type] || t.valHooks[c.nodeName.toLowerCase()]) &&
            "get" in f &&
            (b = f.get(c, "value")) !== n
          )
            return b;
          b = c.value;
          return "string" === typeof b ? b.replace(Sb, "") : null == b ? "" : b;
        }
      },
    });
    t.extend({
      valHooks: {
        option: {
          get: function (a) {
            var f = t.find.attr(a, "value");
            return null != f ? f : t.trim(t.text(a)).replace(Tb, " ");
          },
        },
        select: {
          get: function (a) {
            for (
              var f,
                b = a.options,
                c = a.selectedIndex,
                g = (a = "select-one" === a.type || 0 > c) ? null : [],
                q = a ? c + 1 : b.length,
                h = 0 > c ? q : a ? c : 0;
              h < q;
              h++
            )
              if (
                ((f = b[h]),
                !(
                  (!f.selected && h !== c) ||
                  (T.optDisabled
                    ? f.disabled
                    : null !== f.getAttribute("disabled")) ||
                  (f.parentNode.disabled &&
                    t.nodeName(f.parentNode, "optgroup"))
                ))
              ) {
                f = t(f).val();
                if (a) return f;
                g.push(f);
              }
            return g;
          },
          set: function (a, f) {
            for (var b, c = a.options, g = t.makeArray(f), q = c.length; q--; )
              if (
                ((f = c[q]),
                (f.selected = -1 < t.inArray(t.valHooks.option.get(f), g)))
              )
                b = !0;
            b || (a.selectedIndex = -1);
            return g;
          },
        },
      },
    });
    t.each(["radio", "checkbox"], function () {
      t.valHooks[this] = {
        set: function (a, f) {
          if (t.isArray(f)) return (a.checked = -1 < t.inArray(t(a).val(), f));
        },
      };
      T.checkOn ||
        (t.valHooks[this].get = function (a) {
          return null === a.getAttribute("value") ? "on" : a.value;
        });
    });
    var hb = /^(?:focusinfocus|focusoutblur)$/;
    t.extend(t.event, {
      trigger: function (a, f, b, c) {
        var g,
          q,
          h = [b || I],
          d = ua.call(a, "type") ? a.type : a;
        var m = ua.call(a, "namespace") ? a.namespace.split(".") : [];
        var l = (g = b = b || I);
        if (
          3 !== b.nodeType &&
          8 !== b.nodeType &&
          !hb.test(d + t.event.triggered)
        ) {
          -1 < d.indexOf(".") &&
            ((m = d.split(".")), (d = m.shift()), m.sort());
          var v = 0 > d.indexOf(":") && "on" + d;
          a = a[t.expando] ? a : new t.Event(d, "object" === typeof a && a);
          a.isTrigger = c ? 2 : 3;
          a.namespace = m.join(".");
          a.rnamespace = a.namespace
            ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null;
          a.result = n;
          a.target || (a.target = b);
          f = null == f ? [a] : t.makeArray(f, [a]);
          m = t.event.special[d] || {};
          if (c || !m.trigger || !1 !== m.trigger.apply(b, f)) {
            if (!c && !m.noBubble && !t.isWindow(b)) {
              var k = m.delegateType || d;
              hb.test(k + d) || (l = l.parentNode);
              for (; l; l = l.parentNode) h.push(l), (g = l);
              g === (b.ownerDocument || I) &&
                h.push(g.defaultView || g.parentWindow || e);
            }
            for (g = 0; (l = h[g++]) && !a.isPropagationStopped(); )
              (a.type = 1 < g ? k : m.bindType || d),
                (q =
                  (M.get(l, "events") || {})[a.type] && M.get(l, "handle")) &&
                  q.apply(l, f),
                (q = v && l[v]) &&
                  q.apply &&
                  xa(l) &&
                  ((a.result = q.apply(l, f)),
                  !1 === a.result && a.preventDefault());
            a.type = d;
            c ||
              a.isDefaultPrevented() ||
              (m._default && !1 !== m._default.apply(h.pop(), f)) ||
              !xa(b) ||
              !v ||
              !t.isFunction(b[d]) ||
              t.isWindow(b) ||
              ((g = b[v]) && (b[v] = null),
              (t.event.triggered = d),
              b[d](),
              (t.event.triggered = n),
              g && (b[v] = g));
            return a.result;
          }
        }
      },
      simulate: function (a, f, b) {
        a = t.extend(new t.Event(), b, { type: a, isSimulated: !0 });
        t.event.trigger(a, null, f);
      },
    });
    t.fn.extend({
      trigger: function (a, f) {
        return this.each(function () {
          t.event.trigger(a, f, this);
        });
      },
      triggerHandler: function (a, f) {
        var b = this[0];
        if (b) return t.event.trigger(a, f, b, !0);
      },
    });
    t.each(
      "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
        " "
      ),
      function (a, f) {
        t.fn[f] = function (a, b) {
          return 0 < arguments.length
            ? this.on(f, null, a, b)
            : this.trigger(f);
        };
      }
    );
    t.fn.extend({
      hover: function (a, f) {
        return this.mouseenter(a).mouseleave(f || a);
      },
    });
    T.focusin = "onfocusin" in e;
    T.focusin ||
      t.each({ focus: "focusin", blur: "focusout" }, function (a, f) {
        var b = function (a) {
          t.event.simulate(f, a.target, t.event.fix(a));
        };
        t.event.special[f] = {
          setup: function () {
            var c = this.ownerDocument || this,
              g = M.access(c, f);
            g || c.addEventListener(a, b, !0);
            M.access(c, f, (g || 0) + 1);
          },
          teardown: function () {
            var c = this.ownerDocument || this,
              g = M.access(c, f) - 1;
            g
              ? M.access(c, f, g)
              : (c.removeEventListener(a, b, !0), M.remove(c, f));
          },
        };
      });
    var Aa = e.location,
      Pa = t.now(),
      Qa = /\?/;
    t.parseJSON = function (a) {
      return JSON.parse(a + "");
    };
    t.parseXML = function (a) {
      if (!a || "string" !== typeof a) return null;
      try {
        var f = new e.DOMParser().parseFromString(a, "text/xml");
      } catch (dc) {
        f = n;
      }
      (f && !f.getElementsByTagName("parsererror").length) ||
        t.error("Invalid XML: " + a);
      return f;
    };
    var Ub = /#.*$/,
      ib = /([?&])_=[^&]*/,
      Vb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Wb = /^(?:GET|HEAD)$/,
      Xb = /^\/\//,
      jb = {},
      Ka = {},
      kb = "*/".concat("*"),
      Ra = I.createElement("a");
    Ra.href = Aa.href;
    t.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Aa.href,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            Aa.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset\x3dUTF-8",
        accepts: {
          "*": kb,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": t.parseJSON,
          "text xml": t.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (a, f) {
        return f ? aa(aa(a, t.ajaxSettings), f) : aa(t.ajaxSettings, a);
      },
      ajaxPrefilter: ca(jb),
      ajaxTransport: ca(Ka),
      ajax: function (a, f) {
        function b(a, f, b, q) {
          var m = f;
          if (2 !== z) {
            z = 2;
            h && e.clearTimeout(h);
            c = n;
            g = q || "";
            B.readyState = 0 < a ? 4 : 0;
            q = (200 <= a && 300 > a) || 304 === a;
            if (b) {
              var w = l;
              for (
                var r = B, y, p, D, F, H = w.contents, L = w.dataTypes;
                "*" === L[0];

              )
                L.shift(),
                  y === n &&
                    (y = w.mimeType || r.getResponseHeader("Content-Type"));
              if (y)
                for (p in H)
                  if (H[p] && H[p].test(y)) {
                    L.unshift(p);
                    break;
                  }
              if (L[0] in b) D = L[0];
              else {
                for (p in b) {
                  if (!L[0] || w.converters[p + " " + L[0]]) {
                    D = p;
                    break;
                  }
                  F || (F = p);
                }
                D = D || F;
              }
              D ? (D !== L[0] && L.unshift(D), (w = b[D])) : (w = void 0);
            }
            a: {
              b = l;
              y = w;
              p = B;
              D = q;
              var G;
              r = {};
              H = b.dataTypes.slice();
              if (H[1])
                for (E in b.converters) r[E.toLowerCase()] = b.converters[E];
              for (F = H.shift(); F; ) {
                b.responseFields[F] && (p[b.responseFields[F]] = y);
                !K && D && b.dataFilter && (y = b.dataFilter(y, b.dataType));
                var K = F;
                if ((F = H.shift()))
                  if ("*" === F) F = K;
                  else if ("*" !== K && K !== F) {
                    var E = r[K + " " + F] || r["* " + F];
                    if (!E)
                      for (G in r)
                        if (
                          ((w = G.split(" ")),
                          w[1] === F &&
                            (E = r[K + " " + w[0]] || r["* " + w[0]]))
                        ) {
                          !0 === E
                            ? (E = r[G])
                            : !0 !== r[G] && ((F = w[0]), H.unshift(w[1]));
                          break;
                        }
                    if (!0 !== E)
                      if (E && b.throws) y = E(y);
                      else
                        try {
                          y = E(y);
                        } catch (Cb) {
                          w = {
                            state: "parsererror",
                            error: E
                              ? Cb
                              : "No conversion from " + K + " to " + F,
                          };
                          break a;
                        }
                  }
              }
              w = { state: "success", data: y };
            }
            if (q)
              if (
                (l.ifModified &&
                  ((m = B.getResponseHeader("Last-Modified")) &&
                    (t.lastModified[C] = m),
                  (m = B.getResponseHeader("etag")) && (t.etag[C] = m)),
                204 === a || "HEAD" === l.type)
              )
                m = "nocontent";
              else if (304 === a) m = "notmodified";
              else {
                m = w.state;
                var N = w.data;
                var P = w.error;
                q = !P;
              }
            else if (((P = m), a || !m)) (m = "error"), 0 > a && (a = 0);
            B.status = a;
            B.statusText = (f || m) + "";
            q ? u.resolveWith(v, [N, m, B]) : u.rejectWith(v, [B, m, P]);
            B.statusCode(x);
            x = n;
            d && k.trigger(q ? "ajaxSuccess" : "ajaxError", [B, l, q ? N : P]);
            A.fireWith(v, [B, m]);
            d &&
              (k.trigger("ajaxComplete", [B, l]),
              --t.active || t.event.trigger("ajaxStop"));
          }
        }
        "object" === typeof a && ((f = a), (a = n));
        f = f || {};
        var c,
          g,
          q,
          h,
          d,
          m,
          l = t.ajaxSetup({}, f),
          v = l.context || l,
          k = l.context && (v.nodeType || v.jquery) ? t(v) : t.event,
          u = t.Deferred(),
          A = t.Callbacks("once memory"),
          x = l.statusCode || {},
          w = {},
          r = {},
          z = 0,
          y = "canceled",
          B = {
            readyState: 0,
            getResponseHeader: function (a) {
              var f;
              if (2 === z) {
                if (!q)
                  for (q = {}; (f = Vb.exec(g)); ) q[f[1].toLowerCase()] = f[2];
                f = q[a.toLowerCase()];
              }
              return null == f ? null : f;
            },
            getAllResponseHeaders: function () {
              return 2 === z ? g : null;
            },
            setRequestHeader: function (a, f) {
              var b = a.toLowerCase();
              z || ((a = r[b] = r[b] || a), (w[a] = f));
              return this;
            },
            overrideMimeType: function (a) {
              z || (l.mimeType = a);
              return this;
            },
            statusCode: function (a) {
              var f;
              if (a)
                if (2 > z) for (f in a) x[f] = [x[f], a[f]];
                else B.always(a[B.status]);
              return this;
            },
            abort: function (a) {
              a = a || y;
              c && c.abort(a);
              b(0, a);
              return this;
            },
          };
        u.promise(B).complete = A.add;
        B.success = B.done;
        B.error = B.fail;
        l.url = ((a || l.url || Aa.href) + "")
          .replace(Ub, "")
          .replace(Xb, Aa.protocol + "//");
        l.type = f.method || f.type || l.method || l.type;
        l.dataTypes = t
          .trim(l.dataType || "*")
          .toLowerCase()
          .match(ka) || [""];
        if (null == l.crossDomain) {
          a = I.createElement("a");
          try {
            (a.href = l.url),
              (a.href = a.href),
              (l.crossDomain =
                Ra.protocol + "//" + Ra.host !== a.protocol + "//" + a.host);
          } catch (Ma) {
            l.crossDomain = !0;
          }
        }
        l.data &&
          l.processData &&
          "string" !== typeof l.data &&
          (l.data = t.param(l.data, l.traditional));
        ia(jb, l, f, B);
        if (2 === z) return B;
        (d = t.event && l.global) &&
          0 === t.active++ &&
          t.event.trigger("ajaxStart");
        l.type = l.type.toUpperCase();
        l.hasContent = !Wb.test(l.type);
        var C = l.url;
        l.hasContent ||
          (l.data &&
            ((C = l.url += (Qa.test(C) ? "\x26" : "?") + l.data),
            delete l.data),
          !1 === l.cache &&
            (l.url = ib.test(C)
              ? C.replace(ib, "$1_\x3d" + Pa++)
              : C + (Qa.test(C) ? "\x26" : "?") + "_\x3d" + Pa++));
        l.ifModified &&
          (t.lastModified[C] &&
            B.setRequestHeader("If-Modified-Since", t.lastModified[C]),
          t.etag[C] && B.setRequestHeader("If-None-Match", t.etag[C]));
        ((l.data && l.hasContent && !1 !== l.contentType) || f.contentType) &&
          B.setRequestHeader("Content-Type", l.contentType);
        B.setRequestHeader(
          "Accept",
          l.dataTypes[0] && l.accepts[l.dataTypes[0]]
            ? l.accepts[l.dataTypes[0]] +
                ("*" !== l.dataTypes[0] ? ", " + kb + "; q\x3d0.01" : "")
            : l.accepts["*"]
        );
        for (m in l.headers) B.setRequestHeader(m, l.headers[m]);
        if (l.beforeSend && (!1 === l.beforeSend.call(v, B, l) || 2 === z))
          return B.abort();
        y = "abort";
        for (m in { success: 1, error: 1, complete: 1 }) B[m](l[m]);
        if ((c = ia(Ka, l, f, B))) {
          B.readyState = 1;
          d && k.trigger("ajaxSend", [B, l]);
          if (2 === z) return B;
          l.async &&
            0 < l.timeout &&
            (h = e.setTimeout(function () {
              B.abort("timeout");
            }, l.timeout));
          try {
            (z = 1), c.send(w, b);
          } catch (Ma) {
            if (2 > z) b(-1, Ma);
            else throw Ma;
          }
        } else b(-1, "No Transport");
        return B;
      },
      getJSON: function (a, f, b) {
        return t.get(a, f, b, "json");
      },
      getScript: function (a, f) {
        return t.get(a, n, f, "script");
      },
    });
    t.each(["get", "post"], function (a, f) {
      t[f] = function (a, b, c, g) {
        t.isFunction(b) && ((g = g || c), (c = b), (b = n));
        return t.ajax(
          t.extend(
            { url: a, type: f, dataType: g, data: b, success: c },
            t.isPlainObject(a) && a
          )
        );
      };
    });
    t._evalUrl = function (a) {
      return t.ajax({
        url: a,
        type: "GET",
        dataType: "script",
        async: !1,
        global: !1,
        throws: !0,
      });
    };
    t.fn.extend({
      wrapAll: function (a) {
        if (t.isFunction(a))
          return this.each(function (f) {
            t(this).wrapAll(a.call(this, f));
          });
        if (this[0]) {
          var f = t(a, this[0].ownerDocument).eq(0).clone(!0);
          this[0].parentNode && f.insertBefore(this[0]);
          f.map(function () {
            for (var a = this; a.firstElementChild; ) a = a.firstElementChild;
            return a;
          }).append(this);
        }
        return this;
      },
      wrapInner: function (a) {
        return t.isFunction(a)
          ? this.each(function (f) {
              t(this).wrapInner(a.call(this, f));
            })
          : this.each(function () {
              var f = t(this),
                b = f.contents();
              b.length ? b.wrapAll(a) : f.append(a);
            });
      },
      wrap: function (a) {
        var f = t.isFunction(a);
        return this.each(function (b) {
          t(this).wrapAll(f ? a.call(this, b) : a);
        });
      },
      unwrap: function () {
        return this.parent()
          .each(function () {
            t.nodeName(this, "body") || t(this).replaceWith(this.childNodes);
          })
          .end();
      },
    });
    t.expr.filters.hidden = function (a) {
      return !t.expr.filters.visible(a);
    };
    t.expr.filters.visible = function (a) {
      return (
        0 < a.offsetWidth || 0 < a.offsetHeight || 0 < a.getClientRects().length
      );
    };
    var Yb = /%20/g,
      wb = /\[\]$/,
      lb = /\r?\n/g,
      Zb = /^(?:submit|button|image|reset|file)$/i,
      $b = /^(?:input|select|textarea|keygen)/i;
    t.param = function (a, f) {
      var b,
        c = [],
        g = function (a, f) {
          f = t.isFunction(f) ? f() : null == f ? "" : f;
          c[c.length] = encodeURIComponent(a) + "\x3d" + encodeURIComponent(f);
        };
      f === n && (f = t.ajaxSettings && t.ajaxSettings.traditional);
      if (t.isArray(a) || (a.jquery && !t.isPlainObject(a)))
        t.each(a, function () {
          g(this.name, this.value);
        });
      else for (b in a) da(b, a[b], f, g);
      return c.join("\x26").replace(Yb, "+");
    };
    t.fn.extend({
      serialize: function () {
        return t.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var a = t.prop(this, "elements");
          return a ? t.makeArray(a) : this;
        })
          .filter(function () {
            var a = this.type;
            return (
              this.name &&
              !t(this).is(":disabled") &&
              $b.test(this.nodeName) &&
              !Zb.test(a) &&
              (this.checked || !eb.test(a))
            );
          })
          .map(function (a, f) {
            a = t(this).val();
            return null == a
              ? null
              : t.isArray(a)
              ? t.map(a, function (a) {
                  return { name: f.name, value: a.replace(lb, "\r\n") };
                })
              : { name: f.name, value: a.replace(lb, "\r\n") };
          })
          .get();
      },
    });
    t.ajaxSettings.xhr = function () {
      try {
        return new e.XMLHttpRequest();
      } catch (G) {}
    };
    var ac = { 0: 200, 1223: 204 },
      Ba = t.ajaxSettings.xhr();
    T.cors = !!Ba && "withCredentials" in Ba;
    T.ajax = Ba = !!Ba;
    t.ajaxTransport(function (a) {
      var f, b;
      if (T.cors || (Ba && !a.crossDomain))
        return {
          send: function (c, g) {
            var q,
              h = a.xhr();
            h.open(a.type, a.url, a.async, a.username, a.password);
            if (a.xhrFields) for (q in a.xhrFields) h[q] = a.xhrFields[q];
            a.mimeType && h.overrideMimeType && h.overrideMimeType(a.mimeType);
            a.crossDomain ||
              c["X-Requested-With"] ||
              (c["X-Requested-With"] = "XMLHttpRequest");
            for (q in c) h.setRequestHeader(q, c[q]);
            f = function (a) {
              return function () {
                f &&
                  ((f =
                    b =
                    h.onload =
                    h.onerror =
                    h.onabort =
                    h.onreadystatechange =
                      null),
                  "abort" === a
                    ? h.abort()
                    : "error" === a
                    ? "number" !== typeof h.status
                      ? g(0, "error")
                      : g(h.status, h.statusText)
                    : g(
                        ac[h.status] || h.status,
                        h.statusText,
                        "text" !== (h.responseType || "text") ||
                          "string" !== typeof h.responseText
                          ? { binary: h.response }
                          : { text: h.responseText },
                        h.getAllResponseHeaders()
                      ));
              };
            };
            h.onload = f();
            b = h.onerror = f("error");
            h.onabort !== n
              ? (h.onabort = b)
              : (h.onreadystatechange = function () {
                  4 === h.readyState &&
                    e.setTimeout(function () {
                      f && b();
                    });
                });
            f = f("abort");
            try {
              h.send((a.hasContent && a.data) || null);
            } catch (qb) {
              if (f) throw qb;
            }
          },
          abort: function () {
            f && f();
          },
        };
    });
    t.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (a) {
          t.globalEval(a);
          return a;
        },
      },
    });
    t.ajaxPrefilter("script", function (a) {
      a.cache === n && (a.cache = !1);
      a.crossDomain && (a.type = "GET");
    });
    t.ajaxTransport("script", function (a) {
      if (a.crossDomain) {
        var f, b;
        return {
          send: function (c, g) {
            f = t("\x3cscript\x3e")
              .prop({ charset: a.scriptCharset, src: a.url })
              .on(
                "load error",
                (b = function (a) {
                  f.remove();
                  b = null;
                  a && g("error" === a.type ? 404 : 200, a.type);
                })
              );
            I.head.appendChild(f[0]);
          },
          abort: function () {
            b && b();
          },
        };
      }
    });
    var mb = [],
      Sa = /(=)\?(?=&|$)|\?\?/;
    t.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function () {
        var a = mb.pop() || t.expando + "_" + Pa++;
        this[a] = !0;
        return a;
      },
    });
    t.ajaxPrefilter("json jsonp", function (a, f, b) {
      var c,
        g =
          !1 !== a.jsonp &&
          (Sa.test(a.url)
            ? "url"
            : "string" === typeof a.data &&
              0 ===
                (a.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Sa.test(a.data) &&
              "data");
      if (g || "jsonp" === a.dataTypes[0]) {
        var q = (a.jsonpCallback = t.isFunction(a.jsonpCallback)
          ? a.jsonpCallback()
          : a.jsonpCallback);
        g
          ? (a[g] = a[g].replace(Sa, "$1" + q))
          : !1 !== a.jsonp &&
            (a.url += (Qa.test(a.url) ? "\x26" : "?") + a.jsonp + "\x3d" + q);
        a.converters["script json"] = function () {
          c || t.error(q + " was not called");
          return c[0];
        };
        a.dataTypes[0] = "json";
        var h = e[q];
        e[q] = function () {
          c = arguments;
        };
        b.always(function () {
          h === n ? t(e).removeProp(q) : (e[q] = h);
          a[q] && ((a.jsonpCallback = f.jsonpCallback), mb.push(q));
          c && t.isFunction(h) && h(c[0]);
          c = h = n;
        });
        return "script";
      }
    });
    t.parseHTML = function (a, f, b) {
      if (!a || "string" !== typeof a) return null;
      "boolean" === typeof f && ((b = f), (f = !1));
      f = f || I;
      var c = cb.exec(a);
      b = !b && [];
      if (c) return [f.createElement(c[1])];
      c = u([a], f, b);
      b && b.length && t(b).remove();
      return t.merge([], c.childNodes);
    };
    var nb = t.fn.load;
    t.fn.load = function (a, f, b) {
      if ("string" !== typeof a && nb) return nb.apply(this, arguments);
      var c,
        g,
        q = this,
        h = a.indexOf(" ");
      if (-1 < h) {
        var d = t.trim(a.slice(h));
        a = a.slice(0, h);
      }
      t.isFunction(f)
        ? ((b = f), (f = n))
        : f && "object" === typeof f && (c = "POST");
      0 < q.length &&
        t
          .ajax({ url: a, type: c || "GET", dataType: "html", data: f })
          .done(function (a) {
            g = arguments;
            q.html(d ? t("\x3cdiv\x3e").append(t.parseHTML(a)).find(d) : a);
          })
          .always(
            b &&
              function (a, f) {
                q.each(function () {
                  b.apply(this, g || [a.responseText, f, a]);
                });
              }
          );
      return this;
    };
    t.each(
      "ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(
        " "
      ),
      function (a, f) {
        t.fn[f] = function (a) {
          return this.on(f, a);
        };
      }
    );
    t.expr.filters.animated = function (a) {
      return t.grep(t.timers, function (f) {
        return a === f.elem;
      }).length;
    };
    t.offset = {
      setOffset: function (a, f, b) {
        var c = t.css(a, "position"),
          g = t(a),
          q = {};
        "static" === c && (a.style.position = "relative");
        var h = g.offset();
        var d = t.css(a, "top");
        var m = t.css(a, "left");
        ("absolute" === c || "fixed" === c) && -1 < (d + m).indexOf("auto")
          ? ((m = g.position()), (d = m.top), (m = m.left))
          : ((d = parseFloat(d) || 0), (m = parseFloat(m) || 0));
        t.isFunction(f) && (f = f.call(a, b, t.extend({}, h)));
        null != f.top && (q.top = f.top - h.top + d);
        null != f.left && (q.left = f.left - h.left + m);
        "using" in f ? f.using.call(a, q) : g.css(q);
      },
    };
    t.fn.extend({
      offset: function (a) {
        if (arguments.length)
          return a === n
            ? this
            : this.each(function (f) {
                t.offset.setOffset(this, a, f);
              });
        var f = this[0];
        var b = { top: 0, left: 0 },
          c = f && f.ownerDocument;
        if (c) {
          var g = c.documentElement;
          if (!t.contains(g, f)) return b;
          b = f.getBoundingClientRect();
          f = na(c);
          return {
            top: b.top + f.pageYOffset - g.clientTop,
            left: b.left + f.pageXOffset - g.clientLeft,
          };
        }
      },
      position: function () {
        if (this[0]) {
          var a = this[0],
            f = { top: 0, left: 0 };
          if ("fixed" === t.css(a, "position"))
            var b = a.getBoundingClientRect();
          else {
            var c = this.offsetParent();
            b = this.offset();
            t.nodeName(c[0], "html") || (f = c.offset());
            f.top += t.css(c[0], "borderTopWidth", !0);
            f.left += t.css(c[0], "borderLeftWidth", !0);
          }
          return {
            top: b.top - f.top - t.css(a, "marginTop", !0),
            left: b.left - f.left - t.css(a, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var a = this.offsetParent;
            a && "static" === t.css(a, "position");

          )
            a = a.offsetParent;
          return a || ya;
        });
      },
    });
    t.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (a, f) {
        var b = "pageYOffset" === f;
        t.fn[a] = function (c) {
          return ja(
            this,
            function (a, c, g) {
              var q = na(a);
              if (g === n) return q ? q[f] : a[c];
              q
                ? q.scrollTo(b ? q.pageXOffset : g, b ? g : q.pageYOffset)
                : (a[c] = g);
            },
            a,
            c,
            arguments.length
          );
        };
      }
    );
    t.each(["top", "left"], function (a, f) {
      t.cssHooks[f] = N(T.pixelPosition, function (a, b) {
        if (b) return (b = K(a, f)), Ja.test(b) ? t(a).position()[f] + "px" : b;
      });
    });
    t.each({ Height: "height", Width: "width" }, function (a, f) {
      t.each(
        { padding: "inner" + a, content: f, "": "outer" + a },
        function (b, c) {
          t.fn[c] = function (c, g) {
            var q = arguments.length && (b || "boolean" !== typeof c),
              h = b || (!0 === c || !0 === g ? "margin" : "border");
            return ja(
              this,
              function (f, b, c) {
                return t.isWindow(f)
                  ? f.document.documentElement["client" + a]
                  : 9 === f.nodeType
                  ? ((b = f.documentElement),
                    Math.max(
                      f.body["scroll" + a],
                      b["scroll" + a],
                      f.body["offset" + a],
                      b["offset" + a],
                      b["client" + a]
                    ))
                  : c === n
                  ? t.css(f, b, h)
                  : t.style(f, b, c, h);
              },
              f,
              q ? c : n,
              q,
              null
            );
          };
        }
      );
    });
    t.fn.extend({
      bind: function (a, f, b) {
        return this.on(a, null, f, b);
      },
      unbind: function (a, f) {
        return this.off(a, null, f);
      },
      delegate: function (a, f, b, c) {
        return this.on(f, a, b, c);
      },
      undelegate: function (a, f, b) {
        return 1 === arguments.length
          ? this.off(a, "**")
          : this.off(f, a || "**", b);
      },
      size: function () {
        return this.length;
      },
    });
    t.fn.andSelf = t.fn.addBack;
    "function" === typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return t;
      });
    var bc = e.jQuery,
      cc = e.$;
    t.noConflict = function (a) {
      e.$ === t && (e.$ = cc);
      a && e.jQuery === t && (e.jQuery = bc);
      return t;
    };
    d || (e.jQuery = e.$ = t);
    return t;
  });
  p.jQuery = jQuery;
  jQuery.noConflict(!0);
})(window, ChemDoodle.lib);
(function (e) {
  "function" === typeof define && define.amd
    ? define(["jquery"], e)
    : "object" === typeof exports
    ? (module.exports = e)
    : e(ChemDoodle.lib.jQuery);
})(function (e) {
  function p(g) {
    var h = g || window.event,
      d = k.call(arguments, 1),
      m = 0,
      x = 0,
      u = 0,
      w = 0;
    g = e.event.fix(h);
    g.type = "mousewheel";
    "detail" in h && (x = -1 * h.detail);
    "wheelDelta" in h && (x = h.wheelDelta);
    "wheelDeltaY" in h && (x = h.wheelDeltaY);
    "wheelDeltaX" in h && (m = -1 * h.wheelDeltaX);
    "axis" in h && h.axis === h.HORIZONTAL_AXIS && ((m = -1 * x), (x = 0));
    var r = 0 === x ? m : x;
    "deltaY" in h && (r = x = -1 * h.deltaY);
    "deltaX" in h && ((m = h.deltaX), 0 === x && (r = -1 * m));
    if (0 !== x || 0 !== m) {
      if (1 === h.deltaMode) {
        var y = e.data(this, "mousewheel-line-height");
        r *= y;
        x *= y;
        m *= y;
      } else
        2 === h.deltaMode &&
          ((y = e.data(this, "mousewheel-page-height")),
          (r *= y),
          (x *= y),
          (m *= y));
      y = Math.max(Math.abs(x), Math.abs(m));
      if (!c || y < c)
        (c = y),
          a.settings.adjustOldDeltas &&
            "mousewheel" === h.type &&
            0 === y % 120 &&
            (c /= 40);
      a.settings.adjustOldDeltas &&
        "mousewheel" === h.type &&
        0 === y % 120 &&
        ((r /= 40), (m /= 40), (x /= 40));
      r = Math[1 <= r ? "floor" : "ceil"](r / c);
      m = Math[1 <= m ? "floor" : "ceil"](m / c);
      x = Math[1 <= x ? "floor" : "ceil"](x / c);
      a.settings.normalizeOffset &&
        this.getBoundingClientRect &&
        ((h = this.getBoundingClientRect()),
        (u = g.clientX - h.left),
        (w = g.clientY - h.top));
      g.deltaX = m;
      g.deltaY = x;
      g.deltaFactor = c;
      g.offsetX = u;
      g.offsetY = w;
      g.deltaMode = 0;
      d.unshift(g, r, m, x);
      b && clearTimeout(b);
      b = setTimeout(n, 200);
      return (e.event.dispatch || e.event.handle).apply(this, d);
    }
  }
  function n() {
    c = null;
  }
  var r = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
    d =
      "onwheel" in document || 9 <= document.documentMode
        ? ["wheel"]
        : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
    k = Array.prototype.slice,
    b,
    c;
  if (e.event.fixHooks)
    for (var h = r.length; h; ) e.event.fixHooks[r[--h]] = e.event.mouseHooks;
  var a = (e.event.special.mousewheel = {
    version: "3.1.12",
    setup: function () {
      if (this.addEventListener)
        for (var b = d.length; b; ) this.addEventListener(d[--b], p, !1);
      else this.onmousewheel = p;
      e.data(this, "mousewheel-line-height", a.getLineHeight(this));
      e.data(this, "mousewheel-page-height", a.getPageHeight(this));
    },
    teardown: function () {
      if (this.removeEventListener)
        for (var a = d.length; a; ) this.removeEventListener(d[--a], p, !1);
      else this.onmousewheel = null;
      e.removeData(this, "mousewheel-line-height");
      e.removeData(this, "mousewheel-page-height");
    },
    getLineHeight: function (a) {
      a = e(a);
      var b = a["offsetParent" in e.fn ? "offsetParent" : "parent"]();
      b.length || (b = e("body"));
      return (
        parseInt(b.css("fontSize"), 10) || parseInt(a.css("fontSize"), 10) || 16
      );
    },
    getPageHeight: function (a) {
      return e(a).height();
    },
    settings: { adjustOldDeltas: !0, normalizeOffset: !0 },
  });
  e.fn.extend({
    mousewheel: function (a) {
      return a ? this.bind("mousewheel", a) : this.trigger("mousewheel");
    },
    unmousewheel: function (a) {
      return this.unbind("mousewheel", a);
    },
  });
});
(function (e, p) {
  "object" === typeof exports
    ? (module.exports = p(global))
    : "function" === typeof define && define.amd
    ? define([], function () {
        return p(e);
      })
    : p(e);
})(ChemDoodle.lib, function (e) {
  function p(a) {
    return (d = a);
  }
  function n() {
    return (d = "undefined" !== typeof Float32Array ? Float32Array : Array);
  }
  var r = {};
  (function () {
    if ("undefined" != typeof Float32Array) {
      var a = new Float32Array(1),
        b = new Int32Array(a.buffer);
      r.invsqrt = function (f) {
        a[0] = f;
        b[0] = 1597463007 - (b[0] >> 1);
        var c = a[0];
        return c * (1.5 - 0.5 * f * c * c);
      };
    } else
      r.invsqrt = function (a) {
        return 1 / Math.sqrt(a);
      };
  })();
  var d = null;
  n();
  var k = {
      create: function (a) {
        var f = new d(3);
        a
          ? ((f[0] = a[0]), (f[1] = a[1]), (f[2] = a[2]))
          : (f[0] = f[1] = f[2] = 0);
        return f;
      },
      createFrom: function (a, b, c) {
        var f = new d(3);
        f[0] = a;
        f[1] = b;
        f[2] = c;
        return f;
      },
      set: function (a, b) {
        b[0] = a[0];
        b[1] = a[1];
        b[2] = a[2];
        return b;
      },
      equal: function (a, b) {
        return (
          a === b ||
          (1e-6 > Math.abs(a[0] - b[0]) &&
            1e-6 > Math.abs(a[1] - b[1]) &&
            1e-6 > Math.abs(a[2] - b[2]))
        );
      },
      add: function (a, b, c) {
        if (!c || a === c)
          return (a[0] += b[0]), (a[1] += b[1]), (a[2] += b[2]), a;
        c[0] = a[0] + b[0];
        c[1] = a[1] + b[1];
        c[2] = a[2] + b[2];
        return c;
      },
      subtract: function (a, b, c) {
        if (!c || a === c)
          return (a[0] -= b[0]), (a[1] -= b[1]), (a[2] -= b[2]), a;
        c[0] = a[0] - b[0];
        c[1] = a[1] - b[1];
        c[2] = a[2] - b[2];
        return c;
      },
      multiply: function (a, b, c) {
        if (!c || a === c)
          return (a[0] *= b[0]), (a[1] *= b[1]), (a[2] *= b[2]), a;
        c[0] = a[0] * b[0];
        c[1] = a[1] * b[1];
        c[2] = a[2] * b[2];
        return c;
      },
      negate: function (a, b) {
        b || (b = a);
        b[0] = -a[0];
        b[1] = -a[1];
        b[2] = -a[2];
        return b;
      },
      scale: function (a, b, c) {
        if (!c || a === c) return (a[0] *= b), (a[1] *= b), (a[2] *= b), a;
        c[0] = a[0] * b;
        c[1] = a[1] * b;
        c[2] = a[2] * b;
        return c;
      },
      normalize: function (a, b) {
        b || (b = a);
        var f = a[0],
          c = a[1];
        a = a[2];
        var g = Math.sqrt(f * f + c * c + a * a);
        if (!g) return (b[0] = 0), (b[1] = 0), (b[2] = 0), b;
        if (1 === g) return (b[0] = f), (b[1] = c), (b[2] = a), b;
        g = 1 / g;
        b[0] = f * g;
        b[1] = c * g;
        b[2] = a * g;
        return b;
      },
      cross: function (a, b, c) {
        c || (c = a);
        var f = a[0],
          g = a[1];
        a = a[2];
        var q = b[0],
          h = b[1];
        b = b[2];
        c[0] = g * b - a * h;
        c[1] = a * q - f * b;
        c[2] = f * h - g * q;
        return c;
      },
      length: function (a) {
        var f = a[0],
          b = a[1];
        a = a[2];
        return Math.sqrt(f * f + b * b + a * a);
      },
      squaredLength: function (a) {
        var f = a[0],
          b = a[1];
        a = a[2];
        return f * f + b * b + a * a;
      },
      dot: function (a, b) {
        return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
      },
      direction: function (a, b, c) {
        c || (c = a);
        var f = a[0] - b[0],
          g = a[1] - b[1];
        a = a[2] - b[2];
        b = Math.sqrt(f * f + g * g + a * a);
        if (!b) return (c[0] = 0), (c[1] = 0), (c[2] = 0), c;
        b = 1 / b;
        c[0] = f * b;
        c[1] = g * b;
        c[2] = a * b;
        return c;
      },
      lerp: function (a, b, c, g) {
        g || (g = a);
        g[0] = a[0] + c * (b[0] - a[0]);
        g[1] = a[1] + c * (b[1] - a[1]);
        g[2] = a[2] + c * (b[2] - a[2]);
        return g;
      },
      dist: function (a, b) {
        var f = b[0] - a[0],
          c = b[1] - a[1];
        a = b[2] - a[2];
        return Math.sqrt(f * f + c * c + a * a);
      },
    },
    b = null,
    c = new d(4);
  k.unproject = function (a, g, h, d, l) {
    l || (l = a);
    b || (b = m.create());
    var f = b;
    c[0] = (2 * (a[0] - d[0])) / d[2] - 1;
    c[1] = (2 * (a[1] - d[1])) / d[3] - 1;
    c[2] = 2 * a[2] - 1;
    c[3] = 1;
    m.multiply(h, g, f);
    if (!m.inverse(f)) return null;
    m.multiplyVec4(f, c);
    if (0 === c[3]) return null;
    l[0] = c[0] / c[3];
    l[1] = c[1] / c[3];
    l[2] = c[2] / c[3];
    return l;
  };
  var h = k.createFrom(1, 0, 0),
    a = k.createFrom(0, 1, 0),
    g = k.createFrom(0, 0, 1),
    l = k.create();
  k.rotationTo = function (f, b, c) {
    c || (c = x.create());
    var q = k.dot(f, b);
    if (1 <= q) x.set(u, c);
    else if (-0.999999 > q)
      k.cross(h, f, l),
        1e-6 > k.length(l) && k.cross(a, f, l),
        1e-6 > k.length(l) && k.cross(g, f, l),
        k.normalize(l),
        x.fromAngleAxis(Math.PI, l, c);
    else {
      q = Math.sqrt(2 * (1 + q));
      var d = 1 / q;
      k.cross(f, b, l);
      c[0] = l[0] * d;
      c[1] = l[1] * d;
      c[2] = l[2] * d;
      c[3] = 0.5 * q;
      x.normalize(c);
    }
    1 < c[3] ? (c[3] = 1) : -1 > c[3] && (c[3] = -1);
    return c;
  };
  k.str = function (a) {
    return "[" + a[0] + ", " + a[1] + ", " + a[2] + "]";
  };
  var v = {
      create: function (a) {
        var f = new d(9);
        a
          ? ((f[0] = a[0]),
            (f[1] = a[1]),
            (f[2] = a[2]),
            (f[3] = a[3]),
            (f[4] = a[4]),
            (f[5] = a[5]),
            (f[6] = a[6]),
            (f[7] = a[7]),
            (f[8] = a[8]))
          : (f[0] = f[1] = f[2] = f[3] = f[4] = f[5] = f[6] = f[7] = f[8] = 0);
        return f;
      },
      createFrom: function (a, b, c, g, h, m, l, v, e) {
        var f = new d(9);
        f[0] = a;
        f[1] = b;
        f[2] = c;
        f[3] = g;
        f[4] = h;
        f[5] = m;
        f[6] = l;
        f[7] = v;
        f[8] = e;
        return f;
      },
      determinant: function (a) {
        var f = a[3],
          b = a[4],
          c = a[5],
          g = a[6],
          h = a[7],
          d = a[8];
        return (
          a[0] * (d * b - c * h) +
          a[1] * (-d * f + c * g) +
          a[2] * (h * f - b * g)
        );
      },
      inverse: function (a, b) {
        var f = a[0],
          c = a[1],
          g = a[2],
          h = a[3],
          q = a[4],
          d = a[5],
          m = a[6],
          l = a[7];
        a = a[8];
        var e = a * q - d * l,
          k = -a * h + d * m,
          u = l * h - q * m,
          x = f * e + c * k + g * u;
        if (!x) return null;
        x = 1 / x;
        b || (b = v.create());
        b[0] = e * x;
        b[1] = (-a * c + g * l) * x;
        b[2] = (d * c - g * q) * x;
        b[3] = k * x;
        b[4] = (a * f - g * m) * x;
        b[5] = (-d * f + g * h) * x;
        b[6] = u * x;
        b[7] = (-l * f + c * m) * x;
        b[8] = (q * f - c * h) * x;
        return b;
      },
      multiply: function (a, b, c) {
        c || (c = a);
        var f = a[0],
          g = a[1],
          h = a[2],
          q = a[3],
          d = a[4],
          m = a[5],
          l = a[6],
          v = a[7];
        a = a[8];
        var e = b[0],
          k = b[1],
          u = b[2],
          x = b[3],
          w = b[4],
          A = b[5],
          r = b[6],
          n = b[7];
        b = b[8];
        c[0] = e * f + k * q + u * l;
        c[1] = e * g + k * d + u * v;
        c[2] = e * h + k * m + u * a;
        c[3] = x * f + w * q + A * l;
        c[4] = x * g + w * d + A * v;
        c[5] = x * h + w * m + A * a;
        c[6] = r * f + n * q + b * l;
        c[7] = r * g + n * d + b * v;
        c[8] = r * h + n * m + b * a;
        return c;
      },
      multiplyVec2: function (a, b, c) {
        c || (c = b);
        var f = b[0];
        b = b[1];
        c[0] = f * a[0] + b * a[3] + a[6];
        c[1] = f * a[1] + b * a[4] + a[7];
        return c;
      },
      multiplyVec3: function (a, b, c) {
        c || (c = b);
        var f = b[0],
          g = b[1];
        b = b[2];
        c[0] = f * a[0] + g * a[3] + b * a[6];
        c[1] = f * a[1] + g * a[4] + b * a[7];
        c[2] = f * a[2] + g * a[5] + b * a[8];
        return c;
      },
      set: function (a, b) {
        b[0] = a[0];
        b[1] = a[1];
        b[2] = a[2];
        b[3] = a[3];
        b[4] = a[4];
        b[5] = a[5];
        b[6] = a[6];
        b[7] = a[7];
        b[8] = a[8];
        return b;
      },
      equal: function (a, b) {
        return (
          a === b ||
          (1e-6 > Math.abs(a[0] - b[0]) &&
            1e-6 > Math.abs(a[1] - b[1]) &&
            1e-6 > Math.abs(a[2] - b[2]) &&
            1e-6 > Math.abs(a[3] - b[3]) &&
            1e-6 > Math.abs(a[4] - b[4]) &&
            1e-6 > Math.abs(a[5] - b[5]) &&
            1e-6 > Math.abs(a[6] - b[6]) &&
            1e-6 > Math.abs(a[7] - b[7]) &&
            1e-6 > Math.abs(a[8] - b[8]))
        );
      },
      identity: function (a) {
        a || (a = v.create());
        a[0] = 1;
        a[1] = 0;
        a[2] = 0;
        a[3] = 0;
        a[4] = 1;
        a[5] = 0;
        a[6] = 0;
        a[7] = 0;
        a[8] = 1;
        return a;
      },
      transpose: function (a, b) {
        if (!b || a === b) {
          b = a[1];
          var f = a[2],
            c = a[5];
          a[1] = a[3];
          a[2] = a[6];
          a[3] = b;
          a[5] = a[7];
          a[6] = f;
          a[7] = c;
          return a;
        }
        b[0] = a[0];
        b[1] = a[3];
        b[2] = a[6];
        b[3] = a[1];
        b[4] = a[4];
        b[5] = a[7];
        b[6] = a[2];
        b[7] = a[5];
        b[8] = a[8];
        return b;
      },
      toMat4: function (a, b) {
        b || (b = m.create());
        b[15] = 1;
        b[14] = 0;
        b[13] = 0;
        b[12] = 0;
        b[11] = 0;
        b[10] = a[8];
        b[9] = a[7];
        b[8] = a[6];
        b[7] = 0;
        b[6] = a[5];
        b[5] = a[4];
        b[4] = a[3];
        b[3] = 0;
        b[2] = a[2];
        b[1] = a[1];
        b[0] = a[0];
        return b;
      },
      str: function (a) {
        return (
          "[" +
          a[0] +
          ", " +
          a[1] +
          ", " +
          a[2] +
          ", " +
          a[3] +
          ", " +
          a[4] +
          ", " +
          a[5] +
          ", " +
          a[6] +
          ", " +
          a[7] +
          ", " +
          a[8] +
          "]"
        );
      },
    },
    m = {
      create: function (a) {
        var f = new d(16);
        a &&
          ((f[0] = a[0]),
          (f[1] = a[1]),
          (f[2] = a[2]),
          (f[3] = a[3]),
          (f[4] = a[4]),
          (f[5] = a[5]),
          (f[6] = a[6]),
          (f[7] = a[7]),
          (f[8] = a[8]),
          (f[9] = a[9]),
          (f[10] = a[10]),
          (f[11] = a[11]),
          (f[12] = a[12]),
          (f[13] = a[13]),
          (f[14] = a[14]),
          (f[15] = a[15]));
        return f;
      },
      createFrom: function (a, b, c, g, h, m, l, v, e, k, u, x, w, r, n, z) {
        var f = new d(16);
        f[0] = a;
        f[1] = b;
        f[2] = c;
        f[3] = g;
        f[4] = h;
        f[5] = m;
        f[6] = l;
        f[7] = v;
        f[8] = e;
        f[9] = k;
        f[10] = u;
        f[11] = x;
        f[12] = w;
        f[13] = r;
        f[14] = n;
        f[15] = z;
        return f;
      },
      set: function (a, b) {
        b[0] = a[0];
        b[1] = a[1];
        b[2] = a[2];
        b[3] = a[3];
        b[4] = a[4];
        b[5] = a[5];
        b[6] = a[6];
        b[7] = a[7];
        b[8] = a[8];
        b[9] = a[9];
        b[10] = a[10];
        b[11] = a[11];
        b[12] = a[12];
        b[13] = a[13];
        b[14] = a[14];
        b[15] = a[15];
        return b;
      },
      equal: function (a, b) {
        return (
          a === b ||
          (1e-6 > Math.abs(a[0] - b[0]) &&
            1e-6 > Math.abs(a[1] - b[1]) &&
            1e-6 > Math.abs(a[2] - b[2]) &&
            1e-6 > Math.abs(a[3] - b[3]) &&
            1e-6 > Math.abs(a[4] - b[4]) &&
            1e-6 > Math.abs(a[5] - b[5]) &&
            1e-6 > Math.abs(a[6] - b[6]) &&
            1e-6 > Math.abs(a[7] - b[7]) &&
            1e-6 > Math.abs(a[8] - b[8]) &&
            1e-6 > Math.abs(a[9] - b[9]) &&
            1e-6 > Math.abs(a[10] - b[10]) &&
            1e-6 > Math.abs(a[11] - b[11]) &&
            1e-6 > Math.abs(a[12] - b[12]) &&
            1e-6 > Math.abs(a[13] - b[13]) &&
            1e-6 > Math.abs(a[14] - b[14]) &&
            1e-6 > Math.abs(a[15] - b[15]))
        );
      },
      identity: function (a) {
        a || (a = m.create());
        a[0] = 1;
        a[1] = 0;
        a[2] = 0;
        a[3] = 0;
        a[4] = 0;
        a[5] = 1;
        a[6] = 0;
        a[7] = 0;
        a[8] = 0;
        a[9] = 0;
        a[10] = 1;
        a[11] = 0;
        a[12] = 0;
        a[13] = 0;
        a[14] = 0;
        a[15] = 1;
        return a;
      },
      transpose: function (a, b) {
        if (!b || a === b) {
          b = a[1];
          var f = a[2],
            c = a[3],
            g = a[6],
            h = a[7],
            d = a[11];
          a[1] = a[4];
          a[2] = a[8];
          a[3] = a[12];
          a[4] = b;
          a[6] = a[9];
          a[7] = a[13];
          a[8] = f;
          a[9] = g;
          a[11] = a[14];
          a[12] = c;
          a[13] = h;
          a[14] = d;
          return a;
        }
        b[0] = a[0];
        b[1] = a[4];
        b[2] = a[8];
        b[3] = a[12];
        b[4] = a[1];
        b[5] = a[5];
        b[6] = a[9];
        b[7] = a[13];
        b[8] = a[2];
        b[9] = a[6];
        b[10] = a[10];
        b[11] = a[14];
        b[12] = a[3];
        b[13] = a[7];
        b[14] = a[11];
        b[15] = a[15];
        return b;
      },
      determinant: function (a) {
        var f = a[0],
          b = a[1],
          c = a[2],
          g = a[3],
          h = a[4],
          d = a[5],
          m = a[6],
          l = a[7],
          v = a[8],
          e = a[9],
          k = a[10],
          u = a[11],
          x = a[12],
          w = a[13],
          r = a[14];
        a = a[15];
        return (
          x * e * m * g -
          v * w * m * g -
          x * d * k * g +
          h * w * k * g +
          v * d * r * g -
          h * e * r * g -
          x * e * c * l +
          v * w * c * l +
          x * b * k * l -
          f * w * k * l -
          v * b * r * l +
          f * e * r * l +
          x * d * c * u -
          h * w * c * u -
          x * b * m * u +
          f * w * m * u +
          h * b * r * u -
          f * d * r * u -
          v * d * c * a +
          h * e * c * a +
          v * b * m * a -
          f * e * m * a -
          h * b * k * a +
          f * d * k * a
        );
      },
      inverse: function (a, b) {
        b || (b = a);
        var f = a[0],
          c = a[1],
          g = a[2],
          h = a[3],
          d = a[4],
          m = a[5],
          q = a[6],
          l = a[7],
          v = a[8],
          e = a[9],
          k = a[10],
          u = a[11],
          x = a[12],
          w = a[13],
          r = a[14];
        a = a[15];
        var n = f * m - c * d,
          z = f * q - g * d,
          y = f * l - h * d,
          p = c * q - g * m,
          R = c * l - h * m,
          U = g * l - h * q,
          ca = v * w - e * x,
          ia = v * r - k * x,
          aa = v * a - u * x,
          da = e * r - k * w,
          na = e * a - u * w,
          ea = k * a - u * r,
          I = n * ea - z * na + y * da + p * aa - R * ia + U * ca;
        if (!I) return null;
        I = 1 / I;
        b[0] = (m * ea - q * na + l * da) * I;
        b[1] = (-c * ea + g * na - h * da) * I;
        b[2] = (w * U - r * R + a * p) * I;
        b[3] = (-e * U + k * R - u * p) * I;
        b[4] = (-d * ea + q * aa - l * ia) * I;
        b[5] = (f * ea - g * aa + h * ia) * I;
        b[6] = (-x * U + r * y - a * z) * I;
        b[7] = (v * U - k * y + u * z) * I;
        b[8] = (d * na - m * aa + l * ca) * I;
        b[9] = (-f * na + c * aa - h * ca) * I;
        b[10] = (x * R - w * y + a * n) * I;
        b[11] = (-v * R + e * y - u * n) * I;
        b[12] = (-d * da + m * ia - q * ca) * I;
        b[13] = (f * da - c * ia + g * ca) * I;
        b[14] = (-x * p + w * z - r * n) * I;
        b[15] = (v * p - e * z + k * n) * I;
        return b;
      },
      toRotationMat: function (a, b) {
        b || (b = m.create());
        b[0] = a[0];
        b[1] = a[1];
        b[2] = a[2];
        b[3] = a[3];
        b[4] = a[4];
        b[5] = a[5];
        b[6] = a[6];
        b[7] = a[7];
        b[8] = a[8];
        b[9] = a[9];
        b[10] = a[10];
        b[11] = a[11];
        b[12] = 0;
        b[13] = 0;
        b[14] = 0;
        b[15] = 1;
        return b;
      },
      toMat3: function (a, b) {
        b || (b = v.create());
        b[0] = a[0];
        b[1] = a[1];
        b[2] = a[2];
        b[3] = a[4];
        b[4] = a[5];
        b[5] = a[6];
        b[6] = a[8];
        b[7] = a[9];
        b[8] = a[10];
        return b;
      },
      toInverseMat3: function (a, b) {
        var f = a[0],
          c = a[1],
          g = a[2],
          h = a[4],
          d = a[5],
          m = a[6],
          q = a[8],
          l = a[9];
        a = a[10];
        var e = a * d - m * l,
          k = -a * h + m * q,
          u = l * h - d * q,
          x = f * e + c * k + g * u;
        if (!x) return null;
        x = 1 / x;
        b || (b = v.create());
        b[0] = e * x;
        b[1] = (-a * c + g * l) * x;
        b[2] = (m * c - g * d) * x;
        b[3] = k * x;
        b[4] = (a * f - g * q) * x;
        b[5] = (-m * f + g * h) * x;
        b[6] = u * x;
        b[7] = (-l * f + c * q) * x;
        b[8] = (d * f - c * h) * x;
        return b;
      },
      multiply: function (a, b, c) {
        c || (c = a);
        var f = a[0],
          g = a[1],
          h = a[2],
          d = a[3],
          m = a[4],
          l = a[5],
          q = a[6],
          v = a[7],
          e = a[8],
          k = a[9],
          u = a[10],
          x = a[11],
          w = a[12],
          r = a[13],
          n = a[14];
        a = a[15];
        var A = b[0],
          z = b[1],
          y = b[2],
          p = b[3];
        c[0] = A * f + z * m + y * e + p * w;
        c[1] = A * g + z * l + y * k + p * r;
        c[2] = A * h + z * q + y * u + p * n;
        c[3] = A * d + z * v + y * x + p * a;
        A = b[4];
        z = b[5];
        y = b[6];
        p = b[7];
        c[4] = A * f + z * m + y * e + p * w;
        c[5] = A * g + z * l + y * k + p * r;
        c[6] = A * h + z * q + y * u + p * n;
        c[7] = A * d + z * v + y * x + p * a;
        A = b[8];
        z = b[9];
        y = b[10];
        p = b[11];
        c[8] = A * f + z * m + y * e + p * w;
        c[9] = A * g + z * l + y * k + p * r;
        c[10] = A * h + z * q + y * u + p * n;
        c[11] = A * d + z * v + y * x + p * a;
        A = b[12];
        z = b[13];
        y = b[14];
        p = b[15];
        c[12] = A * f + z * m + y * e + p * w;
        c[13] = A * g + z * l + y * k + p * r;
        c[14] = A * h + z * q + y * u + p * n;
        c[15] = A * d + z * v + y * x + p * a;
        return c;
      },
      multiplyVec3: function (a, b, c) {
        c || (c = b);
        var f = b[0],
          g = b[1];
        b = b[2];
        c[0] = a[0] * f + a[4] * g + a[8] * b + a[12];
        c[1] = a[1] * f + a[5] * g + a[9] * b + a[13];
        c[2] = a[2] * f + a[6] * g + a[10] * b + a[14];
        return c;
      },
      multiplyVec4: function (a, b, c) {
        c || (c = b);
        var f = b[0],
          g = b[1],
          h = b[2];
        b = b[3];
        c[0] = a[0] * f + a[4] * g + a[8] * h + a[12] * b;
        c[1] = a[1] * f + a[5] * g + a[9] * h + a[13] * b;
        c[2] = a[2] * f + a[6] * g + a[10] * h + a[14] * b;
        c[3] = a[3] * f + a[7] * g + a[11] * h + a[15] * b;
        return c;
      },
      translate: function (a, b, c) {
        var f = b[0],
          g = b[1];
        b = b[2];
        if (!c || a === c)
          return (
            (a[12] = a[0] * f + a[4] * g + a[8] * b + a[12]),
            (a[13] = a[1] * f + a[5] * g + a[9] * b + a[13]),
            (a[14] = a[2] * f + a[6] * g + a[10] * b + a[14]),
            (a[15] = a[3] * f + a[7] * g + a[11] * b + a[15]),
            a
          );
        var h = a[0];
        var d = a[1];
        var m = a[2];
        var l = a[3];
        var q = a[4];
        var v = a[5];
        var e = a[6];
        var k = a[7];
        var u = a[8];
        var x = a[9];
        var w = a[10];
        var r = a[11];
        c[0] = h;
        c[1] = d;
        c[2] = m;
        c[3] = l;
        c[4] = q;
        c[5] = v;
        c[6] = e;
        c[7] = k;
        c[8] = u;
        c[9] = x;
        c[10] = w;
        c[11] = r;
        c[12] = h * f + q * g + u * b + a[12];
        c[13] = d * f + v * g + x * b + a[13];
        c[14] = m * f + e * g + w * b + a[14];
        c[15] = l * f + k * g + r * b + a[15];
        return c;
      },
      scale: function (a, b, c) {
        var f = b[0],
          g = b[1];
        b = b[2];
        if (!c || a === c)
          return (
            (a[0] *= f),
            (a[1] *= f),
            (a[2] *= f),
            (a[3] *= f),
            (a[4] *= g),
            (a[5] *= g),
            (a[6] *= g),
            (a[7] *= g),
            (a[8] *= b),
            (a[9] *= b),
            (a[10] *= b),
            (a[11] *= b),
            a
          );
        c[0] = a[0] * f;
        c[1] = a[1] * f;
        c[2] = a[2] * f;
        c[3] = a[3] * f;
        c[4] = a[4] * g;
        c[5] = a[5] * g;
        c[6] = a[6] * g;
        c[7] = a[7] * g;
        c[8] = a[8] * b;
        c[9] = a[9] * b;
        c[10] = a[10] * b;
        c[11] = a[11] * b;
        c[12] = a[12];
        c[13] = a[13];
        c[14] = a[14];
        c[15] = a[15];
        return c;
      },
      rotate: function (a, b, c, g) {
        var f = c[0],
          h = c[1];
        c = c[2];
        var d = Math.sqrt(f * f + h * h + c * c);
        if (!d) return null;
        1 !== d && ((d = 1 / d), (f *= d), (h *= d), (c *= d));
        var m = Math.sin(b);
        var l = Math.cos(b);
        var q = 1 - l;
        b = a[0];
        d = a[1];
        var v = a[2];
        var e = a[3];
        var k = a[4];
        var u = a[5];
        var x = a[6];
        var w = a[7];
        var r = a[8];
        var n = a[9];
        var z = a[10];
        var A = a[11];
        var y = f * f * q + l;
        var p = h * f * q + c * m;
        var C = c * f * q - h * m;
        var ca = f * h * q - c * m;
        var ia = h * h * q + l;
        var aa = c * h * q + f * m;
        var da = f * c * q + h * m;
        f = h * c * q - f * m;
        h = c * c * q + l;
        g
          ? a !== g &&
            ((g[12] = a[12]), (g[13] = a[13]), (g[14] = a[14]), (g[15] = a[15]))
          : (g = a);
        g[0] = b * y + k * p + r * C;
        g[1] = d * y + u * p + n * C;
        g[2] = v * y + x * p + z * C;
        g[3] = e * y + w * p + A * C;
        g[4] = b * ca + k * ia + r * aa;
        g[5] = d * ca + u * ia + n * aa;
        g[6] = v * ca + x * ia + z * aa;
        g[7] = e * ca + w * ia + A * aa;
        g[8] = b * da + k * f + r * h;
        g[9] = d * da + u * f + n * h;
        g[10] = v * da + x * f + z * h;
        g[11] = e * da + w * f + A * h;
        return g;
      },
      rotateX: function (a, b, c) {
        var f = Math.sin(b);
        b = Math.cos(b);
        var g = a[4],
          h = a[5],
          d = a[6],
          m = a[7],
          l = a[8],
          q = a[9],
          v = a[10],
          e = a[11];
        c
          ? a !== c &&
            ((c[0] = a[0]),
            (c[1] = a[1]),
            (c[2] = a[2]),
            (c[3] = a[3]),
            (c[12] = a[12]),
            (c[13] = a[13]),
            (c[14] = a[14]),
            (c[15] = a[15]))
          : (c = a);
        c[4] = g * b + l * f;
        c[5] = h * b + q * f;
        c[6] = d * b + v * f;
        c[7] = m * b + e * f;
        c[8] = g * -f + l * b;
        c[9] = h * -f + q * b;
        c[10] = d * -f + v * b;
        c[11] = m * -f + e * b;
        return c;
      },
      rotateY: function (a, b, c) {
        var f = Math.sin(b);
        b = Math.cos(b);
        var g = a[0],
          h = a[1],
          d = a[2],
          m = a[3],
          l = a[8],
          q = a[9],
          v = a[10],
          e = a[11];
        c
          ? a !== c &&
            ((c[4] = a[4]),
            (c[5] = a[5]),
            (c[6] = a[6]),
            (c[7] = a[7]),
            (c[12] = a[12]),
            (c[13] = a[13]),
            (c[14] = a[14]),
            (c[15] = a[15]))
          : (c = a);
        c[0] = g * b + l * -f;
        c[1] = h * b + q * -f;
        c[2] = d * b + v * -f;
        c[3] = m * b + e * -f;
        c[8] = g * f + l * b;
        c[9] = h * f + q * b;
        c[10] = d * f + v * b;
        c[11] = m * f + e * b;
        return c;
      },
      rotateZ: function (a, b, c) {
        var f = Math.sin(b);
        b = Math.cos(b);
        var g = a[0],
          h = a[1],
          d = a[2],
          m = a[3],
          l = a[4],
          q = a[5],
          v = a[6],
          e = a[7];
        c
          ? a !== c &&
            ((c[8] = a[8]),
            (c[9] = a[9]),
            (c[10] = a[10]),
            (c[11] = a[11]),
            (c[12] = a[12]),
            (c[13] = a[13]),
            (c[14] = a[14]),
            (c[15] = a[15]))
          : (c = a);
        c[0] = g * b + l * f;
        c[1] = h * b + q * f;
        c[2] = d * b + v * f;
        c[3] = m * b + e * f;
        c[4] = g * -f + l * b;
        c[5] = h * -f + q * b;
        c[6] = d * -f + v * b;
        c[7] = m * -f + e * b;
        return c;
      },
      frustum: function (a, b, c, g, h, d, l) {
        l || (l = m.create());
        var f = b - a,
          q = g - c,
          v = d - h;
        l[0] = (2 * h) / f;
        l[1] = 0;
        l[2] = 0;
        l[3] = 0;
        l[4] = 0;
        l[5] = (2 * h) / q;
        l[6] = 0;
        l[7] = 0;
        l[8] = (b + a) / f;
        l[9] = (g + c) / q;
        l[10] = -(d + h) / v;
        l[11] = -1;
        l[12] = 0;
        l[13] = 0;
        l[14] = -(d * h * 2) / v;
        l[15] = 0;
        return l;
      },
      perspective: function (a, b, c, g, h) {
        a = c * Math.tan((a * Math.PI) / 360);
        b *= a;
        return m.frustum(-b, b, -a, a, c, g, h);
      },
      ortho: function (a, b, c, g, h, d, l) {
        l || (l = m.create());
        var f = b - a,
          q = g - c,
          v = d - h;
        l[0] = 2 / f;
        l[1] = 0;
        l[2] = 0;
        l[3] = 0;
        l[4] = 0;
        l[5] = 2 / q;
        l[6] = 0;
        l[7] = 0;
        l[8] = 0;
        l[9] = 0;
        l[10] = -2 / v;
        l[11] = 0;
        l[12] = -(a + b) / f;
        l[13] = -(g + c) / q;
        l[14] = -(d + h) / v;
        l[15] = 1;
        return l;
      },
      lookAt: function (a, b, c, g) {
        g || (g = m.create());
        var f = a[0],
          h = a[1];
        a = a[2];
        var d = c[0];
        var l = c[1];
        var q = c[2];
        var v = b[0];
        c = b[1];
        var e = b[2];
        if (f === v && h === c && a === e) return m.identity(g);
        b = f - v;
        c = h - c;
        v = a - e;
        var k = 1 / Math.sqrt(b * b + c * c + v * v);
        b *= k;
        c *= k;
        v *= k;
        e = l * v - q * c;
        q = q * b - d * v;
        d = d * c - l * b;
        (k = Math.sqrt(e * e + q * q + d * d))
          ? ((k = 1 / k), (e *= k), (q *= k), (d *= k))
          : (d = q = e = 0);
        l = c * d - v * q;
        var u = v * e - b * d;
        var x = b * q - c * e;
        (k = Math.sqrt(l * l + u * u + x * x))
          ? ((k = 1 / k), (l *= k), (u *= k), (x *= k))
          : (x = u = l = 0);
        g[0] = e;
        g[1] = l;
        g[2] = b;
        g[3] = 0;
        g[4] = q;
        g[5] = u;
        g[6] = c;
        g[7] = 0;
        g[8] = d;
        g[9] = x;
        g[10] = v;
        g[11] = 0;
        g[12] = -(e * f + q * h + d * a);
        g[13] = -(l * f + u * h + x * a);
        g[14] = -(b * f + c * h + v * a);
        g[15] = 1;
        return g;
      },
      fromRotationTranslation: function (a, b, c) {
        c || (c = m.create());
        var f = a[0],
          g = a[1],
          h = a[2],
          d = a[3],
          l = f + f,
          q = g + g,
          v = h + h;
        a = f * l;
        var e = f * q;
        f *= v;
        var k = g * q;
        g *= v;
        h *= v;
        l *= d;
        q *= d;
        d *= v;
        c[0] = 1 - (k + h);
        c[1] = e + d;
        c[2] = f - q;
        c[3] = 0;
        c[4] = e - d;
        c[5] = 1 - (a + h);
        c[6] = g + l;
        c[7] = 0;
        c[8] = f + q;
        c[9] = g - l;
        c[10] = 1 - (a + k);
        c[11] = 0;
        c[12] = b[0];
        c[13] = b[1];
        c[14] = b[2];
        c[15] = 1;
        return c;
      },
      str: function (a) {
        return (
          "[" +
          a[0] +
          ", " +
          a[1] +
          ", " +
          a[2] +
          ", " +
          a[3] +
          ", " +
          a[4] +
          ", " +
          a[5] +
          ", " +
          a[6] +
          ", " +
          a[7] +
          ", " +
          a[8] +
          ", " +
          a[9] +
          ", " +
          a[10] +
          ", " +
          a[11] +
          ", " +
          a[12] +
          ", " +
          a[13] +
          ", " +
          a[14] +
          ", " +
          a[15] +
          "]"
        );
      },
    },
    x = {
      create: function (a) {
        var b = new d(4);
        a
          ? ((b[0] = a[0]), (b[1] = a[1]), (b[2] = a[2]), (b[3] = a[3]))
          : (b[0] = b[1] = b[2] = b[3] = 0);
        return b;
      },
      createFrom: function (a, b, c, g) {
        var f = new d(4);
        f[0] = a;
        f[1] = b;
        f[2] = c;
        f[3] = g;
        return f;
      },
      set: function (a, b) {
        b[0] = a[0];
        b[1] = a[1];
        b[2] = a[2];
        b[3] = a[3];
        return b;
      },
      equal: function (a, b) {
        return (
          a === b ||
          (1e-6 > Math.abs(a[0] - b[0]) &&
            1e-6 > Math.abs(a[1] - b[1]) &&
            1e-6 > Math.abs(a[2] - b[2]) &&
            1e-6 > Math.abs(a[3] - b[3]))
        );
      },
      identity: function (a) {
        a || (a = x.create());
        a[0] = 0;
        a[1] = 0;
        a[2] = 0;
        a[3] = 1;
        return a;
      },
    },
    u = x.identity();
  x.calculateW = function (a, b) {
    var f = a[0],
      c = a[1],
      g = a[2];
    if (!b || a === b)
      return (a[3] = -Math.sqrt(Math.abs(1 - f * f - c * c - g * g))), a;
    b[0] = f;
    b[1] = c;
    b[2] = g;
    b[3] = -Math.sqrt(Math.abs(1 - f * f - c * c - g * g));
    return b;
  };
  x.dot = function (a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
  };
  x.inverse = function (a, b) {
    var f = a[0],
      c = a[1],
      g = a[2],
      h = a[3];
    f = (f = f * f + c * c + g * g + h * h) ? 1 / f : 0;
    if (!b || a === b)
      return (a[0] *= -f), (a[1] *= -f), (a[2] *= -f), (a[3] *= f), a;
    b[0] = -a[0] * f;
    b[1] = -a[1] * f;
    b[2] = -a[2] * f;
    b[3] = a[3] * f;
    return b;
  };
  x.conjugate = function (a, b) {
    if (!b || a === b) return (a[0] *= -1), (a[1] *= -1), (a[2] *= -1), a;
    b[0] = -a[0];
    b[1] = -a[1];
    b[2] = -a[2];
    b[3] = a[3];
    return b;
  };
  x.length = function (a) {
    var b = a[0],
      c = a[1],
      f = a[2];
    a = a[3];
    return Math.sqrt(b * b + c * c + f * f + a * a);
  };
  x.normalize = function (a, b) {
    b || (b = a);
    var c = a[0],
      f = a[1],
      g = a[2];
    a = a[3];
    var h = Math.sqrt(c * c + f * f + g * g + a * a);
    if (0 === h) return (b[0] = 0), (b[1] = 0), (b[2] = 0), (b[3] = 0), b;
    h = 1 / h;
    b[0] = c * h;
    b[1] = f * h;
    b[2] = g * h;
    b[3] = a * h;
    return b;
  };
  x.add = function (a, b, c) {
    if (!c || a === c)
      return (a[0] += b[0]), (a[1] += b[1]), (a[2] += b[2]), (a[3] += b[3]), a;
    c[0] = a[0] + b[0];
    c[1] = a[1] + b[1];
    c[2] = a[2] + b[2];
    c[3] = a[3] + b[3];
    return c;
  };
  x.multiply = function (a, b, c) {
    c || (c = a);
    var f = a[0],
      g = a[1],
      h = a[2];
    a = a[3];
    var d = b[0],
      m = b[1],
      l = b[2];
    b = b[3];
    c[0] = f * b + a * d + g * l - h * m;
    c[1] = g * b + a * m + h * d - f * l;
    c[2] = h * b + a * l + f * m - g * d;
    c[3] = a * b - f * d - g * m - h * l;
    return c;
  };
  x.multiplyVec3 = function (a, b, c) {
    c || (c = b);
    var f = b[0],
      g = b[1],
      h = b[2];
    b = a[0];
    var d = a[1],
      m = a[2];
    a = a[3];
    var l = a * f + d * h - m * g,
      q = a * g + m * f - b * h,
      v = a * h + b * g - d * f;
    f = -b * f - d * g - m * h;
    c[0] = l * a + f * -b + q * -m - v * -d;
    c[1] = q * a + f * -d + v * -b - l * -m;
    c[2] = v * a + f * -m + l * -d - q * -b;
    return c;
  };
  x.scale = function (a, b, c) {
    if (!c || a === c)
      return (a[0] *= b), (a[1] *= b), (a[2] *= b), (a[3] *= b), a;
    c[0] = a[0] * b;
    c[1] = a[1] * b;
    c[2] = a[2] * b;
    c[3] = a[3] * b;
    return c;
  };
  x.toMat3 = function (a, b) {
    b || (b = v.create());
    var c = a[0],
      f = a[1],
      g = a[2],
      h = a[3],
      d = c + c,
      m = f + f,
      l = g + g;
    a = c * d;
    var q = c * m;
    c *= l;
    var e = f * m;
    f *= l;
    g *= l;
    d *= h;
    m *= h;
    h *= l;
    b[0] = 1 - (e + g);
    b[1] = q + h;
    b[2] = c - m;
    b[3] = q - h;
    b[4] = 1 - (a + g);
    b[5] = f + d;
    b[6] = c + m;
    b[7] = f - d;
    b[8] = 1 - (a + e);
    return b;
  };
  x.toMat4 = function (a, b) {
    b || (b = m.create());
    var c = a[0],
      f = a[1],
      g = a[2],
      h = a[3],
      d = c + c,
      l = f + f,
      v = g + g;
    a = c * d;
    var q = c * l;
    c *= v;
    var e = f * l;
    f *= v;
    g *= v;
    d *= h;
    l *= h;
    h *= v;
    b[0] = 1 - (e + g);
    b[1] = q + h;
    b[2] = c - l;
    b[3] = 0;
    b[4] = q - h;
    b[5] = 1 - (a + g);
    b[6] = f + d;
    b[7] = 0;
    b[8] = c + l;
    b[9] = f - d;
    b[10] = 1 - (a + e);
    b[11] = 0;
    b[12] = 0;
    b[13] = 0;
    b[14] = 0;
    b[15] = 1;
    return b;
  };
  x.slerp = function (a, b, c, g) {
    g || (g = a);
    var f = a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
    if (1 <= Math.abs(f))
      return (
        g !== a && ((g[0] = a[0]), (g[1] = a[1]), (g[2] = a[2]), (g[3] = a[3])),
        g
      );
    var h = Math.acos(f);
    var d = Math.sqrt(1 - f * f);
    if (0.001 > Math.abs(d))
      return (
        (g[0] = 0.5 * a[0] + 0.5 * b[0]),
        (g[1] = 0.5 * a[1] + 0.5 * b[1]),
        (g[2] = 0.5 * a[2] + 0.5 * b[2]),
        (g[3] = 0.5 * a[3] + 0.5 * b[3]),
        g
      );
    f = Math.sin((1 - c) * h) / d;
    c = Math.sin(c * h) / d;
    g[0] = a[0] * f + b[0] * c;
    g[1] = a[1] * f + b[1] * c;
    g[2] = a[2] * f + b[2] * c;
    g[3] = a[3] * f + b[3] * c;
    return g;
  };
  x.fromRotationMatrix = function (a, b) {
    b || (b = x.create());
    var c = a[0] + a[4] + a[8];
    if (0 < c) {
      var f = Math.sqrt(c + 1);
      b[3] = 0.5 * f;
      f = 0.5 / f;
      b[0] = (a[7] - a[5]) * f;
      b[1] = (a[2] - a[6]) * f;
      b[2] = (a[3] - a[1]) * f;
    } else {
      f = x.fromRotationMatrix.s_iNext = x.fromRotationMatrix.s_iNext || [
        1, 2, 0,
      ];
      c = 0;
      a[4] > a[0] && (c = 1);
      a[8] > a[3 * c + c] && (c = 2);
      var g = f[c],
        h = f[g];
      f = Math.sqrt(a[3 * c + c] - a[3 * g + g] - a[3 * h + h] + 1);
      b[c] = 0.5 * f;
      f = 0.5 / f;
      b[3] = (a[3 * h + g] - a[3 * g + h]) * f;
      b[g] = (a[3 * g + c] + a[3 * c + g]) * f;
      b[h] = (a[3 * h + c] + a[3 * c + h]) * f;
    }
    return b;
  };
  v.toQuat4 = x.fromRotationMatrix;
  (function () {
    var a = v.create();
    x.fromAxes = function (b, c, f, g) {
      a[0] = c[0];
      a[3] = c[1];
      a[6] = c[2];
      a[1] = f[0];
      a[4] = f[1];
      a[7] = f[2];
      a[2] = b[0];
      a[5] = b[1];
      a[8] = b[2];
      return x.fromRotationMatrix(a, g);
    };
  })();
  x.identity = function (a) {
    a || (a = x.create());
    a[0] = 0;
    a[1] = 0;
    a[2] = 0;
    a[3] = 1;
    return a;
  };
  x.fromAngleAxis = function (a, b, c) {
    c || (c = x.create());
    a *= 0.5;
    var f = Math.sin(a);
    c[3] = Math.cos(a);
    c[0] = f * b[0];
    c[1] = f * b[1];
    c[2] = f * b[2];
    return c;
  };
  x.toAngleAxis = function (a, b) {
    b || (b = a);
    var c = a[0] * a[0] + a[1] * a[1] + a[2] * a[2];
    0 < c
      ? ((b[3] = 2 * Math.acos(a[3])),
        (c = r.invsqrt(c)),
        (b[0] = a[0] * c),
        (b[1] = a[1] * c),
        (b[2] = a[2] * c))
      : ((b[3] = 0), (b[0] = 1), (b[1] = 0), (b[2] = 0));
    return b;
  };
  x.str = function (a) {
    return "[" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + "]";
  };
  var w = {
      create: function (a) {
        var b = new d(2);
        a ? ((b[0] = a[0]), (b[1] = a[1])) : ((b[0] = 0), (b[1] = 0));
        return b;
      },
      createFrom: function (a, b) {
        var c = new d(2);
        c[0] = a;
        c[1] = b;
        return c;
      },
      add: function (a, b, c) {
        c || (c = b);
        c[0] = a[0] + b[0];
        c[1] = a[1] + b[1];
        return c;
      },
      subtract: function (a, b, c) {
        c || (c = b);
        c[0] = a[0] - b[0];
        c[1] = a[1] - b[1];
        return c;
      },
      multiply: function (a, b, c) {
        c || (c = b);
        c[0] = a[0] * b[0];
        c[1] = a[1] * b[1];
        return c;
      },
      divide: function (a, b, c) {
        c || (c = b);
        c[0] = a[0] / b[0];
        c[1] = a[1] / b[1];
        return c;
      },
      scale: function (a, b, c) {
        c || (c = a);
        c[0] = a[0] * b;
        c[1] = a[1] * b;
        return c;
      },
      dist: function (a, b) {
        var c = b[0] - a[0];
        a = b[1] - a[1];
        return Math.sqrt(c * c + a * a);
      },
      set: function (a, b) {
        b[0] = a[0];
        b[1] = a[1];
        return b;
      },
      equal: function (a, b) {
        return (
          a === b ||
          (1e-6 > Math.abs(a[0] - b[0]) && 1e-6 > Math.abs(a[1] - b[1]))
        );
      },
      negate: function (a, b) {
        b || (b = a);
        b[0] = -a[0];
        b[1] = -a[1];
        return b;
      },
      normalize: function (a, b) {
        b || (b = a);
        var c = a[0] * a[0] + a[1] * a[1];
        0 < c
          ? ((c = Math.sqrt(c)), (b[0] = a[0] / c), (b[1] = a[1] / c))
          : (b[0] = b[1] = 0);
        return b;
      },
      cross: function (a, b, c) {
        a = a[0] * b[1] - a[1] * b[0];
        if (!c) return a;
        c[0] = c[1] = 0;
        c[2] = a;
        return c;
      },
      length: function (a) {
        var b = a[0];
        a = a[1];
        return Math.sqrt(b * b + a * a);
      },
      squaredLength: function (a) {
        var b = a[0];
        a = a[1];
        return b * b + a * a;
      },
      dot: function (a, b) {
        return a[0] * b[0] + a[1] * b[1];
      },
      direction: function (a, b, c) {
        c || (c = a);
        var f = a[0] - b[0];
        a = a[1] - b[1];
        b = f * f + a * a;
        if (!b) return (c[0] = 0), (c[1] = 0), (c[2] = 0), c;
        b = 1 / Math.sqrt(b);
        c[0] = f * b;
        c[1] = a * b;
        return c;
      },
      lerp: function (a, b, c, g) {
        g || (g = a);
        g[0] = a[0] + c * (b[0] - a[0]);
        g[1] = a[1] + c * (b[1] - a[1]);
        return g;
      },
      str: function (a) {
        return "[" + a[0] + ", " + a[1] + "]";
      },
    },
    z = {
      create: function (a) {
        var b = new d(4);
        a
          ? ((b[0] = a[0]), (b[1] = a[1]), (b[2] = a[2]), (b[3] = a[3]))
          : (b[0] = b[1] = b[2] = b[3] = 0);
        return b;
      },
      createFrom: function (a, b, c, g) {
        var f = new d(4);
        f[0] = a;
        f[1] = b;
        f[2] = c;
        f[3] = g;
        return f;
      },
      set: function (a, b) {
        b[0] = a[0];
        b[1] = a[1];
        b[2] = a[2];
        b[3] = a[3];
        return b;
      },
      equal: function (a, b) {
        return (
          a === b ||
          (1e-6 > Math.abs(a[0] - b[0]) &&
            1e-6 > Math.abs(a[1] - b[1]) &&
            1e-6 > Math.abs(a[2] - b[2]) &&
            1e-6 > Math.abs(a[3] - b[3]))
        );
      },
      identity: function (a) {
        a || (a = z.create());
        a[0] = 1;
        a[1] = 0;
        a[2] = 0;
        a[3] = 1;
        return a;
      },
      transpose: function (a, b) {
        if (!b || a === b) return (b = a[1]), (a[1] = a[2]), (a[2] = b), a;
        b[0] = a[0];
        b[1] = a[2];
        b[2] = a[1];
        b[3] = a[3];
        return b;
      },
      determinant: function (a) {
        return a[0] * a[3] - a[2] * a[1];
      },
      inverse: function (a, b) {
        b || (b = a);
        var c = a[0],
          f = a[1],
          g = a[2];
        a = a[3];
        var h = c * a - g * f;
        if (!h) return null;
        h = 1 / h;
        b[0] = a * h;
        b[1] = -f * h;
        b[2] = -g * h;
        b[3] = c * h;
        return b;
      },
      multiply: function (a, b, c) {
        c || (c = a);
        var f = a[0],
          g = a[1],
          h = a[2];
        a = a[3];
        c[0] = f * b[0] + g * b[2];
        c[1] = f * b[1] + g * b[3];
        c[2] = h * b[0] + a * b[2];
        c[3] = h * b[1] + a * b[3];
        return c;
      },
      rotate: function (a, b, c) {
        c || (c = a);
        var f = a[0],
          g = a[1],
          h = a[2];
        a = a[3];
        var d = Math.sin(b);
        b = Math.cos(b);
        c[0] = f * b + g * d;
        c[1] = f * -d + g * b;
        c[2] = h * b + a * d;
        c[3] = h * -d + a * b;
        return c;
      },
      multiplyVec2: function (a, b, c) {
        c || (c = b);
        var f = b[0];
        b = b[1];
        c[0] = f * a[0] + b * a[1];
        c[1] = f * a[2] + b * a[3];
        return c;
      },
      scale: function (a, b, c) {
        c || (c = a);
        var f = a[1],
          g = a[2],
          h = a[3],
          d = b[0];
        b = b[1];
        c[0] = a[0] * d;
        c[1] = f * b;
        c[2] = g * d;
        c[3] = h * b;
        return c;
      },
      str: function (a) {
        return "[" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + "]";
      },
    },
    y = {
      create: function (a) {
        var b = new d(4);
        a
          ? ((b[0] = a[0]), (b[1] = a[1]), (b[2] = a[2]), (b[3] = a[3]))
          : ((b[0] = 0), (b[1] = 0), (b[2] = 0), (b[3] = 0));
        return b;
      },
      createFrom: function (a, b, c, g) {
        var f = new d(4);
        f[0] = a;
        f[1] = b;
        f[2] = c;
        f[3] = g;
        return f;
      },
      add: function (a, b, c) {
        c || (c = b);
        c[0] = a[0] + b[0];
        c[1] = a[1] + b[1];
        c[2] = a[2] + b[2];
        c[3] = a[3] + b[3];
        return c;
      },
      subtract: function (a, b, c) {
        c || (c = b);
        c[0] = a[0] - b[0];
        c[1] = a[1] - b[1];
        c[2] = a[2] - b[2];
        c[3] = a[3] - b[3];
        return c;
      },
      multiply: function (a, b, c) {
        c || (c = b);
        c[0] = a[0] * b[0];
        c[1] = a[1] * b[1];
        c[2] = a[2] * b[2];
        c[3] = a[3] * b[3];
        return c;
      },
      divide: function (a, b, c) {
        c || (c = b);
        c[0] = a[0] / b[0];
        c[1] = a[1] / b[1];
        c[2] = a[2] / b[2];
        c[3] = a[3] / b[3];
        return c;
      },
      scale: function (a, b, c) {
        c || (c = a);
        c[0] = a[0] * b;
        c[1] = a[1] * b;
        c[2] = a[2] * b;
        c[3] = a[3] * b;
        return c;
      },
      set: function (a, b) {
        b[0] = a[0];
        b[1] = a[1];
        b[2] = a[2];
        b[3] = a[3];
        return b;
      },
      equal: function (a, b) {
        return (
          a === b ||
          (1e-6 > Math.abs(a[0] - b[0]) &&
            1e-6 > Math.abs(a[1] - b[1]) &&
            1e-6 > Math.abs(a[2] - b[2]) &&
            1e-6 > Math.abs(a[3] - b[3]))
        );
      },
      negate: function (a, b) {
        b || (b = a);
        b[0] = -a[0];
        b[1] = -a[1];
        b[2] = -a[2];
        b[3] = -a[3];
        return b;
      },
      length: function (a) {
        var b = a[0],
          c = a[1],
          f = a[2];
        a = a[3];
        return Math.sqrt(b * b + c * c + f * f + a * a);
      },
      squaredLength: function (a) {
        var b = a[0],
          c = a[1],
          f = a[2];
        a = a[3];
        return b * b + c * c + f * f + a * a;
      },
      lerp: function (a, b, c, g) {
        g || (g = a);
        g[0] = a[0] + c * (b[0] - a[0]);
        g[1] = a[1] + c * (b[1] - a[1]);
        g[2] = a[2] + c * (b[2] - a[2]);
        g[3] = a[3] + c * (b[3] - a[3]);
        return g;
      },
      str: function (a) {
        return "[" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + "]";
      },
    };
  e &&
    ((e.glMatrixArrayType = d),
    (e.MatrixArray = d),
    (e.setMatrixArrayType = p),
    (e.determineMatrixArrayType = n),
    (e.glMath = r),
    (e.vec2 = w),
    (e.vec3 = k),
    (e.vec4 = y),
    (e.mat2 = z),
    (e.mat3 = v),
    (e.mat4 = m),
    (e.quat4 = x));
  return {
    glMatrixArrayType: d,
    MatrixArray: d,
    setMatrixArrayType: p,
    determineMatrixArrayType: n,
    glMath: r,
    vec2: w,
    vec3: k,
    vec4: y,
    mat2: z,
    mat3: v,
    mat4: m,
    quat4: x,
  };
});
(function (e) {
  function p(a) {
    return 0 == a ? 0 : 0 < a ? 1 : -1;
  }
  var n = {
      subtract: function (a, b) {
        return { x: a.x - b.x, y: a.y - b.y };
      },
      dotProduct: function (a, b) {
        return a.x * b.x + a.y * b.y;
      },
      square: function (a) {
        return Math.sqrt(a.x * a.x + a.y * a.y);
      },
      scale: function (a, b) {
        return { x: a.x * b, y: a.y * b };
      },
    },
    r = Math.pow(2, -65),
    d = function (a, c) {
      for (
        var g = [],
          h = c.length - 1,
          d = 2 * h - 1,
          l = [],
          f = [],
          m = [],
          v = [],
          e = [
            [1, 0.6, 0.3, 0.1],
            [0.4, 0.6, 0.6, 0.4],
            [0.1, 0.3, 0.6, 1],
          ],
          x = 0;
        x <= h;
        x++
      )
        l[x] = n.subtract(c[x], a);
      for (x = 0; x <= h - 1; x++)
        (f[x] = n.subtract(c[x + 1], c[x])), (f[x] = n.scale(f[x], 3));
      for (x = 0; x <= h - 1; x++)
        for (var r = 0; r <= h; r++)
          m[x] || (m[x] = []), (m[x][r] = n.dotProduct(f[x], l[r]));
      for (x = 0; x <= d; x++)
        v[x] || (v[x] = []), (v[x].y = 0), (v[x].x = parseFloat(x) / d);
      d = h - 1;
      for (l = 0; l <= h + d; l++)
        for (f = Math.min(l, h), x = Math.max(0, l - d); x <= f; x++)
          (r = l - x), (v[x + r].y += m[r][x] * e[r][x]);
      h = c.length - 1;
      v = k(v, 2 * h - 1, g, 0);
      d = n.subtract(a, c[0]);
      m = n.square(d);
      for (x = e = 0; x < v; x++)
        (d = n.subtract(a, b(c, h, g[x], null, null))),
          (d = n.square(d)),
          d < m && ((m = d), (e = g[x]));
      d = n.subtract(a, c[h]);
      d = n.square(d);
      d < m && ((m = d), (e = 1));
      return { location: e, distance: m };
    },
    k = function (a, c, g, h) {
      var d = [],
        l = [],
        f = [],
        m = [],
        v = 0;
      var e = p(a[0].y);
      for (var u = 1; u <= c; u++) {
        var x = p(a[u].y);
        x != e && v++;
        e = x;
      }
      switch (v) {
        case 0:
          return 0;
        case 1:
          if (64 <= h) return (g[0] = (a[0].x + a[c].x) / 2), 1;
          var w, n;
          v = a[0].y - a[c].y;
          x = a[c].x - a[0].x;
          e = a[0].x * a[c].y - a[c].x * a[0].y;
          u = w = 0;
          for (n = 1; n < c; n++) {
            var H = v * a[n].x + x * a[n].y + e;
            H > w ? (w = H) : H < u && (u = H);
          }
          n = x;
          w = (1 / (0 * n - 1 * v)) * (e - w - 0 * n);
          n = x;
          v = (1 / (0 * n - 1 * v)) * (e - u - 0 * n);
          if (Math.max(w, v) - Math.min(w, v) < r)
            return (
              (f = a[c].x - a[0].x),
              (m = a[c].y - a[0].y),
              (g[0] =
                (1 / (0 * f - 1 * m)) * (f * (a[0].y - 0) - m * (a[0].x - 0))),
              1
            );
      }
      b(a, c, 0.5, d, l);
      a = k(d, c, f, h + 1);
      c = k(l, c, m, h + 1);
      for (h = 0; h < a; h++) g[h] = f[h];
      for (h = 0; h < c; h++) g[h + a] = m[h];
      return a + c;
    },
    b = function (a, b, c, g, h) {
      for (var d = [[]], f = 0; f <= b; f++) d[0][f] = a[f];
      for (a = 1; a <= b; a++)
        for (f = 0; f <= b - a; f++)
          d[a] || (d[a] = []),
            d[a][f] || (d[a][f] = {}),
            (d[a][f].x = (1 - c) * d[a - 1][f].x + c * d[a - 1][f + 1].x),
            (d[a][f].y = (1 - c) * d[a - 1][f].y + c * d[a - 1][f + 1].y);
      if (null != g) for (f = 0; f <= b; f++) g[f] = d[f][0];
      if (null != h) for (f = 0; f <= b; f++) h[f] = d[b - f][f];
      return d[b][0];
    },
    c = {},
    h = function (a) {
      var b = c[a];
      if (!b) {
        b = [];
        var g = function (a) {
            return function (b) {
              return a;
            };
          },
          h = function () {
            return function (a) {
              return a;
            };
          },
          d = function () {
            return function (a) {
              return 1 - a;
            };
          },
          l = function (a) {
            return function (b) {
              for (var c = 1, g = 0; g < a.length; g++) c *= a[g](b);
              return c;
            };
          };
        b.push(
          new (function () {
            return function (b) {
              return Math.pow(b, a);
            };
          })()
        );
        for (var f = 1; f < a; f++) {
          for (var m = [new g(a)], v = 0; v < a - f; v++) m.push(new h());
          for (v = 0; v < f; v++) m.push(new d());
          b.push(new l(m));
        }
        b.push(
          new (function () {
            return function (b) {
              return Math.pow(1 - b, a);
            };
          })()
        );
        c[a] = b;
      }
      return b;
    },
    a = function (a, b) {
      for (var c = h(a.length - 1), g = 0, d = 0, l = 0; l < a.length; l++)
        (g += a[l].x * c[l](b)), (d += a[l].y * c[l](b));
      return { x: g, y: d };
    },
    g = function (a, b) {
      return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
    },
    l = function (b, c, h) {
      for (
        var d = a(b, c), l = 0, m = 0 < h ? 1 : -1, f = null;
        l < Math.abs(h);

      )
        (c += 0.005 * m), (f = a(b, c)), (l += g(f, d)), (d = f);
      return { point: f, location: c };
    },
    v = function (b, c) {
      var g = a(b, c);
      c = a(b.slice(0, b.length - 1), c);
      b = c.y - g.y;
      g = c.x - g.x;
      return 0 == b ? Infinity : Math.atan(b / g);
    };
  ChemDoodle.lib.jsBezier = {
    distanceFromCurve: d,
    gradientAtPoint: v,
    gradientAtPointAlongCurveFrom: function (a, b, c) {
      b = l(a, b, c);
      1 < b.location && (b.location = 1);
      0 > b.location && (b.location = 0);
      return v(a, b.location);
    },
    nearestPointOnCurve: function (a, c) {
      a = d(a, c);
      return {
        point: b(c, c.length - 1, a.location, null, null),
        location: a.location,
      };
    },
    pointOnCurve: a,
    pointAlongCurveFrom: function (a, b, c) {
      return l(a, b, c).point;
    },
    perpendicularToCurveAt: function (a, b, c, g) {
      b = l(a, b, null == g ? 0 : g);
      a = v(a, b.location);
      g = Math.atan(-1 / a);
      a = (c / 2) * Math.sin(g);
      c = (c / 2) * Math.cos(g);
      return [
        { x: b.point.x + c, y: b.point.y + a },
        { x: b.point.x - c, y: b.point.y - a },
      ];
    },
    locationAlongCurveFrom: function (a, b, c) {
      return l(a, b, c).location;
    },
    getLength: function (b) {
      for (var c = a(b, 0), h = 0, d = 0, l; 1 > d; )
        (d += 0.005), (l = a(b, d)), (h += g(l, c)), (c = l);
      return h;
    },
  };
})(ChemDoodle.lib);
ChemDoodle.lib.MarchingCubes = (function () {
  var e = new Uint32Array([
      0, 265, 515, 778, 1030, 1295, 1541, 1804, 2060, 2309, 2575, 2822, 3082,
      3331, 3593, 3840, 400, 153, 915, 666, 1430, 1183, 1941, 1692, 2460, 2197,
      2975, 2710, 3482, 3219, 3993, 3728, 560, 825, 51, 314, 1590, 1855, 1077,
      1340, 2620, 2869, 2111, 2358, 3642, 3891, 3129, 3376, 928, 681, 419, 170,
      1958, 1711, 1445, 1196, 2988, 2725, 2479, 2214, 4010, 3747, 3497, 3232,
      1120, 1385, 1635, 1898, 102, 367, 613, 876, 3180, 3429, 3695, 3942, 2154,
      2403, 2665, 2912, 1520, 1273, 2035, 1786, 502, 255, 1013, 764, 3580, 3317,
      4095, 3830, 2554, 2291, 3065, 2800, 1616, 1881, 1107, 1370, 598, 863, 85,
      348, 3676, 3925, 3167, 3414, 2650, 2899, 2137, 2384, 1984, 1737, 1475,
      1226, 966, 719, 453, 204, 4044, 3781, 3535, 3270, 3018, 2755, 2505, 2240,
      2240, 2505, 2755, 3018, 3270, 3535, 3781, 4044, 204, 453, 719, 966, 1226,
      1475, 1737, 1984, 2384, 2137, 2899, 2650, 3414, 3167, 3925, 3676, 348, 85,
      863, 598, 1370, 1107, 1881, 1616, 2800, 3065, 2291, 2554, 3830, 4095,
      3317, 3580, 764, 1013, 255, 502, 1786, 2035, 1273, 1520, 2912, 2665, 2403,
      2154, 3942, 3695, 3429, 3180, 876, 613, 367, 102, 1898, 1635, 1385, 1120,
      3232, 3497, 3747, 4010, 2214, 2479, 2725, 2988, 1196, 1445, 1711, 1958,
      170, 419, 681, 928, 3376, 3129, 3891, 3642, 2358, 2111, 2869, 2620, 1340,
      1077, 1855, 1590, 314, 51, 825, 560, 3728, 3993, 3219, 3482, 2710, 2975,
      2197, 2460, 1692, 1941, 1183, 1430, 666, 915, 153, 400, 3840, 3593, 3331,
      3082, 2822, 2575, 2309, 2060, 1804, 1541, 1295, 1030, 778, 515, 265, 0,
    ]),
    p = [
      [],
      [0, 8, 3],
      [0, 1, 9],
      [1, 8, 3, 9, 8, 1],
      [1, 2, 10],
      [0, 8, 3, 1, 2, 10],
      [9, 2, 10, 0, 2, 9],
      [2, 8, 3, 2, 10, 8, 10, 9, 8],
      [3, 11, 2],
      [0, 11, 2, 8, 11, 0],
      [1, 9, 0, 2, 3, 11],
      [1, 11, 2, 1, 9, 11, 9, 8, 11],
      [3, 10, 1, 11, 10, 3],
      [0, 10, 1, 0, 8, 10, 8, 11, 10],
      [3, 9, 0, 3, 11, 9, 11, 10, 9],
      [9, 8, 10, 10, 8, 11],
      [4, 7, 8],
      [4, 3, 0, 7, 3, 4],
      [0, 1, 9, 8, 4, 7],
      [4, 1, 9, 4, 7, 1, 7, 3, 1],
      [1, 2, 10, 8, 4, 7],
      [3, 4, 7, 3, 0, 4, 1, 2, 10],
      [9, 2, 10, 9, 0, 2, 8, 4, 7],
      [2, 10, 9, 2, 9, 7, 2, 7, 3, 7, 9, 4],
      [8, 4, 7, 3, 11, 2],
      [11, 4, 7, 11, 2, 4, 2, 0, 4],
      [9, 0, 1, 8, 4, 7, 2, 3, 11],
      [4, 7, 11, 9, 4, 11, 9, 11, 2, 9, 2, 1],
      [3, 10, 1, 3, 11, 10, 7, 8, 4],
      [1, 11, 10, 1, 4, 11, 1, 0, 4, 7, 11, 4],
      [4, 7, 8, 9, 0, 11, 9, 11, 10, 11, 0, 3],
      [4, 7, 11, 4, 11, 9, 9, 11, 10],
      [9, 5, 4],
      [9, 5, 4, 0, 8, 3],
      [0, 5, 4, 1, 5, 0],
      [8, 5, 4, 8, 3, 5, 3, 1, 5],
      [1, 2, 10, 9, 5, 4],
      [3, 0, 8, 1, 2, 10, 4, 9, 5],
      [5, 2, 10, 5, 4, 2, 4, 0, 2],
      [2, 10, 5, 3, 2, 5, 3, 5, 4, 3, 4, 8],
      [9, 5, 4, 2, 3, 11],
      [0, 11, 2, 0, 8, 11, 4, 9, 5],
      [0, 5, 4, 0, 1, 5, 2, 3, 11],
      [2, 1, 5, 2, 5, 8, 2, 8, 11, 4, 8, 5],
      [10, 3, 11, 10, 1, 3, 9, 5, 4],
      [4, 9, 5, 0, 8, 1, 8, 10, 1, 8, 11, 10],
      [5, 4, 0, 5, 0, 11, 5, 11, 10, 11, 0, 3],
      [5, 4, 8, 5, 8, 10, 10, 8, 11],
      [9, 7, 8, 5, 7, 9],
      [9, 3, 0, 9, 5, 3, 5, 7, 3],
      [0, 7, 8, 0, 1, 7, 1, 5, 7],
      [1, 5, 3, 3, 5, 7],
      [9, 7, 8, 9, 5, 7, 10, 1, 2],
      [10, 1, 2, 9, 5, 0, 5, 3, 0, 5, 7, 3],
      [8, 0, 2, 8, 2, 5, 8, 5, 7, 10, 5, 2],
      [2, 10, 5, 2, 5, 3, 3, 5, 7],
      [7, 9, 5, 7, 8, 9, 3, 11, 2],
      [9, 5, 7, 9, 7, 2, 9, 2, 0, 2, 7, 11],
      [2, 3, 11, 0, 1, 8, 1, 7, 8, 1, 5, 7],
      [11, 2, 1, 11, 1, 7, 7, 1, 5],
      [9, 5, 8, 8, 5, 7, 10, 1, 3, 10, 3, 11],
      [5, 7, 0, 5, 0, 9, 7, 11, 0, 1, 0, 10, 11, 10, 0],
      [11, 10, 0, 11, 0, 3, 10, 5, 0, 8, 0, 7, 5, 7, 0],
      [11, 10, 5, 7, 11, 5],
      [10, 6, 5],
      [0, 8, 3, 5, 10, 6],
      [9, 0, 1, 5, 10, 6],
      [1, 8, 3, 1, 9, 8, 5, 10, 6],
      [1, 6, 5, 2, 6, 1],
      [1, 6, 5, 1, 2, 6, 3, 0, 8],
      [9, 6, 5, 9, 0, 6, 0, 2, 6],
      [5, 9, 8, 5, 8, 2, 5, 2, 6, 3, 2, 8],
      [2, 3, 11, 10, 6, 5],
      [11, 0, 8, 11, 2, 0, 10, 6, 5],
      [0, 1, 9, 2, 3, 11, 5, 10, 6],
      [5, 10, 6, 1, 9, 2, 9, 11, 2, 9, 8, 11],
      [6, 3, 11, 6, 5, 3, 5, 1, 3],
      [0, 8, 11, 0, 11, 5, 0, 5, 1, 5, 11, 6],
      [3, 11, 6, 0, 3, 6, 0, 6, 5, 0, 5, 9],
      [6, 5, 9, 6, 9, 11, 11, 9, 8],
      [5, 10, 6, 4, 7, 8],
      [4, 3, 0, 4, 7, 3, 6, 5, 10],
      [1, 9, 0, 5, 10, 6, 8, 4, 7],
      [10, 6, 5, 1, 9, 7, 1, 7, 3, 7, 9, 4],
      [6, 1, 2, 6, 5, 1, 4, 7, 8],
      [1, 2, 5, 5, 2, 6, 3, 0, 4, 3, 4, 7],
      [8, 4, 7, 9, 0, 5, 0, 6, 5, 0, 2, 6],
      [7, 3, 9, 7, 9, 4, 3, 2, 9, 5, 9, 6, 2, 6, 9],
      [3, 11, 2, 7, 8, 4, 10, 6, 5],
      [5, 10, 6, 4, 7, 2, 4, 2, 0, 2, 7, 11],
      [0, 1, 9, 4, 7, 8, 2, 3, 11, 5, 10, 6],
      [9, 2, 1, 9, 11, 2, 9, 4, 11, 7, 11, 4, 5, 10, 6],
      [8, 4, 7, 3, 11, 5, 3, 5, 1, 5, 11, 6],
      [5, 1, 11, 5, 11, 6, 1, 0, 11, 7, 11, 4, 0, 4, 11],
      [0, 5, 9, 0, 6, 5, 0, 3, 6, 11, 6, 3, 8, 4, 7],
      [6, 5, 9, 6, 9, 11, 4, 7, 9, 7, 11, 9],
      [10, 4, 9, 6, 4, 10],
      [4, 10, 6, 4, 9, 10, 0, 8, 3],
      [10, 0, 1, 10, 6, 0, 6, 4, 0],
      [8, 3, 1, 8, 1, 6, 8, 6, 4, 6, 1, 10],
      [1, 4, 9, 1, 2, 4, 2, 6, 4],
      [3, 0, 8, 1, 2, 9, 2, 4, 9, 2, 6, 4],
      [0, 2, 4, 4, 2, 6],
      [8, 3, 2, 8, 2, 4, 4, 2, 6],
      [10, 4, 9, 10, 6, 4, 11, 2, 3],
      [0, 8, 2, 2, 8, 11, 4, 9, 10, 4, 10, 6],
      [3, 11, 2, 0, 1, 6, 0, 6, 4, 6, 1, 10],
      [6, 4, 1, 6, 1, 10, 4, 8, 1, 2, 1, 11, 8, 11, 1],
      [9, 6, 4, 9, 3, 6, 9, 1, 3, 11, 6, 3],
      [8, 11, 1, 8, 1, 0, 11, 6, 1, 9, 1, 4, 6, 4, 1],
      [3, 11, 6, 3, 6, 0, 0, 6, 4],
      [6, 4, 8, 11, 6, 8],
      [7, 10, 6, 7, 8, 10, 8, 9, 10],
      [0, 7, 3, 0, 10, 7, 0, 9, 10, 6, 7, 10],
      [10, 6, 7, 1, 10, 7, 1, 7, 8, 1, 8, 0],
      [10, 6, 7, 10, 7, 1, 1, 7, 3],
      [1, 2, 6, 1, 6, 8, 1, 8, 9, 8, 6, 7],
      [2, 6, 9, 2, 9, 1, 6, 7, 9, 0, 9, 3, 7, 3, 9],
      [7, 8, 0, 7, 0, 6, 6, 0, 2],
      [7, 3, 2, 6, 7, 2],
      [2, 3, 11, 10, 6, 8, 10, 8, 9, 8, 6, 7],
      [2, 0, 7, 2, 7, 11, 0, 9, 7, 6, 7, 10, 9, 10, 7],
      [1, 8, 0, 1, 7, 8, 1, 10, 7, 6, 7, 10, 2, 3, 11],
      [11, 2, 1, 11, 1, 7, 10, 6, 1, 6, 7, 1],
      [8, 9, 6, 8, 6, 7, 9, 1, 6, 11, 6, 3, 1, 3, 6],
      [0, 9, 1, 11, 6, 7],
      [7, 8, 0, 7, 0, 6, 3, 11, 0, 11, 6, 0],
      [7, 11, 6],
      [7, 6, 11],
      [3, 0, 8, 11, 7, 6],
      [0, 1, 9, 11, 7, 6],
      [8, 1, 9, 8, 3, 1, 11, 7, 6],
      [10, 1, 2, 6, 11, 7],
      [1, 2, 10, 3, 0, 8, 6, 11, 7],
      [2, 9, 0, 2, 10, 9, 6, 11, 7],
      [6, 11, 7, 2, 10, 3, 10, 8, 3, 10, 9, 8],
      [7, 2, 3, 6, 2, 7],
      [7, 0, 8, 7, 6, 0, 6, 2, 0],
      [2, 7, 6, 2, 3, 7, 0, 1, 9],
      [1, 6, 2, 1, 8, 6, 1, 9, 8, 8, 7, 6],
      [10, 7, 6, 10, 1, 7, 1, 3, 7],
      [10, 7, 6, 1, 7, 10, 1, 8, 7, 1, 0, 8],
      [0, 3, 7, 0, 7, 10, 0, 10, 9, 6, 10, 7],
      [7, 6, 10, 7, 10, 8, 8, 10, 9],
      [6, 8, 4, 11, 8, 6],
      [3, 6, 11, 3, 0, 6, 0, 4, 6],
      [8, 6, 11, 8, 4, 6, 9, 0, 1],
      [9, 4, 6, 9, 6, 3, 9, 3, 1, 11, 3, 6],
      [6, 8, 4, 6, 11, 8, 2, 10, 1],
      [1, 2, 10, 3, 0, 11, 0, 6, 11, 0, 4, 6],
      [4, 11, 8, 4, 6, 11, 0, 2, 9, 2, 10, 9],
      [10, 9, 3, 10, 3, 2, 9, 4, 3, 11, 3, 6, 4, 6, 3],
      [8, 2, 3, 8, 4, 2, 4, 6, 2],
      [0, 4, 2, 4, 6, 2],
      [1, 9, 0, 2, 3, 4, 2, 4, 6, 4, 3, 8],
      [1, 9, 4, 1, 4, 2, 2, 4, 6],
      [8, 1, 3, 8, 6, 1, 8, 4, 6, 6, 10, 1],
      [10, 1, 0, 10, 0, 6, 6, 0, 4],
      [4, 6, 3, 4, 3, 8, 6, 10, 3, 0, 3, 9, 10, 9, 3],
      [10, 9, 4, 6, 10, 4],
      [4, 9, 5, 7, 6, 11],
      [0, 8, 3, 4, 9, 5, 11, 7, 6],
      [5, 0, 1, 5, 4, 0, 7, 6, 11],
      [11, 7, 6, 8, 3, 4, 3, 5, 4, 3, 1, 5],
      [9, 5, 4, 10, 1, 2, 7, 6, 11],
      [6, 11, 7, 1, 2, 10, 0, 8, 3, 4, 9, 5],
      [7, 6, 11, 5, 4, 10, 4, 2, 10, 4, 0, 2],
      [3, 4, 8, 3, 5, 4, 3, 2, 5, 10, 5, 2, 11, 7, 6],
      [7, 2, 3, 7, 6, 2, 5, 4, 9],
      [9, 5, 4, 0, 8, 6, 0, 6, 2, 6, 8, 7],
      [3, 6, 2, 3, 7, 6, 1, 5, 0, 5, 4, 0],
      [6, 2, 8, 6, 8, 7, 2, 1, 8, 4, 8, 5, 1, 5, 8],
      [9, 5, 4, 10, 1, 6, 1, 7, 6, 1, 3, 7],
      [1, 6, 10, 1, 7, 6, 1, 0, 7, 8, 7, 0, 9, 5, 4],
      [4, 0, 10, 4, 10, 5, 0, 3, 10, 6, 10, 7, 3, 7, 10],
      [7, 6, 10, 7, 10, 8, 5, 4, 10, 4, 8, 10],
      [6, 9, 5, 6, 11, 9, 11, 8, 9],
      [3, 6, 11, 0, 6, 3, 0, 5, 6, 0, 9, 5],
      [0, 11, 8, 0, 5, 11, 0, 1, 5, 5, 6, 11],
      [6, 11, 3, 6, 3, 5, 5, 3, 1],
      [1, 2, 10, 9, 5, 11, 9, 11, 8, 11, 5, 6],
      [0, 11, 3, 0, 6, 11, 0, 9, 6, 5, 6, 9, 1, 2, 10],
      [11, 8, 5, 11, 5, 6, 8, 0, 5, 10, 5, 2, 0, 2, 5],
      [6, 11, 3, 6, 3, 5, 2, 10, 3, 10, 5, 3],
      [5, 8, 9, 5, 2, 8, 5, 6, 2, 3, 8, 2],
      [9, 5, 6, 9, 6, 0, 0, 6, 2],
      [1, 5, 8, 1, 8, 0, 5, 6, 8, 3, 8, 2, 6, 2, 8],
      [1, 5, 6, 2, 1, 6],
      [1, 3, 6, 1, 6, 10, 3, 8, 6, 5, 6, 9, 8, 9, 6],
      [10, 1, 0, 10, 0, 6, 9, 5, 0, 5, 6, 0],
      [0, 3, 8, 5, 6, 10],
      [10, 5, 6],
      [11, 5, 10, 7, 5, 11],
      [11, 5, 10, 11, 7, 5, 8, 3, 0],
      [5, 11, 7, 5, 10, 11, 1, 9, 0],
      [10, 7, 5, 10, 11, 7, 9, 8, 1, 8, 3, 1],
      [11, 1, 2, 11, 7, 1, 7, 5, 1],
      [0, 8, 3, 1, 2, 7, 1, 7, 5, 7, 2, 11],
      [9, 7, 5, 9, 2, 7, 9, 0, 2, 2, 11, 7],
      [7, 5, 2, 7, 2, 11, 5, 9, 2, 3, 2, 8, 9, 8, 2],
      [2, 5, 10, 2, 3, 5, 3, 7, 5],
      [8, 2, 0, 8, 5, 2, 8, 7, 5, 10, 2, 5],
      [9, 0, 1, 5, 10, 3, 5, 3, 7, 3, 10, 2],
      [9, 8, 2, 9, 2, 1, 8, 7, 2, 10, 2, 5, 7, 5, 2],
      [1, 3, 5, 3, 7, 5],
      [0, 8, 7, 0, 7, 1, 1, 7, 5],
      [9, 0, 3, 9, 3, 5, 5, 3, 7],
      [9, 8, 7, 5, 9, 7],
      [5, 8, 4, 5, 10, 8, 10, 11, 8],
      [5, 0, 4, 5, 11, 0, 5, 10, 11, 11, 3, 0],
      [0, 1, 9, 8, 4, 10, 8, 10, 11, 10, 4, 5],
      [10, 11, 4, 10, 4, 5, 11, 3, 4, 9, 4, 1, 3, 1, 4],
      [2, 5, 1, 2, 8, 5, 2, 11, 8, 4, 5, 8],
      [0, 4, 11, 0, 11, 3, 4, 5, 11, 2, 11, 1, 5, 1, 11],
      [0, 2, 5, 0, 5, 9, 2, 11, 5, 4, 5, 8, 11, 8, 5],
      [9, 4, 5, 2, 11, 3],
      [2, 5, 10, 3, 5, 2, 3, 4, 5, 3, 8, 4],
      [5, 10, 2, 5, 2, 4, 4, 2, 0],
      [3, 10, 2, 3, 5, 10, 3, 8, 5, 4, 5, 8, 0, 1, 9],
      [5, 10, 2, 5, 2, 4, 1, 9, 2, 9, 4, 2],
      [8, 4, 5, 8, 5, 3, 3, 5, 1],
      [0, 4, 5, 1, 0, 5],
      [8, 4, 5, 8, 5, 3, 9, 0, 5, 0, 3, 5],
      [9, 4, 5],
      [4, 11, 7, 4, 9, 11, 9, 10, 11],
      [0, 8, 3, 4, 9, 7, 9, 11, 7, 9, 10, 11],
      [1, 10, 11, 1, 11, 4, 1, 4, 0, 7, 4, 11],
      [3, 1, 4, 3, 4, 8, 1, 10, 4, 7, 4, 11, 10, 11, 4],
      [4, 11, 7, 9, 11, 4, 9, 2, 11, 9, 1, 2],
      [9, 7, 4, 9, 11, 7, 9, 1, 11, 2, 11, 1, 0, 8, 3],
      [11, 7, 4, 11, 4, 2, 2, 4, 0],
      [11, 7, 4, 11, 4, 2, 8, 3, 4, 3, 2, 4],
      [2, 9, 10, 2, 7, 9, 2, 3, 7, 7, 4, 9],
      [9, 10, 7, 9, 7, 4, 10, 2, 7, 8, 7, 0, 2, 0, 7],
      [3, 7, 10, 3, 10, 2, 7, 4, 10, 1, 10, 0, 4, 0, 10],
      [1, 10, 2, 8, 7, 4],
      [4, 9, 1, 4, 1, 7, 7, 1, 3],
      [4, 9, 1, 4, 1, 7, 0, 8, 1, 8, 7, 1],
      [4, 0, 3, 7, 4, 3],
      [4, 8, 7],
      [9, 10, 8, 10, 11, 8],
      [3, 0, 9, 3, 9, 11, 11, 9, 10],
      [0, 1, 10, 0, 10, 8, 8, 10, 11],
      [3, 1, 10, 11, 3, 10],
      [1, 2, 11, 1, 11, 9, 9, 11, 8],
      [3, 0, 9, 3, 9, 11, 1, 2, 9, 2, 11, 9],
      [0, 2, 11, 8, 0, 11],
      [3, 2, 11],
      [2, 3, 8, 2, 8, 10, 10, 8, 9],
      [9, 10, 2, 0, 9, 2],
      [2, 3, 8, 2, 8, 10, 0, 1, 8, 1, 10, 8],
      [1, 10, 2],
      [1, 3, 8, 9, 1, 8],
      [0, 9, 1],
      [0, 3, 8],
      [],
    ],
    n = [
      [0, 0, 0],
      [1, 0, 0],
      [1, 1, 0],
      [0, 1, 0],
      [0, 0, 1],
      [1, 0, 1],
      [1, 1, 1],
      [0, 1, 1],
    ],
    r = [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 0],
      [4, 5],
      [5, 6],
      [6, 7],
      [7, 4],
      [0, 4],
      [1, 5],
      [2, 6],
      [3, 7],
    ];
  return function (d, k) {
    var b = [],
      c = [],
      h = 0,
      a = new Float32Array(8),
      g = new Int32Array(12),
      l = new Int32Array(3);
    for (l[2] = 0; l[2] < k[2] - 1; ++l[2], h += k[0])
      for (l[1] = 0; l[1] < k[1] - 1; ++l[1], ++h)
        for (l[0] = 0; l[0] < k[0] - 1; ++l[0], ++h) {
          for (var v = 0, m = 0; 8 > m; ++m) {
            var x = n[m];
            x = d[h + x[0] + k[0] * (x[1] + k[1] * x[2])];
            a[m] = x;
            v |= 0 < x ? 1 << m : 0;
          }
          x = e[v];
          if (0 !== x) {
            for (m = 0; 12 > m; ++m)
              if (0 !== (x & (1 << m))) {
                g[m] = b.length;
                var u = [0, 0, 0],
                  w = r[m],
                  z = n[w[0]],
                  y = n[w[1]],
                  f = a[w[0]],
                  q = f - a[w[1]];
                w = 0;
                1e-6 < Math.abs(q) && (w = f / q);
                for (f = 0; 3 > f; ++f) u[f] = l[f] + z[f] + w * (y[f] - z[f]);
                b.push(u);
              }
            v = p[v];
            for (m = 0; m < v.length; m += 3)
              c.push([g[v[m]], g[v[m + 1]], g[v[m + 2]]]);
          }
        }
    return { vertices: b, faces: c };
  };
})();
ChemDoodle.animations = (function (e, p) {
  p = {};
  e.requestAnimFrame = (function () {
    return (
      e.requestAnimationFrame ||
      e.webkitRequestAnimationFrame ||
      e.mozRequestAnimationFrame ||
      e.oRequestAnimationFrame ||
      e.msRequestAnimationFrame ||
      function (n, r) {
        e.setTimeout(n, 1e3 / 60);
      }
    );
  })();
  p.requestInterval = function (n, r) {
    function d() {
      new Date().getTime() - k >= r && (n.call(), (k = new Date().getTime()));
      b.value = e.requestAnimFrame(d);
    }
    if (
      !(
        e.requestAnimationFrame ||
        e.webkitRequestAnimationFrame ||
        (e.mozRequestAnimationFrame && e.mozCancelRequestAnimationFrame) ||
        e.oRequestAnimationFrame ||
        e.msRequestAnimationFrame
      )
    )
      return e.setInterval(n, r);
    let k = new Date().getTime(),
      b = {};
    b.value = e.requestAnimFrame(d);
    return b;
  };
  p.clearRequestInterval = function (n) {
    e.cancelAnimationFrame
      ? e.cancelAnimationFrame(n.value)
      : e.webkitCancelAnimationFrame
      ? e.webkitCancelAnimationFrame(n.value)
      : e.webkitCancelRequestAnimationFrame
      ? e.webkitCancelRequestAnimationFrame(n.value)
      : e.mozCancelRequestAnimationFrame
      ? e.mozCancelRequestAnimationFrame(n.value)
      : e.oCancelRequestAnimationFrame
      ? e.oCancelRequestAnimationFrame(n.value)
      : e.msCancelRequestAnimationFrame
      ? e.msCancelRequestAnimationFrame(n.value)
      : clearInterval(n);
  };
  p.requestTimeout = function (n, r) {
    function d() {
      new Date().getTime() - k >= r
        ? n.call()
        : (b.value = e.requestAnimFrame(d));
    }
    if (
      !(
        e.requestAnimationFrame ||
        e.webkitRequestAnimationFrame ||
        (e.mozRequestAnimationFrame && e.mozCancelRequestAnimationFrame) ||
        e.oRequestAnimationFrame ||
        e.msRequestAnimationFrame
      )
    )
      return e.setTimeout(n, r);
    let k = new Date().getTime(),
      b = {};
    b.value = e.requestAnimFrame(d);
    return b;
  };
  p.clearRequestTimeout = function (n) {
    e.cancelAnimationFrame
      ? e.cancelAnimationFrame(n.value)
      : e.webkitCancelAnimationFrame
      ? e.webkitCancelAnimationFrame(n.value)
      : e.webkitCancelRequestAnimationFrame
      ? e.webkitCancelRequestAnimationFrame(n.value)
      : e.mozCancelRequestAnimationFrame
      ? e.mozCancelRequestAnimationFrame(n.value)
      : e.oCancelRequestAnimationFrame
      ? e.oCancelRequestAnimationFrame(n.value)
      : e.msCancelRequestAnimationFrame
      ? e.msCancelRequestAnimationFrame(n.value)
      : clearTimeout(n);
  };
  return p;
})(window);
ChemDoodle.extensions = (function (e, p, n, r) {
  return {
    vec3AngleFrom: function (d, e) {
      let b = p.length(d),
        c = p.length(e);
      d = p.dot(d, e);
      return n.acos(d / b / c);
    },
    contextRoundRect: function (d, e, b, c, h, a) {
      d.beginPath();
      d.moveTo(e + a, b);
      d.lineTo(e + c - a, b);
      d.quadraticCurveTo(e + c, b, e + c, b + a);
      d.lineTo(e + c, b + h - a);
      d.quadraticCurveTo(e + c, b + h, e + c - a, b + h);
      d.lineTo(e + a, b + h);
      d.quadraticCurveTo(e, b + h, e, b + h - a);
      d.lineTo(e, b + a);
      d.quadraticCurveTo(e, b, e + a, b);
      d.closePath();
    },
    contextEllipse: function (d, e, b, c, h) {
      let a = (c / 2) * 0.5522848,
        g = (h / 2) * 0.5522848,
        l = e + c,
        v = b + h;
      c = e + c / 2;
      h = b + h / 2;
      d.beginPath();
      d.moveTo(e, h);
      d.bezierCurveTo(e, h - g, c - a, b, c, b);
      d.bezierCurveTo(c + a, b, l, h - g, l, h);
      d.bezierCurveTo(l, h + g, c + a, v, c, v);
      d.bezierCurveTo(c - a, v, e, h + g, e, h);
      d.closePath();
    },
    getFontString: function (d, e, b, c) {
      let h = [];
      b && h.push("bold ");
      c && h.push("italic ");
      h.push(d + "px ");
      for (let a = 0, b = e.length; a < b; a++)
        (d = e[a]),
          -1 !== d.indexOf(" ") && (d = '"' + d + '"'),
          h.push((0 !== a ? "," : "") + d);
      return h.join("");
    },
  };
})(ChemDoodle.structures, ChemDoodle.lib.vec3, Math);
(function (e, p, n) {
  p.sign ||
    (p.sign = function (e) {
      return (0 < e) - (0 > e) || +e;
    });
  "function" != typeof e.assign &&
    (e.assign = function (r, d) {
      if (null == r)
        throw new TypeError("Cannot convert undefined or null to object");
      for (var k = e(r), b = 1; b < arguments.length; b++) {
        var c = arguments[b];
        if (null != c)
          for (var h in c)
            e.prototype.hasOwnProperty.call(c, h) && (k[h] = c[h]);
      }
      return k;
    });
  String.prototype.startsWith ||
    (String.prototype.startsWith = function (e, d) {
      return this.substr(d || 0, e.length) === e;
    });
})(Object, Math);
ChemDoodle.math = (function (e, p, n, r, d) {
  let k = {},
    b = {
      aliceblue: "#f0f8ff",
      antiquewhite: "#faebd7",
      aqua: "#00ffff",
      aquamarine: "#7fffd4",
      azure: "#f0ffff",
      beige: "#f5f5dc",
      bisque: "#ffe4c4",
      black: "#000000",
      blanchedalmond: "#ffebcd",
      blue: "#0000ff",
      blueviolet: "#8a2be2",
      brown: "#a52a2a",
      burlywood: "#deb887",
      cadetblue: "#5f9ea0",
      chartreuse: "#7fff00",
      chocolate: "#d2691e",
      coral: "#ff7f50",
      cornflowerblue: "#6495ed",
      cornsilk: "#fff8dc",
      crimson: "#dc143c",
      cyan: "#00ffff",
      darkblue: "#00008b",
      darkcyan: "#008b8b",
      darkgoldenrod: "#b8860b",
      darkgray: "#a9a9a9",
      darkgreen: "#006400",
      darkkhaki: "#bdb76b",
      darkmagenta: "#8b008b",
      darkolivegreen: "#556b2f",
      darkorange: "#ff8c00",
      darkorchid: "#9932cc",
      darkred: "#8b0000",
      darksalmon: "#e9967a",
      darkseagreen: "#8fbc8f",
      darkslateblue: "#483d8b",
      darkslategray: "#2f4f4f",
      darkturquoise: "#00ced1",
      darkviolet: "#9400d3",
      deeppink: "#ff1493",
      deepskyblue: "#00bfff",
      dimgray: "#696969",
      dodgerblue: "#1e90ff",
      firebrick: "#b22222",
      floralwhite: "#fffaf0",
      forestgreen: "#228b22",
      fuchsia: "#ff00ff",
      gainsboro: "#dcdcdc",
      ghostwhite: "#f8f8ff",
      gold: "#ffd700",
      goldenrod: "#daa520",
      gray: "#808080",
      green: "#008000",
      greenyellow: "#adff2f",
      honeydew: "#f0fff0",
      hotpink: "#ff69b4",
      "indianred ": "#cd5c5c",
      "indigo ": "#4b0082",
      ivory: "#fffff0",
      khaki: "#f0e68c",
      lavender: "#e6e6fa",
      lavenderblush: "#fff0f5",
      lawngreen: "#7cfc00",
      lemonchiffon: "#fffacd",
      lightblue: "#add8e6",
      lightcoral: "#f08080",
      lightcyan: "#e0ffff",
      lightgoldenrodyellow: "#fafad2",
      lightgrey: "#d3d3d3",
      lightgreen: "#90ee90",
      lightpink: "#ffb6c1",
      lightsalmon: "#ffa07a",
      lightseagreen: "#20b2aa",
      lightskyblue: "#87cefa",
      lightslategray: "#778899",
      lightsteelblue: "#b0c4de",
      lightyellow: "#ffffe0",
      lime: "#00ff00",
      limegreen: "#32cd32",
      linen: "#faf0e6",
      magenta: "#ff00ff",
      maroon: "#800000",
      mediumaquamarine: "#66cdaa",
      mediumblue: "#0000cd",
      mediumorchid: "#ba55d3",
      mediumpurple: "#9370d8",
      mediumseagreen: "#3cb371",
      mediumslateblue: "#7b68ee",
      mediumspringgreen: "#00fa9a",
      mediumturquoise: "#48d1cc",
      mediumvioletred: "#c71585",
      midnightblue: "#191970",
      mintcream: "#f5fffa",
      mistyrose: "#ffe4e1",
      moccasin: "#ffe4b5",
      navajowhite: "#ffdead",
      navy: "#000080",
      oldlace: "#fdf5e6",
      olive: "#808000",
      olivedrab: "#6b8e23",
      orange: "#ffa500",
      orangered: "#ff4500",
      orchid: "#da70d6",
      palegoldenrod: "#eee8aa",
      palegreen: "#98fb98",
      paleturquoise: "#afeeee",
      palevioletred: "#d87093",
      papayawhip: "#ffefd5",
      peachpuff: "#ffdab9",
      peru: "#cd853f",
      pink: "#ffc0cb",
      plum: "#dda0dd",
      powderblue: "#b0e0e6",
      purple: "#800080",
      red: "#ff0000",
      rosybrown: "#bc8f8f",
      royalblue: "#4169e1",
      saddlebrown: "#8b4513",
      salmon: "#fa8072",
      sandybrown: "#f4a460",
      seagreen: "#2e8b57",
      seashell: "#fff5ee",
      sienna: "#a0522d",
      silver: "#c0c0c0",
      skyblue: "#87ceeb",
      slateblue: "#6a5acd",
      slategray: "#708090",
      snow: "#fffafa",
      springgreen: "#00ff7f",
      steelblue: "#4682b4",
      tan: "#d2b48c",
      teal: "#008080",
      thistle: "#d8bfd8",
      tomato: "#ff6347",
      turquoise: "#40e0d0",
      violet: "#ee82ee",
      wheat: "#f5deb3",
      white: "#ffffff",
      whitesmoke: "#f5f5f5",
      yellow: "#ffff00",
      yellowgreen: "#9acd32",
    };
  k.angleBetweenLargest = function (b) {
    if (0 === b.length) return { angle: 0, largest: 2 * r.PI };
    if (1 === b.length) return { angle: b[0] + r.PI, largest: 2 * r.PI };
    let c = 0,
      a = 0;
    for (let h = 0, d = b.length - 1; h < d; h++) {
      var g = b[h + 1] - b[h];
      g > c && ((c = g), (a = (b[h + 1] + b[h]) / 2));
    }
    g = b[0] + 2 * r.PI - b[b.length - 1];
    g > c && ((a = b[0] - g / 2), (c = g), 0 > a && (a += 2 * r.PI));
    return { angle: a, largest: c };
  };
  k.isBetween = function (b, h, a) {
    if (h > a) {
      let b = h;
      h = a;
      a = b;
    }
    return b >= h && b <= a;
  };
  n(document).ready(function () {
    e &&
      e.iChemLabs &&
      e.iChemLabs.checkForUpdates &&
      e.iChemLabs.checkForUpdates({});
  });
  k.getRGB = function (c, h) {
    let a = [0, 0, 0];
    b[c.toLowerCase()] && (c = b[c.toLowerCase()]);
    return "#" === c.charAt(0)
      ? (4 === c.length &&
          (c =
            "#" +
            c.charAt(1) +
            c.charAt(1) +
            c.charAt(2) +
            c.charAt(2) +
            c.charAt(3) +
            c.charAt(3)),
        [
          (parseInt(c.substring(1, 3), 16) / 255) * h,
          (parseInt(c.substring(3, 5), 16) / 255) * h,
          (parseInt(c.substring(5, 7), 16) / 255) * h,
        ])
      : c.startsWith("rgba")
      ? ((c = c.replace(/rgba\(|\)/g, "").split(",")),
        4 !== c.length
          ? a
          : [
              (parseInt(c[0]) / 255) * h,
              (parseInt(c[1]) / 255) * h,
              (parseInt(c[2]) / 255) * h,
              (parseInt(c[3]) / 255) * h,
            ])
      : c.startsWith("rgb")
      ? ((c = c.replace(/rgb\(|\)/g, "").split(",")),
        3 !== c.length
          ? a
          : [
              (parseInt(c[0]) / 255) * h,
              (parseInt(c[1]) / 255) * h,
              (parseInt(c[2]) / 255) * h,
            ])
      : a;
  };
  k.hsl2rgb = function (b, h, a) {
    let c = function (a, b, c) {
      0 > c ? (c += 1) : 1 < c && --c;
      return c < 1 / 6
        ? a + 6 * (b - a) * c
        : 0.5 > c
        ? b
        : c < 2 / 3
        ? a + (b - a) * (2 / 3 - c) * 6
        : a;
    };
    if (0 === h) a = h = b = a;
    else {
      let g = 0.5 > a ? a * (1 + h) : a + h - a * h,
        d = 2 * a - g;
      a = c(d, g, b + 1 / 3);
      h = c(d, g, b);
      b = c(d, g, b - 1 / 3);
    }
    return [255 * a, 255 * h, 255 * b];
  };
  k.idx2color = function (b) {
    b = b.toString(16);
    for (let c = 0, a = 6 - b.length; c < a; c++) b = "0" + b;
    return "#" + b;
  };
  k.distanceFromPointToLineInclusive = function (b, h, a, g) {
    let c = h.distance(a);
    a = h.angle(a);
    a = r.PI / 2 - a;
    a = h.angle(b) + a;
    b = h.distance(b);
    b = new p.Point(b * r.cos(a), -b * r.sin(a));
    g = g ? g : 0;
    return k.isBetween(-b.y, g, c - g) ? r.abs(b.x) : -1;
  };
  k.calculateDistanceInterior = function (b, h, a) {
    if (
      this.isBetween(h.x, a.x, a.x + a.w) &&
      this.isBetween(h.y, a.y, a.y + a.h)
    )
      return b.distance(h);
    var c = [];
    c.push({ x1: a.x, y1: a.y, x2: a.x + a.w, y2: a.y });
    c.push({ x1: a.x, y1: a.y + a.h, x2: a.x + a.w, y2: a.y + a.h });
    c.push({ x1: a.x, y1: a.y, x2: a.x, y2: a.y + a.h });
    c.push({ x1: a.x + a.w, y1: a.y, x2: a.x + a.w, y2: a.y + a.h });
    a = [];
    for (var d = 0; 4 > d; d++) {
      var v = c[d];
      (v = this.intersectLines(h.x, h.y, b.x, b.y, v.x1, v.y1, v.x2, v.y2)) &&
        a.push(v);
    }
    if (0 === a.length) return 0;
    h = 0;
    for (let g = 0, l = a.length; g < l; g++)
      (d = a[g]),
        (c = b.x - d.x),
        (d = b.y - d.y),
        (h = r.max(h, r.sqrt(c * c + d * d)));
    return h;
  };
  k.intersectLines = function (b, h, a, g, d, v, m, e) {
    a -= b;
    g -= h;
    m -= d;
    e -= v;
    let c = g * m - a * e;
    if (0 === c) return !1;
    m = (e * (b - d) - m * (h - v)) / c;
    d = (g * (b - d) - a * (h - v)) / c;
    return 0 <= d && 1 >= d && 0 <= m && 1 >= m
      ? { x: b + m * a, y: h + m * g }
      : !1;
  };
  k.clamp = function (b, h, a) {
    return b < h ? h : b > a ? a : b;
  };
  k.rainbowAt = function (b, h, a) {
    1 > a.length
      ? a.push("#000000", "#FFFFFF")
      : 2 > a.length && a.push("#FFFFFF");
    var c = h / (a.length - 1);
    h = r.floor(b / c);
    b = (b - h * c) / c;
    c = k.getRGB(a[h], 1);
    a = k.getRGB(a[h + 1], 1);
    return (
      "rgb(" +
      [
        255 * (c[0] + (a[0] - c[0]) * b),
        255 * (c[1] + (a[1] - c[1]) * b),
        255 * (c[2] + (a[2] - c[2]) * b),
      ].join() +
      ")"
    );
  };
  k.angleBounds = function (b, h, a) {
    let c = 2 * r.PI;
    for (; 0 > b; ) b += c;
    for (; b > c; ) b -= c;
    a && b > r.PI && (b = 2 * r.PI - b);
    h && (b = (180 * b) / r.PI);
    return b;
  };
  k.isPointInPoly = function (b, h) {
    for (var a = !1, c = -1, d = b.length, v = d - 1; ++c < d; v = c)
      ((b[c].y <= h.y && h.y < b[v].y) || (b[v].y <= h.y && h.y < b[c].y)) &&
        h.x <
          ((b[v].x - b[c].x) * (h.y - b[c].y)) / (b[v].y - b[c].y) + b[c].x &&
        (a = !a);
    return a;
  };
  return k;
})(ChemDoodle, ChemDoodle.structures, ChemDoodle.lib.jQuery, Math);
(function (e, p, n) {
  e.Bounds = function () {};
  let r = e.Bounds.prototype;
  r.minX = r.minY = r.minZ = Infinity;
  r.maxX = r.maxY = r.maxZ = -Infinity;
  r.expand = function (d, k, b, c) {
    d instanceof e.Bounds
      ? ((this.minX = p.min(this.minX, d.minX)),
        (this.minY = p.min(this.minY, d.minY)),
        (this.maxX = p.max(this.maxX, d.maxX)),
        (this.maxY = p.max(this.maxY, d.maxY)),
        Infinity !== d.maxZ &&
          ((this.minZ = p.min(this.minZ, d.minZ)),
          (this.maxZ = p.max(this.maxZ, d.maxZ))))
      : ((this.minX = p.min(this.minX, d)),
        (this.maxX = p.max(this.maxX, d)),
        (this.minY = p.min(this.minY, k)),
        (this.maxY = p.max(this.maxY, k)),
        b !== n &&
          c !== n &&
          ((this.minX = p.min(this.minX, b)),
          (this.maxX = p.max(this.maxX, b)),
          (this.minY = p.min(this.minY, c)),
          (this.maxY = p.max(this.maxY, c))));
  };
  r.expand3D = function (d, e, b, c, h, a) {
    this.minX = p.min(this.minX, d);
    this.maxX = p.max(this.maxX, d);
    this.minY = p.min(this.minY, e);
    this.maxY = p.max(this.maxY, e);
    this.minZ = p.min(this.minZ, b);
    this.maxZ = p.max(this.maxZ, b);
    c !== n &&
      h !== n &&
      a !== n &&
      ((this.minX = p.min(this.minX, c)),
      (this.maxX = p.max(this.maxX, c)),
      (this.minY = p.min(this.minY, h)),
      (this.maxY = p.max(this.maxY, h)),
      (this.minZ = p.min(this.minZ, a)),
      (this.maxZ = p.max(this.maxZ, a)));
  };
})(ChemDoodle.math, Math);
ChemDoodle.featureDetection = (function (e, p, n, r, d) {
  let k = {
    supports_canvas: function () {
      return !!n.createElement("canvas").getContext;
    },
    supports_canvas_text: function () {
      return k.supports_canvas()
        ? "function" ===
            typeof n.createElement("canvas").getContext("2d").fillText
        : !1;
    },
    supports_webgl: function () {
      let b = n.createElement("canvas");
      try {
        if (b.getContext("webgl") || b.getContext("experimental-webgl"))
          return !0;
      } catch (c) {}
      return !1;
    },
    supports_xhr2: function () {
      return p.support.cors;
    },
    supports_touch: function () {
      let b =
        (/iPhone|iPad|iPod|Android|BlackBerry|BB10/i.test(
          navigator.userAgent
        ) ||
          ("MacIntel" === navigator.platform &&
            1 < navigator.maxTouchPoints)) &&
        !r.MSStream;
      return "ontouchstart" in r && b;
    },
    supports_gesture: function () {
      return "ongesturestart" in r;
    },
  };
  return k;
})(ChemDoodle.iChemLabs, ChemDoodle.lib.jQuery, document, window);
ChemDoodle.SYMBOLS =
  "H He Li Be B C N O F Ne Na Mg Al Si P S Cl Ar K Ca Sc Ti V Cr Mn Fe Co Ni Cu Zn Ga Ge As Se Br Kr Rb Sr Y Zr Nb Mo Tc Ru Rh Pd Ag Cd In Sn Sb Te I Xe Cs Ba La Ce Pr Nd Pm Sm Eu Gd Tb Dy Ho Er Tm Yb Lu Hf Ta W Re Os Ir Pt Au Hg Tl Pb Bi Po At Rn Fr Ra Ac Th Pa U Np Pu Am Cm Bk Cf Es Fm Md No Lr Rf Db Sg Bh Hs Mt Ds Rg Cn Nh Fl Mc Lv Ts Og".split(
    " "
  );
ChemDoodle.ELEMENT = (function (e, p) {
  function n(e, d, k, b, c, h, a, g, l) {
    this.symbol = e;
    this.name = d;
    this.atomicNumber = k;
    this.addH = b;
    this.jmolColor = this.pymolColor = c;
    this.covalentRadius = h;
    this.vdWRadius = a;
    this.valency = g;
    this.mass = l;
  }
  e = [];
  e.H = new n("H", "Hydrogen", 1, !1, "#FFFFFF", 0.31, 1.1, 1, 1);
  e.He = new n("He", "Helium", 2, !1, "#D9FFFF", 0.28, 1.4, 0, 4);
  e.Li = new n("Li", "Lithium", 3, !1, "#CC80FF", 1.28, 1.82, 1, 7);
  e.Be = new n("Be", "Beryllium", 4, !1, "#C2FF00", 0.96, 1.53, 2, 9);
  e.B = new n("B", "Boron", 5, !0, "#FFB5B5", 0.84, 1.92, 3, 11);
  e.C = new n("C", "Carbon", 6, !0, "#909090", 0.76, 1.7, 4, 12);
  e.N = new n("N", "Nitrogen", 7, !0, "#3050F8", 0.71, 1.55, 3, 14);
  e.O = new n("O", "Oxygen", 8, !0, "#FF0D0D", 0.66, 1.52, 2, 16);
  e.F = new n("F", "Fluorine", 9, !0, "#90E050", 0.57, 1.47, 1, 19);
  e.Ne = new n("Ne", "Neon", 10, !1, "#B3E3F5", 0.58, 1.54, 0, 20);
  e.Na = new n("Na", "Sodium", 11, !1, "#AB5CF2", 1.66, 2.27, 1, 23);
  e.Mg = new n("Mg", "Magnesium", 12, !1, "#8AFF00", 1.41, 1.73, 0, 24);
  e.Al = new n("Al", "Aluminum", 13, !1, "#BFA6A6", 1.21, 1.84, 0, 27);
  e.Si = new n("Si", "Silicon", 14, !0, "#F0C8A0", 1.11, 2.1, 4, 28);
  e.P = new n("P", "Phosphorus", 15, !0, "#FF8000", 1.07, 1.8, 3, 31);
  e.S = new n("S", "Sulfur", 16, !0, "#FFFF30", 1.05, 1.8, 2, 32);
  e.Cl = new n("Cl", "Chlorine", 17, !0, "#1FF01F", 1.02, 1.75, 1, 35);
  e.Ar = new n("Ar", "Argon", 18, !1, "#80D1E3", 1.06, 1.88, 0, 40);
  e.K = new n("K", "Potassium", 19, !1, "#8F40D4", 2.03, 2.75, 0, 39);
  e.Ca = new n("Ca", "Calcium", 20, !1, "#3DFF00", 1.76, 2.31, 0, 40);
  e.Sc = new n("Sc", "Scandium", 21, !1, "#E6E6E6", 1.7, 0, 0, 45);
  e.Ti = new n("Ti", "Titanium", 22, !1, "#BFC2C7", 1.6, 0, 1, 48);
  e.V = new n("V", "Vanadium", 23, !1, "#A6A6AB", 1.53, 0, 1, 51);
  e.Cr = new n("Cr", "Chromium", 24, !1, "#8A99C7", 1.39, 0, 2, 52);
  e.Mn = new n("Mn", "Manganese", 25, !1, "#9C7AC7", 1.39, 0, 3, 55);
  e.Fe = new n("Fe", "Iron", 26, !1, "#E06633", 1.32, 0, 2, 56);
  e.Co = new n("Co", "Cobalt", 27, !1, "#F090A0", 1.26, 0, 1, 59);
  e.Ni = new n("Ni", "Nickel", 28, !1, "#50D050", 1.24, 1.63, 1, 58);
  e.Cu = new n("Cu", "Copper", 29, !1, "#C88033", 1.32, 1.4, 0, 63);
  e.Zn = new n("Zn", "Zinc", 30, !1, "#7D80B0", 1.22, 1.39, 0, 64);
  e.Ga = new n("Ga", "Gallium", 31, !1, "#C28F8F", 1.22, 1.87, 0, 69);
  e.Ge = new n("Ge", "Germanium", 32, !1, "#668F8F", 1.2, 2.11, 4, 74);
  e.As = new n("As", "Arsenic", 33, !0, "#BD80E3", 1.19, 1.85, 3, 75);
  e.Se = new n("Se", "Selenium", 34, !0, "#FFA100", 1.2, 1.9, 2, 80);
  e.Br = new n("Br", "Bromine", 35, !0, "#A62929", 1.2, 1.85, 1, 79);
  e.Kr = new n("Kr", "Krypton", 36, !1, "#5CB8D1", 1.16, 2.02, 0, 84);
  e.Rb = new n("Rb", "Rubidium", 37, !1, "#702EB0", 2.2, 3.03, 0, 85);
  e.Sr = new n("Sr", "Strontium", 38, !1, "#00FF00", 1.95, 2.49, 0, 88);
  e.Y = new n("Y", "Yttrium", 39, !1, "#94FFFF", 1.9, 0, 0, 89);
  e.Zr = new n("Zr", "Zirconium", 40, !1, "#94E0E0", 1.75, 0, 0, 90);
  e.Nb = new n("Nb", "Niobium", 41, !1, "#73C2C9", 1.64, 0, 1, 93);
  e.Mo = new n("Mo", "Molybdenum", 42, !1, "#54B5B5", 1.54, 0, 2, 98);
  e.Tc = new n("Tc", "Technetium", 43, !1, "#3B9E9E", 1.47, 0, 3, 0);
  e.Ru = new n("Ru", "Ruthenium", 44, !1, "#248F8F", 1.46, 0, 2, 102);
  e.Rh = new n("Rh", "Rhodium", 45, !1, "#0A7D8C", 1.42, 0, 1, 103);
  e.Pd = new n("Pd", "Palladium", 46, !1, "#006985", 1.39, 1.63, 0, 106);
  e.Ag = new n("Ag", "Silver", 47, !1, "#C0C0C0", 1.45, 1.72, 0, 107);
  e.Cd = new n("Cd", "Cadmium", 48, !1, "#FFD98F", 1.44, 1.58, 0, 114);
  e.In = new n("In", "Indium", 49, !1, "#A67573", 1.42, 1.93, 0, 115);
  e.Sn = new n("Sn", "Tin", 50, !1, "#668080", 1.39, 2.17, 4, 120);
  e.Sb = new n("Sb", "Antimony", 51, !1, "#9E63B5", 1.39, 2.06, 3, 121);
  e.Te = new n("Te", "Tellurium", 52, !0, "#D47A00", 1.38, 2.06, 2, 130);
  e.I = new n("I", "Iodine", 53, !0, "#940094", 1.39, 1.98, 1, 127);
  e.Xe = new n("Xe", "Xenon", 54, !1, "#429EB0", 1.4, 2.16, 0, 132);
  e.Cs = new n("Cs", "Cesium", 55, !1, "#57178F", 2.44, 3.43, 0, 133);
  e.Ba = new n("Ba", "Barium", 56, !1, "#00C900", 2.15, 2.68, 0, 138);
  e.La = new n("La", "Lanthanum", 57, !1, "#70D4FF", 2.07, 0, 0, 139);
  e.Ce = new n("Ce", "Cerium", 58, !1, "#FFFFC7", 2.04, 0, 0, 140);
  e.Pr = new n("Pr", "Praseodymium", 59, !1, "#D9FFC7", 2.03, 0, 0, 141);
  e.Nd = new n("Nd", "Neodymium", 60, !1, "#C7FFC7", 2.01, 0, 0, 142);
  e.Pm = new n("Pm", "Promethium", 61, !1, "#A3FFC7", 1.99, 0, 0, 0);
  e.Sm = new n("Sm", "Samarium", 62, !1, "#8FFFC7", 1.98, 0, 0, 152);
  e.Eu = new n("Eu", "Europium", 63, !1, "#61FFC7", 1.98, 0, 0, 153);
  e.Gd = new n("Gd", "Gadolinium", 64, !1, "#45FFC7", 1.96, 0, 0, 158);
  e.Tb = new n("Tb", "Terbium", 65, !1, "#30FFC7", 1.94, 0, 0, 159);
  e.Dy = new n("Dy", "Dysprosium", 66, !1, "#1FFFC7", 1.92, 0, 0, 164);
  e.Ho = new n("Ho", "Holmium", 67, !1, "#00FF9C", 1.92, 0, 0, 165);
  e.Er = new n("Er", "Erbium", 68, !1, "#00E675", 1.89, 0, 0, 166);
  e.Tm = new n("Tm", "Thulium", 69, !1, "#00D452", 1.9, 0, 0, 169);
  e.Yb = new n("Yb", "Ytterbium", 70, !1, "#00BF38", 1.87, 0, 0, 174);
  e.Lu = new n("Lu", "Lutetium", 71, !1, "#00AB24", 1.87, 0, 0, 175);
  e.Hf = new n("Hf", "Hafnium", 72, !1, "#4DC2FF", 1.75, 0, 0, 180);
  e.Ta = new n("Ta", "Tantalum", 73, !1, "#4DA6FF", 1.7, 0, 1, 181);
  e.W = new n("W", "Tungsten", 74, !1, "#2194D6", 1.62, 0, 2, 184);
  e.Re = new n("Re", "Rhenium", 75, !1, "#267DAB", 1.51, 0, 3, 187);
  e.Os = new n("Os", "Osmium", 76, !1, "#266696", 1.44, 0, 2, 192);
  e.Ir = new n("Ir", "Iridium", 77, !1, "#175487", 1.41, 0, 3, 193);
  e.Pt = new n("Pt", "Platinum", 78, !1, "#D0D0E0", 1.36, 1.75, 0, 195);
  e.Au = new n("Au", "Gold", 79, !1, "#FFD123", 1.36, 1.66, 1, 197);
  e.Hg = new n("Hg", "Mercury", 80, !1, "#B8B8D0", 1.32, 1.55, 0, 202);
  e.Tl = new n("Tl", "Thallium", 81, !1, "#A6544D", 1.45, 1.96, 0, 205);
  e.Pb = new n("Pb", "Lead", 82, !1, "#575961", 1.46, 2.02, 4, 208);
  e.Bi = new n("Bi", "Bismuth", 83, !1, "#9E4FB5", 1.48, 2.07, 3, 209);
  e.Po = new n("Po", "Polonium", 84, !1, "#AB5C00", 1.4, 1.97, 2, 0);
  e.At = new n("At", "Astatine", 85, !0, "#754F45", 1.5, 2.02, 1, 0);
  e.Rn = new n("Rn", "Radon", 86, !1, "#428296", 1.5, 2.2, 0, 0);
  e.Fr = new n("Fr", "Francium", 87, !1, "#420066", 2.6, 3.48, 0, 0);
  e.Ra = new n("Ra", "Radium", 88, !1, "#007D00", 2.21, 2.83, 0, 0);
  e.Ac = new n("Ac", "Actinium", 89, !1, "#70ABFA", 2.15, 0, 0, 0);
  e.Th = new n("Th", "Thorium", 90, !1, "#00BAFF", 2.06, 0, 0, 232);
  e.Pa = new n("Pa", "Protactinium", 91, !1, "#00A1FF", 2, 0, 0, 231);
  e.U = new n("U", "Uranium", 92, !1, "#008FFF", 1.96, 1.86, 0, 238);
  e.Np = new n("Np", "Neptunium", 93, !1, "#0080FF", 1.9, 0, 0, 0);
  e.Pu = new n("Pu", "Plutonium", 94, !1, "#006BFF", 1.87, 0, 0, 0);
  e.Am = new n("Am", "Americium", 95, !1, "#545CF2", 1.8, 0, 0, 0);
  e.Cm = new n("Cm", "Curium", 96, !1, "#785CE3", 1.69, 0, 0, 0);
  e.Bk = new n("Bk", "Berkelium", 97, !1, "#8A4FE3", 0, 0, 0, 0);
  e.Cf = new n("Cf", "Californium", 98, !1, "#A136D4", 0, 0, 0, 0);
  e.Es = new n("Es", "Einsteinium", 99, !1, "#B31FD4", 0, 0, 0, 0);
  e.Fm = new n("Fm", "Fermium", 100, !1, "#B31FBA", 0, 0, 0, 0);
  e.Md = new n("Md", "Mendelevium", 101, !1, "#B30DA6", 0, 0, 0, 0);
  e.No = new n("No", "Nobelium", 102, !1, "#BD0D87", 0, 0, 0, 0);
  e.Lr = new n("Lr", "Lawrencium", 103, !1, "#C70066", 0, 0, 0, 0);
  e.Rf = new n("Rf", "Rutherfordium", 104, !1, "#CC0059", 0, 0, 0, 0);
  e.Db = new n("Db", "Dubnium", 105, !1, "#D1004F", 0, 0, 0, 0);
  e.Sg = new n("Sg", "Seaborgium", 106, !1, "#D90045", 0, 0, 0, 0);
  e.Bh = new n("Bh", "Bohrium", 107, !1, "#E00038", 0, 0, 0, 0);
  e.Hs = new n("Hs", "Hassium", 108, !1, "#E6002E", 0, 0, 0, 0);
  e.Mt = new n("Mt", "Meitnerium", 109, !1, "#EB0026", 0, 0, 0, 0);
  e.Ds = new n("Ds", "Darmstadtium", 110, !1, "#000000", 0, 0, 0, 0);
  e.Rg = new n("Rg", "Roentgenium", 111, !1, "#000000", 0, 0, 0, 0);
  e.Cn = new n("Cn", "Copernicium", 112, !1, "#000000", 0, 0, 0, 0);
  e.Nh = new n("Nh", "Nihonium", 113, !1, "#000000", 0, 0, 0, 0);
  e.Fl = new n("Fl", "Flerovium", 114, !1, "#000000", 0, 0, 0, 0);
  e.Mc = new n("Mc", "Moscovium", 115, !1, "#000000", 0, 0, 0, 0);
  e.Lv = new n("Lv", "Livermorium", 116, !1, "#000000", 0, 0, 0, 0);
  e.Ts = new n("Ts", "Tennessine", 117, !1, "#000000", 0, 0, 0, 0);
  e.Og = new n("Og", "Oganesson", 118, !1, "#000000", 0, 0, 0, 0);
  e.H.pymolColor = "#E6E6E6";
  e.C.pymolColor = "#33FF33";
  e.N.pymolColor = "#3333FF";
  e.O.pymolColor = "#FF4D4D";
  e.F.pymolColor = "#B3FFFF";
  e.S.pymolColor = "#E6C640";
  return e;
})(ChemDoodle.SYMBOLS);
ChemDoodle.RESIDUE = (function (e) {
  function p(e, r, d, k, b, c) {
    this.symbol = e;
    this.name = r;
    this.polar = d;
    this.aminoColor = k;
    this.shapelyColor = b;
    this.acidity = c;
  }
  e = [];
  e.Ala = new p("Ala", "Alanine", !1, "#C8C8C8", "#8CFF8C", 0);
  e.Arg = new p("Arg", "Arginine", !0, "#145AFF", "#00007C", 1);
  e.Asn = new p("Asn", "Asparagine", !0, "#00DCDC", "#FF7C70", 0);
  e.Asp = new p("Asp", "Aspartic Acid", !0, "#E60A0A", "#A00042", -1);
  e.Cys = new p("Cys", "Cysteine", !0, "#E6E600", "#FFFF70", 0);
  e.Gln = new p("Gln", "Glutamine", !0, "#00DCDC", "#FF4C4C", 0);
  e.Glu = new p("Glu", "Glutamic Acid", !0, "#E60A0A", "#660000", -1);
  e.Gly = new p("Gly", "Glycine", !1, "#EBEBEB", "#FFFFFF", 0);
  e.His = new p("His", "Histidine", !0, "#8282D2", "#7070FF", 1);
  e.Ile = new p("Ile", "Isoleucine", !1, "#0F820F", "#004C00", 0);
  e.Leu = new p("Leu", "Leucine", !1, "#0F820F", "#455E45", 0);
  e.Lys = new p("Lys", "Lysine", !0, "#145AFF", "#4747B8", 1);
  e.Met = new p("Met", "Methionine", !1, "#E6E600", "#B8A042", 0);
  e.Phe = new p("Phe", "Phenylalanine", !1, "#3232AA", "#534C52", 0);
  e.Pro = new p("Pro", "Proline", !1, "#DC9682", "#525252", 0);
  e.Ser = new p("Ser", "Serine", !0, "#FA9600", "#FF7042", 0);
  e.Thr = new p("Thr", "Threonine", !0, "#FA9600", "#B84C00", 0);
  e.Trp = new p("Trp", "Tryptophan", !0, "#B45AB4", "#4F4600", 0);
  e.Tyr = new p("Tyr", "Tyrosine", !0, "#3232AA", "#8C704C", 0);
  e.Val = new p("Val", "Valine", !1, "#0F820F", "#FF8CFF", 0);
  e.Asx = new p("Asx", "Asparagine/Aspartic Acid", !0, "#FF69B4", "#FF00FF", 0);
  e.Glx = new p("Glx", "Glutamine/Glutamic Acid", !0, "#FF69B4", "#FF00FF", 0);
  e["*"] = new p("*", "Other", !1, "#BEA06E", "#FF00FF", 0);
  e.A = new p("A", "Adenine", !1, "#BEA06E", "#A0A0FF", 0);
  e.G = new p("G", "Guanine", !1, "#BEA06E", "#FF7070", 0);
  e.I = new p("I", "", !1, "#BEA06E", "#80FFFF", 0);
  e.C = new p("C", "Cytosine", !1, "#BEA06E", "#FF8C4B", 0);
  e.T = new p("T", "Thymine", !1, "#BEA06E", "#A0FFA0", 0);
  e.U = new p("U", "Uracil", !1, "#BEA06E", "#FF8080", 0);
  return e;
})();
(function (e, p) {
  e.Queue = function () {
    this.queue = [];
  };
  e = e.Queue.prototype;
  e.queueSpace = 0;
  e.getSize = function () {
    return this.queue.length - this.queueSpace;
  };
  e.isEmpty = function () {
    return 0 === this.queue.length;
  };
  e.enqueue = function (e) {
    this.queue.push(e);
  };
  e.dequeue = function () {
    let e;
    this.queue.length &&
      ((e = this.queue[this.queueSpace]),
      2 * ++this.queueSpace >= this.queue.length &&
        ((this.queue = this.queue.slice(this.queueSpace)),
        (this.queueSpace = 0)));
    return e;
  };
  e.getOldestElement = function () {
    let e;
    this.queue.length && (e = this.queue[this.queueSpace]);
    return e;
  };
})(ChemDoodle.structures);
(function (e, p, n) {
  e.Point = function (e, d) {
    this.x = e ? e : 0;
    this.y = d ? d : 0;
  };
  e = e.Point.prototype;
  e.sub = function (e) {
    this.x -= e.x;
    this.y -= e.y;
  };
  e.add = function (e) {
    this.x += e.x;
    this.y += e.y;
  };
  e.distance = function (e) {
    let d = e.x - this.x;
    e = e.y - this.y;
    return p.sqrt(d * d + e * e);
  };
  e.angleForStupidCanvasArcs = function (e) {
    var d = e.x - this.x;
    e = e.y - this.y;
    for (
      d =
        0 === d
          ? 0 === e
            ? 0
            : 0 < e
            ? p.PI / 2
            : (3 * p.PI) / 2
          : 0 === e
          ? 0 < d
            ? 0
            : p.PI
          : 0 > d
          ? p.atan(e / d) + p.PI
          : 0 > e
          ? p.atan(e / d) + 2 * p.PI
          : p.atan(e / d);
      0 > d;

    )
      d += 2 * p.PI;
    return (d %= 2 * p.PI);
  };
  e.angle = function (e) {
    var d = e.x - this.x;
    e = this.y - e.y;
    for (
      d =
        0 === d
          ? 0 === e
            ? 0
            : 0 < e
            ? p.PI / 2
            : (3 * p.PI) / 2
          : 0 === e
          ? 0 < d
            ? 0
            : p.PI
          : 0 > d
          ? p.atan(e / d) + p.PI
          : 0 > e
          ? p.atan(e / d) + 2 * p.PI
          : p.atan(e / d);
      0 > d;

    )
      d += 2 * p.PI;
    return (d %= 2 * p.PI);
  };
})(ChemDoodle.structures, Math);
(function (e, p, n, r) {
  let d = /[ ,]+/,
    k = /\-+/,
    b = ["Helvetica", "Arial", "Dialog"];
  p.Query = function (b) {
    this.type = b;
    this.elements = { v: [], not: !1 };
    this.saturation =
      this.hydrogens =
      this.connectivityNoH =
      this.connectivity =
      this.chirality =
      this.charge =
        r;
    this.orders = { v: [], not: !1 };
    this.cache = this.ringCount = this.aromatic = this.stereo = r;
  };
  p.Query.TYPE_ATOM = 0;
  p.Query.TYPE_BOND = 1;
  n = p.Query.prototype;
  n.parseRange = function (b) {
    let c = [];
    b = b.split(d);
    for (let h = 0, d = b.length; h < d; h++) {
      var a = b[h],
        g = !1,
        l = !1;
      "-" === a.charAt(0) && ((g = !0), (a = a.substring(1)));
      -1 != a.indexOf("--") && (l = !0);
      -1 != a.indexOf("-")
        ? ((a = a.split(k)),
          (g = {
            x: parseInt(a[0]) * (g ? -1 : 1),
            y: parseInt(a[1]) * (l ? -1 : 1),
          }),
          g.y < g.x && ((l = g.y), (g.y = g.x), (g.x = l)),
          c.push(g))
        : c.push({ x: parseInt(a) * (g ? -1 : 1) });
    }
    return c;
  };
  n.draw = function (c, h, a) {
    this.cache || (this.cache = this.toString());
    let g = this.cache,
      d = r;
    var v = g.indexOf("(");
    -1 != v &&
      ((g = this.cache.substring(0, v)),
      (d = this.cache.substring(v, this.cache.length)));
    c.textAlign = "center";
    c.textBaseline = "middle";
    c.font = e.getFontString(12, b, !0, !1);
    v = c.measureText(g).width;
    c.fillStyle = h.backgroundColor;
    c.fillRect(a.x - v / 2, a.y - 6, v, 12);
    c.fillStyle = "black";
    c.fillText(g, a.x, a.y);
    d &&
      ((c.font = e.getFontString(10, b, !1, !0)),
      (v = c.measureText(d).width),
      (c.fillStyle = h.backgroundColor),
      c.fillRect(a.x - v / 2, a.y + 6, v, 11),
      (c.fillStyle = "black"),
      c.fillText(d, a.x, a.y + 11));
  };
  n.outputRange = function (b) {
    let c = !1,
      a = [];
    for (let g = 0, h = b.length; g < h; g++) {
      c && a.push(",");
      c = !0;
      let h = b[g];
      h.y ? (a.push(h.x), a.push("-"), a.push(h.y)) : a.push(h.x);
    }
    return a.join("");
  };
  n.toString = function () {
    let b = [],
      h = [];
    this.type === p.Query.TYPE_ATOM
      ? (this.elements && 0 !== this.elements.v.length
          ? (this.elements.not && b.push("!"),
            b.push("["),
            b.push(this.elements.v.join(",")),
            b.push("]"))
          : b.push("[a]"),
        this.chirality &&
          h.push((this.chirality.not ? "!" : "") + "@\x3d" + this.chirality.v),
        this.aromatic && h.push((this.aromatic.not ? "!" : "") + "A"),
        this.charge &&
          h.push(
            (this.charge.not ? "!" : "") +
              "C\x3d" +
              this.outputRange(this.charge.v)
          ),
        this.hydrogens &&
          h.push(
            (this.hydrogens.not ? "!" : "") +
              "H\x3d" +
              this.outputRange(this.hydrogens.v)
          ),
        this.ringCount &&
          h.push(
            (this.ringCount.not ? "!" : "") +
              "R\x3d" +
              this.outputRange(this.ringCount.v)
          ),
        this.saturation && h.push((this.saturation.not ? "!" : "") + "S"),
        this.connectivity &&
          h.push(
            (this.connectivity.not ? "!" : "") +
              "X\x3d" +
              this.outputRange(this.connectivity.v)
          ),
        this.connectivityNoH &&
          h.push(
            (this.connectivityNoH.not ? "!" : "") +
              "x\x3d" +
              this.outputRange(this.connectivityNoH.v)
          ))
      : this.type === p.Query.TYPE_BOND &&
        (this.orders && 0 !== this.orders.v.length
          ? (this.orders.not && b.push("!"),
            b.push("["),
            b.push(this.orders.v.join(",")),
            b.push("]"))
          : b.push("[a]"),
        this.stereo &&
          h.push((this.stereo.not ? "!" : "") + "@\x3d" + this.stereo.v),
        this.aromatic && h.push((this.aromatic.not ? "!" : "") + "A"),
        this.ringCount &&
          h.push(
            (this.ringCount.not ? "!" : "") +
              "R\x3d" +
              this.outputRange(this.ringCount.v)
          ));
    0 < h.length && (b.push("("), b.push(h.join(",")), b.push(")"));
    return b.join("");
  };
})(ChemDoodle.extensions, ChemDoodle.structures, Math);
(function (e, p, n, r, d, k, b) {
  let c = /\s+/g;
  r.Atom = function (a, b, c, h) {
    this.label = a ? a.trim() : "C";
    this.x = b ? b : 0;
    this.y = c ? c : 0;
    this.z = h ? h : 0;
    this.enhancedStereo = { type: r.Atom.ESTEREO_ABSOLUTE, group: 1 };
  };
  r.Atom.ESTEREO_ABSOLUTE = "abs";
  r.Atom.ESTEREO_OR = "or";
  r.Atom.ESTEREO_AND = "\x26";
  let h = (r.Atom.prototype = new r.Point(0, 0));
  h.charge = 0;
  h.numLonePair = 0;
  h.numRadical = 0;
  h.mass = -1;
  h.implicitH = -1;
  h.coordinationNumber = 0;
  h.bondNumber = 0;
  h.angleOfLeastInterference = 0;
  h.isHidden = !1;
  h.altLabel = b;
  h.isLone = !1;
  h.isHover = !1;
  h.isSelected = !1;
  h.add3D = function (a) {
    this.x += a.x;
    this.y += a.y;
    this.z += a.z;
  };
  h.sub3D = function (a) {
    this.x -= a.x;
    this.y -= a.y;
    this.z -= a.z;
  };
  h.distance3D = function (a) {
    let b = a.x - this.x,
      c = a.y - this.y;
    a = a.z - this.z;
    return d.sqrt(b * b + c * c + a * a);
  };
  h.draw = function (a, g) {
    if (!this.dontDraw) {
      if (this.isLassoed) {
        var h = a.createRadialGradient(
          this.x - 1,
          this.y - 1,
          0,
          this.x,
          this.y,
          7
        );
        h.addColorStop(0, "rgba(212, 99, 0, 0)");
        h.addColorStop(0.7, "rgba(212, 99, 0, 0.8)");
        a.fillStyle = h;
        a.beginPath();
        a.arc(this.x, this.y, 5, 0, 2 * d.PI, !1);
        a.fill();
      }
      if (!this.query) {
        this.textBounds = [];
        this.styles && (g = this.styles);
        var v = p.getFontString(
          g.atoms_font_size_2D,
          g.atoms_font_families_2D,
          g.atoms_font_bold_2D,
          g.atoms_font_italic_2D
        );
        a.font = v;
        a.fillStyle = this.getElementColor(
          g.atoms_useJMOLColors,
          g.atoms_usePYMOLColors,
          g.atoms_color,
          2
        );
        "H" === this.label && g.atoms_HBlack_2D && (a.fillStyle = "black");
        this.error && (a.fillStyle = g.colorError);
        h = this.isLabelVisible(g);
        if ((this.isLone && !h) || g.atoms_circles_2D)
          this.isLone && (a.fillStyle = "#909090"),
            a.beginPath(),
            a.arc(
              this.x,
              this.y,
              g.atoms_circleDiameter_2D / 2,
              0,
              2 * d.PI,
              !1
            ),
            a.fill(),
            0 < g.atoms_circleBorderWidth_2D &&
              ((a.lineWidth = g.atoms_circleBorderWidth_2D),
              (a.strokeStyle = "black"),
              a.stroke());
        else if (h)
          if (
            ((a.textAlign = "center"),
            (a.textBaseline = "middle"),
            this.altLabel !== b)
          ) {
            a.fillText(this.altLabel, this.x, this.y);
            var m = a.measureText(this.altLabel).width;
            this.textBounds.push({
              x: this.x - m / 2,
              y: this.y - g.atoms_font_size_2D / 2 + 1,
              w: m,
              h: g.atoms_font_size_2D - 2,
            });
          } else if (e[this.label]) {
            a.fillText(this.label, this.x, this.y);
            var k = a.measureText(this.label).width;
            this.textBounds.push({
              x: this.x - k / 2,
              y: this.y - g.atoms_font_size_2D / 2 + 1,
              w: k,
              h: g.atoms_font_size_2D - 2,
            });
            var u = 0;
            -1 !== this.mass &&
              ((m = a.font),
              (a.font = p.getFontString(
                0.7 * g.atoms_font_size_2D,
                g.atoms_font_families_2D,
                g.atoms_font_bold_2D,
                g.atoms_font_italic_2D
              )),
              (u = a.measureText(this.mass).width),
              (a.textAlign = "right"),
              a.fillText(
                this.mass,
                this.x - k / 2 - 1,
                this.y - g.atoms_font_size_2D / 2 + 1
              ),
              this.textBounds.push({
                x: this.x - k / 2 - u - 0.5,
                y: this.y - (1.7 * g.atoms_font_size_2D) / 2 + 1,
                w: u,
                h: g.atoms_font_size_2D / 2 - 1,
              }),
              (a.font = m),
              (a.textAlign = "center"));
            m = k / 2;
            var w = this.getImplicitHydrogenCount();
            if (g.atoms_implicitHydrogens_2D && 0 < w) {
              var z = 0;
              var y = a.measureText("H").width;
              let b = !0;
              if (1 < w) {
                let c = k / 2 + y / 2,
                  f = 0,
                  h = p.getFontString(
                    0.8 * g.atoms_font_size_2D,
                    g.atoms_font_families_2D,
                    g.atoms_font_bold_2D,
                    g.atoms_font_italic_2D
                  );
                a.font = h;
                let l = a.measureText(w).width;
                1 === this.bondNumber
                  ? this.angleOfLeastInterference > d.PI / 2 &&
                    this.angleOfLeastInterference < (3 * d.PI) / 2 &&
                    ((c = -k / 2 - l - y / 2 - u / 2), (b = !1), (z = d.PI))
                  : this.angleOfLeastInterference <= d.PI / 4 ||
                    (this.angleOfLeastInterference < (3 * d.PI) / 4
                      ? ((c = 0),
                        (f = 0.9 * -g.atoms_font_size_2D),
                        0 !== this.charge && (f -= 0.3 * g.atoms_font_size_2D),
                        (b = !1),
                        (z = d.PI / 2))
                      : this.angleOfLeastInterference <= (5 * d.PI) / 4
                      ? ((c = -k / 2 - l - y / 2 - u / 2), (b = !1), (z = d.PI))
                      : this.angleOfLeastInterference < (7 * d.PI) / 4 &&
                        ((c = 0),
                        (f = 0.9 * g.atoms_font_size_2D),
                        (b = !1),
                        (z = (3 * d.PI) / 2)));
                a.font = v;
                a.fillText("H", this.x + c, this.y + f);
                a.font = h;
                a.fillText(
                  w,
                  this.x + c + y / 2 + l / 2,
                  this.y + f + 0.3 * g.atoms_font_size_2D
                );
                this.textBounds.push({
                  x: this.x + c - y / 2,
                  y: this.y + f - g.atoms_font_size_2D / 2 + 1,
                  w: y,
                  h: g.atoms_font_size_2D - 2,
                });
                this.textBounds.push({
                  x: this.x + c + y / 2,
                  y:
                    this.y +
                    f +
                    0.3 * g.atoms_font_size_2D -
                    g.atoms_font_size_2D / 2 +
                    1,
                  w: l,
                  h: 0.8 * g.atoms_font_size_2D - 2,
                });
              } else
                (v = k / 2 + y / 2),
                  (w = 0),
                  1 === this.bondNumber
                    ? this.angleOfLeastInterference > d.PI / 2 &&
                      this.angleOfLeastInterference < (3 * d.PI) / 2 &&
                      ((v = -k / 2 - y / 2 - u / 2), (b = !1), (z = d.PI))
                    : this.angleOfLeastInterference <= d.PI / 4 ||
                      (this.angleOfLeastInterference < (3 * d.PI) / 4
                        ? ((v = 0),
                          (w = 0.9 * -g.atoms_font_size_2D),
                          (b = !1),
                          (z = d.PI / 2))
                        : this.angleOfLeastInterference <= (5 * d.PI) / 4
                        ? ((v = -k / 2 - y / 2 - u / 2), (b = !1), (z = d.PI))
                        : this.angleOfLeastInterference < (7 * d.PI) / 4 &&
                          ((v = 0),
                          (w = 0.9 * g.atoms_font_size_2D),
                          (b = !1),
                          (z = (3 * d.PI) / 2))),
                  a.fillText("H", this.x + v, this.y + w),
                  this.textBounds.push({
                    x: this.x + v - y / 2,
                    y: this.y + w - g.atoms_font_size_2D / 2 + 1,
                    w: y,
                    h: g.atoms_font_size_2D - 2,
                  });
              b && (m += y);
            }
            0 !== this.charge &&
              ((k = this.charge.toFixed(0)),
              (k =
                "1" === k
                  ? "+"
                  : "-1" === k
                  ? "\u2013"
                  : k.startsWith("-")
                  ? k.substring(1) + "\u2013"
                  : k + "+"),
              (u = a.measureText(k).width),
              (m += u / 2),
              (a.textAlign = "center"),
              (a.textBaseline = "middle"),
              (a.font = p.getFontString(
                d.floor(0.8 * g.atoms_font_size_2D),
                g.atoms_font_families_2D,
                g.atoms_font_bold_2D,
                g.atoms_font_italic_2D
              )),
              a.fillText(
                k,
                this.x + m - 1,
                this.y - g.atoms_font_size_2D / 2 + 1
              ),
              this.textBounds.push({
                x: this.x + m - u / 2 - 1,
                y: this.y - (1.8 * g.atoms_font_size_2D) / 2 + 5,
                w: u,
                h: g.atoms_font_size_2D / 2 - 1,
              }));
          } else
            r.CondensedLabel
              ? this.label.match(c)
                ? ((a.textAlign = "left"),
                  this.error && (a.fillStyle = g.colorError),
                  a.fillText(this.label, this.x, this.y),
                  (m = a.measureText(this.label).width),
                  this.textBounds.push({
                    x: this.x + 1,
                    y: this.y - g.atoms_font_size_2D / 2 + 1,
                    w: m,
                    h: g.atoms_font_size_2D - 2,
                  }))
                : ((this.condensed && this.condensed.text === this.label) ||
                    (this.condensed = new r.CondensedLabel(this, this.label)),
                  this.condensed.draw(a, g))
              : (a.fillText(this.label, this.x, this.y),
                (m = a.measureText(this.label).width),
                this.textBounds.push({
                  x: this.x - m / 2,
                  y: this.y - g.atoms_font_size_2D / 2 + 1,
                  w: m,
                  h: g.atoms_font_size_2D - 2,
                }));
        m = [];
        for (k = 0; k < this.numLonePair; k++) m.push({ t: 2 });
        for (k = 0; k < this.numRadical; k++) m.push({ t: 1 });
        this.enhancedStereo.type !== r.Atom.ESTEREO_ABSOLUTE &&
          m.push(this.enhancedStereo);
        if (0 < m.length)
          if (
            ((a.fillStyle = "black"),
            (a.font = p.getFontString(
              0.8 * g.atoms_font_size_2D,
              g.atoms_font_families_2D,
              g.atoms_font_bold_2D,
              g.atoms_font_italic_2D
            )),
            (a.textAlign = "center"),
            (a.textBaseline = "middle"),
            (u = this.angles.slice(0)),
            (k = this.angleOfLeastInterference),
            (y = this.largestAngle),
            z !== b &&
              (u.push(z),
              u.sort(function (a, b) {
                return a - b;
              }),
              (y = n.angleBetweenLargest(u)),
              (k = y.angle % (2 * d.PI)),
              (y = y.largest)),
            z === b && d.abs(y - (2 * d.PI) / u.length) < d.PI / 60)
          ) {
            u = d.ceil(m.length / u.length);
            for (let b = 0, c = m.length; b < c; b += u, k += y)
              this.drawAttribute(
                a,
                g,
                m.slice(b, d.min(m.length, b + u)),
                k,
                y,
                z,
                h
              );
          } else this.drawAttribute(a, g, m, k, y, z, h);
      }
    }
  };
  h.drawAttribute = function (a, c, h, e, m, k, u) {
    k = m / (h.length + (0 === this.bonds.length && k === b ? 0 : 1));
    e = e - m / 2 + k;
    for (m = 0; m < h.length; m++) {
      var g = h[m],
        l = e + m * k,
        v = c.atoms_lonePairDistance_2D;
      u && g.type !== b && (v += 4);
      let f = this.x + Math.cos(l) * v;
      v = this.y - Math.sin(l) * v;
      g.type !== b
        ? a.fillText(g.type + g.group, f, v)
        : 2 === g.t
        ? ((l += Math.PI / 2),
          (g = (Math.cos(l) * c.atoms_lonePairSpread_2D) / 2),
          (l = (-Math.sin(l) * c.atoms_lonePairSpread_2D) / 2),
          a.beginPath(),
          a.arc(f + g, v + l, c.atoms_lonePairDiameter_2D, 0, 2 * d.PI, !1),
          a.fill(),
          a.beginPath(),
          a.arc(f - g, v - l, c.atoms_lonePairDiameter_2D, 0, 2 * d.PI, !1),
          a.fill())
        : 1 === g.t &&
          (a.beginPath(),
          a.arc(f, v, c.atoms_lonePairDiameter_2D, 0, 2 * d.PI, !1),
          a.fill());
    }
  };
  h.drawDecorations = function (a, b) {
    if (this.isHover || this.isSelected)
      (a.strokeStyle = this.isHover ? b.colorHover : b.colorSelect),
        (a.lineWidth = 1.2),
        a.beginPath(),
        a.arc(this.x, this.y, this.isHover ? 7 : 15, 0, 2 * d.PI, !1),
        a.stroke();
    this.isOverlap &&
      ((a.strokeStyle = b.colorError),
      (a.lineWidth = 1.2),
      a.beginPath(),
      a.arc(this.x, this.y, 7, 0, 2 * d.PI, !1),
      a.stroke());
  };
  h.render = function (a, b, c) {
    this.styles && (b = this.styles);
    let g = k.translate(k.identity(), [this.x, this.y, this.z]),
      h = b.atoms_useVDWDiameters_3D
        ? e[this.label].vdWRadius * b.atoms_vdwMultiplier_3D
        : b.atoms_sphereDiameter_3D / 2;
    0 === h && (h = 1);
    k.scale(g, [h, h, h]);
    c ||
      ((c = b.atoms_color),
      b.atoms_useJMOLColors
        ? (c = e[this.label].jmolColor)
        : b.atoms_usePYMOLColors && (c = e[this.label].pymolColor),
      a.material.setDiffuseColor(a, c));
    a.shader.setMatrixUniforms(a, g);
    a.drawElements(
      a.TRIANGLES,
      (this.renderAsStar ? a.starBuffer : a.sphereBuffer).vertexIndexBuffer
        .numItems,
      a.UNSIGNED_SHORT,
      0
    );
  };
  h.renderHighlight = function (a, b) {
    if (this.isSelected || this.isHover) {
      this.styles && (b = this.styles);
      let c = k.translate(k.identity(), [this.x, this.y, this.z]),
        g = b.atoms_useVDWDiameters_3D
          ? e[this.label].vdWRadius * b.atoms_vdwMultiplier_3D
          : b.atoms_sphereDiameter_3D / 2;
      0 === g && (g = 1);
      g *= 1.3;
      k.scale(c, [g, g, g]);
      a.shader.setMatrixUniforms(a, c);
      a.material.setDiffuseColor(
        a,
        this.isHover ? b.colorHover : b.colorSelect
      );
      a.drawElements(
        a.TRIANGLES,
        (this.renderAsStar ? a.starBuffer : a.sphereBuffer).vertexIndexBuffer
          .numItems,
        a.UNSIGNED_SHORT,
        0
      );
    }
  };
  h.isLabelVisible = function (a) {
    return a.atoms_displayAllCarbonLabels_2D ||
      "C" !== this.label ||
      this.altLabel ||
      !e[this.label] ||
      -1 !== this.mass ||
      -1 !== this.implicitH ||
      0 !== this.charge ||
      (a.atoms_showAttributedCarbons_2D &&
        (0 !== this.numRadical || 0 !== this.numLonePair)) ||
      (this.isHidden && a.atoms_showHiddenCarbons_2D) ||
      (a.atoms_displayTerminalCarbonLabels_2D && 1 === this.bondNumber)
      ? !0
      : !1;
  };
  h.getImplicitHydrogenCount = function () {
    if (!e[this.label]) return 0;
    if (-1 !== this.implicitH) return this.implicitH;
    if (!e[this.label].addH || "H" === this.label) return 0;
    var a = e[this.label].valency;
    let b = a - this.coordinationNumber;
    0 < this.numRadical && (b = d.max(0, b - this.numRadical));
    0 < this.charge
      ? ((a = 4 - a),
        (b =
          this.charge <= a
            ? b + this.charge
            : 4 - this.coordinationNumber - this.charge + a))
      : (b += this.charge);
    return 0 > b ? 0 : d.floor(b);
  };
  h.getBounds = function () {
    let a = new n.Bounds();
    a.expand(this.x, this.y);
    if (this.textBounds)
      for (let b = 0, c = this.textBounds.length; b < c; b++) {
        let c = this.textBounds[b];
        a.expand(c.x, c.y, c.x + c.w, c.y + c.h);
      }
    return a;
  };
  h.getBounds3D = function () {
    let a = new n.Bounds();
    a.expand3D(this.x, this.y, this.z);
    return a;
  };
  h.getElementColor = function (a, b, c) {
    if (!e[this.label]) return "#000";
    a ? (c = e[this.label].jmolColor) : b && (c = e[this.label].pymolColor);
    return c;
  };
})(
  ChemDoodle.ELEMENT,
  ChemDoodle.extensions,
  ChemDoodle.math,
  ChemDoodle.structures,
  Math,
  ChemDoodle.lib.mat4
);
(function (e, p, n, r, d, k, b, c) {
  n.Bond = function (b, a, g) {
    this.a1 = b;
    this.a2 = a;
    this.bondOrder = g !== c ? g : 1;
  };
  n.Bond.STEREO_NONE = "none";
  n.Bond.STEREO_PROTRUDING = "protruding";
  n.Bond.STEREO_RECESSED = "recessed";
  n.Bond.STEREO_AMBIGUOUS = "ambiguous";
  e = n.Bond.prototype;
  e.stereo = n.Bond.STEREO_NONE;
  e.isHover = !1;
  e.ring = c;
  e.getCenter = function () {
    return new n.Point(
      (this.a1.x + this.a2.x) / 2,
      (this.a1.y + this.a2.y) / 2
    );
  };
  e.getLength = function () {
    return this.a1.distance(this.a2);
  };
  e.getLength3D = function () {
    return this.a1.distance3D(this.a2);
  };
  e.contains = function (b) {
    return b === this.a1 || b === this.a2;
  };
  e.getNeighbor = function (b) {
    return b === this.a1 ? this.a2 : b === this.a2 ? this.a1 : c;
  };
  e.draw = function (b, a) {
    if (this.a1.x !== this.a2.x || this.a1.y !== this.a2.y) {
      this.styles && (a = this.styles);
      var c = this.a1.x,
        h = this.a2.x,
        e = this.a1.y,
        m = this.a2.y,
        k = this.a1.distance(this.a2),
        u = h - c,
        w = m - e;
      if (this.a1.isLassoed && this.a2.isLassoed) {
        let a = b.createLinearGradient(c, e, h, m);
        a.addColorStop(0, "rgba(212, 99, 0, 0)");
        a.addColorStop(0.5, "rgba(212, 99, 0, 0.8)");
        a.addColorStop(1, "rgba(212, 99, 0, 0)");
        let g = this.a1.angle(this.a2) + d.PI / 2,
          f = d.cos(g),
          l = d.sin(g),
          v = c - 2.5 * f,
          k = e + 2.5 * l,
          u = c + 2.5 * f,
          x = e - 2.5 * l,
          w = h + 2.5 * f,
          r = m - 2.5 * l,
          n = h - 2.5 * f,
          p = m + 2.5 * l;
        b.fillStyle = a;
        b.beginPath();
        b.moveTo(v, k);
        b.lineTo(u, x);
        b.lineTo(w, r);
        b.lineTo(n, p);
        b.closePath();
        b.fill();
      }
      if (
        a.atoms_display &&
        !a.atoms_circles_2D &&
        this.a1.isLabelVisible(a) &&
        this.a1.textBounds
      ) {
        let b = 0;
        for (let a = 0, c = this.a1.textBounds.length; a < c; a++)
          b = Math.max(
            b,
            r.calculateDistanceInterior(this.a1, this.a2, this.a1.textBounds[a])
          );
        b += a.bonds_atomLabelBuffer_2D;
        let g = b / k;
        c += u * g;
        e += w * g;
      }
      if (
        a.atoms_display &&
        !a.atoms_circles_2D &&
        this.a2.isLabelVisible(a) &&
        this.a2.textBounds
      ) {
        let b = 0;
        for (let a = 0, c = this.a2.textBounds.length; a < c; a++)
          b = Math.max(
            b,
            r.calculateDistanceInterior(this.a2, this.a1, this.a2.textBounds[a])
          );
        b += a.bonds_atomLabelBuffer_2D;
        let c = b / k;
        h -= u * c;
        m -= w * c;
      }
      if (a.bonds_clearOverlaps_2D) {
        let g = c + 0.15 * u,
          d = e + 0.15 * w,
          f = h - 0.15 * u,
          l = m - 0.15 * w;
        b.strokeStyle = a.backgroundColor;
        b.lineWidth = a.bonds_width_2D + 2 * a.bonds_overlapClearWidth_2D;
        b.lineCap = "round";
        b.beginPath();
        b.moveTo(g, d);
        b.lineTo(f, l);
        b.closePath();
        b.stroke();
      }
      b.strokeStyle = this.error ? a.colorError : a.bonds_color;
      b.fillStyle = this.error ? a.colorError : a.bonds_color;
      b.lineWidth = a.bonds_width_2D;
      b.lineCap = a.bonds_ends_2D;
      if (a.bonds_splitColor) {
        let g = b.createLinearGradient(c, e, h, m),
          d = this.a1.styles ? this.a1.styles : a,
          f = this.a2.styles ? this.a2.styles : a,
          l = this.a1.getElementColor(
            d.atoms_useJMOLColors,
            d.atoms_usePYMOLColors,
            d.atoms_color,
            2
          ),
          v = this.a2.getElementColor(
            f.atoms_useJMOLColors,
            f.atoms_usePYMOLColors,
            f.atoms_color,
            2
          );
        g.addColorStop(0, l);
        a.bonds_colorGradient ||
          (g.addColorStop(0.5, l), g.addColorStop(0.51, v));
        g.addColorStop(1, v);
        b.strokeStyle = g;
        b.fillStyle = g;
      }
      if (a.bonds_lewisStyle_2D && 0 === this.bondOrder % 1)
        this.drawLewisStyle(b, a, c, e, h, m);
      else
        switch (this.query ? 1 : this.bondOrder) {
          case 0:
            if (this.stereo === n.Bond.STEREO_PROTRUDING) {
              let g = a.bonds_wedgeThickness_2D / 2,
                l = this.a1.angle(this.a2),
                f = l + d.PI / 2,
                v = (2 * a.shapes_arrowLength_2D) / d.sqrt(3),
                k = d.cos(l),
                u = d.sin(l),
                x = d.cos(f),
                w = d.sin(f),
                r = h - k * v * 0.8,
                n = m + u * v * 0.8,
                p = r + x * g,
                K = n - w * g,
                N = r - x * g,
                P = n + w * g;
              b.beginPath();
              b.moveTo(h, m);
              b.lineTo(p, K);
              b.lineTo(N, P);
              b.closePath();
              b.fill();
              b.stroke();
              b.beginPath();
              b.moveTo(c, e);
              b.lineTo(r, n);
              b.stroke();
            } else {
              let g = h - c,
                l = m - e,
                f = d.sqrt(g * g + l * l),
                v = d.floor(f / a.bonds_dotSize_2D),
                k = (f - (v - 1) * a.bonds_dotSize_2D) / 2;
              1 === v % 2
                ? (k += a.bonds_dotSize_2D / 4)
                : ((k -= a.bonds_dotSize_2D / 4), (v += 2));
              v /= 2;
              let u = this.a1.angle(this.a2),
                x = c + k * Math.cos(u),
                w = e - k * Math.sin(u);
              b.beginPath();
              for (let c = 0; c < v; c++)
                b.arc(x, w, a.bonds_dotSize_2D / 2, 0, 2 * d.PI, !1),
                  (x += 2 * a.bonds_dotSize_2D * Math.cos(u)),
                  (w -= 2 * a.bonds_dotSize_2D * Math.sin(u));
              b.fill();
              break;
            }
          case 0.5:
            b.beginPath();
            b.moveTo(c, e);
            b.lineTo(h, m);
            b.setLineDash([a.bonds_hashSpacing_2D, a.bonds_hashSpacing_2D]);
            b.stroke();
            b.setLineDash([]);
            break;
          case 1:
            if (
              this.query ||
              (this.stereo !== n.Bond.STEREO_PROTRUDING &&
                this.stereo !== n.Bond.STEREO_RECESSED)
            )
              if (this.query || this.stereo !== n.Bond.STEREO_AMBIGUOUS)
                b.beginPath(),
                  b.moveTo(c, e),
                  b.lineTo(h, m),
                  b.stroke(),
                  this.query && this.query.draw(b, a, this.getCenter());
              else {
                let g = h - c,
                  l = m - e;
                b.beginPath();
                b.moveTo(c, e);
                let f = d.floor(d.sqrt(g * g + l * l) / a.bonds_wavyLength_2D),
                  v = c,
                  k = e,
                  u = this.a1.angle(this.a2) + d.PI / 2,
                  x = d.cos(u),
                  w = d.sin(u),
                  r = g / f,
                  n = l / f,
                  p,
                  K;
                for (let c = 0; c < f; c++) {
                  v += r;
                  k += n;
                  let f = 0 === c % 2 ? 1 : -1;
                  p = a.bonds_wavyLength_2D * x * f + v - 0.5 * r;
                  K = a.bonds_wavyLength_2D * -w * f + k - 0.5 * n;
                  b.quadraticCurveTo(p, K, v, k);
                }
                b.stroke();
              }
            else {
              let g = a.bonds_width_2D / 2,
                l = a.bonds_wedgeThickness_2D / 2,
                f = this.a1.angle(this.a2) + d.PI / 2,
                v = d.cos(f),
                k = d.sin(f),
                u = c - v * g,
                x = e + k * g,
                w = c + v * g,
                r = e - k * g,
                p = h + v * l,
                H = m - k * l,
                K = h - v * l,
                N = m + k * l;
              b.beginPath();
              b.moveTo(u, x);
              b.lineTo(w, r);
              b.lineTo(p, H);
              b.lineTo(K, N);
              b.closePath();
              this.stereo === n.Bond.STEREO_PROTRUDING
                ? b.fill()
                : (b.save(),
                  b.clip(),
                  (b.lineWidth = 2 * l),
                  (b.lineCap = "butt"),
                  b.beginPath(),
                  b.moveTo(c, e),
                  b.lineTo(h + 5 * (h - c), m + 5 * (m - e)),
                  b.setLineDash([a.bonds_hashWidth_2D, a.bonds_hashSpacing_2D]),
                  b.stroke(),
                  b.setLineDash([]),
                  b.restore());
            }
            break;
          case 1.5:
          case 2: {
            let g = this.a1.angle(this.a2),
              l = g + d.PI / 2,
              f = d.cos(l),
              v = d.sin(l),
              k = this.a1.distance(this.a2),
              u = a.bonds_useAbsoluteSaturationWidths_2D
                ? a.bonds_saturationWidthAbs_2D / 2
                : (k * a.bonds_saturationWidth_2D) / 2;
            if (this.stereo === n.Bond.STEREO_AMBIGUOUS) {
              let a = c - f * u,
                g = e + v * u,
                d = c + f * u,
                l = e - v * u,
                k = h + f * u,
                x = m - v * u,
                w = h - f * u,
                q = m + v * u;
              b.beginPath();
              b.moveTo(a, g);
              b.lineTo(k, x);
              b.moveTo(d, l);
              b.lineTo(w, q);
              b.stroke();
            } else if (
              !a.bonds_symmetrical_2D &&
              (this.ring || ("C" === this.a1.label && "C" === this.a2.label))
            ) {
              b.beginPath();
              b.moveTo(c, e);
              b.lineTo(h, m);
              b.stroke();
              let l = 0;
              u *= 2;
              let x = a.bonds_saturationAngle_2D;
              x < d.PI / 2 && (l = -(u / d.tan(x)));
              if (d.abs(l) < k / 2) {
                let k = c - d.cos(g) * l,
                  x = h + d.cos(g) * l,
                  w = e + d.sin(g) * l,
                  q = m - d.sin(g) * l,
                  r = k - f * u,
                  n = w + v * u,
                  z = k + f * u,
                  p = w - v * u,
                  y = x - f * u,
                  B = q + v * u,
                  A = x + f * u,
                  D = q - v * u,
                  C =
                    !this.ring ||
                    (this.ring.center.angle(this.a1) >
                      this.ring.center.angle(this.a2) &&
                      !(
                        this.ring.center.angle(this.a1) -
                          this.ring.center.angle(this.a2) >
                        d.PI
                      )) ||
                    this.ring.center.angle(this.a1) -
                      this.ring.center.angle(this.a2) <
                      -d.PI;
                b.beginPath();
                C
                  ? (b.moveTo(r, n), b.lineTo(y, B))
                  : (b.moveTo(z, p), b.lineTo(A, D));
                2 !== this.bondOrder &&
                  b.setLineDash([
                    a.bonds_hashSpacing_2D,
                    a.bonds_hashSpacing_2D,
                  ]);
                b.stroke();
                b.setLineDash([]);
              }
            } else {
              let g = c - f * u,
                d = e + v * u,
                l = c + f * u,
                k = e - v * u,
                x = h + f * u,
                w = m - v * u,
                q = h - f * u,
                r = m + v * u;
              b.beginPath();
              b.moveTo(g, d);
              b.lineTo(q, r);
              b.stroke();
              b.beginPath();
              b.moveTo(l, k);
              b.lineTo(x, w);
              2 !== this.bondOrder &&
                b.setLineDash([a.bonds_hashWidth_2D, a.bonds_hashSpacing_2D]);
              b.stroke();
              b.setLineDash([]);
            }
            break;
          }
          case 3: {
            let g = a.bonds_useAbsoluteSaturationWidths_2D
                ? a.bonds_saturationWidthAbs_2D
                : this.a1.distance(this.a2) * a.bonds_saturationWidth_2D,
              l = this.a1.angle(this.a2) + d.PI / 2,
              f = d.cos(l),
              v = d.sin(l),
              k = c - f * g,
              u = e + v * g,
              x = c + f * g,
              w = e - v * g,
              r = h + f * g,
              n = m - v * g,
              p = h - f * g,
              K = m + v * g;
            b.beginPath();
            b.moveTo(k, u);
            b.lineTo(p, K);
            b.moveTo(x, w);
            b.lineTo(r, n);
            b.moveTo(c, e);
            b.lineTo(h, m);
            b.stroke();
          }
        }
    }
  };
  e.drawDecorations = function (b, a) {
    if (this.isHover || this.isSelected) {
      let c = 2 * d.PI,
        h = (this.a1.angleForStupidCanvasArcs(this.a2) + d.PI / 2) % c;
      b.strokeStyle = this.isHover ? a.colorHover : a.colorSelect;
      b.lineWidth = 1.2;
      b.beginPath();
      a = (h + d.PI) % c;
      a %= 2 * d.PI;
      b.arc(this.a1.x, this.a1.y, 7, h, a, !1);
      b.stroke();
      b.beginPath();
      h += d.PI;
      a = (h + d.PI) % c;
      b.arc(this.a2.x, this.a2.y, 7, h, a, !1);
      b.stroke();
    }
  };
  e.drawLewisStyle = function (b, a, c, l, e, m) {
    var g = this.a1.angle(this.a2);
    let h = g + d.PI / 2;
    e -= c;
    m -= l;
    e = d.sqrt(e * e + m * m) / (this.bondOrder + 1);
    m = e * d.cos(g);
    g = -e * d.sin(g);
    c += m;
    l += g;
    for (e = 0; e < this.bondOrder; e++) {
      var v = a.atoms_lonePairSpread_2D / 2;
      let e = c - d.cos(h) * v,
        k = l + d.sin(h) * v,
        f = c + d.cos(h) * v;
      v = l - d.sin(h) * v;
      b.beginPath();
      b.arc(
        e - a.atoms_lonePairDiameter_2D / 2,
        k - a.atoms_lonePairDiameter_2D / 2,
        a.atoms_lonePairDiameter_2D,
        0,
        2 * d.PI,
        !1
      );
      b.fill();
      b.beginPath();
      b.arc(
        f - a.atoms_lonePairDiameter_2D / 2,
        v - a.atoms_lonePairDiameter_2D / 2,
        a.atoms_lonePairDiameter_2D,
        0,
        2 * d.PI,
        !1
      );
      b.fill();
      c += m;
      l += g;
    }
  };
  e.render = function (c, a, g) {
    this.styles && (a = this.styles);
    var h = this.a1.distance3D(this.a2);
    if (0 !== h) {
      var e = a.bonds_cylinderDiameter_3D / 2,
        m = a.bonds_color,
        x = k.translate(k.identity(), [this.a1.x, this.a1.y, this.a1.z]),
        u,
        w = [
          this.a2.x - this.a1.x,
          this.a2.y - this.a1.y,
          this.a2.z - this.a1.z,
        ],
        r = [0, 1, 0],
        n = 0;
      this.a1.x === this.a2.x && this.a1.z === this.a2.z
        ? ((r = [0, 0, 1]), this.a2.y < this.a1.y && (n = d.PI))
        : ((n = p.vec3AngleFrom(r, w)), (r = b.cross(r, w, [])));
      if (a.bonds_splitColor) {
        m = this.a1.styles ? this.a1.styles : a;
        var f = this.a2.styles ? this.a2.styles : a;
        m = this.a1.getElementColor(
          m.atoms_useJMOLColors,
          m.atoms_usePYMOLColors,
          m.atoms_color
        );
        f = this.a2.getElementColor(
          f.atoms_useJMOLColors,
          f.atoms_usePYMOLColors,
          f.atoms_color
        );
        m != f &&
          (u = k.translate(k.identity(), [this.a2.x, this.a2.y, this.a2.z]));
      }
      var q = [0];
      if (g) {
        if (a.bonds_showBondOrders_3D && 1 < this.bondOrder) {
          q = [a.bonds_cylinderDiameter_3D];
          var A = [0, 0, 1];
          e = k.inverse(c.rotationMatrix, []);
          k.multiplyVec3(e, A);
          A = b.cross(w, A, []);
          b.normalize(A);
        }
        w = 1;
        var C = a.bonds_pillSpacing_3D;
        e = a.bonds_pillHeight_3D;
        0 == this.bondOrder &&
          (a.bonds_renderAsLines_3D
            ? (e = C)
            : ((e = a.bonds_pillDiameter_3D),
              e < a.bonds_cylinderDiameter_3D && (e /= 2),
              (w = e / 2),
              (h /= w),
              (C /= w / 2)));
        g = e + C;
        let l = d.floor(h / g);
        h = (C + a.bonds_pillDiameter_3D + (h - g * l)) / 2;
        C = l;
        u && (C = d.floor(l / 2));
        for (let v = 0, z = q.length; v < z; v++) {
          let z = k.set(x, []);
          0 !== q[v] && k.translate(z, b.scale(A, q[v], []));
          0 !== n && k.rotate(z, n, r);
          1 != w && k.scale(z, [w, w, w]);
          m && c.material.setDiffuseColor(c, m);
          k.translate(z, [0, h, 0]);
          for (var B = 0; B < C; B++)
            a.bonds_renderAsLines_3D
              ? 0 == this.bondOrder
                ? (c.shader.setMatrixUniforms(c, z),
                  c.drawArrays(c.POINTS, 0, 1))
                : (k.scale(z, [1, e, 1]),
                  c.shader.setMatrixUniforms(c, z),
                  c.drawArrays(
                    c.LINES,
                    0,
                    c.lineBuffer.vertexPositionBuffer.numItems
                  ),
                  k.scale(z, [1, 1 / e, 1]))
              : (c.shader.setMatrixUniforms(c, z),
                0 == this.bondOrder
                  ? c.drawElements(
                      c.TRIANGLES,
                      c.sphereBuffer.vertexIndexBuffer.numItems,
                      c.UNSIGNED_SHORT,
                      0
                    )
                  : c.drawElements(
                      c.TRIANGLES,
                      c.pillBuffer.vertexIndexBuffer.numItems,
                      c.UNSIGNED_SHORT,
                      0
                    )),
              k.translate(z, [0, g, 0]);
          if (u) {
            let m;
            a.bonds_renderAsLines_3D
              ? ((B = e), (B /= 2), (m = 0))
              : ((B = 2 / 3), (m = (1 - B) / 2));
            0 != l % 2 &&
              (k.scale(z, [1, B, 1]),
              c.shader.setMatrixUniforms(c, z),
              a.bonds_renderAsLines_3D
                ? 0 == this.bondOrder
                  ? c.drawArrays(c.POINTS, 0, 1)
                  : c.drawArrays(
                      c.LINES,
                      0,
                      c.lineBuffer.vertexPositionBuffer.numItems
                    )
                : 0 == this.bondOrder
                ? c.drawElements(
                    c.TRIANGLES,
                    c.sphereBuffer.vertexIndexBuffer.numItems,
                    c.UNSIGNED_SHORT,
                    0
                  )
                : c.drawElements(
                    c.TRIANGLES,
                    c.pillBuffer.vertexIndexBuffer.numItems,
                    c.UNSIGNED_SHORT,
                    0
                  ),
              k.translate(z, [0, g * (1 + m), 0]),
              k.scale(z, [1, 1 / B, 1]));
            k.set(u, z);
            0 !== q[v] && k.translate(z, b.scale(A, q[v], []));
            k.rotate(z, n + d.PI, r);
            1 != w && k.scale(z, [w, w, w]);
            f && c.material.setDiffuseColor(c, f);
            k.translate(z, [0, h, 0]);
            for (let b = 0; b < C; b++)
              a.bonds_renderAsLines_3D
                ? 0 == this.bondOrder
                  ? (c.shader.setMatrixUniforms(c, z),
                    c.drawArrays(c.POINTS, 0, 1))
                  : (k.scale(z, [1, e, 1]),
                    c.shader.setMatrixUniforms(c, z),
                    c.drawArrays(
                      c.LINES,
                      0,
                      c.lineBuffer.vertexPositionBuffer.numItems
                    ),
                    k.scale(z, [1, 1 / e, 1]))
                : (c.shader.setMatrixUniforms(c, z),
                  0 == this.bondOrder
                    ? c.drawElements(
                        c.TRIANGLES,
                        c.sphereBuffer.vertexIndexBuffer.numItems,
                        c.UNSIGNED_SHORT,
                        0
                      )
                    : c.drawElements(
                        c.TRIANGLES,
                        c.pillBuffer.vertexIndexBuffer.numItems,
                        c.UNSIGNED_SHORT,
                        0
                      )),
                k.translate(z, [0, g, 0]);
            0 != l % 2 &&
              (k.scale(z, [1, B, 1]),
              c.shader.setMatrixUniforms(c, z),
              a.bonds_renderAsLines_3D
                ? 0 == this.bondOrder
                  ? c.drawArrays(c.POINTS, 0, 1)
                  : c.drawArrays(
                      c.LINES,
                      0,
                      c.lineBuffer.vertexPositionBuffer.numItems
                    )
                : 0 == this.bondOrder
                ? c.drawElements(
                    c.TRIANGLES,
                    c.sphereBuffer.vertexIndexBuffer.numItems,
                    c.UNSIGNED_SHORT,
                    0
                  )
                : c.drawElements(
                    c.TRIANGLES,
                    c.pillBuffer.vertexIndexBuffer.numItems,
                    c.UNSIGNED_SHORT,
                    0
                  ),
              k.translate(z, [0, g * (1 + m), 0]),
              k.scale(z, [1, 1 / B, 1]));
          }
        }
      } else {
        if (a.bonds_showBondOrders_3D) {
          switch (this.bondOrder) {
            case 1.5:
              q = [-a.bonds_cylinderDiameter_3D];
              break;
            case 2:
              q = [-a.bonds_cylinderDiameter_3D, a.bonds_cylinderDiameter_3D];
              break;
            case 3:
              q = [
                -1.2 * a.bonds_cylinderDiameter_3D,
                0,
                1.2 * a.bonds_cylinderDiameter_3D,
              ];
          }
          1 < this.bondOrder &&
            ((A = [0, 0, 1]),
            (g = k.inverse(c.rotationMatrix, [])),
            k.multiplyVec3(g, A),
            (A = b.cross(w, A, [])),
            b.normalize(A));
        } else
          switch (this.bondOrder) {
            case 0:
              e *= 0.25;
              break;
            case 0.5:
            case 1.5:
              e *= 0.5;
          }
        u && (h /= 2);
        h = [e, h, e];
        for (let g = 0, l = q.length; g < l; g++)
          (w = k.set(x, [])),
            0 !== q[g] && k.translate(w, b.scale(A, q[g], [])),
            0 !== n && k.rotate(w, n, r),
            k.scale(w, h),
            m && c.material.setDiffuseColor(c, m),
            c.shader.setMatrixUniforms(c, w),
            a.bonds_renderAsLines_3D
              ? c.drawArrays(
                  c.LINES,
                  0,
                  c.lineBuffer.vertexPositionBuffer.numItems
                )
              : c.drawArrays(
                  c.TRIANGLE_STRIP,
                  0,
                  c.cylinderBuffer.vertexPositionBuffer.numItems
                ),
            u &&
              (k.set(u, w),
              0 !== q[g] && k.translate(w, b.scale(A, q[g], [])),
              k.rotate(w, n + d.PI, r),
              k.scale(w, h),
              f && c.material.setDiffuseColor(c, f),
              c.shader.setMatrixUniforms(c, w),
              a.bonds_renderAsLines_3D
                ? c.drawArrays(
                    c.LINES,
                    0,
                    c.lineBuffer.vertexPositionBuffer.numItems
                  )
                : c.drawArrays(
                    c.TRIANGLE_STRIP,
                    0,
                    c.cylinderBuffer.vertexPositionBuffer.numItems
                  ));
      }
    }
  };
  e.renderHighlight = function (c, a) {
    if (this.isSelected || this.isHover) {
      this.styles && (a = this.styles);
      this.styles && (a = this.styles);
      let l = this.a1.distance3D(this.a2);
      if (0 !== l) {
        var g = a.bonds_cylinderDiameter_3D / 1.2,
          h = k.translate(k.identity(), [this.a1.x, this.a1.y, this.a1.z]),
          e = [
            this.a2.x - this.a1.x,
            this.a2.y - this.a1.y,
            this.a2.z - this.a1.z,
          ],
          m = [0, 1, 0],
          x = 0;
        this.a1.x === this.a2.x && this.a1.z === this.a2.z
          ? ((e = [0, 0, 1]), this.a2.y < this.a1.y && (x = d.PI))
          : ((x = p.vec3AngleFrom(m, e)), (e = b.cross(m, e, [])));
        g = [g, l, g];
        0 !== x && k.rotate(h, x, e);
        k.scale(h, g);
        c.shader.setMatrixUniforms(c, h);
        c.material.setDiffuseColor(
          c,
          this.isHover ? a.colorHover : a.colorSelect
        );
        c.drawArrays(
          c.TRIANGLE_STRIP,
          0,
          c.cylinderBuffer.vertexPositionBuffer.numItems
        );
      }
    }
  };
  e.renderPicker = function (c, a) {
    this.styles && (a = this.styles);
    var g = this.a1.distance3D(this.a2);
    if (0 !== g) {
      var h = a.bonds_cylinderDiameter_3D / 2,
        e = k.translate(k.identity(), [this.a1.x, this.a1.y, this.a1.z]),
        m = [
          this.a2.x - this.a1.x,
          this.a2.y - this.a1.y,
          this.a2.z - this.a1.z,
        ],
        x = [0, 1, 0],
        u = 0;
      this.a1.x === this.a2.x && this.a1.z === this.a2.z
        ? ((x = [0, 0, 1]), this.a2.y < this.a1.y && (u = d.PI))
        : ((u = p.vec3AngleFrom(x, m)), (x = b.cross(x, m, [])));
      var w = [0];
      if (a.bonds_showBondOrders_3D)
        if (a.bonds_renderAsLines_3D) {
          switch (this.bondOrder) {
            case 1.5:
            case 2:
              w = [-a.bonds_cylinderDiameter_3D, a.bonds_cylinderDiameter_3D];
              break;
            case 3:
              w = [
                -1.2 * a.bonds_cylinderDiameter_3D,
                0,
                1.2 * a.bonds_cylinderDiameter_3D,
              ];
          }
          if (1 < this.bondOrder) {
            var r = [0, 0, 1];
            let a = k.inverse(c.rotationMatrix, []);
            k.multiplyVec3(a, r);
            r = b.cross(m, r, []);
            b.normalize(r);
          }
        } else
          switch (this.bondOrder) {
            case 1.5:
            case 2:
              h *= 3;
              break;
            case 3:
              h *= 3.4;
          }
      else
        switch (this.bondOrder) {
          case 0:
            h *= 0.25;
            break;
          case 0.5:
          case 1.5:
            h *= 0.5;
        }
      g = [h, g, h];
      for (let d = 0, f = w.length; d < f; d++)
        (h = k.set(e, [])),
          0 !== w[d] && k.translate(h, b.scale(r, w[d], [])),
          0 !== u && k.rotate(h, u, x),
          k.scale(h, g),
          c.shader.setMatrixUniforms(c, h),
          a.bonds_renderAsLines_3D
            ? c.drawArrays(
                c.LINES,
                0,
                c.lineBuffer.vertexPositionBuffer.numItems
              )
            : c.drawArrays(
                c.TRIANGLE_STRIP,
                0,
                c.cylinderBuffer.vertexPositionBuffer.numItems
              );
    }
  };
})(
  ChemDoodle.ELEMENT,
  ChemDoodle.extensions,
  ChemDoodle.structures,
  ChemDoodle.math,
  Math,
  ChemDoodle.lib.mat4,
  ChemDoodle.lib.vec3
);
(function (e, p, n) {
  e.Ring = function () {
    this.atoms = [];
    this.bonds = [];
  };
  let r = e.Ring.prototype;
  r.center = n;
  r.setupBonds = function () {
    for (let d = 0, e = this.bonds.length; d < e; d++)
      this.bonds[d].ring = this;
    this.center = this.getCenter();
  };
  r.getCenter = function () {
    let d = Infinity,
      k = Infinity,
      b = -Infinity,
      c = -Infinity;
    for (let h = 0, a = this.atoms.length; h < a; h++)
      (d = p.min(this.atoms[h].x, d)),
        (k = p.min(this.atoms[h].y, k)),
        (b = p.max(this.atoms[h].x, b)),
        (c = p.max(this.atoms[h].y, c));
    return new e.Point((b + d) / 2, (c + k) / 2);
  };
})(ChemDoodle.structures, Math);
(function (e, p, n, r, d, k) {
  n.Molecule = function () {
    this.atoms = [];
    this.bonds = [];
    this.rings = [];
  };
  let b = n.Molecule.prototype;
  b.findRings = !0;
  b.draw = function (b, h) {
    this.styles && (h = this.styles);
    if (h.atoms_display && !h.atoms_circles_2D)
      for (let a = 0, c = this.atoms.length; a < c; a++)
        this.atoms[a].draw(b, h);
    if (h.bonds_display)
      for (let a = 0, c = this.bonds.length; a < c; a++)
        this.bonds[a].draw(b, h);
    if (h.atoms_display)
      for (let a = 0, c = this.atoms.length; a < c; a++) {
        let c = this.atoms[a];
        h.atoms_circles_2D && c.draw(b, h);
        c.query && c.query.draw(b, h, c);
      }
  };
  b.render = function (b, h) {
    this.styles && (h = this.styles);
    var a = 0 < this.atoms.length && this.atoms[0].hetatm !== k;
    if (a) {
      if (h.macro_displayBonds) {
        0 < this.bonds.length &&
          ((h.bonds_renderAsLines_3D && !this.residueSpecs) ||
          (this.residueSpecs && this.residueSpecs.bonds_renderAsLines_3D)
            ? (b.lineWidth(
                this.residueSpecs
                  ? this.residueSpecs.bonds_width_2D
                  : h.bonds_width_2D
              ),
              b.lineBuffer.bindBuffers(b))
            : b.cylinderBuffer.bindBuffers(b),
          b.material.setTempColors(
            b,
            h.bonds_materialAmbientColor_3D,
            k,
            h.bonds_materialSpecularColor_3D,
            h.bonds_materialShininess_3D
          ));
        for (let a = 0, g = this.bonds.length; a < g; a++) {
          var c = this.bonds[a];
          !c.a1.hetatm &&
            (-1 === h.macro_atomToLigandDistance ||
              (c.a1.closestDistance !== k &&
                h.macro_atomToLigandDistance >= c.a1.closestDistance &&
                h.macro_atomToLigandDistance >= c.a2.closestDistance)) &&
            c.render(b, this.residueSpecs ? this.residueSpecs : h);
        }
      }
      if (h.macro_displayAtoms) {
        0 < this.atoms.length &&
          (b.sphereBuffer.bindBuffers(b),
          b.material.setTempColors(
            b,
            h.atoms_materialAmbientColor_3D,
            k,
            h.atoms_materialSpecularColor_3D,
            h.atoms_materialShininess_3D
          ));
        for (let a = 0, g = this.atoms.length; a < g; a++)
          (c = this.atoms[a]),
            !c.hetatm &&
              (-1 === h.macro_atomToLigandDistance ||
                (c.closestDistance !== k &&
                  h.macro_atomToLigandDistance >= c.closestDistance)) &&
              c.render(b, this.residueSpecs ? this.residueSpecs : h);
      }
    }
    if (h.bonds_display) {
      c = [];
      var d = [];
      0 < this.bonds.length &&
        (h.bonds_renderAsLines_3D
          ? (b.lineWidth(h.bonds_width_2D), b.lineBuffer.bindBuffers(b))
          : b.cylinderBuffer.bindBuffers(b),
        b.material.setTempColors(
          b,
          h.bonds_materialAmbientColor_3D,
          k,
          h.bonds_materialSpecularColor_3D,
          h.bonds_materialShininess_3D
        ));
      for (let g = 0, l = this.bonds.length; g < l; g++) {
        let l = this.bonds[g];
        if (!a || l.a1.hetatm)
          h.bonds_showBondOrders_3D
            ? 0 == l.bondOrder
              ? d.push(l)
              : 0.5 == l.bondOrder
              ? c.push(l)
              : (1.5 == l.bondOrder && c.push(l), l.render(b, h))
            : l.render(b, h);
      }
      if (0 < c.length) {
        h.bonds_renderAsLines_3D || b.pillBuffer.bindBuffers(b);
        for (let a = 0, g = c.length; a < g; a++) c[a].render(b, h, !0);
      }
      if (0 < d.length) {
        h.bonds_renderAsLines_3D || b.sphereBuffer.bindBuffers(b);
        for (let a = 0, c = d.length; a < c; a++) d[a].render(b, h, !0);
      }
    }
    if (h.atoms_display) {
      for (let a = 0, b = this.atoms.length; a < b; a++)
        (c = this.atoms[a]), (c.bondNumber = 0), (c.renderAsStar = !1);
      for (let a = 0, b = this.bonds.length; a < b; a++)
        (c = this.bonds[a]), c.a1.bondNumber++, c.a2.bondNumber++;
      0 < this.atoms.length &&
        (b.sphereBuffer.bindBuffers(b),
        b.material.setTempColors(
          b,
          h.atoms_materialAmbientColor_3D,
          k,
          h.atoms_materialSpecularColor_3D,
          h.atoms_materialShininess_3D
        ));
      c = [];
      for (let g = 0, l = this.atoms.length; g < l; g++)
        if (
          ((d = this.atoms[g]),
          !a || (d.hetatm && (h.macro_showWater || !d.isWater)))
        )
          h.atoms_nonBondedAsStars_3D && 0 === d.bondNumber
            ? ((d.renderAsStar = !0), c.push(d))
            : d.render(b, h);
      if (0 < c.length) {
        b.starBuffer.bindBuffers(b);
        for (let a = 0, g = c.length; a < g; a++) c[a].render(b, h);
      }
    }
    if (this.chains) {
      b.shader.setMatrixUniforms(b);
      if (h.proteins_displayRibbon) {
        b.material.setTempColors(
          b,
          h.proteins_materialAmbientColor_3D,
          k,
          h.proteins_materialSpecularColor_3D,
          h.proteins_materialShininess_3D
        );
        a = h.proteins_ribbonCartoonize ? this.cartoons : this.ribbons;
        for (let g = 0, l = a.length; g < l; g++)
          if (((c = a[g]), "none" !== h.proteins_residueColor)) {
            c.front.bindBuffers(b);
            d = "rainbow" === h.proteins_residueColor;
            for (let a = 0, g = c.front.segments.length; a < g; a++)
              d &&
                b.material.setDiffuseColor(
                  b,
                  p.rainbowAt(a, g, h.macro_rainbowColors)
                ),
                c.front.segments[a].render(b, h);
            c.back.bindBuffers(b);
            for (let a = 0, g = c.back.segments.length; a < g; a++)
              d &&
                b.material.setDiffuseColor(
                  b,
                  p.rainbowAt(a, g, h.macro_rainbowColors)
                ),
                c.back.segments[a].render(b, h);
          } else c.front.render(b, h), c.back.render(b, h);
      }
      if (h.proteins_displayPipePlank)
        for (let a = 0, c = this.pipePlanks.length; a < c; a++)
          this.pipePlanks[a].render(b, h);
      if (h.proteins_displayBackbone) {
        if (!this.alphaCarbonTrace) {
          this.alphaCarbonTrace = { nodes: [], edges: [] };
          for (let b = 0, g = this.chains.length; b < g; b++)
            if (
              ((a = this.chains[b]),
              !(
                2 < a.length &&
                r[a[2].name] &&
                "#BEA06E" === r[a[2].name].aminoColor
              ) && 0 < a.length)
            )
              for (let b = 0, g = a.length - 2; b < g; b++)
                (c = a[b].cp1),
                  (c.chainColor = a.chainColor),
                  this.alphaCarbonTrace.nodes.push(c),
                  (c = new n.Bond(a[b].cp1, a[b + 1].cp1)),
                  (c.residueName = a[b].name),
                  (c.chainColor = a.chainColor),
                  this.alphaCarbonTrace.edges.push(c),
                  b === a.length - 3 &&
                    ((c = a[b + 1].cp1),
                    (c.chainColor = a.chainColor),
                    this.alphaCarbonTrace.nodes.push(c));
        }
        if (0 < this.alphaCarbonTrace.nodes.length) {
          a = new n.Styles();
          a.atoms_display = !0;
          a.bonds_display = !0;
          a.atoms_sphereDiameter_3D = h.proteins_backboneThickness;
          a.bonds_cylinderDiameter_3D = h.proteins_backboneThickness;
          a.bonds_splitColor = !1;
          a.atoms_color = h.proteins_backboneColor;
          a.bonds_color = h.proteins_backboneColor;
          a.atoms_useVDWDiameters_3D = !1;
          b.material.setTempColors(
            b,
            h.proteins_materialAmbientColor_3D,
            k,
            h.proteins_materialSpecularColor_3D,
            h.proteins_materialShininess_3D
          );
          b.material.setDiffuseColor(b, h.proteins_backboneColor);
          for (let g = 0, d = this.alphaCarbonTrace.nodes.length; g < d; g++)
            (c = this.alphaCarbonTrace.nodes[g]),
              h.macro_colorByChain && (a.atoms_color = c.chainColor),
              b.sphereBuffer.bindBuffers(b),
              c.render(b, a);
          for (let g = 0, l = this.alphaCarbonTrace.edges.length; g < l; g++) {
            c = this.alphaCarbonTrace.edges[g];
            var e;
            d = r[c.residueName] ? r[c.residueName] : r["*"];
            h.macro_colorByChain
              ? (e = c.chainColor)
              : "shapely" === h.proteins_residueColor
              ? (e = d.shapelyColor)
              : "amino" === h.proteins_residueColor
              ? (e = d.aminoColor)
              : "polarity" === h.proteins_residueColor
              ? (e = d.polar ? "#C10000" : "#FFFFFF")
              : "acidity" === h.proteins_residueColor
              ? (e =
                  1 === d.acidity
                    ? "#0000FF"
                    : -1 === d.acidity
                    ? "#FF0000"
                    : d.polar
                    ? "#FFFFFF"
                    : "#773300")
              : "rainbow" === h.proteins_residueColor &&
                (e = p.rainbowAt(g, l, h.macro_rainbowColors));
            e && (a.bonds_color = e);
            b.cylinderBuffer.bindBuffers(b);
            c.render(b, a);
          }
        }
      }
      if (h.nucleics_display) {
        b.material.setTempColors(
          b,
          h.nucleics_materialAmbientColor_3D,
          k,
          h.nucleics_materialSpecularColor_3D,
          h.nucleics_materialShininess_3D
        );
        for (let a = 0, c = this.tubes.length; a < c; a++)
          b.shader.setMatrixUniforms(b), this.tubes[a].render(b, h);
      }
    }
    if (h.atoms_display) {
      e = !1;
      for (let b = 0, c = this.atoms.length; b < c; b++)
        if (((a = this.atoms[b]), a.isHover || a.isSelected)) {
          e = !0;
          break;
        }
      if (!e)
        for (let b = 0, c = this.bonds.length; b < c; b++)
          if (((a = this.bonds[b]), a.isHover || a.isSelected)) {
            e = !0;
            break;
          }
      if (e) {
        b.sphereBuffer.bindBuffers(b);
        b.blendFunc(b.SRC_ALPHA, b.ONE);
        b.material.setTempColors(
          b,
          h.atoms_materialAmbientColor_3D,
          k,
          "#000000",
          0
        );
        b.enable(b.BLEND);
        b.depthMask(!1);
        b.material.setAlpha(b, 0.4);
        b.sphereBuffer.bindBuffers(b);
        for (let a = 0, c = this.atoms.length; a < c; a++)
          (e = this.atoms[a]),
            (e.isHover || e.isSelected) && e.renderHighlight(b, h);
        b.cylinderBuffer.bindBuffers(b);
        for (let a = 0, c = this.bonds.length; a < c; a++)
          (e = this.bonds[a]),
            (e.isHover || e.isSelected) && e.renderHighlight(b, h);
        b.depthMask(!0);
        b.disable(b.BLEND);
        b.blendFuncSeparate(
          b.SRC_ALPHA,
          b.ONE_MINUS_SRC_ALPHA,
          b.ONE,
          b.ONE_MINUS_SRC_ALPHA
        );
      }
    }
  };
  b.renderPickFrame = function (b, h, a, g, d) {
    this.styles && (h = this.styles);
    var c = 0 < this.atoms.length && this.atoms[0].hetatm !== k;
    if (d && h.bonds_display) {
      0 < this.bonds.length &&
        (h.bonds_renderAsLines_3D
          ? (b.lineWidth(h.bonds_width_2D), b.lineBuffer.bindBuffers(b))
          : b.cylinderBuffer.bindBuffers(b));
      for (let g = 0, l = this.bonds.length; g < l; g++)
        if (((d = this.bonds[g]), !c || d.a1.hetatm))
          b.material.setDiffuseColor(b, p.idx2color(a.length)),
            d.renderPicker(b, h),
            a.push(d);
    }
    if (g && h.atoms_display) {
      for (let a = 0, b = this.atoms.length; a < b; a++)
        (g = this.atoms[a]), (g.bondNumber = 0), (g.renderAsStar = !1);
      for (let a = 0, b = this.bonds.length; a < b; a++)
        (g = this.bonds[a]), g.a1.bondNumber++, g.a2.bondNumber++;
      0 < this.atoms.length && b.sphereBuffer.bindBuffers(b);
      g = [];
      for (let l = 0, e = this.atoms.length; l < e; l++)
        if (
          ((d = this.atoms[l]),
          !c || (d.hetatm && (h.macro_showWater || !d.isWater)))
        )
          h.atoms_nonBondedAsStars_3D && 0 === d.bondNumber
            ? ((d.renderAsStar = !0), g.push(d))
            : (b.material.setDiffuseColor(b, p.idx2color(a.length)),
              d.render(b, h, !0),
              a.push(d));
      if (0 < g.length) {
        b.starBuffer.bindBuffers(b);
        for (let d = 0, l = g.length; d < l; d++)
          (c = g[d]),
            b.material.setDiffuseColor(b, p.idx2color(a.length)),
            c.render(b, h, !0),
            a.push(c);
      }
    }
  };
  b.getCenter3D = function () {
    if (1 === this.atoms.length)
      return new n.Atom("C", this.atoms[0].x, this.atoms[0].y, this.atoms[0].z);
    let b = Infinity,
      h = Infinity,
      a = Infinity,
      g = -Infinity,
      l = -Infinity,
      e = -Infinity;
    if (this.chains)
      for (let c = 0, k = this.chains.length; c < k; c++) {
        let m = this.chains[c];
        for (let c = 0, k = m.length; c < k; c++) {
          let k = m[c];
          b = d.min(k.cp1.x, k.cp2.x, b);
          h = d.min(k.cp1.y, k.cp2.y, h);
          a = d.min(k.cp1.z, k.cp2.z, a);
          g = d.max(k.cp1.x, k.cp2.x, g);
          l = d.max(k.cp1.y, k.cp2.y, l);
          e = d.max(k.cp1.z, k.cp2.z, e);
        }
      }
    for (let c = 0, k = this.atoms.length; c < k; c++)
      (b = d.min(this.atoms[c].x, b)),
        (h = d.min(this.atoms[c].y, h)),
        (a = d.min(this.atoms[c].z, a)),
        (g = d.max(this.atoms[c].x, g)),
        (l = d.max(this.atoms[c].y, l)),
        (e = d.max(this.atoms[c].z, e));
    return new n.Atom("C", (g + b) / 2, (l + h) / 2, (e + a) / 2);
  };
  b.getCenter = function () {
    if (1 === this.atoms.length)
      return new n.Point(this.atoms[0].x, this.atoms[0].y);
    let b = Infinity,
      h = Infinity,
      a = -Infinity,
      g = -Infinity;
    for (let c = 0, e = this.atoms.length; c < e; c++)
      (b = d.min(this.atoms[c].x, b)),
        (h = d.min(this.atoms[c].y, h)),
        (a = d.max(this.atoms[c].x, a)),
        (g = d.max(this.atoms[c].y, g));
    return new n.Point((a + b) / 2, (g + h) / 2);
  };
  b.getDimension = function () {
    if (1 === this.atoms.length) return new n.Point(0, 0);
    let b = Infinity,
      h = Infinity,
      a = -Infinity,
      g = -Infinity;
    if (this.chains) {
      for (let c = 0, e = this.chains.length; c < e; c++) {
        let l = this.chains[c];
        for (let c = 0, e = l.length; c < e; c++) {
          let e = l[c];
          b = d.min(e.cp1.x, e.cp2.x, b);
          h = d.min(e.cp1.y, e.cp2.y, h);
          a = d.max(e.cp1.x, e.cp2.x, a);
          g = d.max(e.cp1.y, e.cp2.y, g);
        }
      }
      b -= 30;
      h -= 30;
      a += 30;
      g += 30;
    }
    for (let c = 0, e = this.atoms.length; c < e; c++)
      (b = d.min(this.atoms[c].x, b)),
        (h = d.min(this.atoms[c].y, h)),
        (a = d.max(this.atoms[c].x, a)),
        (g = d.max(this.atoms[c].y, g));
    return new n.Point(a - b, g - h);
  };
  b.check = function (b) {
    if (b && this.doChecks) {
      if (this.findRings)
        if (this.bonds.length - this.atoms.length !== this.fjNumCache) {
          this.rings = new e.informatics.SSSRFinder(this).rings;
          for (let a = 0, b = this.bonds.length; a < b; a++)
            this.bonds[a].ring = k;
          for (let a = 0, b = this.rings.length; a < b; a++)
            this.rings[a].setupBonds();
        } else
          for (let a = 0, b = this.rings.length; a < b; a++) {
            var c = this.rings[a];
            c.center = c.getCenter();
          }
      for (let a = 0, b = this.atoms.length; a < b; a++)
        if (((this.atoms[a].isLone = !1), "C" === this.atoms[a].label)) {
          c = 0;
          for (let b = 0, g = this.bonds.length; b < g; b++)
            (this.bonds[b].a1 !== this.atoms[a] &&
              this.bonds[b].a2 !== this.atoms[a]) ||
              c++;
          0 === c && (this.atoms[a].isLone = !0);
        }
      c = !1;
      for (let a = 0, b = this.atoms.length; a < b; a++)
        0 !== this.atoms[a].z && (c = !0);
      c && (this.sortAtomsByZ(), this.sortBondsByZ());
      this.setupMetaData();
      this.atomNumCache = this.atoms.length;
      this.bondNumCache = this.bonds.length;
      this.fjNumCache = this.bonds.length - this.atoms.length;
    }
    this.doChecks = !b;
  };
  b.getAngles = function (b) {
    let c = [];
    for (let a = 0, g = this.bonds.length; a < g; a++)
      this.bonds[a].contains(b) &&
        c.push(b.angle(this.bonds[a].getNeighbor(b)));
    c.sort(function (a, b) {
      return a - b;
    });
    return c;
  };
  b.getCoordinationNumber = function (b) {
    let c = 0;
    for (let a = 0, g = b.length; a < g; a++) c += b[a].bondOrder;
    return c;
  };
  b.getBonds = function (b) {
    let c = [];
    for (let a = 0, g = this.bonds.length; a < g; a++)
      this.bonds[a].contains(b) && c.push(this.bonds[a]);
    return c;
  };
  b.sortAtomsByZ = function () {
    for (let b = 1, d = this.atoms.length; b < d; b++) {
      let a = b;
      for (; 0 < a && this.atoms[a].z < this.atoms[a - 1].z; ) {
        let b = this.atoms[a];
        this.atoms[a] = this.atoms[a - 1];
        this.atoms[a - 1] = b;
        a--;
      }
    }
  };
  b.sortBondsByZ = function () {
    for (let b = 1, d = this.bonds.length; b < d; b++) {
      let a = b;
      for (
        ;
        0 < a &&
        this.bonds[a].a1.z + this.bonds[a].a2.z <
          this.bonds[a - 1].a1.z + this.bonds[a - 1].a2.z;

      ) {
        let b = this.bonds[a];
        this.bonds[a] = this.bonds[a - 1];
        this.bonds[a - 1] = b;
        a--;
      }
    }
  };
  b.setupMetaData = function () {
    let b = this.getCenter();
    for (let c = 0, a = this.atoms.length; c < a; c++) {
      let a = this.atoms[c];
      a.bonds = this.getBonds(a);
      a.angles = this.getAngles(a);
      a.isHidden =
        2 === a.bonds.length &&
        d.abs(d.abs(a.angles[1] - a.angles[0]) - d.PI) < d.PI / 30 &&
        a.bonds[0].bondOrder === a.bonds[1].bondOrder;
      let h = p.angleBetweenLargest(a.angles);
      a.angleOfLeastInterference = h.angle % (2 * d.PI);
      a.largestAngle = h.largest;
      a.coordinationNumber = this.getCoordinationNumber(a.bonds);
      a.bondNumber = a.bonds.length;
      a.molCenter = b;
    }
    for (let c = 0, a = this.bonds.length; c < a; c++)
      this.bonds[c].molCenter = b;
  };
  b.scaleToAverageBondLength = function (b) {
    let c = this.getAverageBondLength();
    if (0 !== c) {
      b /= c;
      for (let a = 0, c = this.atoms.length; a < c; a++)
        (this.atoms[a].x *= b), (this.atoms[a].y *= b);
    }
  };
  b.getAverageBondLength = function () {
    if (0 === this.bonds.length) return 0;
    let b = 0;
    for (let c = 0, a = this.bonds.length; c < a; c++)
      b += this.bonds[c].getLength();
    return (b /= this.bonds.length);
  };
  b.getBounds = function () {
    let b = new p.Bounds();
    for (let c = 0, a = this.atoms.length; c < a; c++)
      b.expand(this.atoms[c].getBounds());
    if (this.chains) {
      for (let c = 0, a = this.chains.length; c < a; c++) {
        let a = this.chains[c];
        for (let c = 0, g = a.length; c < g; c++) {
          let g = a[c];
          b.expand(g.cp1.x, g.cp1.y);
          b.expand(g.cp2.x, g.cp2.y);
        }
      }
      b.minX -= 30;
      b.minY -= 30;
      b.maxX += 30;
      b.maxY += 30;
    }
    return b;
  };
  b.getBounds3D = function () {
    let b = new p.Bounds();
    for (let c = 0, a = this.atoms.length; c < a; c++)
      b.expand(this.atoms[c].getBounds3D());
    if (this.chains)
      for (let c = 0, a = this.chains.length; c < a; c++) {
        let a = this.chains[c];
        for (let c = 0, g = a.length; c < g; c++) {
          let g = a[c];
          b.expand3D(g.cp1.x, g.cp1.y, g.cp1.z);
          b.expand3D(g.cp2.x, g.cp2.y, g.cp2.z);
        }
      }
    return b;
  };
  b.getAtomGroup = function (b) {
    let c = !1;
    for (let a = 0, b = this.atoms.length; a < b; a++)
      this.atoms[a].visited = !1;
    for (let g = 0, d = this.bonds.length; g < d; g++) {
      var a = this.bonds[g];
      !c && a.contains(b) && a.ring !== k && (c = !0);
    }
    if (!c) return k;
    a = [b];
    b.visited = !0;
    let g = new n.Queue();
    for (g.enqueue(b); !g.isEmpty(); ) {
      b = g.dequeue();
      for (let h = 0, l = this.bonds.length; h < l; h++) {
        var d = this.bonds[h];
        d.contains(b) &&
          c === (d.ring !== k) &&
          ((d = d.getNeighbor(b)),
          d.visited || ((d.visited = !0), a.push(d), g.enqueue(d)));
      }
    }
    return a;
  };
  b.getBondGroup = function (b) {
    let c = b.ring !== k;
    var a = !1;
    for (let c = 0, d = this.bonds.length; c < d; c++) {
      var g = this.bonds[c];
      g === b && (a = !0);
      g.visited = !1;
    }
    if (!a) return k;
    a = [b];
    b.visited = !0;
    g = new n.Queue();
    for (g.enqueue(b); !g.isEmpty(); ) {
      b = g.dequeue();
      for (let d = 0, h = this.bonds.length; d < h; d++) {
        let h = this.bonds[d];
        h.visited ||
          (h.a1 !== b.a1 && h.a2 !== b.a1 && h.a1 !== b.a2 && h.a2 !== b.a2) ||
          (h.ring !== k) !== c ||
          ((h.visited = !0), a.push(h), g.enqueue(h));
      }
    }
    return a;
  };
})(
  ChemDoodle,
  ChemDoodle.math,
  ChemDoodle.structures,
  ChemDoodle.RESIDUE,
  Math
);
(function (e, p) {
  e.Reaction = function () {};
  e.Reaction.prototype.resolve = function (e, r) {
    if (e && r) {
      var d = { reactants: [], products: [] };
      e = e.getPoints();
      if (!e) return d.reactants.push(...r), d;
      for (let k = 0, b = r.length; k < b; k++) {
        let b = r[k];
        b.getCenter().x < e[1].x ? d.reactants.push(b) : d.products.push(b);
      }
      return d;
    }
  };
})(ChemDoodle.structures);
(function (e, p, n, r, d) {
  let k,
    b = -1;
  e.Residue = function (b) {
    this.resSeq = b;
  };
  d = e.Residue.prototype;
  d.setup = function (b, d) {
    this.horizontalResolution = d;
    let a = [b.x - this.cp1.x, b.y - this.cp1.y, b.z - this.cp1.z];
    var c = r.cross(
      a,
      [
        this.cp2.x - this.cp1.x,
        this.cp2.y - this.cp1.y,
        this.cp2.z - this.cp1.z,
      ],
      []
    );
    this.D = r.cross(c, a, []);
    r.normalize(c);
    r.normalize(this.D);
    this.guidePointsSmall = [];
    this.guidePointsLarge = [];
    b = [
      (b.x + this.cp1.x) / 2,
      (b.y + this.cp1.y) / 2,
      (b.z + this.cp1.z) / 2,
    ];
    this.helix && (r.scale(c, 1.5), r.add(b, c));
    this.guidePointsSmall[0] = new e.Atom(
      "",
      b[0] - this.D[0] / 2,
      b[1] - this.D[1] / 2,
      b[2] - this.D[2] / 2
    );
    for (c = 1; c < d; c++)
      this.guidePointsSmall[c] = new e.Atom(
        "",
        this.guidePointsSmall[0].x + (this.D[0] * c) / d,
        this.guidePointsSmall[0].y + (this.D[1] * c) / d,
        this.guidePointsSmall[0].z + (this.D[2] * c) / d
      );
    r.scale(this.D, 4);
    this.guidePointsLarge[0] = new e.Atom(
      "",
      b[0] - this.D[0] / 2,
      b[1] - this.D[1] / 2,
      b[2] - this.D[2] / 2
    );
    for (c = 1; c < d; c++)
      this.guidePointsLarge[c] = new e.Atom(
        "",
        this.guidePointsLarge[0].x + (this.D[0] * c) / d,
        this.guidePointsLarge[0].y + (this.D[1] * c) / d,
        this.guidePointsLarge[0].z + (this.D[2] * c) / d
      );
  };
  d.getGuidePointSet = function (b) {
    if (0 === b)
      return this.helix || this.sheet
        ? this.guidePointsLarge
        : this.guidePointsSmall;
    if (1 === b) return this.guidePointsSmall;
    if (2 === b) return this.guidePointsLarge;
  };
  d.computeLineSegments = function (b, d, a, g, e) {
    this.setVerticalResolution(e);
    this.split = a.helix !== this.helix || a.sheet !== this.sheet;
    this.lineSegments = this.innerCompute(0, b, d, a, !1, e);
    g &&
      (this.lineSegmentsCartoon = this.innerCompute(
        this.helix || this.sheet ? 2 : 1,
        b,
        d,
        a,
        !0,
        e
      ));
  };
  d.innerCompute = function (b, d, a, g, l, v) {
    let c = [];
    var h = this.getGuidePointSet(b);
    d = d.getGuidePointSet(b);
    a = a.getGuidePointSet(b);
    b = g.getGuidePointSet(b);
    for (let l = 0, m = h.length; l < m; l++) {
      g = n.multiply(
        [
          d[l].x,
          d[l].y,
          d[l].z,
          1,
          a[l].x,
          a[l].y,
          a[l].z,
          1,
          h[l].x,
          h[l].y,
          h[l].z,
          1,
          b[l].x,
          b[l].y,
          b[l].z,
          1,
        ],
        k,
        []
      );
      let m = [];
      for (let a = 0; a < v; a++) {
        for (let a = 3; 0 < a; a--)
          for (let b = 0; 4 > b; b++) g[4 * a + b] += g[4 * (a - 1) + b];
        m[a] = new e.Atom("", g[12] / g[15], g[13] / g[15], g[14] / g[15]);
      }
      c[l] = m;
    }
    if (l && this.arrow)
      for (let e = 0, m = v; e < m; e++) {
        l = 1.5 - (1.3 * e) / v;
        h = p.floor(this.horizontalResolution / 2);
        d = c[h];
        for (let m = 0, k = c.length; m < k; m++)
          m !== h &&
            ((a = d[e]),
            (b = c[m][e]),
            (g = [b.x - a.x, b.y - a.y, b.z - a.z]),
            r.scale(g, l),
            (b.x = a.x + g[0]),
            (b.y = a.y + g[1]),
            (b.z = a.z + g[2]));
      }
    return c;
  };
  d.setVerticalResolution = function (c) {
    if (c !== b) {
      {
        let d = c * c,
          a = c * c * c;
        k = n.multiply(
          [
            -1 / 6,
            0.5,
            -0.5,
            1 / 6,
            0.5,
            -1,
            0.5,
            0,
            -0.5,
            0,
            0.5,
            0,
            1 / 6,
            2 / 3,
            1 / 6,
            0,
          ],
          [
            6 / a,
            0,
            0,
            0,
            6 / a,
            2 / d,
            0,
            0,
            1 / a,
            1 / d,
            1 / c,
            0,
            0,
            0,
            0,
            1,
          ],
          []
        );
        b = c;
      }
    }
  };
})(ChemDoodle.structures, Math, ChemDoodle.lib.mat4, ChemDoodle.lib.vec3);
(function (e, p, n, r, d, k) {
  p.Spectrum = function () {
    this.data = [];
    this.metadata = [];
    this.dataDisplay = [];
    this.memory = {
      offsetTop: 0,
      offsetLeft: 0,
      offsetBottom: 0,
      flipXAxis: !1,
      scale: 1,
      width: 0,
      height: 0,
    };
  };
  r = p.Spectrum.prototype;
  r.title = k;
  r.xUnit = k;
  r.yUnit = k;
  r.continuous = !0;
  r.integrationSensitivity = 0.01;
  r.draw = function (b, c, h, a) {
    this.styles && (c = this.styles);
    let g = 5,
      l = 0,
      k = 0;
    b.fillStyle = c.text_color;
    b.textAlign = "center";
    b.textBaseline = "alphabetic";
    b.font = e.getFontString(c.text_font_size, c.text_font_families);
    this.xUnit &&
      ((k += c.text_font_size), b.fillText(this.xUnit, h / 2, a - 2));
    this.yUnit &&
      c.plots_showYAxis &&
      ((l += c.text_font_size),
      b.save(),
      b.translate(c.text_font_size, a / 2),
      b.rotate(-d.PI / 2),
      b.fillText(this.yUnit, 0, 0),
      b.restore());
    this.title &&
      ((g += c.text_font_size),
      b.fillText(this.title, h / 2, c.text_font_size));
    b.lineCap = "square";
    k += 5 + c.text_font_size;
    c.plots_showYAxis && (l += 5 + b.measureText("1000").width);
    c.plots_showGrid &&
      ((b.strokeStyle = c.plots_gridColor),
      (b.lineWidth = c.plots_gridLineWidth),
      b.strokeRect(l, g, h - l, a - k - g));
    b.textAlign = "center";
    b.textBaseline = "top";
    for (
      var m = this.maxX - this.minX, x = m / 100, u = 0.001;
      u < x || 25 < m / u;

    )
      u *= 10;
    m = 0;
    x = c.plots_flipXAxis ? h : 0;
    for (var w = d.round(this.minX / u) * u; w <= this.maxX; w += u / 2) {
      var r = this.getTransformedX(w, c, h, l);
      if (r > l)
        if (((b.strokeStyle = "black"), (b.lineWidth = 1), 0 === m % 2)) {
          b.beginPath();
          b.moveTo(r, a - k);
          b.lineTo(r, a - k + 2);
          b.stroke();
          let d = w.toFixed(5);
          for (; "0" === d.charAt(d.length - 1); )
            d = d.substring(0, d.length - 1);
          "." === d.charAt(d.length - 1) && (d = d.substring(0, d.length - 1));
          let f = b.measureText(d).width;
          c.plots_flipXAxis && (f *= -1);
          let h = r - f / 2;
          if (c.plots_flipXAxis ? h < x : h > x)
            b.fillText(d, r, a - k + 2), (x = r + f / 2);
          c.plots_showGrid &&
            ((b.strokeStyle = c.plots_gridColor),
            (b.lineWidth = c.plots_gridLineWidth),
            b.beginPath(),
            b.moveTo(r, a - k),
            b.lineTo(r, g),
            b.stroke());
        } else
          b.beginPath(), b.moveTo(r, a - k), b.lineTo(r, a - k + 2), b.stroke();
      m++;
    }
    if (c.plots_showYAxis || c.plots_showGrid)
      for (
        u = 1 / c.scale,
          b.textAlign = "right",
          b.textBaseline = "middle",
          m = 0;
        10 >= m;
        m++
      )
        if (
          ((w = (u / 10) * m),
          (x = g + (a - k - g) * (1 - w * c.scale)),
          c.plots_showGrid &&
            ((b.strokeStyle = c.plots_gridColor),
            (b.lineWidth = c.plots_gridLineWidth),
            b.beginPath(),
            b.moveTo(l, x),
            b.lineTo(h, x),
            b.stroke()),
          c.plots_showYAxis)
        ) {
          b.strokeStyle = "black";
          b.lineWidth = 1;
          b.beginPath();
          b.moveTo(l, x);
          b.lineTo(l - 3, x);
          b.stroke();
          r = 100 * w;
          w = d.max(0, 3 - d.floor(r).toString().length);
          r = r.toFixed(w);
          if (0 < w)
            for (; "0" === r.charAt(r.length - 1); )
              r = r.substring(0, r.length - 1);
          "." === r.charAt(r.length - 1) && (r = r.substring(0, r.length - 1));
          b.fillText(r, l - 3, x);
        }
    b.strokeStyle = "black";
    b.lineWidth = 1;
    b.beginPath();
    b.moveTo(h, a - k);
    b.lineTo(l, a - k);
    c.plots_showYAxis && b.lineTo(l, g);
    b.stroke();
    if (0 < this.dataDisplay.length) {
      b.textAlign = "left";
      b.textBaseline = "top";
      u = 0;
      for (let a = 0, f = this.dataDisplay.length; a < f; a++)
        if (this.dataDisplay[a].value)
          b.fillText(
            [this.dataDisplay[a].display, ": ", this.dataDisplay[a].value].join(
              ""
            ),
            l + 10,
            g + 10 + u * (c.text_font_size + 5)
          ),
            u++;
        else if (this.dataDisplay[a].tag)
          for (let f = 0, d = this.metadata.length; f < d; f++)
            if (this.metadata[f].startsWith(this.dataDisplay[a].tag)) {
              m = this.metadata[f];
              this.dataDisplay[a].display &&
                ((m = this.metadata[f].indexOf("\x3d")),
                (m = [
                  this.dataDisplay[a].display,
                  ": ",
                  -1 < m ? this.metadata[f].substring(m + 2) : this.metadata[f],
                ].join("")));
              b.fillText(m, l + 10, g + 10 + u * (c.text_font_size + 5));
              u++;
              break;
            }
    }
    this.drawPlot(b, c, h, a, g, l, k);
    this.memory.offsetTop = g;
    this.memory.offsetLeft = l;
    this.memory.offsetBottom = k;
    this.memory.flipXAxis = c.plots_flipXAxis;
    this.memory.scale = c.scale;
    this.memory.width = h;
    this.memory.height = a;
  };
  r.drawPlot = function (b, c, h, a, g, e, v) {
    this.styles && (c = this.styles);
    b.strokeStyle = c.plots_color;
    b.lineWidth = c.plots_width;
    let l = [];
    b.save();
    b.rect(e, g, h - e, a - v - g);
    b.clip();
    b.beginPath();
    if (this.continuous) {
      var r = !1,
        u = 0,
        w = !1;
      for (let m = 0, x = this.data.length; m < x; m++) {
        let f = this.getTransformedX(this.data[m].x, c, h, e),
          q;
        m < x &&
          !r &&
          this.data[m + 1] &&
          (q = this.getTransformedX(this.data[m + 1].x, c, h, e));
        if ((f >= e && f < h) || (q !== k && q >= e && q < h)) {
          let h = this.getTransformedY(this.data[m].y, c, a, v, g);
          c.plots_showIntegration &&
            d.abs(this.data[m].y) > this.integrationSensitivity &&
            l.push(new p.Point(this.data[m].x, this.data[m].y));
          r || (b.moveTo(f, h), (r = !0));
          b.lineTo(f, h);
          u++;
          0 === u % 1e3 && (b.stroke(), b.beginPath(), b.moveTo(f, h));
          if (w) break;
        } else r && (w = !0);
      }
    } else
      for (let d = 0, l = this.data.length; d < l; d++)
        (r = this.getTransformedX(this.data[d].x, c, h, e)),
          r >= e &&
            r < h &&
            (b.moveTo(r, a - v),
            b.lineTo(r, this.getTransformedY(this.data[d].y, c, a, v, g)));
    b.stroke();
    if (c.plots_showIntegration && 1 < l.length) {
      b.strokeStyle = c.plots_integrationColor;
      b.lineWidth = c.plots_integrationLineWidth;
      b.beginPath();
      r = l[1].x > l[0].x;
      if ((this.flipXAxis && !r) || (!this.flipXAxis && r)) {
        for (r = l.length - 2; 0 <= r; r--) l[r].y += l[r + 1].y;
        r = l[0].y;
      } else {
        for (let a = 1, b = l.length; a < b; a++) l[a].y += l[a - 1].y;
        r = l[l.length - 1].y;
      }
      for (let d = 0, m = l.length; d < m; d++)
        (u = this.getTransformedX(l[d].x, c, h, e)),
          (w = this.getTransformedY(l[d].y / c.scale / r, c, a, v, g)),
          0 === d ? b.moveTo(u, w) : b.lineTo(u, w);
      b.stroke();
    }
    b.restore();
  };
  r.getTransformedY = function (b, c, d, a, g) {
    return g + (d - a - g) * (1 - b * c.scale);
  };
  r.getInverseTransformedY = function (b) {
    return (
      ((1 -
        (b - this.memory.offsetTop) /
          (this.memory.height -
            this.memory.offsetBottom -
            this.memory.offsetTop)) /
        this.memory.scale) *
      100
    );
  };
  r.getTransformedX = function (b, c, d, a) {
    b = a + ((b - this.minX) / (this.maxX - this.minX)) * (d - a);
    c.plots_flipXAxis && (b = d + a - b);
    return b;
  };
  r.getInverseTransformedX = function (b) {
    this.memory.flipXAxis &&
      (b = this.memory.width + this.memory.offsetLeft - b);
    return (
      ((b - this.memory.offsetLeft) * (this.maxX - this.minX)) /
        (this.memory.width - this.memory.offsetLeft) +
      this.minX
    );
  };
  r.setup = function () {
    let b = Number.MAX_VALUE,
      c = Number.MIN_VALUE,
      h = Number.MIN_VALUE;
    for (let a = 0, g = this.data.length; a < g; a++)
      (b = d.min(b, this.data[a].x)),
        (c = d.max(c, this.data[a].x)),
        (h = d.max(h, this.data[a].y));
    this.continuous
      ? ((this.minX = b), (this.maxX = c))
      : ((this.minX = b - 1), (this.maxX = c + 1));
    for (let a = 0, b = this.data.length; a < b; a++) this.data[a].y /= h;
  };
  r.zoom = function (b, c, h, a) {
    b = this.getInverseTransformedX(b);
    c = this.getInverseTransformedX(c);
    this.minX = d.min(b, c);
    this.maxX = d.max(b, c);
    if (a) {
      a = Number.MIN_VALUE;
      for (let b = 0, c = this.data.length; b < c; b++)
        n.isBetween(this.data[b].x, this.minX, this.maxX) &&
          (a = d.max(a, this.data[b].y));
      return 1 / a;
    }
  };
  r.translate = function (b, c) {
    b =
      (b / (c - this.memory.offsetLeft)) *
      (this.maxX - this.minX) *
      (this.memory.flipXAxis ? 1 : -1);
    this.minX += b;
    this.maxX += b;
  };
  r.alertMetadata = function () {
    alert(this.metadata.join("\n"));
  };
  r.getInternalCoordinates = function (b, c) {
    return new ChemDoodle.structures.Point(
      this.getInverseTransformedX(b),
      this.getInverseTransformedY(c)
    );
  };
  r.getClosestPlotInternalCoordinates = function (b) {
    var c = this.getInverseTransformedX(b - 1);
    b = this.getInverseTransformedX(b + 1);
    if (c > b) {
      var d = c;
      c = b;
      b = d;
    }
    d = -1;
    let a = -Infinity,
      g = !1;
    for (let h = 0, e = this.data.length; h < e; h++) {
      let e = this.data[h];
      if (n.isBetween(e.x, c, b)) e.y > a && ((g = !0), (a = e.y), (d = h));
      else if (g) break;
    }
    if (-1 === d) return k;
    c = this.data[d];
    return new ChemDoodle.structures.Point(c.x, 100 * c.y);
  };
  r.getClosestPeakInternalCoordinates = function (b) {
    var c = this.getInverseTransformedX(b);
    b = 0;
    var h = Infinity;
    for (let g = 0, e = this.data.length; g < e; g++) {
      var a = d.abs(this.data[g].x - c);
      if (a <= h) (h = a), (b = g);
      else break;
    }
    h = c = b;
    a = this.data[b].y;
    var g = this.data[b].y;
    for (let a = b + 1, c = this.data.length; a < c; a++)
      if (this.data[a].y + 0.05 > g) (g = this.data[a].y), (h = a);
      else break;
    for (g = b - 1; 0 <= g; g--)
      if (this.data[g].y + 0.05 > a) (a = this.data[g].y), (c = g);
      else break;
    b = this.data[c - b > h - b ? h : c];
    return new ChemDoodle.structures.Point(b.x, 100 * b.y);
  };
})(
  ChemDoodle.extensions,
  ChemDoodle.structures,
  ChemDoodle.math,
  ChemDoodle.lib.jQuery,
  Math
);
(function (e, p, n, r) {
  p._Shape = function () {};
  p = p._Shape.prototype;
  p.drawDecorations = function (d, e) {
    if (this.isHover) {
      let b = this.getPoints();
      for (let c = 0, h = b.length; c < h; c++) {
        let a = b[c];
        this.drawAnchor(d, e, a, a === this.hoverPoint);
      }
    }
  };
  p.getBounds = function () {
    let d = new e.Bounds(),
      k = this.getPoints();
    for (let b = 0, c = k.length; b < c; b++) {
      let c = k[b];
      d.expand(c.x, c.y);
    }
    return d;
  };
  p.drawAnchor = function (d, e, b, c) {
    d.save();
    d.translate(b.x, b.y);
    d.rotate(n.PI / 4);
    d.scale(1 / e.scale, 1 / e.scale);
    d.beginPath();
    d.moveTo(-4, -4);
    d.lineTo(4, -4);
    d.lineTo(4, 4);
    d.lineTo(-4, 4);
    d.closePath();
    d.fillStyle = c ? e.colorHover : "white";
    d.fill();
    d.beginPath();
    d.moveTo(-4, -2);
    d.lineTo(-4, -4);
    d.lineTo(-2, -4);
    d.moveTo(2, -4);
    d.lineTo(4, -4);
    d.lineTo(4, -2);
    d.moveTo(4, 2);
    d.lineTo(4, 4);
    d.lineTo(2, 4);
    d.moveTo(-2, 4);
    d.lineTo(-4, 4);
    d.lineTo(-4, 2);
    d.moveTo(-4, -2);
    d.strokeStyle = "rgba(0,0,0,.2)";
    d.lineWidth = 5;
    d.stroke();
    d.strokeStyle = "blue";
    d.lineWidth = 1;
    d.stroke();
    d.restore();
  };
})(ChemDoodle.math, ChemDoodle.structures.d2, Math);
(function (e, p, n, r, d, k) {
  r.AtomMapping = function (b, c) {
    this.o1 = b;
    this.o2 = c;
    this.label = "0";
    this.error = !1;
  };
  p = r.AtomMapping.prototype = new r._Shape();
  p.drawDecorations = function (b, c) {
    if (this.isHover || this.isSelected)
      (b.strokeStyle = this.isHover ? c.colorHover : c.colorSelect),
        (b.lineWidth = 1),
        b.beginPath(),
        b.moveTo(this.o1.x, this.o1.y),
        b.lineTo(this.o2.x, this.o2.y),
        b.setLineDash([2]),
        b.stroke(),
        b.setLineDash([]);
  };
  p.draw = function (b, c) {
    if (this.o1 && this.o2) {
      this.x1 = this.o1.x + 14 * d.cos(this.o1.angleOfLeastInterference);
      this.y1 = this.o1.y - 14 * d.sin(this.o1.angleOfLeastInterference);
      this.x2 = this.o2.x + 14 * d.cos(this.o2.angleOfLeastInterference);
      this.y2 = this.o2.y - 14 * d.sin(this.o2.angleOfLeastInterference);
      b.font = e.getFontString(
        c.text_font_size,
        c.text_font_families,
        c.text_font_bold,
        c.text_font_italic
      );
      let h = this.label,
        a = b.measureText(h).width;
      this.isLassoed &&
        ((b.fillStyle = c.colorHover),
        b.fillRect(
          this.x1 - a / 2 - 3,
          this.y1 - c.text_font_size / 2 - 3,
          a + 6,
          c.text_font_size + 6
        ),
        b.fillRect(
          this.x2 - a / 2 - 3,
          this.y2 - c.text_font_size / 2 - 3,
          a + 6,
          c.text_font_size + 6
        ));
      let g = this.error ? c.colorError : c.shapes_color;
      if (this.isHover || this.isSelected)
        g = this.isHover ? c.colorHover : c.colorSelect;
      b.fillStyle = g;
      b.fillRect(
        this.x1 - a / 2 - 1,
        this.y1 - c.text_font_size / 2 - 1,
        a + 2,
        c.text_font_size + 2
      );
      b.fillRect(
        this.x2 - a / 2 - 1,
        this.y2 - c.text_font_size / 2 - 1,
        a + 2,
        c.text_font_size + 2
      );
      b.textAlign = "center";
      b.textBaseline = "middle";
      b.fillStyle = c.backgroundColor;
      b.fillText(h, this.x1, this.y1);
      b.fillText(h, this.x2, this.y2);
    }
  };
  p.getPoints = function () {
    return [new n.Point(this.x1, this.y1), new n.Point(this.x2, this.y2)];
  };
  p.isOver = function (b, c) {
    return this.x1
      ? b.distance({ x: this.x1, y: this.y1 }) < c ||
          b.distance({ x: this.x2, y: this.y2 }) < c
      : !1;
  };
})(
  ChemDoodle.extensions,
  ChemDoodle.math,
  ChemDoodle.structures,
  ChemDoodle.structures.d2,
  Math
);
(function (e, p, n, r, d, k) {
  r.Bracket = function (b, c) {
    this.p1 = b ? b : new n.Point();
    this.p2 = c ? c : new n.Point();
  };
  r = r.Bracket.prototype = new r._Shape();
  r.charge = 0;
  r.mult = 0;
  r.repeat = 0;
  r.draw = function (b, c) {
    let h = d.min(this.p1.x, this.p2.x),
      a = d.max(this.p1.x, this.p2.x),
      g = d.min(this.p1.y, this.p2.y),
      l = d.max(this.p1.y, this.p2.y),
      k = l - g;
    var m = k / 10;
    b.beginPath();
    b.moveTo(h + m, g);
    b.lineTo(h, g);
    b.lineTo(h, l);
    b.lineTo(h + m, l);
    b.moveTo(a - m, l);
    b.lineTo(a, l);
    b.lineTo(a, g);
    b.lineTo(a - m, g);
    this.isLassoed &&
      ((m = b.createLinearGradient(this.p1.x, this.p1.y, this.p2.x, this.p2.y)),
      m.addColorStop(0, "rgba(212, 99, 0, 0)"),
      m.addColorStop(0.5, "rgba(212, 99, 0, 0.8)"),
      m.addColorStop(1, "rgba(212, 99, 0, 0)"),
      (b.lineWidth = c.shapes_lineWidth + 5),
      (b.strokeStyle = m),
      (b.lineJoin = "miter"),
      (b.lineCap = "square"),
      b.stroke());
    b.strokeStyle = c.shapes_color;
    b.lineWidth = c.shapes_lineWidth;
    b.lineJoin = "miter";
    b.lineCap = "butt";
    b.stroke();
    0 !== this.charge &&
      ((b.fillStyle = c.text_color),
      (b.textAlign = "left"),
      (b.textBaseline = "alphabetic"),
      (b.font = e.getFontString(c.text_font_size, c.text_font_families)),
      (m = this.charge.toFixed(0)),
      (m =
        "1" === m
          ? "+"
          : "-1" === m
          ? "\u2013"
          : m.startsWith("-")
          ? m.substring(1) + "\u2013"
          : m + "+"),
      b.fillText(m, a + 5, g + 5));
    0 !== this.mult &&
      ((b.fillStyle = c.text_color),
      (b.textAlign = "right"),
      (b.textBaseline = "middle"),
      (b.font = e.getFontString(c.text_font_size, c.text_font_families)),
      b.fillText(this.mult.toFixed(0), h - 5, g + k / 2));
    0 !== this.repeat &&
      ((b.fillStyle = c.text_color),
      (b.textAlign = "left"),
      (b.textBaseline = "top"),
      (b.font = e.getFontString(c.text_font_size, c.text_font_families)),
      (c = this.repeat.toFixed(0)),
      b.fillText(c, a + 5, l - 5));
  };
  r.getPoints = function () {
    return [this.p1, this.p2];
  };
  r.isOver = function (b, c) {
    return (
      p.isBetween(b.x, this.p1.x, this.p2.x) &&
      p.isBetween(b.y, this.p1.y, this.p2.y)
    );
  };
})(
  ChemDoodle.extensions,
  ChemDoodle.math,
  ChemDoodle.structures,
  ChemDoodle.structures.d2,
  Math
);
(function (e, p, n, r, d, k, b) {
  d.RepeatUnit = function (b, a) {
    this.b1 = b;
    this.b2 = a;
    this.n1 = 1;
    this.n2 = 4;
    this.contents = [];
    this.ps = [];
  };
  p = d.RepeatUnit.prototype = new d._Shape();
  p.drawDecorations = function (b, a) {
    if (this.isHover)
      for (let c = 0, d = this.contents.length; c < d; c++) {
        a = this.contents[c];
        let g = b.createRadialGradient(a.x - 1, a.y - 1, 0, a.x, a.y, 7);
        g.addColorStop(0, "rgba(212, 99, 0, 0)");
        g.addColorStop(0.7, "rgba(212, 99, 0, 0.8)");
        b.fillStyle = g;
        b.beginPath();
        b.arc(a.x, a.y, 5, 0, 2 * k.PI, !1);
        b.fill();
      }
  };
  let c = function (b, a, c, d, e) {
    a = [];
    var g =
      0 < e.length
        ? -1 === e.indexOf(c.a1)
          ? c.a2
          : c.a1
        : c.a1.distance(d.getCenter()) < c.a2.distance(d.getCenter())
        ? c.a1
        : c.a2;
    d = g.angle(c.getNeighbor(g));
    var h = d + k.PI / 2;
    c = c.getLength() / (1 < e.length ? 4 : 2);
    e = g.x + c * k.cos(d);
    g = g.y - c * k.sin(d);
    var l = 10 * k.cos(h),
      v = 10 * k.sin(h);
    h = e + l;
    c = g - v;
    e -= l;
    g += v;
    v = -4 * k.cos(d);
    var n = -4 * k.sin(d);
    d = h + v;
    l = c - n;
    v = e + v;
    n = g - n;
    b.beginPath();
    b.moveTo(d, l);
    b.lineTo(h, c);
    b.lineTo(e, g);
    b.lineTo(v, n);
    b.stroke();
    a.push(new r.Point(h, c));
    a.push(new r.Point(e, g));
    return a;
  };
  p.draw = function (b, a) {
    if (this.b1 && this.b2) {
      var g = this.error ? a.colorError : a.shapes_color;
      if (this.isHover || this.isSelected)
        g = this.isHover ? a.colorHover : a.colorSelect;
      b.strokeStyle = g;
      b.fillStyle = b.strokeStyle;
      b.lineWidth = a.shapes_lineWidth;
      b.lineJoin = "miter";
      b.lineCap = "butt";
      g = c(b, a, this.b1, this.b2, this.contents);
      let d = c(b, a, this.b2, this.b1, this.contents);
      this.ps = g.concat(d);
      this.b1.getCenter().x > this.b2.getCenter().x
        ? (this.textPos =
            this.ps[0].x > this.ps[1].x + 5 ? this.ps[0] : this.ps[1])
        : (this.textPos =
            this.ps[2].x > this.ps[3].x + 5 ? this.ps[2] : this.ps[3]);
      !this.error &&
        0 < this.contents.length &&
        ((b.font = e.getFontString(
          a.text_font_size,
          a.text_font_families,
          a.text_font_bold,
          a.text_font_italic
        )),
        (b.fillStyle = this.isHover ? a.colorHover : a.text_color),
        (b.textAlign = "left"),
        (b.textBaseline = "bottom"),
        b.fillText(
          this.n1 + "-" + this.n2,
          this.textPos.x + 2,
          this.textPos.y + 2
        ));
    }
  };
  p.getPoints = function () {
    return this.ps;
  };
  p.isOver = function (b, a) {
    return !1;
  };
  p.setContents = function (c) {
    this.contents = [];
    let a = c.getMoleculeByAtom(this.b1.a1);
    c = c.getMoleculeByAtom(this.b2.a1);
    if (a && a === c) {
      var g = (c = 0);
      for (let b = 0, e = a.rings.length; b < e; b++) {
        var d = a.rings[b];
        for (let a = 0, b = d.bonds.length; a < b; a++) {
          var h = d.bonds[a];
          h === this.b1 ? c++ : h === this.b2 && g++;
        }
      }
      c = 1 === c && 1 === g && this.b1.ring === this.b2.ring;
      this.contents.flippable = c;
      if ((this.b1.ring === b && this.b2.ring === b) || c)
        for (let b = 0, e = a.atoms.length; b < e; b++) {
          h = d = g = !1;
          for (let b = 0, c = a.bonds.length; b < c; b++)
            a.bonds[b].visited = !1;
          let e = new r.Queue(),
            l = a.atoms[b];
          for (e.enqueue(l); !(e.isEmpty() || (g && d)); ) {
            let b = e.dequeue();
            c &&
              ((!this.flip && b === this.b1.a1) ||
                (this.flip && b === this.b1.a2)) &&
              (h = !0);
            for (let c = 0, f = a.bonds.length; c < f; c++) {
              let f = a.bonds[c];
              if (f.a1 === b || f.a2 === b)
                f === this.b1
                  ? (g = !0)
                  : f === this.b2
                  ? (d = !0)
                  : f.visited ||
                    ((f.visited = !0), e.enqueue(f.getNeighbor(b)));
            }
          }
          g && d && (!c || h) && this.contents.push(l);
        }
    }
  };
})(
  ChemDoodle.extensions,
  ChemDoodle.math,
  ChemDoodle.lib.jsBezier,
  ChemDoodle.structures,
  ChemDoodle.structures.d2,
  Math
);
(function (e, p, n, r, d, k) {
  r.Line = function (b, d) {
    this.p1 = b ? b : new n.Point();
    this.p2 = d ? d : new n.Point();
  };
  r.Line.ARROW_SYNTHETIC = "synthetic";
  r.Line.ARROW_RETROSYNTHETIC = "retrosynthetic";
  r.Line.ARROW_RESONANCE = "resonance";
  r.Line.ARROW_EQUILIBRIUM = "equilibrium";
  let b = (r.Line.prototype = new r._Shape());
  b.arrowType = k;
  b.topText = k;
  b.bottomText = k;
  b.draw = function (b, h) {
    if (this.isLassoed) {
      var a = b.createLinearGradient(
        this.p1.x,
        this.p1.y,
        this.p2.x,
        this.p2.y
      );
      a.addColorStop(0, "rgba(212, 99, 0, 0)");
      a.addColorStop(0.5, "rgba(212, 99, 0, 0.8)");
      a.addColorStop(1, "rgba(212, 99, 0, 0)");
      var c = this.p1.angle(this.p2) + d.PI / 2,
        l = d.cos(c),
        k = d.sin(c);
      c = this.p1.x - 2.5 * l;
      var m = this.p1.y + 2.5 * k,
        n = this.p1.x + 2.5 * l,
        u = this.p1.y - 2.5 * k,
        w = this.p2.x + 2.5 * l,
        p = this.p2.y - 2.5 * k;
      l = this.p2.x - 2.5 * l;
      k = this.p2.y + 2.5 * k;
      b.fillStyle = a;
      b.beginPath();
      b.moveTo(c, m);
      b.lineTo(n, u);
      b.lineTo(w, p);
      b.lineTo(l, k);
      b.closePath();
      b.fill();
    }
    b.strokeStyle = h.shapes_color;
    b.fillStyle = h.shapes_color;
    b.lineWidth = h.shapes_lineWidth;
    b.lineJoin = "miter";
    b.lineCap = "butt";
    if (this.p1.x !== this.p2.x || this.p1.y !== this.p2.y) {
      if (this.arrowType === r.Line.ARROW_RETROSYNTHETIC) {
        c = 2 * d.sqrt(2);
        a = h.shapes_arrowLength_2D / c;
        n = this.p1.angle(this.p2);
        u = n + d.PI / 2;
        c = h.shapes_arrowLength_2D / c;
        m = d.cos(n);
        n = d.sin(n);
        let g = d.cos(u),
          e = d.sin(u);
        u = this.p1.x - g * a;
        w = this.p1.y + e * a;
        p = this.p1.x + g * a;
        l = this.p1.y - e * a;
        k = this.p2.x + g * a - m * c;
        var y = this.p2.y - e * a + n * c,
          f = this.p2.x - g * a - m * c,
          q = this.p2.y + e * a + n * c,
          A = this.p2.x + g * a * 2 - m * c * 2;
        let v = this.p2.y - e * a * 2 + n * c * 2;
        m = this.p2.x - g * a * 2 - m * c * 2;
        a = this.p2.y + e * a * 2 + n * c * 2;
        b.beginPath();
        b.moveTo(p, l);
        b.lineTo(k, y);
        b.moveTo(A, v);
        b.lineTo(this.p2.x, this.p2.y);
        b.lineTo(m, a);
        b.moveTo(f, q);
        b.lineTo(u, w);
      } else
        this.arrowType === r.Line.ARROW_EQUILIBRIUM
          ? ((a = 2 * d.sqrt(2)),
            (y = h.shapes_arrowLength_2D / a / 2),
            (m = this.p1.angle(this.p2)),
            (u = m + d.PI / 2),
            (a = (2 * h.shapes_arrowLength_2D) / d.sqrt(3)),
            (c = d.cos(m)),
            (m = d.sin(m)),
            (n = d.cos(u)),
            (u = d.sin(u)),
            (w = this.p1.x - n * y),
            (p = this.p1.y + u * y),
            (f = this.p1.x + n * y),
            (q = this.p1.y - u * y),
            (l = this.p2.x + n * y),
            (k = this.p2.y - u * y),
            (A = this.p2.x - n * y),
            (y = this.p2.y + u * y),
            b.beginPath(),
            b.moveTo(f, q),
            b.lineTo(l, k),
            b.moveTo(A, y),
            b.lineTo(w, p),
            b.stroke(),
            (y = l - c * a * 0.8),
            (f = k + m * a * 0.8),
            (q = l + (n * h.shapes_arrowLength_2D) / 3 - c * a),
            (A = k - (u * h.shapes_arrowLength_2D) / 3 + m * a),
            b.beginPath(),
            b.moveTo(l, k),
            b.lineTo(q, A),
            b.lineTo(y, f),
            b.closePath(),
            b.fill(),
            b.stroke(),
            (y = w + c * a * 0.8),
            (f = p - m * a * 0.8),
            (q = w - (n * h.shapes_arrowLength_2D) / 3 + c * a),
            (A = p + (u * h.shapes_arrowLength_2D) / 3 - m * a),
            b.beginPath(),
            b.moveTo(w, p),
            b.lineTo(q, A),
            b.lineTo(y, f),
            b.closePath(),
            b.fill())
          : this.arrowType === r.Line.ARROW_SYNTHETIC
          ? ((m = this.p1.angle(this.p2)),
            (n = m + d.PI / 2),
            (a = (2 * h.shapes_arrowLength_2D) / d.sqrt(3)),
            (c = d.cos(m)),
            (m = d.sin(m)),
            (l = d.cos(n)),
            (k = d.sin(n)),
            b.beginPath(),
            b.moveTo(this.p1.x, this.p1.y),
            b.lineTo(this.p2.x - (c * a) / 2, this.p2.y + (m * a) / 2),
            b.stroke(),
            (n = this.p2.x - c * a * 0.8),
            (u = this.p2.y + m * a * 0.8),
            (w = this.p2.x + (l * h.shapes_arrowLength_2D) / 3 - c * a),
            (p = this.p2.y - (k * h.shapes_arrowLength_2D) / 3 + m * a),
            (c = this.p2.x - (l * h.shapes_arrowLength_2D) / 3 - c * a),
            (a = this.p2.y + (k * h.shapes_arrowLength_2D) / 3 + m * a),
            b.beginPath(),
            b.moveTo(this.p2.x, this.p2.y),
            b.lineTo(c, a),
            b.lineTo(n, u),
            b.lineTo(w, p),
            b.closePath(),
            b.fill())
          : this.arrowType === r.Line.ARROW_RESONANCE
          ? ((m = this.p1.angle(this.p2)),
            (u = m + d.PI / 2),
            (a = (2 * h.shapes_arrowLength_2D) / d.sqrt(3)),
            (c = d.cos(m)),
            (m = d.sin(m)),
            (n = d.cos(u)),
            (u = d.sin(u)),
            b.beginPath(),
            b.moveTo(this.p1.x + (c * a) / 2, this.p1.y - (m * a) / 2),
            b.lineTo(this.p2.x - (c * a) / 2, this.p2.y + (m * a) / 2),
            b.stroke(),
            (w = this.p2.x - c * a * 0.8),
            (p = this.p2.y + m * a * 0.8),
            (l = this.p2.x + (n * h.shapes_arrowLength_2D) / 3 - c * a),
            (k = this.p2.y - (u * h.shapes_arrowLength_2D) / 3 + m * a),
            (y = this.p2.x - (n * h.shapes_arrowLength_2D) / 3 - c * a),
            (f = this.p2.y + (u * h.shapes_arrowLength_2D) / 3 + m * a),
            b.beginPath(),
            b.moveTo(this.p2.x, this.p2.y),
            b.lineTo(y, f),
            b.lineTo(w, p),
            b.lineTo(l, k),
            b.closePath(),
            b.fill(),
            b.stroke(),
            (w = this.p1.x + c * a * 0.8),
            (p = this.p1.y - m * a * 0.8),
            (l = this.p1.x - (n * h.shapes_arrowLength_2D) / 3 + c * a),
            (k = this.p1.y + (u * h.shapes_arrowLength_2D) / 3 - m * a),
            (y = this.p1.x + (n * h.shapes_arrowLength_2D) / 3 + c * a),
            (f = this.p1.y - (u * h.shapes_arrowLength_2D) / 3 - m * a),
            b.beginPath(),
            b.moveTo(this.p1.x, this.p1.y),
            b.lineTo(y, f),
            b.lineTo(w, p),
            b.lineTo(l, k),
            b.closePath(),
            b.fill())
          : (b.beginPath(),
            b.moveTo(this.p1.x, this.p1.y),
            b.lineTo(this.p2.x, this.p2.y));
      b.stroke();
      if (this.topText || this.bottomText)
        (b.font = e.getFontString(
          h.text_font_size,
          h.text_font_families,
          h.text_font_bold,
          h.text_font_italic
        )),
          (b.fillStyle = h.text_color);
      this.topText &&
        ((b.textAlign = "center"),
        (b.textBaseline = "bottom"),
        b.fillText(this.topText, (this.p1.x + this.p2.x) / 2, this.p1.y - 5));
      this.bottomText &&
        ((b.textAlign = "center"),
        (b.textBaseline = "top"),
        b.fillText(
          this.bottomText,
          (this.p1.x + this.p2.x) / 2,
          this.p1.y + 5
        ));
    }
  };
  b.getPoints = function () {
    return [this.p1, this.p2];
  };
  b.isOver = function (b, d) {
    b = p.distanceFromPointToLineInclusive(b, this.p1, this.p2);
    return -1 !== b && b < d;
  };
})(
  ChemDoodle.extensions,
  ChemDoodle.math,
  ChemDoodle.structures,
  ChemDoodle.structures.d2,
  Math
);
(function (e, p, n, r, d, k) {
  let b = function (a) {
      let b = [];
      if (a instanceof n.Atom)
        if (0 === a.bondNumber) b.push(d.PI);
        else {
          if (a.angles) {
            if (1 === a.angles.length) b.push(a.angles[0] + d.PI);
            else {
              for (let c = 1, g = a.angles.length; c < g; c++)
                b.push(a.angles[c - 1] + (a.angles[c] - a.angles[c - 1]) / 2);
              var c = a.angles[a.angles.length - 1];
              b.push(c + (a.angles[0] + 2 * d.PI - c) / 2);
            }
            a.largestAngle > d.PI && (b = [a.angleOfLeastInterference]);
            if (a.bonds)
              for (let g = 0, d = a.bonds.length; g < d; g++)
                if (
                  ((c = a.bonds[g]),
                  2 === c.bondOrder &&
                    ((c = c.getNeighbor(a)), "O" === c.label))
                ) {
                  b = [c.angle(a)];
                  break;
                }
          }
        }
      else
        (a = a.a1.angle(a.a2)),
          b.push(a + d.PI / 2),
          b.push(a + (3 * d.PI) / 2);
      for (let a = 0, c = b.length; a < c; a++) {
        for (; b[a] > 2 * d.PI; ) b[a] -= 2 * d.PI;
        for (; 0 > b[a]; ) b[a] += 2 * d.PI;
      }
      return b;
    },
    c = function (a, b) {
      let c = 3;
      if (a instanceof n.Atom) {
        if (
          (a.isLabelVisible(b) && (c = 8),
          0 !== a.charge || 0 !== a.numRadical || 0 !== a.numLonePair)
        )
          c = 13;
      } else a instanceof n.Point ? (c = 0) : 1 < a.bondOrder && (c = 5);
      return c;
    },
    h = function (a, b, h, e, k, r, u, w, p, y) {
      var f = r.angle(k),
        g = u.angle(w),
        l = d.cos(f);
      f = d.sin(f);
      var m = c(h, b);
      k.x -= l * m;
      k.y += f * m;
      m = g + d.PI / 2;
      h = (2 * b.shapes_arrowLength_2D) / d.sqrt(3);
      l = d.cos(g);
      f = d.sin(g);
      let v = d.cos(m),
        x = d.sin(m);
      w.x -= 5 * l;
      w.y += 5 * f;
      g = new n.Point(w.x, w.y);
      m = c(e, b) / 3;
      g.x -= l * m;
      g.y += f * m;
      w.x -= l * (0.8 * h + m);
      w.y += f * (0.8 * h + m);
      e = g.x - l * h * 0.8;
      m = g.y + f * h * 0.8;
      let z = new n.Point(
        g.x + (v * b.shapes_arrowLength_2D) / 3 - l * h,
        g.y - (x * b.shapes_arrowLength_2D) / 3 + f * h
      );
      b = new n.Point(
        g.x - (v * b.shapes_arrowLength_2D) / 3 - l * h,
        g.y + (x * b.shapes_arrowLength_2D) / 3 + f * h
      );
      f = l = !0;
      1 === p && (z.distance(r) > b.distance(r) ? (f = !1) : (l = !1));
      a.beginPath();
      a.moveTo(g.x, g.y);
      f && a.lineTo(b.x, b.y);
      a.lineTo(e, m);
      l && a.lineTo(z.x, z.y);
      a.closePath();
      a.fill();
      a.stroke();
      a.beginPath();
      a.moveTo(k.x, k.y);
      a.bezierCurveTo(r.x, r.y, u.x, u.y, w.x, w.y);
      a.stroke();
      y.push([k, r, u, w]);
    };
  r.Pusher = function (a, b, c) {
    this.o1 = a;
    this.o2 = b;
    this.numElectron = c ? c : 1;
  };
  r = r.Pusher.prototype = new r._Shape();
  r.drawDecorations = function (a, b) {
    if (this.isHover) {
      var c =
          this.o1 instanceof n.Atom
            ? new n.Point(this.o1.x, this.o1.y)
            : this.o1.getCenter(),
        g =
          this.o2 instanceof n.Atom
            ? new n.Point(this.o2.x, this.o2.y)
            : this.o2.getCenter();
      c = [c, g];
      for (let d = 0, h = c.length; d < h; d++)
        (g = c[d]), this.drawAnchor(a, b, g, g === this.hoverPoint);
    }
  };
  r.draw = function (a, c) {
    if (this.o1 && this.o2) {
      a.strokeStyle = c.shapes_color;
      a.fillStyle = c.shapes_color;
      a.lineWidth = c.shapes_lineWidth;
      a.lineJoin = "miter";
      a.lineCap = "butt";
      let l =
          this.o1 instanceof n.Atom
            ? new n.Point(this.o1.x, this.o1.y)
            : this.o1.getCenter(),
        v =
          this.o2 instanceof n.Atom
            ? new n.Point(this.o2.x, this.o2.y)
            : this.o2.getCenter();
      var g = b(this.o1),
        k = b(this.o2);
      let f, q;
      var m = Infinity;
      for (let a = 0, b = g.length; a < b; a++)
        for (let b = 0, c = k.length; b < c; b++) {
          var r = new n.Point(l.x + 35 * d.cos(g[a]), l.y - 35 * d.sin(g[a])),
            u = new n.Point(v.x + 35 * d.cos(k[b]), v.y - 35 * d.sin(k[b])),
            w = r.distance(u);
          w < m && ((m = w), (f = r), (q = u));
        }
      this.caches = [];
      -1 === this.numElectron
        ? ((r = l.distance(v) / 2),
          (k = l.angle(v)),
          (g = k + d.PI / 2),
          (u = d.cos(k)),
          (w = d.sin(k)),
          (k = new n.Point(l.x + (r - 1) * u, l.y - (r - 1) * w)),
          (m = new n.Point(
            k.x + 35 * d.cos(g + d.PI / 6),
            k.y - 35 * d.sin(g + d.PI / 6)
          )),
          (r = new n.Point(l.x + (r + 1) * u, l.y - (r + 1) * w)),
          (g = new n.Point(
            r.x + 35 * d.cos(g - d.PI / 6),
            r.y - 35 * d.sin(g - d.PI / 6)
          )),
          h(a, c, this.o1, k, l, f, m, k, 1, this.caches),
          h(a, c, this.o2, r, v, q, g, r, 1, this.caches))
        : (e.intersectLines(l.x, l.y, f.x, f.y, v.x, v.y, q.x, q.y) &&
            ((g = f), (f = q), (q = g)),
          (g = f.angle(l)),
          (k = q.angle(v)),
          (m = d.max(g, k) - d.min(g, k)),
          0.001 > d.abs(m - d.PI) &&
            this.o1.molCenter === this.o2.molCenter &&
            ((g += d.PI / 2),
            (k -= d.PI / 2),
            (f.x = l.x + 35 * d.cos(g + d.PI)),
            (f.y = l.y - 35 * d.sin(g + d.PI)),
            (q.x = v.x + 35 * d.cos(k + d.PI)),
            (q.y = v.y - 35 * d.sin(k + d.PI))),
          h(a, c, this.o1, this.o2, l, f, q, v, this.numElectron, this.caches));
    }
  };
  r.getPoints = function () {
    return [];
  };
  r.isOver = function (a, b) {
    for (let c = 0, g = this.caches.length; c < g; c++)
      if (p.distanceFromCurve(a, this.caches[c]).distance < b) return !0;
    return !1;
  };
})(
  ChemDoodle.math,
  ChemDoodle.lib.jsBezier,
  ChemDoodle.structures,
  ChemDoodle.structures.d2,
  Math
);
(function (e, p, n, r, d) {
  let k = new p.Bond();
  n.VAP = function (b, c) {
    this.asterisk = new p.Atom("O", b, c);
    this.substituent;
    this.bondType = 1;
    this.attachments = [];
  };
  e = n.VAP.prototype = new n._Shape();
  e.drawDecorations = function (b, c) {
    if (this.isHover || this.isSelected) {
      b.strokeStyle = this.isHover ? c.colorHover : c.colorSelect;
      b.lineWidth = 1.2;
      if (this.hoverBond) {
        let d = 2 * r.PI,
          a =
            (this.asterisk.angleForStupidCanvasArcs(this.hoverBond) +
              r.PI / 2) %
            d;
        b.strokeStyle = this.isHover ? c.colorHover : c.colorSelect;
        b.beginPath();
        c = (a + r.PI) % d;
        c %= 2 * r.PI;
        b.arc(this.asterisk.x, this.asterisk.y, 7, a, c, !1);
        b.stroke();
        b.beginPath();
        a += r.PI;
        c = (a + r.PI) % d;
        b.arc(this.hoverBond.x, this.hoverBond.y, 7, a, c, !1);
      } else
        b.beginPath(),
          b.arc(this.asterisk.x, this.asterisk.y, 7, 0, 2 * r.PI, !1);
      b.stroke();
    }
  };
  e.draw = function (b, c) {
    b.strokeStyle = this.error ? c.colorError : c.shapes_color;
    b.lineWidth = 1;
    var d = r.sqrt(3) / 2;
    b.beginPath();
    b.moveTo(this.asterisk.x, this.asterisk.y - 4);
    b.lineTo(this.asterisk.x, this.asterisk.y + 4);
    b.moveTo(this.asterisk.x - 4 * d, this.asterisk.y - 2);
    b.lineTo(this.asterisk.x + 4 * d, this.asterisk.y + 2);
    b.moveTo(this.asterisk.x - 4 * d, this.asterisk.y + 2);
    b.lineTo(this.asterisk.x + 4 * d, this.asterisk.y - 2);
    b.stroke();
    this.asterisk.textBounds = [];
    this.asterisk.textBounds.push({
      x: this.asterisk.x - 4,
      y: this.asterisk.y - 4,
      w: 8,
      h: 8,
    });
    d = c.bonds_color;
    this.error && (c.bonds_color = c.colorError);
    k.a1 = this.asterisk;
    this.substituent &&
      ((k.a2 = this.substituent), (k.bondOrder = this.bondType), k.draw(b, c));
    k.bondOrder = 0;
    this.error || (c.bonds_color = c.shapes_color);
    for (let a = 0, g = this.attachments.length; a < g; a++)
      (k.a2 = this.attachments[a]), k.draw(b, c);
    c.bonds_color = d;
  };
  e.getPoints = function () {
    return [this.asterisk];
  };
  e.isOver = function (b, c) {
    return !1;
  };
})(ChemDoodle.math, ChemDoodle.structures, ChemDoodle.structures.d2, Math);
(function (e, p, n) {
  e._Mesh = function () {};
  e = e._Mesh.prototype;
  e.storeData = function (e, d, k) {
    this.positionData = e;
    this.normalData = d;
    this.indexData = k;
  };
  e.setupBuffers = function (e) {
    this.vertexPositionBuffer = e.createBuffer();
    e.bindBuffer(e.ARRAY_BUFFER, this.vertexPositionBuffer);
    e.bufferData(
      e.ARRAY_BUFFER,
      new Float32Array(this.positionData),
      e.STATIC_DRAW
    );
    this.vertexPositionBuffer.itemSize = 3;
    this.vertexPositionBuffer.numItems = this.positionData.length / 3;
    this.vertexNormalBuffer = e.createBuffer();
    e.bindBuffer(e.ARRAY_BUFFER, this.vertexNormalBuffer);
    e.bufferData(
      e.ARRAY_BUFFER,
      new Float32Array(this.normalData),
      e.STATIC_DRAW
    );
    this.vertexNormalBuffer.itemSize = 3;
    this.vertexNormalBuffer.numItems = this.normalData.length / 3;
    this.indexData &&
      ((this.vertexIndexBuffer = e.createBuffer()),
      e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this.vertexIndexBuffer),
      e.bufferData(
        e.ELEMENT_ARRAY_BUFFER,
        new Uint16Array(this.indexData),
        e.STATIC_DRAW
      ),
      (this.vertexIndexBuffer.itemSize = 1),
      (this.vertexIndexBuffer.numItems = this.indexData.length));
    if (this.partitions)
      for (let d = 0, k = this.partitions.length; d < k; d++) {
        let b = this.partitions[d],
          c = this.generateBuffers(
            e,
            b.positionData,
            b.normalData,
            b.indexData
          );
        b.vertexPositionBuffer = c[0];
        b.vertexNormalBuffer = c[1];
        b.vertexIndexBuffer = c[2];
      }
  };
  e.generateBuffers = function (e, d, k, b) {
    let c = e.createBuffer();
    e.bindBuffer(e.ARRAY_BUFFER, c);
    e.bufferData(e.ARRAY_BUFFER, new Float32Array(d), e.STATIC_DRAW);
    c.itemSize = 3;
    c.numItems = d.length / 3;
    d = e.createBuffer();
    e.bindBuffer(e.ARRAY_BUFFER, d);
    e.bufferData(e.ARRAY_BUFFER, new Float32Array(k), e.STATIC_DRAW);
    d.itemSize = 3;
    d.numItems = k.length / 3;
    let h;
    b &&
      ((h = e.createBuffer()),
      e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, h),
      e.bufferData(e.ELEMENT_ARRAY_BUFFER, new Uint16Array(b), e.STATIC_DRAW),
      (h.itemSize = 1),
      (h.numItems = b.length));
    return [c, d, h];
  };
  e.bindBuffers = function (e) {
    this.vertexPositionBuffer || this.setupBuffers(e);
    e.bindBuffer(e.ARRAY_BUFFER, this.vertexPositionBuffer);
    e.vertexAttribPointer(
      e.shader.vertexPositionAttribute,
      this.vertexPositionBuffer.itemSize,
      e.FLOAT,
      !1,
      0,
      0
    );
    e.bindBuffer(e.ARRAY_BUFFER, this.vertexNormalBuffer);
    e.vertexAttribPointer(
      e.shader.vertexNormalAttribute,
      this.vertexNormalBuffer.itemSize,
      e.FLOAT,
      !1,
      0,
      0
    );
    this.vertexIndexBuffer &&
      e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this.vertexIndexBuffer);
  };
})(ChemDoodle.structures.d3, Math);
(function (e, p) {
  e._Measurement = function () {};
  e = e._Measurement.prototype = new e._Mesh();
  e.render = function (e, r) {
    e.shader.setMatrixUniforms(e);
    r.measurement_update_3D && (this.text = this.vertexPositionBuffer = p);
    this.vertexPositionBuffer || this.calculateData(r);
    this.bindBuffers(e);
    e.material.setDiffuseColor(e, r.shapes_color);
    e.lineWidth(r.shapes_lineWidth);
    e.drawElements(
      e.LINES,
      this.vertexIndexBuffer.numItems,
      e.UNSIGNED_SHORT,
      0
    );
  };
  e.renderText = function (e, r) {
    e.shader.setMatrixUniforms(e);
    this.text || (this.text = this.getText(r));
    r = { position: [], texCoord: [], translation: [] };
    e.textImage.pushVertexData(this.text.value, this.text.pos, 1, r);
    e.textMesh.storeData(e, r.position, r.texCoord, r.translation);
    e.textImage.useTexture(e);
    e.textMesh.render(e);
  };
})(ChemDoodle.structures.d3);
(function (e, p, n, r, d, k, b, c) {
  n.Angle = function (b, a, c) {
    this.a1 = b;
    this.a2 = a;
    this.a3 = c;
  };
  e = n.Angle.prototype = new n._Measurement();
  e.calculateData = function (c) {
    let a = [],
      g = [],
      h = [];
    var e = this.a2.distance3D(this.a1),
      k = this.a2.distance3D(this.a3);
    this.distUse = d.min(e, k) / 2;
    this.vec1 = b.normalize([
      this.a1.x - this.a2.x,
      this.a1.y - this.a2.y,
      this.a1.z - this.a2.z,
    ]);
    this.vec2 = b.normalize([
      this.a3.x - this.a2.x,
      this.a3.y - this.a2.y,
      this.a3.z - this.a2.z,
    ]);
    this.angle = p.vec3AngleFrom(this.vec1, this.vec2);
    e = b.normalize(b.cross(this.vec1, this.vec2, []));
    e = b.normalize(b.cross(e, this.vec1, []));
    c = c.measurement_angleBands_3D;
    for (k = 0; k <= c; ++k) {
      var r = (this.angle * k) / c,
        u = b.scale(this.vec1, d.cos(r), []);
      r = b.scale(e, d.sin(r), []);
      u = b.scale(b.normalize(b.add(u, r, [])), this.distUse);
      a.push(this.a2.x + u[0], this.a2.y + u[1], this.a2.z + u[2]);
      g.push(0, 0, 0);
      k < c && h.push(k, k + 1);
    }
    this.storeData(a, g, h);
  };
  e.getText = function (c) {
    c = b.scale(
      b.normalize(b.add(this.vec1, this.vec2, [])),
      this.distUse + 0.3
    );
    return {
      pos: [this.a2.x + c[0], this.a2.y + c[1], this.a2.z + c[2]],
      value: [r.angleBounds(this.angle, !0).toFixed(2), " \u00b0"].join(""),
    };
  };
})(
  ChemDoodle.ELEMENT,
  ChemDoodle.extensions,
  ChemDoodle.structures.d3,
  ChemDoodle.math,
  Math,
  ChemDoodle.lib.mat4,
  ChemDoodle.lib.vec3
);
(function (e, p, n) {
  e.Arrow = function (e, d) {
    let k = [],
      b = [];
    for (var c = 0; c <= d; c++) {
      var h = (2 * c * p.PI) / d,
        a = p.sin(h);
      h = p.cos(h);
      b.push(
        0,
        0,
        -1,
        0,
        0,
        -1,
        h,
        a,
        0,
        h,
        a,
        0,
        0,
        0,
        -1,
        0,
        0,
        -1,
        h,
        a,
        1,
        h,
        a,
        1
      );
      k.push(
        0,
        0,
        0,
        e * h,
        e * a,
        0,
        e * h,
        e * a,
        0,
        e * h,
        e * a,
        2,
        e * h,
        e * a,
        2,
        e * h * 2,
        e * a * 2,
        2,
        e * h * 2,
        e * a * 2,
        2,
        0,
        0,
        3
      );
    }
    e = [];
    for (c = 0; c < d; c++) {
      a = 8 * c;
      for (let b = 0, c = 7; b < c; b++) {
        h = b + a;
        let g = h + c + 2;
        e.push(h, g, h + 1, g, h, g - 1);
      }
    }
    this.storeData(k, b, e);
  };
  e.Arrow.prototype = new e._Mesh();
})(ChemDoodle.structures.d3, Math);
(function (e, p, n) {
  e.Box = function (e, d, k) {
    e /= 2;
    k /= 2;
    let b = [],
      c = [];
    b.push(e, d, -k);
    b.push(e, d, -k);
    b.push(-e, d, -k);
    b.push(e, d, k);
    b.push(-e, d, k);
    b.push(-e, d, k);
    for (var h = 6; h--; c.push(0, 1, 0));
    b.push(-e, d, k);
    b.push(-e, d, k);
    b.push(-e, 0, k);
    b.push(e, d, k);
    b.push(e, 0, k);
    b.push(e, 0, k);
    for (h = 6; h--; c.push(0, 0, 1));
    b.push(e, d, k);
    b.push(e, d, k);
    b.push(e, 0, k);
    b.push(e, d, -k);
    b.push(e, 0, -k);
    b.push(e, 0, -k);
    for (h = 6; h--; c.push(1, 0, 0));
    b.push(e, d, -k);
    b.push(e, d, -k);
    b.push(e, 0, -k);
    b.push(-e, d, -k);
    b.push(-e, 0, -k);
    b.push(-e, 0, -k);
    for (h = 6; h--; c.push(0, 0, -1));
    b.push(-e, d, -k);
    b.push(-e, d, -k);
    b.push(-e, 0, -k);
    b.push(-e, d, k);
    b.push(-e, 0, k);
    b.push(-e, 0, k);
    for (d = 6; d--; c.push(-1, 0, 0));
    b.push(-e, 0, k);
    b.push(-e, 0, k);
    b.push(-e, 0, -k);
    b.push(e, 0, k);
    b.push(e, 0, -k);
    b.push(e, 0, -k);
    for (e = 6; e--; c.push(0, -1, 0));
    this.storeData(b, c);
  };
  e.Box.prototype = new e._Mesh();
})(ChemDoodle.structures.d3, Math);
(function (e, p, n, r, d, k) {
  p.Camera = function () {
    this.fieldOfView = 45;
    this.aspect = 1;
    this.near = 0.1;
    this.far = 1e4;
    this.zoom = 1;
    this.viewMatrix = r.identity([]);
    this.projectionMatrix = r.identity([]);
  };
  e = p.Camera.prototype;
  e.perspectiveProjectionMatrix = function () {
    let b = d.tan((this.fieldOfView / 360) * d.PI) * this.near * this.zoom,
      c = this.aspect * b;
    return r.frustum(-c, c, -b, b, this.near, this.far, this.projectionMatrix);
  };
  e.orthogonalProjectionMatrix = function () {
    let b =
        d.tan((this.fieldOfView / 360) * d.PI) *
        ((this.far - this.near) / 2 + this.near) *
        this.zoom,
      c = this.aspect * b;
    return r.ortho(-c, c, -b, b, this.near, this.far, this.projectionMatrix);
  };
  e.updateProjectionMatrix = function (b) {
    return b
      ? this.perspectiveProjectionMatrix()
      : this.orthogonalProjectionMatrix();
  };
  e.focalLength = function () {
    return (this.far - this.near) / 2 + this.near;
  };
  e.zoomOut = function () {
    this.zoom = d.min(1.25 * this.zoom, 200);
  };
  e.zoomIn = function () {
    this.zoom = d.max(this.zoom / 1.25, 0.0025);
  };
})(
  ChemDoodle.math,
  ChemDoodle.structures.d3,
  ChemDoodle.lib.vec3,
  ChemDoodle.lib.mat4,
  Math
);
(function (e, p, n, r) {
  e.LineArrow = function () {
    this.storeData(
      [
        0, 0, -3, 0.1, 0, -2.8, 0, 0, -3, -0.1, 0, -2.8, 0, 0, -3, 0, 0, 3, 0,
        0, 3, 0.1, 0, 2.8, 0, 0, 3, -0.1, 0, 2.8,
      ],
      [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0,
      ]
    );
  };
  e.LineArrow.prototype = new e._Mesh();
  e.Compass = function (d, b) {
    this.textImage = new e.TextImage();
    this.textImage.init(d);
    this.textImage.updateFont(
      d,
      b.text_font_size,
      b.text_font_families,
      b.text_font_bold,
      b.text_font_italic,
      b.text_font_stroke_3D
    );
    this.textMesh = new e.TextMesh();
    this.textMesh.init(d);
    var c = 3 / (b.compass_size_3D / d.canvas.clientHeight),
      h = p.tan((b.projectionPerspectiveVerticalFieldOfView_3D / 360) * p.PI);
    let a = c / h,
      g = p.max(a - c, 0.1);
    var l = d.canvas.clientWidth / d.canvas.clientHeight;
    let k;
    if (b.projectionPerspective_3D) {
      var m = g;
      k = n.frustum;
    } else (m = a), (k = n.ortho);
    let r = (m / d.canvas.clientHeight) * 2 * h;
    h *= m;
    m = -h;
    let u = l * m;
    l *= h;
    if (0 === b.compass_type_3D) {
      let a =
        (-(d.canvas.clientWidth - b.compass_size_3D) / 2 +
          this.textImage.charHeight) *
        r;
      b =
        (-(d.canvas.clientHeight - b.compass_size_3D) / 2 +
          this.textImage.charHeight) *
        r;
      u -= a;
      l -= a;
      m -= b;
      h -= b;
    }
    this.projectionMatrix = k(u, l, m, h, g, a + c);
    this.translationMatrix = n.translate(n.identity([]), [0, 0, -a]);
    c = { position: [], texCoord: [], translation: [] };
    this.textImage.pushVertexData("X", [3.5, 0, 0], 0, c);
    this.textImage.pushVertexData("Y", [0, 3.5, 0], 0, c);
    this.textImage.pushVertexData("Z", [0, 0, 3.5], 0, c);
    this.textMesh.storeData(d, c.position, c.texCoord, c.translation);
  };
  let d = e.Compass.prototype;
  d.renderArrow = function (d, b, c, h) {
    d.material.setDiffuseColor(d, c);
    d.shader.setModelViewMatrix(d, h);
    1 === b
      ? d.drawArrays(
          d.LINES,
          0,
          d.lineArrowBuffer.vertexPositionBuffer.numItems
        )
      : d.drawElements(
          d.TRIANGLES,
          d.arrowBuffer.vertexIndexBuffer.numItems,
          d.UNSIGNED_SHORT,
          0
        );
  };
  d.render = function (d, b) {
    d.shader.setProjectionMatrix(d, this.projectionMatrix);
    1 === b.compass_type_3D
      ? d.lineArrowBuffer.bindBuffers(d)
      : d.arrowBuffer.bindBuffers(d);
    d.material.setTempColors(
      d,
      b.bonds_materialAmbientColor_3D,
      r,
      b.bonds_materialSpecularColor_3D,
      b.bonds_materialShininess_3D
    );
    let c = n.multiply(this.translationMatrix, d.rotationMatrix, []),
      h = p.PI / 2;
    this.renderArrow(
      d,
      b.compass_type_3D,
      b.compass_axisXColor_3D,
      n.rotateY(c, h, [])
    );
    this.renderArrow(
      d,
      b.compass_type_3D,
      b.compass_axisYColor_3D,
      n.rotateX(c, -h, [])
    );
    this.renderArrow(d, b.compass_type_3D, b.compass_axisZColor_3D, c);
  };
  d.renderAxis = function (d) {
    d.shader.setProjectionMatrix(d, this.projectionMatrix);
    let b = n.multiply(this.translationMatrix, d.rotationMatrix, []);
    d.shader.setModelViewMatrix(d, b);
    this.textImage.useTexture(d);
    this.textMesh.render(d);
  };
})(ChemDoodle.structures.d3, Math, ChemDoodle.lib.mat4);
(function (e, p, n) {
  e.Cylinder = function (e, d, k, b) {
    let c = [],
      h = [];
    if (b) {
      for (b = 0; b <= k; b++) {
        var a = ((b % k) * 2 * p.PI) / k,
          g = p.cos(a);
        a = p.sin(a);
        h.push(0, -1, 0);
        c.push(0, 0, 0);
        h.push(0, -1, 0);
        c.push(e * g, 0, e * a);
      }
      for (b = 0; b <= k; b++)
        (a = ((b % k) * 2 * p.PI) / k),
          (g = p.cos(a)),
          (a = p.sin(a)),
          h.push(g, 0, a),
          c.push(e * g, 0, e * a),
          h.push(g, 0, a),
          c.push(e * g, d, e * a);
      for (b = 0; b <= k; b++)
        (a = ((b % k) * 2 * p.PI) / k),
          (g = p.cos(a)),
          (a = p.sin(a)),
          h.push(0, 1, 0),
          c.push(e * g, d, e * a),
          h.push(0, 1, 0),
          c.push(0, d, 0);
    } else {
      for (b = 0; b < k; b++)
        (a = (2 * b * p.PI) / k),
          (g = p.cos(a)),
          (a = p.sin(a)),
          h.push(g, 0, a),
          c.push(e * g, 0, e * a),
          h.push(g, 0, a),
          c.push(e * g, d, e * a);
      h.push(1, 0, 0);
      c.push(e, 0, 0);
      h.push(1, 0, 0);
      c.push(e, d, 0);
    }
    this.storeData(c, h);
  };
  e.Cylinder.prototype = new e._Mesh();
})(ChemDoodle.structures.d3, Math);
(function (e, p, n, r, d) {
  p.Distance = function (d, b, c, h) {
    this.a1 = d;
    this.a2 = b;
    this.node = c;
    this.offset = h ? h : 0;
  };
  p = p.Distance.prototype = new p._Measurement();
  p.calculateData = function (d) {
    let b = [this.a1.x, this.a1.y, this.a1.z, this.a2.x, this.a2.y, this.a2.z];
    this.node &&
      ((this.move =
        this.offset +
        n.max(
          d.atoms_useVDWDiameters_3D
            ? e[this.a1.label].vdWRadius * d.atoms_vdwMultiplier_3D
            : d.atoms_sphereDiameter_3D / 2,
          d.atoms_useVDWDiameters_3D
            ? e[this.a2.label].vdWRadius * d.atoms_vdwMultiplier_3D
            : d.atoms_sphereDiameter_3D / 2
        )),
      (this.displacement = [
        (this.a1.x + this.a2.x) / 2 - this.node.x,
        (this.a1.y + this.a2.y) / 2 - this.node.y,
        (this.a1.z + this.a2.z) / 2 - this.node.z,
      ]),
      r.normalize(this.displacement),
      (d = r.scale(this.displacement, this.move, [])),
      (b[0] += d[0]),
      (b[1] += d[1]),
      (b[2] += d[2]),
      (b[3] += d[0]),
      (b[4] += d[1]),
      (b[5] += d[2]));
    this.storeData(b, [0, 0, 0, 0, 0, 0], [0, 1]);
  };
  p.getText = function (d) {
    d = this.a1.distance3D(this.a2);
    let b = [
      (this.a1.x + this.a2.x) / 2,
      (this.a1.y + this.a2.y) / 2,
      (this.a1.z + this.a2.z) / 2,
    ];
    if (this.node) {
      let c = r.scale(this.displacement, this.move + 0.1, []);
      b[0] += c[0];
      b[1] += c[1];
      b[2] += c[2];
    }
    return { pos: b, value: [d.toFixed(2), " \u212b"].join("") };
  };
})(ChemDoodle.ELEMENT, ChemDoodle.structures.d3, Math, ChemDoodle.lib.vec3);
(function (e, p, n, r) {
  p.Fog = function (d, e, b, c) {
    this.fogScene(d, e, b, c);
  };
  p.Fog.prototype.fogScene = function (d, k, b, c) {
    this.colorRGB = e.getRGB(d, 1);
    this.fogStart = k;
    this.fogEnd = b;
    this.density = c;
  };
})(ChemDoodle.math, ChemDoodle.structures.d3, ChemDoodle.lib.vec3);
(function (e, p, n) {
  p.Label = function (e) {};
  p = p.Label.prototype;
  p.updateVerticesBuffer = function (r, d, k) {
    for (let l = 0, v = d.length; l < v; l++) {
      var b = d[l];
      let m = b.labelMesh;
      var c = b.atoms;
      let v = { position: [], texCoord: [], translation: [] };
      var h = 0 < c.length && c[0].hetatm != n;
      for (let b = 0, d = c.length; b < d; b++) {
        var a = c[b],
          g = a.label;
        let d = 0.05;
        k.atoms_useVDWDiameters_3D
          ? ((g = e[g].vdWRadius * k.atoms_vdwMultiplier_3D),
            0 === g && (g = 1),
            (d += g))
          : k.atoms_sphereDiameter_3D &&
            (d += (k.atoms_sphereDiameter_3D / 2) * 1.5);
        if (h)
          if (!a.hetatm) {
            if (!k.macro_displayAtoms) continue;
          } else if (a.isWater && !k.macro_showWaters) continue;
        r.textImage.pushVertexData(
          a.altLabel ? a.altLabel : a.label,
          [a.x, a.y, a.z],
          d,
          v
        );
      }
      if (
        (b = b.chains) &&
        (k.proteins_displayRibbon || k.proteins_displayBackbone)
      )
        for (let g = 0, d = b.length; g < d; g++) {
          c = b[g];
          for (let b = 0, g = c.length; b < g; b++)
            (h = c[b]),
              h.name &&
                ((a = h.cp1),
                r.textImage.pushVertexData(h.name, [a.x, a.y, a.z], 2, v));
        }
      m.storeData(r, v.position, v.texCoord, v.translation, v.zDepth);
    }
  };
  p.render = function (e, d, k) {
    e.shader.setMatrixUniforms(e);
    e.textImage.useTexture(e);
    for (let b = 0, c = k.length; b < c; b++)
      k[b].labelMesh && k[b].labelMesh.render(e);
  };
})(ChemDoodle.ELEMENT, ChemDoodle.structures.d3);
(function (e, p, n) {
  e.Sphere = function (e, d, k) {
    let b = [],
      c = [];
    for (var h = 0; h <= d; h++) {
      var a = (h * p.PI) / d,
        g = p.sin(a);
      a = p.cos(a);
      for (var l = 0; l <= k; l++) {
        var v = (2 * l * p.PI) / k,
          m = p.sin(v);
        v = p.cos(v) * g;
        let d = a;
        m *= g;
        c.push(v, d, m);
        b.push(e * v, e * d, e * m);
      }
    }
    e = [];
    k += 1;
    for (h = 0; h < d; h++)
      for (g = 0; g < k; g++)
        (a = h * k + (g % k)),
          (l = a + k),
          e.push(a, a + 1, l),
          g < k - 1 && e.push(l, a + 1, l + 1);
    this.storeData(b, c, e);
  };
  e.Sphere.prototype = new e._Mesh();
})(ChemDoodle.structures.d3, Math);
(function (e, p, n, r, d) {
  function k(b, d, a, g) {
    this.entire = b;
    this.name = d;
    this.indexes = a;
    this.pi = g;
  }
  let b = k.prototype;
  b.getColor = function (b) {
    return b.macro_colorByChain
      ? this.entire.chainColor
      : this.name
      ? this.getResidueColor(e[this.name] ? this.name : "*", b)
      : this.helix
      ? this.entire.front
        ? b.proteins_ribbonCartoonHelixPrimaryColor
        : b.proteins_ribbonCartoonHelixSecondaryColor
      : this.sheet
      ? b.proteins_ribbonCartoonSheetColor
      : this.entire.front
      ? b.proteins_primaryColor
      : b.proteins_secondaryColor;
  };
  b.getResidueColor = function (b, d) {
    b = e[b];
    if ("shapely" === d.proteins_residueColor) return b.shapelyColor;
    if ("amino" === d.proteins_residueColor) return b.aminoColor;
    if ("polarity" === d.proteins_residueColor) {
      if (b.polar) return "#C10000";
    } else if ("acidity" === d.proteins_residueColor) {
      if (1 === b.acidity) return "#0000FF";
      if (-1 === b.acidity) return "#FF0000";
      if (!b.polar) return "#773300";
    }
    return "#FFFFFF";
  };
  b.render = function (b, d, a) {
    if (
      this.entire.partitions &&
      this.pi !== this.entire.partitions.lastRender
    ) {
      var c = this.entire.partitions[this.pi];
      b.bindBuffer(b.ARRAY_BUFFER, c.vertexPositionBuffer);
      b.vertexAttribPointer(
        b.shader.vertexPositionAttribute,
        c.vertexPositionBuffer.itemSize,
        b.FLOAT,
        !1,
        0,
        0
      );
      b.bindBuffer(b.ARRAY_BUFFER, c.vertexNormalBuffer);
      b.vertexAttribPointer(
        b.shader.vertexNormalAttribute,
        c.vertexNormalBuffer.itemSize,
        b.FLOAT,
        !1,
        0,
        0
      );
      b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, c.vertexIndexBuffer);
      this.entire.partitions.lastRender = this.pi;
    }
    this.vertexIndexBuffer ||
      ((this.vertexIndexBuffer = b.createBuffer()),
      b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, this.vertexIndexBuffer),
      b.bufferData(
        b.ELEMENT_ARRAY_BUFFER,
        new Uint16Array(this.indexes),
        b.STATIC_DRAW
      ),
      (this.vertexIndexBuffer.itemSize = 1),
      (this.vertexIndexBuffer.numItems = this.indexes.length));
    b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, this.vertexIndexBuffer);
    a ||
      "rainbow" === d.proteins_residueColor ||
      b.material.setDiffuseColor(b, this.getColor(d));
    b.drawElements(
      b.TRIANGLES,
      this.vertexIndexBuffer.numItems,
      b.UNSIGNED_SHORT,
      0
    );
  };
  p.Ribbon = function (b, e, a) {
    let c = b[0].lineSegments.length,
      h = b[0].lineSegments[0].length;
    this.partitions = [];
    this.partitions.lastRender = 0;
    this.front = 0 < e;
    for (let g = 0, d = b.length; g < d; g++) {
      if (!v || 65e3 < v.positionData.length) {
        0 < this.partitions.length && g--;
        var v = { count: 0, positionData: [], normalData: [] };
        this.partitions.push(v);
      }
      var m = b[g];
      v.count++;
      for (var x = 0; x < c; x++) {
        var u = a ? m.lineSegmentsCartoon[x] : m.lineSegments[x],
          w = 0 === x,
          p = !1;
        for (var y = 0; y < h; y++) {
          var f = u[y],
            q = g,
            A = y + 1;
          g === b.length - 1 && y === h - 1
            ? A--
            : y === h - 1 && (q++, (A = 0));
          A = a ? b[q].lineSegmentsCartoon[x][A] : b[q].lineSegments[x][A];
          q = !1;
          var C = x + 1;
          x === c - 1 && ((C -= 2), (q = !0));
          C = a ? m.lineSegmentsCartoon[C][y] : m.lineSegments[C][y];
          A = [A.x - f.x, A.y - f.y, A.z - f.z];
          C = [C.x - f.x, C.y - f.y, C.z - f.z];
          let d = r.cross(A, C, []);
          0 === y &&
            (r.normalize(A),
            r.scale(A, -1),
            v.normalData.push(A[0], A[1], A[2]),
            v.positionData.push(f.x, f.y, f.z));
          w || p
            ? (r.normalize(C),
              r.scale(C, -1),
              v.normalData.push(C[0], C[1], C[2]),
              v.positionData.push(f.x, f.y, f.z),
              w && y === h - 1 && ((w = !1), (y = -1)))
            : (r.normalize(d),
              ((q && !this.front) || (!q && this.front)) && r.scale(d, -1),
              v.normalData.push(d[0], d[1], d[2]),
              r.scale(d, n.abs(e)),
              v.positionData.push(f.x + d[0], f.y + d[1], f.z + d[2]),
              x === c - 1 && y === h - 1 && ((p = !0), (y = -1)));
          if (-1 === y || y === h - 1)
            r.normalize(A),
              v.normalData.push(A[0], A[1], A[2]),
              v.positionData.push(f.x, f.y, f.z);
        }
      }
    }
    c += 2;
    h += 2;
    this.segments = [];
    this.partitionSegments = [];
    for (let g = 0, l = this.partitions.length; g < l; g++) {
      e = this.partitions[g];
      v = [];
      m = d;
      for (let l = 0, n = e.count - 1; l < n; l++) {
        m = l;
        for (x = 0; x < g; x++) m += this.partitions[x].count - 1;
        m = b[m];
        u = l * c * h;
        x = [];
        for (let a = 0, b = c - 1; a < b; a++)
          for (w = u + a * h, p = 0; p < h - 1; p++)
            (y = 1),
              l === n && (y = 0),
              (y = [
                w + p,
                w + h + p,
                w + h + p + y,
                w + p,
                w + p + y,
                w + h + p + y,
              ]),
              p !== h - 1 &&
                (this.front
                  ? x.push(y[0], y[1], y[2], y[3], y[5], y[4])
                  : x.push(y[0], y[2], y[1], y[3], y[4], y[5])),
              p !== h - 2 ||
                (l === e.count - 2 && g === this.partitions.length - 1) ||
                ((f = c * h - p), (y[2] += f), (y[4] += f), (y[5] += f)),
              this.front
                ? v.push(y[0], y[1], y[2], y[3], y[5], y[4])
                : v.push(y[0], y[2], y[1], y[3], y[4], y[5]);
        a &&
          m.split &&
          ((v = new k(this, d, v, g)),
          (v.helix = m.helix),
          (v.sheet = m.sheet),
          this.partitionSegments.push(v),
          (v = []));
        this.segments.push(new k(this, m.name, x, g));
      }
      e = new k(this, d, v, g);
      e.helix = m.helix;
      e.sheet = m.sheet;
      this.partitionSegments.push(e);
    }
    this.storeData(
      this.partitions[0].positionData,
      this.partitions[0].normalData
    );
    1 === this.partitions.length && (this.partitions = d);
  };
  (p.Ribbon.prototype = new p._Mesh()).render = function (b, e) {
    this.bindBuffers(b);
    let a = e.macro_colorByChain ? this.chainColor : d;
    a || (a = this.front ? e.proteins_primaryColor : e.proteins_secondaryColor);
    b.material.setDiffuseColor(b, a);
    for (let a = 0, c = this.partitionSegments.length; a < c; a++)
      this.partitionSegments[a].render(b, e, !e.proteins_ribbonCartoonize);
  };
})(ChemDoodle.RESIDUE, ChemDoodle.structures.d3, Math, ChemDoodle.lib.vec3);
(function (e, p, n, r, d) {
  p.Light = function (d, b, c) {
    this.camera = new p.Camera();
    this.lightScene(d, b, c);
  };
  d = p.Light.prototype;
  d.lightScene = function (d, b, c) {
    this.diffuseRGB = e.getRGB(d, 1);
    this.specularRGB = e.getRGB(b, 1);
    this.direction = c;
    this.updateView();
  };
  d.updateView = function () {
    var d = n.normalize(this.direction, []);
    let b = n.scale(
      d,
      (this.camera.near - this.camera.far) / 2 - this.camera.near,
      []
    );
    d = n.equal(d, [0, 1, 0]) ? [0, 0, 1] : [0, 1, 0];
    r.lookAt(b, [0, 0, 0], d, this.camera.viewMatrix);
    this.camera.orthogonalProjectionMatrix();
  };
})(
  ChemDoodle.math,
  ChemDoodle.structures.d3,
  ChemDoodle.lib.vec3,
  ChemDoodle.lib.mat4
);
(function (e, p) {
  e.Line = function () {
    this.storeData([0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0]);
  };
  e.Line.prototype = new e._Mesh();
})(ChemDoodle.structures.d3);
(function (e, p, n) {
  p.Material = function () {};
  p = p.Material.prototype;
  p.setTempColors = function (n, d, k, b, c) {
    d && n.shader.setMaterialAmbientColor(n, e.getRGB(d, 1));
    k && n.shader.setMaterialDiffuseColor(n, e.getRGB(k, 1));
    b && n.shader.setMaterialSpecularColor(n, e.getRGB(b, 1));
    n.shader.setMaterialShininess(n, c);
    n.shader.setMaterialAlpha(n, 1);
  };
  p.setDiffuseColor = function (n, d) {
    n.shader.setMaterialDiffuseColor(n, e.getRGB(d, 1));
  };
  p.setAlpha = function (e, d) {
    e.shader.setMaterialAlpha(e, d);
  };
})(ChemDoodle.math, ChemDoodle.structures.d3);
(function (e, p, n, r) {
  e.Picker = function () {};
  e = e.Picker.prototype;
  e.init = function (d) {
    this.framebuffer = d.createFramebuffer();
    let e = d.createTexture(),
      b = d.createRenderbuffer();
    d.bindTexture(d.TEXTURE_2D, e);
    d.texParameteri(d.TEXTURE_2D, d.TEXTURE_MAG_FILTER, d.NEAREST);
    d.texParameteri(d.TEXTURE_2D, d.TEXTURE_MIN_FILTER, d.NEAREST);
    d.texParameteri(d.TEXTURE_2D, d.TEXTURE_WRAP_S, d.CLAMP_TO_EDGE);
    d.texParameteri(d.TEXTURE_2D, d.TEXTURE_WRAP_T, d.CLAMP_TO_EDGE);
    d.bindRenderbuffer(d.RENDERBUFFER, b);
    d.bindFramebuffer(d.FRAMEBUFFER, this.framebuffer);
    d.framebufferTexture2D(
      d.FRAMEBUFFER,
      d.COLOR_ATTACHMENT0,
      d.TEXTURE_2D,
      e,
      0
    );
    d.framebufferRenderbuffer(
      d.FRAMEBUFFER,
      d.DEPTH_ATTACHMENT,
      d.RENDERBUFFER,
      b
    );
    d.bindTexture(d.TEXTURE_2D, null);
    d.bindRenderbuffer(d.RENDERBUFFER, null);
    d.bindFramebuffer(d.FRAMEBUFFER, null);
  };
  e.setDimension = function (d, e, b) {
    d.bindFramebuffer(d.FRAMEBUFFER, this.framebuffer);
    var c = d.getFramebufferAttachmentParameter(
      d.FRAMEBUFFER,
      d.DEPTH_ATTACHMENT,
      d.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME
    );
    d.isRenderbuffer(c) &&
      (d.bindRenderbuffer(d.RENDERBUFFER, c),
      d.renderbufferStorage(d.RENDERBUFFER, d.DEPTH_COMPONENT16, e, b),
      d.bindRenderbuffer(d.RENDERBUFFER, null));
    c = d.getFramebufferAttachmentParameter(
      d.FRAMEBUFFER,
      d.COLOR_ATTACHMENT0,
      d.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME
    );
    d.isTexture(c) &&
      (d.bindTexture(d.TEXTURE_2D, c),
      d.texImage2D(
        d.TEXTURE_2D,
        0,
        d.RGBA,
        e,
        b,
        0,
        d.RGBA,
        d.UNSIGNED_BYTE,
        null
      ),
      d.bindTexture(d.TEXTURE_2D, null));
    d.bindFramebuffer(d.FRAMEBUFFER, null);
  };
})(ChemDoodle.structures.d3, ChemDoodle.math, document);
(function (e, p, n) {
  e.Pill = function (e, d, k, b) {
    var c = 1,
      h = 2 * e;
    d -= h;
    0 > d ? ((c = 0), (d += h)) : d < h && ((c = d / h), (d = h));
    h = [];
    let a = [];
    for (var g = 0; g <= k; g++) {
      var l = (g * p.PI) / k,
        v = p.sin(l);
      l = p.cos(l) * c;
      for (let c = 0; c <= b; c++) {
        var m = (2 * c * p.PI) / b,
          n = p.sin(m);
        m = p.cos(m) * v;
        let u = l;
        n *= v;
        a.push(m, u, n);
        h.push(e * m, e * u + (g < k / 2 ? d : 0), e * n);
      }
    }
    e = [];
    b += 1;
    for (d = 0; d < k; d++)
      for (c = 0; c < b; c++)
        (g = d * b + (c % b)),
          (v = g + b),
          e.push(g, g + 1, v),
          c < b - 1 && e.push(v, g + 1, v + 1);
    this.storeData(h, a, e);
  };
  e.Pill.prototype = new e._Mesh();
})(ChemDoodle.structures.d3, Math);
(function (e, p, n, r, d, k, b, c, h) {
  function a(a, b, c) {
    let g = new n.Residue(-1);
    g.cp1 = g.cp2 = new n.Atom("", a, b, c);
    return g;
  }
  function g(a, b) {
    this.a1 = a;
    this.a2 = b;
  }
  function l(a, b, c) {
    this.a1 = a;
    this.a2 = b;
    this.vx = c;
  }
  g.prototype.render = function (a, c) {
    var g = this.a1;
    let h = this.a2;
    var l = 1.001 * g.distance3D(h);
    c = c.proteins_cylinderHelixDiameter / 2;
    l = [c, l, c];
    c = k.translate(k.identity(), [g.x, g.y, g.z]);
    var m = [0, 1, 0];
    let v = 0;
    g.x === h.x && g.z === h.z
      ? ((m = [0, 0, 1]), h.y < g.y && (v = d.PI))
      : ((g = [h.x - g.x, h.y - g.y, h.z - g.z]),
        (v = e.vec3AngleFrom(m, g)),
        (m = b.cross(m, g, [])));
    0 !== v && k.rotate(c, v, m);
    k.scale(c, l);
    a.shader.setMatrixUniforms(a, c);
    a.drawArrays(
      a.TRIANGLE_STRIP,
      0,
      a.cylinderClosedBuffer.vertexPositionBuffer.numItems
    );
  };
  l.prototype.render = function (a, c) {
    this.styles && (c = this.styles);
    let g = 1.001 * this.a1.distance3D(this.a2);
    var d = [
      this.a2.x - this.a1.x,
      this.a2.y - this.a1.y,
      this.a2.z - this.a1.z,
    ];
    let e = b.cross(d, this.vx, []),
      h = b.cross(e, d, []);
    b.normalize(h);
    b.normalize(d);
    b.normalize(e);
    d = [
      h[0],
      h[1],
      h[2],
      0,
      d[0],
      d[1],
      d[2],
      0,
      e[0],
      e[1],
      e[2],
      0,
      this.a1.x,
      this.a1.y,
      this.a1.z,
      1,
    ];
    k.scale(d, [c.proteins_plankSheetWidth, g, c.proteins_tubeThickness]);
    a.shader.setMatrixUniforms(a, d);
    a.drawArrays(
      a.TRIANGLE_STRIP,
      0,
      a.boxBuffer.vertexPositionBuffer.numItems
    );
  };
  r.PipePlank = function (c, e) {
    this.tubes = [];
    this.helixCylinders = [];
    this.sheetPlanks = [];
    this.chainColor = c.chainColor;
    var h = [],
      k = [],
      m = [],
      v = [];
    if (1 < c.length) {
      var p = c[0],
        f = c[1];
      f.helix ? m.push(p) : f.sheet ? v.push(p) : k.push(p);
    }
    for (let e = 1, u = c.length - 1; e <= u; e++)
      if (((p = c[e]), p.helix)) {
        if ((m.push(p), p.arrow)) {
          var q = b.create();
          f = b.create();
          if (1 === m.length)
            (q = [
              p.guidePointsSmall[0].x,
              p.guidePointsSmall[0].y,
              p.guidePointsSmall[0].z,
            ]),
              (f = p.guidePointsSmall[p.guidePointsSmall.length - 1]),
              (f = [f.x, f.y, f.z]);
          else if (2 === m.length)
            (q = [m[0].cp1.x, m[0].cp1.y, m[0].cp1.z]),
              (f = [m[1].cp1.x, m[1].cp1.y, m[1].cp1.z]);
          else {
            3 === m.length && m.unshift(c[d.max(e - 3, 0)]);
            var A = [],
              C = [];
            for (let a = 1, c = m.length - 1; a < c; a++) {
              var B = [m[a].cp1.x, m[a].cp1.y, m[a].cp1.z],
                D = [m[a - 1].cp1.x, m[a - 1].cp1.y, m[a - 1].cp1.z],
                F = [m[a + 1].cp1.x, m[a + 1].cp1.y, m[a + 1].cp1.z];
              b.subtract(D, B);
              b.subtract(F, B);
              var L = b.scale(D, b.length(F), []);
              D = b.scale(F, b.length(D), []);
              L = b.normalize(b.add(L, D, []));
              A.push(B);
              C.push(L);
            }
            m = [];
            for (let a = 0, c = A.length - 1; a < c; a++) {
              D = A[a];
              F = C[a];
              B = A[a + 1];
              L = C[a + 1];
              var H = b.normalize(b.cross(F, L, [])),
                K = b.subtract(B, D, []);
              let c = b.dot(K, H);
              H = b.scale(H, c, []);
              H = b.length(H);
              K = b.length(K);
              K = -(H * H - K * K) / (2 * b.dot(b.subtract(D, B, []), L));
              D = b.add(D, b.scale(F, K, []), []);
              B = b.add(B, b.scale(L, K, []), []);
              m.push([D, B]);
            }
            A = m[0][0];
            C = m[0][1];
            C = b.subtract(A, C, []);
            b.add(A, C, q);
            A = m[m.length - 1][1];
            C = m[m.length - 1][0];
            C = b.subtract(A, C, []);
            b.add(A, C, f);
          }
          m = new n.Atom("", q[0], q[1], q[2]);
          A = new n.Atom("", f[0], f[1], f[2]);
          this.helixCylinders.push(new g(m, A));
          m = [];
          A = b.subtract(q, f, []);
          b.normalize(A);
          b.scale(A, 0.5);
          0 < k.length &&
            ((C = b.add(q, A, [])),
            (B = k[k.length - 1].cp1),
            (B = b.subtract([B.x, B.y, B.z], C, [])),
            b.normalize(B),
            b.scale(B, 0.5),
            b.add(C, B),
            (B = new n.Residue(-1)),
            (B.cp1 = B.cp2 = new n.Atom("", C[0], C[1], C[2])),
            k.push(B),
            (B = a(q[0], q[1], q[2])),
            k.push(B),
            h.push(k));
          k = [];
          e < u &&
            ((q = a(f[0], f[1], f[2])),
            k.push(q),
            (q = c[e + 1]),
            q.sheet
              ? (k.push(p), k.push(p), h.push(k), (k = []), v.push(p))
              : (b.scale(A, -1),
                (p = b.add(f, A, [])),
                (f = q.cp1),
                (f = b.subtract([f.x, f.y, f.z], p, [])),
                b.normalize(f),
                b.scale(f, 0.5),
                b.add(p, f),
                (p = a(p[0], p[1], p[2])),
                k.push(p)));
        }
      } else if (p.sheet) {
        if ((v.push(p), p.arrow)) {
          q = [0, 0, 0];
          A = [0, 0, 0];
          f = v.length;
          for (C = 0; C < f; C++)
            (L = v[C].guidePointsLarge),
              (B = L[0]),
              (L = L[L.length - 1]),
              b.add(q, [B.x, B.y, B.z]),
              b.add(A, [L.x, L.y, L.z]);
          b.scale(q, 1 / f);
          b.scale(A, 1 / f);
          q = b.subtract(q, A);
          f = v[f - 1].guidePointsSmall[0];
          this.sheetPlanks.push(new l(v[0].guidePointsSmall[0], f, q));
          v = [];
          e < u &&
            (c[e + 1].sheet ? v.push(p) : ((p = a(f.x, f.y, f.z)), k.push(p)));
        }
      } else
        k.push(p),
          e < u &&
            c[e + 1].sheet &&
            ((f = p.guidePointsSmall[0]),
            (f = a(f.x, f.y, f.z)),
            k.push(f),
            h.push(k),
            (k = []),
            v.push(p));
    1 < k.length && (2 == k.length && k.push(k[k.length - 1]), h.push(k));
    k = [];
    for (let a = 0, b = h.length; a < b; a++) {
      v = h[a];
      p = [];
      for (let a = 0, b = v.length - 1; a <= b; a++) p.push(v[a].cp1);
      k.push(p);
    }
    for (let a = 0, b = k.length; a < b; a++)
      (h = new r.CatmullTube(
        k[a],
        e.proteins_tubeThickness,
        e.proteins_tubeResolution_3D,
        e.proteins_horizontalResolution
      )),
        (h.chainColor = c.chainColor),
        this.tubes.push(h);
  };
  (r.PipePlank.prototype = new r._Mesh()).render = function (a, b) {
    a.material.setTempColors(
      a,
      b.proteins_materialAmbientColor_3D,
      h,
      b.proteins_materialSpecularColor_3D,
      b.proteins_materialShininess_3D
    );
    a.material.setDiffuseColor(
      a,
      b.macro_colorByChain ? this.chainColor : b.proteins_tubeColor
    );
    for (let c = 0, g = this.tubes.length; c < g; c++)
      a.shader.setMatrixUniforms(a), this.tubes[c].render(a, b);
    b.macro_colorByChain ||
      a.material.setDiffuseColor(
        a,
        b.proteins_ribbonCartoonHelixSecondaryColor
      );
    a.cylinderClosedBuffer.bindBuffers(a);
    for (let c = 0, g = this.helixCylinders.length; c < g; c++)
      this.helixCylinders[c].render(a, b);
    b.macro_colorByChain ||
      a.material.setDiffuseColor(a, b.proteins_ribbonCartoonSheetColor);
    a.boxBuffer.bindBuffers(a);
    for (let c = 0, g = this.sheetPlanks.length; c < g; c++)
      this.sheetPlanks[c].render(a, b);
  };
})(
  ChemDoodle.extensions,
  ChemDoodle.RESIDUE,
  ChemDoodle.structures,
  ChemDoodle.structures.d3,
  Math,
  ChemDoodle.lib.mat4,
  ChemDoodle.lib.vec3,
  ChemDoodle.math
);
(function (e, p) {
  e.Quad = function () {
    this.storeData(
      [-1, 1, 0, -1, -1, 0, 1, 1, 0, 1, -1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    );
  };
  e.Quad.prototype = new e._Mesh();
})(ChemDoodle.structures.d3);
(function (e, p, n, r) {
  p.Shape = function (d, k) {
    var b = d.length;
    let c = [],
      h = [],
      a = new e.Point();
    for (let e = 0, m = b; e < m; e++) {
      var g = e + 1;
      e === m - 1 && (g = 0);
      let b = d[e];
      var l = d[g];
      g = n.cross([0, 0, 1], [l.x - b.x, l.y - b.y, 0]);
      for (let a = 0; 2 > a; a++)
        c.push(b.x, b.y, k / 2),
          c.push(b.x, b.y, -k / 2),
          c.push(l.x, l.y, k / 2),
          c.push(l.x, l.y, -k / 2);
      for (l = 0; 4 > l; l++) h.push(g[0], g[1], g[2]);
      h.push(0, 0, 1);
      h.push(0, 0, -1);
      h.push(0, 0, 1);
      h.push(0, 0, -1);
      a.add(b);
    }
    a.x /= b;
    a.y /= b;
    h.push(0, 0, 1);
    c.push(a.x, a.y, k / 2);
    h.push(0, 0, -1);
    c.push(a.x, a.y, -k / 2);
    d = [];
    k = 8 * b;
    for (let a = 0, c = b; a < c; a++)
      (b = 8 * a),
        d.push(b),
        d.push(b + 3),
        d.push(b + 1),
        d.push(b),
        d.push(b + 2),
        d.push(b + 3),
        d.push(b + 4),
        d.push(k),
        d.push(b + 6),
        d.push(b + 5),
        d.push(b + 7),
        d.push(k + 1);
    this.storeData(c, h, d);
  };
  p.Shape.prototype = new p._Mesh();
})(ChemDoodle.structures, ChemDoodle.structures.d3, ChemDoodle.lib.vec3);
(function (e, p, n, r) {
  e.Star = function () {
    let d = [
        0.8944, 0.4472, 0, 0.2764, 0.4472, 0.8506, 0.2764, 0.4472, -0.8506,
        -0.7236, 0.4472, 0.5257, -0.7236, 0.4472, -0.5257, -0.3416, 0.4472, 0,
        -0.1056, 0.4472, 0.3249, -0.1056, 0.4472, -0.3249, 0.2764, 0.4472,
        0.2008, 0.2764, 0.4472, -0.2008, -0.8944, -0.4472, 0, -0.2764, -0.4472,
        0.8506, -0.2764, -0.4472, -0.8506, 0.7236, -0.4472, 0.5257, 0.7236,
        -0.4472, -0.5257, 0.3416, -0.4472, 0, 0.1056, -0.4472, 0.3249, 0.1056,
        -0.4472, -0.3249, -0.2764, -0.4472, 0.2008, -0.2764, -0.4472, -0.2008,
        -0.5527, 0.1058, 0, -0.1708, 0.1058, 0.5527, -0.1708, 0.1058, -0.5527,
        0.4471, 0.1058, 0.3249, 0.4471, 0.1058, -0.3249, 0.5527, -0.1058, 0,
        0.1708, -0.1058, 0.5527, 0.1708, -0.1058, -0.5527, -0.4471, -0.1058,
        0.3249, -0.4471, -0.1058, -0.3249, 0, 1, 0, 0, -1, 0,
      ],
      e = [
        0, 9, 8, 2, 7, 9, 4, 5, 7, 3, 6, 5, 1, 8, 6, 0, 8, 23, 30, 6, 8, 3, 21,
        6, 11, 26, 21, 13, 23, 26, 2, 9, 24, 30, 8, 9, 1, 23, 8, 13, 25, 23, 14,
        24, 25, 4, 7, 22, 30, 9, 7, 0, 24, 9, 14, 27, 24, 12, 22, 27, 3, 5, 20,
        30, 7, 5, 2, 22, 7, 12, 29, 22, 10, 20, 29, 1, 6, 21, 30, 5, 6, 4, 20,
        5, 10, 28, 20, 11, 21, 28, 10, 19, 18, 12, 17, 19, 14, 15, 17, 13, 16,
        15, 11, 18, 16, 31, 19, 17, 14, 17, 27, 2, 27, 22, 4, 22, 29, 10, 29,
        19, 31, 18, 19, 12, 19, 29, 4, 29, 20, 3, 20, 28, 11, 28, 18, 31, 16,
        18, 10, 18, 28, 3, 28, 21, 1, 21, 26, 13, 26, 16, 31, 15, 16, 11, 16,
        26, 1, 26, 23, 0, 23, 25, 14, 25, 15, 31, 17, 15, 13, 15, 25, 0, 25, 24,
        2, 24, 27, 12, 27, 17,
      ],
      b = [],
      c = [],
      h = [];
    for (let k = 0, m = e.length; k < m; k += 3) {
      var a = 3 * e[k],
        g = 3 * e[k + 1],
        l = 3 * e[k + 2];
      a = [d[a], d[a + 1], d[a + 2]];
      g = [d[g], d[g + 1], d[g + 2]];
      l = [d[l], d[l + 1], d[l + 2]];
      let m = n.cross(
        [l[0] - g[0], l[1] - g[1], l[2] - g[2]],
        [a[0] - g[0], a[1] - g[1], a[2] - g[2]],
        []
      );
      n.normalize(m);
      b.push(a[0], a[1], a[2], g[0], g[1], g[2], l[0], l[1], l[2]);
      c.push(m[0], m[1], m[2], m[0], m[1], m[2], m[0], m[1], m[2]);
      h.push(k, k + 1, k + 2);
    }
    this.storeData(b, c, h);
  };
  e.Star.prototype = new e._Mesh();
})(ChemDoodle.structures.d3, Math, ChemDoodle.lib.vec3);
(function (e, p, n, r, d) {
  let k = 1;
  r.devicePixelRatio && (k = r.devicePixelRatio);
  e.TextImage = function () {
    this.ctx = n.createElement("canvas").getContext("2d");
    this.data = [];
    this.text = "";
    this.charHeight = 0;
  };
  e = e.TextImage.prototype;
  e.init = function (b) {
    this.textureImage = b.createTexture();
    b.bindTexture(b.TEXTURE_2D, this.textureImage);
    b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL, !1);
    b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, b.CLAMP_TO_EDGE);
    b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, b.CLAMP_TO_EDGE);
    b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, b.NEAREST);
    b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, b.NEAREST);
    b.bindTexture(b.TEXTURE_2D, null);
    this.updateFont(b, 12, ["Sans-serif"], !1, !1, !1);
  };
  e.charData = function (b) {
    b = this.text.indexOf(b);
    return 0 <= b ? this.data[b] : null;
  };
  e.updateFont = function (b, c, d, a, g, e) {
    let h = this.ctx,
      l = this.ctx.canvas,
      n = [],
      u = "";
    c *= k;
    d = p.getFontString(c, d, a, g);
    h.font = d;
    h.save();
    a = 0;
    c *= 1.5;
    for (let b = 32, f = 127; b < f; b++) {
      g = String.fromCharCode(b);
      var w = h.measureText(g).width;
      n.push({ text: g, width: w, height: c });
      a += 2 * w;
    }
    g = ["\u00b0", "\u212b", "\u00ae"];
    for (let b = 0, f = g.length; b < f; b++) {
      w = g[b];
      var r = h.measureText(w).width;
      n.push({ text: w, width: r, height: c });
      a += 2 * r;
    }
    g = Math.ceil(Math.sqrt(a * c) / c);
    a = Math.ceil(a / (g - 1));
    l.width = a;
    l.height = g * c;
    h.font = d;
    h.textAlign = "left";
    h.textBaseline = "middle";
    h.strokeStyle = "#000";
    h.lineWidth = 1.4;
    h.fillStyle = "#fff";
    g = d = 0;
    for (let b = 0, c = n.length; b < c; b++) {
      w = n[b];
      r = 2 * w.width;
      let c = w.height,
        f = w.text;
      g + r > a && (d++, (g = 0));
      let l = d * c;
      e && h.strokeText(f, g, l + c / 2);
      h.fillText(f, g, l + c / 2);
      w.x = g;
      w.y = l;
      u += f;
      g += r;
    }
    this.text = u;
    this.data = n;
    this.charHeight = c;
    b.bindTexture(b.TEXTURE_2D, this.textureImage);
    b.texImage2D(b.TEXTURE_2D, 0, b.RGBA, b.RGBA, b.UNSIGNED_BYTE, l);
    b.bindTexture(b.TEXTURE_2D, null);
  };
  e.pushVertexData = function (b, c, d, a) {
    let g = b.toString().split(""),
      e = this.getHeight(),
      h = this.getWidth();
    b = -this.textWidth(b) / 2 / k;
    let m = -this.charHeight / 2 / k;
    for (let l = 0, v = g.length; l < v; l++) {
      var n = this.charData(g[l]);
      let v = n.width,
        u = n.x / h,
        f = u + (1.8 * n.width) / h,
        q = n.y / e;
      n = q + n.height / e;
      let w = b + (1.8 * v) / k,
        r = this.charHeight / 2 / k;
      a.position.push(
        c[0],
        c[1],
        c[2],
        c[0],
        c[1],
        c[2],
        c[0],
        c[1],
        c[2],
        c[0],
        c[1],
        c[2],
        c[0],
        c[1],
        c[2],
        c[0],
        c[1],
        c[2]
      );
      a.texCoord.push(u, q, f, n, f, q, u, q, u, n, f, n);
      a.translation.push(b, r, d, w, m, d, w, r, d, b, r, d, b, m, d, w, m, d);
      b = w + (v - 1.8 * v) / k;
    }
  };
  e.getCanvas = function () {
    return this.ctx.canvas;
  };
  e.getHeight = function () {
    return this.getCanvas().height;
  };
  e.getWidth = function () {
    return this.getCanvas().width;
  };
  e.textWidth = function (b) {
    return this.ctx.measureText(b).width;
  };
  e.test = function () {
    n.body.appendChild(this.getCanvas());
  };
  e.useTexture = function (b) {
    b.bindTexture(b.TEXTURE_2D, this.textureImage);
  };
})(ChemDoodle.structures.d3, ChemDoodle.extensions, document, window);
(function (e, p, n) {
  e.TextMesh = function () {};
  e = e.TextMesh.prototype;
  e.init = function (e) {
    this.vertexPositionBuffer = e.createBuffer();
    this.vertexTexCoordBuffer = e.createBuffer();
    this.vertexTranslationBuffer = e.createBuffer();
  };
  e.setVertexData = function (e, d, k, b) {
    e.bindBuffer(e.ARRAY_BUFFER, d);
    e.bufferData(e.ARRAY_BUFFER, new Float32Array(k), e.STATIC_DRAW);
    d.itemSize = b;
    d.numItems = k.length / b;
  };
  e.storeData = function (e, d, k, b) {
    this.setVertexData(e, this.vertexPositionBuffer, d, 3);
    this.setVertexData(e, this.vertexTexCoordBuffer, k, 2);
    this.setVertexData(e, this.vertexTranslationBuffer, b, 3);
  };
  e.bindBuffers = function (e) {
    e.bindBuffer(e.ARRAY_BUFFER, this.vertexPositionBuffer);
    e.vertexAttribPointer(
      e.shader.vertexPositionAttribute,
      this.vertexPositionBuffer.itemSize,
      e.FLOAT,
      !1,
      0,
      0
    );
    e.bindBuffer(e.ARRAY_BUFFER, this.vertexTexCoordBuffer);
    e.vertexAttribPointer(
      e.shader.vertexTexCoordAttribute,
      this.vertexTexCoordBuffer.itemSize,
      e.FLOAT,
      !1,
      0,
      0
    );
    e.bindBuffer(e.ARRAY_BUFFER, this.vertexTranslationBuffer);
    e.vertexAttribPointer(
      e.shader.vertexNormalAttribute,
      this.vertexTranslationBuffer.itemSize,
      e.FLOAT,
      !1,
      0,
      0
    );
  };
  e.render = function (e) {
    let d = this.vertexPositionBuffer.numItems;
    d && (this.bindBuffers(e), e.drawArrays(e.TRIANGLES, 0, d));
  };
})(ChemDoodle.structures.d3, Math);
(function (e, p, n, r, d, k, b) {
  n.Torsion = function (b, d, a, g) {
    this.a1 = b;
    this.a2 = d;
    this.a3 = a;
    this.a4 = g;
  };
  e = n.Torsion.prototype = new n._Measurement();
  e.calculateData = function (c) {
    let d = [],
      a = [],
      g = [];
    var e = this.a2.distance3D(this.a1),
      v = this.a2.distance3D(this.a3);
    this.distUse = r.min(e, v) / 2;
    v = [this.a2.x - this.a1.x, this.a2.y - this.a1.y, this.a2.z - this.a1.z];
    e = [this.a3.x - this.a2.x, this.a3.y - this.a2.y, this.a3.z - this.a2.z];
    var m = [
        this.a4.x - this.a3.x,
        this.a4.y - this.a3.y,
        this.a4.z - this.a3.z,
      ],
      n = k.cross(v, e, []);
    m = k.cross(e, m, []);
    k.scale(v, k.length(e));
    this.torsion = r.atan2(k.dot(v, m), k.dot(n, m));
    n = k.normalize(k.cross(n, e, []));
    v = k.normalize(k.cross(e, n, []));
    this.pos = k.add(
      [this.a2.x, this.a2.y, this.a2.z],
      k.scale(k.normalize(e, []), this.distUse)
    );
    m = [];
    let u = c.measurement_angleBands_3D;
    var w = b;
    for (c = 0; c <= u; ++c) {
      var p = (this.torsion * c) / u;
      w = k.scale(n, r.cos(p), []);
      p = k.scale(v, r.sin(p), []);
      w = k.scale(k.normalize(k.add(w, p, [])), this.distUse);
      0 == c && (m = w);
      d.push(this.pos[0] + w[0], this.pos[1] + w[1], this.pos[2] + w[2]);
      a.push(0, 0, 0);
      c < u && g.push(c, c + 1);
    }
    this.vecText = k.normalize(k.add(m, w, []));
    e = k.normalize(e, []);
    k.scale(e, 0.0625);
    m = this.torsion - (2 * r.asin(0.125) * this.torsion) / r.abs(this.torsion);
    n = k.scale(n, r.cos(m), []);
    v = k.scale(v, r.sin(m), []);
    w = k.scale(k.normalize(k.add(n, v, [])), this.distUse);
    d.push(
      this.pos[0] + e[0] + w[0],
      this.pos[1] + e[1] + w[1],
      this.pos[2] + e[2] + w[2]
    );
    a.push(0, 0, 0);
    d.push(
      this.pos[0] - e[0] + w[0],
      this.pos[1] - e[1] + w[1],
      this.pos[2] - e[2] + w[2]
    );
    a.push(0, 0, 0);
    g.push(--c, c + 1, c, c + 2);
    this.storeData(d, a, g);
  };
  e.getText = function (b) {
    k.add(this.pos, k.scale(this.vecText, this.distUse + 0.3, []));
    return {
      pos: this.pos,
      value: [p.angleBounds(this.torsion, !0, !0).toFixed(2), " \u00b0"].join(
        ""
      ),
    };
  };
})(
  ChemDoodle.ELEMENT,
  ChemDoodle.math,
  ChemDoodle.structures.d3,
  Math,
  ChemDoodle.lib.mat4,
  ChemDoodle.lib.vec3
);
(function (e, p, n, r, d, k, b, c, h) {
  let a = function (a, b) {
      a.bindBuffer(a.ARRAY_BUFFER, b.vertexPositionBuffer);
      a.vertexAttribPointer(
        a.shader.vertexPositionAttribute,
        b.vertexPositionBuffer.itemSize,
        a.FLOAT,
        !1,
        0,
        0
      );
      a.bindBuffer(a.ARRAY_BUFFER, b.vertexNormalBuffer);
      a.vertexAttribPointer(
        a.shader.vertexNormalAttribute,
        b.vertexNormalBuffer.itemSize,
        a.FLOAT,
        !1,
        0,
        0
      );
      a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, b.vertexIndexBuffer);
    },
    g = function (a, b, c) {
      let g = d.sqrt(b[1] * b[1] + b[2] * b[2]),
        e = [
          1,
          0,
          0,
          0,
          0,
          b[2] / g,
          -b[1] / g,
          0,
          0,
          b[1] / g,
          b[2] / g,
          0,
          0,
          0,
          0,
          1,
        ],
        h = [
          1,
          0,
          0,
          0,
          0,
          b[2] / g,
          b[1] / g,
          0,
          0,
          -b[1] / g,
          b[2] / g,
          0,
          0,
          0,
          0,
          1,
        ],
        l = [g, 0, -b[0], 0, 0, 1, 0, 0, b[0], 0, g, 0, 0, 0, 0, 1];
      b = [g, 0, b[0], 0, 0, 1, 0, 0, -b[0], 0, g, 0, 0, 0, 0, 1];
      c = [
        d.cos(c),
        -d.sin(c),
        0,
        0,
        d.sin(c),
        d.cos(c),
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1,
      ];
      let m = k.multiply(e, k.multiply(l, k.multiply(c, k.multiply(b, h, []))));
      this.rotate = function () {
        return k.multiplyVec3(m, a);
      };
    };
  r.Tube = function (h, v, m) {
    var l = h[0].lineSegments[0].length;
    this.partitions = [];
    this.ends = [];
    this.ends.push(h[0].lineSegments[0][0]);
    this.ends.push(h[h.length - 1].lineSegments[0][0]);
    var u = [1, 0, 0];
    for (let a = 0, c = h.length; a < c; a++) {
      if (!w || 65e3 < w.positionData.length) {
        0 < this.partitions.length && a--;
        var w = { count: 0, positionData: [], normalData: [], indexData: [] };
        this.partitions.push(w);
      }
      var r = h[a];
      w.count++;
      var y = Infinity,
        f = new n.Atom("", h[a].cp1.x, h[a].cp1.y, h[a].cp1.z);
      for (let c = 0; c < l; c++) {
        let e = r.lineSegments[0][c];
        var q =
          c === l - 1
            ? a === h.length - 1
              ? r.lineSegments[0][c - 1]
              : h[a + 1].lineSegments[0][0]
            : r.lineSegments[0][c + 1];
        q = [q.x - e.x, q.y - e.y, q.z - e.z];
        b.normalize(q);
        a === h.length - 1 && c === l - 1 && b.scale(q, -1);
        var A = b.cross(q, u, []);
        b.normalize(A);
        b.scale(A, v / 2);
        q = new g(A, q, (2 * Math.PI) / m);
        for (let a = 0, b = m; a < b; a++)
          (A = q.rotate()),
            a === d.floor(m / 4) && (u = [A[0], A[1], A[2]]),
            w.normalData.push(A[0], A[1], A[2]),
            w.positionData.push(e.x + A[0], e.y + A[1], e.z + A[2]);
        f && ((q = e.distance3D(f)), q < y && ((y = q), (h[a].pPoint = e)));
      }
    }
    for (let a = 0, b = this.partitions.length; a < b; a++) {
      w = this.partitions[a];
      for (let a = 0, b = w.count - 1; a < b; a++) {
        u = a * l * m;
        for (let a = 0, b = l; a < b; a++)
          for (r = u + a * m, y = 0; y < m; y++)
            (f = r + y),
              w.indexData.push(f),
              w.indexData.push(f + m),
              w.indexData.push(f + m + 1),
              w.indexData.push(f),
              w.indexData.push(f + m + 1),
              w.indexData.push(f + 1);
      }
    }
    this.storeData(
      this.partitions[0].positionData,
      this.partitions[0].normalData,
      this.partitions[0].indexData
    );
    m = [new n.Point(2, 0)];
    for (l = 0; 60 > l; l++)
      (w = (l / 60) * d.PI), m.push(new n.Point(2 * d.cos(w), -2 * d.sin(w)));
    m.push(new n.Point(-2, 0), new n.Point(-2, 4), new n.Point(2, 4));
    let C = new n.d3.Shape(m, 1);
    this.render = function (f, g) {
      this.bindBuffers(f);
      f.material.setDiffuseColor(
        f,
        g.macro_colorByChain ? this.chainColor : g.nucleics_tubeColor
      );
      f.drawElements(
        f.TRIANGLES,
        this.vertexIndexBuffer.numItems,
        f.UNSIGNED_SHORT,
        0
      );
      if (this.partitions)
        for (let b = 1, c = this.partitions.length; b < c; b++) {
          var l = this.partitions[b];
          a(f, l);
          f.drawElements(
            f.TRIANGLES,
            l.vertexIndexBuffer.numItems,
            f.UNSIGNED_SHORT,
            0
          );
        }
      f.sphereBuffer.bindBuffers(f);
      for (l = 0; 2 > l; l++) {
        var m = this.ends[l];
        m = k.translate(k.identity(), [m.x, m.y, m.z]);
        var u = v / 2;
        k.scale(m, [u, u, u]);
        f.shader.setMatrixUniforms(f, m);
        f.drawElements(
          f.TRIANGLES,
          f.sphereBuffer.vertexIndexBuffer.numItems,
          f.UNSIGNED_SHORT,
          0
        );
      }
      f.cylinderBuffer.bindBuffers(f);
      for (let a = 0, c = h.length - 1; a < c; a++) {
        m = h[a];
        l = m.pPoint;
        m = new n.Atom("", m.cp2.x, m.cp2.y, m.cp2.z);
        u = 1.001 * l.distance3D(m);
        u = [v / 4, u, v / 4];
        var q = k.translate(k.identity(), [l.x, l.y, l.z]),
          w = [0, 1, 0],
          r = 0,
          x = [m.x - l.x, m.y - l.y, m.z - l.z];
        l.x === m.x && l.z === m.z
          ? ((m = [0, 0, 1]), l.y < l.y && (r = d.PI))
          : ((r = e.vec3AngleFrom(w, x)), (m = b.cross(w, x, [])));
        0 !== r && k.rotate(q, r, m);
        k.scale(q, u);
        f.shader.setMatrixUniforms(f, q);
        f.drawArrays(
          f.TRIANGLE_STRIP,
          0,
          f.cylinderBuffer.vertexPositionBuffer.numItems
        );
      }
      C.bindBuffers(f);
      "none" !== g.nucleics_residueColor ||
        g.macro_colorByChain ||
        f.material.setDiffuseColor(f, g.nucleics_baseColor);
      for (let a = 0, v = h.length - 1; a < v; a++)
        if (
          ((l = h[a]),
          (q = l.cp2),
          (m = k.translate(k.identity(), [q.x, q.y, q.z])),
          (w = [0, 1, 0]),
          (r = 0),
          (x = l.cp3))
        ) {
          u = [x.x - q.x, x.y - q.y, x.z - q.z];
          q.x === x.x && q.z === x.z
            ? ((w = [0, 0, 1]), q.y < q.y && (r = d.PI))
            : ((r = e.vec3AngleFrom(w, u)), (w = b.cross(w, u, [])));
          0 !== r && k.rotate(m, r, w);
          q = [1, 0, 0];
          r = k.rotate(k.identity([]), r, w);
          k.multiplyVec3(r, q);
          r = l.cp4;
          w = l.cp5;
          if (r.y !== w.y || r.z !== w.z)
            (r = [w.x - r.x, w.y - r.y, w.z - r.z]),
              (w = e.vec3AngleFrom(q, r)),
              0 > b.dot(u, b.cross(q, r)) && (w *= -1),
              k.rotateY(m, w);
          g.macro_colorByChain ||
            ("shapely" === g.nucleics_residueColor
              ? p[l.name]
                ? f.material.setDiffuseColor(f, p[l.name].shapelyColor)
                : f.material.setDiffuseColor(f, p["*"].shapelyColor)
              : "rainbow" === g.nucleics_residueColor &&
                f.material.setDiffuseColor(
                  f,
                  c.rainbowAt(a, v, g.macro_rainbowColors)
                ));
          f.shader.setMatrixUniforms(f, m);
          f.drawElements(
            f.TRIANGLES,
            C.vertexIndexBuffer.numItems,
            f.UNSIGNED_SHORT,
            0
          );
        }
    };
  };
  r.Tube.prototype = new r._Mesh();
  r.CatmullTube = function (a, c, e, h) {
    var l = [];
    a.push(a[a.length - 1]);
    for (let b = 0, c = a.length - 2; b <= c; b++) {
      var k = a[0 == b ? 0 : b - 1],
        m = a[b + 0],
        v = a[b + 1],
        f = a[b == c ? b + 1 : b + 2],
        q = [];
      for (let a = 0; a < h; a++) {
        var r = a / h;
        b == c && (r = a / (h - 1));
        r = new n.Atom(
          "C",
          0.5 *
            (2 * m.x +
              (v.x - k.x) * r +
              (2 * k.x - 5 * m.x + 4 * v.x - f.x) * r * r +
              (3 * m.x - k.x - 3 * v.x + f.x) * r * r * r),
          0.5 *
            (2 * m.y +
              (v.y - k.y) * r +
              (2 * k.y - 5 * m.y + 4 * v.y - f.y) * r * r +
              (3 * m.y - k.y - 3 * v.y + f.y) * r * r * r),
          0.5 *
            (2 * m.z +
              (v.z - k.z) * r +
              (2 * k.z - 5 * m.z + 4 * v.z - f.z) * r * r +
              (3 * m.z - k.z - 3 * v.z + f.z) * r * r * r)
        );
        q.push(r);
      }
      l.push(q);
    }
    a = l[0].length;
    this.partitions = [];
    this.ends = [];
    this.ends.push(l[0][0]);
    this.ends.push(l[l.length - 1][0]);
    h = [1, 0, 0];
    for (let u = 0, n = l.length; u < n; u++) {
      if (!p || 65e3 < p.positionData.length) {
        0 < this.partitions.length && u--;
        var p = { count: 0, positionData: [], normalData: [], indexData: [] };
        this.partitions.push(p);
      }
      k = l[u];
      p.count++;
      for (m = 0; m < a; m++) {
        v = k[m];
        f =
          m === a - 1
            ? u === l.length - 1
              ? k[m - 1]
              : l[u + 1][0]
            : k[m + 1];
        f = [f.x - v.x, f.y - v.y, f.z - v.z];
        b.normalize(f);
        u === l.length - 1 && m === a - 1 && b.scale(f, -1);
        q = b.cross(f, h, []);
        b.normalize(q);
        b.scale(q, c / 2);
        f = new g(q, f, (2 * Math.PI) / e);
        for (let a = 0, b = e; a < b; a++)
          (q = f.rotate()),
            a === d.floor(e / 4) && (h = [q[0], q[1], q[2]]),
            p.normalData.push(q[0], q[1], q[2]),
            p.positionData.push(v.x + q[0], v.y + q[1], v.z + q[2]);
      }
    }
    for (let b = 0, f = this.partitions.length; b < f; b++) {
      c = this.partitions[b];
      for (let b = 0, f = c.count - 1; b < f; b++) {
        l = b * a * e;
        for (let b = 0, f = a; b < f; b++)
          for (p = l + b * e, h = 0; h <= e; h++)
            (k = p + (h % e)), c.indexData.push(k, k + e);
      }
    }
    this.storeData(
      this.partitions[0].positionData,
      this.partitions[0].normalData,
      this.partitions[0].indexData
    );
  };
  (r.CatmullTube.prototype = new r._Mesh()).render = function (b, c) {
    this.bindBuffers(b);
    for (let c = 0, d = this.partitions.length; c < d; c++) {
      var g = this.partitions[c];
      a(b, g);
      b.drawElements(
        b.TRIANGLE_STRIP,
        g.vertexIndexBuffer.numItems,
        b.UNSIGNED_SHORT,
        0
      );
    }
    b.sphereBuffer.bindBuffers(b);
    for (g = 0; 2 > g; g++) {
      var d = this.ends[g];
      d = k.translate(k.identity(), [d.x, d.y, d.z]);
      let a = c.proteins_tubeThickness / 2;
      k.scale(d, [a, a, a]);
      b.shader.setMatrixUniforms(b, d);
      b.drawElements(
        b.TRIANGLES,
        b.sphereBuffer.vertexIndexBuffer.numItems,
        b.UNSIGNED_SHORT,
        0
      );
    }
  };
})(
  ChemDoodle.extensions,
  ChemDoodle.RESIDUE,
  ChemDoodle.structures,
  ChemDoodle.structures.d3,
  Math,
  ChemDoodle.lib.mat4,
  ChemDoodle.lib.vec3,
  ChemDoodle.math
);
(function (e, p, n, r, d) {
  e.UnitCell = function (d, b, c) {
    this.lengths = d;
    this.angles = b;
    this.offset = c;
    d = p.CIFInterpreter.generateABC2XYZ(d[0], d[1], d[2], b[0], b[1], b[2]);
    c || (this.offset = [0, 0, 0]);
    this.unitCellVectors = {
      o: n.multiplyVec3(d, this.offset, []),
      x: n.multiplyVec3(d, [
        this.offset[0] + 1,
        this.offset[1],
        this.offset[2],
      ]),
      y: n.multiplyVec3(d, [
        this.offset[0],
        this.offset[1] + 1,
        this.offset[2],
      ]),
      z: n.multiplyVec3(d, [
        this.offset[0],
        this.offset[1],
        this.offset[2] + 1,
      ]),
      xy: n.multiplyVec3(d, [
        this.offset[0] + 1,
        this.offset[1] + 1,
        this.offset[2],
      ]),
      xz: n.multiplyVec3(d, [
        this.offset[0] + 1,
        this.offset[1],
        this.offset[2] + 1,
      ]),
      yz: n.multiplyVec3(d, [
        this.offset[0],
        this.offset[1] + 1,
        this.offset[2] + 1,
      ]),
      xyz: n.multiplyVec3(d, [
        this.offset[0] + 1,
        this.offset[1] + 1,
        this.offset[2] + 1,
      ]),
    };
    let e = [],
      a = [];
    c = function (b, c, d, h) {
      e.push(b[0], b[1], b[2]);
      e.push(c[0], c[1], c[2]);
      e.push(d[0], d[1], d[2]);
      e.push(h[0], h[1], h[2]);
      for (b = 0; 4 > b; b++) a.push(0, 0, 0);
    };
    c(
      this.unitCellVectors.o,
      this.unitCellVectors.x,
      this.unitCellVectors.xy,
      this.unitCellVectors.y
    );
    c(
      this.unitCellVectors.o,
      this.unitCellVectors.y,
      this.unitCellVectors.yz,
      this.unitCellVectors.z
    );
    c(
      this.unitCellVectors.o,
      this.unitCellVectors.z,
      this.unitCellVectors.xz,
      this.unitCellVectors.x
    );
    c(
      this.unitCellVectors.yz,
      this.unitCellVectors.y,
      this.unitCellVectors.xy,
      this.unitCellVectors.xyz
    );
    c(
      this.unitCellVectors.xyz,
      this.unitCellVectors.xz,
      this.unitCellVectors.z,
      this.unitCellVectors.yz
    );
    c(
      this.unitCellVectors.xy,
      this.unitCellVectors.x,
      this.unitCellVectors.xz,
      this.unitCellVectors.xyz
    );
    c = [];
    for (d = 0; 6 > d; d++)
      (b = 4 * d), c.push(b, b + 1, b + 1, b + 2, b + 2, b + 3, b + 3, b);
    this.storeData(e, a, c);
  };
  (e.UnitCell.prototype = new e._Mesh()).render = function (d, b) {
    d.shader.setMatrixUniforms(d);
    this.bindBuffers(d);
    d.material.setDiffuseColor(d, b.shapes_color);
    d.lineWidth(b.shapes_lineWidth);
    d.drawElements(
      d.LINES,
      this.vertexIndexBuffer.numItems,
      d.UNSIGNED_SHORT,
      0
    );
  };
})(
  ChemDoodle.structures.d3,
  ChemDoodle.io,
  ChemDoodle.lib.mat4,
  ChemDoodle.lib.vec3
);
(function (e, p, n, r) {
  e.Framebuffer = function () {};
  e = e.Framebuffer.prototype;
  e.init = function (d) {
    this.framebuffer = d.createFramebuffer();
  };
  e.setColorTexture = function (d, e, b) {
    b = b === r ? 0 : b;
    d.bindFramebuffer(d.FRAMEBUFFER, this.framebuffer);
    d.bindTexture(d.TEXTURE_2D, e);
    d.framebufferTexture2D(
      d.FRAMEBUFFER,
      d.COLOR_ATTACHMENT0 + b,
      d.TEXTURE_2D,
      e,
      0
    );
    d.bindTexture(d.TEXTURE_2D, null);
    d.bindFramebuffer(d.FRAMEBUFFER, null);
  };
  e.setColorRenderbuffer = function (d, e, b) {
    b = b === r ? 0 : b;
    d.bindFramebuffer(d.FRAMEBUFFER, this.framebuffer);
    d.bindRenderbuffer(d.RENDERBUFFER, e);
    d.framebufferRenderbuffer(
      d.FRAMEBUFFER,
      d.COLOR_ATTACHMENT0 + b,
      d.RENDERBUFFER,
      e
    );
    d.bindRenderbuffer(d.RENDERBUFFER, null);
    d.bindFramebuffer(d.FRAMEBUFFER, null);
  };
  e.setDepthTexture = function (d, e) {
    d.bindFramebuffer(d.FRAMEBUFFER, this.framebuffer);
    d.bindTexture(d.TEXTURE_2D, e);
    d.framebufferTexture2D(
      d.FRAMEBUFFER,
      d.DEPTH_ATTACHMENT,
      d.TEXTURE_2D,
      e,
      0
    );
    d.bindTexture(d.TEXTURE_2D, null);
    d.bindFramebuffer(d.FRAMEBUFFER, null);
  };
  e.setDepthRenderbuffer = function (d, e) {
    d.bindFramebuffer(d.FRAMEBUFFER, this.framebuffer);
    d.bindRenderbuffer(d.RENDERBUFFER, e);
    d.framebufferRenderbuffer(
      d.FRAMEBUFFER,
      d.DEPTH_ATTACHMENT,
      d.RENDERBUFFER,
      e
    );
    d.bindRenderbuffer(d.RENDERBUFFER, null);
    d.bindFramebuffer(d.FRAMEBUFFER, null);
  };
  e.bind = function (d, e, b) {
    d.bindFramebuffer(d.FRAMEBUFFER, this.framebuffer);
    d.viewport(0, 0, e, b);
  };
})(ChemDoodle.structures.d3, ChemDoodle.math, document);
(function (e, p, n, r) {
  e.Renderbuffer = function () {};
  e = e.Renderbuffer.prototype;
  e.init = function (d, e) {
    this.renderbuffer = d.createRenderbuffer();
    this.format = e;
  };
  e.setParameter = function (d, e, b) {
    this.width = e;
    this.height = b;
    d.bindRenderbuffer(d.RENDERBUFFER, this.renderbuffer);
    d.renderbufferStorage(d.RENDERBUFFER, this.format, this.width, this.height);
    d.bindRenderbuffer(d.RENDERBUFFER, null);
  };
})(ChemDoodle.structures.d3, ChemDoodle.math, document);
(function (e, p, n, r) {
  p.SSAO = function () {};
  e = p.SSAO.prototype;
  e.initSampleKernel = function (d) {
    let e = [];
    for (let c = 0; c < d; c++) {
      let h = 2 * n.random() - 1,
        a = 2 * n.random() - 1,
        g = 2 * n.random() - 1;
      var b = c / d;
      b = 0.1 + b * b * 0.9;
      h *= b;
      a *= b;
      g *= b;
      e.push(h, a, g);
    }
    this.sampleKernel = new Float32Array(e);
  };
  e.initNoiseTexture = function (d) {
    let e = [];
    for (let b = 0; 16 > b; b++)
      e.push(2 * n.random() - 1), e.push(2 * n.random() - 1), e.push(0);
    this.noiseTexture = d.createTexture();
    d.bindTexture(d.TEXTURE_2D, this.noiseTexture);
    d.texImage2D(
      d.TEXTURE_2D,
      0,
      d.RGB,
      4,
      4,
      0,
      d.RGB,
      d.FLOAT,
      new Float32Array(e)
    );
    d.texParameteri(d.TEXTURE_2D, d.TEXTURE_MIN_FILTER, d.NEAREST);
    d.texParameteri(d.TEXTURE_2D, d.TEXTURE_MAG_FILTER, d.NEAREST);
    d.texParameteri(d.TEXTURE_2D, d.TEXTURE_WRAP_S, d.REPEAT);
    d.texParameteri(d.TEXTURE_2D, d.TEXTURE_WRAP_T, d.REPEAT);
    d.bindTexture(d.TEXTURE_2D, null);
  };
})(ChemDoodle.math, ChemDoodle.structures.d3, Math);
(function (e, p, n, r) {
  e.Texture = function () {};
  e = e.Texture.prototype;
  e.init = function (d, e, b, c) {
    this.texture = d.createTexture();
    this.type = e;
    this.internalFormat = b;
    this.format = c !== r ? c : b;
    d.bindTexture(d.TEXTURE_2D, this.texture);
    d.texParameteri(d.TEXTURE_2D, d.TEXTURE_MAG_FILTER, d.NEAREST);
    d.texParameteri(d.TEXTURE_2D, d.TEXTURE_MIN_FILTER, d.NEAREST);
    d.texParameteri(d.TEXTURE_2D, d.TEXTURE_WRAP_S, d.CLAMP_TO_EDGE);
    d.texParameteri(d.TEXTURE_2D, d.TEXTURE_WRAP_T, d.CLAMP_TO_EDGE);
    d.bindTexture(d.TEXTURE_2D, null);
  };
  e.setParameter = function (d, e, b) {
    this.width = e;
    this.height = b;
    d.bindTexture(d.TEXTURE_2D, this.texture);
    d.texImage2D(
      d.TEXTURE_2D,
      0,
      this.internalFormat,
      this.width,
      this.height,
      0,
      this.format,
      this.type,
      null
    );
    d.bindTexture(d.TEXTURE_2D, null);
  };
})(ChemDoodle.structures.d3, ChemDoodle.math, document);
(function (e, p, n, r, d) {
  e._Shader = function () {};
  e = e._Shader.prototype;
  e.useShaderProgram = function (d) {
    d.useProgram(this.gProgram);
    d.shader = this;
  };
  e.init = function (d) {
    let b = this.getShader(d, "vertex-shader");
    b || (b = this.loadDefaultVertexShader(d));
    let c = this.getShader(d, "fragment-shader");
    c || (c = this.loadDefaultFragmentShader(d));
    this.gProgram = d.createProgram();
    d.attachShader(this.gProgram, b);
    d.attachShader(this.gProgram, c);
    this.onShaderAttached(d);
    d.linkProgram(this.gProgram);
    d.getProgramParameter(this.gProgram, d.LINK_STATUS) ||
      alert(
        "Could not initialize shaders: " + d.getProgramInfoLog(this.gProgram)
      );
    d.useProgram(this.gProgram);
    this.initUniformLocations(d);
    d.useProgram(null);
  };
  e.onShaderAttached = function (d) {
    this.vertexPositionAttribute = 0;
    this.vertexNormalAttribute = 1;
    d.bindAttribLocation(
      this.gProgram,
      this.vertexPositionAttribute,
      "a_vertex_position"
    );
    d.bindAttribLocation(
      this.gProgram,
      this.vertexNormalAttribute,
      "a_vertex_normal"
    );
  };
  e.getShaderFromStr = function (e, b, c) {
    b = e.createShader(b);
    e.shaderSource(b, c);
    e.compileShader(b);
    return e.getShaderParameter(b, e.COMPILE_STATUS)
      ? b
      : (alert(shaderScript.type + " " + e.getShaderInfoLog(b)),
        e.deleteShader(b),
        d);
  };
  e.enableAttribsArray = function (d) {
    d.enableVertexAttribArray(this.vertexPositionAttribute);
  };
  e.disableAttribsArray = function (d) {
    d.disableVertexAttribArray(this.vertexPositionAttribute);
  };
  e.getShader = function (e, b) {
    b = r.getElementById(b);
    if (!b) return d;
    var c = [];
    let h = b.firstChild;
    for (; h; ) 3 === h.nodeType && c.push(h.textContent), (h = h.nextSibling);
    c = c.join("");
    if ("x-shader/x-fragment" === b.type)
      e = this.getShaderFromStr(e, e.FRAGMENT_SHADER, c);
    else if ("x-shader/x-vertex" === b.type)
      e = this.getShaderFromStr(e, e.VERTEX_SHADER, c);
    else return d;
    return e;
  };
  e.initUniformLocations = function (d) {
    this.modelViewMatrixUniform = d.getUniformLocation(
      this.gProgram,
      "u_model_view_matrix"
    );
    this.projectionMatrixUniform = d.getUniformLocation(
      this.gProgram,
      "u_projection_matrix"
    );
  };
  e.loadDefaultVertexShader = function (d) {};
  e.loadDefaultFragmentShader = function (d) {};
  e.setMatrixUniforms = function (e, b) {
    b === d
      ? this.setModelViewMatrix(e, e.modelViewMatrix)
      : this.setModelViewMatrix(e, n.multiply(e.modelViewMatrix, b, []));
  };
  e.setProjectionMatrix = function (d, b) {
    d.uniformMatrix4fv(this.projectionMatrixUniform, !1, b);
  };
  e.setModelViewMatrix = function (d, b) {
    d.uniformMatrix4fv(this.modelViewMatrixUniform, !1, b);
  };
  e.setMaterialAmbientColor = function (d, b) {};
  e.setMaterialDiffuseColor = function (d, b) {};
  e.setMaterialSpecularColor = function (d, b) {};
  e.setMaterialShininess = function (d, b) {};
  e.setMaterialAlpha = function (d, b) {};
})(
  ChemDoodle.structures.d3,
  ChemDoodle.lib.mat3,
  ChemDoodle.lib.mat4,
  document
);
(function (e, p, n, r, d) {
  e.FXAAShader = function () {};
  let k = e._Shader.prototype;
  e = e.FXAAShader.prototype = new e._Shader();
  e.initUniformLocations = function (b) {
    k.initUniformLocations.call(this, b);
    this.buffersizeUniform = b.getUniformLocation(
      this.gProgram,
      "u_buffersize"
    );
    this.antialiasUniform = b.getUniformLocation(this.gProgram, "u_antialias");
    this.edgeThresholdUniform = b.getUniformLocation(
      this.gProgram,
      "u_edge_threshold"
    );
    this.edgeThresholdMinUniform = b.getUniformLocation(
      this.gProgram,
      "u_edge_threshold_min"
    );
    this.searchStepsUniform = b.getUniformLocation(
      this.gProgram,
      "u_search_steps"
    );
    this.searchThresholdUniform = b.getUniformLocation(
      this.gProgram,
      "u_search_threshold"
    );
    this.subpixCapUniform = b.getUniformLocation(this.gProgram, "u_subpix_cap");
    this.subpixTrimUniform = b.getUniformLocation(
      this.gProgram,
      "u_subpix_trim"
    );
  };
  e.setBuffersize = function (b, c, d) {
    b.uniform2f(this.buffersizeUniform, c, d);
  };
  e.setAntialias = function (b, c) {
    b.uniform1f(this.antialiasUniform, c);
  };
  e.setEdgeThreshold = function (b, c) {
    b.uniform1f(this.edgeThresholdUniform, c);
  };
  e.setEdgeThresholdMin = function (b, c) {
    b.uniform1f(this.edgeThresholdMinUniform, c);
  };
  e.setSearchSteps = function (b, c) {
    b.uniform1i(this.searchStepsUniform, c);
  };
  e.setSearchThreshold = function (b, c) {
    b.uniform1f(this.searchThresholdUniform, c);
  };
  e.setSubpixCap = function (b, c) {
    b.uniform1f(this.subpixCapUniform, c);
  };
  e.setSubpixTrim = function (b, c) {
    b.uniform1f(this.subpixTrimUniform, c);
  };
  e.loadDefaultVertexShader = function (b) {
    return this.getShaderFromStr(
      b,
      b.VERTEX_SHADER,
      "precision mediump float;attribute vec3 a_vertex_position;varying vec2 v_texcoord;void main() {gl_Position \x3d vec4(a_vertex_position, 1.);v_texcoord \x3d a_vertex_position.xy * .5 + .5;}"
    );
  };
  e.loadDefaultFragmentShader = function (b) {
    return this.getShaderFromStr(
      b,
      b.FRAGMENT_SHADER,
      "precision mediump float;\nconst int fxaaMaxSearchSteps \x3d 128;\nuniform float u_edge_threshold;\nuniform float u_edge_threshold_min;\nuniform int u_search_steps;\nuniform float u_search_threshold;\nuniform float u_subpix_cap;\nuniform float u_subpix_trim;\nuniform sampler2D u_sampler0;\nuniform vec2 u_buffersize;\nuniform bool u_antialias;\nvarying vec2 v_texcoord;\nfloat FxaaLuma(vec3 rgb) {\nreturn rgb.y * (0.587/0.299) + rgb.x;\n}\nvec3 FxaaLerp3(vec3 a, vec3 b, float amountOfA) {\nreturn (vec3(-amountOfA) * b) + ((a * vec3(amountOfA)) + b);\n}\nvec4 FxaaTexOff(sampler2D tex, vec2 pos, vec2 off, vec2 rcpFrame) {\nreturn texture2D(tex, pos + off * rcpFrame);\n}\nvec3 FxaaPixelShader(vec2 pos, sampler2D tex, vec2 rcpFrame) {\nfloat subpix_trim_scale \x3d (1.0/(1.0 - u_subpix_trim));\nvec3 rgbN \x3d FxaaTexOff(tex, pos.xy, vec2( 0.,-1.), rcpFrame).xyz;\nvec3 rgbW \x3d FxaaTexOff(tex, pos.xy, vec2(-1., 0.), rcpFrame).xyz;\nvec3 rgbM \x3d FxaaTexOff(tex, pos.xy, vec2( 0., 0.), rcpFrame).xyz;\nvec3 rgbE \x3d FxaaTexOff(tex, pos.xy, vec2( 1., 0.), rcpFrame).xyz;\nvec3 rgbS \x3d FxaaTexOff(tex, pos.xy, vec2( 0., 1.), rcpFrame).xyz;\nfloat lumaN \x3d FxaaLuma(rgbN);\nfloat lumaW \x3d FxaaLuma(rgbW);\nfloat lumaM \x3d FxaaLuma(rgbM);\nfloat lumaE \x3d FxaaLuma(rgbE);\nfloat lumaS \x3d FxaaLuma(rgbS);\nfloat rangeMin \x3d min(lumaM, min(min(lumaN, lumaW), min(lumaS, lumaE)));\nfloat rangeMax \x3d max(lumaM, max(max(lumaN, lumaW), max(lumaS, lumaE)));\nfloat range \x3d rangeMax - rangeMin;\nif(range \x3c max(u_edge_threshold_min, rangeMax * u_edge_threshold)) {\nreturn rgbM;\n}\nvec3 rgbL \x3d rgbN + rgbW + rgbM + rgbE + rgbS;\nfloat lumaL \x3d (lumaN + lumaW + lumaE + lumaS) * 0.25;\nfloat rangeL \x3d abs(lumaL - lumaM);\nfloat blendL \x3d max(0.0, (rangeL / range) - u_subpix_trim) * subpix_trim_scale;\nblendL \x3d min(u_subpix_cap, blendL);\nvec3 rgbNW \x3d FxaaTexOff(tex, pos.xy, vec2(-1.,-1.), rcpFrame).xyz;\nvec3 rgbNE \x3d FxaaTexOff(tex, pos.xy, vec2( 1.,-1.), rcpFrame).xyz;\nvec3 rgbSW \x3d FxaaTexOff(tex, pos.xy, vec2(-1., 1.), rcpFrame).xyz;\nvec3 rgbSE \x3d FxaaTexOff(tex, pos.xy, vec2( 1., 1.), rcpFrame).xyz;\nrgbL +\x3d (rgbNW + rgbNE + rgbSW + rgbSE);\nrgbL *\x3d vec3(1.0/9.0);\nfloat lumaNW \x3d FxaaLuma(rgbNW);\nfloat lumaNE \x3d FxaaLuma(rgbNE);\nfloat lumaSW \x3d FxaaLuma(rgbSW);\nfloat lumaSE \x3d FxaaLuma(rgbSE);\nfloat edgeVert \x3d\nabs((0.25 * lumaNW) + (-0.5 * lumaN) + (0.25 * lumaNE)) +\nabs((0.50 * lumaW ) + (-1.0 * lumaM) + (0.50 * lumaE )) +\nabs((0.25 * lumaSW) + (-0.5 * lumaS) + (0.25 * lumaSE));\nfloat edgeHorz \x3d\nabs((0.25 * lumaNW) + (-0.5 * lumaW) + (0.25 * lumaSW)) +\nabs((0.50 * lumaN ) + (-1.0 * lumaM) + (0.50 * lumaS )) +\nabs((0.25 * lumaNE) + (-0.5 * lumaE) + (0.25 * lumaSE));\nbool horzSpan \x3d edgeHorz \x3e\x3d edgeVert;\nfloat lengthSign \x3d horzSpan ? -rcpFrame.y : -rcpFrame.x;\nif(!horzSpan) {\nlumaN \x3d lumaW;\nlumaS \x3d lumaE;\n}\nfloat gradientN \x3d abs(lumaN - lumaM);\nfloat gradientS \x3d abs(lumaS - lumaM);\nlumaN \x3d (lumaN + lumaM) * 0.5;\nlumaS \x3d (lumaS + lumaM) * 0.5;\nif (gradientN \x3c gradientS) {\nlumaN \x3d lumaS;\nlumaN \x3d lumaS;\ngradientN \x3d gradientS;\nlengthSign *\x3d -1.0;\n}\nvec2 posN;\nposN.x \x3d pos.x + (horzSpan ? 0.0 : lengthSign * 0.5);\nposN.y \x3d pos.y + (horzSpan ? lengthSign * 0.5 : 0.0);\ngradientN *\x3d u_search_threshold;\nvec2 posP \x3d posN;\nvec2 offNP \x3d horzSpan ? vec2(rcpFrame.x, 0.0) : vec2(0.0, rcpFrame.y);\nfloat lumaEndN \x3d lumaN;\nfloat lumaEndP \x3d lumaN;\nbool doneN \x3d false;\nbool doneP \x3d false;\nposN +\x3d offNP * vec2(-1.0, -1.0);\nposP +\x3d offNP * vec2( 1.0,  1.0);\nfor(int i \x3d 0; i \x3c fxaaMaxSearchSteps; i++) {\nif(i \x3e\x3d u_search_steps) break;\nif(!doneN) {\nlumaEndN \x3d FxaaLuma(texture2D(tex, posN.xy).xyz);\n}\nif(!doneP) {\nlumaEndP \x3d FxaaLuma(texture2D(tex, posP.xy).xyz);\n}\ndoneN \x3d doneN || (abs(lumaEndN - lumaN) \x3e\x3d gradientN);\ndoneP \x3d doneP || (abs(lumaEndP - lumaN) \x3e\x3d gradientN);\nif(doneN \x26\x26 doneP) {\nbreak;\n}\nif(!doneN) {\nposN -\x3d offNP;\n}\nif(!doneP) {\nposP +\x3d offNP;\n}\n}\nfloat dstN \x3d horzSpan ? pos.x - posN.x : pos.y - posN.y;\nfloat dstP \x3d horzSpan ? posP.x - pos.x : posP.y - pos.y;\nbool directionN \x3d dstN \x3c dstP;\nlumaEndN \x3d directionN ? lumaEndN : lumaEndP;\nif(((lumaM - lumaN) \x3c 0.0) \x3d\x3d ((lumaEndN - lumaN) \x3c 0.0)) {\nlengthSign \x3d 0.0;\n}\nfloat spanLength \x3d (dstP + dstN);\ndstN \x3d directionN ? dstN : dstP;\nfloat subPixelOffset \x3d (0.5 + (dstN * (-1.0/spanLength))) * lengthSign;\nvec3 rgbF \x3d texture2D(tex, vec2(\npos.x + (horzSpan ? 0.0 : subPixelOffset),\npos.y + (horzSpan ? subPixelOffset : 0.0))).xyz;\nreturn FxaaLerp3(rgbL, rgbF, blendL);\n}\nvoid main() {\ngl_FragColor \x3d texture2D(u_sampler0, v_texcoord);\nif(u_antialias) {\ngl_FragColor.xyz \x3d FxaaPixelShader(v_texcoord, u_sampler0, 1. / u_buffersize).xyz;\n}\n}"
    );
  };
})(
  ChemDoodle.structures.d3,
  ChemDoodle.lib.mat3,
  ChemDoodle.lib.mat4,
  document
);
(function (e, p, n, r, d) {
  e.LabelShader = function () {};
  let k = e._Shader.prototype;
  e = e.LabelShader.prototype = new e._Shader();
  e.initUniformLocations = function (b) {
    k.initUniformLocations.call(this, b);
    this.dimensionUniform = b.getUniformLocation(this.gProgram, "u_dimension");
  };
  e.onShaderAttached = function (b) {
    k.onShaderAttached.call(this, b);
    this.vertexTexCoordAttribute = 2;
    b.bindAttribLocation(
      this.gProgram,
      this.vertexTexCoordAttribute,
      "a_vertex_texcoord"
    );
  };
  e.loadDefaultVertexShader = function (b) {
    return this.getShaderFromStr(
      b,
      b.VERTEX_SHADER,
      "precision mediump float;attribute vec3 a_vertex_position;attribute vec3 a_vertex_normal;attribute vec2 a_vertex_texcoord;uniform mat4 u_model_view_matrix;uniform mat4 u_projection_matrix;uniform vec2 u_dimension;varying vec2 v_texcoord;void main() {gl_Position \x3d u_model_view_matrix * vec4(a_vertex_position, 1.);vec4 depth_pos \x3d vec4(gl_Position);depth_pos.z +\x3d a_vertex_normal.z;gl_Position \x3d u_projection_matrix * gl_Position;depth_pos \x3d u_projection_matrix * depth_pos;gl_Position /\x3d gl_Position.w;gl_Position.xy +\x3d a_vertex_normal.xy / u_dimension * 2.;gl_Position.z \x3d depth_pos.z / depth_pos.w;v_texcoord \x3d a_vertex_texcoord;}"
    );
  };
  e.loadDefaultFragmentShader = function (b) {
    let c = [
      b.depthTextureExt ? "#define CWC_DEPTH_TEX\n" : "",
      "precision mediump float;uniform sampler2D u_image;varying vec2 v_texcoord;void main(void) {gl_FragColor \x3d texture2D(u_image, v_texcoord);}",
    ].join("");
    return this.getShaderFromStr(b, b.FRAGMENT_SHADER, c);
  };
  e.enableAttribsArray = function (b) {
    k.enableAttribsArray.call(this, b);
    b.enableVertexAttribArray(this.vertexNormalAttribute);
    b.enableVertexAttribArray(this.vertexTexCoordAttribute);
  };
  e.disableAttribsArray = function (b) {
    k.disableAttribsArray.call(this, b);
    b.disableVertexAttribArray(this.vertexNormalAttribute);
    b.disableVertexAttribArray(this.vertexTexCoordAttribute);
  };
  e.setDimension = function (b, c, d) {
    b.uniform2f(this.dimensionUniform, c, d);
  };
})(
  ChemDoodle.structures.d3,
  ChemDoodle.lib.mat3,
  ChemDoodle.lib.mat4,
  document
);
(function (e, p, n, r, d) {
  e.LightingShader = function () {};
  let k = e._Shader.prototype;
  e = e.LightingShader.prototype = new e._Shader();
  e.initUniformLocations = function (b) {
    k.initUniformLocations.call(this, b);
    this.positionSampleUniform = b.getUniformLocation(
      this.gProgram,
      "u_position_sample"
    );
    this.colorSampleUniform = b.getUniformLocation(
      this.gProgram,
      "u_color_sample"
    );
    this.ssaoSampleUniform = b.getUniformLocation(
      this.gProgram,
      "u_ssao_sample"
    );
    this.outlineSampleUniform = b.getUniformLocation(
      this.gProgram,
      "u_outline_sample"
    );
  };
  e.loadDefaultVertexShader = function (b) {
    return this.getShaderFromStr(
      b,
      b.VERTEX_SHADER,
      "precision mediump float;attribute vec3 a_vertex_position;varying vec2 v_texcoord;void main() {gl_Position \x3d vec4(a_vertex_position, 1.);v_texcoord \x3d a_vertex_position.xy * .5 + .5;}"
    );
  };
  e.loadDefaultFragmentShader = function (b) {
    return this.getShaderFromStr(
      b,
      b.FRAGMENT_SHADER,
      "precision mediump float;uniform sampler2D u_position_sample;uniform sampler2D u_color_sample;uniform sampler2D u_ssao_sample;uniform sampler2D u_outline_sample;varying vec2 v_texcoord;void main() {vec4 position \x3d texture2D(u_position_sample, v_texcoord);vec4 color \x3d texture2D(u_color_sample, v_texcoord);vec4 ao \x3d texture2D(u_ssao_sample, v_texcoord);float outline \x3d texture2D(u_outline_sample, v_texcoord).r;if(position.w \x3d\x3d 0. \x26\x26 outline \x3d\x3d 1.) {return;}gl_FragColor \x3d vec4(color.rgb * ao.r * outline, 1.);}"
    );
  };
})(
  ChemDoodle.structures.d3,
  ChemDoodle.lib.mat3,
  ChemDoodle.lib.mat4,
  document
);
(function (e, p, n, r, d) {
  e.NormalShader = function () {};
  let k = e._Shader.prototype;
  e = e.NormalShader.prototype = new e._Shader();
  e.initUniformLocations = function (b) {
    k.initUniformLocations.call(this, b);
    this.normalMatrixUniform = b.getUniformLocation(
      this.gProgram,
      "u_normal_matrix"
    );
  };
  e.loadDefaultVertexShader = function (b) {
    return this.getShaderFromStr(
      b,
      b.VERTEX_SHADER,
      "precision mediump float;attribute vec3 a_vertex_position;attribute vec3 a_vertex_normal;uniform mat4 u_model_view_matrix;uniform mat4 u_projection_matrix;uniform mat3 u_normal_matrix;varying vec3 v_normal;void main() {v_normal \x3d length(a_vertex_normal)\x3d\x3d0. ? a_vertex_normal : u_normal_matrix * a_vertex_normal;gl_Position \x3d u_projection_matrix * u_model_view_matrix * vec4(a_vertex_position, 1.);}"
    );
  };
  e.loadDefaultFragmentShader = function (b) {
    return this.getShaderFromStr(
      b,
      b.FRAGMENT_SHADER,
      "precision mediump float;varying vec3 v_normal;void main(void) {vec3 normal \x3d length(v_normal)\x3d\x3d0. ? vec3(0., 0., 1.) : normalize(v_normal);gl_FragColor \x3d vec4(normal, 0.);}"
    );
  };
  e.enableAttribsArray = function (b) {
    k.enableAttribsArray.call(this, b);
    b.enableVertexAttribArray(this.vertexNormalAttribute);
  };
  e.disableAttribsArray = function (b) {
    k.disableAttribsArray.call(this, b);
    b.disableVertexAttribArray(this.vertexNormalAttribute);
  };
  e.setModelViewMatrix = function (b, c) {
    k.setModelViewMatrix.call(this, b, c);
    c = p.transpose(n.toInverseMat3(c, []));
    b.uniformMatrix3fv(this.normalMatrixUniform, !1, c);
  };
})(
  ChemDoodle.structures.d3,
  ChemDoodle.lib.mat3,
  ChemDoodle.lib.mat4,
  document
);
(function (e, p, n, r, d) {
  e.OutlineShader = function () {};
  let k = e._Shader.prototype;
  e = e.OutlineShader.prototype = new e._Shader();
  e.initUniformLocations = function (b) {
    k.initUniformLocations.call(this, b);
    this.normalSampleUniform = b.getUniformLocation(
      this.gProgram,
      "u_normal_sample"
    );
    this.depthSampleUniform = b.getUniformLocation(
      this.gProgram,
      "u_depth_sample"
    );
    this.gbufferTextureSizeUniform = b.getUniformLocation(
      this.gProgram,
      "u_gbuffer_texture_size"
    );
    this.normalThresholdUniform = b.getUniformLocation(
      this.gProgram,
      "u_normal_threshold"
    );
    this.depthThresholdUniform = b.getUniformLocation(
      this.gProgram,
      "u_depth_threshold"
    );
    this.thicknessUniform = b.getUniformLocation(this.gProgram, "u_thickness");
  };
  e.loadDefaultVertexShader = function (b) {
    return this.getShaderFromStr(
      b,
      b.VERTEX_SHADER,
      "precision mediump float;attribute vec3 a_vertex_position;varying vec2 v_texcoord;void main() {gl_Position \x3d vec4(a_vertex_position, 1.);v_texcoord \x3d a_vertex_position.xy * .5 + .5;}"
    );
  };
  e.loadDefaultFragmentShader = function (b) {
    return this.getShaderFromStr(
      b,
      b.FRAGMENT_SHADER,
      "precision mediump float;uniform sampler2D u_normal_sample;uniform sampler2D u_depth_sample;uniform float u_normal_threshold;uniform float u_depth_threshold;uniform float u_thickness;uniform vec2 u_gbuffer_texture_size;varying vec2 v_texcoord;void main() {vec3 normal \x3d texture2D(u_normal_sample, v_texcoord).xyz;float depth \x3d texture2D(u_depth_sample, v_texcoord).r;vec2 texelSize \x3d u_thickness/u_gbuffer_texture_size * .5;vec2 offsets[8];offsets[0] \x3d vec2(-texelSize.x, -texelSize.y);offsets[1] \x3d vec2(-texelSize.x, 0);offsets[2] \x3d vec2(-texelSize.x, texelSize.y);offsets[3] \x3d vec2(0, -texelSize.y);offsets[4] \x3d vec2(0,  texelSize.y);offsets[5] \x3d vec2(texelSize.x, -texelSize.y);offsets[6] \x3d vec2(texelSize.x, 0);offsets[7] \x3d vec2(texelSize.x, texelSize.y);float edge \x3d 0.;for (int i \x3d 0; i \x3c 8; i++) {vec3 sampleNorm \x3d texture2D(u_normal_sample, v_texcoord + offsets[i]).xyz;if(normal \x3d\x3d vec3(.0, .0, .0)) {if(sampleNorm !\x3d vec3(.0, .0, .0)) {edge \x3d 1.0;break;}continue;}if (dot(sampleNorm, normal) \x3c u_normal_threshold) {edge \x3d 1.0;break;}float sampleDepth \x3d texture2D(u_depth_sample, v_texcoord + offsets[i]).r;if (abs(sampleDepth - depth) \x3e u_depth_threshold) {edge \x3d 1.0;break;}}edge \x3d 1. - edge;gl_FragColor \x3d vec4(edge, edge, edge, 1.);}"
    );
  };
  e.setGbufferTextureSize = function (b, c, d) {
    b.uniform2f(this.gbufferTextureSizeUniform, c, d);
  };
  e.setNormalThreshold = function (b, c) {
    b.uniform1f(this.normalThresholdUniform, c);
  };
  e.setDepthThreshold = function (b, c) {
    b.uniform1f(this.depthThresholdUniform, c);
  };
  e.setThickness = function (b, c) {
    b.uniform1f(this.thicknessUniform, c);
  };
})(
  ChemDoodle.structures.d3,
  ChemDoodle.lib.mat3,
  ChemDoodle.lib.mat4,
  document
);
(function (e, p, n, r, d) {
  e.PhongShader = function () {};
  let k = e._Shader.prototype;
  e = e.PhongShader.prototype = new e._Shader();
  e.initUniformLocations = function (b) {
    k.initUniformLocations.call(this, b);
    this.shadowUniform = b.getUniformLocation(this.gProgram, "u_shadow");
    this.flatColorUniform = b.getUniformLocation(this.gProgram, "u_flat_color");
    this.normalMatrixUniform = b.getUniformLocation(
      this.gProgram,
      "u_normal_matrix"
    );
    this.lightModelViewMatrixUniform = b.getUniformLocation(
      this.gProgram,
      "u_light_model_view_matrix"
    );
    this.lightProjectionMatrixUniform = b.getUniformLocation(
      this.gProgram,
      "u_light_projection_matrix"
    );
    this.lightDiffuseColorUniform = b.getUniformLocation(
      this.gProgram,
      "u_light_diffuse_color"
    );
    this.lightSpecularColorUniform = b.getUniformLocation(
      this.gProgram,
      "u_light_specular_color"
    );
    this.lightDirectionUniform = b.getUniformLocation(
      this.gProgram,
      "u_light_direction"
    );
    this.materialAmbientColorUniform = b.getUniformLocation(
      this.gProgram,
      "u_material_ambient_color"
    );
    this.materialDiffuseColorUniform = b.getUniformLocation(
      this.gProgram,
      "u_material_diffuse_color"
    );
    this.materialSpecularColorUniform = b.getUniformLocation(
      this.gProgram,
      "u_material_specular_color"
    );
    this.materialShininessUniform = b.getUniformLocation(
      this.gProgram,
      "u_material_shininess"
    );
    this.materialAlphaUniform = b.getUniformLocation(
      this.gProgram,
      "u_material_alpha"
    );
    this.fogModeUniform = b.getUniformLocation(this.gProgram, "u_fog_mode");
    this.fogColorUniform = b.getUniformLocation(this.gProgram, "u_fog_color");
    this.fogStartUniform = b.getUniformLocation(this.gProgram, "u_fog_start");
    this.fogEndUniform = b.getUniformLocation(this.gProgram, "u_fog_end");
    this.fogDensityUniform = b.getUniformLocation(
      this.gProgram,
      "u_fog_density"
    );
    this.shadowDepthSampleUniform = b.getUniformLocation(
      this.gProgram,
      "u_shadow_depth_sample"
    );
    this.shadowTextureSizeUniform = b.getUniformLocation(
      this.gProgram,
      "u_shadow_texture_size"
    );
    this.shadowIntensityUniform = b.getUniformLocation(
      this.gProgram,
      "u_shadow_intensity"
    );
    this.gammaCorrectionUniform = b.getUniformLocation(
      this.gProgram,
      "u_gamma_inverted"
    );
    this.pointSizeUniform = b.getUniformLocation(this.gProgram, "u_point_size");
  };
  e.loadDefaultVertexShader = function (b) {
    return this.getShaderFromStr(
      b,
      b.VERTEX_SHADER,
      "precision mediump float;attribute vec3 a_vertex_position;attribute vec3 a_vertex_normal;uniform vec3 u_light_diffuse_color;uniform vec3 u_material_ambient_color;uniform vec3 u_material_diffuse_color;uniform mat4 u_model_view_matrix;uniform mat4 u_projection_matrix;uniform mat3 u_normal_matrix;uniform mat4 u_light_model_view_matrix;uniform mat4 u_light_projection_matrix;uniform bool u_shadow;varying vec3 v_viewpos;varying vec4 v_shadcoord;varying vec3 v_diffuse;varying vec3 v_ambient;varying vec3 v_normal;uniform float u_point_size;void main() {v_normal \x3d length(a_vertex_normal)\x3d\x3d0. ? a_vertex_normal : u_normal_matrix * a_vertex_normal;v_ambient \x3d u_material_ambient_color;v_diffuse \x3d u_material_diffuse_color * u_light_diffuse_color;if(u_shadow) {v_shadcoord \x3d u_light_projection_matrix * u_light_model_view_matrix * vec4(a_vertex_position, 1.);v_shadcoord /\x3d v_shadcoord.w;}vec4 viewPos \x3d u_model_view_matrix * vec4(a_vertex_position, 1.);v_viewpos \x3d viewPos.xyz / viewPos.w;gl_Position \x3d u_projection_matrix * viewPos;gl_Position /\x3d gl_Position.w;gl_PointSize \x3d u_point_size;}"
    );
  };
  e.loadDefaultFragmentShader = function (b) {
    let c = [
      b.depthTextureExt ? "#define CWC_DEPTH_TEX\n" : "",
      "precision mediump float;uniform vec3 u_light_specular_color;uniform vec3 u_light_direction;uniform vec3 u_material_specular_color;uniform float u_material_shininess;uniform float u_material_alpha;uniform int u_fog_mode;uniform vec3 u_fog_color;uniform float u_fog_density;uniform float u_fog_start;uniform float u_fog_end;uniform bool u_shadow;uniform float u_shadow_intensity;uniform bool u_flat_color;uniform float u_gamma_inverted;uniform sampler2D u_shadow_depth_sample;uniform vec2 u_shadow_texture_size;varying vec3 v_viewpos;varying vec4 v_shadcoord;varying vec3 v_diffuse;varying vec3 v_ambient;varying vec3 v_normal;\n#ifndef CWC_DEPTH_TEX\nfloat unpack (vec4 colour) {const vec4 bitShifts \x3d vec4(1.,1. / 255.,1. / (255. * 255.),1. / (255. * 255. * 255.));return dot(colour, bitShifts);}\n#endif\nfloat shadowMapDepth(vec4 shadowMapColor) {float zShadowMap;\n#ifdef CWC_DEPTH_TEX\nzShadowMap \x3d shadowMapColor.r;\n#else\nzShadowMap \x3d unpack(shadowMapColor);\n#endif\nreturn zShadowMap;}void main(void) {vec3 color \x3d v_diffuse;if(length(v_normal)!\x3d0.){vec3 normal \x3d normalize(v_normal);vec3 lightDir \x3d normalize(-u_light_direction);float nDotL \x3d dot(normal, lightDir);float shadow \x3d 0.0;if(u_shadow) {vec3 depthCoord \x3d .5 + v_shadcoord.xyz / v_shadcoord.w * .5;if(depthCoord.z \x3c\x3d 1. \x26\x26 depthCoord.z \x3e\x3d 0.) {float bias \x3d max(.05 * (1. - nDotL), .005);vec2 texelSize \x3d 1. / u_shadow_texture_size;for(int x \x3d -1; x \x3c\x3d 1; ++x) {for(int y \x3d -1; y \x3c\x3d 1; ++y)  {vec4 shadowMapColor \x3d texture2D(u_shadow_depth_sample, depthCoord.xy + vec2(x, y) * texelSize);float zShadowMap \x3d shadowMapDepth(shadowMapColor);shadow +\x3d zShadowMap + bias \x3c depthCoord.z ? 1. : 0.;}}shadow /\x3d 9.;shadow *\x3d u_shadow_intensity;}}if(!u_flat_color) {vec3 viewDir \x3d normalize(-v_viewpos);vec3 halfDir \x3d normalize(lightDir + viewDir);float nDotHV \x3d max(dot(halfDir, normal), 0.);vec3 specular \x3d u_material_specular_color * u_light_specular_color;color*\x3dmax(nDotL, 0.);color+\x3dspecular * pow(nDotHV, u_material_shininess);}color \x3d (1.-shadow)*color+v_ambient;}gl_FragColor \x3d vec4(pow(color, vec3(u_gamma_inverted)), u_material_alpha);if(u_fog_mode !\x3d 0){float fogCoord \x3d 1.-clamp((u_fog_end - gl_FragCoord.z/gl_FragCoord.w) / (u_fog_end - u_fog_start), 0., 1.);float fogFactor \x3d 1.;if(u_fog_mode \x3d\x3d 1){fogFactor \x3d 1.-fogCoord;}else if(u_fog_mode \x3d\x3d 2) {fogFactor \x3d clamp(exp(-u_fog_density*fogCoord), 0., 1.);}else if(u_fog_mode \x3d\x3d 3) {fogFactor \x3d clamp(exp(-pow(u_fog_density*fogCoord, 2.)), 0., 1.);}gl_FragColor \x3d mix(vec4(u_fog_color, 1.), gl_FragColor, fogFactor);}}",
    ].join("");
    return this.getShaderFromStr(b, b.FRAGMENT_SHADER, c);
  };
  e.enableAttribsArray = function (b) {
    k.enableAttribsArray.call(this, b);
    b.enableVertexAttribArray(this.vertexNormalAttribute);
  };
  e.disableAttribsArray = function (b) {
    k.disableAttribsArray.call(this, b);
    b.disableVertexAttribArray(this.vertexNormalAttribute);
  };
  e.setMatrixUniforms = function (b, c) {
    if (c === d)
      this.setModelViewMatrix(b, b.modelViewMatrix),
        this.setLightModelViewMatrix(b, b.lightViewMatrix);
    else {
      let d = n.multiply(b.modelViewMatrix, c, []);
      c = n.multiply(b.lightViewMatrix, c, []);
      this.setModelViewMatrix(b, d);
      this.setLightModelViewMatrix(b, c);
    }
  };
  e.setModelViewMatrix = function (b, c) {
    k.setModelViewMatrix.call(this, b, c);
    c = p.transpose(n.toInverseMat3(c, []));
    b.uniformMatrix3fv(this.normalMatrixUniform, !1, c);
  };
  e.setFlatColor = function (b, c) {
    b.uniform1i(this.flatColorUniform, c);
  };
  e.setShadow = function (b, c) {
    b.uniform1i(this.shadowUniform, c);
  };
  e.setFogMode = function (b, c) {
    b.uniform1i(this.fogModeUniform, c);
  };
  e.setFogColor = function (b, c) {
    b.uniform3fv(this.fogColorUniform, c);
  };
  e.setFogStart = function (b, c) {
    b.uniform1f(this.fogStartUniform, c);
  };
  e.setFogEnd = function (b, c) {
    b.uniform1f(this.fogEndUniform, c);
  };
  e.setFogDensity = function (b, c) {
    b.uniform1f(this.fogDensityUniform, c);
  };
  e.setMaterialAmbientColor = function (b, c) {
    b.uniform3fv(this.materialAmbientColorUniform, c);
  };
  e.setMaterialDiffuseColor = function (b, c) {
    b.uniform3fv(this.materialDiffuseColorUniform, c);
  };
  e.setMaterialSpecularColor = function (b, c) {
    b.uniform3fv(this.materialSpecularColorUniform, c);
  };
  e.setMaterialShininess = function (b, c) {
    b.uniform1f(this.materialShininessUniform, c);
  };
  e.setMaterialAlpha = function (b, c) {
    b.uniform1f(this.materialAlphaUniform, c);
  };
  e.setLightDiffuseColor = function (b, c) {
    b.uniform3fv(this.lightDiffuseColorUniform, c);
  };
  e.setLightSpecularColor = function (b, c) {
    b.uniform3fv(this.lightSpecularColorUniform, c);
  };
  e.setLightDirection = function (b, c) {
    b.uniform3fv(this.lightDirectionUniform, c);
  };
  e.setLightModelViewMatrix = function (b, c) {
    b.uniformMatrix4fv(this.lightModelViewMatrixUniform, !1, c);
  };
  e.setLightProjectionMatrix = function (b, c) {
    b.uniformMatrix4fv(this.lightProjectionMatrixUniform, !1, c);
  };
  e.setShadowTextureSize = function (b, c, d) {
    b.uniform2f(this.shadowTextureSizeUniform, c, d);
  };
  e.setShadowIntensity = function (b, c) {
    b.uniform1f(this.shadowIntensityUniform, c);
  };
  e.setGammaCorrection = function (b, c) {
    b.uniform1f(this.gammaCorrectionUniform, 1 / c);
  };
  e.setPointSize = function (b, c) {
    b.uniform1f(this.pointSizeUniform, c);
  };
})(
  ChemDoodle.structures.d3,
  ChemDoodle.lib.mat3,
  ChemDoodle.lib.mat4,
  document
);
(function (e, p, n, r, d) {
  e.PickShader = function () {};
  let k = e._Shader.prototype;
  e = e.PickShader.prototype = new e._Shader();
  e.initUniformLocations = function (b) {
    k.initUniformLocations.call(this, b);
    this.materialDiffuseColorUniform = b.getUniformLocation(
      this.gProgram,
      "u_material_diffuse_color"
    );
  };
  e.loadDefaultVertexShader = function (b) {
    return this.getShaderFromStr(
      b,
      b.VERTEX_SHADER,
      "precision mediump float;attribute vec3 a_vertex_position;uniform mat4 u_model_view_matrix;uniform mat4 u_projection_matrix;void main() {gl_Position \x3d u_projection_matrix * u_model_view_matrix * vec4(a_vertex_position, 1.);gl_Position /\x3d gl_Position.w;}"
    );
  };
  e.loadDefaultFragmentShader = function (b) {
    let c = [
      b.depthTextureExt ? "#define CWC_DEPTH_TEX\n" : "",
      "precision mediump float;uniform vec3 u_material_diffuse_color;void main(void) {gl_FragColor \x3d vec4(u_material_diffuse_color, 1.);}",
    ].join("");
    return this.getShaderFromStr(b, b.FRAGMENT_SHADER, c);
  };
  e.setMaterialDiffuseColor = function (b, c) {
    b.uniform3fv(this.materialDiffuseColorUniform, c);
  };
})(
  ChemDoodle.structures.d3,
  ChemDoodle.lib.mat3,
  ChemDoodle.lib.mat4,
  document
);
(function (e, p, n, r, d) {
  e.PositionShader = function () {};
  e = e.PositionShader.prototype = new e._Shader();
  e.loadDefaultVertexShader = function (d) {
    return this.getShaderFromStr(
      d,
      d.VERTEX_SHADER,
      "precision mediump float;attribute vec3 a_vertex_position;uniform mat4 u_model_view_matrix;uniform mat4 u_projection_matrix;varying vec4 v_position;void main() {vec4 viewPos \x3d u_model_view_matrix * vec4(a_vertex_position, 1.);gl_Position \x3d u_projection_matrix * viewPos;v_position \x3d viewPos / viewPos.w;}"
    );
  };
  e.loadDefaultFragmentShader = function (d) {
    return this.getShaderFromStr(
      d,
      d.FRAGMENT_SHADER,
      "precision mediump float;varying vec4 v_position;void main(void) {gl_FragColor \x3d v_position;}"
    );
  };
})(
  ChemDoodle.structures.d3,
  ChemDoodle.lib.mat3,
  ChemDoodle.lib.mat4,
  document
);
(function (e, p, n, r, d) {
  e.QuadShader = function () {};
  e = e.QuadShader.prototype = new e._Shader();
  e.loadDefaultVertexShader = function (d) {
    return this.getShaderFromStr(
      d,
      d.VERTEX_SHADER,
      "precision mediump float;attribute vec3 a_vertex_position;varying vec2 v_texcoord;void main() {gl_Position \x3d vec4(a_vertex_position, 1.);v_texcoord \x3d a_vertex_position.xy * .5 + .5;}"
    );
  };
  e.loadDefaultFragmentShader = function (d) {
    return this.getShaderFromStr(
      d,
      d.FRAGMENT_SHADER,
      "precision mediump float;uniform sampler2D u_image;varying vec2 v_texcoord;void main() {gl_FragColor \x3d texture2D(u_image, v_texcoord);}"
    );
  };
})(
  ChemDoodle.structures.d3,
  ChemDoodle.lib.mat3,
  ChemDoodle.lib.mat4,
  document
);
(function (e, p, n, r, d, k, b) {
  function c(a, b, c, d, h, n) {
    c = a[0] * n + c - n;
    d = a[1] * n + d - n;
    a = a[2] * n + h - n;
    h = -1;
    for (let g = 0, e = b.length; g < e; g++)
      if (
        ((n = b[g]),
        0.001 > k.abs(n.x - c) &&
          0.001 > k.abs(n.y - d) &&
          0.001 > k.abs(n.z - a))
      ) {
        h = g;
        break;
      }
    -1 == h && ((h = b.length), b.push(new e.Atom("C", c, d, a)));
    return h;
  }
  let h = function (a, b, c) {
    this.i1 = a;
    this.i2 = b;
    this.i3 = c;
  };
  p._Surface = function () {};
  p = p._Surface.prototype = new p._Mesh();
  p.generate = function (a, b, c, d, e, h, k, n) {
    a = [];
    b = e[4] - d;
    for (c = 0; c < n; c++) {
      let c = e[2] - d;
      for (let g = 0; g < k; g++) {
        let f = e[0] - d;
        for (let g = 0; g < h; g++) a.push(this.calculate(f, c, b)), (f += d);
        c += d;
      }
      b += d;
    }
    return a;
  };
  p.build = function (a, b, l) {
    let g = [],
      m = [],
      n = [];
    var u = [Infinity, -Infinity, Infinity, -Infinity, Infinity, -Infinity];
    b += 2;
    for (let c = 0, f = a.length; c < f; c++) {
      var w = a[c];
      u[0] = k.min(u[0], w.x - b);
      u[1] = k.max(u[1], w.x + b);
      u[2] = k.min(u[2], w.y - b);
      u[3] = k.max(u[3], w.y + b);
      u[4] = k.min(u[4], w.z - b);
      u[5] = k.max(u[5], w.z + b);
    }
    a = u;
    b = a[1] - a[0];
    w = a[3] - a[2];
    var p = a[5] - a[4];
    u = k.min(b, k.min(w, p)) / l;
    l = 2 + k.ceil(b / u);
    var y = 2 + k.ceil(w / u),
      f = 2 + k.ceil(p / u);
    b = this.generate(b, w, p, u, a, l, y, f);
    b = r(b, [l, y, f]);
    l = [];
    w = [];
    for (let f = 0, d = b.vertices.length; f < d; f++)
      w.push(c(b.vertices[f], l, a[0], a[2], a[4], u));
    a = [];
    for (let c = 0, f = b.faces.length; c < f; c++)
      (y = b.faces[c]),
        (u = w[y[0]]),
        (p = w[y[1]]),
        (y = w[y[2]]),
        a.push(new h(u, p, y)),
        n.push(u, p, y);
    u = [];
    for (let c = 0, f = l.length; c < f; c++) {
      b = [];
      for (let f = 0, d = a.length; f < d; f++)
        if (((w = a[f]), w.i1 === c || w.i2 === c || w.i3 === c))
          w.i1 != c && -1 === b.indexOf(w.i1) && b.push(w.i1),
            w.i2 != c && -1 === b.indexOf(w.i2) && b.push(w.i2),
            w.i3 != c && -1 === b.indexOf(w.i3) && b.push(w.i3);
      u.push(b);
    }
    b = [];
    for (let a = 0, c = l.length; a < c; a++) {
      p = l[a];
      y = u[a];
      w = new e.Atom();
      if (3 > y.length) (w.x = p.x), (w.y = p.y), (w.z = p.z);
      else {
        f = 1;
        5 > y.length && (f = 0.5);
        for (let a = 0, b = y.length; a < b; a++) {
          let b = l[y[a]];
          w.x += b.x;
          w.y += b.y;
          w.z += b.z;
        }
        w.x += p.x * f;
        w.y += p.y * f;
        w.z += p.z * f;
        p = 1 / (f + y.length);
        w.x *= p;
        w.y *= p;
        w.z *= p;
      }
      b.push(w);
    }
    l = b;
    for (let a = 0, b = l.length; a < b; a++) (u = l[a]), g.push(u.x, u.y, u.z);
    for (let c = 0, f = a.length; c < f; c++)
      (u = a[c]),
        (b = l[u.i1]),
        (p = l[u.i2]),
        (w = l[u.i3]),
        (p = [p.x - b.x, p.y - b.y, p.z - b.z]),
        d.cross(p, [w.x - b.x, w.y - b.y, w.z - b.z]),
        isNaN(p[0]) && (p = [0, 0, 0]),
        (u.normal = p);
    for (let b = 0, c = l.length; b < c; b++) {
      l = [0, 0, 0];
      for (let c = 0, f = a.length; c < f; c++)
        if (((u = a[c]), u.i1 === b || u.i2 === b || u.i3 === b))
          (l[0] += u.normal[0]), (l[1] += u.normal[1]), (l[2] += u.normal[2]);
      d.normalize(l);
      m.push(l[0], l[1], l[2]);
    }
    this.storeData(g, m, n);
  };
  p.render = function (a, b) {
    this.styles && (b = this.styles);
    b.surfaces_display &&
      (a.shader.setMatrixUniforms(a),
      this.bindBuffers(a),
      a.material.setTempColors(
        a,
        b.surfaces_materialAmbientColor_3D,
        b.surfaces_color,
        b.surfaces_materialSpecularColor_3D,
        b.surfaces_materialShininess_3D
      ),
      a.material.setAlpha(a, b.surfaces_alpha),
      "Dots" === b.surfaces_style
        ? (a.shader.setPointSize(a, b.shapes_pointSize),
          a.drawElements(
            a.POINTS,
            this.vertexIndexBuffer.numItems,
            a.UNSIGNED_SHORT,
            0
          ))
        : "Mesh" === b.surfaces_style
        ? (a.lineWidth(b.shapes_lineWidth),
          a.drawElements(
            a.LINES,
            this.vertexIndexBuffer.numItems,
            a.UNSIGNED_SHORT,
            0
          ))
        : a.drawElements(
            a.TRIANGLES,
            this.vertexIndexBuffer.numItems,
            a.UNSIGNED_SHORT,
            0
          ));
  };
})(
  ChemDoodle.structures,
  ChemDoodle.structures.d3,
  ChemDoodle.ELEMENT,
  ChemDoodle.lib.MarchingCubes,
  ChemDoodle.lib.vec3,
  Math
);
(function (e, p, n, r, d) {
  p.SASSurface = function (d, b, c) {
    this.atoms = d;
    this.probeRadius = b;
    this.resolution = c;
    this.build(d, b, c);
  };
  (p.SASSurface.prototype = new p._Surface()).calculate = function (d, b, c) {
    let h = Infinity;
    d = new e.Atom("C", d, b, c);
    for (let a = 0, g = this.atoms.length; a < g; a++)
      (b = this.atoms[a]),
        (c =
          n[b.label] && 0 !== n[b.label].vdWRadius ? n[b.label].vdWRadius : 2),
        (b = b.distance3D(d) - this.probeRadius - c),
        (h = r.min(h, b));
    return h;
  };
})(ChemDoodle.structures, ChemDoodle.structures.d3, ChemDoodle.ELEMENT, Math);
(function (e, p, n, r, d) {
  p.VDWSurface = function (d, b) {
    this.atoms = d;
    this.probeRadius = 0;
    this.resolution = b;
    this.build(d, 0, b);
  };
  (p.VDWSurface.prototype = new p._Surface()).calculate = function (d, b, c) {
    let h = Infinity;
    d = new e.Atom("C", d, b, c);
    for (let a = 0, g = this.atoms.length; a < g; a++)
      (b = this.atoms[a]),
        (c =
          n[b.label] && 0 !== n[b.label].vdWRadius ? n[b.label].vdWRadius : 2),
        (b = b.distance3D(d) - c),
        (h = r.min(h, b));
    return h;
  };
})(ChemDoodle.structures, ChemDoodle.structures.d3, ChemDoodle.ELEMENT, Math);
(function (e, p, n, r) {
  e.Plate = function (d) {
    this.lanes = Array(d);
    i = 0;
    for (ii = d; i < ii; i++) this.lanes[i] = [];
  };
  r = e.Plate.prototype;
  r.sort = function () {
    i = 0;
    for (ii = this.lanes.length; i < ii; i++)
      this.lanes[i].sort(function (d, e) {
        return d - e;
      });
  };
  r.draw = function (d, e) {
    e = d.canvas.width;
    var b = d.canvas.height;
    this.origin = (9 * b) / 10;
    this.front = b / 10;
    this.laneLength = this.origin - this.front;
    d.strokeStyle = "#000000";
    d.beginPath();
    d.moveTo(0, this.front);
    d.lineTo(e, this.front);
    d.setLineDash([3]);
    d.stroke();
    d.setLineDash([]);
    d.beginPath();
    d.moveTo(0, this.origin);
    d.lineTo(e, this.origin);
    d.closePath();
    d.stroke();
    i = 0;
    for (ii = this.lanes.length; i < ii; i++)
      for (
        b = ((i + 1) * e) / (ii + 1),
          d.beginPath(),
          d.moveTo(b, this.origin),
          d.lineTo(b, this.origin + 3),
          d.closePath(),
          d.stroke(),
          s = 0,
          ss = this.lanes[i].length;
        s < ss;
        s++
      ) {
        let c = this.origin - this.laneLength * this.lanes[i][s].rf;
        switch (this.lanes[i][s].type) {
          case "compact":
            d.beginPath();
            d.arc(b, c, 3, 0, 2 * n.PI, !1);
            d.closePath();
            break;
          case "expanded":
            d.beginPath();
            d.arc(b, c, 7, 0, 2 * n.PI, !1);
            d.closePath();
            break;
          case "widened":
            p.contextEllipse(d, b - 18, c - 10, 36, 10);
            break;
          case "cresent":
            d.beginPath(), d.arc(b, c, 9, 0, n.PI, !0), d.closePath();
        }
        switch (this.lanes[i][s].style) {
          case "solid":
            d.fillStyle = "#000000";
            d.fill();
            break;
          case "transparent":
            d.stroke();
        }
      }
  };
  e.Plate.Spot = function (d, e, b) {
    this.type = d;
    this.rf = e;
    this.style = b ? b : "solid";
  };
})(ChemDoodle.structures, ChemDoodle.extensions, Math);
(function (e, p, n, r, d, k) {
  e.DEFAULT_STYLES = {
    backgroundColor: "#FFFFFF",
    scale: 1,
    rotateAngle: 0,
    bondLength_2D: 20,
    angstromsPerBondLength: 1.25,
    lightDirection_3D: [-0.1, -0.1, -1],
    lightDiffuseColor_3D: "#FFFFFF",
    lightSpecularColor_3D: "#FFFFFF",
    projectionPerspective_3D: !0,
    projectionPerspectiveVerticalFieldOfView_3D: 45,
    projectionOrthoWidth_3D: 40,
    projectionWidthHeightRatio_3D: k,
    projectionFrontCulling_3D: 0.1,
    projectionBackCulling_3D: 1e4,
    cullBackFace_3D: !0,
    fog_mode_3D: 0,
    fog_color_3D: "#000000",
    fog_start_3D: 0,
    fog_end_3D: 1,
    fog_density_3D: 1,
    shadow_3D: !1,
    shadow_intensity_3D: 0.85,
    flat_color_3D: !1,
    antialias_3D: !0,
    gammaCorrection_3D: 2.2,
    colorHover: "#885110",
    colorSelect: "#0060B2",
    colorError: "#c10000",
    colorPreview: "#00FF00",
    ssao_3D: !1,
    ssao_kernel_radius: 17,
    ssao_kernel_samples: 32,
    ssao_power: 1,
    outline_3D: !1,
    outline_thickness: 1,
    outline_normal_threshold: 0.85,
    outline_depth_threshold: 0.1,
    fxaa_edgeThreshold: 0.0625,
    fxaa_edgeThresholdMin: 1 / 12,
    fxaa_searchSteps: 64,
    fxaa_searchThreshold: 0.25,
    fxaa_subpixCap: 1,
    fxaa_subpixTrim: 0,
    atoms_display: !0,
    atoms_color: "#000000",
    atoms_font_size_2D: 12,
    atoms_font_families_2D: ["Helvetica", "Arial", "Dialog"],
    atoms_font_bold_2D: !1,
    atoms_font_italic_2D: !1,
    atoms_circles_2D: !1,
    atoms_circleDiameter_2D: 10,
    atoms_circleBorderWidth_2D: 1,
    atoms_lonePairDistance_2D: 8,
    atoms_lonePairSpread_2D: 4,
    atoms_lonePairDiameter_2D: 1,
    atoms_useJMOLColors: !1,
    atoms_usePYMOLColors: !1,
    atoms_HBlack_2D: !0,
    atoms_implicitHydrogens_2D: !0,
    atoms_displayTerminalCarbonLabels_2D: !1,
    atoms_showHiddenCarbons_2D: !0,
    atoms_showAttributedCarbons_2D: !0,
    atoms_displayAllCarbonLabels_2D: !1,
    atoms_resolution_3D: 30,
    atoms_sphereDiameter_3D: 0.8,
    atoms_useVDWDiameters_3D: !1,
    atoms_vdwMultiplier_3D: 1,
    atoms_materialAmbientColor_3D: "#000000",
    atoms_materialSpecularColor_3D: "#555555",
    atoms_materialShininess_3D: 32,
    atoms_nonBondedAsStars_3D: !1,
    atoms_displayLabels_3D: !1,
    bonds_display: !0,
    bonds_color: "#000000",
    bonds_width_2D: 1,
    bonds_useAbsoluteSaturationWidths_2D: !0,
    bonds_saturationWidth_2D: 0.2,
    bonds_saturationWidthAbs_2D: 5,
    bonds_ends_2D: "round",
    bonds_splitColor: !1,
    bonds_colorGradient: !1,
    bonds_saturationAngle_2D: n.PI / 3,
    bonds_symmetrical_2D: !1,
    bonds_clearOverlaps_2D: !1,
    bonds_overlapClearWidth_2D: 0.5,
    bonds_atomLabelBuffer_2D: 1,
    bonds_wedgeThickness_2D: 6,
    bonds_wavyLength_2D: 4,
    bonds_hashWidth_2D: 1,
    bonds_hashSpacing_2D: 2.5,
    bonds_dotSize_2D: 2,
    bonds_lewisStyle_2D: !1,
    bonds_showBondOrders_3D: !1,
    bonds_resolution_3D: 30,
    bonds_renderAsLines_3D: !1,
    bonds_cylinderDiameter_3D: 0.3,
    bonds_pillLatitudeResolution_3D: 10,
    bonds_pillLongitudeResolution_3D: 20,
    bonds_pillHeight_3D: 0.3,
    bonds_pillSpacing_3D: 0.1,
    bonds_pillDiameter_3D: 0.3,
    bonds_materialAmbientColor_3D: "#000000",
    bonds_materialSpecularColor_3D: "#555555",
    bonds_materialShininess_3D: 32,
    proteins_displayRibbon: !0,
    proteins_displayBackbone: !1,
    proteins_backboneThickness: 1.5,
    proteins_backboneColor: "#CCCCCC",
    proteins_ribbonCartoonize: !1,
    proteins_displayPipePlank: !1,
    proteins_residueColor: "none",
    proteins_primaryColor: "#FF0D0D",
    proteins_secondaryColor: "#FFFF30",
    proteins_ribbonCartoonHelixPrimaryColor: "#00E740",
    proteins_ribbonCartoonHelixSecondaryColor: "#9905FF",
    proteins_ribbonCartoonSheetColor: "#E8BB99",
    proteins_tubeColor: "#FF0D0D",
    proteins_tubeResolution_3D: 15,
    proteins_ribbonThickness: 0.2,
    proteins_tubeThickness: 0.5,
    proteins_plankSheetWidth: 3.5,
    proteins_cylinderHelixDiameter: 4,
    proteins_verticalResolution: 8,
    proteins_horizontalResolution: 8,
    proteins_materialAmbientColor_3D: "#000000",
    proteins_materialSpecularColor_3D: "#555555",
    proteins_materialShininess_3D: 32,
    nucleics_display: !0,
    nucleics_tubeColor: "#CCCCCC",
    nucleics_baseColor: "#C10000",
    nucleics_residueColor: "none",
    nucleics_tubeThickness: 1.5,
    nucleics_tubeResolution_3D: 15,
    nucleics_verticalResolution: 8,
    nucleics_materialAmbientColor_3D: "#000000",
    nucleics_materialSpecularColor_3D: "#555555",
    nucleics_materialShininess_3D: 32,
    macro_displayAtoms: !1,
    macro_displayBonds: !1,
    macro_atomToLigandDistance: -1,
    macro_showWater: !1,
    macro_colorByChain: !1,
    macro_rainbowColors: [
      "#0000FF",
      "#00FFFF",
      "#00FF00",
      "#FFFF00",
      "#FF0000",
    ],
    surfaces_display: !0,
    surfaces_alpha: 0.5,
    surfaces_style: "Solid",
    surfaces_color: "white",
    surfaces_materialAmbientColor_3D: "#000000",
    surfaces_materialSpecularColor_3D: "#000000",
    surfaces_materialShininess_3D: 32,
    plots_color: "#000000",
    plots_width: 1,
    plots_showIntegration: !1,
    plots_integrationColor: "#c10000",
    plots_integrationLineWidth: 1,
    plots_showGrid: !1,
    plots_gridColor: "gray",
    plots_gridLineWidth: 0.5,
    plots_showYAxis: !0,
    plots_flipXAxis: !1,
    text_font_size: 12,
    text_font_families: ["Helvetica", "Arial", "Dialog"],
    text_font_bold: !0,
    text_font_italic: !1,
    text_font_stroke_3D: !0,
    text_color: "#000000",
    shapes_color: "#000000",
    shapes_lineWidth: 1,
    shapes_pointSize: 2,
    shapes_arrowLength_2D: 8,
    compass_display: !1,
    compass_axisXColor_3D: "#FF0000",
    compass_axisYColor_3D: "#00FF00",
    compass_axisZColor_3D: "#0000FF",
    compass_size_3D: 50,
    compass_resolution_3D: 10,
    compass_displayText_3D: !0,
    compass_type_3D: 0,
    measurement_update_3D: !1,
    measurement_angleBands_3D: 10,
    measurement_displayText_3D: !0,
  };
  p.Styles = function (b) {
    d.assign(this, r.parse(r.stringify(b === k ? e.DEFAULT_STYLES : b)));
  };
  n = p.Styles.prototype;
  n.set3DRepresentation = function (b) {
    this.bonds_display = this.atoms_display = !0;
    this.bonds_color = "#777777";
    this.bonds_showBondOrders_3D =
      this.bonds_splitColor =
      this.atoms_useJMOLColors =
      this.atoms_useVDWDiameters_3D =
        !0;
    this.bonds_renderAsLines_3D = !1;
    "Ball and Stick" === b
      ? ((this.atoms_vdwMultiplier_3D = 0.3),
        (this.bonds_splitColor = !1),
        (this.bonds_cylinderDiameter_3D = 0.3),
        (this.bonds_materialAmbientColor_3D =
          ChemDoodle.DEFAULT_STYLES.atoms_materialAmbientColor_3D),
        (this.bonds_pillDiameter_3D = 0.15))
      : "van der Waals Spheres" === b
      ? ((this.bonds_display = !1), (this.atoms_vdwMultiplier_3D = 1))
      : "Stick" === b
      ? ((this.bonds_showBondOrders_3D = this.atoms_useVDWDiameters_3D = !1),
        (this.bonds_cylinderDiameter_3D = this.atoms_sphereDiameter_3D = 0.8),
        (this.bonds_materialAmbientColor_3D =
          this.atoms_materialAmbientColor_3D))
      : "Wireframe" === b
      ? ((this.atoms_useVDWDiameters_3D = !1),
        (this.bonds_cylinderDiameter_3D = this.bonds_pillDiameter_3D = 0.05),
        (this.atoms_sphereDiameter_3D = 0.15),
        (this.bonds_materialAmbientColor_3D =
          ChemDoodle.DEFAULT_STYLES.atoms_materialAmbientColor_3D))
      : "Line" === b
      ? ((this.atoms_display = !1),
        (this.bonds_renderAsLines_3D = !0),
        (this.bonds_width_2D = 1),
        (this.bonds_cylinderDiameter_3D = 0.05))
      : alert(
          '"' +
            b +
            '" is not recognized. Use one of the following strings:\n\n1. Ball and Stick\n2. van der Waals Spheres\n3. Stick\n4. Wireframe\n5. Line\n'
        );
  };
  n.copy = function () {
    return new p.Styles(this);
  };
})(ChemDoodle, ChemDoodle.structures, Math, JSON, Object);
(function (e, p, n, r, d) {
  n.getPointsPerAngstrom = function () {
    return (
      e.DEFAULT_STYLES.bondLength_2D / e.DEFAULT_STYLES.angstromsPerBondLength
    );
  };
  n.BondDeducer = function () {};
  d = n.BondDeducer.prototype;
  d.margin = 1.1;
  d.deduceCovalentBonds = function (d, b) {
    let c = n.getPointsPerAngstrom();
    b && (c = b);
    for (let e = 0, a = d.atoms.length; e < a; e++)
      for (b = e + 1; b < a; b++) {
        let a = d.atoms[e],
          h = d.atoms[b];
        a.distance3D(h) <
          (p[a.label].covalentRadius + p[h.label].covalentRadius) *
            c *
            this.margin && d.bonds.push(new r.Bond(a, h, 1));
      }
  };
})(
  ChemDoodle,
  ChemDoodle.ELEMENT,
  ChemDoodle.informatics,
  ChemDoodle.structures
);
(function (e, p, n) {
  e.HydrogenDeducer = function () {};
  e.HydrogenDeducer.prototype.removeHydrogens = function (e, d) {
    let k = [],
      b = [];
    for (let c = 0, h = e.bonds.length; c < h; c++) {
      let a = e.bonds[c],
        g = "H" !== a.a1.label && "H" !== a.a2.label;
      g || d || a.stereo === p.Bond.STEREO_NONE || (g = !0);
      g
        ? ((a.a1.tag = !0), b.push(a))
        : ("H" === a.a1.label && (a.a1.remove = !0),
          "H" === a.a2.label && (a.a2.remove = !0));
    }
    for (let b = 0, h = e.atoms.length; b < h; b++)
      (d = e.atoms[b]), d.remove ? (d.remove = n) : k.push(d);
    e.atoms = k;
    e.bonds = b;
  };
})(ChemDoodle.informatics, ChemDoodle.structures);
(function (e, p, n) {
  e.Splitter = function () {};
  e.Splitter.prototype.split = function (e) {
    let d = [];
    for (let b = 0, d = e.atoms.length; b < d; b++) e.atoms[b].visited = !1;
    for (let b = 0, d = e.bonds.length; b < d; b++) e.bonds[b].visited = !1;
    for (let c = 0, h = e.atoms.length; c < h; c++) {
      var k = e.atoms[c];
      if (!k.visited) {
        let a = new p.Molecule();
        a.atoms.push(k);
        k.visited = !0;
        let c = new p.Queue();
        for (c.enqueue(k); !c.isEmpty(); ) {
          k = c.dequeue();
          for (let d = 0, g = e.bonds.length; d < g; d++) {
            var b = e.bonds[d];
            b.contains(k) &&
              !b.visited &&
              ((b.visited = !0),
              a.bonds.push(b),
              (b = b.getNeighbor(k)),
              b.visited || ((b.visited = !0), a.atoms.push(b), c.enqueue(b)));
          }
        }
        d.push(a);
      }
    }
    return d;
  };
})(ChemDoodle.informatics, ChemDoodle.structures);
(function (e, p, n, r) {
  e.StructureBuilder = function () {};
  e.StructureBuilder.prototype.copy = function (d) {
    let e = new p.JSONInterpreter();
    return e.molFrom(e.molTo(d));
  };
})(ChemDoodle.informatics, ChemDoodle.io, ChemDoodle.structures);
(function (e, p) {
  e._Counter = function () {};
  e = e._Counter.prototype;
  e.value = 0;
  e.molecule = p;
  e.setMolecule = function (e) {
    this.value = 0;
    this.molecule = e;
    this.innerCalculate && this.innerCalculate();
  };
})(ChemDoodle.informatics);
(function (e, p) {
  e.FrerejacqueNumberCounter = function (e) {
    this.setMolecule(e);
  };
  (e.FrerejacqueNumberCounter.prototype = new e._Counter()).innerCalculate =
    function () {
      this.value =
        this.molecule.bonds.length -
        this.molecule.atoms.length +
        new e.NumberOfMoleculesCounter(this.molecule).value;
    };
})(ChemDoodle.informatics);
(function (e, p, n) {
  p.NumberOfMoleculesCounter = function (e) {
    this.setMolecule(e);
  };
  (p.NumberOfMoleculesCounter.prototype = new p._Counter()).innerCalculate =
    function () {
      for (let d = 0, e = this.molecule.atoms.length; d < e; d++)
        this.molecule.atoms[d].visited = !1;
      for (let d = 0, k = this.molecule.atoms.length; d < k; d++)
        if (!this.molecule.atoms[d].visited) {
          this.value++;
          let b = new e.Queue();
          this.molecule.atoms[d].visited = !0;
          for (b.enqueue(this.molecule.atoms[d]); !b.isEmpty(); ) {
            let c = b.dequeue();
            for (let d = 0, a = this.molecule.bonds.length; d < a; d++) {
              var n = this.molecule.bonds[d];
              n.contains(c) &&
                ((n = n.getNeighbor(c)),
                n.visited || ((n.visited = !0), b.enqueue(n)));
            }
          }
        }
    };
})(ChemDoodle.structures, ChemDoodle.informatics);
(function (e, p) {
  e._RingFinder = function () {};
  e = e._RingFinder.prototype;
  e.atoms = p;
  e.bonds = p;
  e.rings = p;
  e.reduce = function (e) {
    for (let d = 0, k = e.atoms.length; d < k; d++) e.atoms[d].visited = !1;
    for (let d = 0, k = e.bonds.length; d < k; d++) e.bonds[d].visited = !1;
    let n = !0;
    for (; n; ) {
      n = !1;
      for (let d = 0, k = e.atoms.length; d < k; d++) {
        let b = 0,
          c;
        for (let h = 0, a = e.bonds.length; h < a; h++)
          if (e.bonds[h].contains(e.atoms[d]) && !e.bonds[h].visited) {
            b++;
            if (2 === b) break;
            c = e.bonds[h];
          }
        1 === b && ((n = !0), (c.visited = !0), (e.atoms[d].visited = !0));
      }
    }
    for (let d = 0, k = e.atoms.length; d < k; d++)
      e.atoms[d].visited || this.atoms.push(e.atoms[d]);
    for (let d = 0, k = e.bonds.length; d < k; d++)
      e.bonds[d].visited || this.bonds.push(e.bonds[d]);
    0 === this.bonds.length && 0 !== this.atoms.length && (this.atoms = []);
  };
  e.setMolecule = function (e) {
    this.atoms = [];
    this.bonds = [];
    this.rings = [];
    this.reduce(e);
    2 < this.atoms.length && this.innerGetRings && this.innerGetRings();
  };
  e.fuse = function () {
    for (let e = 0, r = this.rings.length; e < r; e++)
      for (let d = 0, k = this.bonds.length; d < k; d++)
        -1 !== this.rings[e].atoms.indexOf(this.bonds[d].a1) &&
          -1 !== this.rings[e].atoms.indexOf(this.bonds[d].a2) &&
          this.rings[e].bonds.push(this.bonds[d]);
  };
})(ChemDoodle.informatics);
(function (e, p, n) {
  function r(d, b) {
    this.atoms = [];
    if (b)
      for (let c = 0, d = b.atoms.length; c < d; c++)
        this.atoms[c] = b.atoms[c];
    this.atoms.push(d);
  }
  let d = r.prototype;
  d.grow = function (d, b) {
    let c = this.atoms[this.atoms.length - 1],
      e = [];
    for (let a = 0, g = d.length; a < g; a++)
      if (d[a].contains(c)) {
        let g = d[a].getNeighbor(c);
        -1 === b.indexOf(g) && e.push(g);
      }
    d = [];
    for (let a = 0, b = e.length; a < b; a++) d.push(new r(e[a], this));
    return d;
  };
  d.check = function (d, b, c) {
    for (let a = 0, c = b.atoms.length - 1; a < c; a++)
      if (-1 !== this.atoms.indexOf(b.atoms[a])) return n;
    let e;
    if (b.atoms[b.atoms.length - 1] === this.atoms[this.atoms.length - 1]) {
      e = new p.Ring();
      e.atoms[0] = c;
      for (let a = 0, b = this.atoms.length; a < b; a++)
        e.atoms.push(this.atoms[a]);
      for (d = b.atoms.length - 2; 0 <= d; d--) e.atoms.push(b.atoms[d]);
    } else {
      let a = [];
      for (let c = 0, e = d.length; c < e; c++)
        d[c].contains(b.atoms[b.atoms.length - 1]) && a.push(d[c]);
      for (let g = 0, h = a.length; g < h; g++)
        if (
          (1 === b.atoms.length ||
            !a[g].contains(b.atoms[b.atoms.length - 2])) &&
          a[g].contains(this.atoms[this.atoms.length - 1])
        ) {
          e = new p.Ring();
          e.atoms[0] = c;
          for (let a = 0, b = this.atoms.length; a < b; a++)
            e.atoms.push(this.atoms[a]);
          for (d = b.atoms.length - 1; 0 <= d; d--) e.atoms.push(b.atoms[d]);
          break;
        }
    }
    return e;
  };
  e.EulerFacetRingFinder = function (d) {
    this.setMolecule(d);
  };
  e = e.EulerFacetRingFinder.prototype = new e._RingFinder();
  e.fingerBreak = 5;
  e.innerGetRings = function () {
    for (let g = 0, h = this.atoms.length; g < h; g++) {
      let h = [];
      for (let a = 0, b = this.bonds.length; a < b; a++)
        this.bonds[a].contains(this.atoms[g]) &&
          h.push(this.bonds[a].getNeighbor(this.atoms[g]));
      for (let l = 0, k = h.length; l < k; l++)
        for (let m = l + 1; m < h.length; m++) {
          var d = [];
          d[0] = new r(h[l]);
          d[1] = new r(h[m]);
          var b = [];
          b[0] = this.atoms[g];
          for (let a = 0, c = h.length; a < c; a++)
            a !== l && a !== m && b.push(h[a]);
          var c = [],
            e = d[0].check(this.bonds, d[1], this.atoms[g]);
          for (
            e && (c[0] = e);
            0 === c.length &&
            0 < d.length &&
            d[0].atoms.length < this.fingerBreak;

          ) {
            e = [];
            for (let c = 0, g = d.length; c < g; c++) {
              var a = d[c].grow(this.bonds, b);
              for (let b = 0, c = a.length; b < c; b++) e.push(a[b]);
            }
            d = e;
            for (let b = 0, h = d.length; b < h; b++)
              for (e = b + 1; e < h; e++)
                (a = d[b].check(this.bonds, d[e], this.atoms[g])) && c.push(a);
            if (0 === c.length) {
              e = [];
              for (let c = 0, d = b.length; c < d; c++)
                for (let d = 0, f = this.bonds.length; d < f; d++)
                  this.bonds[d].contains(b[c]) &&
                    ((a = this.bonds[d].getNeighbor(b[c])),
                    -1 === b.indexOf(a) && -1 === e.indexOf(a) && e.push(a));
              for (let a = 0, c = e.length; a < c; a++) b.push(e[a]);
            }
          }
          if (0 < c.length) {
            d = n;
            for (let a = 0, b = c.length; a < b; a++)
              if (!d || d.atoms.length > c[a].atoms.length) d = c[a];
            c = !1;
            for (let a = 0, g = this.rings.length; a < g; a++) {
              b = !0;
              for (let c = 0, f = d.atoms.length; c < f; c++)
                if (-1 === this.rings[a].atoms.indexOf(d.atoms[c])) {
                  b = !1;
                  break;
                }
              if (b) {
                c = !0;
                break;
              }
            }
            c || this.rings.push(d);
          }
        }
    }
    this.fuse();
  };
})(ChemDoodle.informatics, ChemDoodle.structures);
(function (e, p) {
  e.SSSRFinder = function (n) {
    this.rings = [];
    if (0 < n.atoms.length) {
      let r = new e.FrerejacqueNumberCounter(n).value,
        d = new e.EulerFacetRingFinder(n).rings;
      d.sort(function (d, b) {
        return d.atoms.length - b.atoms.length;
      });
      for (let d = 0, b = n.bonds.length; d < b; d++) n.bonds[d].visited = !1;
      for (let e = 0, b = d.length; e < b; e++) {
        n = !1;
        for (let b = 0, h = d[e].bonds.length; b < h; b++)
          if (!d[e].bonds[b].visited) {
            n = !0;
            break;
          }
        if (n) {
          for (let b = 0, h = d[e].bonds.length; b < h; b++)
            d[e].bonds[b].visited = !0;
          this.rings.push(d[e]);
        }
        if (this.rings.length === r) break;
      }
    }
  };
})(ChemDoodle.informatics);
(function (e, p) {
  e._Interpreter = function () {};
  e._Interpreter.prototype.fit = function (e, r, d) {
    let k = e.length,
      b = [];
    for (let c = 0; c < r - k; c++) b.push(" ");
    return d ? e + b.join("") : b.join("") + e;
  };
})(ChemDoodle.io);
(function (e, p, n, r, d, k, b, c) {
  let h = /\s+/g,
    a = /\(|\)|\s+/g,
    g = /'|\s+/g,
    l = /,|'|\s+/g,
    v = /^\s+/,
    m = /[0-9]/g,
    x = /[0-9]|\+|\-/g,
    u = function (a) {
      return 0 !== a.length;
    },
    w = {
      P: [],
      A: [[0, 0.5, 0.5]],
      B: [[0.5, 0, 0.5]],
      C: [[0.5, 0.5, 0]],
      I: [[0.5, 0.5, 0.5]],
      R: [
        [2 / 3, 1 / 3, 1 / 3],
        [1 / 3, 2 / 3, 2 / 3],
      ],
      S: [
        [1 / 3, 1 / 3, 2 / 3],
        [2 / 3, 2 / 3, 1 / 3],
      ],
      T: [
        [1 / 3, 2 / 3, 1 / 3],
        [2 / 3, 1 / 3, 2 / 3],
      ],
      F: [
        [0, 0.5, 0.5],
        [0.5, 0, 0.5],
        [0.5, 0.5, 0],
      ],
    },
    z = function (a) {
      let b = 0,
        c = 0,
        d = 0,
        f = 0;
      var g = a.indexOf("x"),
        e = a.indexOf("y");
      let h = a.indexOf("z");
      -1 !== g && (c++, 0 < g && "+" !== a.charAt(g - 1) && (c *= -1));
      -1 !== e && (d++, 0 < e && "+" !== a.charAt(e - 1) && (d *= -1));
      -1 !== h && (f++, 0 < h && "+" !== a.charAt(h - 1) && (f *= -1));
      if (2 < a.length) {
        g = "+";
        for (let c = 0, d = a.length; c < d; c++)
          (e = a.charAt(c)),
            ("-" !== e && "/" !== e) ||
              (c !== a.length - 1 && !a.charAt(c + 1).match(m)) ||
              (g = e),
            e.match(m) &&
              ("+" === g
                ? (b += parseInt(e))
                : "-" === g
                ? (b -= parseInt(e))
                : "/" === g && (b /= parseInt(e)));
      }
      return [b, c, d, f];
    };
  p.CIFInterpreter = function () {};
  p.CIFInterpreter.generateABC2XYZ = function (a, b, c, g, e, h) {
    g = (d.cos(g) - d.cos(h) * d.cos(e)) / d.sin(h);
    return [
      a,
      0,
      0,
      0,
      b * d.cos(h),
      b * d.sin(h),
      0,
      0,
      c * d.cos(e),
      c * g,
      c * d.sqrt(1 - d.pow(d.cos(e), 2) - g * g),
      0,
      0,
      0,
      0,
      1,
    ];
  };
  (p.CIFInterpreter.prototype = new p._Interpreter()).read = function (
    b,
    m,
    y,
    C
  ) {
    m = m ? m : 1;
    y = y ? y : 1;
    C = C ? C : 1;
    let f = new n.Molecule();
    if (!b) return f;
    var q = b.split("\n");
    let A = (b = 0),
      L = 0,
      H = 0,
      K = 0,
      N = 0;
    var P = "P",
      Z,
      E;
    let fa;
    for (var J, O = !0; 0 < q.length; )
      if ((O ? (J = q.shift()) : (O = !0), 0 < J.length))
        if (J.startsWith("_cell_length_a")) b = parseFloat(J.split(a)[1]);
        else if (J.startsWith("_cell_length_b")) A = parseFloat(J.split(a)[1]);
        else if (J.startsWith("_cell_length_c")) L = parseFloat(J.split(a)[1]);
        else if (J.startsWith("_cell_angle_alpha"))
          H = (d.PI * parseFloat(J.split(a)[1])) / 180;
        else if (J.startsWith("_cell_angle_beta"))
          K = (d.PI * parseFloat(J.split(a)[1])) / 180;
        else if (J.startsWith("_cell_angle_gamma"))
          N = (d.PI * parseFloat(J.split(a)[1])) / 180;
        else if (J.startsWith("_symmetry_space_group_name_H-M"))
          P = J.split(g)[1];
        else if (J.startsWith("loop_")) {
          for (
            var Q = { fields: [], lines: [] }, V = !1;
            (J = q.shift()) !== c &&
            !(J = J.replace(v, "")).startsWith("loop_") &&
            0 < J.length;

          )
            if (J.startsWith("_")) {
              if (V) break;
              Q.fields = Q.fields.concat(J.split(h).filter(u));
            } else (V = !0), Q.lines.push(J);
          0 !== q.length &&
            (J.startsWith("loop_") || J.startsWith("_")) &&
            (O = !1);
          -1 !== Q.fields.indexOf("_symmetry_equiv_pos_as_xyz") ||
          -1 !== Q.fields.indexOf("_space_group_symop_operation_xyz")
            ? (Z = Q)
            : -1 !== Q.fields.indexOf("_atom_site_label")
            ? (E = Q)
            : -1 !== Q.fields.indexOf("_geom_bond_atom_site_label_1") &&
              (fa = Q);
        }
    q = p.CIFInterpreter.generateABC2XYZ(b, A, L, H, K, N);
    if (E) {
      var X = (V = Q = O = -1),
        ha = -1;
      for (let a = 0, b = E.fields.length; a < b; a++)
        (J = E.fields[a]),
          "_atom_site_type_symbol" === J
            ? (O = a)
            : "_atom_site_label" === J
            ? (Q = a)
            : "_atom_site_fract_x" === J
            ? (V = a)
            : "_atom_site_fract_y" === J
            ? (X = a)
            : "_atom_site_fract_z" === J && (ha = a);
      for (let a = 0, b = E.lines.length; a < b; a++) {
        J = E.lines[a];
        J = J.split(h).filter(u);
        var R = new n.Atom(
          J[-1 === O ? Q : O].split(x)[0],
          parseFloat(J[V]),
          parseFloat(J[X]),
          parseFloat(J[ha])
        );
        f.atoms.push(R);
        -1 !== Q && ((R.cifId = J[Q]), (R.cifPart = 0));
      }
    }
    if (Z && !fa) {
      E = 0;
      for (let a = 0, b = Z.fields.length; a < b; a++)
        if (
          ((J = Z.fields[a]),
          "_symmetry_equiv_pos_as_xyz" === J ||
            "_space_group_symop_operation_xyz" === J)
        )
          E = a;
      J = w[P];
      P = [];
      for (let a = 0, b = Z.lines.length; a < b; a++) {
        V = Z.lines[a].split(l).filter(u);
        O = z(V[E]);
        Q = z(V[E + 1]);
        V = z(V[E + 2]);
        for (let b = 0, d = f.atoms.length; b < d; b++) {
          X = f.atoms[b];
          ha = X.x * O[1] + X.y * O[2] + X.z * O[3] + O[0];
          R = X.x * Q[1] + X.y * Q[2] + X.z * Q[3] + Q[0];
          let d = X.x * V[1] + X.y * V[2] + X.z * V[3] + V[0];
          var U = new n.Atom(X.label, ha, R, d);
          P.push(U);
          X.cifId !== c && ((U.cifId = X.cifId), (U.cifPart = a + 1));
          if (J)
            for (let b = 0, f = J.length; b < f; b++)
              (U = J[b]),
                (U = new n.Atom(X.label, ha + U[0], R + U[1], d + U[2])),
                P.push(U),
                X.cifId !== c && ((U.cifId = X.cifId), (U.cifPart = a + 1));
        }
      }
      for (let a = 0, b = P.length; a < b; a++) {
        for (E = P[a]; 1 <= E.x; ) E.x--;
        for (; 0 > E.x; ) E.x++;
        for (; 1 <= E.y; ) E.y--;
        for (; 0 > E.y; ) E.y++;
        for (; 1 <= E.z; ) E.z--;
        for (; 0 > E.z; ) E.z++;
      }
      E = [];
      for (let a = 0, b = P.length; a < b; a++) {
        J = !1;
        O = P[a];
        for (let a = 0, b = f.atoms.length; a < b; a++)
          if (1e-4 > f.atoms[a].distance3D(O)) {
            J = !0;
            break;
          }
        if (!J) {
          for (let a = 0, b = E.length; a < b; a++)
            if (1e-4 > E[a].distance3D(O)) {
              J = !0;
              break;
            }
          J || E.push(O);
        }
      }
      f.atoms = f.atoms.concat(E);
    }
    P = [];
    for (E = 0; E < m; E++)
      for (J = 0; J < y; J++)
        for (O = 0; O < C; O++)
          if (0 !== E || 0 !== J || 0 !== O)
            for (let a = 0, b = f.atoms.length; a < b; a++)
              (Q = f.atoms[a]),
                (V = new n.Atom(Q.label, Q.x + E, Q.y + J, Q.z + O)),
                P.push(V),
                Q.cifId !== c &&
                  ((V.cifId = Q.cifId),
                  (V.cifPart =
                    Q.cifPart +
                    (Z ? Z.lines.length : 0) +
                    E +
                    10 * J +
                    100 * O));
    f.atoms = f.atoms.concat(P);
    for (let a = 0, b = f.atoms.length; a < b; a++)
      (m = f.atoms[a]),
        (y = k.multiplyVec3(q, [m.x, m.y, m.z])),
        (m.x = y[0]),
        (m.y = y[1]),
        (m.z = y[2]);
    if (fa) {
      y = m = -1;
      for (let a = 0, b = fa.fields.length; a < b; a++)
        (C = fa.fields[a]),
          "_geom_bond_atom_site_label_1" === C
            ? (m = a)
            : "_geom_bond_atom_site_label_2" === C && (y = a);
      for (let a = 0, b = fa.lines.length; a < b; a++) {
        Z = fa.lines[a].split(h).filter(u);
        C = Z[m];
        Z = Z[y];
        for (let a = 0, b = f.atoms.length; a < b; a++)
          for (q = a + 1; q < b; q++) {
            P = f.atoms[a];
            E = f.atoms[q];
            if (P.cifPart !== E.cifPart) break;
            ((P.cifId === C && E.cifId === Z) ||
              (P.cifId === Z && E.cifId === C)) &&
              f.bonds.push(new n.Bond(P, E));
          }
      }
    } else new e.informatics.BondDeducer().deduceCovalentBonds(f, 1);
    return {
      molecule: f,
      unitCell: new r.UnitCell([b, A, L], [H, K, N], [0, 0, 0]),
    };
  };
  let y = new p.CIFInterpreter();
  e.readCIF = function (a, b, c, d) {
    return y.read(a, b, c, d);
  };
})(
  ChemDoodle,
  ChemDoodle.io,
  ChemDoodle.structures,
  ChemDoodle.structures.d3,
  Math,
  ChemDoodle.lib.mat4,
  ChemDoodle.lib.vec3
);
(function (e, p, n, r, d) {
  p.CMLInterpreter = function () {};
  let k = (p.CMLInterpreter.prototype = new p._Interpreter());
  k.read = function (b) {
    let c = [];
    b = r.parseXML(b);
    b = r(b).find("cml");
    for (let h = 0, l = b.length; h < l; h++) {
      let l = r(b[h]).find("molecule");
      for (let b = 0, h = l.length; b < h; b++) {
        let f = (c[b] = new n.Molecule()),
          h = [];
        var a = r(l[b]).find("atom");
        for (let f = 0, l = a.length; f < l; f++) {
          var g = r(a[f]),
            e = g.attr("elementType");
          let l;
          if (g.attr("x2") == d) {
            var k = g.attr("x3");
            var m = g.attr("y3");
            l = g.attr("z3");
          } else (k = g.attr("x2")), (m = g.attr("y2")), (l = 0);
          e = c[b].atoms[f] = new n.Atom(e, k, m, l);
          h[f] = g.attr("id");
          g.attr("formalCharge") != d && (e.charge = g.attr("formalCharge"));
        }
        a = r(l[b]).find("bond");
        for (let d = 0, l = a.length; d < l; d++) {
          g = r(a[d]);
          k = g.attr("atomRefs2").split(" ");
          e = f.atoms[r.inArray(k[0], h)];
          k = f.atoms[r.inArray(k[1], h)];
          switch (g.attr("order")) {
            case "2":
            case "D":
              m = 2;
              break;
            case "3":
            case "T":
              m = 3;
              break;
            case "A":
              m = 1.5;
              break;
            default:
              m = 1;
          }
          e = c[b].bonds[d] = new n.Bond(e, k, m);
          switch (g.find("bondStereo").text()) {
            case "W":
              e.stereo = n.Bond.STEREO_PROTRUDING;
              break;
            case "H":
              e.stereo = n.Bond.STEREO_RECESSED;
          }
        }
      }
    }
    return c;
  };
  k.write = function (b) {
    let c = [];
    c.push('\x3c?xml version\x3d"1.0" encoding\x3d"UTF-8"?\x3e\n');
    c.push(
      '\x3ccml convention\x3d"conventions:molecular" xmlns\x3d"http://www.xml-cml.org/schema" xmlns:conventions\x3d"http://www.xml-cml.org/convention/" xmlns:dc\x3d"http://purl.org/dc/elements/1.1/"\x3e\n'
    );
    for (let d = 0, e = b.length; d < e; d++) {
      c.push('\x3cmolecule id\x3d"m');
      c.push(d);
      c.push('"\x3e');
      c.push("\x3catomArray\x3e");
      for (let g = 0, e = b[d].atoms.length; g < e; g++) {
        var a = b[d].atoms[g];
        c.push('\x3catom elementType\x3d"');
        c.push(a.label);
        c.push('" id\x3d"a');
        c.push(g);
        c.push('" ');
        c.push('x3\x3d"');
        c.push(a.x);
        c.push('" y3\x3d"');
        c.push(a.y);
        c.push('" z3\x3d"');
        c.push(a.z);
        c.push('" ');
        0 != a.charge &&
          (c.push('formalCharge\x3d"'), c.push(a.charge), c.push('" '));
        c.push("/\x3e");
      }
      c.push("\x3c/atomArray\x3e");
      c.push("\x3cbondArray\x3e");
      for (let g = 0, e = b[d].bonds.length; g < e; g++) {
        a = b[d].bonds[g];
        c.push('\x3cbond atomRefs2\x3d"a');
        c.push(b[d].atoms.indexOf(a.a1));
        c.push(" a");
        c.push(b[d].atoms.indexOf(a.a2));
        c.push('" order\x3d"');
        switch (a.bondOrder) {
          case 1.5:
            c.push("A");
            break;
          case 1:
          case 2:
          case 3:
            c.push(a.bondOrder);
            break;
          default:
            c.push("S");
        }
        c.push('"/\x3e');
      }
      c.push("\x3c/bondArray\x3e");
      c.push("\x3c/molecule\x3e");
    }
    c.push("\x3c/cml\x3e");
    return c.join("");
  };
  let b = new p.CMLInterpreter();
  e.readCML = function (c) {
    return b.read(c);
  };
  e.writeCML = function (c) {
    return b.write(c);
  };
})(ChemDoodle, ChemDoodle.io, ChemDoodle.structures, ChemDoodle.lib.jQuery);
(function (e, p, n, r, d) {
  n.MOLInterpreter = function () {};
  let k = (n.MOLInterpreter.prototype = new n._Interpreter());
  k.version = 2;
  k.read = function (b, a) {
    a || (a = e.DEFAULT_STYLES.bondLength_2D);
    let c = new r.Molecule();
    if (!b) return c;
    b = b.split("\n");
    var h = b[3],
      k = parseInt(h.substring(0, 3)),
      m = parseInt(h.substring(3, 6));
    h = "V3000" === h.substring(34, 39).trim().toUpperCase() ? 3 : 2;
    if (2 === h) {
      for (var n = 0; n < k; n++) {
        h = b[4 + n];
        var u = new r.Atom(
            h.substring(31, 34),
            parseFloat(h.substring(0, 10)) * a,
            (1 === a ? 1 : -1) * parseFloat(h.substring(10, 20)) * a,
            parseFloat(h.substring(20, 30)) * a
          ),
          w = parseInt(h.substring(34, 36));
        0 !== w && p[u.label] && (u.mass = p[u.label].mass + w);
        switch (parseInt(h.substring(36, 39))) {
          case 1:
            u.charge = 3;
            break;
          case 2:
            u.charge = 2;
            break;
          case 3:
            u.charge = 1;
            break;
          case 5:
            u.charge = -1;
            break;
          case 6:
            u.charge = -2;
            break;
          case 7:
            u.charge = -3;
        }
        c.atoms[n] = u;
      }
      for (a = 0; a < m; a++) {
        h = b[4 + k + a];
        u = parseInt(h.substring(6, 9));
        n = parseInt(h.substring(9, 12));
        if (3 < u)
          switch (u) {
            case 4:
              u = 1.5;
              break;
            default:
              u = 1;
          }
        h = new r.Bond(
          c.atoms[parseInt(h.substring(0, 3)) - 1],
          c.atoms[parseInt(h.substring(3, 6)) - 1],
          u
        );
        switch (n) {
          case 3:
            h.stereo = r.Bond.STEREO_AMBIGUOUS;
            break;
          case 1:
            h.stereo = r.Bond.STEREO_PROTRUDING;
            break;
          case 6:
            h.stereo = r.Bond.STEREO_RECESSED;
        }
        c.bonds[a] = h;
      }
    } else if (3 === h)
      for (let g = 4, e = b.length; g < e; g++)
        if (((m = b[g].trim()), m.startsWith("M  V30 ")))
          if (((m = m.substring(7)), m.startsWith("BEGIN ")))
            n = m.substring(6);
          else if (m.startsWith("END ")) n = d;
          else if (
            ((k = m.split(/(\s+)/).filter((a) => 0 < a.trim().length)),
            "ATOM" === n)
          ) {
            m = new r.Atom(
              k[1],
              parseFloat(k[2]) * a,
              (1 === a ? 1 : -1) * parseFloat(k[3]) * a,
              parseFloat(k[4]) * a
            );
            for (let a = 6, b = k.length; a < b; a++)
              (u = k[a]),
                (w = u.indexOf("\x3d")),
                -1 !== w &&
                  ((h = u.substring(0, w)),
                  (u = u.substring(w + 1)),
                  "CHG" === h
                    ? (m.charge = parseInt(u))
                    : "RAD" === h
                    ? (m.numRadical = parseInt(u))
                    : "MASS" === h && (m.mass = parseInt(u)));
            c.atoms.push(m);
          } else if ("BOND" === n) {
            m = parseInt(k[1]);
            if (3 < m)
              switch (m) {
                case 4:
                  m = 1.5;
                  break;
                default:
                  m = 1;
              }
            m = new r.Bond(
              c.atoms[parseInt(k[2]) - 1],
              c.atoms[parseInt(k[3]) - 1],
              m
            );
            for (let a = 4, b = k.length; a < b; a++)
              if (
                ((u = k[a]),
                (w = u.indexOf("\x3d")),
                -1 !== w &&
                  ((h = u.substring(0, w)),
                  (u = u.substring(w + 1)),
                  "CFG" === h))
              )
                switch (parseInt(u)) {
                  case 2:
                    m.stereo = r.Bond.STEREO_AMBIGUOUS;
                    break;
                  case 1:
                    m.stereo = r.Bond.STEREO_PROTRUDING;
                    break;
                  case 3:
                    m.stereo = r.Bond.STEREO_RECESSED;
                }
            c.bonds.push(m);
          } else if ("COLLECTION" === n)
            if (m.startsWith("MDLV30/STEREL")) {
              m = m.substring(13);
              h = m.indexOf(" ");
              k = parseInt(m.substring(0, h));
              m = m.substring(h + 1);
              m = m.substring(7, m.length - 1);
              m = m.split(/(\s+)/).filter((a) => 0 < a.trim().length);
              for (let a = 1, b = m.length; a < b; a++)
                c.atoms[parseInt(m[a]) - 1].enhancedStereo = {
                  type: r.Atom.ESTEREO_OR,
                  group: k,
                };
            } else if (m.startsWith("MDLV30/STERAC")) {
              m = m.substring(13);
              h = m.indexOf(" ");
              k = parseInt(m.substring(0, h));
              m = m.substring(h + 1);
              m = m.substring(7, m.length - 1);
              m = m.split(/(\s+)/).filter((a) => 0 < a.trim().length);
              for (let a = 1, b = m.length; a < b; a++)
                c.atoms[parseInt(m[a]) - 1].enhancedStereo = {
                  type: r.Atom.ESTEREO_AND,
                  group: k,
                };
            }
    return c;
  };
  k.write = function (b) {
    let a = [];
    a.push(
      "Molecule from ChemDoodle Web Components\n\nhttp://www.ichemlabs.com\n"
    );
    a.push(this.fit(b.atoms.length.toString(), 3));
    a.push(this.fit(b.bonds.length.toString(), 3));
    a.push("  0  0  0  0            999 V" + this.version + "000\n");
    var c = b.getCenter();
    if (2 === this.version) {
      for (let g = 0, l = b.atoms.length; g < l; g++) {
        var d = b.atoms[g],
          h = " 0";
        if (-1 !== d.mass && p[d.label]) {
          var m = d.mass - p[d.label].mass;
          5 > m && -4 < m && (h = (-1 < m ? " " : "") + m);
        }
        m = "  0";
        if (0 !== d.charge)
          switch (d.charge) {
            case 3:
              m = "  1";
              break;
            case 2:
              m = "  2";
              break;
            case 1:
              m = "  3";
              break;
            case -1:
              m = "  5";
              break;
            case -2:
              m = "  6";
              break;
            case -3:
              m = "  7";
          }
        a.push(
          this.fit(
            ((d.x - c.x) / e.DEFAULT_STYLES.bondLength_2D).toFixed(4),
            10
          )
        );
        a.push(
          this.fit(
            (-(d.y - c.y) / e.DEFAULT_STYLES.bondLength_2D).toFixed(4),
            10
          )
        );
        a.push(this.fit((d.z / e.DEFAULT_STYLES.bondLength_2D).toFixed(4), 10));
        a.push(" ");
        a.push(this.fit(d.label, 3, !0));
        a.push(h);
        a.push(m);
        a.push("  0  0  0  0\n");
      }
      for (let c = 0, g = b.bonds.length; c < g; c++) {
        h = b.bonds[c];
        d = 0;
        h.stereo === r.Bond.STEREO_AMBIGUOUS
          ? (d = 3)
          : h.stereo === r.Bond.STEREO_PROTRUDING
          ? (d = 1)
          : h.stereo === r.Bond.STEREO_RECESSED && (d = 6);
        a.push(this.fit((b.atoms.indexOf(h.a1) + 1).toString(), 3));
        a.push(this.fit((b.atoms.indexOf(h.a2) + 1).toString(), 3));
        h = h.bondOrder;
        if (1.5 == h) h = 4;
        else if (3 < h || 0 != h % 1) h = 1;
        a.push(this.fit(h.toString(), 3));
        a.push("  ");
        a.push(d);
        a.push("  0  0  0\n");
      }
    } else if (3 === this.version) {
      a.push("M  V30 BEGIN CTAB\n");
      a.push("M  V30 COUNTS ");
      a.push(b.atoms.length);
      a.push(" ");
      a.push(b.bonds.length);
      a.push(" 0 0 0\n");
      a.push("M  V30 BEGIN ATOM\n");
      for (let d = 0, g = b.atoms.length; d < g; d++) {
        var k = b.atoms[d];
        a.push("M  V30 ");
        a.push(d + 1);
        a.push(" ");
        a.push(k.label);
        a.push(" ");
        a.push(((k.x - c.x) / e.DEFAULT_STYLES.bondLength_2D).toFixed(6));
        a.push(" ");
        a.push((-(k.y - c.y) / e.DEFAULT_STYLES.bondLength_2D).toFixed(6));
        a.push(" ");
        a.push((k.z / e.DEFAULT_STYLES.bondLength_2D).toFixed(6));
        a.push(" 0");
        0 !== k.charge && (a.push(" CHG\x3d"), a.push(k.charge));
        0 !== k.numRadical && (a.push(" RAD\x3d"), a.push(k.numRadical));
        -1 !== k.mass && (a.push(" MASS\x3d"), a.push(k.mass));
        a.push("\n");
      }
      a.push("M  V30 END ATOM\n");
      a.push("M  V30 BEGIN BOND\n");
      for (let d = 0, g = b.bonds.length; d < g; d++) {
        c = b.bonds[d];
        k = c.bondOrder;
        if (1.5 == k) k = 4;
        else if (3 < k || 0 != k % 1) k = 1;
        a.push("M  V30 ");
        a.push(d + 1);
        a.push(" ");
        a.push(k);
        a.push(" ");
        a.push(b.atoms.indexOf(c.a1) + 1);
        a.push(" ");
        a.push(b.atoms.indexOf(c.a2) + 1);
        c.stereo !== r.Bond.STEREO_NONE &&
          ((k = 0),
          c.stereo === r.Bond.STEREO_AMBIGUOUS
            ? (k = 2)
            : c.stereo === r.Bond.STEREO_PROTRUDING
            ? (k = 1)
            : c.stereo === r.Bond.STEREO_RECESSED && (k = 3),
          a.push(" CFG\x3d"),
          a.push(k));
        a.push("\n");
      }
      a.push("M  V30 END BOND\n");
      for (let a = 0, g = b.atoms.length; a < g; a++)
        if (
          ((c = b.atoms[a]), c.enhancedStereo.type !== r.Atom.ESTEREO_ABSOLUTE)
        ) {
          h || ((h = []), (d = []));
          c.enhancedStereo.type === r.Atom.ESTEREO_AND
            ? (m = h)
            : c.enhancedStereo.type === r.Atom.ESTEREO_OR && (m = d);
          let a;
          for (let b = 0, d = m.length; b < d; b++)
            if (((k = m[b]), k.group == c.enhancedStereo.group)) {
              a = k;
              break;
            }
          a || ((a = { group: c.enhancedStereo.group, list: [] }), m.push(a));
          a.list.push(c);
        }
      if (h && (0 < h.length || 0 < d.length)) {
        a.push("M  V30 BEGIN COLLECTION\n");
        if (0 < h.length)
          for (let c = 0, d = h.length; c < d; c++) {
            m = h[c];
            a.push("M  V30 MDLV30/STERAC");
            a.push(m.group);
            a.push(" ATOMS\x3d(");
            a.push(m.list.length);
            for (let c = 0, d = m.list.length; c < d; c++)
              a.push(" "), a.push(b.atoms.indexOf(m.list[c]) + 1);
            a.push(")\n");
          }
        if (0 < d.length)
          for (let c = 0, g = d.length; c < g; c++) {
            h = d[c];
            a.push("M  V30 MDLV30/STEREL");
            a.push(h.group);
            a.push(" ATOMS\x3d(");
            a.push(h.list.length);
            for (let c = 0, d = h.list.length; c < d; c++)
              a.push(" "), a.push(b.atoms.indexOf(h.list[c]) + 1);
            a.push(")\n");
          }
        a.push("M  V30 END COLLECTION\n");
      }
      a.push("M  V30 END CTAB\n");
    }
    a.push("M  END");
    return a.join("");
  };
  let b = new n.MOLInterpreter();
  e.readMOL = function (c, a) {
    return b.read(c, a);
  };
  e.writeMOL = function (c) {
    return b.write(c);
  };
  let c = new n.MOLInterpreter();
  c.version = 3;
  e.writeMOLV3 = function (b) {
    return c.write(b);
  };
})(ChemDoodle, ChemDoodle.ELEMENT, ChemDoodle.io, ChemDoodle.structures);
(function (e, p, n, r, d, k, b) {
  function c(a, b, c, d, e) {
    for (let g = 0, h = b.length; g < h; g++) {
      let h = b[g];
      if (h.id === c && d >= h.start && d <= h.end) {
        e ? (a.helix = !0) : (a.sheet = !0);
        d === h.end && (a.arrow = !0);
        break;
      }
    }
  }
  p.PDBInterpreter = function () {};
  b = p.PDBInterpreter.prototype = new p._Interpreter();
  b.calculateRibbonDistances = !1;
  b.deduceResidueBonds = !1;
  b.read = function (a, b) {
    let g = new n.Molecule();
    g.chains = [];
    if (!a) return g;
    var h = a.split("\n");
    b || (b = 1);
    var m = [];
    let p = [];
    let u = [];
    a = [];
    let w = [];
    for (let e = 0, l = h.length; e < l; e++) {
      var z = h[e];
      if (z.startsWith("HELIX"))
        m.push({
          id: z.substring(19, 20),
          start: parseInt(z.substring(21, 25)),
          end: parseInt(z.substring(33, 37)),
        });
      else if (z.startsWith("SHEET"))
        p.push({
          id: z.substring(21, 22),
          start: parseInt(z.substring(22, 26)),
          end: parseInt(z.substring(33, 37)),
        });
      else if (z.startsWith("ATOM")) {
        var y = z.substring(16, 17);
        if (" " === y || "A" === y) {
          y = d(z.substring(76, 78));
          if (0 === y.length) {
            var f = d(z.substring(12, 14));
            "HD" === f
              ? (y = "H")
              : 0 < f.length &&
                (y =
                  1 < f.length
                    ? f.charAt(0) + f.substring(1).toLowerCase()
                    : f);
          }
          y = new n.Atom(
            y,
            parseFloat(z.substring(30, 38)) * b,
            parseFloat(z.substring(38, 46)) * b,
            parseFloat(z.substring(46, 54)) * b
          );
          y.hetatm = !1;
          a.push(y);
          f = parseInt(z.substring(22, 26));
          if (0 === u.length)
            for (var q = 0; 3 > q; q++) {
              var A = new n.Residue(-1);
              A.cp1 = y;
              A.cp2 = y;
              u.push(A);
            }
          u[u.length - 1].resSeq !== f &&
            ((q = new n.Residue(f)),
            (q.name = d(z.substring(17, 20))),
            3 === q.name.length
              ? (q.name =
                  q.name.substring(0, 1) + q.name.substring(1).toLowerCase())
              : 2 === q.name.length &&
                "D" === q.name.charAt(0) &&
                (q.name = q.name.substring(1)),
            u.push(q),
            (A = z.substring(21, 22)),
            c(q, m, A, f, !0),
            c(q, p, A, f, !1));
          z = d(z.substring(12, 16));
          f = u[u.length - 1];
          if ("CA" === z || "P" === z || "O5'" === z) f.cp1 || (f.cp1 = y);
          else if (
            ("N3" === z &&
              ("C" === f.name || "U" === f.name || "T" === f.name)) ||
            ("N1" === z && ("A" === f.name || "G" === f.name))
          )
            f.cp3 = y;
          else if ("C2" === z) f.cp4 = y;
          else if (
            ("C4" === z &&
              ("C" === f.name || "U" === f.name || "T" === f.name)) ||
            ("C6" === z && ("A" === f.name || "G" === f.name))
          )
            f.cp5 = y;
          else if (
            "O" === z ||
            ("C6" === z &&
              ("C" === f.name || "U" === f.name || "T" === f.name)) ||
            "N9" === z
          ) {
            if (!u[u.length - 1].cp2) {
              if ("C6" === z || "N9" === z) var C = y;
              f.cp2 = y;
            }
          } else "C" === z && (C = y);
        }
      } else if (z.startsWith("HETATM"))
        (y = d(z.substring(76, 78))),
          0 === y.length && (y = d(z.substring(12, 16))),
          1 < y.length &&
            (y = y.substring(0, 1) + y.substring(1).toLowerCase()),
          (y = new n.Atom(
            y,
            parseFloat(z.substring(30, 38)) * b,
            parseFloat(z.substring(38, 46)) * b,
            parseFloat(z.substring(46, 54)) * b
          )),
          (y.hetatm = !0),
          "HOH" === d(z.substring(17, 20)) && (y.isWater = !0),
          g.atoms.push(y),
          (w[parseInt(d(z.substring(6, 11)))] = y);
      else if (z.startsWith("CONECT")) {
        if (((y = parseInt(d(z.substring(6, 11)))), w[y]))
          for (y = w[y], f = 0; 4 > f; f++)
            if (
              ((q = d(z.substring(11 + 5 * f, 16 + 5 * f))),
              0 !== q.length && ((q = parseInt(q)), w[q]))
            ) {
              q = w[q];
              A = !1;
              for (let a = 0, b = g.bonds.length; a < b; a++) {
                let b = g.bonds[a];
                if ((b.a1 === y && b.a2 === q) || (b.a1 === q && b.a2 === y)) {
                  A = !0;
                  break;
                }
              }
              A || g.bonds.push(new n.Bond(y, q));
            }
      } else if (z.startsWith("TER")) this.endChain(g, u, C, a), (u = []);
      else if (z.startsWith("ENDMDL")) break;
    }
    this.endChain(g, u, C, a);
    0 === g.bonds.length &&
      new e.informatics.BondDeducer().deduceCovalentBonds(g, b);
    if (this.deduceResidueBonds)
      for (let c = 0, d = a.length; c < d; c++)
        for (b = k.min(d, c + 20), C = c + 1; C < b; C++)
          (h = a[c]),
            (m = a[C]),
            h.distance3D(m) <
              1.1 * (r[h.label].covalentRadius + r[m.label].covalentRadius) &&
              g.bonds.push(new n.Bond(h, m, 1));
    g.atoms = g.atoms.concat(a);
    this.calculateRibbonDistances && this.calculateDistances(g, a);
    return g;
  };
  b.endChain = function (a, b, c, d) {
    if (0 < b.length) {
      var g = b[b.length - 1];
      g.cp1 || (g.cp1 = d[d.length - 2]);
      g.cp2 || (g.cp2 = d[d.length - 1]);
      for (d = 0; 4 > d; d++)
        (g = new n.Residue(-1)),
          (g.cp1 = c),
          (g.cp2 = b[b.length - 1].cp2),
          b.push(g);
      a.chains.push(b);
    }
  };
  b.calculateDistances = function (a, b) {
    let c = [];
    for (let b = 0, d = a.atoms.length; b < d; b++) {
      let d = a.atoms[b];
      d.hetatm && (d.isWater || c.push(d));
    }
    for (let d = 0, g = b.length; d < g; d++)
      if (
        ((a = b[d]),
        (a.closestDistance = Number.POSITIVE_INFINITY),
        0 === c.length)
      )
        a.closestDistance = 0;
      else
        for (let b = 0, d = c.length; b < d; b++)
          a.closestDistance = Math.min(a.closestDistance, a.distance3D(c[b]));
  };
  let h = new p.PDBInterpreter();
  e.readPDB = function (a, b) {
    return h.read(a, b);
  };
})(
  ChemDoodle,
  ChemDoodle.io,
  ChemDoodle.structures,
  ChemDoodle.ELEMENT,
  ChemDoodle.lib.jQuery.trim,
  Math
);
(function (e, p, n, r, d) {
  let k = {
      "@": 0,
      A: 1,
      B: 2,
      C: 3,
      D: 4,
      E: 5,
      F: 6,
      G: 7,
      H: 8,
      I: 9,
      a: -1,
      b: -2,
      c: -3,
      d: -4,
      e: -5,
      f: -6,
      g: -7,
      h: -8,
      i: -9,
    },
    b = {
      "%": 0,
      J: 1,
      K: 2,
      L: 3,
      M: 4,
      N: 5,
      O: 6,
      P: 7,
      Q: 8,
      R: 9,
      j: -1,
      k: -2,
      l: -3,
      m: -4,
      n: -5,
      o: -6,
      p: -7,
      q: -8,
      r: -9,
    },
    c = { S: 1, T: 2, U: 3, V: 4, W: 5, X: 6, Y: 7, Z: 8, s: 9 };
  p.JCAMPInterpreter = function () {};
  r = p.JCAMPInterpreter.prototype = new p._Interpreter();
  r.convertHZ2PPM = !1;
  r.read = function (a) {
    this.isBreak = function (a) {
      return (
        k[a] !== d ||
        b[a] !== d ||
        c[a] !== d ||
        " " === a ||
        "-" === a ||
        "+" === a
      );
    };
    this.getValue = function (a, c) {
      let f = a.charAt(0);
      a = a.substring(1);
      return k[f] !== d
        ? parseFloat(k[f] + a)
        : b[f] !== d
        ? parseFloat(b[f] + a) + c
        : parseFloat(a);
    };
    let g = new n.Spectrum();
    if (a === d || 0 === a.length) return g;
    a = a.split("\n");
    let e = [],
      h,
      m,
      r,
      u,
      w = 1,
      p = 1,
      y = 1,
      f = -1;
    var q = -1;
    let A = !0,
      C = !1;
    for (let l = 0, v = a.length; l < v; l++) {
      var B = a[l].trim(),
        D = B.indexOf("$$");
      -1 !== D && (B = B.substring(0, D));
      if (0 !== e.length && a[l].startsWith("##"))
        if (
          ((D = e.join("")),
          A && 100 > D.length && g.metadata.push(D),
          (e = [B]),
          D.startsWith("##TITLE\x3d"))
        )
          g.title = D.substring(8).trim();
        else if (D.startsWith("##XUNITS\x3d"))
          (g.xUnit = D.substring(9).trim()),
            this.convertHZ2PPM &&
              "HZ" === g.xUnit.toUpperCase() &&
              ((g.xUnit = "PPM"), (C = !0));
        else if (D.startsWith("##YUNITS\x3d")) g.yUnit = D.substring(9).trim();
        else {
          if (!D.startsWith("##XYPAIRS\x3d"))
            if (D.startsWith("##FIRSTX\x3d"))
              m = parseFloat(D.substring(9).trim());
            else if (D.startsWith("##LASTX\x3d"))
              h = parseFloat(D.substring(8).trim());
            else if (D.startsWith("##FIRSTY\x3d"))
              r = parseFloat(D.substring(9).trim());
            else if (D.startsWith("##NPOINTS\x3d"))
              u = parseFloat(D.substring(10).trim());
            else if (D.startsWith("##XFACTOR\x3d"))
              w = parseFloat(D.substring(10).trim());
            else if (D.startsWith("##YFACTOR\x3d"))
              p = parseFloat(D.substring(10).trim());
            else if (D.startsWith("##DELTAX\x3d"))
              parseFloat(D.substring(9).trim());
            else if (D.startsWith("##.OBSERVE FREQUENCY\x3d"))
              this.convertHZ2PPM && (y = parseFloat(D.substring(21).trim()));
            else if (D.startsWith("##.SHIFT REFERENCE\x3d"))
              this.convertHZ2PPM &&
                ((q = D.substring(19).split(",")),
                (f = parseInt(q[2].trim())),
                (q = parseFloat(q[3].trim())));
            else if (D.startsWith("##XYDATA\x3d")) {
              C || (y = 1);
              B = A = !1;
              D = D.split("\n");
              var F = (h - m) / (u - 1),
                L = m - F,
                H = r,
                K = 0;
              let a;
              for (let f = 1, e = D.length; f < e; f++) {
                var N = [];
                L = D[f].trim();
                H = [];
                for (let a = 0, b = L.length; a < b; a++)
                  this.isBreak(L.charAt(a))
                    ? (0 < H.length &&
                        (1 !== H.length || " " !== H[0]) &&
                        N.push(H.join("")),
                      (H = [L.charAt(a)]))
                    : H.push(L.charAt(a));
                N.push(H.join(""));
                L = parseFloat(N[0]) * w - F;
                for (let f = 1, e = N.length; f < e; f++)
                  if (((H = N[f]), c[H.charAt(0)] !== d)) {
                    let b = parseInt(c[H.charAt(0)] + H.substring(1)) - 1;
                    for (let c = 0; c < b; c++)
                      (L += F),
                        (K = this.getValue(a, K)),
                        (H = K * p),
                        (g.data[g.data.length - 1] = new n.Point(L / y, H));
                  } else
                    k[H.charAt(0)] !== d && B
                      ? (H = this.getValue(H, K) * p)
                      : ((B = b[H.charAt(0)] !== d),
                        (a = H),
                        (L += F),
                        (K = this.getValue(H, K)),
                        (H = K * p),
                        g.data.push(new n.Point(L / y, H)));
              }
              if (-1 !== f) {
                B = q - g.data[f - 1].x;
                for (let a = 0, b = g.data.length; a < b; a++) g.data[a].x += B;
              }
            } else if (D.startsWith("##PEAK TABLE\x3d")) {
              A = !1;
              g.continuous = !1;
              B = D.split("\n");
              D = /[\s,]+/;
              for (let a = 1, b = B.length; a < b; a++) {
                F = B[a].split(D);
                for (let a = 0, b = F.length; a + 1 < b; a += 2)
                  g.data.push(
                    new n.Point(
                      parseFloat(F[a].trim()),
                      parseFloat(F[a + 1].trim())
                    )
                  );
              }
            } else if (D.startsWith("##ATOMLIST\x3d")) {
              g.molecule = new n.Molecule();
              B = D.split("\n");
              D = /[\s]+/;
              for (let a = 1, b = B.length; a < b; a++)
                (F = B[a].split(D)), g.molecule.atoms.push(new n.Atom(F[1]));
            } else if (D.startsWith("##BONDLIST\x3d")) {
              B = D.split("\n");
              D = /[\s]+/;
              for (let a = 1, b = B.length; a < b; a++)
                (F = B[a].split(D)),
                  (K = 1),
                  "D" === F[2] ? (K = 2) : "T" === F[2] && (K = 3),
                  g.molecule.bonds.push(
                    new n.Bond(
                      g.molecule.atoms[parseInt(F[0]) - 1],
                      g.molecule.atoms[parseInt(F[1]) - 1],
                      K
                    )
                  );
            } else if (g.molecule && D.startsWith("##XY_RASTER\x3d")) {
              B = D.split("\n");
              D = /[\s]+/;
              for (let a = 1, b = B.length; a < b; a++)
                (F = B[a].split(D)),
                  (K = g.molecule.atoms[parseInt(F[0]) - 1]),
                  (K.x = parseInt(F[1])),
                  (K.y = parseInt(F[2])),
                  4 == F.length && (K.z = parseInt(F[3]));
              g.molecule.scaleToAverageBondLength(20);
            } else if (D.startsWith("##PEAK ASSIGNMENTS\x3d")) {
              B = D.split("\n");
              D = /[\s,()<>]+/;
              g.assignments = [];
              for (let a = 1, b = B.length; a < b; a++) {
                N = B[a].split(D);
                F = parseFloat(N[1]);
                K = parseFloat(N[2]);
                N = g.molecule.atoms[parseInt(N[3]) - 1];
                L = !1;
                for (let a = 0, b = g.assignments.length; a < b; a++)
                  if (((H = g.assignments[a]), H.x === F)) {
                    H.as.push(N);
                    N.assigned = H;
                    L = !0;
                    break;
                  }
                L ||
                  ((F = { x: F, y: K, as: [N] }),
                  (N.assigned = F),
                  g.assignments.push(F));
              }
            }
        }
      else
        (B = B.trim()),
          0 !== e.length && 0 !== B.length && e.push("\n"),
          e.push(B);
    }
    g.setup();
    return g;
  };
  r.makeStructureSpectrumSet = function (a, b) {
    this.convertHZ2PPM = !0;
    let c = this.read(b),
      g = new e.ViewerCanvas(a + "_molecule", 200, 200);
    g.styles.atoms_displayTerminalCarbonLabels_2D = !0;
    g.styles.atoms_displayImplicitHydrogens_2D = !0;
    g.mouseout = function (a) {
      if (0 !== this.molecules.length) {
        for (let a = 0, b = this.molecules[0].atoms.length; a < b; a++)
          this.molecules[0].atoms[a].isHover = !1;
        c.hovered = d;
        this.repaint();
        h.repaint();
      }
    };
    g.touchend = g.mouseout;
    g.mousemove = function (a) {
      if (0 !== this.molecules.length) {
        let b = d;
        for (let c = 0, g = this.molecules[0].atoms.length; c < g; c++) {
          let g = this.molecules[0].atoms[c];
          g.isHover = !1;
          g.assigned &&
            (b === d || a.p.distance(g) < a.p.distance(b)) &&
            (b = g);
        }
        c.hovered = d;
        if (20 > a.p.distance(b)) {
          for (let a = 0, c = b.assigned.as.length; a < c; a++)
            b.assigned.as[a].isHover = !0;
          h.spectrum.hovered = b.assigned;
        }
        this.repaint();
        h.repaint();
      }
    };
    g.touchmove = g.mousemove;
    g.drawChildExtras = function (a, b) {
      if (0 !== this.molecules.length)
        for (let c = 0, d = this.molecules[0].atoms.length; c < d; c++)
          this.molecules[0].atoms[c].drawDecorations(a, b);
    };
    let h = new e.ObserverCanvas(a + "_spectrum", 400, 200);
    h.styles.plots_showYAxis = !1;
    h.styles.plots_flipXAxis = !0;
    h.mouseout = function (a) {
      if (this.spectrum && this.spectrum.assignments) {
        for (let a = 0, b = g.molecules[0].atoms.length; a < b; a++)
          g.molecules[0].atoms[a].isHover = !1;
        this.spectrum.hovered = d;
        g.repaint();
        this.repaint();
      }
    };
    h.touchend = h.mouseout;
    h.mousemove = function (a) {
      if (this.spectrum && this.spectrum.assignments) {
        let b = d;
        for (let a = 0, b = g.molecules[0].atoms.length; a < b; a++)
          g.molecules[0].atoms[a].isHover = !1;
        this.spectrum.hovered = d;
        for (let c = 0, g = this.spectrum.assignments.length; c < g; c++) {
          let g = this.spectrum.assignments[c];
          if (
            b === d ||
            Math.abs(
              this.spectrum.getTransformedX(
                g.x,
                this.styles,
                this.spectrum.memory.width,
                this.spectrum.memory.offsetLeft
              ) - a.p.x
            ) <
              Math.abs(
                this.spectrum.getTransformedX(
                  b.x,
                  this.styles,
                  this.spectrum.memory.width,
                  this.spectrum.memory.offsetLeft
                ) - a.p.x
              )
          )
            b = g;
        }
        if (
          20 >
          Math.abs(
            this.spectrum.getTransformedX(
              b.x,
              this.styles,
              this.spectrum.memory.width,
              this.spectrum.memory.offsetLeft
            ) - a.p.x
          )
        ) {
          for (let a = 0, c = b.as.length; a < c; a++) b.as[a].isHover = !0;
          this.spectrum.hovered = b;
        }
        g.repaint();
        this.repaint();
      }
    };
    h.touchmove = h.mousemove;
    h.drawChildExtras = function (a) {
      if (this.spectrum && this.spectrum.hovered) {
        let b = this.spectrum.getTransformedX(
          this.spectrum.hovered.x,
          h.styles,
          this.spectrum.memory.width,
          this.spectrum.memory.offsetLeft
        );
        b >= this.spectrum.memory.offsetLeft &&
          b < this.spectrum.memory.width &&
          (a.save(),
          (a.strokeStyle = "#885110"),
          (a.lineWidth = 3),
          a.beginPath(),
          a.moveTo(
            b,
            this.spectrum.memory.height - this.spectrum.memory.offsetBottom
          ),
          a.lineTo(
            b,
            this.spectrum.getTransformedY(
              this.spectrum.hovered.y,
              h.styles,
              this.spectrum.memory.height,
              this.spectrum.memory.offsetBottom,
              this.spectrum.memory.offsetTop
            )
          ),
          a.stroke(),
          a.restore());
      }
    };
    c && (h.loadSpectrum(c), c.molecule && g.loadMolecule(c.molecule));
    return [g, h];
  };
  let h = new p.JCAMPInterpreter();
  h.convertHZ2PPM = !0;
  e.readJCAMP = function (a) {
    return h.read(a);
  };
})(ChemDoodle, ChemDoodle.io, ChemDoodle.structures, ChemDoodle.lib.jQuery);
(function (e, p, n, r, d, k, b) {
  p.JSONInterpreter = function () {};
  let c = p.JSONInterpreter.prototype;
  c.contentTo = function (a, c) {
    a || (a = []);
    c || (c = []);
    var d = 0,
      g = 0;
    for (let b = 0, c = a.length; b < c; b++) {
      let c = a[b];
      for (let a = 0, b = c.atoms.length; a < b; a++)
        c.atoms[a].tmpid = "a" + d++;
      for (let a = 0, b = c.bonds.length; a < b; a++)
        c.bonds[a].tmpid = "b" + g++;
    }
    d = 0;
    for (let a = 0, b = c.length; a < b; a++) c[a].tmpid = "s" + d++;
    d = {};
    if (a && 0 < a.length) {
      d.m = [];
      for (let b = 0, c = a.length; b < c; b++) d.m.push(this.molTo(a[b]));
    }
    if (c && 0 < c.length) {
      d.s = [];
      for (let a = 0, b = c.length; a < b; a++) d.s.push(this.shapeTo(c[a]));
    }
    for (let c = 0, d = a.length; c < d; c++) {
      g = a[c];
      for (let a = 0, c = g.atoms.length; a < c; a++) g.atoms[a].tmpid = b;
      for (let a = 0, c = g.bonds.length; a < c; a++) g.bonds[a].tmpid = b;
    }
    for (let a = 0, d = c.length; a < d; a++) c[a].tmpid = b;
    return d;
  };
  c.contentFrom = function (a) {
    let c = { molecules: [], shapes: [] };
    if (a.m)
      for (let b = 0, d = a.m.length; b < d; b++)
        c.molecules.push(this.molFrom(a.m[b]));
    if (a.s)
      for (let b = 0, d = a.s.length; b < d; b++)
        c.shapes.push(this.shapeFrom(a.s[b], c.molecules));
    for (let d = 0, g = c.molecules.length; d < g; d++) {
      a = c.molecules[d];
      for (let c = 0, d = a.atoms.length; c < d; c++) a.atoms[c].tmpid = b;
      for (let c = 0, d = a.bonds.length; c < d; c++) a.bonds[c].tmpid = b;
    }
    for (let a = 0, d = c.shapes.length; a < d; a++) c.shapes[a].tmpid = b;
    return c;
  };
  c.queryTo = function (a) {
    let b = {},
      c = function (b, c, d, g) {
        c && (b[d] = { v: g ? a.outputRange(c.v) : c.v, n: c.not });
      };
    a.type === n.Query.TYPE_ATOM
      ? (c(b, a.elements, "as"),
        c(b, a.chirality, "@"),
        c(b, a.aromatic, "A"),
        c(b, a.charge, "C", !0),
        c(b, a.hydrogens, "H", !0),
        c(b, a.ringCount, "R", !0),
        c(b, a.saturation, "S"),
        c(b, a.connectivity, "X", !0),
        c(b, a.connectivityNoH, "x", !0))
      : (c(b, a.orders, "bs"),
        c(b, a.stereo, "@"),
        c(b, a.aromatic, "A"),
        c(b, a.ringCount, "R", !0));
    return b;
  };
  c.molTo = function (a) {
    let b = { a: [] };
    for (let g = 0, e = a.atoms.length; g < e; g++) {
      var c = a.atoms[g],
        d = { x: c.x, y: c.y };
      c.tmpid && (d.i = c.tmpid);
      "C" !== c.label && (d.l = c.label);
      0 !== c.z && (d.z = c.z);
      0 !== c.charge && (d.c = c.charge);
      -1 !== c.mass && (d.m = c.mass);
      -1 !== c.implicitH && (d.h = c.implicitH);
      0 !== c.numRadical && (d.r = c.numRadical);
      0 !== c.numLonePair && (d.p = c.numLonePair);
      c.enhancedStereo &&
        c.enhancedStereo.type !== n.Atom.ESTEREO_ABSOLUTE &&
        ((d.s2 = { t: c.enhancedStereo.type }),
        1 < c.enhancedStereo.group && (d.s2.g = c.enhancedStereo.group));
      c.query && (d.q = this.queryTo(c.query));
      b.a.push(d);
    }
    if (0 < a.bonds.length) {
      b.b = [];
      for (let g = 0, e = a.bonds.length; g < e; g++)
        (c = a.bonds[g]),
          (d = { b: a.atoms.indexOf(c.a1), e: a.atoms.indexOf(c.a2) }),
          c.tmpid && (d.i = c.tmpid),
          1 !== c.bondOrder && (d.o = c.bondOrder),
          c.stereo !== n.Bond.STEREO_NONE && (d.s = c.stereo),
          c.query && (d.q = this.queryTo(c.query)),
          b.b.push(d);
    }
    return b;
  };
  c.queryFrom = function (a) {
    let b = new n.Query(a.as ? n.Query.TYPE_ATOM : n.Query.TYPE_BOND),
      c = function (a, b, c, d) {
        b &&
          ((a[c] = {}),
          (a[c].v = d ? a.parseRange(b.v) : b.v),
          b.n && (a[c].not = !0));
      };
    b.type === n.Query.TYPE_ATOM
      ? (c(b, a.as, "elements"),
        c(b, a["@"], "chirality"),
        c(b, a.A, "aromatic"),
        c(b, a.C, "charge", !0),
        c(b, a.H, "hydrogens", !0),
        c(b, a.R, "ringCount", !0),
        c(b, a.S, "saturation"),
        c(b, a.X, "connectivity", !0),
        c(b, a.x, "connectivityNoH", !0))
      : (c(b, a.bs, "orders"),
        c(b, a["@"], "stereo"),
        c(b, a.A, "aromatic"),
        c(b, a.R, "ringCount", !0));
    return b;
  };
  c.molFrom = function (a) {
    let c = new n.Molecule();
    for (let g = 0, h = a.a.length; g < h; g++) {
      var d = a.a[g],
        e = new n.Atom(d.l ? d.l : "C", d.x, d.y);
      d.i && (e.tmpid = d.i);
      d.z && (e.z = d.z);
      d.c && (e.charge = d.c);
      d.m && (e.mass = d.m);
      d.h && (e.implicitH = d.h);
      d.r && (e.numRadical = d.r);
      d.p && (e.numLonePair = d.p);
      d.s2 &&
        (e.enhancedStereo = { type: d.s2.t, group: d.s2.g === b ? 1 : d.s2.g });
      d.q && (e.query = this.queryFrom(d.q));
      d.p_h !== b && (e.hetatm = d.p_h);
      d.p_w !== b && (e.isWater = d.p_w);
      d.p_d !== b && (e.closestDistance = d.p_d);
      c.atoms.push(e);
    }
    if (a.b)
      for (let g = 0, h = a.b.length; g < h; g++)
        (d = a.b[g]),
          (e = new n.Bond(c.atoms[d.b], c.atoms[d.e], d.o === b ? 1 : d.o)),
          d.i && (e.tmpid = d.i),
          d.s && (e.stereo = d.s),
          d.q && (e.query = this.queryFrom(d.q)),
          c.bonds.push(e);
    return c;
  };
  c.shapeTo = function (a) {
    let b = {};
    a.tmpid && (b.i = a.tmpid);
    if (a instanceof r.Line)
      (b.t = "Line"),
        (b.x1 = a.p1.x),
        (b.y1 = a.p1.y),
        (b.x2 = a.p2.x),
        (b.y2 = a.p2.y),
        (b.a = a.arrowType);
    else if (a instanceof r.Pusher)
      (b.t = "Pusher"),
        (b.o1 = a.o1.tmpid),
        (b.o2 = a.o2.tmpid),
        1 !== a.numElectron && (b.e = a.numElectron);
    else if (a instanceof r.AtomMapping)
      (b.t = "AtomMapping"), (b.a1 = a.o1.tmpid), (b.a2 = a.o2.tmpid);
    else if (a instanceof r.Bracket)
      (b.t = "Bracket"),
        (b.x1 = a.p1.x),
        (b.y1 = a.p1.y),
        (b.x2 = a.p2.x),
        (b.y2 = a.p2.y),
        0 !== a.charge && (b.c = a.charge),
        0 !== a.mult && (b.m = a.mult),
        0 !== a.repeat && (b.r = a.repeat);
    else if (a instanceof r.RepeatUnit)
      (b.t = "RepeatUnit"),
        (b.b1 = a.b1.tmpid),
        (b.b2 = a.b2.tmpid),
        (b.n1 = a.n1),
        (b.n2 = a.n2),
        !0 === a.flip && (b.f = !0);
    else if (a instanceof r.VAP) {
      b.t = "VAP";
      b.x = a.asterisk.x;
      b.y = a.asterisk.y;
      1 !== a.bondType && (b.o = a.bondType);
      a.substituent && (b.s = a.substituent.tmpid);
      b.a = [];
      for (let c = 0, d = a.attachments.length; c < d; c++)
        b.a.push(a.attachments[c].tmpid);
    } else if (a instanceof d.Distance)
      (b.t = "Distance"),
        (b.a1 = a.a1.tmpid),
        (b.a2 = a.a2.tmpid),
        a.node && ((b.n = a.node), (b.o = a.offset));
    else if (a instanceof d.Angle)
      (b.t = "Angle"),
        (b.a1 = a.a1.tmpid),
        (b.a2 = a.a2.tmpid),
        (b.a3 = a.a3.tmpid);
    else if (a instanceof d.Torsion)
      (b.t = "Torsion"),
        (b.a1 = a.a1.tmpid),
        (b.a2 = a.a2.tmpid),
        (b.a3 = a.a3.tmpid),
        (b.a4 = a.a4.tmpid);
    else if (a instanceof d._Surface) {
      b.t = "Surface";
      b.a = [];
      for (let c = 0, d = a.atoms.length; c < d; c++)
        b.a.push(a.atoms[c].tmpid);
      a instanceof d.VDWSurface || (b.p = a.probeRadius);
      b.r = a.resolution;
      let c = "vdw";
      a instanceof d.SASSurface
        ? (c = "sas")
        : d.SESSurface && a instanceof d.SESSurface && (c = "ses");
      b.f = c;
    } else
      a instanceof d.UnitCell &&
        ((b.t = "UnitCell"),
        (b.ls = a.lengths),
        (b.as = a.angles),
        (b.os = a.offset));
    return b;
  };
  c.shapeFrom = function (a, c) {
    if ("Line" === a.t) {
      var e = new r.Line(new n.Point(a.x1, a.y1), new n.Point(a.x2, a.y2));
      e.arrowType = a.a;
    } else if ("Pusher" === a.t) {
      var g, h;
      for (let b = 0, d = c.length; b < d; b++) {
        e = c[b];
        for (let b = 0, c = e.atoms.length; b < c; b++) {
          var k = e.atoms[b];
          k.tmpid === a.o1 ? (g = k) : k.tmpid === a.o2 && (h = k);
        }
        for (let b = 0, c = e.bonds.length; b < c; b++)
          (k = e.bonds[b]),
            k.tmpid === a.o1 ? (g = k) : k.tmpid === a.o2 && (h = k);
      }
      e = new r.Pusher(g, h);
      a.e && (e.numElectron = a.e);
    } else if ("AtomMapping" === a.t) {
      let b;
      for (let d = 0, h = c.length; d < h; d++) {
        e = c[d];
        for (let c = 0, d = e.atoms.length; c < d; c++)
          (g = e.atoms[c]),
            g.tmpid === a.a1 ? (k = g) : g.tmpid === a.a2 && (b = g);
      }
      e = new r.AtomMapping(k, b);
    } else if ("Bracket" === a.t)
      (e = new r.Bracket(new n.Point(a.x1, a.y1), new n.Point(a.x2, a.y2))),
        a.c !== b && (e.charge = a.c),
        a.m !== b && (e.mult = a.m),
        a.r !== b && (e.repeat = a.r);
    else if ("RepeatUnit" === a.t || "DynamicBracket" === a.t) {
      let b, d;
      for (let h = 0, m = c.length; h < m; h++) {
        e = c[h];
        for (let c = 0, h = e.bonds.length; c < h; c++)
          (g = e.bonds[c]),
            g.tmpid === a.b1 ? (b = g) : g.tmpid === a.b2 && (d = g);
      }
      e = new r.RepeatUnit(b, d);
      e.n1 = a.n1;
      e.n2 = a.n2;
      a.f && (e.flip = !0);
    } else if ("VAP" === a.t) {
      e = new r.VAP(a.x, a.y);
      a.o && (e.bondType = a.o);
      for (let b = 0, d = c.length; b < d; b++) {
        g = c[b];
        for (let b = 0, c = g.atoms.length; b < c; b++)
          if (((h = g.atoms[b]), h.tmpid === a.s)) e.substituent = h;
          else
            for (let b = 0, c = a.a.length; b < c; b++)
              h.tmpid === a.a[b] && e.attachments.push(h);
      }
    } else if ("Distance" === a.t) {
      let b, h;
      for (let d = 0, m = c.length; d < m; d++) {
        e = c[d];
        for (let c = 0, d = e.atoms.length; c < d; c++)
          (g = e.atoms[c]),
            g.tmpid === a.a1 ? (b = g) : g.tmpid === a.a2 && (h = g);
      }
      e = new d.Distance(b, h, a.n, a.o);
    } else if ("Angle" === a.t) {
      let b, h, m;
      for (let d = 0, f = c.length; d < f; d++) {
        e = c[d];
        for (let c = 0, d = e.atoms.length; c < d; c++)
          (g = e.atoms[c]),
            g.tmpid === a.a1
              ? (b = g)
              : g.tmpid === a.a2
              ? (h = g)
              : g.tmpid === a.a3 && (m = g);
      }
      e = new d.Angle(b, h, m);
    } else if ("Torsion" === a.t) {
      let b, h, m, k;
      for (let d = 0, l = c.length; d < l; d++) {
        e = c[d];
        for (let c = 0, d = e.atoms.length; c < d; c++)
          (g = e.atoms[c]),
            g.tmpid === a.a1
              ? (b = g)
              : g.tmpid === a.a2
              ? (h = g)
              : g.tmpid === a.a3
              ? (m = g)
              : g.tmpid === a.a4 && (k = g);
      }
      e = new d.Torsion(b, h, m, k);
    } else if ("Surface" === a.t) {
      g = [];
      for (let b = 0, d = c.length; b < d; b++) {
        h = c[b];
        for (let b = 0, c = h.atoms.length; b < c; b++) {
          k = h.atoms[b];
          for (let b = 0, c = a.a.length; b < c; b++)
            k.tmpid === a.a[b] && g.push(k);
        }
      }
      c = a.p ? a.p : 1.4;
      h = a.r ? a.r : 30;
      "vdw" === a.f
        ? (e = new d.VDWSurface(g, h))
        : "sas" === a.f
        ? (e = new d.SASSurface(g, c, h))
        : "ses" === a.f && (e = new d.SESSurface(g, c, h));
    } else "UnitCell" === a.t && (e = new d.UnitCell(a.ls, a.as, a.os));
    return e;
  };
  c.pdbFrom = function (a) {
    let b = this.molFrom(a.mol);
    b.findRings = !1;
    b.fromJSON = !0;
    b.chains = this.chainsFrom(a.ribbons);
    return b;
  };
  c.chainsFrom = function (a) {
    let b = [];
    for (let c = 0, d = a.cs.length; c < d; c++) {
      let d = a.cs[c],
        e = [];
      for (let a = 0, b = d.length; a < b; a++) {
        let b = d[a],
          c = new n.Residue();
        c.name = b.n;
        c.cp1 = new n.Atom("", b.x1, b.y1, b.z1);
        c.cp2 = new n.Atom("", b.x2, b.y2, b.z2);
        b.x3 &&
          ((c.cp3 = new n.Atom("", b.x3, b.y3, b.z3)),
          (c.cp4 = new n.Atom("", b.x4, b.y4, b.z4)),
          (c.cp5 = new n.Atom("", b.x5, b.y5, b.z5)));
        c.helix = b.h;
        c.sheet = b.s;
        c.arrow = 0 < a && d[a - 1].a;
        e.push(c);
      }
      b.push(e);
    }
    return b;
  };
  let h = new p.JSONInterpreter();
  e.readJSON = function (a) {
    let c;
    try {
      c = k.parse(a);
    } catch (l) {
      return b;
    }
    return c
      ? c.m || c.s
        ? h.contentFrom(c)
        : c.a
        ? { molecules: [h.molFrom(c)], shapes: [] }
        : { molecules: [], shapes: [] }
      : b;
  };
  e.writeJSON = function (a, b) {
    return k.stringify(h.contentTo(a, b));
  };
})(
  ChemDoodle,
  ChemDoodle.io,
  ChemDoodle.structures,
  ChemDoodle.structures.d2,
  ChemDoodle.structures.d3,
  JSON
);
(function (e, p, n, r) {
  p.RXNInterpreter = function () {};
  let d = (p.RXNInterpreter.prototype = new p._Interpreter());
  d.read = function (b, c) {
    c || (c = e.DEFAULT_STYLES.bondLength_2D);
    let d = [];
    if (b) {
      var a = b.split("$MOL\n");
      b = a[0].split("\n")[4];
      var g = parseInt(b.substring(0, 3)),
        k = parseInt(b.substring(3, 6)),
        r = 1;
      b = 0;
      for (let h = 0, l = g + k; h < l; h++) {
        d[h] = e.readMOL(a[r], c);
        let g = d[h].getBounds();
        b -= g.maxX - g.minX + 40;
        r++;
      }
      for (let e = 0, h = g; e < h; e++) {
        c = d[e].getBounds();
        c = c.maxX - c.minX;
        a = d[e].getCenter();
        for (let g = 0, h = d[e].atoms.length; g < h; g++)
          (r = d[e].atoms[g]), (r.x += b + c / 2 - a.x), (r.y -= a.y);
        b += c + 40;
      }
      c = new n.d2.Line(new n.Point(b, 0), new n.Point(b + 40, 0));
      b += 80;
      for (let c = g, e = g + k; c < e; c++) {
        g = d[c].getBounds();
        g = g.maxX - g.minX;
        k = d[c].getCenter();
        for (a = 0; a < d[c].atoms.length; a++)
          (r = d[c].atoms[a]), (r.x += b + g / 2 - k.x), (r.y -= k.y);
        b += g + 40;
      }
    } else
      d.push(new n.Molecule()),
        (c = new n.d2.Line(new n.Point(-20, 0), new n.Point(20, 0)));
    c.arrowType = n.d2.Line.ARROW_SYNTHETIC;
    return { molecules: d, shapes: [c] };
  };
  d.write = function (b, c) {
    let d = r;
    if (b && c) {
      for (let a = 0, b = c.length; a < b; a++)
        if (c[a] instanceof n.d2.Line) {
          d = c[a];
          break;
        }
      if (!d) return "";
      b = new n.Reaction().resolve(d, b);
      c = [];
      c.push(
        "$RXN\nReaction from ChemDoodle Web Components\n\nhttp://www.ichemlabs.com\n"
      );
      c.push(this.fit(b.reactants.length.toString(), 3));
      c.push(this.fit(b.products.length.toString(), 3));
      c.push("\n");
      for (let a = 0, d = b.reactants.length; a < d; a++)
        c.push("$MOL\n"), c.push(e.writeMOL(b.reactants[a])), c.push("\n");
      for (let a = 0, d = b.products.length; a < d; a++)
        c.push("$MOL\n"), c.push(e.writeMOL(b.products[a])), c.push("\n");
      return c.join("");
    }
  };
  let k = new p.RXNInterpreter();
  e.readRXN = function (b, c) {
    return k.read(b, c);
  };
  e.writeRXN = function (b, c) {
    return k.write(b, c);
  };
})(ChemDoodle, ChemDoodle.io, ChemDoodle.structures);
(function (e, p, n, r, d, k, b) {
  r.XYZInterpreter = function () {};
  p = r.XYZInterpreter.prototype = new r._Interpreter();
  p.deduceCovalentBonds = !0;
  p.read = function (b) {
    let a = new d.Molecule();
    if (!b) return a;
    b = b.split("\n");
    let c = parseInt(k(b[0]));
    for (let e = 0; e < c; e++) {
      let c = b[e + 2].split(/\s+/g);
      a.atoms[e] = new d.Atom(
        isNaN(c[0]) ? c[0] : n[parseInt(c[0]) - 1],
        parseFloat(c[1]),
        parseFloat(c[2]),
        parseFloat(c[3])
      );
    }
    this.deduceCovalentBonds &&
      new e.informatics.BondDeducer().deduceCovalentBonds(a, 1);
    return a;
  };
  let c = new r.XYZInterpreter();
  e.readXYZ = function (b) {
    return c.read(b);
  };
})(
  ChemDoodle,
  ChemDoodle.ELEMENT,
  ChemDoodle.SYMBOLS,
  ChemDoodle.io,
  ChemDoodle.structures,
  ChemDoodle.lib.jQuery.trim
);
ChemDoodle.monitor = (function (e, p, n, r) {
  let d = {};
  d.CANVAS_DRAGGING = r;
  d.CANVAS_OVER = r;
  d.ALT = !1;
  d.SHIFT = !1;
  d.META = !1;
  e.supports_touch() ||
    p(n).ready(function () {
      p(n).mousemove(function (e) {
        d.CANVAS_DRAGGING &&
          d.CANVAS_DRAGGING.drag &&
          (d.CANVAS_DRAGGING.prehandleEvent(e), d.CANVAS_DRAGGING.drag(e));
      });
      p(n).mouseup(function (e) {
        d.CANVAS_DRAGGING &&
          d.CANVAS_DRAGGING !== d.CANVAS_OVER &&
          d.CANVAS_DRAGGING.mouseup &&
          (d.CANVAS_DRAGGING.prehandleEvent(e), d.CANVAS_DRAGGING.mouseup(e));
        d.CANVAS_DRAGGING = r;
      });
      p(n).keydown(function (e) {
        d.SHIFT = e.shiftKey;
        d.ALT = e.altKey;
        d.META = e.metaKey || e.ctrlKey;
        let b = d.CANVAS_OVER;
        d.CANVAS_DRAGGING && (b = d.CANVAS_DRAGGING);
        b && b.keydown && (b.prehandleEvent(e), b.keydown(e));
      });
      p(n).keypress(function (e) {
        let b = d.CANVAS_OVER;
        d.CANVAS_DRAGGING && (b = d.CANVAS_DRAGGING);
        b && b.keypress && (b.prehandleEvent(e), b.keypress(e));
      });
      p(n).keyup(function (e) {
        d.SHIFT = e.shiftKey;
        d.ALT = e.altKey;
        d.META = e.metaKey || e.ctrlKey;
        let b = d.CANVAS_OVER;
        d.CANVAS_DRAGGING && (b = d.CANVAS_DRAGGING);
        b && b.keyup && (b.prehandleEvent(e), b.keyup(e));
      });
    });
  return d;
})(ChemDoodle.featureDetection, ChemDoodle.lib.jQuery, document);
(function (e, p, n, r, d, k, b, c, h, a, g) {
  e._Canvas = function () {};
  let l = e._Canvas.prototype;
  l.molecules = g;
  l.shapes = g;
  l.emptyMessage = g;
  l.image = g;
  l.repaint = function () {
    if (!this.test) {
      var a = c.getElementById(this.id);
      if (a.getContext) {
        let b = a.getContext("2d");
        1 !== this.pixelRatio &&
          a.width === this.width &&
          ((a.width = this.width * this.pixelRatio),
          (a.height = this.height * this.pixelRatio),
          b.scale(this.pixelRatio, this.pixelRatio));
        if (this.image) b.drawImage(this.image, 0, 0);
        else {
          let c = this.styles.backgroundColor
            ? this.styles.backgroundColor
            : "transparent";
          b.clearRect(0, 0, this.width, this.height);
          this.bgCache !== c &&
            ((a.style.backgroundColor = c),
            (this.bgCache = a.style.backgroundColor));
          "transparent" !== c &&
            ((b.fillStyle = c), b.fillRect(0, 0, this.width, this.height));
        }
        if (this.innerRepaint) this.innerRepaint(b);
        else if (0 !== this.molecules.length || 0 !== this.shapes.length) {
          b.save();
          b.translate(this.width / 2, this.height / 2);
          b.rotate(this.styles.rotateAngle);
          b.scale(this.styles.scale, this.styles.scale);
          b.translate(-this.width / 2, -this.height / 2);
          for (let a = 0, c = this.molecules.length; a < c; a++)
            this.molecules[a].check(!0), this.molecules[a].draw(b, this.styles);
          this.checksOnAction && this.checksOnAction(!0);
          for (let a = 0, c = this.shapes.length; a < c; a++)
            this.shapes[a].draw(b, this.styles);
          b.restore();
        } else
          this.emptyMessage &&
            ((b.fillStyle = "#737683"),
            (b.textAlign = "center"),
            (b.textBaseline = "middle"),
            (b.font = "18px Helvetica, Verdana, Arial, Sans-serif"),
            b.fillText(this.emptyMessage, this.width / 2, this.height / 2));
        this.drawChildExtras && this.drawChildExtras(b, this.styles);
      }
    }
  };
  l.resize = function (a, b) {
    let c = k("#" + this.id);
    c.attr({ width: a, height: b });
    c.css("width", a);
    c.css("height", b);
    this.width = a;
    this.height = b;
    if (e._Canvas3D && this instanceof e._Canvas3D)
      1 !== this.pixelRatio &&
        ((a *= this.pixelRatio),
        (b *= this.pixelRatio),
        (this.gl.canvas.width = a),
        (this.gl.canvas.height = b)),
        this.gl.viewport(0, 0, a, b),
        this.afterLoadContent();
    else if (0 < this.molecules.length) {
      this.center();
      for (let a = 0, b = this.molecules.length; a < b; a++)
        this.molecules[a].check();
    }
    this.repaint();
  };
  l.setBackgroundImage = function (a) {
    this.image = new Image();
    let b = this;
    this.image.onload = function () {
      b.repaint();
    };
    this.image.src = a;
  };
  l.loadMolecule = function (a) {
    this.clear();
    this.molecules.push(a);
    for (let b = 0; 2 > b; b++)
      this.center(),
        (e._Canvas3D && this instanceof e._Canvas3D) || a.check(),
        this.afterLoadContent && this.afterLoadContent(),
        this.repaint();
  };
  l.loadContent = function (a, b) {
    this.molecules = a ? a : [];
    this.shapes = b ? b : [];
    for (a = 0; 2 > a; a++) {
      this.center();
      if (!(e._Canvas3D && this instanceof e._Canvas3D))
        for (let a = 0, b = this.molecules.length; a < b; a++)
          this.molecules[a].check();
      this.afterLoadContent && this.afterLoadContent();
      this.repaint();
    }
  };
  l.addMolecule = function (a) {
    this.molecules.push(a);
    (e._Canvas3D && this instanceof e._Canvas3D) || a.check();
    this.repaint();
  };
  l.removeMolecule = function (a) {
    this.molecules = k.grep(this.molecules, function (b) {
      return b !== a;
    });
    this.repaint();
  };
  l.getMolecule = function () {
    return 0 < this.molecules.length ? this.molecules[0] : g;
  };
  l.getMolecules = function () {
    return this.molecules;
  };
  l.addShape = function (a) {
    this.shapes.push(a);
    this.repaint();
  };
  l.removeShape = function (a) {
    this.shapes = k.grep(this.shapes, function (b) {
      return b !== a;
    });
    this.repaint();
  };
  l.getShapes = function () {
    return this.shapes;
  };
  l.clear = function () {
    this.molecules = [];
    this.shapes = [];
    this.styles.scale = 1;
    this.repaint();
  };
  l.center = function () {
    var a = this.getContentBounds(),
      c = new d.Point(
        (this.width - a.minX - a.maxX) / 2,
        (this.height - a.minY - a.maxY) / 2
      );
    for (let a = 0, b = this.molecules.length; a < b; a++) {
      var e = this.molecules[a];
      for (let a = 0, b = e.atoms.length; a < b; a++) e.atoms[a].add(c);
    }
    for (let a = 0, b = this.shapes.length; a < b; a++) {
      e = this.shapes[a].getPoints();
      for (let a = 0, b = e.length; a < b; a++) e[a].add(c);
    }
    this.styles.scale = 1;
    c = a.maxX - a.minX;
    a = a.maxY - a.minY;
    if (c > this.width - 20 || a > this.height - 20)
      this.styles.scale = 0.85 * b.min(this.width / c, this.height / a);
  };
  l.bondExists = function (a, b) {
    for (let c = 0, d = this.molecules.length; c < d; c++) {
      let d = this.molecules[c];
      for (let c = 0, e = d.bonds.length; c < e; c++) {
        let f = d.bonds[c];
        if (f.contains(a) && f.contains(b)) return !0;
      }
    }
    return !1;
  };
  l.getBond = function (a, b) {
    for (let c = 0, d = this.molecules.length; c < d; c++) {
      let d = this.molecules[c];
      for (let c = 0, e = d.bonds.length; c < e; c++) {
        let f = d.bonds[c];
        if (f.contains(a) && f.contains(b)) return f;
      }
    }
    return g;
  };
  l.getMoleculeByAtom = function (a) {
    for (let b = 0, c = this.molecules.length; b < c; b++) {
      let c = this.molecules[b];
      if (-1 !== c.atoms.indexOf(a)) return c;
    }
    return h.undefined;
  };
  l.getAllAtoms = function () {
    let a = [];
    for (let b = 0, c = this.molecules.length; b < c; b++)
      a = a.concat(this.molecules[b].atoms);
    return a;
  };
  l.getAllBonds = function () {
    let a = [];
    for (let b = 0, c = this.molecules.length; b < c; b++)
      a = a.concat(this.molecules[b].bonds);
    return a;
  };
  l.getAllPoints = function () {
    let a = [];
    for (let b = 0, c = this.molecules.length; b < c; b++)
      a = a.concat(this.molecules[b].atoms);
    for (let b = 0, c = this.shapes.length; b < c; b++)
      a = a.concat(this.shapes[b].getPoints());
    return a;
  };
  l.getContentBounds = function () {
    let a = new n.Bounds();
    for (let b = 0, c = this.molecules.length; b < c; b++)
      a.expand(this.molecules[b].getBounds());
    for (let b = 0, c = this.shapes.length; b < c; b++)
      a.expand(this.shapes[b].getBounds());
    return a;
  };
  l.create = function (l, m, n) {
    this.id = l;
    this.width = m;
    this.height = n;
    this.molecules = [];
    this.shapes = [];
    if (c.getElementById(l)) {
      let a = k("#" + l);
      m ? a.attr("width", m) : (this.width = parseInt(a.attr("width")));
      n ? a.attr("height", n) : (this.height = parseInt(a.attr("height")));
      a.attr("class", "ChemDoodleWebComponent");
    } else if (
      e.featureDetection.supports_canvas_text() ||
      -1 == a.indexOf("MSIE")
    )
      c.writeln(
        '\x3ccanvas class\x3d"ChemDoodleWebComponent" id\x3d"' +
          l +
          '" width\x3d"' +
          m +
          '" height\x3d"' +
          n +
          '" alt\x3d"ChemDoodle Web Component"\x3eThis browser does not support HTML5/Canvas.\x3c/canvas\x3e'
      );
    else {
      c.writeln(
        '\x3cdiv style\x3d"border: 1px solid black;" width\x3d"' +
          m +
          '" height\x3d"' +
          n +
          '"\x3ePlease install \x3ca href\x3d"http://code.google.com/chrome/chromeframe/"\x3eGoogle Chrome Frame\x3c/a\x3e, then restart Internet Explorer.\x3c/div\x3e'
      );
      return;
    }
    l = k("#" + l);
    l.css("width", this.width);
    l.css("height", this.height);
    this.pixelRatio = h.devicePixelRatio ? h.devicePixelRatio : 1;
    this.styles = new d.Styles();
    let u = this;
    p.supports_touch()
      ? (l.bind("touchstart", function (a) {
          let b = new Date().getTime();
          if (!p.supports_gesture() && 2 === a.originalEvent.touches.length) {
            var c = a.originalEvent.touches;
            let b = new d.Point(c[0].pageX, c[0].pageY);
            c = new d.Point(c[1].pageX, c[1].pageY);
            u.implementedGestureDist = b.distance(c);
            u.implementedGestureAngle = b.angle(c);
            u.gesturestart && (u.prehandleEvent(a), u.gesturestart(a));
          }
          u.lastTouch &&
          1 === a.originalEvent.touches.length &&
          500 > b - u.lastTouch
            ? u.dbltap
              ? (u.prehandleEvent(a), u.dbltap(a))
              : u.dblclick
              ? (u.prehandleEvent(a), u.dblclick(a))
              : u.touchstart
              ? (u.prehandleEvent(a), u.touchstart(a))
              : u.mousedown && (u.prehandleEvent(a), u.mousedown(a))
            : u.touchstart
            ? (u.prehandleEvent(a),
              u.touchstart(a),
              this.hold && clearTimeout(this.hold),
              this.touchhold &&
                (this.hold = setTimeout(function () {
                  u.touchhold(a);
                }, 1e3)))
            : u.mousedown && (u.prehandleEvent(a), u.mousedown(a));
          u.lastTouch = b;
        }),
        l.bind("touchmove", function (a) {
          this.hold && (clearTimeout(this.hold), (this.hold = g));
          if (
            !p.supports_gesture() &&
            2 === a.originalEvent.touches.length &&
            u.gesturechange
          ) {
            var c = a.originalEvent.touches,
              e = new d.Point(c[0].pageX, c[0].pageY),
              f = new d.Point(c[1].pageX, c[1].pageY);
            c = e.distance(f);
            e = e.angle(f);
            a.originalEvent.scale = c / u.implementedGestureDist;
            a.originalEvent.rotation =
              (180 * (u.implementedGestureAngle - e)) / b.PI;
            u.prehandleEvent(a);
            u.gesturechange(a);
          }
          if (1 < a.originalEvent.touches.length && u.multitouchmove) {
            e = a.originalEvent.touches.length;
            u.prehandleEvent(a);
            c = new d.Point(-a.offset.left * e, -a.offset.top * e);
            for (f = 0; f < e; f++)
              (c.x += a.originalEvent.changedTouches[f].pageX),
                (c.y += a.originalEvent.changedTouches[f].pageY);
            c.x /= e;
            c.y /= e;
            a.p = c;
            u.multitouchmove(a, e);
          } else u.touchmove ? (u.prehandleEvent(a), u.touchmove(a)) : u.drag && (u.prehandleEvent(a), u.drag(a));
        }),
        l.bind("touchend", function (a) {
          this.hold && (clearTimeout(this.hold), (this.hold = g));
          !p.supports_gesture() &&
            u.implementedGestureDist &&
            ((u.implementedGestureDist = g),
            (u.implementedGestureAngle = g),
            u.gestureend && (u.prehandleEvent(a), u.gestureend(a)));
          u.touchend
            ? (u.prehandleEvent(a), u.touchend(a))
            : u.mouseup && (u.prehandleEvent(a), u.mouseup(a));
          250 > new Date().getTime() - u.lastTouch &&
            (u.tap
              ? (u.prehandleEvent(a), u.tap(a))
              : u.click && (u.prehandleEvent(a), u.click(a)));
        }),
        l.bind("gesturestart", function (a) {
          u.gesturestart && (u.prehandleEvent(a), u.gesturestart(a));
        }),
        l.bind("gesturechange", function (a) {
          u.gesturechange && (u.prehandleEvent(a), u.gesturechange(a));
        }),
        l.bind("gestureend", function (a) {
          u.gestureend && (u.prehandleEvent(a), u.gestureend(a));
        }))
      : (l.click(function (a) {
          switch (a.which) {
            case 1:
              u.click && (u.prehandleEvent(a), u.click(a));
              break;
            case 2:
              u.middleclick && (u.prehandleEvent(a), u.middleclick(a));
              break;
            case 3:
              u.rightclick && (u.prehandleEvent(a), u.rightclick(a));
          }
        }),
        l.dblclick(function (a) {
          u.dblclick && (u.prehandleEvent(a), u.dblclick(a));
        }),
        l.mousedown(function (a) {
          switch (a.which) {
            case 1:
              r.CANVAS_DRAGGING = u;
              u.mousedown && (u.prehandleEvent(a), u.mousedown(a));
              break;
            case 2:
              u.middlemousedown && (u.prehandleEvent(a), u.middlemousedown(a));
              break;
            case 3:
              u.rightmousedown && (u.prehandleEvent(a), u.rightmousedown(a));
          }
        }),
        l.mousemove(function (a) {
          !r.CANVAS_DRAGGING &&
            u.mousemove &&
            (u.prehandleEvent(a), u.mousemove(a));
        }),
        l.mouseout(function (a) {
          r.CANVAS_OVER = g;
          u.mouseout && (u.prehandleEvent(a), u.mouseout(a));
        }),
        l.mouseover(function (a) {
          r.CANVAS_OVER = u;
          u.mouseover && (u.prehandleEvent(a), u.mouseover(a));
        }),
        l.mouseup(function (a) {
          switch (a.which) {
            case 1:
              u.mouseup && (u.prehandleEvent(a), u.mouseup(a));
              break;
            case 2:
              u.middlemouseup && (u.prehandleEvent(a), u.middlemouseup(a));
              break;
            case 3:
              u.rightmouseup && (u.prehandleEvent(a), u.rightmouseup(a));
          }
        }),
        l.mousewheel(function (a, b) {
          u.mousewheel && (u.prehandleEvent(a), u.mousewheel(a, b));
        }));
    this.subCreate && this.subCreate();
  };
  l.prehandleEvent = function (a) {
    a.originalEvent.changedTouches &&
      ((a.pageX = a.originalEvent.changedTouches[0].pageX),
      (a.pageY = a.originalEvent.changedTouches[0].pageY));
    a.offset = k("#" + this.id).offset();
    a.p = new d.Point(a.pageX - a.offset.left, a.pageY - a.offset.top);
    this.doEventDefault || (a.preventDefault(), (a.returnValue = !1));
  };
})(
  ChemDoodle,
  ChemDoodle.featureDetection,
  ChemDoodle.math,
  ChemDoodle.monitor,
  ChemDoodle.structures,
  ChemDoodle.lib.jQuery,
  Math,
  document,
  window,
  navigator.userAgent
);
(function (e, p, n) {
  e._AnimatorCanvas = function (e, d, k) {
    e && this.create(e, d, k);
  };
  e = e._AnimatorCanvas.prototype = new e._Canvas();
  e.timeout = 33;
  e.startAnimation = function () {
    this.stopAnimation();
    this.lastTime = new Date().getTime();
    let e = this;
    this.nextFrame &&
      (this.handle = p.requestInterval(function () {
        let d = new Date().getTime();
        e.nextFrame(d - e.lastTime);
        e.repaint();
        e.lastTime = d;
      }, this.timeout));
  };
  e.stopAnimation = function () {
    this.handle && (p.clearRequestInterval(this.handle), (this.handle = n));
  };
  e.isRunning = function () {
    return this.handle !== n;
  };
})(ChemDoodle, ChemDoodle.animations);
(function (e, p, n) {
  e.FileCanvas = function (e, d, k, b) {
    e && this.create(e, d, k);
    p.writeln(
      '\x3cbr\x3e\x3cform name\x3d"FileForm" enctype\x3d"multipart/form-data" method\x3d"POST" action\x3d"' +
        b +
        '" target\x3d"HiddenFileFrame"\x3e\x3cinput type\x3d"file" name\x3d"f" /\x3e\x3cinput type\x3d"submit" name\x3d"submitbutton" value\x3d"Show File" /\x3e\x3c/form\x3e\x3ciframe id\x3d"HFF-' +
        e +
        '" name\x3d"HiddenFileFrame" height\x3d"0" width\x3d"0" style\x3d"display:none;" onLoad\x3d"GetMolFromFrame(\'HFF-' +
        e +
        "', " +
        e +
        ')"\x3e\x3c/iframe\x3e'
    );
    this.emptyMessage = "Click below to load file";
    this.repaint();
  };
  e.FileCanvas.prototype = new e._Canvas();
})(ChemDoodle, document);
(function (e, p) {
  e.HyperlinkCanvas = function (e, r, d, k, b, c) {
    e && this.create(e, r, d);
    this.urlOrFunction = k;
    this.color = b ? b : "blue";
    this.size = c ? c : 2;
  };
  e = e.HyperlinkCanvas.prototype = new e._Canvas();
  e.openInNewWindow = !0;
  e.hoverImage = p;
  e.drawChildExtras = function (e) {
    this.e &&
      (this.hoverImage
        ? e.drawImage(this.hoverImage, 0, 0)
        : ((e.strokeStyle = this.color),
          (e.lineWidth = 2 * this.size),
          e.strokeRect(0, 0, this.width, this.height)));
  };
  e.setHoverImage = function (e) {
    this.hoverImage = new Image();
    this.hoverImage.src = e;
  };
  e.click = function (e) {
    this.e = p;
    this.repaint();
    this.urlOrFunction instanceof Function
      ? this.urlOrFunction()
      : this.openInNewWindow
      ? window.open(this.urlOrFunction)
      : (location.href = this.urlOrFunction);
  };
  e.mouseout = function (e) {
    this.e = p;
    this.repaint();
  };
  e.mouseover = function (e) {
    this.e = e;
    this.repaint();
  };
})(ChemDoodle);
(function (e, p, n, r, d) {
  e.MolGrabberCanvas = function (d, b, c) {
    d && this.create(d, b, c);
    b = [];
    b.push('\x3cbr\x3e\x3cinput type\x3d"text" id\x3d"');
    b.push(d);
    b.push('_query" size\x3d"32" value\x3d"" /\x3e');
    b.push(this.getInputFields());
    r.getElementById(d);
    n("#" + d).after(b.join(""));
    let e = this;
    n("#" + d + "_submit").click(function () {
      e.search();
    });
    n("#" + d + "_query").keypress(function (a) {
      13 === a.which && e.search();
    });
    this.emptyMessage = "Enter search term below";
    this.repaint();
  };
  e = e.MolGrabberCanvas.prototype = new e._Canvas();
  e.setSearchTerm = function (d) {
    n("#" + this.id + "_query").val(d);
    this.search();
  };
  e.getInputFields = function () {
    let d = [];
    d.push("\x3cbr\x3e\x3cnobr\x3e");
    d.push('\x3cselect id\x3d"');
    d.push(this.id);
    d.push('_select"\x3e');
    d.push('\x3coption value\x3d"chemexper"\x3eChemExper');
    d.push('\x3coption value\x3d"chemspider"\x3eChemSpider');
    d.push('\x3coption value\x3d"pubchem" selected\x3ePubChem');
    d.push("\x3c/select\x3e");
    d.push('\x3cbutton type\x3d"button" id\x3d"');
    d.push(this.id);
    d.push('_submit"\x3eShow Molecule\x3c/button\x3e');
    d.push("\x3c/nobr\x3e");
    return d.join("");
  };
  e.search = function () {
    this.emptyMessage = "Searching...";
    this.clear();
    let d = this;
    p.getMoleculeFromDatabase(
      n("#" + this.id + "_query").val(),
      { database: n("#" + this.id + "_select").val() },
      function (b) {
        d.loadMolecule(b);
      }
    );
  };
})(ChemDoodle, ChemDoodle.iChemLabs, ChemDoodle.lib.jQuery, document);
(function (e, p, n, r) {
  let d = [],
    k = [1, 0, 0],
    b = [0, 1, 0],
    c = [0, 0, 1];
  e.RotatorCanvas = function (b, a, c, d) {
    b && this.create(b, a, c);
    this.rotate3D = d;
  };
  e = e.RotatorCanvas.prototype = new e._AnimatorCanvas();
  p = p.PI / 15;
  e.xIncrement = p;
  e.yIncrement = p;
  e.zIncrement = p;
  e.nextFrame = function (e) {
    if (0 === this.molecules.length && 0 === this.shapes.length)
      this.stopAnimation();
    else if (((e /= 1e3), this.rotate3D)) {
      n.identity(d);
      n.rotate(d, this.xIncrement * e, k);
      n.rotate(d, this.yIncrement * e, b);
      n.rotate(d, this.zIncrement * e, c);
      for (let b = 0, c = this.molecules.length; b < c; b++) {
        e = this.molecules[b];
        for (let b = 0, c = e.atoms.length; b < c; b++) {
          var a = e.atoms[b],
            g = [a.x - this.width / 2, a.y - this.height / 2, a.z];
          n.multiplyVec3(d, g);
          a.x = g[0] + this.width / 2;
          a.y = g[1] + this.height / 2;
          a.z = g[2];
        }
        for (let a = 0, b = e.rings.length; a < b; a++)
          e.rings[a].center = e.rings[a].getCenter();
        this.styles.atoms_display &&
          this.styles.atoms_circles_2D &&
          e.sortAtomsByZ();
        this.styles.bonds_display &&
          this.styles.bonds_clearOverlaps_2D &&
          e.sortBondsByZ();
      }
      for (let b = 0, c = this.shapes.length; b < c; b++) {
        e = this.shapes[b].getPoints();
        for (let b = 0, c = e.length; b < c; b++)
          (a = e[b]),
            (g = [a.x - this.width / 2, a.y - this.height / 2, 0]),
            n.multiplyVec3(d, g),
            (a.x = g[0] + this.width / 2),
            (a.y = g[1] + this.height / 2);
      }
    } else this.styles.rotateAngle += this.zIncrement * e;
  };
  e.dblclick = function (b) {
    this.isRunning() ? this.stopAnimation() : this.startAnimation();
  };
})(ChemDoodle, Math, ChemDoodle.lib.mat4);
(function (e, p, n, r) {
  e.SlideshowCanvas = function (d, e, b) {
    d && this.create(d, e, b);
  };
  e = e.SlideshowCanvas.prototype = new e._AnimatorCanvas();
  e.frames = [];
  e.curIndex = 0;
  e.timeout = 5e3;
  e.alpha = 0;
  e.innerHandle = r;
  e.phase = 0;
  e.drawChildExtras = function (d) {
    let e = n.getRGB(this.styles.backgroundColor, 255);
    d.fillStyle =
      "rgba(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + this.alpha + ")";
    d.fillRect(0, 0, this.width, this.height);
  };
  e.nextFrame = function (d) {
    if (0 === this.frames.length) this.stopAnimation();
    else {
      this.phase = 0;
      var e = this,
        b = 1;
      this.innerHandle = setInterval(function () {
        e.alpha = b / 15;
        e.repaint();
        15 === b && e.breakInnerHandle();
        b++;
      }, 33);
    }
  };
  e.breakInnerHandle = function () {
    this.innerHandle &&
      (clearInterval(this.innerHandle), (this.innerHandle = r));
    if (0 === this.phase) {
      this.curIndex++;
      this.curIndex > this.frames.length - 1 && (this.curIndex = 0);
      this.alpha = 1;
      let d = this.frames[this.curIndex];
      this.loadContent(d.mols, d.shapes);
      this.phase = 1;
      let e = this,
        b = 1;
      this.innerHandle = setInterval(function () {
        e.alpha = (15 - b) / 15;
        e.repaint();
        15 === b && e.breakInnerHandle();
        b++;
      }, 33);
    } else 1 === this.phase && ((this.alpha = 0), this.repaint());
  };
  e.addFrame = function (d, e) {
    0 === this.frames.length && this.loadContent(d, e);
    this.frames.push({ mols: d, shapes: e });
  };
})(ChemDoodle, ChemDoodle.animations, ChemDoodle.math);
(function (e, p, n, r, d, k) {
  e.TransformCanvas = function (b, c, d, a) {
    b && this.create(b, c, d);
    this.rotate3D = a;
  };
  e = e.TransformCanvas.prototype = new e._Canvas();
  e.lastPoint = k;
  e.rotationMultMod = 1.3;
  e.lastPinchScale = 1;
  e.lastGestureRotate = 0;
  e.mousedown = function (b) {
    this.lastPoint = b.p;
  };
  e.dblclick = function (b) {
    this.center();
    this.repaint();
  };
  e.drag = function (b) {
    if (!this.lastPoint.multi) {
      if (p.ALT) {
        var c = new n.Point(b.p.x, b.p.y);
        c.sub(this.lastPoint);
        for (let a = 0, b = this.molecules.length; a < b; a++) {
          var e = this.molecules[a];
          for (let a = 0, b = e.atoms.length; a < b; a++) e.atoms[a].add(c);
          e.check();
        }
        for (let a = 0, b = this.shapes.length; a < b; a++) {
          e = this.shapes[a].getPoints();
          for (let a = 0, b = e.length; a < b; a++) e[a].add(c);
        }
        this.lastPoint = b.p;
      } else if (!0 === this.rotate3D) {
        c = r.max(this.width / 4, this.height / 4);
        e = ((b.p.x - this.lastPoint.x) / c) * this.rotationMultMod;
        var a = (-(b.p.y - this.lastPoint.y) / c) * this.rotationMultMod;
        c = [];
        d.identity(c);
        d.rotate(c, a, [1, 0, 0]);
        d.rotate(c, e, [0, 1, 0]);
        for (let g = 0, h = this.molecules.length; g < h; g++) {
          e = this.molecules[g];
          for (let b = 0, g = e.atoms.length; b < g; b++) {
            a = e.atoms[b];
            let g = [a.x - this.width / 2, a.y - this.height / 2, a.z];
            d.multiplyVec3(c, g);
            a.x = g[0] + this.width / 2;
            a.y = g[1] + this.height / 2;
            a.z = g[2];
          }
          for (let a = 0, b = e.rings.length; a < b; a++)
            e.rings[a].center = e.rings[a].getCenter();
          this.lastPoint = b.p;
          this.styles.atoms_display &&
            this.styles.atoms_circles_2D &&
            e.sortAtomsByZ();
          this.styles.bonds_display &&
            this.styles.bonds_clearOverlaps_2D &&
            e.sortBondsByZ();
        }
      } else
        (e = new n.Point(this.width / 2, this.height / 2)),
          (c = e.angle(this.lastPoint)),
          (e = e.angle(b.p)),
          (this.styles.rotateAngle -= e - c),
          (this.lastPoint = b.p);
      this.repaint();
    }
  };
  e.mousewheel = function (b, c) {
    this.styles.scale += c / 50;
    0.01 > this.styles.scale && (this.styles.scale = 0.01);
    this.repaint();
  };
  e.multitouchmove = function (b, c) {
    if (2 === c)
      if (this.lastPoint.multi) {
        c = new n.Point(b.p.x, b.p.y);
        c.sub(this.lastPoint);
        for (let a = 0, b = this.molecules.length; a < b; a++) {
          var d = this.molecules[a];
          for (let a = 0, b = d.atoms.length; a < b; a++) d.atoms[a].add(c);
          d.check();
        }
        for (let a = 0, b = this.shapes.length; a < b; a++) {
          d = this.shapes[a].getPoints();
          for (let a = 0, b = d.length; a < b; a++) d[a].add(c);
        }
        this.lastPoint = b.p;
        this.lastPoint.multi = !0;
        this.repaint();
      } else (this.lastPoint = b.p), (this.lastPoint.multi = !0);
  };
  e.gesturechange = function (b) {
    0 !== b.originalEvent.scale - this.lastPinchScale &&
      ((this.styles.scale *= b.originalEvent.scale / this.lastPinchScale),
      0.01 > this.styles.scale && (this.styles.scale = 0.01),
      (this.lastPinchScale = b.originalEvent.scale));
    if (0 !== this.lastGestureRotate - b.originalEvent.rotation) {
      let c =
          ((this.lastGestureRotate - b.originalEvent.rotation) / 180) * r.PI,
        d = new n.Point(this.width / 2, this.height / 2);
      for (let a = 0, b = this.molecules.length; a < b; a++) {
        let b = this.molecules[a];
        for (let a = 0, e = b.atoms.length; a < e; a++) {
          let e = b.atoms[a],
            g = d.distance(e),
            h = d.angle(e) + c;
          e.x = d.x + g * r.cos(h);
          e.y = d.y - g * r.sin(h);
        }
        b.check();
      }
      this.lastGestureRotate = b.originalEvent.rotation;
    }
    this.repaint();
  };
  e.gestureend = function (b) {
    this.lastPinchScale = 1;
    this.lastGestureRotate = 0;
  };
})(
  ChemDoodle,
  ChemDoodle.monitor,
  ChemDoodle.structures,
  Math,
  ChemDoodle.lib.mat4
);
(function (e, p) {
  e.ViewerCanvas = function (e, r, d) {
    e && this.create(e, r, d);
  };
  e.ViewerCanvas.prototype = new e._Canvas();
})(ChemDoodle);
(function (e, p, n) {
  e._SpectrumCanvas = function (e, d, k) {
    e && this.create(e, d, k);
  };
  e = e._SpectrumCanvas.prototype = new e._Canvas();
  e.spectrum = n;
  e.emptyMessage = "No Spectrum Loaded or Recognized";
  e.loadMolecule = n;
  e.getMolecule = n;
  e.innerRepaint = function (e) {
    this.spectrum && 0 < this.spectrum.data.length
      ? this.spectrum.draw(e, this.styles, this.width, this.height)
      : this.emptyMessage &&
        ((e.fillStyle = "#737683"),
        (e.textAlign = "center"),
        (e.textBaseline = "middle"),
        (e.font = "18px Helvetica, Verdana, Arial, Sans-serif"),
        e.fillText(this.emptyMessage, this.width / 2, this.height / 2));
  };
  e.loadSpectrum = function (e) {
    this.spectrum = e;
    this.repaint();
  };
  e.getSpectrum = function () {
    return this.spectrum;
  };
  e.getSpectrumCoordinates = function (e, d) {
    return spectrum.getInternalCoordinates(e, d, this.width, this.height);
  };
})(ChemDoodle, document);
(function (e, p) {
  e.ObserverCanvas = function (e, r, d) {
    e && this.create(e, r, d);
  };
  e.ObserverCanvas.prototype = new e._SpectrumCanvas();
})(ChemDoodle);
(function (e, p) {
  e.OverlayCanvas = function (e, r, d) {
    e && this.create(e, r, d);
  };
  e = e.OverlayCanvas.prototype = new e._SpectrumCanvas();
  e.overlaySpectra = [];
  e.superRepaint = e.innerRepaint;
  e.innerRepaint = function (e) {
    this.superRepaint(e);
    if (this.spectrum && 0 < this.spectrum.data.length)
      for (let n = 0, d = this.overlaySpectra.length; n < d; n++) {
        let d = this.overlaySpectra[n];
        d &&
          0 < d.data.length &&
          ((d.minX = this.spectrum.minX),
          (d.maxX = this.spectrum.maxX),
          d.drawPlot(
            e,
            this.styles,
            this.width,
            this.height,
            this.spectrum.memory.offsetTop,
            this.spectrum.memory.offsetLeft,
            this.spectrum.memory.offsetBottom
          ));
      }
  };
  e.addSpectrum = function (e) {
    this.spectrum ? this.overlaySpectra.push(e) : (this.spectrum = e);
  };
})(ChemDoodle);
(function (e, p, n, r) {
  e.PerspectiveCanvas = function (d, b, c) {
    d && this.create(d, b, c);
  };
  let d = (e.PerspectiveCanvas.prototype = new e._SpectrumCanvas());
  d.dragRange = r;
  d.rescaleYAxisOnZoom = !0;
  d.lastPinchScale = 1;
  d.mousedown = function (d) {
    this.dragRange = new e.structures.Point(d.p.x, d.p.x);
  };
  d.mouseup = function (d) {
    this.dragRange &&
      this.dragRange.x !== this.dragRange.y &&
      (this.dragRange.multi ||
        ((d = this.spectrum.zoom(
          this.dragRange.x,
          d.p.x,
          this.width,
          this.rescaleYAxisOnZoom
        )),
        this.rescaleYAxisOnZoom && (this.styles.scale = d)),
      (this.dragRange = r),
      this.repaint());
  };
  d.drag = function (d) {
    this.dragRange &&
      (this.dragRange.multi
        ? (this.dragRange = r)
        : (p.SHIFT &&
            (this.spectrum.translate(d.p.x - this.dragRange.x, this.width),
            (this.dragRange.x = d.p.x)),
          (this.dragRange.y = d.p.x)),
      this.repaint());
  };
  d.drawChildExtras = function (d) {
    if (this.dragRange) {
      var b = n.min(this.dragRange.x, this.dragRange.y);
      let c = n.max(this.dragRange.x, this.dragRange.y);
      d.strokeStyle = "gray";
      d.lineStyle = 1;
      d.beginPath();
      for (d.moveTo(b, this.height / 2); b <= c; b++)
        5 > b % 10
          ? d.lineTo(b, n.round(this.height / 2))
          : d.moveTo(b, n.round(this.height / 2));
      d.stroke();
    }
  };
  d.mousewheel = function (d, b) {
    this.styles.scale -= b / 10;
    0.01 > this.styles.scale && (this.styles.scale = 0.01);
    this.repaint();
  };
  d.dblclick = function (d) {
    this.spectrum.setup();
    this.styles.scale = 1;
    this.repaint();
  };
  d.multitouchmove = function (d, b) {
    2 === b &&
      (this.dragRange && this.dragRange.multi
        ? (this.spectrum.translate(d.p.x - this.dragRange.x, this.width),
          (this.dragRange.x = d.p.x),
          (this.dragRange.y = d.p.x),
          this.repaint())
        : ((this.dragRange = new e.structures.Point(d.p.x, d.p.x)),
          (this.dragRange.multi = !0)));
  };
  d.gesturechange = function (d) {
    this.styles.scale *= d.originalEvent.scale / this.lastPinchScale;
    0.01 > this.styles.scale && (this.styles.scale = 0.01);
    this.lastPinchScale = d.originalEvent.scale;
    this.repaint();
  };
  d.gestureend = function (d) {
    this.lastPinchScale = 1;
  };
})(ChemDoodle, ChemDoodle.monitor, Math);
(function (e, p, n, r) {
  e.SeekerCanvas = function (d, b, c, e) {
    d && this.create(d, b, c);
    this.seekType = e;
  };
  let d = (e.SeekerCanvas.prototype = new e._SpectrumCanvas());
  d.superRepaint = d.innerRepaint;
  d.innerRepaint = function (d) {
    this.superRepaint(d);
    if (this.spectrum && 0 < this.spectrum.data.length && this.p) {
      if (this.seekType === e.SeekerCanvas.SEEK_POINTER) {
        var b = this.p;
        var c = this.spectrum.getInternalCoordinates(b.x, b.y);
      } else if (
        this.seekType === e.SeekerCanvas.SEEK_PLOT ||
        this.seekType === e.SeekerCanvas.SEEK_PEAK
      ) {
        c =
          this.seekType === e.SeekerCanvas.SEEK_PLOT
            ? this.spectrum.getClosestPlotInternalCoordinates(this.p.x)
            : this.spectrum.getClosestPeakInternalCoordinates(this.p.x);
        if (!c) return;
        b = {
          x: this.spectrum.getTransformedX(
            c.x,
            this.styles,
            this.width,
            this.spectrum.memory.offsetLeft
          ),
          y: this.spectrum.getTransformedY(
            c.y / 100,
            this.styles,
            this.height,
            this.spectrum.memory.offsetBottom,
            this.spectrum.memory.offsetTop
          ),
        };
      }
      d.fillStyle = "white";
      d.strokeStyle = this.styles.plots_color;
      d.lineWidth = this.styles.plots_width;
      d.beginPath();
      d.arc(b.x, b.y, 3, 0, 2 * n.PI, !1);
      d.fill();
      d.stroke();
      d.font = p.getFontString(
        this.styles.text_font_size,
        this.styles.text_font_families
      );
      d.textAlign = "left";
      d.textBaseline = "bottom";
      c = "x:" + c.x.toFixed(3) + ", y:" + c.y.toFixed(3);
      let h = b.x + 3,
        a = d.measureText(c).width;
      h + a > this.width - 2 && (h -= 6 + a);
      b = b.y;
      0 > b - this.styles.text_font_size - 2 &&
        (b += this.styles.text_font_size);
      d.fillRect(
        h,
        b - this.styles.text_font_size,
        a,
        this.styles.text_font_size
      );
      d.fillStyle = "black";
      d.fillText(c, h, b);
    }
  };
  d.mouseout = function (d) {
    this.p = r;
    this.repaint();
  };
  d.mousemove = function (d) {
    this.p = { x: d.p.x - 2, y: d.p.y - 3 };
    this.repaint();
  };
  d.touchstart = function (d) {
    this.mousemove(d);
  };
  d.touchmove = function (d) {
    this.mousemove(d);
  };
  d.touchend = function (d) {
    this.mouseout(d);
  };
  e.SeekerCanvas.SEEK_POINTER = "pointer";
  e.SeekerCanvas.SEEK_PLOT = "plot";
  e.SeekerCanvas.SEEK_PEAK = "peak";
})(ChemDoodle, ChemDoodle.extensions, Math);
(function (e, p, n, r, d, k, b, c, h, a, g, l, v, m) {
  e._Canvas3D = function (a, b, c) {
    a && this.create(a, b, c);
  };
  a = e._Canvas3D.prototype = new e._Canvas();
  let x = e._Canvas.prototype;
  a.rotationMatrix = m;
  a.contentCenter = m;
  a.lastPoint = m;
  a.emptyMessage = "WebGL is Unavailable!";
  a.lastPinchScale = 1;
  a.lastGestureRotate = 0;
  a.afterLoadContent = function () {
    var a = new n.Bounds();
    for (let b = 0, c = this.molecules.length; b < c; b++)
      a.expand(this.molecules[b].getBounds3D());
    var c =
      g.dist([a.maxX, a.maxY, a.maxZ], [a.minX, a.minY, a.minZ]) / 2 + 1.5;
    Infinity === c && (c = 10);
    this.maxDimension = b.max(a.maxX - a.minX, a.maxY - a.minY);
    a = b.min(
      179.9,
      b.max(this.styles.projectionPerspectiveVerticalFieldOfView_3D, 0.1)
    );
    var d = (a / 360) * b.PI,
      e = b.tan(d) / 0.8;
    e = c / e;
    let f = this.width / this.height;
    this.camera.fieldOfView = a;
    this.camera.near = e - c;
    this.camera.far = e + c;
    this.camera.aspect = f;
    h.translate(h.identity(this.camera.viewMatrix), [0, 0, -e]);
    d = c / b.tan(d);
    this.lighting.camera.fieldOfView = a;
    this.lighting.camera.near = d - c;
    this.lighting.camera.far = d + c;
    this.lighting.updateView();
    this.setupScene();
  };
  a.renderDepthMap = function () {
    if (this.styles.shadow_3D && d.DepthShader) {
      let a = this.gl.isEnabled(this.gl.CULL_FACE);
      a || this.gl.enable(this.gl.CULL_FACE);
      this.depthShader.useShaderProgram(this.gl);
      let b = this.gl.getParameter(this.gl.COLOR_CLEAR_VALUE);
      this.gl.clearColor(1, 1, 1, 0);
      this.lightDepthMapFramebuffer.bind(
        this.gl,
        this.shadowTextureSize,
        this.shadowTextureSize
      );
      this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
      this.depthShader.setProjectionMatrix(
        this.gl,
        this.lighting.camera.projectionMatrix
      );
      this.depthShader.enableAttribsArray(this.gl);
      for (let a = 0, b = this.molecules.length; a < b; a++)
        this.molecules[a].render(this.gl, this.styles);
      this.gl.flush();
      this.depthShader.disableAttribsArray(this.gl);
      this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
      this.gl.clearColor(b[0], b[1], b[2], b[3]);
      a || this.gl.disable(this.gl.CULL_FACE);
    }
  };
  a.renderExtras = function () {
    this.phongShader.useShaderProgram(this.gl);
    this.phongShader.enableAttribsArray(this.gl);
    var a = [];
    for (let b = 0, c = this.shapes.length; b < c; b++) {
      let c = this.shapes[b];
      c instanceof d._Surface &&
      ((!c.styles && 1 !== this.styles.surfaces_alpha) ||
        (c.styles && 1 !== c.styles.surfaces_alpha))
        ? a.push(c)
        : c.render(this.gl, this.styles);
    }
    if (0 !== a.length) {
      this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
      this.gl.enable(this.gl.BLEND);
      this.gl.depthMask(!1);
      for (let b = 0, c = a.length; b < c; b++)
        a[b].render(this.gl, this.styles);
      this.gl.depthMask(!0);
      this.gl.disable(this.gl.BLEND);
      this.gl.blendFuncSeparate(
        this.gl.SRC_ALPHA,
        this.gl.ONE_MINUS_SRC_ALPHA,
        this.gl.ONE,
        this.gl.ONE_MINUS_SRC_ALPHA
      );
    }
    this.phongShader.setShadow(this.gl, !1);
    this.phongShader.setFogMode(this.gl, 0);
    this.phongShader.setFlatColor(this.gl, !1);
    this.styles.compass_display &&
      (this.phongShader.setLightDirection(this.gl, [0, 0, -1]),
      this.compass.render(this.gl, this.styles));
    this.phongShader.disableAttribsArray(this.gl);
    this.gl.flush();
    this.gl.enable(this.gl.BLEND);
    this.gl.depthMask(!1);
    this.labelShader.useShaderProgram(this.gl);
    this.labelShader.setMatrixUniforms(this.gl, this.gl.modelViewMatrix);
    this.labelShader.setProjectionMatrix(this.gl, this.camera.projectionMatrix);
    this.labelShader.setDimension(
      this.gl,
      this.gl.canvas.clientWidth,
      this.gl.canvas.clientHeight
    );
    this.labelShader.enableAttribsArray(this.gl);
    this.styles.atoms_displayLabels_3D &&
      this.label3D.render(this.gl, this.styles, this.getMolecules());
    if (this.styles.measurement_displayText_3D)
      for (let b = 0, c = this.shapes.length; b < c; b++)
        (a = this.shapes[b]),
          a.renderText && a.renderText(this.gl, this.styles);
    this.styles.compass_display &&
      this.styles.compass_displayText_3D &&
      this.compass.renderAxis(this.gl);
    this.labelShader.disableAttribsArray(this.gl);
    this.gl.disable(this.gl.BLEND);
    this.gl.depthMask(!0);
    this.gl.flush();
    this.drawChildExtras && this.drawChildExtras(this.gl);
    this.gl.flush();
  };
  a.renderColor = function () {
    this.phongShader.useShaderProgram(this.gl);
    this.gl.uniform1i(this.phongShader.shadowDepthSampleUniform, 0);
    this.gl.activeTexture(this.gl.TEXTURE0);
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.lightDepthMapTexture.texture);
    this.phongShader.setProjectionMatrix(this.gl, this.camera.projectionMatrix);
    this.phongShader.setShadow(this.gl, this.styles.shadow_3D);
    this.phongShader.setFlatColor(this.gl, this.styles.flat_color_3D);
    this.phongShader.setGammaCorrection(
      this.gl,
      this.styles.gammaCorrection_3D
    );
    this.phongShader.setShadowTextureSize(
      this.gl,
      this.shadowTextureSize,
      this.shadowTextureSize
    );
    this.phongShader.setShadowIntensity(
      this.gl,
      this.styles.shadow_intensity_3D
    );
    this.phongShader.setFogMode(this.gl, this.styles.fog_mode_3D);
    this.phongShader.setFogColor(this.gl, this.fogging.colorRGB);
    this.phongShader.setFogStart(this.gl, this.fogging.fogStart);
    this.phongShader.setFogEnd(this.gl, this.fogging.fogEnd);
    this.phongShader.setFogDensity(this.gl, this.fogging.density);
    this.phongShader.setLightProjectionMatrix(
      this.gl,
      this.lighting.camera.projectionMatrix
    );
    this.phongShader.setLightDiffuseColor(this.gl, this.lighting.diffuseRGB);
    this.phongShader.setLightSpecularColor(this.gl, this.lighting.specularRGB);
    this.phongShader.setLightDirection(this.gl, this.lighting.direction);
    this.phongShader.enableAttribsArray(this.gl);
    for (let a = 0, b = this.molecules.length; a < b; a++)
      this.molecules[a].render(this.gl, this.styles);
    this.phongShader.disableAttribsArray(this.gl);
    this.gl.flush();
  };
  a.renderPosition = function () {
    this.positionShader.useShaderProgram(this.gl);
    this.positionShader.setProjectionMatrix(
      this.gl,
      this.camera.projectionMatrix
    );
    this.positionShader.enableAttribsArray(this.gl);
    for (let a = 0, b = this.molecules.length; a < b; a++)
      this.molecules[a].render(this.gl, this.styles);
    this.positionShader.disableAttribsArray(this.gl);
    this.gl.flush();
  };
  a.renderNormal = function () {
    this.normalShader.useShaderProgram(this.gl);
    this.normalShader.setProjectionMatrix(
      this.gl,
      this.camera.projectionMatrix
    );
    this.normalShader.enableAttribsArray(this.gl);
    for (let a = 0, b = this.molecules.length; a < b; a++)
      this.molecules[a].render(this.gl, this.styles);
    this.normalShader.disableAttribsArray(this.gl);
    this.gl.flush();
  };
  a.renderSSAO = function () {
    this.ssaoShader.useShaderProgram(this.gl);
    this.ssaoShader.setProjectionMatrix(this.gl, this.camera.projectionMatrix);
    this.ssaoShader.setSampleKernel(this.gl, this.ssao.sampleKernel);
    this.ssaoShader.setKernelRadius(this.gl, this.styles.ssao_kernel_radius);
    this.ssaoShader.setPower(this.gl, this.styles.ssao_power);
    this.ssaoShader.setGbufferTextureSize(
      this.gl,
      this.gl.drawingBufferWidth,
      this.gl.drawingBufferHeight
    );
    this.gl.uniform1i(this.ssaoShader.positionSampleUniform, 0);
    this.gl.uniform1i(this.ssaoShader.normalSampleUniform, 1);
    this.gl.uniform1i(this.ssaoShader.noiseSampleUniform, 2);
    this.gl.activeTexture(this.gl.TEXTURE0);
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.positionTexture.texture);
    this.gl.activeTexture(this.gl.TEXTURE1);
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.normalTexture.texture);
    this.gl.activeTexture(this.gl.TEXTURE2);
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.ssao.noiseTexture);
    this.gl.activeTexture(this.gl.TEXTURE0);
    this.ssaoShader.enableAttribsArray(this.gl);
    this.gl.quadBuffer.bindBuffers(this.gl);
    this.gl.drawArrays(
      this.gl.TRIANGLE_STRIP,
      0,
      this.gl.quadBuffer.vertexPositionBuffer.numItems
    );
    this.ssaoShader.disableAttribsArray(this.gl);
    this.gl.flush();
    this.ssaoFramebuffer.bind(
      this.gl,
      this.gl.drawingBufferWidth,
      this.gl.drawingBufferHeight
    );
    this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    this.ssaoBlurShader.useShaderProgram(this.gl);
    this.ssaoBlurShader.setGbufferTextureSize(
      this.gl,
      this.gl.drawingBufferWidth,
      this.gl.drawingBufferHeight
    );
    this.gl.uniform1i(this.ssaoBlurShader.aoSampleUniform, 0);
    this.gl.uniform1i(this.ssaoBlurShader.depthSampleUniform, 1);
    this.gl.activeTexture(this.gl.TEXTURE0);
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.imageTexture.texture);
    this.gl.activeTexture(this.gl.TEXTURE1);
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.depthTexture.texture);
    this.gl.activeTexture(this.gl.TEXTURE0);
    this.ssaoBlurShader.enableAttribsArray(this.gl);
    this.gl.quadBuffer.bindBuffers(this.gl);
    this.gl.drawArrays(
      this.gl.TRIANGLE_STRIP,
      0,
      this.gl.quadBuffer.vertexPositionBuffer.numItems
    );
    this.ssaoBlurShader.disableAttribsArray(this.gl);
    this.gl.activeTexture(this.gl.TEXTURE0);
    this.gl.flush();
  };
  a.renderOutline = function () {
    this.outlineShader.useShaderProgram(this.gl);
    this.outlineShader.setGbufferTextureSize(
      this.gl,
      this.gl.drawingBufferWidth,
      this.gl.drawingBufferHeight
    );
    this.outlineShader.setNormalThreshold(
      this.gl,
      this.styles.outline_normal_threshold
    );
    this.outlineShader.setDepthThreshold(
      this.gl,
      this.styles.outline_depth_threshold
    );
    this.outlineShader.setThickness(this.gl, this.styles.outline_thickness);
    this.gl.uniform1i(this.outlineShader.normalSampleUniform, 0);
    this.gl.uniform1i(this.outlineShader.depthSampleUniform, 1);
    this.gl.activeTexture(this.gl.TEXTURE0);
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.normalTexture.texture);
    this.gl.activeTexture(this.gl.TEXTURE1);
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.depthTexture.texture);
    this.gl.activeTexture(this.gl.TEXTURE0);
    this.outlineShader.enableAttribsArray(this.gl);
    this.gl.quadBuffer.bindBuffers(this.gl);
    this.gl.drawArrays(
      this.gl.TRIANGLE_STRIP,
      0,
      this.gl.quadBuffer.vertexPositionBuffer.numItems
    );
    this.outlineShader.disableAttribsArray(this.gl);
    this.gl.flush();
  };
  a.deferredRender = function () {
    let a = this.gl.getParameter(this.gl.COLOR_CLEAR_VALUE);
    this.gl.clearColor(0, 0, 0, 0);
    this.colorFramebuffer.bind(
      this.gl,
      this.gl.drawingBufferWidth,
      this.gl.drawingBufferHeight
    );
    this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
    this.renderColor();
    this.positionFramebuffer.bind(
      this.gl,
      this.gl.drawingBufferWidth,
      this.gl.drawingBufferHeight
    );
    this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
    this.renderPosition();
    this.normalFramebuffer.bind(
      this.gl,
      this.gl.drawingBufferWidth,
      this.gl.drawingBufferHeight
    );
    this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
    this.renderNormal();
    this.styles.ssao_3D && d.SSAOShader
      ? (this.quadFramebuffer.bind(
          this.gl,
          this.gl.drawingBufferWidth,
          this.gl.drawingBufferHeight
        ),
        this.gl.clear(this.gl.COLOR_BUFFER_BIT),
        this.renderSSAO())
      : (this.ssaoFramebuffer.bind(
          this.gl,
          this.gl.drawingBufferWidth,
          this.gl.drawingBufferHeight
        ),
        this.gl.clearColor(1, 1, 1, 1),
        this.gl.clear(this.gl.COLOR_BUFFER_BIT));
    this.outlineFramebuffer.bind(
      this.gl,
      this.gl.drawingBufferWidth,
      this.gl.drawingBufferHeight
    );
    this.gl.clearColor(1, 1, 1, 1);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    this.styles.outline_3D && this.renderOutline();
    this.gl.clearColor(a[0], a[1], a[2], a[3]);
    this.quadFramebuffer.bind(
      this.gl,
      this.gl.drawingBufferWidth,
      this.gl.drawingBufferHeight
    );
    this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    this.lightingShader.useShaderProgram(this.gl);
    this.gl.uniform1i(this.lightingShader.positionSampleUniform, 0);
    this.gl.uniform1i(this.lightingShader.colorSampleUniform, 1);
    this.gl.uniform1i(this.lightingShader.ssaoSampleUniform, 2);
    this.gl.uniform1i(this.lightingShader.outlineSampleUniform, 3);
    this.gl.activeTexture(this.gl.TEXTURE0);
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.positionTexture.texture);
    this.gl.activeTexture(this.gl.TEXTURE1);
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.colorTexture.texture);
    this.gl.activeTexture(this.gl.TEXTURE2);
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.ssaoTexture.texture);
    this.gl.activeTexture(this.gl.TEXTURE3);
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.outlineTexture.texture);
    this.gl.activeTexture(this.gl.TEXTURE0);
    this.lightingShader.enableAttribsArray(this.gl);
    this.gl.quadBuffer.bindBuffers(this.gl);
    this.gl.drawArrays(
      this.gl.TRIANGLE_STRIP,
      0,
      this.gl.quadBuffer.vertexPositionBuffer.numItems
    );
    this.lightingShader.disableAttribsArray(this.gl);
    this.gl.flush();
    this.fxaaFramebuffer.bind(
      this.gl,
      this.gl.drawingBufferWidth,
      this.gl.drawingBufferHeight
    );
    this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
    this.gl.viewport(
      0,
      0,
      this.gl.drawingBufferWidth,
      this.gl.drawingBufferHeight
    );
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.imageTexture.texture);
    this.fxaaShader.useShaderProgram(this.gl);
    this.fxaaShader.setBuffersize(
      this.gl,
      this.gl.drawingBufferWidth,
      this.gl.drawingBufferHeight
    );
    this.fxaaShader.setAntialias(this.gl, this.styles.antialias_3D);
    this.fxaaShader.setEdgeThreshold(this.gl, this.styles.fxaa_edgeThreshold);
    this.fxaaShader.setEdgeThresholdMin(
      this.gl,
      this.styles.fxaa_edgeThresholdMin
    );
    this.fxaaShader.setSearchSteps(this.gl, this.styles.fxaa_searchSteps);
    this.fxaaShader.setSearchThreshold(
      this.gl,
      this.styles.fxaa_searchThreshold
    );
    this.fxaaShader.setSubpixCap(this.gl, this.styles.fxaa_subpixCap);
    this.fxaaShader.setSubpixTrim(this.gl, this.styles.fxaa_subpixTrim);
    this.fxaaShader.enableAttribsArray(this.gl);
    this.gl.quadBuffer.bindBuffers(this.gl);
    this.gl.drawArrays(
      this.gl.TRIANGLE_STRIP,
      0,
      this.gl.quadBuffer.vertexPositionBuffer.numItems
    );
    this.fxaaShader.disableAttribsArray(this.gl);
    this.gl.flush();
    this.finalFramebuffer.bind(
      this.gl,
      this.gl.drawingBufferWidth,
      this.gl.drawingBufferHeight
    );
    this.renderExtras();
    this.gl.clearColor(a[0], a[1], a[2], a[3]);
    this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
    this.gl.viewport(
      0,
      0,
      this.gl.drawingBufferWidth,
      this.gl.drawingBufferHeight
    );
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.fxaaTexture.texture);
    this.quadShader.useShaderProgram(this.gl);
    this.quadShader.enableAttribsArray(this.gl);
    this.gl.quadBuffer.bindBuffers(this.gl);
    this.gl.drawArrays(
      this.gl.TRIANGLE_STRIP,
      0,
      this.gl.quadBuffer.vertexPositionBuffer.numItems
    );
    this.quadShader.disableAttribsArray(this.gl);
    this.gl.flush();
  };
  a.forwardRender = function () {
    this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
    this.gl.viewport(
      0,
      0,
      this.gl.drawingBufferWidth,
      this.gl.drawingBufferHeight
    );
    this.renderColor();
    this.renderExtras();
  };
  a.repaint = function () {
    this.gl &&
      ((this.gl.lightViewMatrix = h.multiply(
        this.lighting.camera.viewMatrix,
        this.rotationMatrix,
        []
      )),
      (this.gl.rotationMatrix = this.rotationMatrix),
      (this.gl.modelViewMatrix = this.gl.lightViewMatrix),
      this.renderDepthMap(),
      (this.gl.modelViewMatrix = h.multiply(
        this.camera.viewMatrix,
        this.rotationMatrix,
        []
      )),
      h.translate(this.gl.modelViewMatrix, this.contentCenter),
      this.isSupportDeferred() &&
      (this.styles.ssao_3D || this.styles.outline_3D)
        ? this.deferredRender()
        : this.forwardRender());
  };
  a.pick = function (a, b, c, d) {
    if (this.gl) {
      let e = this.height - b;
      1 !== this.pixelRatio && ((a *= this.pixelRatio), (e *= this.pixelRatio));
      h.multiply(
        this.camera.viewMatrix,
        this.rotationMatrix,
        this.gl.modelViewMatrix
      );
      h.translate(this.gl.modelViewMatrix, this.contentCenter);
      this.gl.rotationMatrix = this.rotationMatrix;
      this.pickShader.useShaderProgram(this.gl);
      b = this.gl.getParameter(this.gl.COLOR_CLEAR_VALUE);
      this.gl.clearColor(1, 1, 1, 0);
      this.pickerFramebuffer.bind(
        this.gl,
        this.gl.drawingBufferWidth,
        this.gl.drawingBufferHeight
      );
      this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
      this.pickShader.setProjectionMatrix(
        this.gl,
        this.camera.projectionMatrix
      );
      this.pickShader.enableAttribsArray(this.gl);
      let g = [];
      for (let a = 0, b = this.molecules.length; a < b; a++)
        this.molecules[a].renderPickFrame(this.gl, this.styles, g, c, d);
      this.pickShader.disableAttribsArray(this.gl);
      this.gl.flush();
      c = new Uint8Array(4);
      this.gl.readPixels(
        a - 2,
        e + 2,
        1,
        1,
        this.gl.RGBA,
        this.gl.UNSIGNED_BYTE,
        c
      );
      d = m;
      0 < c[3] && (d = g[c[2] | (c[1] << 8) | (c[0] << 16)]);
      this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
      this.gl.clearColor(b[0], b[1], b[2], b[3]);
      return d;
    }
    return m;
  };
  a.center = function () {
    let a = new r.Atom(),
      b = this.molecules.length;
    for (let c = 0, d = b; c < d; c++) a.add3D(this.molecules[c].getCenter3D());
    a.x /= b;
    a.y /= b;
    a.z /= b;
    this.contentCenter = [-a.x, -a.y, -a.z];
  };
  a.isSupportDeferred = function () {
    return this.gl.textureFloatExt && this.gl.depthTextureExt;
  };
  a.create = function (a, b, e) {
    x.create.call(this, a, b, e);
    try {
      let a = c.getElementById(this.id);
      this.gl = a.getContext("webgl");
      this.gl || (this.gl = a.getContext("experimental-webgl"));
    } catch (y) {}
    this.gl
      ? (1 !== this.pixelRatio &&
          this.gl.canvas.width === this.width &&
          ((this.gl.canvas.style.width = this.width + "px"),
          (this.gl.canvas.style.height = this.height + "px"),
          (this.gl.canvas.width = this.width * this.pixelRatio),
          (this.gl.canvas.height = this.height * this.pixelRatio)),
        this.gl.enable(this.gl.DEPTH_TEST),
        this.gl.depthFunc(this.gl.LEQUAL),
        this.gl.blendFuncSeparate(
          this.gl.SRC_ALPHA,
          this.gl.ONE_MINUS_SRC_ALPHA,
          this.gl.ONE,
          this.gl.ONE_MINUS_SRC_ALPHA
        ),
        this.gl.clearDepth(1),
        (this.shadowTextureSize = 1024),
        (this.rotationMatrix = h.identity([])),
        (this.contentCenter = [0, 0, 0]),
        (this.camera = new d.Camera()),
        (this.label3D = new d.Label()),
        (this.lighting = new d.Light(
          this.styles.lightDiffuseColor_3D,
          this.styles.lightSpecularColor_3D,
          this.styles.lightDirection_3D
        )),
        (this.fogging = new d.Fog(
          this.styles.fog_color_3D || this.styles.backgroundColor,
          this.styles.fog_start_3D,
          this.styles.fog_end_3D,
          this.styles.fog_density_3D
        )),
        (this.gl.depthTextureExt =
          this.gl.getExtension("WEBGL_depth_texture") ||
          this.gl.getExtension("WEBKIT_WEBGL_depth_texture") ||
          this.gl.getExtension("MOZ_WEBGL_depth_texture")),
        (this.gl.textureFloatExt =
          this.gl.getExtension("OES_texture_float") ||
          this.gl.getExtension("WEBKIT_OES_texture_float") ||
          this.gl.getExtension("MOZ_OES_texture_float")),
        (this.ssao = new d.SSAO()),
        (this.pickerColorTexture = new d.Texture()),
        this.pickerColorTexture.init(
          this.gl,
          this.gl.UNSIGNED_BYTE,
          this.gl.RGBA,
          this.gl.RGBA
        ),
        (this.pickerDepthRenderbuffer = new d.Renderbuffer()),
        this.pickerDepthRenderbuffer.init(this.gl, this.gl.DEPTH_COMPONENT16),
        (this.pickerFramebuffer = new d.Framebuffer()),
        this.pickerFramebuffer.init(this.gl),
        this.pickerFramebuffer.setColorTexture(
          this.gl,
          this.pickerColorTexture.texture
        ),
        this.pickerFramebuffer.setDepthRenderbuffer(
          this.gl,
          this.pickerDepthRenderbuffer.renderbuffer
        ),
        (this.lightDepthMapTexture = new d.Texture()),
        (this.lightDepthMapRenderbuffer = new d.Renderbuffer()),
        (this.lightDepthMapFramebuffer = new d.Framebuffer()),
        this.lightDepthMapFramebuffer.init(this.gl),
        this.gl.depthTextureExt
          ? (this.lightDepthMapTexture.init(
              this.gl,
              this.gl.UNSIGNED_SHORT,
              this.gl.DEPTH_COMPONENT
            ),
            this.lightDepthMapRenderbuffer.init(this.gl, this.gl.RGBA4),
            this.lightDepthMapFramebuffer.setColorRenderbuffer(
              this.gl,
              this.lightDepthMapRenderbuffer.renderbuffer
            ),
            this.lightDepthMapFramebuffer.setDepthTexture(
              this.gl,
              this.lightDepthMapTexture.texture
            ))
          : (this.lightDepthMapTexture.init(
              this.gl,
              this.gl.UNSIGNED_BYTE,
              this.gl.RGBA,
              this.gl.RGBA
            ),
            this.lightDepthMapRenderbuffer.init(
              this.gl,
              this.gl.DEPTH_COMPONENT16
            ),
            this.lightDepthMapFramebuffer.setColorTexture(
              this.gl,
              this.lightDepthMapTexture.texture
            ),
            this.lightDepthMapFramebuffer.setDepthRenderbuffer(
              this.gl,
              this.lightDepthMapRenderbuffer.renderbuffer
            )),
        this.isSupportDeferred() &&
          ((this.depthTexture = new d.Texture()),
          this.depthTexture.init(
            this.gl,
            this.gl.UNSIGNED_SHORT,
            this.gl.DEPTH_COMPONENT
          ),
          (this.colorTexture = new d.Texture()),
          this.colorTexture.init(this.gl, this.gl.UNSIGNED_BYTE, this.gl.RGBA),
          (this.positionTexture = new d.Texture()),
          this.positionTexture.init(this.gl, this.gl.FLOAT, this.gl.RGBA),
          (this.normalTexture = new d.Texture()),
          this.normalTexture.init(this.gl, this.gl.FLOAT, this.gl.RGBA),
          (this.ssaoTexture = new d.Texture()),
          this.ssaoTexture.init(this.gl, this.gl.FLOAT, this.gl.RGBA),
          (this.outlineTexture = new d.Texture()),
          this.outlineTexture.init(
            this.gl,
            this.gl.UNSIGNED_BYTE,
            this.gl.RGBA
          ),
          (this.fxaaTexture = new d.Texture()),
          this.fxaaTexture.init(this.gl, this.gl.FLOAT, this.gl.RGBA),
          (this.imageTexture = new d.Texture()),
          this.imageTexture.init(this.gl, this.gl.FLOAT, this.gl.RGBA),
          (this.colorFramebuffer = new d.Framebuffer()),
          this.colorFramebuffer.init(this.gl),
          this.colorFramebuffer.setColorTexture(
            this.gl,
            this.colorTexture.texture
          ),
          this.colorFramebuffer.setDepthTexture(
            this.gl,
            this.depthTexture.texture
          ),
          (this.normalFramebuffer = new d.Framebuffer()),
          this.normalFramebuffer.init(this.gl),
          this.normalFramebuffer.setColorTexture(
            this.gl,
            this.normalTexture.texture
          ),
          this.normalFramebuffer.setDepthTexture(
            this.gl,
            this.depthTexture.texture
          ),
          (this.positionFramebuffer = new d.Framebuffer()),
          this.positionFramebuffer.init(this.gl),
          this.positionFramebuffer.setColorTexture(
            this.gl,
            this.positionTexture.texture
          ),
          this.positionFramebuffer.setDepthTexture(
            this.gl,
            this.depthTexture.texture
          ),
          (this.ssaoFramebuffer = new d.Framebuffer()),
          this.ssaoFramebuffer.init(this.gl),
          this.ssaoFramebuffer.setColorTexture(
            this.gl,
            this.ssaoTexture.texture
          ),
          (this.outlineFramebuffer = new d.Framebuffer()),
          this.outlineFramebuffer.init(this.gl),
          this.outlineFramebuffer.setColorTexture(
            this.gl,
            this.outlineTexture.texture
          ),
          (this.fxaaFramebuffer = new d.Framebuffer()),
          this.fxaaFramebuffer.init(this.gl),
          this.fxaaFramebuffer.setColorTexture(
            this.gl,
            this.fxaaTexture.texture
          ),
          (this.quadFramebuffer = new d.Framebuffer()),
          this.quadFramebuffer.init(this.gl),
          this.quadFramebuffer.setColorTexture(
            this.gl,
            this.imageTexture.texture
          ),
          (this.finalFramebuffer = new d.Framebuffer()),
          this.finalFramebuffer.init(this.gl),
          this.finalFramebuffer.setColorTexture(
            this.gl,
            this.fxaaTexture.texture
          ),
          this.finalFramebuffer.setDepthTexture(
            this.gl,
            this.depthTexture.texture
          ),
          (this.normalShader = new d.NormalShader()),
          this.normalShader.init(this.gl),
          (this.positionShader = new d.PositionShader()),
          this.positionShader.init(this.gl),
          d.SSAOShader &&
            ((this.ssaoShader = new d.SSAOShader()),
            this.ssaoShader.init(this.gl),
            (this.ssaoBlurShader = new d.SSAOBlurShader()),
            this.ssaoBlurShader.init(this.gl)),
          (this.outlineShader = new d.OutlineShader()),
          this.outlineShader.init(this.gl),
          (this.lightingShader = new d.LightingShader()),
          this.lightingShader.init(this.gl),
          (this.fxaaShader = new d.FXAAShader()),
          this.fxaaShader.init(this.gl),
          (this.quadShader = new d.QuadShader()),
          this.quadShader.init(this.gl)),
        (this.labelShader = new d.LabelShader()),
        this.labelShader.init(this.gl),
        (this.pickShader = new d.PickShader()),
        this.pickShader.init(this.gl),
        (this.phongShader = new d.PhongShader()),
        this.phongShader.init(this.gl),
        d.DepthShader &&
          ((this.depthShader = new d.DepthShader()),
          this.depthShader.init(this.gl)),
        (this.textTextImage = new d.TextImage()),
        this.textTextImage.init(this.gl),
        (this.gl.textImage = new d.TextImage()),
        this.gl.textImage.init(this.gl),
        (this.gl.textMesh = new d.TextMesh()),
        this.gl.textMesh.init(this.gl),
        (this.gl.material = new d.Material()),
        this.setupScene())
      : this.displayMessage();
  };
  a.displayMessage = function () {
    var a = c.getElementById(this.id);
    a.getContext &&
      ((a = a.getContext("2d")),
      this.styles.backgroundColor &&
        ((a.fillStyle = this.styles.backgroundColor),
        a.fillRect(0, 0, this.width, this.height)),
      this.emptyMessage &&
        ((a.fillStyle = "#737683"),
        (a.textAlign = "center"),
        (a.textBaseline = "middle"),
        (a.font = "18px Helvetica, Verdana, Arial, Sans-serif"),
        a.fillText(this.emptyMessage, this.width / 2, this.height / 2)));
  };
  a.renderText = function (a, b) {
    let c = { position: [], texCoord: [], translation: [] };
    this.textTextImage.pushVertexData(a, b, 0, c);
    this.gl.textMesh.storeData(this.gl, c.position, c.texCoord, c.translation);
    this.textTextImage.useTexture(this.gl);
    this.gl.textMesh.render(this.gl);
  };
  a.setupScene = function () {
    if (this.gl) {
      var a = l("#" + this.id),
        c = this.styles.backgroundColor
          ? this.styles.backgroundColor
          : "transparent";
      a.css("background-color", c);
      a = "transparent" === c ? [0, 0, 0, 0] : n.getRGB(c, 1);
      this.gl.clearColor(a[0], a[1], a[2], 4 == a.length ? a[3] : 1);
      this.styles.cullBackFace_3D
        ? this.gl.enable(this.gl.CULL_FACE)
        : this.gl.disable(this.gl.CULL_FACE);
      this.gl.sphereBuffer = new d.Sphere(
        1,
        this.styles.atoms_resolution_3D,
        this.styles.atoms_resolution_3D
      );
      this.gl.starBuffer = new d.Star();
      this.gl.cylinderBuffer = new d.Cylinder(
        1,
        1,
        this.styles.bonds_resolution_3D
      );
      this.gl.cylinderClosedBuffer = new d.Cylinder(
        1,
        1,
        this.styles.bonds_resolution_3D,
        !0
      );
      this.gl.boxBuffer = new d.Box(1, 1, 1);
      this.gl.pillBuffer = new d.Pill(
        this.styles.bonds_pillDiameter_3D / 2,
        this.styles.bonds_pillHeight_3D,
        this.styles.bonds_pillLatitudeResolution_3D,
        this.styles.bonds_pillLongitudeResolution_3D
      );
      this.gl.lineBuffer = new d.Line();
      this.gl.lineArrowBuffer = new d.LineArrow();
      this.gl.arrowBuffer = new d.Arrow(0.3, this.styles.compass_resolution_3D);
      this.gl.quadBuffer = new d.Quad();
      this.gl.textImage.updateFont(
        this.gl,
        this.styles.text_font_size,
        this.styles.text_font_families,
        this.styles.text_font_bold,
        this.styles.text_font_italic,
        this.styles.text_font_stroke_3D
      );
      this.lighting.lightScene(
        this.styles.lightDiffuseColor_3D,
        this.styles.lightSpecularColor_3D,
        this.styles.lightDirection_3D
      );
      this.fogging.fogScene(
        this.styles.fog_color_3D || this.styles.backgroundColor,
        this.styles.fog_start_3D,
        this.styles.fog_end_3D,
        this.styles.fog_density_3D
      );
      this.compass = new d.Compass(this.gl, this.styles);
      this.lightDepthMapTexture.setParameter(
        this.gl,
        this.shadowTextureSize,
        this.shadowTextureSize
      );
      this.lightDepthMapRenderbuffer.setParameter(
        this.gl,
        this.shadowTextureSize,
        this.shadowTextureSize
      );
      this.pickerColorTexture.setParameter(
        this.gl,
        this.gl.drawingBufferWidth,
        this.gl.drawingBufferHeight
      );
      this.pickerDepthRenderbuffer.setParameter(
        this.gl,
        this.gl.drawingBufferWidth,
        this.gl.drawingBufferHeight
      );
      this.isSupportDeferred() &&
        (this.depthTexture.setParameter(
          this.gl,
          this.gl.drawingBufferWidth,
          this.gl.drawingBufferHeight
        ),
        this.colorTexture.setParameter(
          this.gl,
          this.gl.drawingBufferWidth,
          this.gl.drawingBufferHeight
        ),
        this.imageTexture.setParameter(
          this.gl,
          this.gl.drawingBufferWidth,
          this.gl.drawingBufferHeight
        ),
        this.positionTexture.setParameter(
          this.gl,
          this.gl.drawingBufferWidth,
          this.gl.drawingBufferHeight
        ),
        this.normalTexture.setParameter(
          this.gl,
          this.gl.drawingBufferWidth,
          this.gl.drawingBufferHeight
        ),
        this.ssaoTexture.setParameter(
          this.gl,
          this.gl.drawingBufferWidth,
          this.gl.drawingBufferHeight
        ),
        this.outlineTexture.setParameter(
          this.gl,
          this.gl.drawingBufferWidth,
          this.gl.drawingBufferHeight
        ),
        this.fxaaTexture.setParameter(
          this.gl,
          this.gl.drawingBufferWidth,
          this.gl.drawingBufferHeight
        ),
        this.ssao.initSampleKernel(this.styles.ssao_kernel_samples),
        this.ssao.initNoiseTexture(this.gl));
      this.camera.updateProjectionMatrix(this.styles.projectionPerspective_3D);
      for (let e = 0, l = this.molecules.length; e < l; e++)
        if (
          ((a = this.molecules[e]),
          a.labelMesh instanceof d.TextMesh ||
            ((a.labelMesh = new d.TextMesh()), a.labelMesh.init(this.gl)),
          a.chains)
        ) {
          a.ribbons = [];
          a.cartoons = [];
          a.tubes = [];
          a.pipePlanks = [];
          for (let e = 0, l = a.chains.length; e < l; e++) {
            c = a.chains[e];
            for (let a = 0, b = c.length - 1; a < b; a++) c[a].Test = a;
            var h =
              3 < c.length &&
              k[c[3].name] &&
              "#BEA06E" === k[c[3].name].aminoColor;
            if (0 < c.length && !c[0].lineSegments) {
              for (let a = 0, b = c.length - 1; a < b; a++)
                c[a].setup(
                  c[a + 1].cp1,
                  h ? 1 : this.styles.proteins_horizontalResolution
                );
              if (!h)
                for (let a = 1, d = c.length - 1; a < d; a++)
                  p.vec3AngleFrom(c[a - 1].D, c[a].D) > b.PI / 2 &&
                    (c[a].guidePointsSmall.reverse(),
                    c[a].guidePointsLarge.reverse(),
                    g.scale(c[a].D, -1));
              for (let a = 2, b = c.length - 3; a < b; a++)
                c[a].computeLineSegments(
                  c[a - 2],
                  c[a - 1],
                  c[a + 1],
                  !h,
                  h
                    ? this.styles.nucleics_verticalResolution
                    : this.styles.proteins_verticalResolution
                );
              c.pop();
              c.pop();
              c.pop();
              c.shift();
              c.shift();
            }
            var m = n.hsl2rgb(1 === l ? 0.5 : e / l, 1, 0.5);
            m = "rgb(" + m[0] + "," + m[1] + "," + m[2] + ")";
            c.chainColor = m;
            if (h)
              (c = new d.Tube(
                c,
                this.styles.nucleics_tubeThickness,
                this.styles.nucleics_tubeResolution_3D
              )),
                (c.chainColor = m),
                a.tubes.push(c);
            else {
              h = new d.PipePlank(c, this.styles);
              a.pipePlanks.push(h);
              h = c.shift();
              var f = {
                front: new d.Ribbon(
                  c,
                  this.styles.proteins_ribbonThickness,
                  !1
                ),
                back: new d.Ribbon(
                  c,
                  -this.styles.proteins_ribbonThickness,
                  !1
                ),
              };
              f.front.chainColor = m;
              f.back.chainColor = m;
              a.ribbons.push(f);
              f = {
                front: new d.Ribbon(
                  c,
                  this.styles.proteins_ribbonThickness,
                  !0
                ),
                back: new d.Ribbon(
                  c,
                  -this.styles.proteins_ribbonThickness,
                  !0
                ),
              };
              f.front.chainColor = m;
              f.back.chainColor = m;
              a.cartoons.push(f);
              c.unshift(h);
            }
          }
        }
      this.label3D.updateVerticesBuffer(
        this.gl,
        this.getMolecules(),
        this.styles
      );
      if (this instanceof e.MovieCanvas3D && this.frames)
        for (let b = 0, d = this.frames.length; b < d; b++) {
          a = this.frames[b];
          for (let b = 0, d = a.mols.length; b < d; b++)
            (c = a.mols[b]),
              c.labelMesh instanceof r.d3.TextMesh ||
                ((c.labelMesh = new r.d3.TextMesh()),
                c.labelMesh.init(this.gl));
          this.label3D.updateVerticesBuffer(this.gl, a.mols, this.styles);
        }
    }
  };
  a.updateScene = function () {
    this.camera.updateProjectionMatrix(this.styles.projectionPerspective_3D);
    this.lighting.lightScene(
      this.styles.lightDiffuseColor_3D,
      this.styles.lightSpecularColor_3D,
      this.styles.lightDirection_3D
    );
    this.fogging.fogScene(
      this.styles.fog_color_3D || this.styles.backgroundColor,
      this.styles.fog_start_3D,
      this.styles.fog_end_3D,
      this.styles.fog_density_3D
    );
    this.repaint();
  };
  a.mousedown = function (a) {
    this.lastPoint = a.p;
  };
  a.mouseup = function (a) {
    this.lastPoint = m;
  };
  a.rightmousedown = function (a) {
    this.lastPoint = a.p;
  };
  a.drag = function (a) {
    if (this.lastPoint) {
      if (e.monitor.ALT) {
        var c = new r.Point(a.p.x, a.p.y);
        c.sub(this.lastPoint);
        var d = b.tan((this.camera.fieldOfView / 360) * b.PI);
        d = this.height / 2 / this.camera.zoom / d;
        d = this.camera.focalLength() / d;
        h.translate(this.camera.viewMatrix, [c.x * d, -c.y * d, 0]);
      } else
        (d = a.p.x - this.lastPoint.x),
          (c = a.p.y - this.lastPoint.y),
          (d = h.rotate(h.identity([]), (d * b.PI) / 180, [0, 1, 0])),
          h.rotate(d, (c * b.PI) / 180, [1, 0, 0]),
          (this.rotationMatrix = h.multiply(d, this.rotationMatrix));
      this.lastPoint = a.p;
      this.repaint();
    }
  };
  a.mousewheel = function (a, b) {
    0 < b ? this.camera.zoomIn() : this.camera.zoomOut();
    this.updateScene();
  };
  a.multitouchmove = function (a, c) {
    if (2 === c)
      if (this.lastPoint && this.lastPoint.multi) {
        c = new r.Point(a.p.x, a.p.y);
        c.sub(this.lastPoint);
        var d = b.tan((this.camera.fieldOfView / 360) * b.PI);
        d = this.height / 2 / this.camera.zoom / d;
        d = this.camera.focalLength() / d;
        h.translate(this.camera.viewMatrix, [c.x * d, -c.y * d, 0]);
        this.lastPoint = a.p;
        this.repaint();
      } else (this.lastPoint = a.p), (this.lastPoint.multi = !0);
  };
  a.gesturechange = function (a) {
    if (0 !== a.originalEvent.scale - this.lastPinchScale) {
      let b = 30 * -(a.originalEvent.scale / this.lastPinchScale - 1);
      if (isNaN(b)) return;
      0 < b ? this.camera.zoomOut() : this.camera.zoomIn();
      this.updateScene();
      this.lastPinchScale = a.originalEvent.scale;
    }
    this.repaint();
  };
  a.gestureend = function (a) {
    this.lastPinchScale = 1;
    this.lastGestureRotate = 0;
  };
})(
  ChemDoodle,
  ChemDoodle.extensions,
  ChemDoodle.math,
  ChemDoodle.structures,
  ChemDoodle.structures.d3,
  ChemDoodle.RESIDUE,
  Math,
  document,
  ChemDoodle.lib.mat4,
  ChemDoodle.lib.mat3,
  ChemDoodle.lib.vec3,
  ChemDoodle.lib.jQuery,
  window
);
(function (e, p, n, r, d) {
  e.MolGrabberCanvas3D = function (d, b, c) {
    d && this.create(d, b, c);
    b = [];
    b.push('\x3cbr\x3e\x3cinput type\x3d"text" id\x3d"');
    b.push(d);
    b.push('_query" size\x3d"32" value\x3d"" /\x3e');
    b.push("\x3cbr\x3e\x3cnobr\x3e");
    b.push('\x3cselect id\x3d"');
    b.push(d);
    b.push('_select"\x3e');
    b.push('\x3coption value\x3d"pubchem" selected\x3ePubChem');
    b.push("\x3c/select\x3e");
    b.push('\x3cbutton type\x3d"button" id\x3d"');
    b.push(d);
    b.push('_submit"\x3eShow Molecule\x3c/button\x3e');
    b.push("\x3c/nobr\x3e");
    r.writeln(b.join(""));
    let e = this;
    n("#" + d + "_submit").click(function () {
      e.search();
    });
    n("#" + d + "_query").keypress(function (a) {
      13 === a.which && e.search();
    });
  };
  e = e.MolGrabberCanvas3D.prototype = new e._Canvas3D();
  e.setSearchTerm = function (d) {
    n("#" + this.id + "_query").val(d);
    this.search();
  };
  e.search = function () {
    let d = this;
    p.getMoleculeFromDatabase(
      n("#" + this.id + "_query").val(),
      { database: n("#" + this.id + "_select").val(), dimension: 3 },
      function (b) {
        d.loadMolecule(b);
      }
    );
  };
})(ChemDoodle, ChemDoodle.iChemLabs, ChemDoodle.lib.jQuery, document);
(function (e, p, n) {
  e.MovieCanvas3D = function (e, d, k) {
    e && this.create(e, d, k);
    this.frames = [];
  };
  e.MovieCanvas3D.PLAY_ONCE = 0;
  e.MovieCanvas3D.PLAY_LOOP = 1;
  e.MovieCanvas3D.PLAY_SPRING = 2;
  n = e.MovieCanvas3D.prototype = new e._Canvas3D();
  n.timeout = 50;
  n.frameNumber = 0;
  n.playMode = 2;
  n.reverse = !1;
  n.startAnimation = e._AnimatorCanvas.prototype.startAnimation;
  n.stopAnimation = e._AnimatorCanvas.prototype.stopAnimation;
  n.isRunning = e._AnimatorCanvas.prototype.isRunning;
  n.dblclick = e.RotatorCanvas.prototype.dblclick;
  n.nextFrame = function (e) {
    e = this.frames[this.frameNumber];
    this.molecules = e.mols;
    this.shapes = e.shapes;
    2 === this.playMode && this.reverse
      ? (this.frameNumber--,
        0 > this.frameNumber && ((this.frameNumber = 1), (this.reverse = !1)))
      : (this.frameNumber++,
        this.frameNumber >= this.frames.length &&
          (2 === this.playMode
            ? ((this.frameNumber -= 2), (this.reverse = !0))
            : ((this.frameNumber = 0),
              0 === this.playMode && this.stopAnimation())));
  };
  n.center = function () {
    var e = new p.Atom(),
      d = this.frames[0];
    for (let k = 0, b = d.mols.length; k < b; k++)
      e.add3D(d.mols[k].getCenter3D());
    e.x /= d.mols.length;
    e.y /= d.mols.length;
    d = new p.Atom();
    d.sub3D(e);
    for (let k = 0, b = this.frames.length; k < b; k++) {
      e = this.frames[k];
      for (let b = 0, h = e.mols.length; b < h; b++) {
        let a = e.mols[b];
        for (let b = 0, c = a.atoms.length; b < c; b++) a.atoms[b].add3D(d);
      }
    }
  };
  n.addFrame = function (e, d) {
    this.frames.push({ mols: e, shapes: d });
  };
})(ChemDoodle, ChemDoodle.structures);
(function (e, p, n, r) {
  let d = [],
    k = [1, 0, 0],
    b = [0, 1, 0],
    c = [0, 0, 1];
  e.RotatorCanvas3D = function (a, b, c) {
    a && this.create(a, b, c);
  };
  let h = (e.RotatorCanvas3D.prototype = new e._Canvas3D());
  h.timeout = 33;
  p = p.PI / 15;
  h.xIncrement = p;
  h.yIncrement = p;
  h.zIncrement = p;
  h.startAnimation = e._AnimatorCanvas.prototype.startAnimation;
  h.stopAnimation = e._AnimatorCanvas.prototype.stopAnimation;
  h.isRunning = e._AnimatorCanvas.prototype.isRunning;
  h.dblclick = e.RotatorCanvas.prototype.dblclick;
  h.mousedown = r;
  h.rightmousedown = r;
  h.drag = r;
  h.mousewheel = r;
  h.nextFrame = function (a) {
    0 === this.molecules.length && 0 === this.shapes.length
      ? this.stopAnimation()
      : (n.identity(d),
        (a /= 1e3),
        n.rotate(d, this.xIncrement * a, k),
        n.rotate(d, this.yIncrement * a, b),
        n.rotate(d, this.zIncrement * a, c),
        n.multiply(this.rotationMatrix, d));
  };
})(ChemDoodle, Math, ChemDoodle.lib.mat4);
(function (e, p) {
  e.TransformCanvas3D = function (e, p, d) {
    e && this.create(e, p, d);
  };
  e.TransformCanvas3D.prototype = new e._Canvas3D();
})(ChemDoodle);
(function (e, p) {
  e.ViewerCanvas3D = function (e, p, d) {
    e && this.create(e, p, d);
  };
  e = e.ViewerCanvas3D.prototype = new e._Canvas3D();
  e.mousedown = p;
  e.rightmousedown = p;
  e.drag = p;
  e.mousewheel = p;
})(ChemDoodle);
(function (e, p, n, r, d) {
  function k(b, c, d, a) {
    this.element = b;
    this.x = c;
    this.y = d;
    this.dimension = a;
    this.allowMultipleSelections = !1;
  }
  e.PeriodicTableCanvas = function (b, c) {
    this.padding = 5;
    b && this.create(b, 18 * c + 2 * this.padding, 10 * c + 2 * this.padding);
    this.cellDimension = c ? c : 20;
    this.setupTable();
    this.repaint();
  };
  r = e.PeriodicTableCanvas.prototype = new e._Canvas();
  r.loadMolecule = d;
  r.getMolecule = d;
  r.getHoveredElement = function () {
    return this.hovered ? this.hovered.element : d;
  };
  r.innerRepaint = function (b) {
    for (let c = 0, d = this.cells.length; c < d; c++)
      this.drawCell(b, this.styles, this.cells[c]);
    this.hovered && this.drawCell(b, this.styles, this.hovered);
    this.selected && this.drawCell(b, this.styles, this.selected);
  };
  r.setupTable = function () {
    this.cells = [];
    let b = this.padding,
      c = this.padding;
    var d = 0;
    for (let g = 0, h = e.SYMBOLS.length; g < h; g++) {
      18 === d && ((d = 0), (c += this.cellDimension), (b = this.padding));
      var a = e.ELEMENT[e.SYMBOLS[g]];
      if (2 === a.atomicNumber) (b += 16 * this.cellDimension), (d += 16);
      else if (5 === a.atomicNumber || 13 === a.atomicNumber)
        (b += 10 * this.cellDimension), (d += 10);
      (58 > a.atomicNumber ||
        (71 < a.atomicNumber && 90 > a.atomicNumber) ||
        103 < a.atomicNumber) &&
        118 >= a.atomicNumber &&
        (this.cells.push(new k(a, b, c, this.cellDimension)),
        (b += this.cellDimension),
        d++);
    }
    c += 2 * this.cellDimension;
    b = 3 * this.cellDimension + this.padding;
    for (d = 57; 104 > d; d++)
      if (
        ((a = e.ELEMENT[e.SYMBOLS[d]]),
        90 === a.atomicNumber &&
          ((c += this.cellDimension),
          (b = 3 * this.cellDimension + this.padding)),
        (58 <= a.atomicNumber && 71 >= a.atomicNumber) ||
          (90 <= a.atomicNumber && 103 >= a.atomicNumber))
      )
        this.cells.push(new k(a, b, c, this.cellDimension)),
          (b += this.cellDimension);
  };
  r.drawCell = function (b, c, d) {
    let a = b.createRadialGradient(
      d.x + d.dimension / 3,
      d.y + d.dimension / 3,
      1.5 * d.dimension,
      d.x + d.dimension / 3,
      d.y + d.dimension / 3,
      d.dimension / 10
    );
    a.addColorStop(0, "#000000");
    a.addColorStop(0.7, d.element.jmolColor);
    a.addColorStop(1, "#FFFFFF");
    b.fillStyle = a;
    p.contextRoundRect(b, d.x, d.y, d.dimension, d.dimension, d.dimension / 8);
    if (d === this.hovered || d === this.selected || d.selected)
      (b.lineWidth = 2),
        (b.strokeStyle = "#c10000"),
        b.stroke(),
        (b.fillStyle = "white");
    b.fill();
    b.font = p.getFontString(c.text_font_size, c.text_font_families);
    b.fillStyle = c.text_color;
    b.textAlign = "center";
    b.textBaseline = "middle";
    b.fillText(d.element.symbol, d.x + d.dimension / 2, d.y + d.dimension / 2);
  };
  r.click = function (b) {
    this.hovered &&
      (this.allowMultipleSelections
        ? (this.hovered.selected = !this.hovered.selected)
        : (this.selected = this.hovered),
      this.repaint());
  };
  r.touchstart = function (b) {
    this.mousemove(b);
  };
  r.mousemove = function (b) {
    let c = b.p.x;
    b = b.p.y;
    this.hovered = d;
    for (let d = 0, a = this.cells.length; d < a; d++) {
      let a = this.cells[d];
      if (
        n.isBetween(c, a.x, a.x + a.dimension) &&
        n.isBetween(b, a.y, a.y + a.dimension)
      ) {
        this.hovered = a;
        break;
      }
    }
    this.repaint();
  };
  r.mouseout = function (b) {
    this.hovered = d;
    this.repaint();
  };
})(ChemDoodle, ChemDoodle.extensions, ChemDoodle.math, document);
(function (e, p, n, r) {
  e.png = {};
  e.png.string = function (d) {
    return p.getElementById(d.id).toDataURL("image/png");
  };
  e.png.open = function (d) {
    n.open(this.string(d));
  };
})(ChemDoodle.io, document, window);
(function (e, p, n) {
  e.file = {};
  e.file.content = function (e, d) {
    p.get(e, "", d);
  };
})(ChemDoodle.io, ChemDoodle.lib.jQuery);
(function (e, p, n, r, d, k, b) {
  p.SERVER_URL = "https://ichemlabs.cloud.chemdoodle.com/icl_cdc_v090000/WebHQ";
  p.inRelay = !1;
  p.asynchronous = !0;
  p.INFO = {
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    v_cwc: e.getVersion(),
    v_jQuery: d.fn.jquery,
    v_jQuery_ui: "N/A",
  };
  let c = new n.JSONInterpreter(),
    h = new r.Queue();
  p._contactServer = function (a, b, c, e, m) {
    if (this.inRelay)
      h.enqueue({ call: a, content: b, options: c, callback: e, errorback: m });
    else {
      p.inRelay = !0;
      let g = b instanceof FormData;
      a = JSON.stringify({
        call: a,
        content: g ? {} : b,
        options: c,
        info: ChemDoodle.iChemLabs.INFO,
      });
      g && b.append("jsonData", JSON.stringify(a));
      b = {
        dataType: "text",
        type: "POST",
        data: g ? b : a,
        url: this.SERVER_URL,
        success: function (a) {
          a = JSON.parse(a);
          a.message && alert(a.message);
          p.inRelay = !1;
          e && a.content && !a.stop && e(a.content);
          a.stop && m && m();
          h.isEmpty() ||
            ((a = h.dequeue()),
            p._contactServer(
              a.call,
              a.content,
              a.options,
              a.callback,
              a.errorback
            ));
        },
        error: function (a, b, c) {
          p.inRelay = !1;
          m && m();
          h.isEmpty() ||
            ((a = h.dequeue()),
            p._contactServer(
              a.call,
              a.content,
              a.options,
              a.callback,
              a.errorback
            ));
        },
        xhrFields: { withCredentials: !0 },
        async: p.asynchronous,
      };
      g && ((b.processData = !1), (b.contentType = !1));
      d.ajax(b);
    }
  };
  p.authenticate = function (a, b, c, d) {
    this._contactServer(
      "authenticate",
      { credential: a },
      b,
      function (a) {
        c(a);
      },
      d
    );
  };
  p.balanceReaction = function (a, b, d, e) {
    let g = {};
    "string" === typeof a || a instanceof String
      ? (g.equation = a)
      : (g.reaction = c.contentTo(a.molecules, a.shapes));
    this._contactServer(
      "balanceReaction",
      g,
      b,
      function (a) {
        d(a.result, a.message);
      },
      e
    );
  };
  p.calculate = function (a, b, d, e) {
    this._contactServer(
      "calculate",
      { mol: c.molTo(a) },
      b,
      function (a) {
        d(a);
      },
      e
    );
  };
  p.createLewisDotStructure = function (a, b, d, e) {
    this._contactServer(
      "createLewisDot",
      { mol: c.molTo(a) },
      b,
      function (a) {
        d(c.molFrom(a.mol));
      },
      e
    );
  };
  p.cir = function (a, b, d, e) {
    this._contactServer(
      "cir",
      a,
      b,
      function (a) {
        d(c.contentFrom(a.data), a.preview);
      },
      e
    );
  };
  p.fileToImage = function (a, b, c, d) {
    this._contactServer(
      "fileToImage",
      a,
      b,
      function (a) {
        c(a.imgsrc, a.width, a.height);
      },
      d
    );
  };
  p.generateImage = function (a, b, d, e) {
    this._contactServer(
      "generateImage",
      { mol: c.molTo(a) },
      b,
      function (a) {
        d(a.link);
      },
      e
    );
  };
  p.generateIUPACName = function (a, b, d, e) {
    this._contactServer(
      "generateIUPACName",
      { mol: c.molTo(a) },
      b,
      function (a) {
        d(a.iupac);
      },
      e
    );
  };
  p.getMoleculeFromContent = function (a, b, d, e) {
    this._contactServer(
      "getMoleculeFromContent",
      { content: a },
      b,
      function (a) {
        let b = !1;
        for (let c = 0, d = a.mol.a.length; c < d; c++)
          if (0 !== a.mol.a[c].z) {
            b = !0;
            break;
          }
        if (b)
          for (let b = 0, c = a.mol.a.length; b < c; b++)
            (a.mol.a[b].x /= 20), (a.mol.a[b].y /= 20), (a.mol.a[b].z /= 20);
        d(c.molFrom(a.mol));
      },
      e
    );
  };
  p.getMoleculeFromDatabase = function (a, b, d, e) {
    this._contactServer(
      "getMoleculeFromDatabase",
      { query: a },
      b,
      function (a) {
        if (3 === b.dimension)
          for (let b = 0, c = a.mol.a.length; b < c; b++)
            (a.mol.a[b].x /= 20), (a.mol.a[b].y /= -20), (a.mol.a[b].z /= 20);
        d(c.molFrom(a.mol));
      },
      e
    );
  };
  p.getOptimizedPDBStructure = function (a, b, d, e) {
    this._contactServer(
      "getOptimizedPDBStructure",
      { id: a },
      b,
      function (a) {
        let b;
        b = a.mol ? c.molFrom(a.mol) : new r.Molecule();
        b.chains = c.chainsFrom(a.ribbons);
        for (let c = 0, d = b.chains.length; c < d; c++) {
          a = b.chains[c];
          for (let b = 0, c = a.length - 1; b < c; b++)
            a[b + 1].arrow && ((a[b + 1].arrow = !1), (a[b].arrow = !0));
        }
        b.fromJSON = !0;
        d(b);
      },
      e
    );
  };
  p.getZeoliteFromIZA = function (a, b, c, d) {
    this._contactServer(
      "getZeoliteFromIZA",
      { query: a },
      b,
      function (a) {
        c(ChemDoodle.readCIF(a.cif, b.xSuper, b.ySuper, b.zSuper));
      },
      d
    );
  };
  p.isGraphIsomorphism = function (a, b, d, e, h) {
    this._contactServer(
      "isGraphIsomorphism",
      { arrow: c.molTo(a), target: c.molTo(b) },
      d,
      function (a) {
        e(a.value);
      },
      h
    );
  };
  p.isSubgraphIsomorphism = function (a, b, d, e, h) {
    this._contactServer(
      "isSubgraphIsomorphism",
      { arrow: c.molTo(a), target: c.molTo(b) },
      d,
      function (a) {
        e(a.value);
      },
      h
    );
  };
  p.isSupergraphIsomorphism = function (a, b, d, e, h) {
    this._contactServer(
      "isSupergraphIsomorphism",
      { arrow: c.molTo(a), target: c.molTo(b) },
      d,
      function (a) {
        e(a.value);
      },
      h
    );
  };
  p.getSimilarityMeasure = function (a, b, d, e, h) {
    this._contactServer(
      "getSimilarityMeasure",
      { first: c.molTo(a), second: c.molTo(b) },
      d,
      function (a) {
        e(a.value);
      },
      h
    );
  };
  p.kekulize = function (a, b, d, e) {
    this._contactServer(
      "kekulize",
      { mol: c.molTo(a) },
      b,
      function (a) {
        d(c.molFrom(a.mol));
      },
      e
    );
  };
  p.maximumCommonSubstructure = function (a, b, d, e, h) {
    this._contactServer(
      "maximumCommonSubstructure",
      { m1: c.molTo(a), m2: c.molTo(b) },
      d,
      function (a) {
        e(a.map);
      },
      h
    );
  };
  p.mechanismMatch = function (a, b, c, d, e) {
    this._contactServer(
      "matchMechanism",
      { arrow: a, targets: b },
      c,
      function (a) {
        d(a);
      },
      e
    );
  };
  p.optimize = function (a, b, d, e) {
    this._contactServer(
      "optimize",
      { mol: c.molTo(a) },
      b,
      function (e) {
        e = c.molFrom(e.mol);
        if (2 === b.dimension) {
          for (let b = 0, c = e.atoms.length; b < c; b++)
            (a.atoms[b].x = e.atoms[b].x), (a.atoms[b].y = e.atoms[b].y);
          d();
        } else if (3 === b.dimension) {
          for (let a = 0, b = e.atoms.length; a < b; a++)
            (e.atoms[a].x /= 20), (e.atoms[a].y /= -20), (e.atoms[a].z /= 20);
          d(e);
        }
      },
      e
    );
  };
  p.readIUPACName = function (a, b, d, e) {
    this._contactServer(
      "readIUPACName",
      { iupac: a },
      b,
      function (a) {
        let b = [];
        for (let d = 0, e = a.mols.length; d < e; d++)
          b.push(c.molFrom(a.mols[d]));
        d(b, a.warning);
      },
      e
    );
  };
  p.readSMILES = function (a, b, d, e) {
    this._contactServer(
      "readSMILES",
      { smiles: a },
      b,
      function (a) {
        d(c.molFrom(a.mol));
      },
      e
    );
  };
  p.readWLN = function (a, b, d, e) {
    this._contactServer(
      "readWLN",
      { wln: a },
      b,
      function (a) {
        d(c.contentFrom(a.content));
      },
      e
    );
  };
  p.resolveCIP = function (a, b, d, e) {
    this._contactServer(
      "resolveCIP",
      { mol: c.molTo(a) },
      b,
      function (a) {
        d(a.atoms, a.bonds);
      },
      e
    );
  };
  p.saveFile = function (a, b, d, e) {
    this._contactServer(
      "saveFile",
      { mol: c.molTo(a) },
      b,
      function (a) {
        d(a.link);
      },
      e
    );
  };
  p.simulate13CNMR = function (a, b, d, h) {
    b.nucleus = "C";
    b.isotope = 13;
    this._contactServer(
      "simulateNMR",
      { mol: c.molTo(a) },
      b,
      function (a) {
        d(e.readJCAMP(a.jcamp));
      },
      h
    );
  };
  p.simulate1HNMR = function (a, b, d, h) {
    b.nucleus = "H";
    b.isotope = 1;
    this._contactServer(
      "simulateNMR",
      { mol: c.molTo(a) },
      b,
      function (a) {
        d(e.readJCAMP(a.jcamp));
      },
      h
    );
  };
  p.simulateMassParentPeak = function (a, b, d, h) {
    this._contactServer(
      "simulateMassParentPeak",
      { mol: c.molTo(a) },
      b,
      function (a) {
        d(e.readJCAMP(a.jcamp));
      },
      h
    );
  };
  p.stoichiometry = function (a, d, e, h) {
    let g = {};
    "string" === typeof a || a instanceof String
      ? (g.equation = a)
      : a.molecules !== b
      ? (g.reaction = c.contentTo(a.molecules, a.shapes))
      : a.table !== b && (g.table = a.table);
    this._contactServer(
      "stoichiometry",
      g,
      d,
      function (a) {
        e(a.table, a.message);
      },
      h
    );
  };
  p.writeSMILES = function (a, b, d, e) {
    this._contactServer(
      "writeSMILES",
      { mol: c.molTo(a) },
      b,
      function (a) {
        d(a.smiles);
      },
      e
    );
  };
  p.version = function (a, b, c) {
    this._contactServer(
      "version",
      {},
      a,
      function (a) {
        b(a.value);
      },
      c
    );
  };
  p.checkForUpdates = function (a) {
    this._contactServer(
      "checkForUpdates",
      { value: k.href },
      a,
      function (a) {},
      function () {}
    );
  };
})(
  ChemDoodle,
  ChemDoodle.iChemLabs,
  ChemDoodle.io,
  ChemDoodle.structures,
  ChemDoodle.lib.jQuery,
  location
);
