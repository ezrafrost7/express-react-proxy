!(function(e) {
    function t(t) {
        for (var n, o, r = t[0], i = t[1], d = t[2], c = 0, u = []; c < r.length; c++)
            (o = r[c]), Object.prototype.hasOwnProperty.call(s, o) && s[o] && u.push(s[o][0]), (s[o] = 0);
        for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
        for (p && p(t); u.length; ) u.shift()();
        return l.push.apply(l, d || []), a();
    }
    function a() {
        for (var e, t = 0; t < l.length; t++) {
            for (var a = l[t], n = !0, r = 1; r < a.length; r++) {
                var i = a[r];
                0 !== s[i] && (n = !1);
            }
            n && (l.splice(t--, 1), (e = o((o.s = a[0]))));
        }
        return e;
    }
    var n = {},
        s = { 1: 0 },
        l = [];
    function o(t) {
        if (n[t]) return n[t].exports;
        var a = (n[t] = { i: t, l: !1, exports: {} });
        return e[t].call(a.exports, a, a.exports, o), (a.l = !0), a.exports;
    }
    (o.m = e),
        (o.c = n),
        (o.d = function(e, t, a) {
            o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
        }),
        (o.r = function(e) {
            'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (o.t = function(e, t) {
            if ((1 & t && (e = o(e)), 8 & t)) return e;
            if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
            var a = Object.create(null);
            if ((o.r(a), Object.defineProperty(a, 'default', { enumerable: !0, value: e }), 2 & t && 'string' != typeof e))
                for (var n in e)
                    o.d(
                        a,
                        n,
                        function(t) {
                            return e[t];
                        }.bind(null, n),
                    );
            return a;
        }),
        (o.n = function(e) {
            var t =
                e && e.__esModule
                    ? function() {
                          return e.default;
                      }
                    : function() {
                          return e;
                      };
            return o.d(t, 'a', t), t;
        }),
        (o.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (o.p = '/');
    var r = (window.webpackJsonp = window.webpackJsonp || []),
        i = r.push.bind(r);
    (r.push = t), (r = r.slice());
    for (var d = 0; d < r.length; d++) t(r[d]);
    var p = i;
    l.push([218, 0, 2]), a();
})({
    218: function(e, t, a) {
        e.exports = a(224);
    },
    222: function(e, t, a) {
        var n = {
            './af': 82,
            './af.js': 82,
            './ar': 83,
            './ar-dz': 84,
            './ar-dz.js': 84,
            './ar-kw': 85,
            './ar-kw.js': 85,
            './ar-ly': 86,
            './ar-ly.js': 86,
            './ar-ma': 87,
            './ar-ma.js': 87,
            './ar-sa': 88,
            './ar-sa.js': 88,
            './ar-tn': 89,
            './ar-tn.js': 89,
            './ar.js': 83,
            './az': 90,
            './az.js': 90,
            './be': 91,
            './be.js': 91,
            './bg': 92,
            './bg.js': 92,
            './bm': 93,
            './bm.js': 93,
            './bn': 94,
            './bn.js': 94,
            './bo': 95,
            './bo.js': 95,
            './br': 96,
            './br.js': 96,
            './bs': 97,
            './bs.js': 97,
            './ca': 98,
            './ca.js': 98,
            './cs': 99,
            './cs.js': 99,
            './cv': 100,
            './cv.js': 100,
            './cy': 101,
            './cy.js': 101,
            './da': 102,
            './da.js': 102,
            './de': 103,
            './de-at': 104,
            './de-at.js': 104,
            './de-ch': 105,
            './de-ch.js': 105,
            './de.js': 103,
            './dv': 106,
            './dv.js': 106,
            './el': 107,
            './el.js': 107,
            './en-au': 108,
            './en-au.js': 108,
            './en-ca': 109,
            './en-ca.js': 109,
            './en-gb': 110,
            './en-gb.js': 110,
            './en-ie': 111,
            './en-ie.js': 111,
            './en-il': 112,
            './en-il.js': 112,
            './en-in': 113,
            './en-in.js': 113,
            './en-nz': 114,
            './en-nz.js': 114,
            './en-sg': 115,
            './en-sg.js': 115,
            './eo': 116,
            './eo.js': 116,
            './es': 117,
            './es-do': 118,
            './es-do.js': 118,
            './es-us': 119,
            './es-us.js': 119,
            './es.js': 117,
            './et': 120,
            './et.js': 120,
            './eu': 121,
            './eu.js': 121,
            './fa': 122,
            './fa.js': 122,
            './fi': 123,
            './fi.js': 123,
            './fil': 124,
            './fil.js': 124,
            './fo': 125,
            './fo.js': 125,
            './fr': 126,
            './fr-ca': 127,
            './fr-ca.js': 127,
            './fr-ch': 128,
            './fr-ch.js': 128,
            './fr.js': 126,
            './fy': 129,
            './fy.js': 129,
            './ga': 130,
            './ga.js': 130,
            './gd': 131,
            './gd.js': 131,
            './gl': 132,
            './gl.js': 132,
            './gom-deva': 133,
            './gom-deva.js': 133,
            './gom-latn': 134,
            './gom-latn.js': 134,
            './gu': 135,
            './gu.js': 135,
            './he': 136,
            './he.js': 136,
            './hi': 137,
            './hi.js': 137,
            './hr': 138,
            './hr.js': 138,
            './hu': 139,
            './hu.js': 139,
            './hy-am': 140,
            './hy-am.js': 140,
            './id': 141,
            './id.js': 141,
            './is': 142,
            './is.js': 142,
            './it': 143,
            './it-ch': 144,
            './it-ch.js': 144,
            './it.js': 143,
            './ja': 145,
            './ja.js': 145,
            './jv': 146,
            './jv.js': 146,
            './ka': 147,
            './ka.js': 147,
            './kk': 148,
            './kk.js': 148,
            './km': 149,
            './km.js': 149,
            './kn': 150,
            './kn.js': 150,
            './ko': 151,
            './ko.js': 151,
            './ku': 152,
            './ku.js': 152,
            './ky': 153,
            './ky.js': 153,
            './lb': 154,
            './lb.js': 154,
            './lo': 155,
            './lo.js': 155,
            './lt': 156,
            './lt.js': 156,
            './lv': 157,
            './lv.js': 157,
            './me': 158,
            './me.js': 158,
            './mi': 159,
            './mi.js': 159,
            './mk': 160,
            './mk.js': 160,
            './ml': 161,
            './ml.js': 161,
            './mn': 162,
            './mn.js': 162,
            './mr': 163,
            './mr.js': 163,
            './ms': 164,
            './ms-my': 165,
            './ms-my.js': 165,
            './ms.js': 164,
            './mt': 166,
            './mt.js': 166,
            './my': 167,
            './my.js': 167,
            './nb': 168,
            './nb.js': 168,
            './ne': 169,
            './ne.js': 169,
            './nl': 170,
            './nl-be': 171,
            './nl-be.js': 171,
            './nl.js': 170,
            './nn': 172,
            './nn.js': 172,
            './oc-lnc': 173,
            './oc-lnc.js': 173,
            './pa-in': 174,
            './pa-in.js': 174,
            './pl': 175,
            './pl.js': 175,
            './pt': 176,
            './pt-br': 177,
            './pt-br.js': 177,
            './pt.js': 176,
            './ro': 178,
            './ro.js': 178,
            './ru': 179,
            './ru.js': 179,
            './sd': 180,
            './sd.js': 180,
            './se': 181,
            './se.js': 181,
            './si': 182,
            './si.js': 182,
            './sk': 183,
            './sk.js': 183,
            './sl': 184,
            './sl.js': 184,
            './sq': 185,
            './sq.js': 185,
            './sr': 186,
            './sr-cyrl': 187,
            './sr-cyrl.js': 187,
            './sr.js': 186,
            './ss': 188,
            './ss.js': 188,
            './sv': 189,
            './sv.js': 189,
            './sw': 190,
            './sw.js': 190,
            './ta': 191,
            './ta.js': 191,
            './te': 192,
            './te.js': 192,
            './tet': 193,
            './tet.js': 193,
            './tg': 194,
            './tg.js': 194,
            './th': 195,
            './th.js': 195,
            './tk': 196,
            './tk.js': 196,
            './tl-ph': 197,
            './tl-ph.js': 197,
            './tlh': 198,
            './tlh.js': 198,
            './tr': 199,
            './tr.js': 199,
            './tzl': 200,
            './tzl.js': 200,
            './tzm': 201,
            './tzm-latn': 202,
            './tzm-latn.js': 202,
            './tzm.js': 201,
            './ug-cn': 203,
            './ug-cn.js': 203,
            './uk': 204,
            './uk.js': 204,
            './ur': 205,
            './ur.js': 205,
            './uz': 206,
            './uz-latn': 207,
            './uz-latn.js': 207,
            './uz.js': 206,
            './vi': 208,
            './vi.js': 208,
            './x-pseudo': 209,
            './x-pseudo.js': 209,
            './yo': 210,
            './yo.js': 210,
            './zh-cn': 211,
            './zh-cn.js': 211,
            './zh-hk': 212,
            './zh-hk.js': 212,
            './zh-mo': 213,
            './zh-mo.js': 213,
            './zh-tw': 214,
            './zh-tw.js': 214,
        };
        function s(e) {
            var t = l(e);
            return a(t);
        }
        function l(e) {
            if (!a.o(n, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw ((t.code = 'MODULE_NOT_FOUND'), t);
            }
            return n[e];
        }
        (s.keys = function() {
            return Object.keys(n);
        }),
            (s.resolve = l),
            (e.exports = s),
            (s.id = 222);
    },
    224: function(e, t, a) {
        'use strict';
        a.r(t);
        a(219);
        var n = a(0);
        var s = [
                function(e, t, a) {
                    return [
                        '@media (min-width:48em){.omniscript-btn-previous',
                        t,
                        '~.omniscript-btn-next',
                        t,
                        ',.omniscript-btn-previous',
                        t,
                        '~.omniscript-btn-save-for-later',
                        t,
                        '{margin-left:.75rem}.omniscript-body[data-stepborder=right]',
                        t,
                        '{border-right:1px solid #d9dbdd}.omniscript-body[data-stepborder=left]',
                        t,
                        '{border-left:1px solid #d9dbdd}}.omniscript-article[data-content-position=right]',
                        t,
                        '{flex-direction:row-reverse}.omniscript-article[data-content-position=left]',
                        t,
                        '{flex-direction:row}.slds-spinner-container__wrapper',
                        t,
                        '{min-height:200px;position:relative}.footer-message',
                        t,
                        '{font-style:italic;font-weight:700;margin-top:10px}.omniscript-sfl-actions',
                        t,
                        '{font-size:1rem;color:#00396b;font-weight:300}@media screen and (max-width:768px){.omniscript-sfl-actions',
                        t,
                        '{display:flex;align-items:center;justify-content:center}.omniscript-button-position',
                        t,
                        '{flex-direction:column-reverse}}.omniscript-sfl-actions',
                        t,
                        '>div',
                        t,
                        '{display:inline-block;border-right:2px solid #f4f6f9;padding:0 10px}.omniscript-sfl-actions',
                        t,
                        '>div:last-of-type',
                        t,
                        '{border-right:none}',
                    ].join('');
                },
            ],
            l = a(45),
            o = a(32),
            r = a(22),
            i = a(12),
            d = a(9),
            p = a(41),
            c = a(42),
            u = a(31),
            m = a(36),
            y = a(59),
            h = a(44),
            b = a(71),
            f = a(62),
            g = a(53),
            v = a(49),
            k = a(75),
            S = a(51),
            D = a(52),
            M = a(73),
            j = a(67),
            _ = a(76),
            x = a(72),
            w = a(64),
            I = a(47),
            T = a(68),
            H = a(69),
            L = a(61),
            C = a(63),
            O = a(37),
            A = a(20),
            P = a(46),
            N = a(25),
            E = a(29);
        function F(e, t, a, n) {
            const { c: s, d: F, h: z, t: J, b: B, k: W, i: R, f: V } = e,
                { _m0: U, _m1: K, _m2: q, _m3: G, _m4: Y, _m5: Q } = n;
            return [
                z(
                    'div',
                    { attrs: { dir: t._dir }, key: 99 },
                    V([
                        t.hasErrors
                            ? s('lightning-layout', l.a, { props: { verticalAlign: 'stretch' }, key: 16 }, [
                                  s(
                                      'lightning-layout-item',
                                      o.a,
                                      {
                                          classMap: { 'slds-text-align_center': !0, 'slds-p-around_small': !0 },
                                          props: { flexibility: 'auto', padding: 'around-small', size: '1' },
                                          key: 1,
                                      },
                                      [
                                          s(
                                              'lightning-icon',
                                              r.a,
                                              {
                                                  props: { iconName: 'utility:error', alternativeText: 'Error!', variant: 'error', size: 'large' },
                                                  key: 0,
                                              },
                                              [],
                                          ),
                                      ],
                                  ),
                                  s(
                                      'lightning-layout-item',
                                      o.a,
                                      { classMap: { 'custom-box': !0 }, props: { flexibility: 'auto', padding: 'around-small' }, key: 15 },
                                      [
                                          z('p', { classMap: { 'slds-text-heading_medium': !0 }, key: 2 }, [
                                              F(t.allCustomLabelsUtil.OmniScriptError),
                                          ]),
                                          z('p', { classMap: { bold: !0 }, key: 3 }, [F(t._errorMsg)]),
                                          t._isActiveOs
                                              ? null
                                              : z('dl', { classMap: { 'slds-dl_inline': !0 }, key: 13 }, [
                                                    z('dt', { classMap: { 'slds-dl_inline__label': !0 }, key: 5 }, [
                                                        z('strong', { key: 4 }, [F(t.allCustomLabelsUtil.OmniScriptType), J(':')]),
                                                    ]),
                                                    z('dd', { classMap: { 'slds-dl_inline__detail': !0 }, key: 6 }, [J('offplatform')]),
                                                    z('dt', { classMap: { 'slds-dl_inline__label': !0 }, key: 8 }, [
                                                        z('strong', { key: 7 }, [F(t.allCustomLabelsUtil.OmniScriptSubType), J(':')]),
                                                    ]),
                                                    z('dd', { classMap: { 'slds-dl_inline__detail': !0 }, key: 9 }, [J('lifeInsuranceExample2')]),
                                                    z('dt', { classMap: { 'slds-dl_inline__label': !0 }, key: 11 }, [
                                                        z('strong', { key: 10 }, [F(t.allCustomLabelsUtil.OmniScriptLang), J(':')]),
                                                    ]),
                                                    z('dd', { classMap: { 'slds-dl_inline__detail': !0 }, key: 12 }, [J('English')]),
                                                ]),
                                          z('p', { classMap: { 'footer-message': !0 }, key: 14 }, [F(t.allCustomLabelsUtil.OmniScriptNotFound2)]),
                                      ],
                                  ),
                              ])
                            : null,
                        t.hasErrors
                            ? []
                            : V([
                                  t.compLoaded
                                      ? null
                                      : z('div', { classMap: { 'slds-spinner-container__wrapper': !0 }, key: 18 }, [
                                            s(
                                                'c-spinner',
                                                i.a,
                                                { props: { variant: 'brand', alternativeText: 'Loading...', size: 'medium' }, key: 17 },
                                                [],
                                            ),
                                        ]),
                                  t.bSflValid && t.firstRender
                                      ? V([
                                            t.isLauncherVisible
                                                ? s(
                                                      'c-button',
                                                      d.a,
                                                      {
                                                          props: {
                                                              label: t.inlineLabel,
                                                              variant: t.inlineVariant,
                                                              theme: t._theme,
                                                              extraclass: 'slds-button_stretch',
                                                          },
                                                          key: 19,
                                                          on: { click: U || (n._m0 = B(t.setScriptVisibility)) },
                                                      },
                                                      [],
                                                  )
                                                : null,
                                            z(
                                                'article',
                                                {
                                                    className: t.containerClasses,
                                                    attrs: { 'data-content-position': t.stepChartProps.position },
                                                    key: 69,
                                                },
                                                [
                                                    z('div', { className: t._sideContentClasses, key: 22 }, [
                                                        t.jsonDef.propSetMap.hideStepChart
                                                            ? null
                                                            : s(
                                                                  'c-omniscript-step-chart',
                                                                  p.a,
                                                                  {
                                                                      attrs: { 'data-omni-key': 'omniscriptStepChart' },
                                                                      props: {
                                                                          jsonDef: t.jsonDef,
                                                                          jsonData: t.jsonDef.response,
                                                                          props: t.stepChartProps,
                                                                          layout: t.layout,
                                                                          scriptHeaderDef: t.scriptHeaderDef,
                                                                      },
                                                                      key: 20,
                                                                  },
                                                                  [],
                                                              ),
                                                        t._isKbEnabledOnScript
                                                            ? s(
                                                                  'c-omniscript-knowledge-base',
                                                                  c.a,
                                                                  {
                                                                      attrs: {
                                                                          'data-omni-key': 'omniscriptKnowledgeBase',
                                                                          'data-stepchart-placement': t._stepChartPlacement,
                                                                      },
                                                                      props: {
                                                                          knowledgeOptions: t.kbOptions,
                                                                          layout: t.layout,
                                                                          omniscriptKey: t.scriptHeaderDef.omniscriptKey,
                                                                          kbLabel: t.knowledgeLabel,
                                                                      },
                                                                      key: 21,
                                                                  },
                                                                  [],
                                                              )
                                                            : null,
                                                    ]),
                                                    z(
                                                        'div',
                                                        {
                                                            className: t.contentSldsClass,
                                                            attrs: { 'data-stepborder': t.stepChartProps.position },
                                                            key: 68,
                                                        },
                                                        V([
                                                            t.isPageLoading
                                                                ? s(
                                                                      'c-spinner',
                                                                      i.a,
                                                                      {
                                                                          props: {
                                                                              variant: 'brand',
                                                                              alternativeText: 'Loading...',
                                                                              extraouterclass: 'slds-theme_default',
                                                                              message: t.spinnerMessage,
                                                                              size: 'medium',
                                                                          },
                                                                          key: 23,
                                                                      },
                                                                      [],
                                                                  )
                                                                : null,
                                                            t.bSflAuto
                                                                ? s(
                                                                      'c-omniscript-save-for-later-acknowledge',
                                                                      u.a,
                                                                      { props: { result: t.bSflResult, layout: t.layout, auto: !0 }, key: 24 },
                                                                      [],
                                                                  )
                                                                : null,
                                                            R(t.jsonDef.children, function(e, a) {
                                                                return [
                                                                    e.bCancel
                                                                        ? s(
                                                                              'c-omniscript-cancel-action',
                                                                              m.a,
                                                                              {
                                                                                  attrs: { 'data-omni-key': e.name },
                                                                                  props: {
                                                                                      jsonDef: e,
                                                                                      jsonData: t.jsonDef.response,
                                                                                      jsonDataStr: t.jsonDataStr,
                                                                                      layout: t.layout,
                                                                                      resume: t.resume,
                                                                                      scriptHeaderDef: t.scriptHeaderDef,
                                                                                      runMode: t.runMode,
                                                                                  },
                                                                                  key: W(25, e.lwcId),
                                                                              },
                                                                              [],
                                                                          )
                                                                        : null,
                                                                    e.bDataRaptorExtractAction
                                                                        ? s(
                                                                              'c-omniscript-dr-extract-action',
                                                                              y.a,
                                                                              {
                                                                                  attrs: { 'data-omni-key': e.name },
                                                                                  props: {
                                                                                      jsonDef: e,
                                                                                      jsonData: t.jsonDef.response,
                                                                                      jsonDataStr: t.jsonDataStr,
                                                                                      layout: t.layout,
                                                                                      resume: t.resume,
                                                                                      scriptHeaderDef: t.scriptHeaderDef,
                                                                                      runMode: t.runMode,
                                                                                  },
                                                                                  key: W(26, e.lwcId),
                                                                              },
                                                                              [],
                                                                          )
                                                                        : null,
                                                                    e.bStep
                                                                        ? s(
                                                                              'c-omniscript-step',
                                                                              h.a,
                                                                              {
                                                                                  attrs: { 'data-omni-key': e.name },
                                                                                  props: {
                                                                                      jsonDef: e,
                                                                                      jsonData: t.jsonDef.response,
                                                                                      jsonDataStr: t.jsonDataStr,
                                                                                      layout: t.layout,
                                                                                      resume: t.resume,
                                                                                      scriptHeaderDef: t.scriptHeaderDef,
                                                                                      runMode: t.runMode,
                                                                                      seedJson: t.jsonDef.propSetMap.seedDataJSON,
                                                                                  },
                                                                                  key: W(50, e.lwcId),
                                                                              },
                                                                              R(e.children, function(e, a) {
                                                                                  return V([
                                                                                      e.bEB
                                                                                          ? z(
                                                                                                'div',
                                                                                                { className: e.sldsCls, key: W(36, e.lwcId) },
                                                                                                V([
                                                                                                    e.bEditBlockLabel
                                                                                                        ? s(
                                                                                                              'c-omniscript-edit-block-label',
                                                                                                              b.a,
                                                                                                              {
                                                                                                                  props: {
                                                                                                                      jsonDef: e,
                                                                                                                      jsonData: t.jsonDef.response,
                                                                                                                      jsonDataStr: t.jsonDataStr,
                                                                                                                      layout: t.layout,
                                                                                                                      resume: t.resume,
                                                                                                                      runMode: t.runMode,
                                                                                                                      scriptHeaderDef:
                                                                                                                          t.scriptHeaderDef,
                                                                                                                  },
                                                                                                                  key: 27,
                                                                                                              },
                                                                                                              [],
                                                                                                          )
                                                                                                        : null,
                                                                                                    R(e.eleArray, function(e, a) {
                                                                                                        return e.bEditBlock
                                                                                                            ? s(
                                                                                                                  'c-omniscript-edit-block',
                                                                                                                  f.a,
                                                                                                                  {
                                                                                                                      attrs: {
                                                                                                                          'data-omni-key': e.name,
                                                                                                                      },
                                                                                                                      props: {
                                                                                                                          jsonDef: e,
                                                                                                                          jsonData:
                                                                                                                              t.jsonDef.response,
                                                                                                                          jsonDataStr: t.jsonDataStr,
                                                                                                                          layout: t.layout,
                                                                                                                          resume: t.resume,
                                                                                                                          scriptHeaderDef:
                                                                                                                              t.scriptHeaderDef,
                                                                                                                          runMode: t.runMode,
                                                                                                                          seedJson:
                                                                                                                              t.jsonDef.propSetMap
                                                                                                                                  .seedDataJSON,
                                                                                                                          mode: e.propSetMap.mode,
                                                                                                                      },
                                                                                                                      key: W(34, e.lwcId),
                                                                                                                  },
                                                                                                                  R(e.children, function(e, a) {
                                                                                                                      return R(e.eleArray, function(
                                                                                                                          e,
                                                                                                                          a,
                                                                                                                      ) {
                                                                                                                          return [
                                                                                                                              e.bFormula
                                                                                                                                  ? s(
                                                                                                                                        'c-omniscript-formula',
                                                                                                                                        g.a,
                                                                                                                                        {
                                                                                                                                            attrs: {
                                                                                                                                                'data-omni-key':
                                                                                                                                                    e.name,
                                                                                                                                            },
                                                                                                                                            props: {
                                                                                                                                                jsonDef: e,
                                                                                                                                                jsonData:
                                                                                                                                                    t
                                                                                                                                                        .jsonDef
                                                                                                                                                        .response,
                                                                                                                                                jsonDataStr:
                                                                                                                                                    t.jsonDataStr,
                                                                                                                                                layout:
                                                                                                                                                    t.layout,
                                                                                                                                                resume:
                                                                                                                                                    t.resume,
                                                                                                                                                scriptHeaderDef:
                                                                                                                                                    t.scriptHeaderDef,
                                                                                                                                                runMode:
                                                                                                                                                    t.runMode,
                                                                                                                                            },
                                                                                                                                            key: W(
                                                                                                                                                28,
                                                                                                                                                e.lwcId,
                                                                                                                                            ),
                                                                                                                                        },
                                                                                                                                        [],
                                                                                                                                    )
                                                                                                                                  : null,
                                                                                                                              e.bText
                                                                                                                                  ? s(
                                                                                                                                        'c-omniscript-text',
                                                                                                                                        v.a,
                                                                                                                                        {
                                                                                                                                            attrs: {
                                                                                                                                                'data-omni-key':
                                                                                                                                                    e.name,
                                                                                                                                            },
                                                                                                                                            props: {
                                                                                                                                                jsonDef: e,
                                                                                                                                                jsonData:
                                                                                                                                                    t
                                                                                                                                                        .jsonDef
                                                                                                                                                        .response,
                                                                                                                                                jsonDataStr:
                                                                                                                                                    t.jsonDataStr,
                                                                                                                                                layout:
                                                                                                                                                    t.layout,
                                                                                                                                                resume:
                                                                                                                                                    t.resume,
                                                                                                                                                scriptHeaderDef:
                                                                                                                                                    t.scriptHeaderDef,
                                                                                                                                                runMode:
                                                                                                                                                    t.runMode,
                                                                                                                                                seedJson:
                                                                                                                                                    t
                                                                                                                                                        .jsonDef
                                                                                                                                                        .propSetMap
                                                                                                                                                        .seedDataJSON,
                                                                                                                                            },
                                                                                                                                            key: W(
                                                                                                                                                29,
                                                                                                                                                e.lwcId,
                                                                                                                                            ),
                                                                                                                                        },
                                                                                                                                        [],
                                                                                                                                    )
                                                                                                                                  : null,
                                                                                                                              e.bDate
                                                                                                                                  ? s(
                                                                                                                                        'c-omniscript-date',
                                                                                                                                        k.a,
                                                                                                                                        {
                                                                                                                                            attrs: {
                                                                                                                                                'data-omni-key':
                                                                                                                                                    e.name,
                                                                                                                                            },
                                                                                                                                            props: {
                                                                                                                                                jsonDef: e,
                                                                                                                                                jsonData:
                                                                                                                                                    t
                                                                                                                                                        .jsonDef
                                                                                                                                                        .response,
                                                                                                                                                jsonDataStr:
                                                                                                                                                    t.jsonDataStr,
                                                                                                                                                layout:
                                                                                                                                                    t.layout,
                                                                                                                                                resume:
                                                                                                                                                    t.resume,
                                                                                                                                                scriptHeaderDef:
                                                                                                                                                    t.scriptHeaderDef,
                                                                                                                                                runMode:
                                                                                                                                                    t.runMode,
                                                                                                                                                seedJson:
                                                                                                                                                    t
                                                                                                                                                        .jsonDef
                                                                                                                                                        .propSetMap
                                                                                                                                                        .seedDataJSON,
                                                                                                                                            },
                                                                                                                                            key: W(
                                                                                                                                                30,
                                                                                                                                                e.lwcId,
                                                                                                                                            ),
                                                                                                                                        },
                                                                                                                                        [],
                                                                                                                                    )
                                                                                                                                  : null,
                                                                                                                              e.bRadio
                                                                                                                                  ? s(
                                                                                                                                        'c-omniscript-radio',
                                                                                                                                        S.a,
                                                                                                                                        {
                                                                                                                                            attrs: {
                                                                                                                                                'data-omni-key':
                                                                                                                                                    e.name,
                                                                                                                                            },
                                                                                                                                            props: {
                                                                                                                                                jsonDef: e,
                                                                                                                                                jsonData:
                                                                                                                                                    t
                                                                                                                                                        .jsonDef
                                                                                                                                                        .response,
                                                                                                                                                jsonDataStr:
                                                                                                                                                    t.jsonDataStr,
                                                                                                                                                layout:
                                                                                                                                                    t.layout,
                                                                                                                                                resume:
                                                                                                                                                    t.resume,
                                                                                                                                                scriptHeaderDef:
                                                                                                                                                    t.scriptHeaderDef,
                                                                                                                                                runMode:
                                                                                                                                                    t.runMode,
                                                                                                                                                seedJson:
                                                                                                                                                    t
                                                                                                                                                        .jsonDef
                                                                                                                                                        .propSetMap
                                                                                                                                                        .seedDataJSON,
                                                                                                                                            },
                                                                                                                                            key: W(
                                                                                                                                                31,
                                                                                                                                                e.lwcId,
                                                                                                                                            ),
                                                                                                                                        },
                                                                                                                                        [],
                                                                                                                                    )
                                                                                                                                  : null,
                                                                                                                              e.bSelect
                                                                                                                                  ? s(
                                                                                                                                        'c-omniscript-select',
                                                                                                                                        D.a,
                                                                                                                                        {
                                                                                                                                            attrs: {
                                                                                                                                                'data-omni-key':
                                                                                                                                                    e.name,
                                                                                                                                            },
                                                                                                                                            props: {
                                                                                                                                                jsonDef: e,
                                                                                                                                                jsonData:
                                                                                                                                                    t
                                                                                                                                                        .jsonDef
                                                                                                                                                        .response,
                                                                                                                                                jsonDataStr:
                                                                                                                                                    t.jsonDataStr,
                                                                                                                                                layout:
                                                                                                                                                    t.layout,
                                                                                                                                                resume:
                                                                                                                                                    t.resume,
                                                                                                                                                scriptHeaderDef:
                                                                                                                                                    t.scriptHeaderDef,
                                                                                                                                                runMode:
                                                                                                                                                    t.runMode,
                                                                                                                                                seedJson:
                                                                                                                                                    t
                                                                                                                                                        .jsonDef
                                                                                                                                                        .propSetMap
                                                                                                                                                        .seedDataJSON,
                                                                                                                                            },
                                                                                                                                            key: W(
                                                                                                                                                32,
                                                                                                                                                e.lwcId,
                                                                                                                                            ),
                                                                                                                                        },
                                                                                                                                        [],
                                                                                                                                    )
                                                                                                                                  : null,
                                                                                                                              e.bCurrency
                                                                                                                                  ? s(
                                                                                                                                        'c-omniscript-currency',
                                                                                                                                        M.a,
                                                                                                                                        {
                                                                                                                                            attrs: {
                                                                                                                                                'data-omni-key':
                                                                                                                                                    e.name,
                                                                                                                                            },
                                                                                                                                            props: {
                                                                                                                                                jsonDef: e,
                                                                                                                                                jsonData:
                                                                                                                                                    t
                                                                                                                                                        .jsonDef
                                                                                                                                                        .response,
                                                                                                                                                jsonDataStr:
                                                                                                                                                    t.jsonDataStr,
                                                                                                                                                layout:
                                                                                                                                                    t.layout,
                                                                                                                                                resume:
                                                                                                                                                    t.resume,
                                                                                                                                                scriptHeaderDef:
                                                                                                                                                    t.scriptHeaderDef,
                                                                                                                                                runMode:
                                                                                                                                                    t.runMode,
                                                                                                                                                seedJson:
                                                                                                                                                    t
                                                                                                                                                        .jsonDef
                                                                                                                                                        .propSetMap
                                                                                                                                                        .seedDataJSON,
                                                                                                                                            },
                                                                                                                                            key: W(
                                                                                                                                                33,
                                                                                                                                                e.lwcId,
                                                                                                                                            ),
                                                                                                                                        },
                                                                                                                                        [],
                                                                                                                                    )
                                                                                                                                  : null,
                                                                                                                          ];
                                                                                                                      });
                                                                                                                  }),
                                                                                                              )
                                                                                                            : null;
                                                                                                    }),
                                                                                                    e.bEditBlockNew
                                                                                                        ? s(
                                                                                                              'c-omniscript-edit-block-new',
                                                                                                              j.a,
                                                                                                              {
                                                                                                                  props: {
                                                                                                                      jsonDef: e,
                                                                                                                      jsonData: t.jsonDef.response,
                                                                                                                      jsonDataStr: t.jsonDataStr,
                                                                                                                      layout: t.layout,
                                                                                                                      resume: t.resume,
                                                                                                                      runMode: t.runMode,
                                                                                                                      scriptHeaderDef:
                                                                                                                          t.scriptHeaderDef,
                                                                                                                  },
                                                                                                                  key: 35,
                                                                                                              },
                                                                                                              [],
                                                                                                          )
                                                                                                        : null,
                                                                                                ]),
                                                                                            )
                                                                                          : null,
                                                                                      R(e.eleArray, function(e, a) {
                                                                                          return [
                                                                                              e.bNumber
                                                                                                  ? s(
                                                                                                        'c-omniscript-number',
                                                                                                        _.a,
                                                                                                        {
                                                                                                            attrs: { 'data-omni-key': e.name },
                                                                                                            props: {
                                                                                                                jsonDef: e,
                                                                                                                jsonData: t.jsonDef.response,
                                                                                                                jsonDataStr: t.jsonDataStr,
                                                                                                                layout: t.layout,
                                                                                                                resume: t.resume,
                                                                                                                scriptHeaderDef: t.scriptHeaderDef,
                                                                                                                runMode: t.runMode,
                                                                                                                seedJson:
                                                                                                                    t.jsonDef.propSetMap.seedDataJSON,
                                                                                                            },
                                                                                                            key: W(37, e.lwcId),
                                                                                                        },
                                                                                                        [],
                                                                                                    )
                                                                                                  : null,
                                                                                              e.bFormula
                                                                                                  ? s(
                                                                                                        'c-omniscript-formula',
                                                                                                        g.a,
                                                                                                        {
                                                                                                            attrs: { 'data-omni-key': e.name },
                                                                                                            props: {
                                                                                                                jsonDef: e,
                                                                                                                jsonData: t.jsonDef.response,
                                                                                                                jsonDataStr: t.jsonDataStr,
                                                                                                                layout: t.layout,
                                                                                                                resume: t.resume,
                                                                                                                scriptHeaderDef: t.scriptHeaderDef,
                                                                                                                runMode: t.runMode,
                                                                                                            },
                                                                                                            key: W(38, e.lwcId),
                                                                                                        },
                                                                                                        [],
                                                                                                    )
                                                                                                  : null,
                                                                                              e.bRadioGroup
                                                                                                  ? s(
                                                                                                        'c-omniscript-radio-group',
                                                                                                        x.a,
                                                                                                        {
                                                                                                            attrs: { 'data-omni-key': e.name },
                                                                                                            props: {
                                                                                                                jsonDef: e,
                                                                                                                jsonData: t.jsonDef.response,
                                                                                                                jsonDataStr: t.jsonDataStr,
                                                                                                                layout: t.layout,
                                                                                                                resume: t.resume,
                                                                                                                scriptHeaderDef: t.scriptHeaderDef,
                                                                                                                runMode: t.runMode,
                                                                                                                seedJson:
                                                                                                                    t.jsonDef.propSetMap.seedDataJSON,
                                                                                                            },
                                                                                                            key: W(39, e.lwcId),
                                                                                                        },
                                                                                                        [],
                                                                                                    )
                                                                                                  : null,
                                                                                              e.bTextarea
                                                                                                  ? s(
                                                                                                        'c-omniscript-textarea',
                                                                                                        w.a,
                                                                                                        {
                                                                                                            attrs: { 'data-omni-key': e.name },
                                                                                                            props: {
                                                                                                                jsonDef: e,
                                                                                                                jsonData: t.jsonDef.response,
                                                                                                                jsonDataStr: t.jsonDataStr,
                                                                                                                layout: t.layout,
                                                                                                                resume: t.resume,
                                                                                                                scriptHeaderDef: t.scriptHeaderDef,
                                                                                                                runMode: t.runMode,
                                                                                                                seedJson:
                                                                                                                    t.jsonDef.propSetMap.seedDataJSON,
                                                                                                            },
                                                                                                            key: W(40, e.lwcId),
                                                                                                        },
                                                                                                        [],
                                                                                                    )
                                                                                                  : null,
                                                                                              e.bSelect
                                                                                                  ? s(
                                                                                                        'c-omniscript-select',
                                                                                                        D.a,
                                                                                                        {
                                                                                                            attrs: { 'data-omni-key': e.name },
                                                                                                            props: {
                                                                                                                jsonDef: e,
                                                                                                                jsonData: t.jsonDef.response,
                                                                                                                jsonDataStr: t.jsonDataStr,
                                                                                                                layout: t.layout,
                                                                                                                resume: t.resume,
                                                                                                                scriptHeaderDef: t.scriptHeaderDef,
                                                                                                                runMode: t.runMode,
                                                                                                                seedJson:
                                                                                                                    t.jsonDef.propSetMap.seedDataJSON,
                                                                                                            },
                                                                                                            key: W(41, e.lwcId),
                                                                                                        },
                                                                                                        [],
                                                                                                    )
                                                                                                  : null,
                                                                                              e.bText
                                                                                                  ? s(
                                                                                                        'c-omniscript-text',
                                                                                                        v.a,
                                                                                                        {
                                                                                                            attrs: { 'data-omni-key': e.name },
                                                                                                            props: {
                                                                                                                jsonDef: e,
                                                                                                                jsonData: t.jsonDef.response,
                                                                                                                jsonDataStr: t.jsonDataStr,
                                                                                                                layout: t.layout,
                                                                                                                resume: t.resume,
                                                                                                                scriptHeaderDef: t.scriptHeaderDef,
                                                                                                                runMode: t.runMode,
                                                                                                                seedJson:
                                                                                                                    t.jsonDef.propSetMap.seedDataJSON,
                                                                                                            },
                                                                                                            key: W(42, e.lwcId),
                                                                                                        },
                                                                                                        [],
                                                                                                    )
                                                                                                  : null,
                                                                                              e.bEmail
                                                                                                  ? s(
                                                                                                        'c-omniscript-email',
                                                                                                        I.a,
                                                                                                        {
                                                                                                            attrs: { 'data-omni-key': e.name },
                                                                                                            props: {
                                                                                                                jsonDef: e,
                                                                                                                jsonData: t.jsonDef.response,
                                                                                                                jsonDataStr: t.jsonDataStr,
                                                                                                                layout: t.layout,
                                                                                                                resume: t.resume,
                                                                                                                scriptHeaderDef: t.scriptHeaderDef,
                                                                                                                runMode: t.runMode,
                                                                                                                seedJson:
                                                                                                                    t.jsonDef.propSetMap.seedDataJSON,
                                                                                                            },
                                                                                                            key: W(43, e.lwcId),
                                                                                                        },
                                                                                                        [],
                                                                                                    )
                                                                                                  : null,
                                                                                              e.bBlock
                                                                                                  ? s(
                                                                                                        'c-omniscript-block',
                                                                                                        T.a,
                                                                                                        {
                                                                                                            attrs: { 'data-omni-key': e.name },
                                                                                                            props: {
                                                                                                                jsonDef: e,
                                                                                                                jsonData: t.jsonDef.response,
                                                                                                                jsonDataStr: t.jsonDataStr,
                                                                                                                layout: t.layout,
                                                                                                                resume: t.resume,
                                                                                                                scriptHeaderDef: t.scriptHeaderDef,
                                                                                                                runMode: t.runMode,
                                                                                                                seedJson:
                                                                                                                    t.jsonDef.propSetMap.seedDataJSON,
                                                                                                            },
                                                                                                            key: W(47, e.lwcId),
                                                                                                        },
                                                                                                        R(e.children, function(e, a) {
                                                                                                            return R(e.eleArray, function(e, a) {
                                                                                                                return e.bTypeaheadBlock
                                                                                                                    ? s(
                                                                                                                          'c-omniscript-typeahead-block',
                                                                                                                          H.a,
                                                                                                                          {
                                                                                                                              attrs: {
                                                                                                                                  'data-omni-key':
                                                                                                                                      e.name,
                                                                                                                              },
                                                                                                                              props: {
                                                                                                                                  jsonDef: e,
                                                                                                                                  jsonData:
                                                                                                                                      t.jsonDef
                                                                                                                                          .response,
                                                                                                                                  jsonDataStr:
                                                                                                                                      t.jsonDataStr,
                                                                                                                                  layout: t.layout,
                                                                                                                                  resume: t.resume,
                                                                                                                                  scriptHeaderDef:
                                                                                                                                      t.scriptHeaderDef,
                                                                                                                                  runMode: t.runMode,
                                                                                                                                  seedJson:
                                                                                                                                      t.jsonDef
                                                                                                                                          .propSetMap
                                                                                                                                          .seedDataJSON,
                                                                                                                              },
                                                                                                                              key: W(46, e.lwcId),
                                                                                                                          },
                                                                                                                          R(e.children, function(
                                                                                                                              e,
                                                                                                                              a,
                                                                                                                          ) {
                                                                                                                              return R(
                                                                                                                                  e.eleArray,
                                                                                                                                  function(e, a) {
                                                                                                                                      return [
                                                                                                                                          e.bPlacesTypeahead
                                                                                                                                              ? s(
                                                                                                                                                    'c-omniscript-places-typeahead',
                                                                                                                                                    L.a,
                                                                                                                                                    {
                                                                                                                                                        attrs: {
                                                                                                                                                            'data-omni-key':
                                                                                                                                                                e.name,
                                                                                                                                                        },
                                                                                                                                                        props: {
                                                                                                                                                            jsonDef: e,
                                                                                                                                                            jsonData:
                                                                                                                                                                t
                                                                                                                                                                    .jsonDef
                                                                                                                                                                    .response,
                                                                                                                                                            jsonDataStr:
                                                                                                                                                                t.jsonDataStr,
                                                                                                                                                            layout:
                                                                                                                                                                t.layout,
                                                                                                                                                            resume:
                                                                                                                                                                t.resume,
                                                                                                                                                            scriptHeaderDef:
                                                                                                                                                                t.scriptHeaderDef,
                                                                                                                                                            runMode:
                                                                                                                                                                t.runMode,
                                                                                                                                                            seedJson:
                                                                                                                                                                t
                                                                                                                                                                    .jsonDef
                                                                                                                                                                    .propSetMap
                                                                                                                                                                    .seedDataJSON,
                                                                                                                                                        },
                                                                                                                                                        key: W(
                                                                                                                                                            44,
                                                                                                                                                            e.lwcId,
                                                                                                                                                        ),
                                                                                                                                                    },
                                                                                                                                                    [],
                                                                                                                                                )
                                                                                                                                              : null,
                                                                                                                                          e.bText
                                                                                                                                              ? s(
                                                                                                                                                    'c-omniscript-text',
                                                                                                                                                    v.a,
                                                                                                                                                    {
                                                                                                                                                        attrs: {
                                                                                                                                                            'data-omni-key':
                                                                                                                                                                e.name,
                                                                                                                                                        },
                                                                                                                                                        props: {
                                                                                                                                                            jsonDef: e,
                                                                                                                                                            jsonData:
                                                                                                                                                                t
                                                                                                                                                                    .jsonDef
                                                                                                                                                                    .response,
                                                                                                                                                            jsonDataStr:
                                                                                                                                                                t.jsonDataStr,
                                                                                                                                                            layout:
                                                                                                                                                                t.layout,
                                                                                                                                                            resume:
                                                                                                                                                                t.resume,
                                                                                                                                                            scriptHeaderDef:
                                                                                                                                                                t.scriptHeaderDef,
                                                                                                                                                            runMode:
                                                                                                                                                                t.runMode,
                                                                                                                                                            seedJson:
                                                                                                                                                                t
                                                                                                                                                                    .jsonDef
                                                                                                                                                                    .propSetMap
                                                                                                                                                                    .seedDataJSON,
                                                                                                                                                        },
                                                                                                                                                        key: W(
                                                                                                                                                            45,
                                                                                                                                                            e.lwcId,
                                                                                                                                                        ),
                                                                                                                                                    },
                                                                                                                                                    [],
                                                                                                                                                )
                                                                                                                                              : null,
                                                                                                                                      ];
                                                                                                                                  },
                                                                                                                              );
                                                                                                                          }),
                                                                                                                      )
                                                                                                                    : null;
                                                                                                            });
                                                                                                        }),
                                                                                                    )
                                                                                                  : null,
                                                                                              e.bRadio
                                                                                                  ? s(
                                                                                                        'c-omniscript-radio',
                                                                                                        S.a,
                                                                                                        {
                                                                                                            attrs: { 'data-omni-key': e.name },
                                                                                                            props: {
                                                                                                                jsonDef: e,
                                                                                                                jsonData: t.jsonDef.response,
                                                                                                                jsonDataStr: t.jsonDataStr,
                                                                                                                layout: t.layout,
                                                                                                                resume: t.resume,
                                                                                                                scriptHeaderDef: t.scriptHeaderDef,
                                                                                                                runMode: t.runMode,
                                                                                                                seedJson:
                                                                                                                    t.jsonDef.propSetMap.seedDataJSON,
                                                                                                            },
                                                                                                            key: W(48, e.lwcId),
                                                                                                        },
                                                                                                        [],
                                                                                                    )
                                                                                                  : null,
                                                                                              e.bFile
                                                                                                  ? s(
                                                                                                        'c-omniscript-file',
                                                                                                        C.a,
                                                                                                        {
                                                                                                            attrs: { 'data-omni-key': e.name },
                                                                                                            props: {
                                                                                                                jsonDef: e,
                                                                                                                jsonData: t.jsonDef.response,
                                                                                                                jsonDataStr: t.jsonDataStr,
                                                                                                                layout: t.layout,
                                                                                                                resume: t.resume,
                                                                                                                scriptHeaderDef: t.scriptHeaderDef,
                                                                                                                runMode: t.runMode,
                                                                                                                seedJson:
                                                                                                                    t.jsonDef.propSetMap.seedDataJSON,
                                                                                                            },
                                                                                                            key: W(49, e.lwcId),
                                                                                                        },
                                                                                                        [],
                                                                                                    )
                                                                                                  : null,
                                                                                          ];
                                                                                      }),
                                                                                  ]);
                                                                              }),
                                                                          )
                                                                        : null,
                                                                    e.bNavigate
                                                                        ? s(
                                                                              'c-omniscript-navigate-action',
                                                                              O.a,
                                                                              {
                                                                                  attrs: { 'data-omni-key': e.name },
                                                                                  props: {
                                                                                      jsonDef: e,
                                                                                      jsonData: t.jsonDef.response,
                                                                                      jsonDataStr: t.jsonDataStr,
                                                                                      layout: t.layout,
                                                                                      resume: t.resume,
                                                                                      scriptHeaderDef: t.scriptHeaderDef,
                                                                                      runMode: t.runMode,
                                                                                  },
                                                                                  key: W(51, e.lwcId),
                                                                              },
                                                                              [],
                                                                          )
                                                                        : null,
                                                                ];
                                                            }),
                                                            z(
                                                                'div',
                                                                {
                                                                    classMap: {
                                                                        'slds-grid': !0,
                                                                        'slds-wrap': !0,
                                                                        'slds-gutters': !0,
                                                                        'slds-p-horizontal_medium': !0,
                                                                    },
                                                                    key: 67,
                                                                },
                                                                [
                                                                    z(
                                                                        'div',
                                                                        {
                                                                            classMap: {
                                                                                'slds-col': !0,
                                                                                'slds-order_2': !0,
                                                                                'slds-medium-order_1': !0,
                                                                                'slds-size_12-of-12': !0,
                                                                                'slds-medium-size_6-of-12': !0,
                                                                            },
                                                                            key: 58,
                                                                        },
                                                                        [
                                                                            z('div', { classMap: { 'omniscript-sfl-actions': !0 }, key: 57 }, [
                                                                                t.cancelAction
                                                                                    ? z('div', { key: 53 }, [
                                                                                          s(
                                                                                              'c-button',
                                                                                              d.a,
                                                                                              {
                                                                                                  className: t.navButton.save.classes,
                                                                                                  props: {
                                                                                                      type: 'button',
                                                                                                      label: t.cancelLabel,
                                                                                                      variant: 'base',
                                                                                                  },
                                                                                                  key: 52,
                                                                                                  on: { click: K || (n._m1 = B(t.cancel)) },
                                                                                              },
                                                                                              [],
                                                                                          ),
                                                                                      ])
                                                                                    : null,
                                                                                s(
                                                                                    'c-navigate-action',
                                                                                    A.b,
                                                                                    {
                                                                                        attrs: { 'data-omni-key': 'DEFAULT-CANCEL' },
                                                                                        props: {
                                                                                            targetType: t._defaultCancel.type,
                                                                                            targetParams: t._defaultCancel.params,
                                                                                        },
                                                                                        key: 54,
                                                                                    },
                                                                                    [],
                                                                                ),
                                                                                t.allowSfl
                                                                                    ? z('div', { key: 56 }, [
                                                                                          s(
                                                                                              'c-button',
                                                                                              d.a,
                                                                                              {
                                                                                                  className: t.navButton.save.classes,
                                                                                                  props: {
                                                                                                      type: 'button',
                                                                                                      label: t.navButton.save.label,
                                                                                                      variant: 'base',
                                                                                                  },
                                                                                                  key: 55,
                                                                                                  on: { click: q || (n._m2 = B(t.saveForLater)) },
                                                                                              },
                                                                                              [],
                                                                                          ),
                                                                                      ])
                                                                                    : null,
                                                                            ]),
                                                                        ],
                                                                    ),
                                                                    z(
                                                                        'div',
                                                                        {
                                                                            classMap: {
                                                                                'slds-col': !0,
                                                                                'slds-order_1': !0,
                                                                                'slds-medium-order_2': !0,
                                                                                'slds-size_12-of-12': !0,
                                                                                'slds-medium-size_6-of-12': !0,
                                                                            },
                                                                            key: 66,
                                                                        },
                                                                        [
                                                                            z(
                                                                                'div',
                                                                                {
                                                                                    classMap: {
                                                                                        'slds-grid': !0,
                                                                                        'slds-wrap': !0,
                                                                                        'slds-grid_align-end': !0,
                                                                                        'omniscript-button-position': !0,
                                                                                    },
                                                                                    key: 65,
                                                                                },
                                                                                [
                                                                                    t.hasPrev && t._isSeoEnabled
                                                                                        ? s(
                                                                                              'c-navigate-action',
                                                                                              A.b,
                                                                                              {
                                                                                                  className: t.navButton.previous.classes,
                                                                                                  props: {
                                                                                                      targetType: 'Current Page',
                                                                                                      useHref: !0,
                                                                                                      targetParams: t.navButton.previous.targetParams,
                                                                                                  },
                                                                                                  key: 60,
                                                                                              },
                                                                                              [
                                                                                                  s(
                                                                                                      'c-button',
                                                                                                      d.a,
                                                                                                      {
                                                                                                          props: {
                                                                                                              type: 'button',
                                                                                                              label: t.navButton.previous.label,
                                                                                                              variant: 'neutral',
                                                                                                              extraclass:
                                                                                                                  'slds-size_1-of-1 slds-p-horizontal_none slds-text-align_center',
                                                                                                          },
                                                                                                          key: 59,
                                                                                                      },
                                                                                                      [],
                                                                                                  ),
                                                                                              ],
                                                                                          )
                                                                                        : null,
                                                                                    t.hasPrev
                                                                                        ? t._isSeoEnabled
                                                                                            ? null
                                                                                            : s(
                                                                                                  'c-button',
                                                                                                  d.a,
                                                                                                  {
                                                                                                      className: t.navButton.previous.classes,
                                                                                                      props: {
                                                                                                          type: 'button',
                                                                                                          label: t.navButton.previous.label,
                                                                                                          variant: 'neutral',
                                                                                                          extraclass:
                                                                                                              'slds-size_1-of-1 slds-p-horizontal_none slds-text-align_center',
                                                                                                      },
                                                                                                      key: 61,
                                                                                                      on: { click: G || (n._m3 = B(t.prevStep)) },
                                                                                                  },
                                                                                                  [],
                                                                                              )
                                                                                        : null,
                                                                                    t.hasNext && t._isSeoEnabled
                                                                                        ? s(
                                                                                              'c-navigate-action',
                                                                                              A.b,
                                                                                              {
                                                                                                  className: t.navButton.next.classes,
                                                                                                  props: {
                                                                                                      targetType: 'Current Page',
                                                                                                      useHref: !0,
                                                                                                      targetParams: t.navButton.next.targetParams,
                                                                                                  },
                                                                                                  key: 63,
                                                                                              },
                                                                                              [
                                                                                                  s(
                                                                                                      'c-button',
                                                                                                      d.a,
                                                                                                      {
                                                                                                          props: {
                                                                                                              type: 'button',
                                                                                                              label: t.navButton.next.label,
                                                                                                              variant: 'brand',
                                                                                                              extraclass:
                                                                                                                  'slds-size_1-of-1 slds-p-horizontal_none slds-text-align_center',
                                                                                                          },
                                                                                                          key: 62,
                                                                                                      },
                                                                                                      [],
                                                                                                  ),
                                                                                              ],
                                                                                          )
                                                                                        : null,
                                                                                    t.hasNext
                                                                                        ? t._isSeoEnabled
                                                                                            ? null
                                                                                            : s(
                                                                                                  'c-button',
                                                                                                  d.a,
                                                                                                  {
                                                                                                      className: t.navButton.next.classes,
                                                                                                      props: {
                                                                                                          type: 'button',
                                                                                                          label: t.navButton.next.label,
                                                                                                          variant: 'brand',
                                                                                                          extraclass:
                                                                                                              'slds-size_1-of-1 slds-p-horizontal_none slds-text-align_center',
                                                                                                      },
                                                                                                      key: 64,
                                                                                                      on: { click: Y || (n._m4 = B(t.nextStep)) },
                                                                                                  },
                                                                                                  [],
                                                                                              )
                                                                                        : null,
                                                                                ],
                                                                            ),
                                                                        ],
                                                                    ),
                                                                ],
                                                            ),
                                                        ]),
                                                    ),
                                                ],
                                            ),
                                            t.bSflComplete
                                                ? s(
                                                      'c-omniscript-save-for-later-acknowledge',
                                                      u.a,
                                                      { props: { result: t.bSflResult, layout: t.layout }, key: 70 },
                                                      [],
                                                  )
                                                : null,
                                            R(t.modalEvents, function(e, a) {
                                                return s(
                                                    'c-omniscript-modal',
                                                    P.a,
                                                    {
                                                        attrs: { 'data-omni-key': 'omnimodal' },
                                                        props: {
                                                            type: e.type,
                                                            layout: t.layout,
                                                            triggeredOnStep: e.triggeredOnStep,
                                                            hideFooter: e.hideFooter,
                                                            hideHeader: e.hideHeader,
                                                        },
                                                        key: W(79, e.modalHeader),
                                                    },
                                                    [
                                                        z('div', { attrs: { slot: 'header' }, key: 72 }, [z('h1', { key: 71 }, [F(e.modalHeader)])]),
                                                        z('div', { attrs: { slot: 'content' }, key: 74 }, [
                                                            s(
                                                                'c-omniscript-formatted-rich-text',
                                                                N.a,
                                                                { props: { value: e.modalMessage, disableLinkify: !0 }, key: 73 },
                                                                [],
                                                            ),
                                                        ]),
                                                        z('div', { attrs: { slot: 'footer' }, key: 78 }, [
                                                            z(
                                                                'ul',
                                                                { classMap: { 'slds-button-group-row': !0 }, key: 77 },
                                                                R(e.buttons, function(e, t) {
                                                                    return e.label
                                                                        ? z('li', { classMap: { 'slds-button-group-item': !0 }, key: W(76, e.key) }, [
                                                                              s(
                                                                                  'lightning-button',
                                                                                  E.a,
                                                                                  {
                                                                                      props: { label: e.label, value: a },
                                                                                      key: 75,
                                                                                      on: { click: B(e.handleClick) },
                                                                                  },
                                                                                  [],
                                                                              ),
                                                                          ])
                                                                        : null;
                                                                }),
                                                            ),
                                                        ]),
                                                    ],
                                                );
                                            }),
                                        ])
                                      : [],
                                  t.bSflValid
                                      ? null
                                      : z(
                                            'div',
                                            {
                                                classMap: { 'slds-grid': !0, 'slds-wrap': !0, 'slds-gutters': !0, 'slds-p-horizontal_medium': !0 },
                                                key: 98,
                                            },
                                            [
                                                z(
                                                    'div',
                                                    {
                                                        classMap: { 'slds-col': !0, 'slds-size_12-of-12': !0, 'slds-medium-size_2-of-12': !0 },
                                                        key: 80,
                                                    },
                                                    [],
                                                ),
                                                z(
                                                    'div',
                                                    {
                                                        classMap: { 'slds-col': !0, 'slds-size_12-of-12': !0, 'slds-medium-size_8-of-12': !0 },
                                                        key: 96,
                                                    },
                                                    [
                                                        z('div', { classMap: { 'slds-card': !0, 'omniscript-save-for-later': !0 }, key: 95 }, [
                                                            z('div', { classMap: { 'slds-card__header': !0, 'slds-grid': !0 }, key: 87 }, [
                                                                z(
                                                                    'header',
                                                                    {
                                                                        classMap: {
                                                                            'slds-media': !0,
                                                                            'slds-media_center': !0,
                                                                            'slds-has-flexi-truncate': !0,
                                                                        },
                                                                        key: 86,
                                                                    },
                                                                    [
                                                                        z('div', { classMap: { 'slds-media__figure': !0 }, key: 82 }, [
                                                                            s(
                                                                                'lightning-icon',
                                                                                r.a,
                                                                                {
                                                                                    props: {
                                                                                        iconName: 'utility:warning',
                                                                                        alternativeText: 'Ok',
                                                                                        variant: 'warning',
                                                                                        size: 'large',
                                                                                    },
                                                                                    key: 81,
                                                                                },
                                                                                [],
                                                                            ),
                                                                        ]),
                                                                        z('div', { classMap: { 'slds-media__body': !0 }, key: 85 }, [
                                                                            z('h2', { classMap: { 'slds-card__header-title': !0 }, key: 84 }, [
                                                                                z('span', { classMap: { 'slds-text-heading_large': !0 }, key: 83 }, [
                                                                                    F(t.allCustomLabelsUtil.OmniInvalidLwcComponent),
                                                                                ]),
                                                                            ]),
                                                                        ]),
                                                                    ],
                                                                ),
                                                            ]),
                                                            z('div', { classMap: { 'slds-card__body': !0, 'slds-card__body_inner': !0 }, key: 94 }, [
                                                                z('p', { classMap: { bold: !0 }, key: 88 }, [
                                                                    F(t.allCustomLabelsUtil.OmniInvalidLwcComponentMessage),
                                                                ]),
                                                                z('p', { key: 89 }, [J(' ')]),
                                                                z(
                                                                    'div',
                                                                    {
                                                                        classMap: {
                                                                            'slds-grid': !0,
                                                                            'slds-wrap': !0,
                                                                            'slds-gutters': !0,
                                                                            'slds-p-horizontal_medium': !0,
                                                                        },
                                                                        key: 93,
                                                                    },
                                                                    [
                                                                        z(
                                                                            'div',
                                                                            {
                                                                                classMap: {
                                                                                    'slds-col': !0,
                                                                                    'slds-size_12-of-12': !0,
                                                                                    'slds-medium-size_6-of-12': !0,
                                                                                },
                                                                                key: 91,
                                                                            },
                                                                            [
                                                                                s(
                                                                                    'lightning-button',
                                                                                    E.a,
                                                                                    {
                                                                                        classMap: { 'slds-m-left_x-small': !0 },
                                                                                        styleMap: { paddingLeft: '10px' },
                                                                                        props: {
                                                                                            variant: 'brand',
                                                                                            label: t.allCustomLabelsUtil.OmniContinue,
                                                                                            title: t.allCustomLabelsUtil.OmniContinue,
                                                                                        },
                                                                                        key: 90,
                                                                                        on: { click: Q || (n._m5 = B(t.handleContinueInvalidSfl)) },
                                                                                    },
                                                                                    [],
                                                                                ),
                                                                            ],
                                                                        ),
                                                                        z(
                                                                            'div',
                                                                            {
                                                                                classMap: {
                                                                                    'slds-col': !0,
                                                                                    'slds-size_12-of-12': !0,
                                                                                    'slds-medium-size_6-of-12': !0,
                                                                                },
                                                                                key: 92,
                                                                            },
                                                                            [],
                                                                        ),
                                                                    ],
                                                                ),
                                                            ]),
                                                        ]),
                                                    ],
                                                ),
                                                z(
                                                    'div',
                                                    {
                                                        classMap: { 'slds-col': !0, 'slds-size_12-of-12': !0, 'slds-medium-size_2-of-12': !0 },
                                                        key: 97,
                                                    },
                                                    [],
                                                ),
                                            ],
                                        ),
                              ]),
                    ]),
                ),
            ];
        }
        var z = Object(n.registerTemplate)(F);
        (F.stylesheets = []),
            s && F.stylesheets.push.apply(F.stylesheets, s),
            (F.stylesheetTokens = {
                hostAttribute: 'vlocityomniscript-offplatformLifeInsuranceExample2English-_offplatformLifeInsuranceExample2English-host',
                shadowAttribute: 'vlocityomniscript-offplatformLifeInsuranceExample2English-_offplatformLifeInsuranceExample2English',
            });
        var J = a(70),
            B = a(13),
            W = a(3);
        const R = {
            userTimeZone: -420,
            userProfile: 'System Administrator',
            userName: 'oui_dailylwc@vlocity.com',
            userId: '0054T000000YBiOQAW',
            userCurrencyCode: 'USD',
            timeStamp: '2020-08-14T18:05:47.107Z',
            sOmniScriptId: 'a224T000000UcNRQA0',
            sobjPL: {},
            RPBundle: '',
            rMap: { income: '', insured: '' },
            response: null,
            propSetMap: {
                isSeoEnabled: !1,
                stepChartPlacement: 'right',
                stylesheet: { lightning: '', newport: '' },
                disableUnloadWarn: !0,
                errorMessage: { custom: [] },
                consoleTabIcon: 'custom:custom18',
                consoleTabTitle: null,
                rtpSeed: !1,
                showInputWidth: !1,
                currencyCode: '',
                autoFocus: !1,
                pubsub: !1,
                message: {},
                ssm: !1,
                wpm: !1,
                consoleTabLabel: 'New',
                cancelRedirectTemplateUrl: 'vlcCancelled.html',
                cancelRedirectPageName: 'OmniScriptCancelled',
                cancelSource: '%ContextId%',
                allowCancel: !0,
                cancelType: 'SObject',
                visualforcePagesAvailableInPreview: {},
                hideStepChart: !1,
                timeTracking: !1,
                knowledgeArticleTypeQueryFieldsMap: {},
                lkObjName: null,
                bLK: !1,
                enableKnowledge: !1,
                trackingCustomData: {},
                seedDataJSON: { ContactId: '0034T00000D7xJXQAZ' },
                elementTypeToHTMLTemplateMapping: {},
                autoSaveOnStepNext: !1,
                saveURLPatterns: {},
                saveObjectId: '%ContextId%',
                saveContentEncoded: !1,
                saveForLaterRedirectTemplateUrl: 'vlcSaveForLaterAcknowledge.html',
                saveForLaterRedirectPageName: 'sflRedirect',
                saveExpireInDays: null,
                saveNameTemplate: null,
                allowSaveForLater: !0,
                persistentComponent: [
                    {
                        modalConfigurationSetting: {
                            modalSize: 'lg',
                            modalController: 'ModalProductCtrl',
                            modalHTMLTemplateId: 'vlcProductConfig.html',
                        },
                        itemsKey: 'cartItems',
                        id: 'vlcCart',
                        responseJSONNode: '',
                        responseJSONPath: '',
                        sendJSONNode: '',
                        sendJSONPath: '',
                        postTransformBundle: '',
                        preTransformBundle: '',
                        remoteOptions: { postTransformBundle: '', preTransformBundle: '' },
                        remoteTimeout: 3e4,
                        remoteMethod: '',
                        remoteClass: '',
                        label: '',
                        render: !1,
                    },
                    {
                        modalConfigurationSetting: { modalSize: 'lg', modalController: '', modalHTMLTemplateId: '' },
                        itemsKey: 'knowledgeItems',
                        id: 'vlcKnowledge',
                        postTransformBundle: '',
                        preTransformBundle: '',
                        remoteOptions: { postTransformBundle: '', preTransformBundle: '' },
                        remoteTimeout: 3e4,
                        remoteMethod: '',
                        remoteClass: '',
                        label: '',
                        dispOutsideOmni: !1,
                        render: !1,
                    },
                ],
            },
            prefillJSON: '{}',
            lwcId: '47b9df67-8a1d-e9ab-8ea3-cd0d8236cf48',
            labelMap: {
                PostalCode: 'person:Block1:Address-Block:PostalCode',
                State: 'person:Block1:Address-Block:State',
                City: 'person:Block1:Address-Block:City',
                Street: 'person:Block1:Address-Block:Street',
                'Address-Block': 'person:Block1:Address-Block',
                incAmount: 'finances:income:incAmount',
                incDescription: 'finances:income:incDescription',
                incType: 'finances:income:incType',
                Gender: 'parties:insured:Gender',
                Age: 'parties:insured:Age',
                Birthdate: 'parties:insured:Birthdate',
                insLast: 'parties:insured:insLast',
                insMi: 'parties:insured:insMi',
                insFirst: 'parties:insured:insFirst',
                insFullName: 'parties:insured:insFullName',
                incTaxReturns: 'finances:incTaxReturns',
                totalIncome: 'finances:totalIncome',
                income: 'finances:income',
                medExplanation: 'health:medExplanation',
                medHistory: 'health:medHistory',
                BMI: 'health:BMI',
                Height: 'health:Height',
                Weight: 'health:Weight',
                insured: 'parties:insured',
                familyTier: 'parties:familyTier',
                goals: 'objectives:goals',
                Block1: 'person:Block1',
                FirstName: 'person:FirstName',
                Email: 'person:Email',
                LastName: 'person:LastName',
                MiddleName: 'person:MiddleName',
                prefix: 'person:prefix',
                Done: 'Done',
                finances: 'finances',
                objectives: 'objectives',
                parties: 'parties',
                person: 'person',
                health: 'health',
                GetContactInfo: 'GetContactInfo',
                CANCEL: 'CANCEL',
                Address: 'person:Block1:Address-Block:Address',
            },
            labelKeyMap: {},
            errorMsg: '',
            error: 'OK',
            dMap: {},
            depSOPL: {},
            depCusPL: {},
            cusPL: {},
            children: [
                {
                    type: 'Cancel Action',
                    propSetMap: {
                        targetName: 'home',
                        showCancelPrompt: !0,
                        disOnTplt: !1,
                        targetLWCLayout: 'lightning',
                        replace: !1,
                        iconPosition: 'left',
                        iconVariant: '',
                        iconName: '',
                        variant: 'brand',
                        targetId: '%ContextId%',
                        targetFilter: 'Recent',
                        loginAction: 'login',
                        recordAction: 'view',
                        objectAction: 'home',
                        label: 'Cancel',
                        message: {},
                        pubsub: !1,
                        ssm: !1,
                        wpm: !1,
                        HTMLTemplateId: '',
                        show: null,
                        validationRequired: 'none',
                        targetType: 'Named Page',
                        controlWidth: 12,
                        aggElements: {},
                    },
                    offSet: 0,
                    name: 'CANCEL',
                    level: 0,
                    indexInParent: 0,
                    bHasAttachment: !1,
                    bEmbed: !1,
                    bCancel: !0,
                    JSONPath: 'CANCEL',
                    lwcId: 'lwc0',
                },
                {
                    type: 'DataRaptor Extract Action',
                    propSetMap: {
                        disOnTplt: !1,
                        ignoreCache: !1,
                        enableActionMessage: !1,
                        enableDefaultAbort: !1,
                        errorMessage: { default: null, custom: [] },
                        label: 'GetContactInfo',
                        pubsub: !1,
                        message: {},
                        ssm: !1,
                        wpm: !1,
                        HTMLTemplateId: '',
                        show: null,
                        showPersistentComponent: [!1, !1],
                        redirectPreviousWidth: 3,
                        redirectPreviousLabel: 'Previous',
                        redirectNextWidth: 3,
                        redirectNextLabel: 'Next',
                        redirectTemplateUrl: 'vlcAcknowledge.html',
                        redirectPageName: '',
                        validationRequired: 'Step',
                        failureAbortMessage: 'Are you sure?',
                        failureGoBackLabel: 'Go Back',
                        failureAbortLabel: 'Abort',
                        failureNextLabel: 'Continue',
                        postMessage: 'Done',
                        inProgressMessage: 'In Progress',
                        responseJSONNode: '',
                        responseJSONPath: '',
                        remoteTimeout: 3e4,
                        'dataRaptor Input Parameters': [{ element: 'ContactId', inputParam: 'ContactId' }],
                        bundle: 'omnioutContactExtract',
                        controlWidth: 12,
                        aggElements: {},
                    },
                    offSet: 0,
                    name: 'GetContactInfo',
                    level: 0,
                    indexInParent: 1,
                    bHasAttachment: !1,
                    bEmbed: !1,
                    bDataRaptorExtractAction: !0,
                    JSONPath: 'GetContactInfo',
                    lwcId: 'lwc1',
                },
                {
                    type: 'Step',
                    propSetMap: {
                        disOnTplt: !1,
                        message: {},
                        pubsub: !1,
                        ssm: !1,
                        wpm: !1,
                        errorMessage: { default: null, custom: [] },
                        allowSaveForLater: !0,
                        label: 'Your Health',
                        chartLabel: 'Health',
                        instructionKey: '',
                        HTMLTemplateId: '',
                        conditionType: 'Hide if False',
                        show: null,
                        knowledgeOptions: {
                            typeFilter: '',
                            remoteTimeout: 3e4,
                            dataCategoryCriteria: '',
                            keyword: '',
                            publishStatus: 'Online',
                            language: 'English',
                        },
                        remoteOptions: {},
                        remoteTimeout: 3e4,
                        remoteMethod: '',
                        remoteClass: '',
                        showPersistentComponent: [!0, !1],
                        instruction: '',
                        completeMessage: 'Are you sure you want to complete the script?',
                        completeLabel: 'Complete',
                        saveMessage: 'Are you sure you want to save it for later?',
                        saveLabel: 'Save for later',
                        cancelMessage: 'Are you sure?',
                        cancelLabel: 'Cancel',
                        nextWidth: 3,
                        nextLabel: 'Next',
                        previousWidth: 3,
                        previousLabel: 'Previous',
                        validationRequired: !0,
                        uiElements: { health: '', Weight: '', Height: '', medHistory: '', medExplanation: '' },
                        aggElements: { BMI: '' },
                    },
                    offSet: 0,
                    name: 'health',
                    level: 0,
                    indexInParent: 2,
                    bHasAttachment: !1,
                    bEmbed: !1,
                    response: null,
                    inheritShowProp: null,
                    children: [
                        {
                            response: null,
                            level: 1,
                            indexInParent: 0,
                            eleArray: [
                                {
                                    type: 'Number',
                                    rootIndex: 2,
                                    response: null,
                                    propSetMap: {
                                        placeholder: '',
                                        label: 'Weight (lbs)',
                                        disOnTplt: !1,
                                        hide: !1,
                                        HTMLTemplateId: '',
                                        debounceValue: 0,
                                        accessibleInFutureSteps: !1,
                                        conditionType: 'Hide if False',
                                        show: null,
                                        mask: null,
                                        ptrnErrText: '',
                                        pattern: '',
                                        helpText: '',
                                        help: !1,
                                        defaultValue: null,
                                        readOnly: !1,
                                        repeatLimit: null,
                                        repeatClone: !1,
                                        repeat: !1,
                                        required: !1,
                                        inputWidth: 12,
                                        showInputWidth: !1,
                                        controlWidth: 3,
                                    },
                                    name: 'Weight',
                                    level: 1,
                                    JSONPath: 'health:Weight',
                                    indexInParent: 0,
                                    index: 0,
                                    children: [],
                                    bHasAttachment: !1,
                                    bNumber: !0,
                                    lwcId: 'lwc20-0',
                                },
                            ],
                            bHasAttachment: !1,
                        },
                        {
                            response: null,
                            level: 1,
                            indexInParent: 1,
                            eleArray: [
                                {
                                    type: 'Number',
                                    rootIndex: 2,
                                    response: null,
                                    propSetMap: {
                                        disOnTplt: !1,
                                        hide: !1,
                                        HTMLTemplateId: '',
                                        debounceValue: 0,
                                        accessibleInFutureSteps: !1,
                                        conditionType: 'Hide if False',
                                        show: null,
                                        mask: null,
                                        placeholder: '',
                                        ptrnErrText: '',
                                        pattern: '',
                                        helpText: '',
                                        help: !1,
                                        defaultValue: null,
                                        readOnly: !1,
                                        repeatLimit: null,
                                        repeatClone: !1,
                                        repeat: !1,
                                        required: !1,
                                        inputWidth: 12,
                                        showInputWidth: !1,
                                        label: 'Height (in)',
                                        controlWidth: 3,
                                    },
                                    name: 'Height',
                                    level: 1,
                                    JSONPath: 'health:Height',
                                    indexInParent: 1,
                                    index: 0,
                                    children: [],
                                    bHasAttachment: !1,
                                    bNumber: !0,
                                    lwcId: 'lwc21-0',
                                },
                            ],
                            bHasAttachment: !1,
                        },
                        {
                            response: null,
                            level: 1,
                            indexInParent: 2,
                            eleArray: [
                                {
                                    type: 'Formula',
                                    rootIndex: 2,
                                    response: null,
                                    propSetMap: {
                                        label: 'BMI',
                                        disOnTplt: !1,
                                        HTMLTemplateId: '',
                                        dateFormat: 'MM-dd-yyyy',
                                        hideGroupSep: !1,
                                        dataType: 'Number',
                                        mask: '99.9',
                                        show: null,
                                        hide: !1,
                                        expression: '(%Weight%/(%Height%^2))*703',
                                        inputWidth: 12,
                                        showInputWidth: !1,
                                        controlWidth: 5,
                                    },
                                    name: 'BMI',
                                    level: 1,
                                    JSONPath: 'health:BMI',
                                    indexInParent: 2,
                                    index: 0,
                                    children: [],
                                    bHasAttachment: !1,
                                    bFormula: !0,
                                    lwcId: 'lwc22-0',
                                },
                            ],
                            bHasAttachment: !1,
                        },
                        {
                            response: null,
                            level: 1,
                            indexInParent: 3,
                            eleArray: [
                                {
                                    type: 'Radio Group',
                                    rootIndex: 2,
                                    response: null,
                                    propSetMap: {
                                        label: 'Have you been diagnosed with any of the following conditions:',
                                        disOnTplt: !1,
                                        hide: !1,
                                        HTMLTemplateId: '',
                                        accessibleInFutureSteps: !1,
                                        conditionType: 'Hide if False',
                                        show: null,
                                        controllingField: { source: '', type: '', element: '' },
                                        optionSource: { source: '', type: '' },
                                        options: [{ setAll: !1, value: 'Yes', name: 'Yes' }, { setAll: !1, value: 'No', name: 'No' }],
                                        radioLabels: [
                                            { value: 'Cancer', name: 'Cancer' },
                                            { value: 'Heart Disease', name: 'Heart Disease' },
                                            { value: 'Stroke', name: 'Stroke' },
                                            { value: 'Osteoporosis', name: 'Osteoporosis' },
                                            { value: 'Substance Abuse', name: 'Substance Abuse' },
                                            { value: 'Gastrointestinal Disorder', name: 'Gastrointestinal Disorder' },
                                        ],
                                        radioLabelsWidth: 6,
                                        helpText: '',
                                        help: !1,
                                        readOnly: !1,
                                        required: !1,
                                        controlWidth: 12,
                                    },
                                    name: 'medHistory',
                                    level: 1,
                                    JSONPath: 'health:medHistory',
                                    indexInParent: 3,
                                    index: 0,
                                    children: [],
                                    bHasAttachment: !1,
                                    bRadioGroup: !0,
                                    lwcId: 'lwc23-0',
                                },
                            ],
                            bHasAttachment: !1,
                        },
                        {
                            response: null,
                            level: 1,
                            indexInParent: 4,
                            eleArray: [
                                {
                                    type: 'Text Area',
                                    rootIndex: 2,
                                    response: null,
                                    propSetMap: {
                                        placeholder: '',
                                        label: 'Please explain your past diagnosis:',
                                        disOnTplt: !1,
                                        hide: !1,
                                        HTMLTemplateId: '',
                                        debounceValue: 0,
                                        accessibleInFutureSteps: !1,
                                        conditionType: 'Hide if False',
                                        show: {
                                            group: {
                                                rules: [
                                                    { field: 'medHistory:Cancer', condition: '=', data: 'Yes' },
                                                    { data: 'Yes', condition: '=', field: 'medHistory:Heart Disease' },
                                                ],
                                                operator: 'OR',
                                            },
                                        },
                                        maxLength: 255,
                                        minLength: 0,
                                        ptrnErrText: '',
                                        pattern: '',
                                        helpText: '',
                                        help: !1,
                                        defaultValue: null,
                                        readOnly: !1,
                                        repeatLimit: null,
                                        repeatClone: !1,
                                        repeat: !1,
                                        required: !1,
                                        inputWidth: 12,
                                        showInputWidth: !1,
                                        controlWidth: 10,
                                    },
                                    name: 'medExplanation',
                                    level: 1,
                                    JSONPath: 'health:medExplanation',
                                    indexInParent: 4,
                                    index: 0,
                                    children: [],
                                    bHasAttachment: !1,
                                    bTextarea: !0,
                                    lwcId: 'lwc24-0',
                                },
                            ],
                            bHasAttachment: !1,
                        },
                    ],
                    bAccordionOpen: !1,
                    bAccordionActive: !1,
                    bStep: !0,
                    isStep: !0,
                    JSONPath: 'health',
                    lwcId: 'lwc2',
                },
                {
                    type: 'Step',
                    propSetMap: {
                        message: {},
                        pubsub: !1,
                        ssm: !1,
                        wpm: !1,
                        errorMessage: { default: null, custom: [] },
                        allowSaveForLater: !0,
                        label: 'Your Information',
                        chartLabel: 'Information',
                        instructionKey: '',
                        HTMLTemplateId: '',
                        conditionType: 'Hide if False',
                        show: null,
                        knowledgeOptions: {
                            typeFilter: '',
                            remoteTimeout: 3e4,
                            dataCategoryCriteria: '',
                            keyword: '',
                            publishStatus: 'Online',
                            language: 'English',
                        },
                        remoteOptions: {},
                        remoteTimeout: 3e4,
                        remoteMethod: '',
                        remoteClass: '',
                        showPersistentComponent: [!0, !1],
                        instruction: '',
                        completeMessage: 'Are you sure you want to complete the script?',
                        completeLabel: 'Complete',
                        saveMessage: 'Are you sure you want to save it for later?',
                        saveLabel: 'Save for later',
                        cancelMessage: 'Are you sure?',
                        cancelLabel: 'Cancel',
                        nextWidth: 3,
                        nextLabel: 'Next',
                        previousWidth: 3,
                        previousLabel: 'Previous',
                        validationRequired: !0,
                        uiElements: {
                            person: '',
                            prefix: '',
                            MiddleName: '',
                            LastName: '',
                            Email: '',
                            FirstName: '',
                            Address: '',
                            Street: '',
                            City: '',
                            State: '',
                            PostalCode: '',
                            'Address-Block': '',
                            Block1: '',
                        },
                        aggElements: {},
                    },
                    offSet: 0,
                    name: 'person',
                    level: 0,
                    indexInParent: 3,
                    bHasAttachment: !1,
                    bEmbed: !1,
                    response: null,
                    inheritShowProp: null,
                    children: [
                        {
                            response: null,
                            level: 1,
                            indexInParent: 0,
                            eleArray: [
                                {
                                    type: 'Select',
                                    rootIndex: 3,
                                    response: null,
                                    propSetMap: {
                                        disOnTplt: !1,
                                        hide: !1,
                                        HTMLTemplateId: '',
                                        accessibleInFutureSteps: !1,
                                        conditionType: 'Hide if False',
                                        show: null,
                                        controllingField: { source: '', element: '' },
                                        optionSource: { source: 'Contact.Salutation', type: 'SObject' },
                                        options: [],
                                        helpText: '',
                                        help: !1,
                                        defaultValue: null,
                                        readOnly: !1,
                                        repeatLimit: null,
                                        repeatClone: !1,
                                        repeat: !1,
                                        required: !1,
                                        inputWidth: 12,
                                        showInputWidth: !1,
                                        label: 'Prefix',
                                        controlWidth: 2,
                                    },
                                    name: 'prefix',
                                    level: 1,
                                    JSONPath: 'person:prefix',
                                    indexInParent: 0,
                                    index: 0,
                                    children: [],
                                    bHasAttachment: !1,
                                    bSelect: !0,
                                    lwcId: 'lwc30-0',
                                },
                            ],
                            bHasAttachment: !1,
                        },
                        {
                            response: null,
                            level: 1,
                            indexInParent: 1,
                            eleArray: [
                                {
                                    type: 'Text',
                                    rootIndex: 3,
                                    response: null,
                                    propSetMap: {
                                        placeholder: '',
                                        label: 'Middle',
                                        disOnTplt: !1,
                                        hide: !1,
                                        HTMLTemplateId: '',
                                        debounceValue: 0,
                                        accessibleInFutureSteps: !1,
                                        conditionType: 'Hide if False',
                                        show: null,
                                        maxLength: 255,
                                        minLength: 0,
                                        ptrnErrText: '',
                                        pattern: '',
                                        mask: '',
                                        helpText: '',
                                        help: !1,
                                        defaultValue: null,
                                        readOnly: !1,
                                        repeatLimit: null,
                                        repeatClone: !1,
                                        repeat: !1,
                                        required: !1,
                                        inputWidth: 12,
                                        showInputWidth: !1,
                                        controlWidth: 2,
                                    },
                                    name: 'MiddleName',
                                    level: 1,
                                    JSONPath: 'person:MiddleName',
                                    indexInParent: 1,
                                    index: 0,
                                    children: [],
                                    bHasAttachment: !1,
                                    bText: !0,
                                    lwcId: 'lwc31-0',
                                },
                            ],
                            bHasAttachment: !1,
                        },
                        {
                            response: null,
                            level: 1,
                            indexInParent: 2,
                            eleArray: [
                                {
                                    type: 'Text',
                                    rootIndex: 3,
                                    response: null,
                                    propSetMap: {
                                        placeholder: '',
                                        label: 'Last Name',
                                        disOnTplt: !1,
                                        hide: !1,
                                        HTMLTemplateId: '',
                                        debounceValue: 0,
                                        accessibleInFutureSteps: !1,
                                        conditionType: 'Hide if False',
                                        show: null,
                                        maxLength: 255,
                                        minLength: 0,
                                        ptrnErrText: '',
                                        pattern: '',
                                        mask: '',
                                        helpText: '',
                                        help: !1,
                                        defaultValue: null,
                                        readOnly: !1,
                                        repeatLimit: null,
                                        repeatClone: !1,
                                        repeat: !1,
                                        required: !1,
                                        inputWidth: 12,
                                        showInputWidth: !1,
                                        controlWidth: 4,
                                    },
                                    name: 'LastName',
                                    level: 1,
                                    JSONPath: 'person:LastName',
                                    indexInParent: 2,
                                    index: 0,
                                    children: [],
                                    bHasAttachment: !1,
                                    bText: !0,
                                    lwcId: 'lwc32-0',
                                },
                            ],
                            bHasAttachment: !1,
                        },
                        {
                            response: null,
                            level: 1,
                            indexInParent: 3,
                            eleArray: [
                                {
                                    type: 'Email',
                                    rootIndex: 3,
                                    response: null,
                                    propSetMap: {
                                        placeholder: 'Enter Your Email',
                                        label: 'Email',
                                        disOnTplt: !1,
                                        hide: !1,
                                        HTMLTemplateId: '',
                                        debounceValue: 0,
                                        accessibleInFutureSteps: !1,
                                        conditionType: 'Hide if False',
                                        show: null,
                                        ptrnErrText: '',
                                        pattern: '',
                                        helpText: '',
                                        help: !1,
                                        defaultValue: null,
                                        readOnly: !1,
                                        repeatLimit: null,
                                        repeatClone: !1,
                                        repeat: !1,
                                        required: !1,
                                        inputWidth: 12,
                                        showInputWidth: !1,
                                        controlWidth: 10,
                                    },
                                    name: 'Email',
                                    level: 1,
                                    JSONPath: 'person:Email',
                                    indexInParent: 3,
                                    index: 0,
                                    children: [],
                                    bHasAttachment: !1,
                                    bEmail: !0,
                                    lwcId: 'lwc33-0',
                                },
                            ],
                            bHasAttachment: !1,
                        },
                        {
                            response: null,
                            level: 1,
                            indexInParent: 4,
                            eleArray: [
                                {
                                    type: 'Text',
                                    rootIndex: 3,
                                    response: null,
                                    propSetMap: {
                                        placeholder: '',
                                        label: 'First Name',
                                        disOnTplt: !1,
                                        hide: !1,
                                        HTMLTemplateId: '',
                                        debounceValue: 0,
                                        accessibleInFutureSteps: !1,
                                        conditionType: 'Hide if False',
                                        show: null,
                                        maxLength: 255,
                                        minLength: 0,
                                        ptrnErrText: '',
                                        pattern: '',
                                        mask: '',
                                        helpText: '',
                                        help: !1,
                                        defaultValue: null,
                                        readOnly: !1,
                                        repeatLimit: null,
                                        repeatClone: !1,
                                        repeat: !1,
                                        required: !1,
                                        inputWidth: 12,
                                        showInputWidth: !1,
                                        controlWidth: 4,
                                    },
                                    name: 'FirstName',
                                    level: 1,
                                    JSONPath: 'person:FirstName',
                                    indexInParent: 4,
                                    index: 0,
                                    children: [],
                                    bHasAttachment: !1,
                                    bText: !0,
                                    lwcId: 'lwc34-0',
                                },
                            ],
                            bHasAttachment: !1,
                        },
                        {
                            response: null,
                            level: 1,
                            indexInParent: 5,
                            eleArray: [
                                {
                                    type: 'Block',
                                    rootIndex: 3,
                                    response: null,
                                    propSetMap: {
                                        bus: !0,
                                        hide: !1,
                                        HTMLTemplateId: '',
                                        accessibleInFutureSteps: !1,
                                        conditionType: 'Hide if False',
                                        show: null,
                                        repeatLimit: null,
                                        repeatClone: !1,
                                        repeat: !1,
                                        collapse: !1,
                                        label: 'Block1',
                                        controlWidth: 12,
                                    },
                                    name: 'Block1',
                                    level: 1,
                                    JSONPath: 'person:Block1',
                                    indexInParent: 5,
                                    index: 0,
                                    children: [
                                        {
                                            response: null,
                                            level: 2,
                                            indexInParent: 0,
                                            eleArray: [
                                                {
                                                    type: 'Type Ahead Block',
                                                    rootIndex: 3,
                                                    response: null,
                                                    propSetMap: {
                                                        label: 'Address',
                                                        HTMLTemplateId: '',
                                                        dataJsonPath: '',
                                                        useDataJson: !1,
                                                        googleAddressCountry: 'us',
                                                        hideMap: !1,
                                                        googleMapsAPIKey: 'AIzaSyACXXKxlzJEJa5nutk3m28tr9J3o7-bK3w',
                                                        disableDataFilter: !1,
                                                        enableLookup: !1,
                                                        enableGoogleMapsAutocomplete: !0,
                                                        hideEditButton: !1,
                                                        newItemLabel: 'New',
                                                        editMode: !1,
                                                        callFrequency: 300,
                                                        dataProcessorFunction: '',
                                                        typeAheadKey: '',
                                                        debounceValue: 0,
                                                        accessibleInFutureSteps: !1,
                                                        conditionType: 'Hide if False',
                                                        show: null,
                                                        maxLength: 255,
                                                        minLength: 0,
                                                        helpText: '',
                                                        help: !1,
                                                        readOnly: !1,
                                                        required: !1,
                                                        googleTransformation: {
                                                            postal_code: 'PostalCode',
                                                            country: '',
                                                            administrative_area_level_2: '',
                                                            administrative_area_level_1: 'State',
                                                            locality: 'City',
                                                            street: 'Street',
                                                        },
                                                        inputWidth: 12,
                                                        showInputWidth: !1,
                                                        controlWidth: 12,
                                                    },
                                                    name: 'Address-Block',
                                                    level: 2,
                                                    JSONPath: 'person:Block1|1:Address-Block',
                                                    indexInParent: 0,
                                                    index: 0,
                                                    children: [
                                                        {
                                                            response: null,
                                                            level: 3,
                                                            indexInParent: 0,
                                                            eleArray: [
                                                                {
                                                                    type: 'Places Typeahead',
                                                                    rootIndex: 0,
                                                                    response: null,
                                                                    propSetMap: {
                                                                        label: 'Address',
                                                                        HTMLTemplateId: '',
                                                                        dataJsonPath: '',
                                                                        useDataJson: !1,
                                                                        googleAddressCountry: 'us',
                                                                        hideMap: !1,
                                                                        googleMapsAPIKey: 'AIzaSyACXXKxlzJEJa5nutk3m28tr9J3o7-bK3w',
                                                                        disableDataFilter: !1,
                                                                        enableLookup: !1,
                                                                        enableGoogleMapsAutocomplete: !0,
                                                                        hideEditButton: !1,
                                                                        newItemLabel: 'New',
                                                                        editMode: !1,
                                                                        callFrequency: 300,
                                                                        dataProcessorFunction: '',
                                                                        typeAheadKey: '',
                                                                        debounceValue: 0,
                                                                        accessibleInFutureSteps: !1,
                                                                        conditionType: 'Hide if False',
                                                                        show: null,
                                                                        maxLength: 255,
                                                                        minLength: 0,
                                                                        helpText: '',
                                                                        help: !1,
                                                                        readOnly: !1,
                                                                        required: !1,
                                                                        googleTransformation: {
                                                                            postal_code: 'PostalCode',
                                                                            country: '',
                                                                            administrative_area_level_2: '',
                                                                            administrative_area_level_1: 'State',
                                                                            locality: 'City',
                                                                            street: 'Street',
                                                                        },
                                                                        inputWidth: 12,
                                                                        showInputWidth: !1,
                                                                        controlWidth: 12,
                                                                    },
                                                                    name: 'Address',
                                                                    level: 3,
                                                                    JSONPath: 'person:Block1|1:Address-Block|1:Address',
                                                                    indexInParent: 0,
                                                                    index: 0,
                                                                    children: [],
                                                                    bHasAttachment: !1,
                                                                    bPlacesTypeahead: !0,
                                                                    lwcId: 'lwc350000-0',
                                                                },
                                                            ],
                                                            bHasAttachment: !1,
                                                        },
                                                        {
                                                            response: null,
                                                            level: 3,
                                                            indexInParent: 1,
                                                            eleArray: [
                                                                {
                                                                    type: 'Text',
                                                                    rootIndex: 3,
                                                                    response: null,
                                                                    propSetMap: {
                                                                        _di: 1,
                                                                        placeholder: '',
                                                                        label: 'Street',
                                                                        disOnTplt: !1,
                                                                        hide: !1,
                                                                        HTMLTemplateId: '',
                                                                        debounceValue: 0,
                                                                        accessibleInFutureSteps: !1,
                                                                        conditionType: 'Hide if False',
                                                                        show: null,
                                                                        maxLength: 255,
                                                                        minLength: 0,
                                                                        ptrnErrText: '',
                                                                        pattern: '',
                                                                        mask: '',
                                                                        helpText: '',
                                                                        help: !1,
                                                                        defaultValue: null,
                                                                        readOnly: !1,
                                                                        repeatLimit: null,
                                                                        repeatClone: !1,
                                                                        repeat: !1,
                                                                        required: !1,
                                                                        inputWidth: 12,
                                                                        showInputWidth: !1,
                                                                        controlWidth: 12,
                                                                    },
                                                                    name: 'Street',
                                                                    level: 3,
                                                                    JSONPath: 'person:Block1|1:Address-Block|1:Street',
                                                                    indexInParent: 1,
                                                                    index: 0,
                                                                    children: [],
                                                                    bHasAttachment: !1,
                                                                    bText: !0,
                                                                    lwcId: 'lwc350001-0',
                                                                },
                                                            ],
                                                            bHasAttachment: !1,
                                                        },
                                                        {
                                                            response: null,
                                                            level: 3,
                                                            indexInParent: 2,
                                                            eleArray: [
                                                                {
                                                                    type: 'Text',
                                                                    rootIndex: 3,
                                                                    response: null,
                                                                    propSetMap: {
                                                                        _di: 2,
                                                                        placeholder: '',
                                                                        label: 'City',
                                                                        disOnTplt: !1,
                                                                        hide: !1,
                                                                        HTMLTemplateId: '',
                                                                        debounceValue: 0,
                                                                        accessibleInFutureSteps: !1,
                                                                        conditionType: 'Hide if False',
                                                                        show: null,
                                                                        maxLength: 255,
                                                                        minLength: 0,
                                                                        ptrnErrText: '',
                                                                        pattern: '',
                                                                        mask: '',
                                                                        helpText: '',
                                                                        help: !1,
                                                                        defaultValue: null,
                                                                        readOnly: !1,
                                                                        repeatLimit: null,
                                                                        repeatClone: !1,
                                                                        repeat: !1,
                                                                        required: !1,
                                                                        inputWidth: 12,
                                                                        showInputWidth: !1,
                                                                        controlWidth: 6,
                                                                    },
                                                                    name: 'City',
                                                                    level: 3,
                                                                    JSONPath: 'person:Block1|1:Address-Block|1:City',
                                                                    indexInParent: 2,
                                                                    index: 0,
                                                                    children: [],
                                                                    bHasAttachment: !1,
                                                                    bText: !0,
                                                                    lwcId: 'lwc350002-0',
                                                                },
                                                            ],
                                                            bHasAttachment: !1,
                                                        },
                                                        {
                                                            response: null,
                                                            level: 3,
                                                            indexInParent: 3,
                                                            eleArray: [
                                                                {
                                                                    type: 'Text',
                                                                    rootIndex: 3,
                                                                    response: null,
                                                                    propSetMap: {
                                                                        _di: 3,
                                                                        placeholder: '',
                                                                        label: 'State',
                                                                        disOnTplt: !1,
                                                                        hide: !1,
                                                                        HTMLTemplateId: '',
                                                                        debounceValue: 0,
                                                                        accessibleInFutureSteps: !1,
                                                                        conditionType: 'Hide if False',
                                                                        show: null,
                                                                        maxLength: 255,
                                                                        minLength: 0,
                                                                        ptrnErrText: '',
                                                                        pattern: '',
                                                                        mask: '',
                                                                        helpText: '',
                                                                        help: !1,
                                                                        defaultValue: null,
                                                                        readOnly: !1,
                                                                        repeatLimit: null,
                                                                        repeatClone: !1,
                                                                        repeat: !1,
                                                                        required: !1,
                                                                        inputWidth: 12,
                                                                        showInputWidth: !1,
                                                                        controlWidth: 2,
                                                                    },
                                                                    name: 'State',
                                                                    level: 3,
                                                                    JSONPath: 'person:Block1|1:Address-Block|1:State',
                                                                    indexInParent: 3,
                                                                    index: 0,
                                                                    children: [],
                                                                    bHasAttachment: !1,
                                                                    bText: !0,
                                                                    lwcId: 'lwc350003-0',
                                                                },
                                                            ],
                                                            bHasAttachment: !1,
                                                        },
                                                        {
                                                            response: null,
                                                            level: 3,
                                                            indexInParent: 4,
                                                            eleArray: [
                                                                {
                                                                    type: 'Text',
                                                                    rootIndex: 3,
                                                                    response: null,
                                                                    propSetMap: {
                                                                        _di: 4,
                                                                        placeholder: '',
                                                                        label: 'Postal Code',
                                                                        disOnTplt: !1,
                                                                        hide: !1,
                                                                        HTMLTemplateId: '',
                                                                        debounceValue: 0,
                                                                        accessibleInFutureSteps: !1,
                                                                        conditionType: 'Hide if False',
                                                                        show: null,
                                                                        maxLength: 255,
                                                                        minLength: 0,
                                                                        ptrnErrText: '',
                                                                        pattern: '',
                                                                        mask: '',
                                                                        helpText: '',
                                                                        help: !1,
                                                                        defaultValue: null,
                                                                        readOnly: !1,
                                                                        repeatLimit: null,
                                                                        repeatClone: !1,
                                                                        repeat: !1,
                                                                        required: !1,
                                                                        inputWidth: 12,
                                                                        showInputWidth: !1,
                                                                        controlWidth: 2,
                                                                    },
                                                                    name: 'PostalCode',
                                                                    level: 3,
                                                                    JSONPath: 'person:Block1|1:Address-Block|1:PostalCode',
                                                                    indexInParent: 4,
                                                                    index: 0,
                                                                    children: [],
                                                                    bHasAttachment: !1,
                                                                    bText: !0,
                                                                    lwcId: 'lwc350004-0',
                                                                },
                                                            ],
                                                            bHasAttachment: !1,
                                                        },
                                                    ],
                                                    bHasAttachment: !1,
                                                    bTypeaheadBlock: !0,
                                                    lwcId: 'lwc3500-0',
                                                },
                                            ],
                                            bHasAttachment: !1,
                                        },
                                    ],
                                    bHasAttachment: !1,
                                    bBlock: !0,
                                    lwcId: 'lwc35-0',
                                },
                            ],
                            bHasAttachment: !1,
                        },
                    ],
                    bAccordionOpen: !1,
                    bAccordionActive: !1,
                    bStep: !0,
                    isStep: !0,
                    JSONPath: 'person',
                    lwcId: 'lwc3',
                },
                {
                    type: 'Step',
                    propSetMap: {
                        message: {},
                        pubsub: !1,
                        ssm: !1,
                        wpm: !1,
                        errorMessage: { default: null, custom: [] },
                        allowSaveForLater: !0,
                        label: 'Your Family',
                        chartLabel: 'Family',
                        instructionKey: '',
                        HTMLTemplateId: '',
                        conditionType: 'Hide if False',
                        show: null,
                        knowledgeOptions: {
                            typeFilter: '',
                            remoteTimeout: 3e4,
                            dataCategoryCriteria: '',
                            keyword: '',
                            publishStatus: 'Online',
                            language: 'English',
                        },
                        remoteOptions: {},
                        remoteTimeout: 3e4,
                        remoteMethod: '',
                        remoteClass: '',
                        showPersistentComponent: [!0, !1],
                        instruction: '',
                        completeMessage: 'Are you sure you want to complete the script?',
                        completeLabel: 'Complete',
                        saveMessage: 'Are you sure you want to save it for later?',
                        saveLabel: 'Save for later',
                        cancelMessage: 'Are you sure?',
                        cancelLabel: 'Cancel',
                        nextWidth: 3,
                        nextLabel: 'Next',
                        previousWidth: 3,
                        previousLabel: 'Previous',
                        validationRequired: !0,
                        uiElements: { parties: '', familyTier: '', insFirst: '', insMi: '', insLast: '', Birthdate: '', Gender: '', insured: '' },
                        aggElements: { insFullName: '', Age: '' },
                    },
                    offSet: 0,
                    name: 'parties',
                    level: 0,
                    indexInParent: 4,
                    bHasAttachment: !1,
                    bEmbed: !1,
                    response: null,
                    inheritShowProp: null,
                    children: [
                        {
                            response: null,
                            level: 1,
                            indexInParent: 0,
                            eleArray: [
                                {
                                    type: 'Radio',
                                    rootIndex: 4,
                                    response: null,
                                    propSetMap: {
                                        disOnTplt: !1,
                                        enableCaption: !0,
                                        imageCountInRow: 3,
                                        optionHeight: 100,
                                        optionWidth: 100,
                                        hide: !1,
                                        HTMLTemplateId: '',
                                        accessibleInFutureSteps: !1,
                                        conditionType: 'Hide if False',
                                        show: null,
                                        controllingField: { source: '', type: '', element: '' },
                                        optionSource: { source: '', type: '' },
                                        options: [
                                            { autoAdv: 'next', value: 'Myself', name: 'Myself' },
                                            { autoAdv: null, value: 'Myself & Spouse', name: 'Myself & Spouse' },
                                            { autoAdv: null, value: 'Myself, My Spouse & Children', name: 'family' },
                                            { autoAdv: null, value: 'Myself & Children Only', name: 'children' },
                                        ],
                                        helpText: '',
                                        help: !1,
                                        defaultValue: 'Myself',
                                        horizontalMode: !1,
                                        readOnly: !1,
                                        repeatLimit: null,
                                        repeatClone: !1,
                                        repeat: !1,
                                        required: !1,
                                        label: 'Family',
                                        controlWidth: 12,
                                    },
                                    name: 'familyTier',
                                    level: 1,
                                    JSONPath: 'parties:familyTier',
                                    indexInParent: 0,
                                    index: 0,
                                    children: [],
                                    bHasAttachment: !1,
                                    bRadio: !0,
                                    lwcId: 'lwc40-0',
                                },
                            ],
                            bHasAttachment: !1,
                        },
                        {
                            response: null,
                            level: 1,
                            indexInParent: 1,
                            eleArray: [
                                {
                                    type: 'Edit Block',
                                    rootIndex: 4,
                                    response: null,
                                    propSetMap: {
                                        rpe: !0,
                                        mode: 'Inline',
                                        label: 'Additional Insured Persons',
                                        hide: !1,
                                        HTMLTemplateId: '',
                                        accessibleInFutureSteps: !1,
                                        conditionType: 'Hide if False',
                                        show: { group: { rules: [{ field: 'familyTier', condition: '<>', data: 'Myself' }], operator: 'AND' } },
                                        sumElement: '',
                                        sobjectMapping: [],
                                        selectSobject: '',
                                        valueSvgMap: [],
                                        elementName: '',
                                        svgIcon: 'user',
                                        svgSprite: 'utility',
                                        selectCheckBox: '',
                                        selectMode: 'Single',
                                        deleteLabel: 'Delete',
                                        editLabel: 'Edit',
                                        newLabel: 'New',
                                        allowDelete: !0,
                                        allowNew: !0,
                                        allowEdit: !0,
                                        controlWidth: 12,
                                    },
                                    name: 'insured',
                                    level: 1,
                                    JSONPath: 'parties:insured',
                                    indexInParent: 1,
                                    index: 0,
                                    children: [],
                                    bHasAttachment: !1,
                                    childrenC: [
                                        {
                                            response: null,
                                            level: 2,
                                            indexInParent: 0,
                                            eleArray: [
                                                {
                                                    type: 'Formula',
                                                    rootIndex: 4,
                                                    response: null,
                                                    propSetMap: {
                                                        _di: 0,
                                                        repeat: !1,
                                                        rpe: !0,
                                                        label: 'Full Name',
                                                        disOnTplt: !0,
                                                        HTMLTemplateId: '',
                                                        dateFormat: 'MM-dd-yyyy',
                                                        hideGroupSep: !1,
                                                        dataType: 'Text',
                                                        mask: null,
                                                        show: null,
                                                        hide: !0,
                                                        expression: 'CONCATENATE(%insFirst%," ",%insMiddle%," ",%insLast%)',
                                                        inputWidth: 12,
                                                        showInputWidth: !1,
                                                        controlWidth: 12,
                                                    },
                                                    name: 'insFullName',
                                                    level: 2,
                                                    JSONPath: 'parties:insured|1:insFullName',
                                                    indexInParent: 0,
                                                    index: 0,
                                                    children: [],
                                                    bHasAttachment: !1,
                                                    bFormula: !0,
                                                    lwcId: 'lwc4100-0',
                                                },
                                            ],
                                            bHasAttachment: !1,
                                        },
                                        {
                                            response: null,
                                            level: 2,
                                            indexInParent: 1,
                                            eleArray: [
                                                {
                                                    type: 'Text',
                                                    rootIndex: 4,
                                                    response: null,
                                                    propSetMap: {
                                                        _di: 1,
                                                        rpe: !0,
                                                        disOnTplt: !1,
                                                        hide: !1,
                                                        HTMLTemplateId: '',
                                                        debounceValue: 0,
                                                        accessibleInFutureSteps: !1,
                                                        conditionType: 'Hide if False',
                                                        show: null,
                                                        placeholder: '',
                                                        maxLength: 255,
                                                        minLength: 0,
                                                        ptrnErrText: '',
                                                        pattern: '',
                                                        mask: '',
                                                        helpText: '',
                                                        help: !1,
                                                        defaultValue: null,
                                                        readOnly: !1,
                                                        repeatLimit: null,
                                                        repeatClone: !1,
                                                        repeat: !1,
                                                        required: !1,
                                                        inputWidth: 12,
                                                        showInputWidth: !1,
                                                        label: 'First Name',
                                                        controlWidth: 3,
                                                    },
                                                    name: 'insFirst',
                                                    level: 2,
                                                    JSONPath: 'parties:insured|1:insFirst',
                                                    indexInParent: 1,
                                                    index: 0,
                                                    children: [],
                                                    bHasAttachment: !1,
                                                    bText: !0,
                                                    lwcId: 'lwc4101-0',
                                                },
                                            ],
                                            bHasAttachment: !1,
                                        },
                                        {
                                            response: null,
                                            level: 2,
                                            indexInParent: 2,
                                            eleArray: [
                                                {
                                                    type: 'Text',
                                                    rootIndex: 4,
                                                    response: null,
                                                    propSetMap: {
                                                        _di: 2,
                                                        rpe: !0,
                                                        disOnTplt: !1,
                                                        hide: !1,
                                                        HTMLTemplateId: '',
                                                        debounceValue: 0,
                                                        accessibleInFutureSteps: !1,
                                                        conditionType: 'Hide if False',
                                                        show: null,
                                                        placeholder: '',
                                                        maxLength: 255,
                                                        minLength: 0,
                                                        ptrnErrText: '',
                                                        pattern: '',
                                                        mask: '',
                                                        helpText: '',
                                                        help: !1,
                                                        defaultValue: null,
                                                        readOnly: !1,
                                                        repeatLimit: null,
                                                        repeatClone: !1,
                                                        repeat: !1,
                                                        required: !1,
                                                        inputWidth: 12,
                                                        showInputWidth: !1,
                                                        label: 'Middle',
                                                        controlWidth: 3,
                                                    },
                                                    name: 'insMi',
                                                    level: 2,
                                                    JSONPath: 'parties:insured|1:insMi',
                                                    indexInParent: 2,
                                                    index: 0,
                                                    children: [],
                                                    bHasAttachment: !1,
                                                    bText: !0,
                                                    lwcId: 'lwc4102-0',
                                                },
                                            ],
                                            bHasAttachment: !1,
                                        },
                                        {
                                            response: null,
                                            level: 2,
                                            indexInParent: 3,
                                            eleArray: [
                                                {
                                                    type: 'Text',
                                                    rootIndex: 4,
                                                    response: null,
                                                    propSetMap: {
                                                        _di: 3,
                                                        rpe: !0,
                                                        disOnTplt: !1,
                                                        hide: !1,
                                                        HTMLTemplateId: '',
                                                        debounceValue: 0,
                                                        accessibleInFutureSteps: !1,
                                                        conditionType: 'Hide if False',
                                                        show: null,
                                                        placeholder: '',
                                                        maxLength: 255,
                                                        minLength: 0,
                                                        ptrnErrText: '',
                                                        pattern: '',
                                                        mask: '',
                                                        helpText: '',
                                                        help: !1,
                                                        defaultValue: null,
                                                        readOnly: !1,
                                                        repeatLimit: null,
                                                        repeatClone: !1,
                                                        repeat: !1,
                                                        required: !1,
                                                        inputWidth: 12,
                                                        showInputWidth: !1,
                                                        label: 'Last Name',
                                                        controlWidth: 6,
                                                    },
                                                    name: 'insLast',
                                                    level: 2,
                                                    JSONPath: 'parties:insured|1:insLast',
                                                    indexInParent: 3,
                                                    index: 0,
                                                    children: [],
                                                    bHasAttachment: !1,
                                                    bText: !0,
                                                    lwcId: 'lwc4103-0',
                                                },
                                            ],
                                            bHasAttachment: !1,
                                        },
                                        {
                                            response: null,
                                            level: 2,
                                            indexInParent: 4,
                                            eleArray: [
                                                {
                                                    type: 'Date',
                                                    rootIndex: 4,
                                                    response: null,
                                                    propSetMap: {
                                                        _di: 4,
                                                        rpe: !0,
                                                        maxDate: '',
                                                        minDate: '',
                                                        disOnTplt: !1,
                                                        hide: !1,
                                                        HTMLTemplateId: '',
                                                        accessibleInFutureSteps: !1,
                                                        conditionType: 'Hide if False',
                                                        show: null,
                                                        dateFormat: 'MM-dd-yyyy',
                                                        modelDateFormat: 'yyyy-MM-dd',
                                                        dateType: 'string',
                                                        helpText: '',
                                                        help: !1,
                                                        defaultValue: null,
                                                        readOnly: !1,
                                                        repeatLimit: null,
                                                        repeatClone: !1,
                                                        repeat: !1,
                                                        required: !1,
                                                        inputWidth: 12,
                                                        showInputWidth: !1,
                                                        label: 'Birthdate',
                                                        controlWidth: 3,
                                                    },
                                                    name: 'Birthdate',
                                                    level: 2,
                                                    JSONPath: 'parties:insured|1:Birthdate',
                                                    indexInParent: 4,
                                                    index: 0,
                                                    children: [],
                                                    bHasAttachment: !1,
                                                    bDate: !0,
                                                    lwcId: 'lwc4104-0',
                                                },
                                            ],
                                            bHasAttachment: !1,
                                        },
                                        {
                                            response: null,
                                            level: 2,
                                            indexInParent: 5,
                                            eleArray: [
                                                {
                                                    type: 'Formula',
                                                    rootIndex: 4,
                                                    response: null,
                                                    propSetMap: {
                                                        _di: 5,
                                                        repeat: !1,
                                                        rpe: !0,
                                                        disOnTplt: !1,
                                                        HTMLTemplateId: '',
                                                        dateFormat: 'MM-dd-yyyy',
                                                        hideGroupSep: !1,
                                                        dataType: null,
                                                        mask: null,
                                                        show: null,
                                                        hide: !1,
                                                        expression: 'AGE(%Birthdate|n%)',
                                                        inputWidth: 12,
                                                        showInputWidth: !1,
                                                        label: 'Age',
                                                        controlWidth: 3,
                                                    },
                                                    name: 'Age',
                                                    level: 2,
                                                    JSONPath: 'parties:insured|1:Age',
                                                    indexInParent: 5,
                                                    index: 0,
                                                    children: [],
                                                    bHasAttachment: !1,
                                                    bFormula: !0,
                                                    lwcId: 'lwc4105-0',
                                                },
                                            ],
                                            bHasAttachment: !1,
                                        },
                                        {
                                            response: null,
                                            level: 2,
                                            indexInParent: 6,
                                            eleArray: [
                                                {
                                                    type: 'Radio',
                                                    rootIndex: 4,
                                                    response: null,
                                                    propSetMap: {
                                                        _di: 6,
                                                        rpe: !0,
                                                        disOnTplt: !1,
                                                        enableCaption: !0,
                                                        imageCountInRow: 3,
                                                        optionHeight: 100,
                                                        optionWidth: 100,
                                                        hide: !1,
                                                        HTMLTemplateId: '',
                                                        accessibleInFutureSteps: !1,
                                                        conditionType: 'Hide if False',
                                                        show: null,
                                                        controllingField: { source: '', type: '', element: '' },
                                                        optionSource: { source: '', type: '' },
                                                        options: [
                                                            { autoAdv: null, value: 'Male', name: 'Male' },
                                                            { autoAdv: null, value: 'Female', name: 'Female' },
                                                        ],
                                                        helpText: '',
                                                        help: !1,
                                                        defaultValue: null,
                                                        horizontalMode: !0,
                                                        readOnly: !1,
                                                        repeatLimit: null,
                                                        repeatClone: !1,
                                                        repeat: !1,
                                                        required: !1,
                                                        label: 'Gender',
                                                        controlWidth: 6,
                                                    },
                                                    name: 'Gender',
                                                    level: 2,
                                                    JSONPath: 'parties:insured|1:Gender',
                                                    indexInParent: 6,
                                                    index: 0,
                                                    children: [],
                                                    bHasAttachment: !1,
                                                    bRadio: !0,
                                                    lwcId: 'lwc4106-0',
                                                },
                                            ],
                                            bHasAttachment: !1,
                                        },
                                    ],
                                    bEditBlock: !0,
                                    lwcId: 'lwc41-0',
                                },
                            ],
                            bHasAttachment: !1,
                            bEB: !0,
                            lwcId: 'lwc41-0',
                            sldsCls: 'slds-grid slds-wrap slds-size_1-of-1 slds-is-relative omni-edit-block slds-size_12-of-12',
                            ndsCls: 'nds-grid nds-wrap nds-size_1-of-1 nds-is-relative omni-edit-block nds-size_12-of-12',
                            bEditBlockLabel: !0,
                            bEditBlockNew: !0,
                        },
                    ],
                    bAccordionOpen: !1,
                    bAccordionActive: !1,
                    bStep: !0,
                    isStep: !0,
                    JSONPath: 'parties',
                    lwcId: 'lwc4',
                },
                {
                    type: 'Step',
                    propSetMap: {
                        message: {},
                        pubsub: !1,
                        ssm: !1,
                        wpm: !1,
                        errorMessage: { default: null, custom: [] },
                        allowSaveForLater: !0,
                        label: 'Your Objective',
                        chartLabel: 'Objective',
                        instructionKey: '',
                        HTMLTemplateId: '',
                        conditionType: 'Hide if False',
                        show: null,
                        knowledgeOptions: {
                            typeFilter: '',
                            remoteTimeout: 3e4,
                            dataCategoryCriteria: '',
                            keyword: '',
                            publishStatus: 'Online',
                            language: 'English',
                        },
                        remoteOptions: {},
                        remoteTimeout: 3e4,
                        remoteMethod: '',
                        remoteClass: '',
                        showPersistentComponent: [!0, !1],
                        instruction: '',
                        completeMessage: 'Are you sure you want to complete the script?',
                        completeLabel: 'Complete',
                        saveMessage: 'Are you sure you want to save it for later?',
                        saveLabel: 'Save for later',
                        cancelMessage: 'Are you sure?',
                        cancelLabel: 'Cancel',
                        nextWidth: 3,
                        nextLabel: 'Next',
                        previousWidth: 3,
                        previousLabel: 'Previous',
                        validationRequired: !0,
                        uiElements: { objectives: '', goals: '' },
                        aggElements: {},
                    },
                    offSet: 0,
                    name: 'objectives',
                    level: 0,
                    indexInParent: 5,
                    bHasAttachment: !1,
                    bEmbed: !1,
                    response: null,
                    inheritShowProp: null,
                    children: [
                        {
                            response: null,
                            level: 1,
                            indexInParent: 0,
                            eleArray: [
                                {
                                    type: 'Radio',
                                    rootIndex: 5,
                                    response: null,
                                    propSetMap: {
                                        label: 'I need help with:',
                                        disOnTplt: !1,
                                        enableCaption: !0,
                                        imageCountInRow: 3,
                                        optionHeight: 200,
                                        optionWidth: 150,
                                        hide: !1,
                                        HTMLTemplateId: '',
                                        accessibleInFutureSteps: !1,
                                        conditionType: 'Hide if False',
                                        show: null,
                                        controllingField: { source: '', type: '', element: '' },
                                        optionSource: { source: '', type: 'image' },
                                        options: [
                                            {
                                                autoAdv: 'next',
                                                value: 'Protection',
                                                name: 'Protection',
                                                imgId: '/servlet/servlet.FileDownload?file=0154T000000hGodQAE',
                                            },
                                            {
                                                autoAdv: null,
                                                value: 'Health',
                                                name: 'health',
                                                imgId: '/servlet/servlet.FileDownload?file=0154T000000hGonQAE',
                                            },
                                            {
                                                autoAdv: null,
                                                value: 'Savings',
                                                name: 'Savings',
                                                imgId: '/servlet/servlet.FileDownload?file=0154T000000hGotQAE',
                                            },
                                        ],
                                        helpText: '',
                                        help: !1,
                                        defaultValue: null,
                                        horizontalMode: 'image',
                                        readOnly: !1,
                                        repeatLimit: null,
                                        repeatClone: !1,
                                        repeat: !1,
                                        required: !1,
                                        controlWidth: 12,
                                    },
                                    name: 'goals',
                                    level: 1,
                                    JSONPath: 'objectives:goals',
                                    indexInParent: 0,
                                    index: 0,
                                    children: [],
                                    bHasAttachment: !1,
                                    bRadio: !0,
                                    lwcId: 'lwc50-0',
                                },
                            ],
                            bHasAttachment: !1,
                        },
                    ],
                    bAccordionOpen: !1,
                    bAccordionActive: !1,
                    bStep: !0,
                    isStep: !0,
                    JSONPath: 'objectives',
                    lwcId: 'lwc5',
                },
                {
                    type: 'Step',
                    propSetMap: {
                        message: {},
                        pubsub: !1,
                        ssm: !1,
                        wpm: !1,
                        errorMessage: { default: null, custom: [] },
                        allowSaveForLater: !0,
                        label: 'Your Finances',
                        chartLabel: 'Finances',
                        instructionKey: '',
                        HTMLTemplateId: '',
                        conditionType: 'Hide if False',
                        show: null,
                        knowledgeOptions: {
                            typeFilter: '',
                            remoteTimeout: 3e4,
                            dataCategoryCriteria: '',
                            keyword: '',
                            publishStatus: 'Online',
                            language: 'English',
                        },
                        remoteOptions: {},
                        remoteTimeout: 3e4,
                        remoteMethod: '',
                        remoteClass: '',
                        showPersistentComponent: [!0, !1],
                        instruction: '',
                        completeMessage: 'Are you sure you want to complete the script?',
                        completeLabel: 'Complete',
                        saveMessage: 'Are you sure you want to save it for later?',
                        saveLabel: 'Save for later',
                        cancelMessage: 'Are you sure?',
                        cancelLabel: 'Cancel',
                        nextWidth: 3,
                        nextLabel: 'Next',
                        previousWidth: 3,
                        previousLabel: 'Previous',
                        validationRequired: !0,
                        uiElements: { finances: '', incType: '', incDescription: '', incAmount: '', income: '' },
                        aggElements: { totalIncome: '' },
                    },
                    offSet: 0,
                    name: 'finances',
                    level: 0,
                    indexInParent: 6,
                    bHasAttachment: !1,
                    bEmbed: !1,
                    response: null,
                    inheritShowProp: null,
                    children: [
                        {
                            response: null,
                            level: 1,
                            indexInParent: 0,
                            eleArray: [
                                {
                                    type: 'Edit Block',
                                    rootIndex: 6,
                                    response: null,
                                    propSetMap: {
                                        rpe: !0,
                                        mode: 'FS',
                                        hide: !1,
                                        HTMLTemplateId: '',
                                        accessibleInFutureSteps: !1,
                                        conditionType: 'Hide if False',
                                        show: null,
                                        sumElement: 'totalIncome',
                                        sobjectMapping: [],
                                        selectSobject: '',
                                        valueSvgMap: [],
                                        elementName: '',
                                        svgIcon: 'user',
                                        svgSprite: 'utility',
                                        selectCheckBox: '',
                                        selectMode: 'Single',
                                        deleteLabel: 'Delete',
                                        editLabel: 'Edit',
                                        newLabel: 'New',
                                        allowDelete: !0,
                                        allowNew: !0,
                                        allowEdit: !0,
                                        label: 'List your sources of income:',
                                        controlWidth: 12,
                                    },
                                    name: 'income',
                                    level: 1,
                                    JSONPath: 'finances:income',
                                    indexInParent: 0,
                                    index: 0,
                                    children: [],
                                    bHasAttachment: !1,
                                    childrenC: [
                                        {
                                            response: null,
                                            level: 2,
                                            indexInParent: 0,
                                            eleArray: [
                                                {
                                                    type: 'Select',
                                                    rootIndex: 6,
                                                    response: null,
                                                    propSetMap: {
                                                        _di: 0,
                                                        rpe: !0,
                                                        disOnTplt: !0,
                                                        hide: !1,
                                                        HTMLTemplateId: '',
                                                        accessibleInFutureSteps: !1,
                                                        conditionType: 'Hide if False',
                                                        show: null,
                                                        controllingField: { source: '', type: '', element: '' },
                                                        optionSource: { source: '', type: '' },
                                                        options: [
                                                            { autoAdv: null, value: 'Salary', name: 'Salary' },
                                                            { autoAdv: null, value: 'Bonus', name: 'Bonus' },
                                                            { autoAdv: null, value: 'Commission', name: 'Commission' },
                                                            { autoAdv: null, value: 'Investments', name: 'Investment' },
                                                            { autoAdv: null, value: 'Alimony', name: 'Alimony' },
                                                            { autoAdv: null, value: 'Other', name: 'Other' },
                                                        ],
                                                        helpText: '',
                                                        help: !1,
                                                        defaultValue: null,
                                                        readOnly: !1,
                                                        repeatLimit: null,
                                                        repeatClone: !1,
                                                        repeat: !1,
                                                        required: !1,
                                                        inputWidth: 12,
                                                        showInputWidth: !1,
                                                        label: 'Type',
                                                        controlWidth: 3,
                                                    },
                                                    name: 'incType',
                                                    level: 2,
                                                    JSONPath: 'finances:income|1:incType',
                                                    indexInParent: 0,
                                                    index: 0,
                                                    children: [],
                                                    bHasAttachment: !1,
                                                    bSelect: !0,
                                                    lwcId: 'lwc6000-0',
                                                },
                                            ],
                                            bHasAttachment: !1,
                                        },
                                        {
                                            response: null,
                                            level: 2,
                                            indexInParent: 1,
                                            eleArray: [
                                                {
                                                    type: 'Text',
                                                    rootIndex: 6,
                                                    response: null,
                                                    propSetMap: {
                                                        _di: 1,
                                                        rpe: !0,
                                                        disOnTplt: !0,
                                                        hide: !1,
                                                        HTMLTemplateId: '',
                                                        debounceValue: 0,
                                                        accessibleInFutureSteps: !1,
                                                        conditionType: 'Hide if False',
                                                        show: null,
                                                        placeholder: '',
                                                        maxLength: 255,
                                                        minLength: 0,
                                                        ptrnErrText: '',
                                                        pattern: '',
                                                        mask: '',
                                                        helpText: '',
                                                        help: !1,
                                                        defaultValue: null,
                                                        readOnly: !1,
                                                        repeatLimit: null,
                                                        repeatClone: !1,
                                                        repeat: !1,
                                                        required: !1,
                                                        inputWidth: 12,
                                                        showInputWidth: !1,
                                                        label: 'Description',
                                                        controlWidth: 6,
                                                    },
                                                    name: 'incDescription',
                                                    level: 2,
                                                    JSONPath: 'finances:income|1:incDescription',
                                                    indexInParent: 1,
                                                    index: 0,
                                                    children: [],
                                                    bHasAttachment: !1,
                                                    bText: !0,
                                                    lwcId: 'lwc6001-0',
                                                },
                                            ],
                                            bHasAttachment: !1,
                                        },
                                        {
                                            response: null,
                                            level: 2,
                                            indexInParent: 2,
                                            eleArray: [
                                                {
                                                    type: 'Currency',
                                                    rootIndex: 6,
                                                    response: null,
                                                    propSetMap: {
                                                        _di: 2,
                                                        rpe: !0,
                                                        displayCurrencyCode: !1,
                                                        disOnTplt: !0,
                                                        hide: !1,
                                                        HTMLTemplateId: '',
                                                        debounceValue: 0,
                                                        accessibleInFutureSteps: !1,
                                                        conditionType: 'Hide if False',
                                                        show: null,
                                                        hideGroupSep: !1,
                                                        allowNegative: !1,
                                                        placeholder: '',
                                                        max: null,
                                                        min: null,
                                                        mask: null,
                                                        helpText: '',
                                                        help: !1,
                                                        defaultValue: null,
                                                        readOnly: !1,
                                                        repeatLimit: null,
                                                        repeatClone: !1,
                                                        repeat: !1,
                                                        required: !1,
                                                        inputWidth: 12,
                                                        showInputWidth: !1,
                                                        label: 'Amount',
                                                        controlWidth: 3,
                                                    },
                                                    name: 'incAmount',
                                                    level: 2,
                                                    JSONPath: 'finances:income|1:incAmount',
                                                    indexInParent: 2,
                                                    index: 0,
                                                    children: [],
                                                    bHasAttachment: !1,
                                                    bCurrency: !0,
                                                    lwcId: 'lwc6002-0',
                                                },
                                            ],
                                            bHasAttachment: !1,
                                        },
                                    ],
                                    bEditBlock: !0,
                                    lwcId: 'lwc60-0',
                                },
                            ],
                            bHasAttachment: !1,
                            bEB: !0,
                            lwcId: 'lwc60-0',
                            sldsCls: 'slds-grid slds-wrap slds-size_1-of-1 slds-is-relative omni-edit-block slds-size_12-of-12',
                            ndsCls: 'nds-grid nds-wrap nds-size_1-of-1 nds-is-relative omni-edit-block nds-size_12-of-12',
                            bEditBlockLabel: !0,
                            bEditBlockNew: !0,
                        },
                        {
                            response: null,
                            level: 1,
                            indexInParent: 1,
                            eleArray: [
                                {
                                    type: 'Formula',
                                    rootIndex: 6,
                                    response: null,
                                    propSetMap: {
                                        disOnTplt: !1,
                                        HTMLTemplateId: '',
                                        dateFormat: 'MM-dd-yyyy',
                                        hideGroupSep: !1,
                                        dataType: 'Currency',
                                        mask: '99,999',
                                        show: null,
                                        hide: !0,
                                        expression: 'SUM(%incAmount%)',
                                        inputWidth: 12,
                                        showInputWidth: !1,
                                        label: 'Income',
                                        controlWidth: 12,
                                    },
                                    name: 'totalIncome',
                                    level: 1,
                                    JSONPath: 'finances:totalIncome',
                                    indexInParent: 1,
                                    index: 0,
                                    children: [],
                                    bHasAttachment: !1,
                                    bFormula: !0,
                                    lwcId: 'lwc61-0',
                                },
                            ],
                            bHasAttachment: !1,
                        },
                        {
                            response: null,
                            level: 1,
                            indexInParent: 2,
                            eleArray: [
                                {
                                    type: 'File',
                                    rootIndex: 6,
                                    response: null,
                                    propSetMap: {
                                        errorMessage: { default: null, custom: [] },
                                        remoteOptions: {},
                                        remoteMethod: '',
                                        remoteClass: '',
                                        extraPayload: {},
                                        contentParentId: [],
                                        uploadContDoc: !1,
                                        HTMLTemplateId: '',
                                        conditionType: 'Hide if False',
                                        show: null,
                                        helpText: '',
                                        help: !1,
                                        label: 'Upload your latest Tax Return',
                                        controlWidth: 12,
                                    },
                                    name: 'incTaxReturns',
                                    level: 1,
                                    JSONPath: 'finances:incTaxReturns',
                                    indexInParent: 2,
                                    index: 0,
                                    children: [],
                                    bHasAttachment: !0,
                                    bFile: !0,
                                    lwcId: 'lwc62-0',
                                },
                            ],
                            bHasAttachment: !0,
                        },
                    ],
                    bAccordionOpen: !1,
                    bAccordionActive: !1,
                    bStep: !0,
                    isStep: !0,
                    JSONPath: 'finances',
                    lwcId: 'lwc6',
                },
                {
                    type: 'Navigate Action',
                    propSetMap: {
                        targetName: 'home',
                        showCancelPrompt: !0,
                        disOnTplt: !1,
                        targetLWCLayout: 'lightning',
                        replace: !1,
                        iconPosition: 'left',
                        iconVariant: '',
                        iconName: '',
                        variant: 'brand',
                        targetId: '%ContextId%',
                        targetFilter: 'Recent',
                        loginAction: 'login',
                        recordAction: 'view',
                        objectAction: 'home',
                        label: 'Cancel',
                        message: {},
                        pubsub: !1,
                        ssm: !1,
                        wpm: !1,
                        HTMLTemplateId: '',
                        show: null,
                        validationRequired: 'none',
                        targetType: 'Named Page',
                        controlWidth: 12,
                        aggElements: {},
                    },
                    offSet: 0,
                    name: 'Done',
                    level: 0,
                    indexInParent: 7,
                    bHasAttachment: !1,
                    bEmbed: !1,
                    bNavigate: !0,
                    JSONPath: 'Done',
                    lwcId: 'lwc7',
                },
            ],
            bReusable: !1,
            bpVersion: 3,
            bpType: 'offplatform',
            bpSubType: 'lifeInsuranceExample2',
            bpLang: 'English',
            bHasAttachment: !1,
            lwcVarMap: {},
        };
        var V = [
            function(e, t, a) {
                return [
                    '.omni-spinner-container_wrapper',
                    t,
                    '{min-height:200px;position:relative}.footer-message',
                    t,
                    '{font-style:italic;font-weight:700;margin-top:10px}',
                ].join('');
            },
        ];
        function U(e, t, a, n) {
            const { c: s, d: F, h: z, t: J, b: B, k: W, i: R, f: V } = e,
                { _m0: U, _m1: K, _m2: q, _m3: G, _m4: Y, _m5: Q } = n;
            return [
                z('div', { attrs: { dir: t._dir }, key: 99 }, [
                    t.hasErrors
                        ? s('lightning-layout', l.a, { props: { verticalAlign: 'stretch' }, key: 16 }, [
                              s(
                                  'lightning-layout-item',
                                  o.a,
                                  {
                                      classMap: { 'slds-text-align_center': !0, 'slds-p-around_small': !0 },
                                      props: { flexibility: 'auto', padding: 'around-small', size: '1' },
                                      key: 1,
                                  },
                                  [
                                      s(
                                          'lightning-icon',
                                          r.a,
                                          {
                                              props: { iconName: 'utility:error', alternativeText: 'Error!', variant: 'error', size: 'large' },
                                              key: 0,
                                          },
                                          [],
                                      ),
                                  ],
                              ),
                              s(
                                  'lightning-layout-item',
                                  o.a,
                                  { classMap: { 'custom-box': !0 }, props: { flexibility: 'auto', padding: 'around-small' }, key: 15 },
                                  [
                                      z('p', { classMap: { 'slds-text-heading_medium': !0 }, key: 2 }, [F(t.allCustomLabelsUtil.OmniScriptError)]),
                                      z('p', { classMap: { bold: !0 }, key: 3 }, [F(t._errorMsg)]),
                                      t._isActiveOs
                                          ? null
                                          : z('dl', { classMap: { 'slds-dl_inline': !0 }, key: 13 }, [
                                                z('dt', { classMap: { 'slds-dl_inline__label': !0 }, key: 5 }, [
                                                    z('strong', { key: 4 }, [F(t.allCustomLabelsUtil.OmniScriptType), J(':')]),
                                                ]),
                                                z('dd', { classMap: { 'slds-dl_inline__detail': !0 }, key: 6 }, [J('offplatform')]),
                                                z('dt', { classMap: { 'slds-dl_inline__label': !0 }, key: 8 }, [
                                                    z('strong', { key: 7 }, [F(t.allCustomLabelsUtil.OmniScriptSubType), J(':')]),
                                                ]),
                                                z('dd', { classMap: { 'slds-dl_inline__detail': !0 }, key: 9 }, [J('lifeInsuranceExample2')]),
                                                z('dt', { classMap: { 'slds-dl_inline__label': !0 }, key: 11 }, [
                                                    z('strong', { key: 10 }, [F(t.allCustomLabelsUtil.OmniScriptLang), J(':')]),
                                                ]),
                                                z('dd', { classMap: { 'slds-dl_inline__detail': !0 }, key: 12 }, [J('English')]),
                                            ]),
                                      z('p', { classMap: { 'footer-message': !0 }, key: 14 }, [F(t.allCustomLabelsUtil.OmniScriptNotFound2)]),
                                  ],
                              ),
                          ])
                        : null,
                    t.hasErrors
                        ? null
                        : z(
                              'div',
                              { classMap: { 'via-nds': !0 }, key: 98 },
                              V([
                                  t.compLoaded
                                      ? null
                                      : z('div', { classMap: { 'omni-spinner-container_wrapper': !0 }, key: 18 }, [
                                            s(
                                                'c-spinner',
                                                i.a,
                                                {
                                                    props: { variant: 'brand', alternativeText: 'Loading..', theme: t._theme, size: 'medium' },
                                                    key: 17,
                                                },
                                                [],
                                            ),
                                        ]),
                                  t.bSflValid && t.firstRender
                                      ? V([
                                            t.isLauncherVisible
                                                ? s(
                                                      'c-button',
                                                      d.a,
                                                      {
                                                          props: {
                                                              label: t.inlineLabel,
                                                              variant: t.inlineVariant,
                                                              theme: t._theme,
                                                              extraclass: 'nds-button_stretch',
                                                          },
                                                          key: 19,
                                                          on: { click: U || (n._m0 = B(t.setScriptVisibility)) },
                                                      },
                                                      [],
                                                  )
                                                : null,
                                            z('article', { className: t.containerClasses, key: 68 }, [
                                                z(
                                                    'div',
                                                    {
                                                        classMap: { 'nds-card__body': !0, 'nds-card__body_inner': !0, 'nds-m-top_medium': !0 },
                                                        key: 51,
                                                    },
                                                    V([
                                                        t.bSflAuto
                                                            ? s(
                                                                  'c-omniscript-save-for-later-acknowledge',
                                                                  u.a,
                                                                  { props: { result: t.bSflResult, layout: t.layout, auto: !0 }, key: 20 },
                                                                  [],
                                                              )
                                                            : null,
                                                        t.jsonDef.propSetMap.hideStepChart
                                                            ? null
                                                            : s(
                                                                  'c-omniscript-step-chart',
                                                                  p.a,
                                                                  {
                                                                      attrs: { 'data-omni-key': 'omniscriptStepChart' },
                                                                      props: {
                                                                          jsonDef: t.jsonDef,
                                                                          jsonData: t.jsonDef.response,
                                                                          props: t.stepChartProps,
                                                                          layout: t.layout,
                                                                          scriptHeaderDef: t.scriptHeaderDef,
                                                                      },
                                                                      key: 21,
                                                                  },
                                                                  [],
                                                              ),
                                                        t._isKbEnabledOnScript
                                                            ? s(
                                                                  'c-omniscript-knowledge-base',
                                                                  c.a,
                                                                  {
                                                                      attrs: {
                                                                          'data-omni-key': 'omniscriptKnowledgeBase',
                                                                          'data-stepchart-placement': t._stepChartPlacement,
                                                                      },
                                                                      props: {
                                                                          knowledgeOptions: t.kbOptions,
                                                                          layout: t.layout,
                                                                          omniscriptKey: t.scriptHeaderDef.omniscriptKey,
                                                                          kbLabel: t.knowledgeLabel,
                                                                      },
                                                                      key: 22,
                                                                  },
                                                                  [],
                                                              )
                                                            : null,
                                                        t.isPageLoading
                                                            ? s(
                                                                  'c-spinner',
                                                                  i.a,
                                                                  {
                                                                      props: {
                                                                          variant: 'brand',
                                                                          alternativeText: 'Loading...',
                                                                          extraouterclass: 'nds-theme_default',
                                                                          theme: t._theme,
                                                                          message: t.spinnerMessage,
                                                                          size: 'medium',
                                                                      },
                                                                      key: 23,
                                                                  },
                                                                  [],
                                                              )
                                                            : null,
                                                        R(t.jsonDef.children, function(e, a) {
                                                            return [
                                                                e.bCancel
                                                                    ? s(
                                                                          'c-omniscript-cancel-action',
                                                                          m.a,
                                                                          {
                                                                              attrs: { 'data-omni-key': e.name },
                                                                              props: {
                                                                                  jsonDef: e,
                                                                                  jsonData: t.jsonDef.response,
                                                                                  jsonDataStr: t.jsonDataStr,
                                                                                  layout: t.layout,
                                                                                  resume: t.resume,
                                                                                  scriptHeaderDef: t.scriptHeaderDef,
                                                                                  runMode: t.runMode,
                                                                              },
                                                                              key: W(24, e.lwcId),
                                                                          },
                                                                          [],
                                                                      )
                                                                    : null,
                                                                e.bDataRaptorExtractAction
                                                                    ? s(
                                                                          'c-omniscript-dr-extract-action',
                                                                          y.a,
                                                                          {
                                                                              attrs: { 'data-omni-key': e.name },
                                                                              props: {
                                                                                  jsonDef: e,
                                                                                  jsonData: t.jsonDef.response,
                                                                                  jsonDataStr: t.jsonDataStr,
                                                                                  layout: t.layout,
                                                                                  resume: t.resume,
                                                                                  scriptHeaderDef: t.scriptHeaderDef,
                                                                                  runMode: t.runMode,
                                                                              },
                                                                              key: W(25, e.lwcId),
                                                                          },
                                                                          [],
                                                                      )
                                                                    : null,
                                                                e.bStep
                                                                    ? s(
                                                                          'c-omniscript-step',
                                                                          h.a,
                                                                          {
                                                                              attrs: { 'data-omni-key': e.name },
                                                                              props: {
                                                                                  jsonDef: e,
                                                                                  jsonData: t.jsonDef.response,
                                                                                  jsonDataStr: t.jsonDataStr,
                                                                                  layout: t.layout,
                                                                                  resume: t.resume,
                                                                                  scriptHeaderDef: t.scriptHeaderDef,
                                                                                  runMode: t.runMode,
                                                                                  seedJson: t.jsonDef.propSetMap.seedDataJSON,
                                                                              },
                                                                              key: W(49, e.lwcId),
                                                                          },
                                                                          R(e.children, function(e, a) {
                                                                              return V([
                                                                                  e.bEB
                                                                                      ? z(
                                                                                            'div',
                                                                                            { className: e.ndsCls, key: W(35, e.lwcId) },
                                                                                            V([
                                                                                                e.bEditBlockLabel
                                                                                                    ? s(
                                                                                                          'c-omniscript-edit-block-label',
                                                                                                          b.a,
                                                                                                          {
                                                                                                              props: {
                                                                                                                  jsonDef: e,
                                                                                                                  jsonData: t.jsonDef.response,
                                                                                                                  jsonDataStr: t.jsonDataStr,
                                                                                                                  layout: t.layout,
                                                                                                                  resume: t.resume,
                                                                                                                  runMode: t.runMode,
                                                                                                                  scriptHeaderDef: t.scriptHeaderDef,
                                                                                                              },
                                                                                                              key: 26,
                                                                                                          },
                                                                                                          [],
                                                                                                      )
                                                                                                    : null,
                                                                                                R(e.eleArray, function(e, a) {
                                                                                                    return e.bEditBlock
                                                                                                        ? s(
                                                                                                              'c-omniscript-edit-block',
                                                                                                              f.a,
                                                                                                              {
                                                                                                                  attrs: { 'data-omni-key': e.name },
                                                                                                                  props: {
                                                                                                                      jsonDef: e,
                                                                                                                      jsonData: t.jsonDef.response,
                                                                                                                      jsonDataStr: t.jsonDataStr,
                                                                                                                      layout: t.layout,
                                                                                                                      resume: t.resume,
                                                                                                                      scriptHeaderDef:
                                                                                                                          t.scriptHeaderDef,
                                                                                                                      runMode: t.runMode,
                                                                                                                      seedJson:
                                                                                                                          t.jsonDef.propSetMap
                                                                                                                              .seedDataJSON,
                                                                                                                      mode: e.propSetMap.mode,
                                                                                                                  },
                                                                                                                  key: W(33, e.lwcId),
                                                                                                              },
                                                                                                              R(e.children, function(e, a) {
                                                                                                                  return R(e.eleArray, function(
                                                                                                                      e,
                                                                                                                      a,
                                                                                                                  ) {
                                                                                                                      return [
                                                                                                                          e.bFormula
                                                                                                                              ? s(
                                                                                                                                    'c-omniscript-formula',
                                                                                                                                    g.a,
                                                                                                                                    {
                                                                                                                                        attrs: {
                                                                                                                                            'data-omni-key':
                                                                                                                                                e.name,
                                                                                                                                        },
                                                                                                                                        props: {
                                                                                                                                            jsonDef: e,
                                                                                                                                            jsonData:
                                                                                                                                                t
                                                                                                                                                    .jsonDef
                                                                                                                                                    .response,
                                                                                                                                            jsonDataStr:
                                                                                                                                                t.jsonDataStr,
                                                                                                                                            layout:
                                                                                                                                                t.layout,
                                                                                                                                            resume:
                                                                                                                                                t.resume,
                                                                                                                                            scriptHeaderDef:
                                                                                                                                                t.scriptHeaderDef,
                                                                                                                                            runMode:
                                                                                                                                                t.runMode,
                                                                                                                                        },
                                                                                                                                        key: W(
                                                                                                                                            27,
                                                                                                                                            e.lwcId,
                                                                                                                                        ),
                                                                                                                                    },
                                                                                                                                    [],
                                                                                                                                )
                                                                                                                              : null,
                                                                                                                          e.bText
                                                                                                                              ? s(
                                                                                                                                    'c-omniscript-text',
                                                                                                                                    v.a,
                                                                                                                                    {
                                                                                                                                        attrs: {
                                                                                                                                            'data-omni-key':
                                                                                                                                                e.name,
                                                                                                                                        },
                                                                                                                                        props: {
                                                                                                                                            jsonDef: e,
                                                                                                                                            jsonData:
                                                                                                                                                t
                                                                                                                                                    .jsonDef
                                                                                                                                                    .response,
                                                                                                                                            jsonDataStr:
                                                                                                                                                t.jsonDataStr,
                                                                                                                                            layout:
                                                                                                                                                t.layout,
                                                                                                                                            resume:
                                                                                                                                                t.resume,
                                                                                                                                            scriptHeaderDef:
                                                                                                                                                t.scriptHeaderDef,
                                                                                                                                            runMode:
                                                                                                                                                t.runMode,
                                                                                                                                            seedJson:
                                                                                                                                                t
                                                                                                                                                    .jsonDef
                                                                                                                                                    .propSetMap
                                                                                                                                                    .seedDataJSON,
                                                                                                                                        },
                                                                                                                                        key: W(
                                                                                                                                            28,
                                                                                                                                            e.lwcId,
                                                                                                                                        ),
                                                                                                                                    },
                                                                                                                                    [],
                                                                                                                                )
                                                                                                                              : null,
                                                                                                                          e.bDate
                                                                                                                              ? s(
                                                                                                                                    'c-omniscript-date',
                                                                                                                                    k.a,
                                                                                                                                    {
                                                                                                                                        attrs: {
                                                                                                                                            'data-omni-key':
                                                                                                                                                e.name,
                                                                                                                                        },
                                                                                                                                        props: {
                                                                                                                                            jsonDef: e,
                                                                                                                                            jsonData:
                                                                                                                                                t
                                                                                                                                                    .jsonDef
                                                                                                                                                    .response,
                                                                                                                                            jsonDataStr:
                                                                                                                                                t.jsonDataStr,
                                                                                                                                            layout:
                                                                                                                                                t.layout,
                                                                                                                                            resume:
                                                                                                                                                t.resume,
                                                                                                                                            scriptHeaderDef:
                                                                                                                                                t.scriptHeaderDef,
                                                                                                                                            runMode:
                                                                                                                                                t.runMode,
                                                                                                                                            seedJson:
                                                                                                                                                t
                                                                                                                                                    .jsonDef
                                                                                                                                                    .propSetMap
                                                                                                                                                    .seedDataJSON,
                                                                                                                                        },
                                                                                                                                        key: W(
                                                                                                                                            29,
                                                                                                                                            e.lwcId,
                                                                                                                                        ),
                                                                                                                                    },
                                                                                                                                    [],
                                                                                                                                )
                                                                                                                              : null,
                                                                                                                          e.bRadio
                                                                                                                              ? s(
                                                                                                                                    'c-omniscript-radio',
                                                                                                                                    S.a,
                                                                                                                                    {
                                                                                                                                        attrs: {
                                                                                                                                            'data-omni-key':
                                                                                                                                                e.name,
                                                                                                                                        },
                                                                                                                                        props: {
                                                                                                                                            jsonDef: e,
                                                                                                                                            jsonData:
                                                                                                                                                t
                                                                                                                                                    .jsonDef
                                                                                                                                                    .response,
                                                                                                                                            jsonDataStr:
                                                                                                                                                t.jsonDataStr,
                                                                                                                                            layout:
                                                                                                                                                t.layout,
                                                                                                                                            resume:
                                                                                                                                                t.resume,
                                                                                                                                            scriptHeaderDef:
                                                                                                                                                t.scriptHeaderDef,
                                                                                                                                            runMode:
                                                                                                                                                t.runMode,
                                                                                                                                            seedJson:
                                                                                                                                                t
                                                                                                                                                    .jsonDef
                                                                                                                                                    .propSetMap
                                                                                                                                                    .seedDataJSON,
                                                                                                                                        },
                                                                                                                                        key: W(
                                                                                                                                            30,
                                                                                                                                            e.lwcId,
                                                                                                                                        ),
                                                                                                                                    },
                                                                                                                                    [],
                                                                                                                                )
                                                                                                                              : null,
                                                                                                                          e.bSelect
                                                                                                                              ? s(
                                                                                                                                    'c-omniscript-select',
                                                                                                                                    D.a,
                                                                                                                                    {
                                                                                                                                        attrs: {
                                                                                                                                            'data-omni-key':
                                                                                                                                                e.name,
                                                                                                                                        },
                                                                                                                                        props: {
                                                                                                                                            jsonDef: e,
                                                                                                                                            jsonData:
                                                                                                                                                t
                                                                                                                                                    .jsonDef
                                                                                                                                                    .response,
                                                                                                                                            jsonDataStr:
                                                                                                                                                t.jsonDataStr,
                                                                                                                                            layout:
                                                                                                                                                t.layout,
                                                                                                                                            resume:
                                                                                                                                                t.resume,
                                                                                                                                            scriptHeaderDef:
                                                                                                                                                t.scriptHeaderDef,
                                                                                                                                            runMode:
                                                                                                                                                t.runMode,
                                                                                                                                            seedJson:
                                                                                                                                                t
                                                                                                                                                    .jsonDef
                                                                                                                                                    .propSetMap
                                                                                                                                                    .seedDataJSON,
                                                                                                                                        },
                                                                                                                                        key: W(
                                                                                                                                            31,
                                                                                                                                            e.lwcId,
                                                                                                                                        ),
                                                                                                                                    },
                                                                                                                                    [],
                                                                                                                                )
                                                                                                                              : null,
                                                                                                                          e.bCurrency
                                                                                                                              ? s(
                                                                                                                                    'c-omniscript-currency',
                                                                                                                                    M.a,
                                                                                                                                    {
                                                                                                                                        attrs: {
                                                                                                                                            'data-omni-key':
                                                                                                                                                e.name,
                                                                                                                                        },
                                                                                                                                        props: {
                                                                                                                                            jsonDef: e,
                                                                                                                                            jsonData:
                                                                                                                                                t
                                                                                                                                                    .jsonDef
                                                                                                                                                    .response,
                                                                                                                                            jsonDataStr:
                                                                                                                                                t.jsonDataStr,
                                                                                                                                            layout:
                                                                                                                                                t.layout,
                                                                                                                                            resume:
                                                                                                                                                t.resume,
                                                                                                                                            scriptHeaderDef:
                                                                                                                                                t.scriptHeaderDef,
                                                                                                                                            runMode:
                                                                                                                                                t.runMode,
                                                                                                                                            seedJson:
                                                                                                                                                t
                                                                                                                                                    .jsonDef
                                                                                                                                                    .propSetMap
                                                                                                                                                    .seedDataJSON,
                                                                                                                                        },
                                                                                                                                        key: W(
                                                                                                                                            32,
                                                                                                                                            e.lwcId,
                                                                                                                                        ),
                                                                                                                                    },
                                                                                                                                    [],
                                                                                                                                )
                                                                                                                              : null,
                                                                                                                      ];
                                                                                                                  });
                                                                                                              }),
                                                                                                          )
                                                                                                        : null;
                                                                                                }),
                                                                                                e.bEditBlockNew
                                                                                                    ? s(
                                                                                                          'c-omniscript-edit-block-new',
                                                                                                          j.a,
                                                                                                          {
                                                                                                              props: {
                                                                                                                  jsonDef: e,
                                                                                                                  jsonData: t.jsonDef.response,
                                                                                                                  jsonDataStr: t.jsonDataStr,
                                                                                                                  layout: t.layout,
                                                                                                                  resume: t.resume,
                                                                                                                  runMode: t.runMode,
                                                                                                                  scriptHeaderDef: t.scriptHeaderDef,
                                                                                                              },
                                                                                                              key: 34,
                                                                                                          },
                                                                                                          [],
                                                                                                      )
                                                                                                    : null,
                                                                                            ]),
                                                                                        )
                                                                                      : null,
                                                                                  R(e.eleArray, function(e, a) {
                                                                                      return [
                                                                                          e.bNumber
                                                                                              ? s(
                                                                                                    'c-omniscript-number',
                                                                                                    _.a,
                                                                                                    {
                                                                                                        attrs: { 'data-omni-key': e.name },
                                                                                                        props: {
                                                                                                            jsonDef: e,
                                                                                                            jsonData: t.jsonDef.response,
                                                                                                            jsonDataStr: t.jsonDataStr,
                                                                                                            layout: t.layout,
                                                                                                            resume: t.resume,
                                                                                                            scriptHeaderDef: t.scriptHeaderDef,
                                                                                                            runMode: t.runMode,
                                                                                                            seedJson:
                                                                                                                t.jsonDef.propSetMap.seedDataJSON,
                                                                                                        },
                                                                                                        key: W(36, e.lwcId),
                                                                                                    },
                                                                                                    [],
                                                                                                )
                                                                                              : null,
                                                                                          e.bFormula
                                                                                              ? s(
                                                                                                    'c-omniscript-formula',
                                                                                                    g.a,
                                                                                                    {
                                                                                                        attrs: { 'data-omni-key': e.name },
                                                                                                        props: {
                                                                                                            jsonDef: e,
                                                                                                            jsonData: t.jsonDef.response,
                                                                                                            jsonDataStr: t.jsonDataStr,
                                                                                                            layout: t.layout,
                                                                                                            resume: t.resume,
                                                                                                            scriptHeaderDef: t.scriptHeaderDef,
                                                                                                            runMode: t.runMode,
                                                                                                        },
                                                                                                        key: W(37, e.lwcId),
                                                                                                    },
                                                                                                    [],
                                                                                                )
                                                                                              : null,
                                                                                          e.bRadioGroup
                                                                                              ? s(
                                                                                                    'c-omniscript-radio-group',
                                                                                                    x.a,
                                                                                                    {
                                                                                                        attrs: { 'data-omni-key': e.name },
                                                                                                        props: {
                                                                                                            jsonDef: e,
                                                                                                            jsonData: t.jsonDef.response,
                                                                                                            jsonDataStr: t.jsonDataStr,
                                                                                                            layout: t.layout,
                                                                                                            resume: t.resume,
                                                                                                            scriptHeaderDef: t.scriptHeaderDef,
                                                                                                            runMode: t.runMode,
                                                                                                            seedJson:
                                                                                                                t.jsonDef.propSetMap.seedDataJSON,
                                                                                                        },
                                                                                                        key: W(38, e.lwcId),
                                                                                                    },
                                                                                                    [],
                                                                                                )
                                                                                              : null,
                                                                                          e.bTextarea
                                                                                              ? s(
                                                                                                    'c-omniscript-textarea',
                                                                                                    w.a,
                                                                                                    {
                                                                                                        attrs: { 'data-omni-key': e.name },
                                                                                                        props: {
                                                                                                            jsonDef: e,
                                                                                                            jsonData: t.jsonDef.response,
                                                                                                            jsonDataStr: t.jsonDataStr,
                                                                                                            layout: t.layout,
                                                                                                            resume: t.resume,
                                                                                                            scriptHeaderDef: t.scriptHeaderDef,
                                                                                                            runMode: t.runMode,
                                                                                                            seedJson:
                                                                                                                t.jsonDef.propSetMap.seedDataJSON,
                                                                                                        },
                                                                                                        key: W(39, e.lwcId),
                                                                                                    },
                                                                                                    [],
                                                                                                )
                                                                                              : null,
                                                                                          e.bSelect
                                                                                              ? s(
                                                                                                    'c-omniscript-select',
                                                                                                    D.a,
                                                                                                    {
                                                                                                        attrs: { 'data-omni-key': e.name },
                                                                                                        props: {
                                                                                                            jsonDef: e,
                                                                                                            jsonData: t.jsonDef.response,
                                                                                                            jsonDataStr: t.jsonDataStr,
                                                                                                            layout: t.layout,
                                                                                                            resume: t.resume,
                                                                                                            scriptHeaderDef: t.scriptHeaderDef,
                                                                                                            runMode: t.runMode,
                                                                                                            seedJson:
                                                                                                                t.jsonDef.propSetMap.seedDataJSON,
                                                                                                        },
                                                                                                        key: W(40, e.lwcId),
                                                                                                    },
                                                                                                    [],
                                                                                                )
                                                                                              : null,
                                                                                          e.bText
                                                                                              ? s(
                                                                                                    'c-omniscript-text',
                                                                                                    v.a,
                                                                                                    {
                                                                                                        attrs: { 'data-omni-key': e.name },
                                                                                                        props: {
                                                                                                            jsonDef: e,
                                                                                                            jsonData: t.jsonDef.response,
                                                                                                            jsonDataStr: t.jsonDataStr,
                                                                                                            layout: t.layout,
                                                                                                            resume: t.resume,
                                                                                                            scriptHeaderDef: t.scriptHeaderDef,
                                                                                                            runMode: t.runMode,
                                                                                                            seedJson:
                                                                                                                t.jsonDef.propSetMap.seedDataJSON,
                                                                                                        },
                                                                                                        key: W(41, e.lwcId),
                                                                                                    },
                                                                                                    [],
                                                                                                )
                                                                                              : null,
                                                                                          e.bEmail
                                                                                              ? s(
                                                                                                    'c-omniscript-email',
                                                                                                    I.a,
                                                                                                    {
                                                                                                        attrs: { 'data-omni-key': e.name },
                                                                                                        props: {
                                                                                                            jsonDef: e,
                                                                                                            jsonData: t.jsonDef.response,
                                                                                                            jsonDataStr: t.jsonDataStr,
                                                                                                            layout: t.layout,
                                                                                                            resume: t.resume,
                                                                                                            scriptHeaderDef: t.scriptHeaderDef,
                                                                                                            runMode: t.runMode,
                                                                                                            seedJson:
                                                                                                                t.jsonDef.propSetMap.seedDataJSON,
                                                                                                        },
                                                                                                        key: W(42, e.lwcId),
                                                                                                    },
                                                                                                    [],
                                                                                                )
                                                                                              : null,
                                                                                          e.bBlock
                                                                                              ? s(
                                                                                                    'c-omniscript-block',
                                                                                                    T.a,
                                                                                                    {
                                                                                                        attrs: { 'data-omni-key': e.name },
                                                                                                        props: {
                                                                                                            jsonDef: e,
                                                                                                            jsonData: t.jsonDef.response,
                                                                                                            jsonDataStr: t.jsonDataStr,
                                                                                                            layout: t.layout,
                                                                                                            resume: t.resume,
                                                                                                            scriptHeaderDef: t.scriptHeaderDef,
                                                                                                            runMode: t.runMode,
                                                                                                            seedJson:
                                                                                                                t.jsonDef.propSetMap.seedDataJSON,
                                                                                                        },
                                                                                                        key: W(46, e.lwcId),
                                                                                                    },
                                                                                                    R(e.children, function(e, a) {
                                                                                                        return R(e.eleArray, function(e, a) {
                                                                                                            return e.bTypeaheadBlock
                                                                                                                ? s(
                                                                                                                      'c-omniscript-typeahead-block',
                                                                                                                      H.a,
                                                                                                                      {
                                                                                                                          attrs: {
                                                                                                                              'data-omni-key': e.name,
                                                                                                                          },
                                                                                                                          props: {
                                                                                                                              jsonDef: e,
                                                                                                                              jsonData:
                                                                                                                                  t.jsonDef.response,
                                                                                                                              jsonDataStr:
                                                                                                                                  t.jsonDataStr,
                                                                                                                              layout: t.layout,
                                                                                                                              resume: t.resume,
                                                                                                                              scriptHeaderDef:
                                                                                                                                  t.scriptHeaderDef,
                                                                                                                              runMode: t.runMode,
                                                                                                                              seedJson:
                                                                                                                                  t.jsonDef.propSetMap
                                                                                                                                      .seedDataJSON,
                                                                                                                          },
                                                                                                                          key: W(45, e.lwcId),
                                                                                                                      },
                                                                                                                      R(e.children, function(e, a) {
                                                                                                                          return R(
                                                                                                                              e.eleArray,
                                                                                                                              function(e, a) {
                                                                                                                                  return [
                                                                                                                                      e.bPlacesTypeahead
                                                                                                                                          ? s(
                                                                                                                                                'c-omniscript-places-typeahead',
                                                                                                                                                L.a,
                                                                                                                                                {
                                                                                                                                                    attrs: {
                                                                                                                                                        'data-omni-key':
                                                                                                                                                            e.name,
                                                                                                                                                    },
                                                                                                                                                    props: {
                                                                                                                                                        jsonDef: e,
                                                                                                                                                        jsonData:
                                                                                                                                                            t
                                                                                                                                                                .jsonDef
                                                                                                                                                                .response,
                                                                                                                                                        jsonDataStr:
                                                                                                                                                            t.jsonDataStr,
                                                                                                                                                        layout:
                                                                                                                                                            t.layout,
                                                                                                                                                        resume:
                                                                                                                                                            t.resume,
                                                                                                                                                        scriptHeaderDef:
                                                                                                                                                            t.scriptHeaderDef,
                                                                                                                                                        runMode:
                                                                                                                                                            t.runMode,
                                                                                                                                                        seedJson:
                                                                                                                                                            t
                                                                                                                                                                .jsonDef
                                                                                                                                                                .propSetMap
                                                                                                                                                                .seedDataJSON,
                                                                                                                                                    },
                                                                                                                                                    key: W(
                                                                                                                                                        43,
                                                                                                                                                        e.lwcId,
                                                                                                                                                    ),
                                                                                                                                                },
                                                                                                                                                [],
                                                                                                                                            )
                                                                                                                                          : null,
                                                                                                                                      e.bText
                                                                                                                                          ? s(
                                                                                                                                                'c-omniscript-text',
                                                                                                                                                v.a,
                                                                                                                                                {
                                                                                                                                                    attrs: {
                                                                                                                                                        'data-omni-key':
                                                                                                                                                            e.name,
                                                                                                                                                    },
                                                                                                                                                    props: {
                                                                                                                                                        jsonDef: e,
                                                                                                                                                        jsonData:
                                                                                                                                                            t
                                                                                                                                                                .jsonDef
                                                                                                                                                                .response,
                                                                                                                                                        jsonDataStr:
                                                                                                                                                            t.jsonDataStr,
                                                                                                                                                        layout:
                                                                                                                                                            t.layout,
                                                                                                                                                        resume:
                                                                                                                                                            t.resume,
                                                                                                                                                        scriptHeaderDef:
                                                                                                                                                            t.scriptHeaderDef,
                                                                                                                                                        runMode:
                                                                                                                                                            t.runMode,
                                                                                                                                                        seedJson:
                                                                                                                                                            t
                                                                                                                                                                .jsonDef
                                                                                                                                                                .propSetMap
                                                                                                                                                                .seedDataJSON,
                                                                                                                                                    },
                                                                                                                                                    key: W(
                                                                                                                                                        44,
                                                                                                                                                        e.lwcId,
                                                                                                                                                    ),
                                                                                                                                                },
                                                                                                                                                [],
                                                                                                                                            )
                                                                                                                                          : null,
                                                                                                                                  ];
                                                                                                                              },
                                                                                                                          );
                                                                                                                      }),
                                                                                                                  )
                                                                                                                : null;
                                                                                                        });
                                                                                                    }),
                                                                                                )
                                                                                              : null,
                                                                                          e.bRadio
                                                                                              ? s(
                                                                                                    'c-omniscript-radio',
                                                                                                    S.a,
                                                                                                    {
                                                                                                        attrs: { 'data-omni-key': e.name },
                                                                                                        props: {
                                                                                                            jsonDef: e,
                                                                                                            jsonData: t.jsonDef.response,
                                                                                                            jsonDataStr: t.jsonDataStr,
                                                                                                            layout: t.layout,
                                                                                                            resume: t.resume,
                                                                                                            scriptHeaderDef: t.scriptHeaderDef,
                                                                                                            runMode: t.runMode,
                                                                                                            seedJson:
                                                                                                                t.jsonDef.propSetMap.seedDataJSON,
                                                                                                        },
                                                                                                        key: W(47, e.lwcId),
                                                                                                    },
                                                                                                    [],
                                                                                                )
                                                                                              : null,
                                                                                          e.bFile
                                                                                              ? s(
                                                                                                    'c-omniscript-file',
                                                                                                    C.a,
                                                                                                    {
                                                                                                        attrs: { 'data-omni-key': e.name },
                                                                                                        props: {
                                                                                                            jsonDef: e,
                                                                                                            jsonData: t.jsonDef.response,
                                                                                                            jsonDataStr: t.jsonDataStr,
                                                                                                            layout: t.layout,
                                                                                                            resume: t.resume,
                                                                                                            scriptHeaderDef: t.scriptHeaderDef,
                                                                                                            runMode: t.runMode,
                                                                                                            seedJson:
                                                                                                                t.jsonDef.propSetMap.seedDataJSON,
                                                                                                        },
                                                                                                        key: W(48, e.lwcId),
                                                                                                    },
                                                                                                    [],
                                                                                                )
                                                                                              : null,
                                                                                      ];
                                                                                  }),
                                                                              ]);
                                                                          }),
                                                                      )
                                                                    : null,
                                                                e.bNavigate
                                                                    ? s(
                                                                          'c-omniscript-navigate-action',
                                                                          O.a,
                                                                          {
                                                                              attrs: { 'data-omni-key': e.name },
                                                                              props: {
                                                                                  jsonDef: e,
                                                                                  jsonData: t.jsonDef.response,
                                                                                  jsonDataStr: t.jsonDataStr,
                                                                                  layout: t.layout,
                                                                                  resume: t.resume,
                                                                                  scriptHeaderDef: t.scriptHeaderDef,
                                                                                  runMode: t.runMode,
                                                                              },
                                                                              key: W(50, e.lwcId),
                                                                          },
                                                                          [],
                                                                      )
                                                                    : null,
                                                            ];
                                                        }),
                                                    ]),
                                                ),
                                                z('div', { classMap: { 'nds-m-around_small': !0 }, key: 67 }, [
                                                    z('div', { classMap: { 'nds-grid': !0, 'nds-grid_align-center': !0 }, key: 56 }, [
                                                        z(
                                                            'div',
                                                            {
                                                                classMap: {
                                                                    'nds-grid': !0,
                                                                    'nds-grid_align-center': !0,
                                                                    'nds-wrap': !0,
                                                                    'nds-button-group-row': !0,
                                                                    'nds-size_1-of-1': !0,
                                                                    'nds-medium-size_8-of-12': !0,
                                                                    'nds-p-horizontal_medium': !0,
                                                                },
                                                                key: 55,
                                                            },
                                                            [
                                                                t.hasNext && t._isSeoEnabled
                                                                    ? s(
                                                                          'c-navigate-action',
                                                                          A.b,
                                                                          {
                                                                              className: t.navButton.next.classes,
                                                                              props: {
                                                                                  targetType: 'Current Page',
                                                                                  useHref: !0,
                                                                                  targetParams: t.navButton.next.targetParams,
                                                                              },
                                                                              key: 53,
                                                                          },
                                                                          [
                                                                              s(
                                                                                  'c-button',
                                                                                  d.a,
                                                                                  {
                                                                                      props: {
                                                                                          type: 'button',
                                                                                          label: t.navButton.next.label,
                                                                                          variant: 'brand',
                                                                                          extraclass:
                                                                                              'slds-size_1-of-1 slds-p-horizontal_none slds-text-align_center',
                                                                                          theme: t._theme,
                                                                                      },
                                                                                      key: 52,
                                                                                  },
                                                                                  [],
                                                                              ),
                                                                          ],
                                                                      )
                                                                    : null,
                                                                t.hasNext
                                                                    ? t._isSeoEnabled
                                                                        ? null
                                                                        : s(
                                                                              'c-button',
                                                                              d.a,
                                                                              {
                                                                                  className: t.navButton.next.classes,
                                                                                  props: {
                                                                                      type: 'button',
                                                                                      variant: 'brand',
                                                                                      label: t.navButton.next.label,
                                                                                      extraclass:
                                                                                          'nds-button_stretch nds-p-around_xx-small nds-size_1-of-1',
                                                                                      theme: t._theme,
                                                                                  },
                                                                                  key: 54,
                                                                                  on: { click: K || (n._m1 = B(t.nextStep)) },
                                                                              },
                                                                              [],
                                                                          )
                                                                    : null,
                                                            ],
                                                        ),
                                                    ]),
                                                    z('div', { classMap: { 'nds-grid': !0, 'nds-grid_align-center': !0 }, key: 61 }, [
                                                        z(
                                                            'div',
                                                            {
                                                                classMap: {
                                                                    'nds-grid': !0,
                                                                    'nds-grid_align-center': !0,
                                                                    'nds-wrap': !0,
                                                                    'nds-button-group-row': !0,
                                                                    'nds-size_1-of-1': !0,
                                                                    'nds-medium-size_8-of-12': !0,
                                                                    'nds-p-horizontal_medium': !0,
                                                                },
                                                                key: 60,
                                                            },
                                                            [
                                                                t.hasPrev && t._isSeoEnabled
                                                                    ? s(
                                                                          'c-navigate-action',
                                                                          A.b,
                                                                          {
                                                                              className: t.navButton.previous.classes,
                                                                              props: {
                                                                                  targetType: 'Current Page',
                                                                                  useHref: !0,
                                                                                  targetParams: t.navButton.previous.targetParams,
                                                                              },
                                                                              key: 58,
                                                                          },
                                                                          [
                                                                              s(
                                                                                  'c-button',
                                                                                  d.a,
                                                                                  {
                                                                                      props: {
                                                                                          type: 'button',
                                                                                          variant: 'neutral',
                                                                                          label: t.navButton.previous.label,
                                                                                          extraclass:
                                                                                              'nds-button_stretch nds-p-around_xx-small nds-size_1-of-1',
                                                                                          theme: t._theme,
                                                                                      },
                                                                                      key: 57,
                                                                                  },
                                                                                  [],
                                                                              ),
                                                                          ],
                                                                      )
                                                                    : null,
                                                                t.hasPrev
                                                                    ? t._isSeoEnabled
                                                                        ? null
                                                                        : s(
                                                                              'c-button',
                                                                              d.a,
                                                                              {
                                                                                  className: t.navButton.previous.classes,
                                                                                  props: {
                                                                                      type: 'button',
                                                                                      variant: 'neutral',
                                                                                      label: t.navButton.previous.label,
                                                                                      extraclass:
                                                                                          'nds-button_stretch nds-p-around_xx-small nds-size_1-of-1',
                                                                                      theme: t._theme,
                                                                                  },
                                                                                  key: 59,
                                                                                  on: { click: q || (n._m2 = B(t.prevStep)) },
                                                                              },
                                                                              [],
                                                                          )
                                                                    : null,
                                                            ],
                                                        ),
                                                    ]),
                                                    z('div', { classMap: { 'nds-grid': !0, 'nds-grid_align-center': !0 }, key: 66 }, [
                                                        z(
                                                            'div',
                                                            {
                                                                classMap: {
                                                                    'nds-grid': !0,
                                                                    'nds-grid_align-center': !0,
                                                                    'nds-wrap': !0,
                                                                    'nds-button-group-row': !0,
                                                                    'nds-size_1-of-1': !0,
                                                                    'nds-medium-size_8-of-12': !0,
                                                                    'nds-p-horizontal_medium': !0,
                                                                },
                                                                key: 65,
                                                            },
                                                            [
                                                                t.cancelAction
                                                                    ? s(
                                                                          'c-button',
                                                                          d.a,
                                                                          {
                                                                              className: t.navButton.save.classes,
                                                                              props: {
                                                                                  type: 'button',
                                                                                  label: t.cancelLabel,
                                                                                  variant: 'base',
                                                                                  extraclass:
                                                                                      'nds-button_stretch nds-p-around_xx-small nds-size_1-of-1',
                                                                                  theme: t._theme,
                                                                              },
                                                                              key: 62,
                                                                              on: { click: G || (n._m3 = B(t.cancel)) },
                                                                          },
                                                                          [],
                                                                      )
                                                                    : null,
                                                                s(
                                                                    'c-navigate-action',
                                                                    A.b,
                                                                    {
                                                                        attrs: { 'data-omni-key': 'DEFAULT-CANCEL' },
                                                                        props: {
                                                                            targetType: t._defaultCancel.type,
                                                                            targetParams: t._defaultCancel.params,
                                                                        },
                                                                        key: 63,
                                                                    },
                                                                    [],
                                                                ),
                                                                t.allowSfl
                                                                    ? s(
                                                                          'c-button',
                                                                          d.a,
                                                                          {
                                                                              className: t.navButton.save.classes,
                                                                              props: {
                                                                                  type: 'button',
                                                                                  variant: 'base',
                                                                                  label: t.navButton.save.label,
                                                                                  extraclass:
                                                                                      'nds-button_stretch nds-p-around_xx-small nds-size_1-of-1',
                                                                                  theme: t._theme,
                                                                              },
                                                                              key: 64,
                                                                              on: { click: Y || (n._m4 = B(t.saveForLater)) },
                                                                          },
                                                                          [],
                                                                      )
                                                                    : null,
                                                            ],
                                                        ),
                                                    ]),
                                                ]),
                                            ]),
                                            t.bSflComplete
                                                ? s(
                                                      'c-omniscript-save-for-later-acknowledge',
                                                      u.a,
                                                      { props: { result: t.bSflResult, layout: t.layout }, key: 69 },
                                                      [],
                                                  )
                                                : null,
                                            R(t.modalEvents, function(e, a) {
                                                return s(
                                                    'c-omniscript-modal',
                                                    P.a,
                                                    {
                                                        attrs: { 'data-omni-key': 'omnimodal' },
                                                        props: {
                                                            type: e.type,
                                                            layout: t.layout,
                                                            triggeredOnStep: e.triggeredOnStep,
                                                            hideFooter: e.hideFooter,
                                                            hideHeader: e.hideHeader,
                                                        },
                                                        key: W(78, e.modalHeader),
                                                    },
                                                    [
                                                        z('div', { attrs: { slot: 'header' }, key: 71 }, [z('h1', { key: 70 }, [F(e.modalHeader)])]),
                                                        z('div', { attrs: { slot: 'content' }, key: 73 }, [
                                                            s(
                                                                'c-omniscript-formatted-rich-text',
                                                                N.a,
                                                                { props: { value: e.modalMessage, disableLinkify: !0 }, key: 72 },
                                                                [],
                                                            ),
                                                        ]),
                                                        z('div', { attrs: { slot: 'footer' }, key: 77 }, [
                                                            z(
                                                                'ul',
                                                                { classMap: { 'slds-button-group-row': !0 }, key: 76 },
                                                                R(e.buttons, function(e, t) {
                                                                    return e.label
                                                                        ? z('li', { classMap: { 'slds-button-group-item': !0 }, key: W(75, e.key) }, [
                                                                              s(
                                                                                  'lightning-button',
                                                                                  E.a,
                                                                                  {
                                                                                      props: { label: e.label, value: a },
                                                                                      key: 74,
                                                                                      on: { click: B(e.handleClick) },
                                                                                  },
                                                                                  [],
                                                                              ),
                                                                          ])
                                                                        : null;
                                                                }),
                                                            ),
                                                        ]),
                                                    ],
                                                );
                                            }),
                                        ])
                                      : [],
                                  t.bSflValid
                                      ? null
                                      : z(
                                            'div',
                                            {
                                                classMap: { 'nds-grid': !0, 'nds-wrap': !0, 'nds-gutters': !0, 'nds-p-horizontal_medium': !0 },
                                                key: 97,
                                            },
                                            [
                                                z(
                                                    'div',
                                                    { classMap: { 'nds-col': !0, 'nds-size_12-of-12': !0, 'nds-medium-size_2-of-12': !0 }, key: 79 },
                                                    [],
                                                ),
                                                z(
                                                    'div',
                                                    { classMap: { 'nds-col': !0, 'nds-size_12-of-12': !0, 'nds-medium-size_8-of-12': !0 }, key: 95 },
                                                    [
                                                        z('div', { classMap: { 'nds-card': !0, 'omniscript-save-for-later': !0 }, key: 94 }, [
                                                            z('div', { classMap: { 'nds-card__header': !0, 'nds-grid': !0 }, key: 86 }, [
                                                                z(
                                                                    'header',
                                                                    {
                                                                        classMap: {
                                                                            'nds-media': !0,
                                                                            'nds-media_center': !0,
                                                                            'nds-has-flexi-truncate': !0,
                                                                        },
                                                                        key: 85,
                                                                    },
                                                                    [
                                                                        z('div', { classMap: { 'nds-media__figure': !0 }, key: 81 }, [
                                                                            s(
                                                                                'lightning-icon',
                                                                                r.a,
                                                                                {
                                                                                    props: {
                                                                                        iconName: 'utility:warning',
                                                                                        alternativeText: 'Ok',
                                                                                        size: 'large',
                                                                                    },
                                                                                    key: 80,
                                                                                },
                                                                                [],
                                                                            ),
                                                                        ]),
                                                                        z('div', { classMap: { 'nds-media__body': !0 }, key: 84 }, [
                                                                            z('h2', { classMap: { 'nds-card__header-title': !0 }, key: 83 }, [
                                                                                z('span', { classMap: { 'nds-text-heading_large': !0 }, key: 82 }, [
                                                                                    F(t.allCustomLabelsUtil.OmniInvalidLwcComponent),
                                                                                ]),
                                                                            ]),
                                                                        ]),
                                                                    ],
                                                                ),
                                                            ]),
                                                            z('div', { classMap: { 'nds-card__body': !0, 'nds-card__body_inner': !0 }, key: 93 }, [
                                                                z('p', { classMap: { bold: !0 }, key: 87 }, [
                                                                    F(t.allCustomLabelsUtil.OmniInvalidLwcComponentMessage),
                                                                ]),
                                                                z('p', { key: 88 }, [J(' ')]),
                                                                z('div', { classMap: { 'nds-m-around_small': !0 }, key: 92 }, [
                                                                    z('div', { classMap: { 'nds-grid': !0 }, key: 91 }, [
                                                                        z(
                                                                            'div',
                                                                            {
                                                                                classMap: {
                                                                                    'nds-grid': !0,
                                                                                    'nds-wrap': !0,
                                                                                    'nds-button-group-row': !0,
                                                                                    'nds-size_1-of-1': !0,
                                                                                    'nds-medium-size_8-of-12': !0,
                                                                                    'nds-p-horizontal_medium': !0,
                                                                                },
                                                                                key: 90,
                                                                            },
                                                                            [
                                                                                s(
                                                                                    'c-button',
                                                                                    d.a,
                                                                                    {
                                                                                        classMap: { 'nds-m-left_x-small': !0 },
                                                                                        props: {
                                                                                            type: 'button',
                                                                                            variant: 'brand',
                                                                                            label: t.allCustomLabelsUtil.OmniContinue,
                                                                                            extraclass:
                                                                                                'nds-button_stretch nds-p-around_xx-small nds-size_1-of-1',
                                                                                            theme: t._theme,
                                                                                        },
                                                                                        key: 89,
                                                                                        on: { click: Q || (n._m5 = B(t.handleContinueInvalidSfl)) },
                                                                                    },
                                                                                    [],
                                                                                ),
                                                                            ],
                                                                        ),
                                                                    ]),
                                                                ]),
                                                            ]),
                                                        ]),
                                                    ],
                                                ),
                                                z(
                                                    'div',
                                                    { classMap: { 'nds-col': !0, 'nds-size_12-of-12': !0, 'nds-medium-size_2-of-12': !0 }, key: 96 },
                                                    [],
                                                ),
                                            ],
                                        ),
                              ]),
                          ),
                ]),
            ];
        }
        var K = Object(n.registerTemplate)(U);
        (U.stylesheets = []),
            V && U.stylesheets.push.apply(U.stylesheets, V),
            (U.stylesheetTokens = {
                hostAttribute: 'vlocityomniscript-offplatformLifeInsuranceExample2English-_offplatformLifeInsuranceExample2English_nds-host',
                shadowAttribute: 'vlocityomniscript-offplatformLifeInsuranceExample2English-_offplatformLifeInsuranceExample2English_nds',
            });
        class q extends J.a {
            constructor(...e) {
                super(...e),
                    (this.jsonDef = {}),
                    (this.resume = !1),
                    (this._inline = !1),
                    (this.inlineLabel = void 0),
                    (this.inlineVariant = void 0),
                    (this.layout = void 0),
                    (this.recordId = void 0);
            }
            get inline() {
                return this._inline;
            }
            set inline(e) {
                this._inline = 'true' === String(e);
            }
            get dir() {
                return this._dir;
            }
            set dir(e) {
                e && ((this._isRTL = 'rtl' === e), (this._dir = this._isRTL ? 'rtl' : 'ltr'));
            }
            set connection(e) {
                e && Object(B.o)(e);
            }
            get connection() {
                return Object(B.j)();
            }
            connectedCallback() {
                this.checkResume();
                const e = () => {
                    (this.jsonDef = this.instanceId
                        ? {
                              sOmniScriptId: R.sOmniScriptId,
                              lwcId: R.lwcId,
                              labelMap: R.labelMap,
                              propSetMap: R.propSetMap,
                              bpType: R.bpType,
                              bpSubType: R.bpSubType,
                              bpLang: R.bpLang,
                              bpVersion: R.bpVersion,
                          }
                        : JSON.parse(JSON.stringify(R))),
                        (this.resume = !!this.instanceId),
                        super.connectedCallback();
                };
                if (Object(B.k)()) {
                    const t = new Date(),
                        a = () => {
                            const n = Math.round((new Date() - t) / 1e3),
                                s = Object(B.j)();
                            if (!(null != s) && n < 60) return this.waitForConnection(500).then(a);
                            e();
                        };
                    this.dispatchEvent(new CustomEvent('omnioutcomponentready', { bubbles: !0, composed: !0, detail: { omnioutcomponent: !0 } })),
                        this.runMode !== W.b.OFFLINE || this.resume ? this.waitForConnection(500).then(a) : e();
                } else e();
            }
            handleContinueInvalidSfl() {
                (this.jsonDef = JSON.parse(JSON.stringify(R))), super.handleContinueInvalidSfl();
            }
            waitForConnection(e) {
                return new Promise(t => setTimeout(t, e));
            }
            render() {
                return 'newport' === this.layout ? K : z;
            }
        }
        Object(n.registerDecorators)(q, {
            publicProps: {
                inline: { config: 3 },
                inlineLabel: { config: 0 },
                inlineVariant: { config: 0 },
                layout: { config: 0 },
                recordId: { config: 0 },
                dir: { config: 3 },
                connection: { config: 3 },
            },
            track: { jsonDef: 1, resume: 1 },
            fields: ['_inline'],
        });
        var G = Object(n.registerComponent)(q, { tmpl: z });
        var Y = [
            function(e, t, a) {
                return [
                    '@media (min-width:48em){.omniscript-btn-previous',
                    t,
                    '~.omniscript-btn-next',
                    t,
                    ',.omniscript-btn-previous',
                    t,
                    '~.omniscript-btn-save-for-later',
                    t,
                    '{margin-left:.75rem}.omniscript-body[data-stepborder=right]',
                    t,
                    '{border-right:1px solid #d9dbdd}.omniscript-body[data-stepborder=left]',
                    t,
                    '{border-left:1px solid #d9dbdd}}.omniscript-article[data-content-position=right]',
                    t,
                    '{flex-direction:row-reverse}.omniscript-article[data-content-position=left]',
                    t,
                    '{flex-direction:row}.slds-spinner-container__wrapper',
                    t,
                    '{min-height:200px;position:relative}.footer-message',
                    t,
                    '{font-style:italic;font-weight:700;margin-top:10px}.omniscript-sfl-actions',
                    t,
                    '{font-size:1rem;color:#00396b;font-weight:300}@media screen and (max-width:768px){.omniscript-sfl-actions',
                    t,
                    '{display:flex;align-items:center;justify-content:center}.omniscript-button-position',
                    t,
                    '{flex-direction:column-reverse}}.omniscript-sfl-actions',
                    t,
                    '>div',
                    t,
                    '{display:inline-block;border-right:2px solid #f4f6f9;padding:0 10px}.omniscript-sfl-actions',
                    t,
                    '>div:last-of-type',
                    t,
                    '{border-right:none}',
                ].join('');
            },
        ];
        function Q(e, t, a, n) {
            const { c: s, d: m, h: y, t: b, b: f, k: g, i: v, f: k } = e,
                { _m0: S, _m1: D, _m2: M, _m3: j, _m4: _, _m5: x } = n;
            return [
                y(
                    'div',
                    { attrs: { dir: t._dir }, key: 75 },
                    k([
                        t.hasErrors
                            ? s('lightning-layout', l.a, { props: { verticalAlign: 'stretch' }, key: 16 }, [
                                  s(
                                      'lightning-layout-item',
                                      o.a,
                                      {
                                          classMap: { 'slds-text-align_center': !0, 'slds-p-around_small': !0 },
                                          props: { flexibility: 'auto', padding: 'around-small', size: '1' },
                                          key: 1,
                                      },
                                      [
                                          s(
                                              'lightning-icon',
                                              r.a,
                                              {
                                                  props: { iconName: 'utility:error', alternativeText: 'Error!', variant: 'error', size: 'large' },
                                                  key: 0,
                                              },
                                              [],
                                          ),
                                      ],
                                  ),
                                  s(
                                      'lightning-layout-item',
                                      o.a,
                                      { classMap: { 'custom-box': !0 }, props: { flexibility: 'auto', padding: 'around-small' }, key: 15 },
                                      [
                                          y('p', { classMap: { 'slds-text-heading_medium': !0 }, key: 2 }, [
                                              m(t.allCustomLabelsUtil.OmniScriptError),
                                          ]),
                                          y('p', { classMap: { bold: !0 }, key: 3 }, [m(t._errorMsg)]),
                                          t._isActiveOs
                                              ? null
                                              : y('dl', { classMap: { 'slds-dl_inline': !0 }, key: 13 }, [
                                                    y('dt', { classMap: { 'slds-dl_inline__label': !0 }, key: 5 }, [
                                                        y('strong', { key: 4 }, [m(t.allCustomLabelsUtil.OmniScriptType), b(':')]),
                                                    ]),
                                                    y('dd', { classMap: { 'slds-dl_inline__detail': !0 }, key: 6 }, [b('offplatform')]),
                                                    y('dt', { classMap: { 'slds-dl_inline__label': !0 }, key: 8 }, [
                                                        y('strong', { key: 7 }, [m(t.allCustomLabelsUtil.OmniScriptSubType), b(':')]),
                                                    ]),
                                                    y('dd', { classMap: { 'slds-dl_inline__detail': !0 }, key: 9 }, [b('inlineExample')]),
                                                    y('dt', { classMap: { 'slds-dl_inline__label': !0 }, key: 11 }, [
                                                        y('strong', { key: 10 }, [m(t.allCustomLabelsUtil.OmniScriptLang), b(':')]),
                                                    ]),
                                                    y('dd', { classMap: { 'slds-dl_inline__detail': !0 }, key: 12 }, [b('English')]),
                                                ]),
                                          y('p', { classMap: { 'footer-message': !0 }, key: 14 }, [m(t.allCustomLabelsUtil.OmniScriptNotFound2)]),
                                      ],
                                  ),
                              ])
                            : null,
                        t.hasErrors
                            ? []
                            : k([
                                  t.compLoaded
                                      ? null
                                      : y('div', { classMap: { 'slds-spinner-container__wrapper': !0 }, key: 18 }, [
                                            s(
                                                'c-spinner',
                                                i.a,
                                                { props: { variant: 'brand', alternativeText: 'Loading...', size: 'medium' }, key: 17 },
                                                [],
                                            ),
                                        ]),
                                  t.bSflValid && t.firstRender
                                      ? k([
                                            t.isLauncherVisible
                                                ? s(
                                                      'c-button',
                                                      d.a,
                                                      {
                                                          props: {
                                                              label: t.inlineLabel,
                                                              variant: t.inlineVariant,
                                                              theme: t._theme,
                                                              extraclass: 'slds-button_stretch',
                                                          },
                                                          key: 19,
                                                          on: { click: S || (n._m0 = f(t.setScriptVisibility)) },
                                                      },
                                                      [],
                                                  )
                                                : null,
                                            y(
                                                'article',
                                                {
                                                    className: t.containerClasses,
                                                    attrs: { 'data-content-position': t.stepChartProps.position },
                                                    key: 45,
                                                },
                                                [
                                                    y('div', { className: t._sideContentClasses, key: 22 }, [
                                                        t.jsonDef.propSetMap.hideStepChart
                                                            ? null
                                                            : s(
                                                                  'c-omniscript-step-chart',
                                                                  p.a,
                                                                  {
                                                                      attrs: { 'data-omni-key': 'omniscriptStepChart' },
                                                                      props: {
                                                                          jsonDef: t.jsonDef,
                                                                          jsonData: t.jsonDef.response,
                                                                          props: t.stepChartProps,
                                                                          layout: t.layout,
                                                                          scriptHeaderDef: t.scriptHeaderDef,
                                                                      },
                                                                      key: 20,
                                                                  },
                                                                  [],
                                                              ),
                                                        t._isKbEnabledOnScript
                                                            ? s(
                                                                  'c-omniscript-knowledge-base',
                                                                  c.a,
                                                                  {
                                                                      attrs: {
                                                                          'data-omni-key': 'omniscriptKnowledgeBase',
                                                                          'data-stepchart-placement': t._stepChartPlacement,
                                                                      },
                                                                      props: {
                                                                          knowledgeOptions: t.kbOptions,
                                                                          layout: t.layout,
                                                                          omniscriptKey: t.scriptHeaderDef.omniscriptKey,
                                                                          kbLabel: t.knowledgeLabel,
                                                                      },
                                                                      key: 21,
                                                                  },
                                                                  [],
                                                              )
                                                            : null,
                                                    ]),
                                                    y(
                                                        'div',
                                                        {
                                                            className: t.contentSldsClass,
                                                            attrs: { 'data-stepborder': t.stepChartProps.position },
                                                            key: 44,
                                                        },
                                                        k([
                                                            t.isPageLoading
                                                                ? s(
                                                                      'c-spinner',
                                                                      i.a,
                                                                      {
                                                                          props: {
                                                                              variant: 'brand',
                                                                              alternativeText: 'Loading...',
                                                                              extraouterclass: 'slds-theme_default',
                                                                              message: t.spinnerMessage,
                                                                              size: 'medium',
                                                                          },
                                                                          key: 23,
                                                                      },
                                                                      [],
                                                                  )
                                                                : null,
                                                            t.bSflAuto
                                                                ? s(
                                                                      'c-omniscript-save-for-later-acknowledge',
                                                                      u.a,
                                                                      { props: { result: t.bSflResult, layout: t.layout, auto: !0 }, key: 24 },
                                                                      [],
                                                                  )
                                                                : null,
                                                            v(t.jsonDef.children, function(e, a) {
                                                                return [
                                                                    e.bStep
                                                                        ? s(
                                                                              'c-omniscript-step',
                                                                              h.a,
                                                                              {
                                                                                  attrs: { 'data-omni-key': e.name },
                                                                                  props: {
                                                                                      jsonDef: e,
                                                                                      jsonData: t.jsonDef.response,
                                                                                      jsonDataStr: t.jsonDataStr,
                                                                                      layout: t.layout,
                                                                                      resume: t.resume,
                                                                                      scriptHeaderDef: t.scriptHeaderDef,
                                                                                      runMode: t.runMode,
                                                                                      seedJson: t.jsonDef.propSetMap.seedDataJSON,
                                                                                  },
                                                                                  key: g(26, e.lwcId),
                                                                              },
                                                                              v(e.children, function(e, a) {
                                                                                  return v(e.eleArray, function(e, a) {
                                                                                      return e.bEmail
                                                                                          ? s(
                                                                                                'c-omniscript-email',
                                                                                                I.a,
                                                                                                {
                                                                                                    attrs: { 'data-omni-key': e.name },
                                                                                                    props: {
                                                                                                        jsonDef: e,
                                                                                                        jsonData: t.jsonDef.response,
                                                                                                        jsonDataStr: t.jsonDataStr,
                                                                                                        layout: t.layout,
                                                                                                        resume: t.resume,
                                                                                                        scriptHeaderDef: t.scriptHeaderDef,
                                                                                                        runMode: t.runMode,
                                                                                                        seedJson: t.jsonDef.propSetMap.seedDataJSON,
                                                                                                    },
                                                                                                    key: g(25, e.lwcId),
                                                                                                },
                                                                                                [],
                                                                                            )
                                                                                          : null;
                                                                                  });
                                                                              }),
                                                                          )
                                                                        : null,
                                                                    e.bNavigate
                                                                        ? s(
                                                                              'c-omniscript-navigate-action',
                                                                              O.a,
                                                                              {
                                                                                  attrs: { 'data-omni-key': e.name },
                                                                                  props: {
                                                                                      jsonDef: e,
                                                                                      jsonData: t.jsonDef.response,
                                                                                      jsonDataStr: t.jsonDataStr,
                                                                                      layout: t.layout,
                                                                                      resume: t.resume,
                                                                                      scriptHeaderDef: t.scriptHeaderDef,
                                                                                      runMode: t.runMode,
                                                                                  },
                                                                                  key: g(27, e.lwcId),
                                                                              },
                                                                              [],
                                                                          )
                                                                        : null,
                                                                ];
                                                            }),
                                                            y(
                                                                'div',
                                                                {
                                                                    classMap: {
                                                                        'slds-grid': !0,
                                                                        'slds-wrap': !0,
                                                                        'slds-gutters': !0,
                                                                        'slds-p-horizontal_medium': !0,
                                                                    },
                                                                    key: 43,
                                                                },
                                                                [
                                                                    y(
                                                                        'div',
                                                                        {
                                                                            classMap: {
                                                                                'slds-col': !0,
                                                                                'slds-order_2': !0,
                                                                                'slds-medium-order_1': !0,
                                                                                'slds-size_12-of-12': !0,
                                                                                'slds-medium-size_6-of-12': !0,
                                                                            },
                                                                            key: 34,
                                                                        },
                                                                        [
                                                                            y('div', { classMap: { 'omniscript-sfl-actions': !0 }, key: 33 }, [
                                                                                t.cancelAction
                                                                                    ? y('div', { key: 29 }, [
                                                                                          s(
                                                                                              'c-button',
                                                                                              d.a,
                                                                                              {
                                                                                                  className: t.navButton.save.classes,
                                                                                                  props: {
                                                                                                      type: 'button',
                                                                                                      label: t.cancelLabel,
                                                                                                      variant: 'base',
                                                                                                  },
                                                                                                  key: 28,
                                                                                                  on: { click: D || (n._m1 = f(t.cancel)) },
                                                                                              },
                                                                                              [],
                                                                                          ),
                                                                                      ])
                                                                                    : null,
                                                                                s(
                                                                                    'c-navigate-action',
                                                                                    A.b,
                                                                                    {
                                                                                        attrs: { 'data-omni-key': 'DEFAULT-CANCEL' },
                                                                                        props: {
                                                                                            targetType: t._defaultCancel.type,
                                                                                            targetParams: t._defaultCancel.params,
                                                                                        },
                                                                                        key: 30,
                                                                                    },
                                                                                    [],
                                                                                ),
                                                                                t.allowSfl
                                                                                    ? y('div', { key: 32 }, [
                                                                                          s(
                                                                                              'c-button',
                                                                                              d.a,
                                                                                              {
                                                                                                  className: t.navButton.save.classes,
                                                                                                  props: {
                                                                                                      type: 'button',
                                                                                                      label: t.navButton.save.label,
                                                                                                      variant: 'base',
                                                                                                  },
                                                                                                  key: 31,
                                                                                                  on: { click: M || (n._m2 = f(t.saveForLater)) },
                                                                                              },
                                                                                              [],
                                                                                          ),
                                                                                      ])
                                                                                    : null,
                                                                            ]),
                                                                        ],
                                                                    ),
                                                                    y(
                                                                        'div',
                                                                        {
                                                                            classMap: {
                                                                                'slds-col': !0,
                                                                                'slds-order_1': !0,
                                                                                'slds-medium-order_2': !0,
                                                                                'slds-size_12-of-12': !0,
                                                                                'slds-medium-size_6-of-12': !0,
                                                                            },
                                                                            key: 42,
                                                                        },
                                                                        [
                                                                            y(
                                                                                'div',
                                                                                {
                                                                                    classMap: {
                                                                                        'slds-grid': !0,
                                                                                        'slds-wrap': !0,
                                                                                        'slds-grid_align-end': !0,
                                                                                        'omniscript-button-position': !0,
                                                                                    },
                                                                                    key: 41,
                                                                                },
                                                                                [
                                                                                    t.hasPrev && t._isSeoEnabled
                                                                                        ? s(
                                                                                              'c-navigate-action',
                                                                                              A.b,
                                                                                              {
                                                                                                  className: t.navButton.previous.classes,
                                                                                                  props: {
                                                                                                      targetType: 'Current Page',
                                                                                                      useHref: !0,
                                                                                                      targetParams: t.navButton.previous.targetParams,
                                                                                                  },
                                                                                                  key: 36,
                                                                                              },
                                                                                              [
                                                                                                  s(
                                                                                                      'c-button',
                                                                                                      d.a,
                                                                                                      {
                                                                                                          props: {
                                                                                                              type: 'button',
                                                                                                              label: t.navButton.previous.label,
                                                                                                              variant: 'neutral',
                                                                                                              extraclass:
                                                                                                                  'slds-size_1-of-1 slds-p-horizontal_none slds-text-align_center',
                                                                                                          },
                                                                                                          key: 35,
                                                                                                      },
                                                                                                      [],
                                                                                                  ),
                                                                                              ],
                                                                                          )
                                                                                        : null,
                                                                                    t.hasPrev
                                                                                        ? t._isSeoEnabled
                                                                                            ? null
                                                                                            : s(
                                                                                                  'c-button',
                                                                                                  d.a,
                                                                                                  {
                                                                                                      className: t.navButton.previous.classes,
                                                                                                      props: {
                                                                                                          type: 'button',
                                                                                                          label: t.navButton.previous.label,
                                                                                                          variant: 'neutral',
                                                                                                          extraclass:
                                                                                                              'slds-size_1-of-1 slds-p-horizontal_none slds-text-align_center',
                                                                                                      },
                                                                                                      key: 37,
                                                                                                      on: { click: j || (n._m3 = f(t.prevStep)) },
                                                                                                  },
                                                                                                  [],
                                                                                              )
                                                                                        : null,
                                                                                    t.hasNext && t._isSeoEnabled
                                                                                        ? s(
                                                                                              'c-navigate-action',
                                                                                              A.b,
                                                                                              {
                                                                                                  className: t.navButton.next.classes,
                                                                                                  props: {
                                                                                                      targetType: 'Current Page',
                                                                                                      useHref: !0,
                                                                                                      targetParams: t.navButton.next.targetParams,
                                                                                                  },
                                                                                                  key: 39,
                                                                                              },
                                                                                              [
                                                                                                  s(
                                                                                                      'c-button',
                                                                                                      d.a,
                                                                                                      {
                                                                                                          props: {
                                                                                                              type: 'button',
                                                                                                              label: t.navButton.next.label,
                                                                                                              variant: 'brand',
                                                                                                              extraclass:
                                                                                                                  'slds-size_1-of-1 slds-p-horizontal_none slds-text-align_center',
                                                                                                          },
                                                                                                          key: 38,
                                                                                                      },
                                                                                                      [],
                                                                                                  ),
                                                                                              ],
                                                                                          )
                                                                                        : null,
                                                                                    t.hasNext
                                                                                        ? t._isSeoEnabled
                                                                                            ? null
                                                                                            : s(
                                                                                                  'c-button',
                                                                                                  d.a,
                                                                                                  {
                                                                                                      className: t.navButton.next.classes,
                                                                                                      props: {
                                                                                                          type: 'button',
                                                                                                          label: t.navButton.next.label,
                                                                                                          variant: 'brand',
                                                                                                          extraclass:
                                                                                                              'slds-size_1-of-1 slds-p-horizontal_none slds-text-align_center',
                                                                                                      },
                                                                                                      key: 40,
                                                                                                      on: { click: _ || (n._m4 = f(t.nextStep)) },
                                                                                                  },
                                                                                                  [],
                                                                                              )
                                                                                        : null,
                                                                                ],
                                                                            ),
                                                                        ],
                                                                    ),
                                                                ],
                                                            ),
                                                        ]),
                                                    ),
                                                ],
                                            ),
                                            t.bSflComplete
                                                ? s(
                                                      'c-omniscript-save-for-later-acknowledge',
                                                      u.a,
                                                      { props: { result: t.bSflResult, layout: t.layout }, key: 46 },
                                                      [],
                                                  )
                                                : null,
                                            v(t.modalEvents, function(e, a) {
                                                return s(
                                                    'c-omniscript-modal',
                                                    P.a,
                                                    {
                                                        attrs: { 'data-omni-key': 'omnimodal' },
                                                        props: {
                                                            type: e.type,
                                                            layout: t.layout,
                                                            triggeredOnStep: e.triggeredOnStep,
                                                            hideFooter: e.hideFooter,
                                                            hideHeader: e.hideHeader,
                                                        },
                                                        key: g(55, e.modalHeader),
                                                    },
                                                    [
                                                        y('div', { attrs: { slot: 'header' }, key: 48 }, [y('h1', { key: 47 }, [m(e.modalHeader)])]),
                                                        y('div', { attrs: { slot: 'content' }, key: 50 }, [
                                                            s(
                                                                'c-omniscript-formatted-rich-text',
                                                                N.a,
                                                                { props: { value: e.modalMessage, disableLinkify: !0 }, key: 49 },
                                                                [],
                                                            ),
                                                        ]),
                                                        y('div', { attrs: { slot: 'footer' }, key: 54 }, [
                                                            y(
                                                                'ul',
                                                                { classMap: { 'slds-button-group-row': !0 }, key: 53 },
                                                                v(e.buttons, function(e, t) {
                                                                    return e.label
                                                                        ? y('li', { classMap: { 'slds-button-group-item': !0 }, key: g(52, e.key) }, [
                                                                              s(
                                                                                  'lightning-button',
                                                                                  E.a,
                                                                                  {
                                                                                      props: { label: e.label, value: a },
                                                                                      key: 51,
                                                                                      on: { click: f(e.handleClick) },
                                                                                  },
                                                                                  [],
                                                                              ),
                                                                          ])
                                                                        : null;
                                                                }),
                                                            ),
                                                        ]),
                                                    ],
                                                );
                                            }),
                                        ])
                                      : [],
                                  t.bSflValid
                                      ? null
                                      : y(
                                            'div',
                                            {
                                                classMap: { 'slds-grid': !0, 'slds-wrap': !0, 'slds-gutters': !0, 'slds-p-horizontal_medium': !0 },
                                                key: 74,
                                            },
                                            [
                                                y(
                                                    'div',
                                                    {
                                                        classMap: { 'slds-col': !0, 'slds-size_12-of-12': !0, 'slds-medium-size_2-of-12': !0 },
                                                        key: 56,
                                                    },
                                                    [],
                                                ),
                                                y(
                                                    'div',
                                                    {
                                                        classMap: { 'slds-col': !0, 'slds-size_12-of-12': !0, 'slds-medium-size_8-of-12': !0 },
                                                        key: 72,
                                                    },
                                                    [
                                                        y('div', { classMap: { 'slds-card': !0, 'omniscript-save-for-later': !0 }, key: 71 }, [
                                                            y('div', { classMap: { 'slds-card__header': !0, 'slds-grid': !0 }, key: 63 }, [
                                                                y(
                                                                    'header',
                                                                    {
                                                                        classMap: {
                                                                            'slds-media': !0,
                                                                            'slds-media_center': !0,
                                                                            'slds-has-flexi-truncate': !0,
                                                                        },
                                                                        key: 62,
                                                                    },
                                                                    [
                                                                        y('div', { classMap: { 'slds-media__figure': !0 }, key: 58 }, [
                                                                            s(
                                                                                'lightning-icon',
                                                                                r.a,
                                                                                {
                                                                                    props: {
                                                                                        iconName: 'utility:warning',
                                                                                        alternativeText: 'Ok',
                                                                                        variant: 'warning',
                                                                                        size: 'large',
                                                                                    },
                                                                                    key: 57,
                                                                                },
                                                                                [],
                                                                            ),
                                                                        ]),
                                                                        y('div', { classMap: { 'slds-media__body': !0 }, key: 61 }, [
                                                                            y('h2', { classMap: { 'slds-card__header-title': !0 }, key: 60 }, [
                                                                                y('span', { classMap: { 'slds-text-heading_large': !0 }, key: 59 }, [
                                                                                    m(t.allCustomLabelsUtil.OmniInvalidLwcComponent),
                                                                                ]),
                                                                            ]),
                                                                        ]),
                                                                    ],
                                                                ),
                                                            ]),
                                                            y('div', { classMap: { 'slds-card__body': !0, 'slds-card__body_inner': !0 }, key: 70 }, [
                                                                y('p', { classMap: { bold: !0 }, key: 64 }, [
                                                                    m(t.allCustomLabelsUtil.OmniInvalidLwcComponentMessage),
                                                                ]),
                                                                y('p', { key: 65 }, [b(' ')]),
                                                                y(
                                                                    'div',
                                                                    {
                                                                        classMap: {
                                                                            'slds-grid': !0,
                                                                            'slds-wrap': !0,
                                                                            'slds-gutters': !0,
                                                                            'slds-p-horizontal_medium': !0,
                                                                        },
                                                                        key: 69,
                                                                    },
                                                                    [
                                                                        y(
                                                                            'div',
                                                                            {
                                                                                classMap: {
                                                                                    'slds-col': !0,
                                                                                    'slds-size_12-of-12': !0,
                                                                                    'slds-medium-size_6-of-12': !0,
                                                                                },
                                                                                key: 67,
                                                                            },
                                                                            [
                                                                                s(
                                                                                    'lightning-button',
                                                                                    E.a,
                                                                                    {
                                                                                        classMap: { 'slds-m-left_x-small': !0 },
                                                                                        styleMap: { paddingLeft: '10px' },
                                                                                        props: {
                                                                                            variant: 'brand',
                                                                                            label: t.allCustomLabelsUtil.OmniContinue,
                                                                                            title: t.allCustomLabelsUtil.OmniContinue,
                                                                                        },
                                                                                        key: 66,
                                                                                        on: { click: x || (n._m5 = f(t.handleContinueInvalidSfl)) },
                                                                                    },
                                                                                    [],
                                                                                ),
                                                                            ],
                                                                        ),
                                                                        y(
                                                                            'div',
                                                                            {
                                                                                classMap: {
                                                                                    'slds-col': !0,
                                                                                    'slds-size_12-of-12': !0,
                                                                                    'slds-medium-size_6-of-12': !0,
                                                                                },
                                                                                key: 68,
                                                                            },
                                                                            [],
                                                                        ),
                                                                    ],
                                                                ),
                                                            ]),
                                                        ]),
                                                    ],
                                                ),
                                                y(
                                                    'div',
                                                    {
                                                        classMap: { 'slds-col': !0, 'slds-size_12-of-12': !0, 'slds-medium-size_2-of-12': !0 },
                                                        key: 73,
                                                    },
                                                    [],
                                                ),
                                            ],
                                        ),
                              ]),
                    ]),
                ),
            ];
        }
        var X = Object(n.registerTemplate)(Q);
        (Q.stylesheets = []),
            Y && Q.stylesheets.push.apply(Q.stylesheets, Y),
            (Q.stylesheetTokens = {
                hostAttribute: 'vlocityomniscript-offplatformInlineExampleEnglish-_offplatformInlineExampleEnglish-host',
                shadowAttribute: 'vlocityomniscript-offplatformInlineExampleEnglish-_offplatformInlineExampleEnglish',
            });
        const Z = {
            userTimeZone: -420,
            userProfile: 'System Administrator',
            userName: 'oui_dailylwc@vlocity.com',
            userId: '0054T000000YBiOQAW',
            userCurrencyCode: 'USD',
            timeStamp: '2020-08-14T00:38:57.209Z',
            sOmniScriptId: 'a224T000000UcTKQA0',
            sobjPL: {},
            RPBundle: '',
            rMap: {},
            response: null,
            propSetMap: {
                currentLanguage: 'en_US',
                scrollBehavior: 'auto',
                stepChartPlacement: 'right',
                stylesheet: { lightningRtl: '', newportRtl: '', lightning: '', newport: '' },
                disableUnloadWarn: !0,
                errorMessage: { custom: [] },
                consoleTabIcon: 'custom:custom18',
                consoleTabTitle: null,
                rtpSeed: !1,
                showInputWidth: !1,
                currencyCode: '',
                autoFocus: !1,
                pubsub: !1,
                message: {},
                ssm: !1,
                wpm: !1,
                consoleTabLabel: 'New',
                cancelRedirectTemplateUrl: 'vlcCancelled.html',
                cancelRedirectPageName: 'OmniScriptCancelled',
                cancelSource: '%ContextId%',
                allowCancel: !0,
                cancelType: 'SObject',
                visualforcePagesAvailableInPreview: {},
                hideStepChart: !0,
                timeTracking: !1,
                knowledgeArticleTypeQueryFieldsMap: {},
                lkObjName: null,
                bLK: !1,
                enableKnowledge: !1,
                trackingCustomData: {},
                seedDataJSON: {},
                elementTypeToHTMLTemplateMapping: {},
                autoSaveOnStepNext: !1,
                saveURLPatterns: {},
                saveObjectId: '%ContextId%',
                saveContentEncoded: !1,
                saveForLaterRedirectTemplateUrl: 'vlcSaveForLaterAcknowledge.html',
                saveForLaterRedirectPageName: 'sflRedirect',
                saveExpireInDays: null,
                saveNameTemplate: null,
                allowSaveForLater: !1,
                persistentComponent: [
                    {
                        modalConfigurationSetting: {
                            modalSize: 'lg',
                            modalController: 'ModalProductCtrl',
                            modalHTMLTemplateId: 'vlcProductConfig.html',
                        },
                        itemsKey: 'cartItems',
                        id: 'vlcCart',
                        responseJSONNode: '',
                        responseJSONPath: '',
                        sendJSONNode: '',
                        sendJSONPath: '',
                        postTransformBundle: '',
                        preTransformBundle: '',
                        remoteOptions: { postTransformBundle: '', preTransformBundle: '' },
                        remoteTimeout: 3e4,
                        remoteMethod: '',
                        remoteClass: '',
                        label: '',
                        render: !1,
                    },
                    {
                        modalConfigurationSetting: { modalSize: 'lg', modalController: '', modalHTMLTemplateId: '' },
                        itemsKey: 'knowledgeItems',
                        id: 'vlcKnowledge',
                        postTransformBundle: '',
                        preTransformBundle: '',
                        remoteOptions: { postTransformBundle: '', preTransformBundle: '' },
                        remoteTimeout: 3e4,
                        remoteMethod: '',
                        remoteClass: '',
                        label: '',
                        dispOutsideOmni: !1,
                        render: !1,
                    },
                ],
            },
            prefillJSON: '{}',
            lwcId: '808955d9-5ab8-ef0d-5a75-9e063a7217d6',
            labelMap: { Email1: 'Step1:Email1', NavigateAction1: 'NavigateAction1', Step1: 'Step1' },
            labelKeyMap: {},
            errorMsg: '',
            error: 'OK',
            dMap: {},
            depSOPL: {},
            depCusPL: {},
            cusPL: {},
            children: [
                {
                    type: 'Step',
                    propSetMap: {
                        businessEvent: '',
                        businessCategory: '',
                        pubsub: !1,
                        message: {},
                        ssm: !1,
                        wpm: !1,
                        errorMessage: { default: null, custom: [] },
                        allowSaveForLater: !1,
                        chartLabel: null,
                        instructionKey: '',
                        HTMLTemplateId: '',
                        conditionType: 'Hide if False',
                        show: null,
                        knowledgeOptions: {
                            typeFilter: '',
                            remoteTimeout: 3e4,
                            dataCategoryCriteria: '',
                            keyword: '',
                            publishStatus: 'Online',
                            language: 'English',
                        },
                        remoteOptions: {},
                        remoteTimeout: 3e4,
                        remoteMethod: '',
                        remoteClass: '',
                        showPersistentComponent: [!0, !1],
                        instruction: '',
                        completeMessage: 'Are you sure you want to complete the script?',
                        completeLabel: 'Complete',
                        saveMessage: 'Are you sure you want to save it for later?',
                        saveLabel: 'Save for later',
                        cancelMessage: 'Are you sure?',
                        cancelLabel: 'Cancel',
                        nextWidth: 3,
                        nextLabel: 'Next',
                        previousWidth: 3,
                        previousLabel: 'Previous',
                        validationRequired: !0,
                        label: 'Request A Quote',
                        uiElements: { Step1: '', Email1: '' },
                        aggElements: {},
                    },
                    offSet: 0,
                    name: 'Step1',
                    level: 0,
                    indexInParent: 0,
                    bHasAttachment: !1,
                    bEmbed: !1,
                    response: null,
                    inheritShowProp: null,
                    children: [
                        {
                            response: null,
                            level: 1,
                            indexInParent: 0,
                            eleArray: [
                                {
                                    type: 'Email',
                                    rootIndex: 0,
                                    response: null,
                                    propSetMap: {
                                        disOnTplt: !1,
                                        hide: !1,
                                        HTMLTemplateId: '',
                                        debounceValue: 0,
                                        accessibleInFutureSteps: !1,
                                        conditionType: 'Hide if False',
                                        show: null,
                                        placeholder: 'you@email.com',
                                        ptrnErrText: '',
                                        pattern: '',
                                        helpText: '',
                                        help: !1,
                                        defaultValue: null,
                                        readOnly: !1,
                                        repeatLimit: null,
                                        repeatClone: !1,
                                        repeat: !1,
                                        required: !0,
                                        inputWidth: 12,
                                        showInputWidth: !1,
                                        label: 'Email',
                                        controlWidth: 12,
                                    },
                                    name: 'Email1',
                                    level: 1,
                                    JSONPath: 'Step1:Email1',
                                    indexInParent: 0,
                                    index: 0,
                                    children: [],
                                    bHasAttachment: !1,
                                    bEmail: !0,
                                    lwcId: 'lwc00-0',
                                },
                            ],
                            bHasAttachment: !1,
                        },
                    ],
                    bAccordionOpen: !0,
                    bAccordionActive: !0,
                    bStep: !0,
                    isStep: !0,
                    JSONPath: 'Step1',
                    lwcId: 'lwc0',
                },
                {
                    type: 'Navigate Action',
                    propSetMap: {
                        businessEvent: '',
                        businessCategory: '',
                        targetLWCLayout: 'lightning',
                        replace: !1,
                        iconPosition: 'left',
                        iconVariant: '',
                        iconName: '',
                        variant: 'brand',
                        targetId: '%ContextId%',
                        targetFilter: 'Recent',
                        loginAction: 'login',
                        recordAction: 'view',
                        objectAction: 'home',
                        targetType: 'Current Page',
                        message: { osSubmitted: 1 },
                        pubsub: !1,
                        ssm: !1,
                        wpm: !0,
                        HTMLTemplateId: '',
                        show: null,
                        validationRequired: 'Submit',
                        label: '',
                        controlWidth: 12,
                        aggElements: {},
                    },
                    offSet: 0,
                    name: 'NavigateAction1',
                    level: 0,
                    indexInParent: 1,
                    bHasAttachment: !1,
                    bEmbed: !1,
                    bNavigate: !0,
                    JSONPath: 'NavigateAction1',
                    lwcId: 'lwc1',
                },
            ],
            bReusable: !1,
            bpVersion: 2,
            bpType: 'offplatform',
            bpSubType: 'inlineExample',
            bpLang: 'English',
            bHasAttachment: !1,
            lwcVarMap: {},
        };
        var $ = [
            function(e, t, a) {
                return [
                    '.omni-spinner-container_wrapper',
                    t,
                    '{min-height:200px;position:relative}.footer-message',
                    t,
                    '{font-style:italic;font-weight:700;margin-top:10px}',
                ].join('');
            },
        ];
        function ee(e, t, a, n) {
            const { c: s, d: m, h: y, t: b, b: f, k: g, i: v, f: k } = e,
                { _m0: S, _m1: D, _m2: M, _m3: j, _m4: _, _m5: x } = n;
            return [
                y('div', { attrs: { dir: t._dir }, key: 75 }, [
                    t.hasErrors
                        ? s('lightning-layout', l.a, { props: { verticalAlign: 'stretch' }, key: 16 }, [
                              s(
                                  'lightning-layout-item',
                                  o.a,
                                  {
                                      classMap: { 'slds-text-align_center': !0, 'slds-p-around_small': !0 },
                                      props: { flexibility: 'auto', padding: 'around-small', size: '1' },
                                      key: 1,
                                  },
                                  [
                                      s(
                                          'lightning-icon',
                                          r.a,
                                          {
                                              props: { iconName: 'utility:error', alternativeText: 'Error!', variant: 'error', size: 'large' },
                                              key: 0,
                                          },
                                          [],
                                      ),
                                  ],
                              ),
                              s(
                                  'lightning-layout-item',
                                  o.a,
                                  { classMap: { 'custom-box': !0 }, props: { flexibility: 'auto', padding: 'around-small' }, key: 15 },
                                  [
                                      y('p', { classMap: { 'slds-text-heading_medium': !0 }, key: 2 }, [m(t.allCustomLabelsUtil.OmniScriptError)]),
                                      y('p', { classMap: { bold: !0 }, key: 3 }, [m(t._errorMsg)]),
                                      t._isActiveOs
                                          ? null
                                          : y('dl', { classMap: { 'slds-dl_inline': !0 }, key: 13 }, [
                                                y('dt', { classMap: { 'slds-dl_inline__label': !0 }, key: 5 }, [
                                                    y('strong', { key: 4 }, [m(t.allCustomLabelsUtil.OmniScriptType), b(':')]),
                                                ]),
                                                y('dd', { classMap: { 'slds-dl_inline__detail': !0 }, key: 6 }, [b('offplatform')]),
                                                y('dt', { classMap: { 'slds-dl_inline__label': !0 }, key: 8 }, [
                                                    y('strong', { key: 7 }, [m(t.allCustomLabelsUtil.OmniScriptSubType), b(':')]),
                                                ]),
                                                y('dd', { classMap: { 'slds-dl_inline__detail': !0 }, key: 9 }, [b('inlineExample')]),
                                                y('dt', { classMap: { 'slds-dl_inline__label': !0 }, key: 11 }, [
                                                    y('strong', { key: 10 }, [m(t.allCustomLabelsUtil.OmniScriptLang), b(':')]),
                                                ]),
                                                y('dd', { classMap: { 'slds-dl_inline__detail': !0 }, key: 12 }, [b('English')]),
                                            ]),
                                      y('p', { classMap: { 'footer-message': !0 }, key: 14 }, [m(t.allCustomLabelsUtil.OmniScriptNotFound2)]),
                                  ],
                              ),
                          ])
                        : null,
                    t.hasErrors
                        ? null
                        : y(
                              'div',
                              { classMap: { 'via-nds': !0 }, key: 74 },
                              k([
                                  t.compLoaded
                                      ? null
                                      : y('div', { classMap: { 'omni-spinner-container_wrapper': !0 }, key: 18 }, [
                                            s(
                                                'c-spinner',
                                                i.a,
                                                {
                                                    props: { variant: 'brand', alternativeText: 'Loading..', theme: t._theme, size: 'medium' },
                                                    key: 17,
                                                },
                                                [],
                                            ),
                                        ]),
                                  t.bSflValid && t.firstRender
                                      ? k([
                                            t.isLauncherVisible
                                                ? s(
                                                      'c-button',
                                                      d.a,
                                                      {
                                                          props: {
                                                              label: t.inlineLabel,
                                                              variant: t.inlineVariant,
                                                              theme: t._theme,
                                                              extraclass: 'nds-button_stretch',
                                                          },
                                                          key: 19,
                                                          on: { click: S || (n._m0 = f(t.setScriptVisibility)) },
                                                      },
                                                      [],
                                                  )
                                                : null,
                                            y('article', { className: t.containerClasses, key: 44 }, [
                                                y(
                                                    'div',
                                                    {
                                                        classMap: { 'nds-card__body': !0, 'nds-card__body_inner': !0, 'nds-m-top_medium': !0 },
                                                        key: 27,
                                                    },
                                                    k([
                                                        t.bSflAuto
                                                            ? s(
                                                                  'c-omniscript-save-for-later-acknowledge',
                                                                  u.a,
                                                                  { props: { result: t.bSflResult, layout: t.layout, auto: !0 }, key: 20 },
                                                                  [],
                                                              )
                                                            : null,
                                                        t.jsonDef.propSetMap.hideStepChart
                                                            ? null
                                                            : s(
                                                                  'c-omniscript-step-chart',
                                                                  p.a,
                                                                  {
                                                                      attrs: { 'data-omni-key': 'omniscriptStepChart' },
                                                                      props: {
                                                                          jsonDef: t.jsonDef,
                                                                          jsonData: t.jsonDef.response,
                                                                          props: t.stepChartProps,
                                                                          layout: t.layout,
                                                                          scriptHeaderDef: t.scriptHeaderDef,
                                                                      },
                                                                      key: 21,
                                                                  },
                                                                  [],
                                                              ),
                                                        t._isKbEnabledOnScript
                                                            ? s(
                                                                  'c-omniscript-knowledge-base',
                                                                  c.a,
                                                                  {
                                                                      attrs: {
                                                                          'data-omni-key': 'omniscriptKnowledgeBase',
                                                                          'data-stepchart-placement': t._stepChartPlacement,
                                                                      },
                                                                      props: {
                                                                          knowledgeOptions: t.kbOptions,
                                                                          layout: t.layout,
                                                                          omniscriptKey: t.scriptHeaderDef.omniscriptKey,
                                                                          kbLabel: t.knowledgeLabel,
                                                                      },
                                                                      key: 22,
                                                                  },
                                                                  [],
                                                              )
                                                            : null,
                                                        t.isPageLoading
                                                            ? s(
                                                                  'c-spinner',
                                                                  i.a,
                                                                  {
                                                                      props: {
                                                                          variant: 'brand',
                                                                          alternativeText: 'Loading...',
                                                                          extraouterclass: 'nds-theme_default',
                                                                          theme: t._theme,
                                                                          message: t.spinnerMessage,
                                                                          size: 'medium',
                                                                      },
                                                                      key: 23,
                                                                  },
                                                                  [],
                                                              )
                                                            : null,
                                                        v(t.jsonDef.children, function(e, a) {
                                                            return [
                                                                e.bStep
                                                                    ? s(
                                                                          'c-omniscript-step',
                                                                          h.a,
                                                                          {
                                                                              attrs: { 'data-omni-key': e.name },
                                                                              props: {
                                                                                  jsonDef: e,
                                                                                  jsonData: t.jsonDef.response,
                                                                                  jsonDataStr: t.jsonDataStr,
                                                                                  layout: t.layout,
                                                                                  resume: t.resume,
                                                                                  scriptHeaderDef: t.scriptHeaderDef,
                                                                                  runMode: t.runMode,
                                                                                  seedJson: t.jsonDef.propSetMap.seedDataJSON,
                                                                              },
                                                                              key: g(25, e.lwcId),
                                                                          },
                                                                          v(e.children, function(e, a) {
                                                                              return v(e.eleArray, function(e, a) {
                                                                                  return e.bEmail
                                                                                      ? s(
                                                                                            'c-omniscript-email',
                                                                                            I.a,
                                                                                            {
                                                                                                attrs: { 'data-omni-key': e.name },
                                                                                                props: {
                                                                                                    jsonDef: e,
                                                                                                    jsonData: t.jsonDef.response,
                                                                                                    jsonDataStr: t.jsonDataStr,
                                                                                                    layout: t.layout,
                                                                                                    resume: t.resume,
                                                                                                    scriptHeaderDef: t.scriptHeaderDef,
                                                                                                    runMode: t.runMode,
                                                                                                    seedJson: t.jsonDef.propSetMap.seedDataJSON,
                                                                                                },
                                                                                                key: g(24, e.lwcId),
                                                                                            },
                                                                                            [],
                                                                                        )
                                                                                      : null;
                                                                              });
                                                                          }),
                                                                      )
                                                                    : null,
                                                                e.bNavigate
                                                                    ? s(
                                                                          'c-omniscript-navigate-action',
                                                                          O.a,
                                                                          {
                                                                              attrs: { 'data-omni-key': e.name },
                                                                              props: {
                                                                                  jsonDef: e,
                                                                                  jsonData: t.jsonDef.response,
                                                                                  jsonDataStr: t.jsonDataStr,
                                                                                  layout: t.layout,
                                                                                  resume: t.resume,
                                                                                  scriptHeaderDef: t.scriptHeaderDef,
                                                                                  runMode: t.runMode,
                                                                              },
                                                                              key: g(26, e.lwcId),
                                                                          },
                                                                          [],
                                                                      )
                                                                    : null,
                                                            ];
                                                        }),
                                                    ]),
                                                ),
                                                y('div', { classMap: { 'nds-m-around_small': !0 }, key: 43 }, [
                                                    y('div', { classMap: { 'nds-grid': !0, 'nds-grid_align-center': !0 }, key: 32 }, [
                                                        y(
                                                            'div',
                                                            {
                                                                classMap: {
                                                                    'nds-grid': !0,
                                                                    'nds-grid_align-center': !0,
                                                                    'nds-wrap': !0,
                                                                    'nds-button-group-row': !0,
                                                                    'nds-size_1-of-1': !0,
                                                                    'nds-medium-size_8-of-12': !0,
                                                                    'nds-p-horizontal_medium': !0,
                                                                },
                                                                key: 31,
                                                            },
                                                            [
                                                                t.hasNext && t._isSeoEnabled
                                                                    ? s(
                                                                          'c-navigate-action',
                                                                          A.b,
                                                                          {
                                                                              className: t.navButton.next.classes,
                                                                              props: {
                                                                                  targetType: 'Current Page',
                                                                                  useHref: !0,
                                                                                  targetParams: t.navButton.next.targetParams,
                                                                              },
                                                                              key: 29,
                                                                          },
                                                                          [
                                                                              s(
                                                                                  'c-button',
                                                                                  d.a,
                                                                                  {
                                                                                      props: {
                                                                                          type: 'button',
                                                                                          label: t.navButton.next.label,
                                                                                          variant: 'brand',
                                                                                          extraclass:
                                                                                              'slds-size_1-of-1 slds-p-horizontal_none slds-text-align_center',
                                                                                          theme: t._theme,
                                                                                      },
                                                                                      key: 28,
                                                                                  },
                                                                                  [],
                                                                              ),
                                                                          ],
                                                                      )
                                                                    : null,
                                                                t.hasNext
                                                                    ? t._isSeoEnabled
                                                                        ? null
                                                                        : s(
                                                                              'c-button',
                                                                              d.a,
                                                                              {
                                                                                  className: t.navButton.next.classes,
                                                                                  props: {
                                                                                      type: 'button',
                                                                                      variant: 'brand',
                                                                                      label: t.navButton.next.label,
                                                                                      extraclass:
                                                                                          'nds-button_stretch nds-p-around_xx-small nds-size_1-of-1',
                                                                                      theme: t._theme,
                                                                                  },
                                                                                  key: 30,
                                                                                  on: { click: D || (n._m1 = f(t.nextStep)) },
                                                                              },
                                                                              [],
                                                                          )
                                                                    : null,
                                                            ],
                                                        ),
                                                    ]),
                                                    y('div', { classMap: { 'nds-grid': !0, 'nds-grid_align-center': !0 }, key: 37 }, [
                                                        y(
                                                            'div',
                                                            {
                                                                classMap: {
                                                                    'nds-grid': !0,
                                                                    'nds-grid_align-center': !0,
                                                                    'nds-wrap': !0,
                                                                    'nds-button-group-row': !0,
                                                                    'nds-size_1-of-1': !0,
                                                                    'nds-medium-size_8-of-12': !0,
                                                                    'nds-p-horizontal_medium': !0,
                                                                },
                                                                key: 36,
                                                            },
                                                            [
                                                                t.hasPrev && t._isSeoEnabled
                                                                    ? s(
                                                                          'c-navigate-action',
                                                                          A.b,
                                                                          {
                                                                              className: t.navButton.previous.classes,
                                                                              props: {
                                                                                  targetType: 'Current Page',
                                                                                  useHref: !0,
                                                                                  targetParams: t.navButton.previous.targetParams,
                                                                              },
                                                                              key: 34,
                                                                          },
                                                                          [
                                                                              s(
                                                                                  'c-button',
                                                                                  d.a,
                                                                                  {
                                                                                      props: {
                                                                                          type: 'button',
                                                                                          variant: 'neutral',
                                                                                          label: t.navButton.previous.label,
                                                                                          extraclass:
                                                                                              'nds-button_stretch nds-p-around_xx-small nds-size_1-of-1',
                                                                                          theme: t._theme,
                                                                                      },
                                                                                      key: 33,
                                                                                  },
                                                                                  [],
                                                                              ),
                                                                          ],
                                                                      )
                                                                    : null,
                                                                t.hasPrev
                                                                    ? t._isSeoEnabled
                                                                        ? null
                                                                        : s(
                                                                              'c-button',
                                                                              d.a,
                                                                              {
                                                                                  className: t.navButton.previous.classes,
                                                                                  props: {
                                                                                      type: 'button',
                                                                                      variant: 'neutral',
                                                                                      label: t.navButton.previous.label,
                                                                                      extraclass:
                                                                                          'nds-button_stretch nds-p-around_xx-small nds-size_1-of-1',
                                                                                      theme: t._theme,
                                                                                  },
                                                                                  key: 35,
                                                                                  on: { click: M || (n._m2 = f(t.prevStep)) },
                                                                              },
                                                                              [],
                                                                          )
                                                                    : null,
                                                            ],
                                                        ),
                                                    ]),
                                                    y('div', { classMap: { 'nds-grid': !0, 'nds-grid_align-center': !0 }, key: 42 }, [
                                                        y(
                                                            'div',
                                                            {
                                                                classMap: {
                                                                    'nds-grid': !0,
                                                                    'nds-grid_align-center': !0,
                                                                    'nds-wrap': !0,
                                                                    'nds-button-group-row': !0,
                                                                    'nds-size_1-of-1': !0,
                                                                    'nds-medium-size_8-of-12': !0,
                                                                    'nds-p-horizontal_medium': !0,
                                                                },
                                                                key: 41,
                                                            },
                                                            [
                                                                t.cancelAction
                                                                    ? s(
                                                                          'c-button',
                                                                          d.a,
                                                                          {
                                                                              className: t.navButton.save.classes,
                                                                              props: {
                                                                                  type: 'button',
                                                                                  label: t.cancelLabel,
                                                                                  variant: 'base',
                                                                                  extraclass:
                                                                                      'nds-button_stretch nds-p-around_xx-small nds-size_1-of-1',
                                                                                  theme: t._theme,
                                                                              },
                                                                              key: 38,
                                                                              on: { click: j || (n._m3 = f(t.cancel)) },
                                                                          },
                                                                          [],
                                                                      )
                                                                    : null,
                                                                s(
                                                                    'c-navigate-action',
                                                                    A.b,
                                                                    {
                                                                        attrs: { 'data-omni-key': 'DEFAULT-CANCEL' },
                                                                        props: {
                                                                            targetType: t._defaultCancel.type,
                                                                            targetParams: t._defaultCancel.params,
                                                                        },
                                                                        key: 39,
                                                                    },
                                                                    [],
                                                                ),
                                                                t.allowSfl
                                                                    ? s(
                                                                          'c-button',
                                                                          d.a,
                                                                          {
                                                                              className: t.navButton.save.classes,
                                                                              props: {
                                                                                  type: 'button',
                                                                                  variant: 'base',
                                                                                  label: t.navButton.save.label,
                                                                                  extraclass:
                                                                                      'nds-button_stretch nds-p-around_xx-small nds-size_1-of-1',
                                                                                  theme: t._theme,
                                                                              },
                                                                              key: 40,
                                                                              on: { click: _ || (n._m4 = f(t.saveForLater)) },
                                                                          },
                                                                          [],
                                                                      )
                                                                    : null,
                                                            ],
                                                        ),
                                                    ]),
                                                ]),
                                            ]),
                                            t.bSflComplete
                                                ? s(
                                                      'c-omniscript-save-for-later-acknowledge',
                                                      u.a,
                                                      { props: { result: t.bSflResult, layout: t.layout }, key: 45 },
                                                      [],
                                                  )
                                                : null,
                                            v(t.modalEvents, function(e, a) {
                                                return s(
                                                    'c-omniscript-modal',
                                                    P.a,
                                                    {
                                                        attrs: { 'data-omni-key': 'omnimodal' },
                                                        props: {
                                                            type: e.type,
                                                            layout: t.layout,
                                                            triggeredOnStep: e.triggeredOnStep,
                                                            hideFooter: e.hideFooter,
                                                            hideHeader: e.hideHeader,
                                                        },
                                                        key: g(54, e.modalHeader),
                                                    },
                                                    [
                                                        y('div', { attrs: { slot: 'header' }, key: 47 }, [y('h1', { key: 46 }, [m(e.modalHeader)])]),
                                                        y('div', { attrs: { slot: 'content' }, key: 49 }, [
                                                            s(
                                                                'c-omniscript-formatted-rich-text',
                                                                N.a,
                                                                { props: { value: e.modalMessage, disableLinkify: !0 }, key: 48 },
                                                                [],
                                                            ),
                                                        ]),
                                                        y('div', { attrs: { slot: 'footer' }, key: 53 }, [
                                                            y(
                                                                'ul',
                                                                { classMap: { 'slds-button-group-row': !0 }, key: 52 },
                                                                v(e.buttons, function(e, t) {
                                                                    return e.label
                                                                        ? y('li', { classMap: { 'slds-button-group-item': !0 }, key: g(51, e.key) }, [
                                                                              s(
                                                                                  'lightning-button',
                                                                                  E.a,
                                                                                  {
                                                                                      props: { label: e.label, value: a },
                                                                                      key: 50,
                                                                                      on: { click: f(e.handleClick) },
                                                                                  },
                                                                                  [],
                                                                              ),
                                                                          ])
                                                                        : null;
                                                                }),
                                                            ),
                                                        ]),
                                                    ],
                                                );
                                            }),
                                        ])
                                      : [],
                                  t.bSflValid
                                      ? null
                                      : y(
                                            'div',
                                            {
                                                classMap: { 'nds-grid': !0, 'nds-wrap': !0, 'nds-gutters': !0, 'nds-p-horizontal_medium': !0 },
                                                key: 73,
                                            },
                                            [
                                                y(
                                                    'div',
                                                    { classMap: { 'nds-col': !0, 'nds-size_12-of-12': !0, 'nds-medium-size_2-of-12': !0 }, key: 55 },
                                                    [],
                                                ),
                                                y(
                                                    'div',
                                                    { classMap: { 'nds-col': !0, 'nds-size_12-of-12': !0, 'nds-medium-size_8-of-12': !0 }, key: 71 },
                                                    [
                                                        y('div', { classMap: { 'nds-card': !0, 'omniscript-save-for-later': !0 }, key: 70 }, [
                                                            y('div', { classMap: { 'nds-card__header': !0, 'nds-grid': !0 }, key: 62 }, [
                                                                y(
                                                                    'header',
                                                                    {
                                                                        classMap: {
                                                                            'nds-media': !0,
                                                                            'nds-media_center': !0,
                                                                            'nds-has-flexi-truncate': !0,
                                                                        },
                                                                        key: 61,
                                                                    },
                                                                    [
                                                                        y('div', { classMap: { 'nds-media__figure': !0 }, key: 57 }, [
                                                                            s(
                                                                                'lightning-icon',
                                                                                r.a,
                                                                                {
                                                                                    props: {
                                                                                        iconName: 'utility:warning',
                                                                                        alternativeText: 'Ok',
                                                                                        size: 'large',
                                                                                    },
                                                                                    key: 56,
                                                                                },
                                                                                [],
                                                                            ),
                                                                        ]),
                                                                        y('div', { classMap: { 'nds-media__body': !0 }, key: 60 }, [
                                                                            y('h2', { classMap: { 'nds-card__header-title': !0 }, key: 59 }, [
                                                                                y('span', { classMap: { 'nds-text-heading_large': !0 }, key: 58 }, [
                                                                                    m(t.allCustomLabelsUtil.OmniInvalidLwcComponent),
                                                                                ]),
                                                                            ]),
                                                                        ]),
                                                                    ],
                                                                ),
                                                            ]),
                                                            y('div', { classMap: { 'nds-card__body': !0, 'nds-card__body_inner': !0 }, key: 69 }, [
                                                                y('p', { classMap: { bold: !0 }, key: 63 }, [
                                                                    m(t.allCustomLabelsUtil.OmniInvalidLwcComponentMessage),
                                                                ]),
                                                                y('p', { key: 64 }, [b(' ')]),
                                                                y('div', { classMap: { 'nds-m-around_small': !0 }, key: 68 }, [
                                                                    y('div', { classMap: { 'nds-grid': !0 }, key: 67 }, [
                                                                        y(
                                                                            'div',
                                                                            {
                                                                                classMap: {
                                                                                    'nds-grid': !0,
                                                                                    'nds-wrap': !0,
                                                                                    'nds-button-group-row': !0,
                                                                                    'nds-size_1-of-1': !0,
                                                                                    'nds-medium-size_8-of-12': !0,
                                                                                    'nds-p-horizontal_medium': !0,
                                                                                },
                                                                                key: 66,
                                                                            },
                                                                            [
                                                                                s(
                                                                                    'c-button',
                                                                                    d.a,
                                                                                    {
                                                                                        classMap: { 'nds-m-left_x-small': !0 },
                                                                                        props: {
                                                                                            type: 'button',
                                                                                            variant: 'brand',
                                                                                            label: t.allCustomLabelsUtil.OmniContinue,
                                                                                            extraclass:
                                                                                                'nds-button_stretch nds-p-around_xx-small nds-size_1-of-1',
                                                                                            theme: t._theme,
                                                                                        },
                                                                                        key: 65,
                                                                                        on: { click: x || (n._m5 = f(t.handleContinueInvalidSfl)) },
                                                                                    },
                                                                                    [],
                                                                                ),
                                                                            ],
                                                                        ),
                                                                    ]),
                                                                ]),
                                                            ]),
                                                        ]),
                                                    ],
                                                ),
                                                y(
                                                    'div',
                                                    { classMap: { 'nds-col': !0, 'nds-size_12-of-12': !0, 'nds-medium-size_2-of-12': !0 }, key: 72 },
                                                    [],
                                                ),
                                            ],
                                        ),
                              ]),
                          ),
                ]),
            ];
        }
        var te = Object(n.registerTemplate)(ee);
        (ee.stylesheets = []),
            $ && ee.stylesheets.push.apply(ee.stylesheets, $),
            (ee.stylesheetTokens = {
                hostAttribute: 'vlocityomniscript-offplatformInlineExampleEnglish-_offplatformInlineExampleEnglish_nds-host',
                shadowAttribute: 'vlocityomniscript-offplatformInlineExampleEnglish-_offplatformInlineExampleEnglish_nds',
            });
        class ae extends J.a {
            constructor(...e) {
                super(...e),
                    (this.jsonDef = {}),
                    (this.resume = !1),
                    (this._inline = !1),
                    (this.inlineLabel = void 0),
                    (this.inlineVariant = void 0),
                    (this.layout = void 0),
                    (this.recordId = void 0);
            }
            get inline() {
                return this._inline;
            }
            set inline(e) {
                this._inline = 'true' === String(e);
            }
            get dir() {
                return this._dir;
            }
            set dir(e) {
                e && ((this._isRTL = 'rtl' === e), (this._dir = this._isRTL ? 'rtl' : 'ltr'));
            }
            set connection(e) {
                e && Object(B.o)(e);
            }
            get connection() {
                return Object(B.j)();
            }
            connectedCallback() {
                this.checkResume();
                const e = () => {
                    (this.jsonDef = this.instanceId
                        ? {
                              sOmniScriptId: Z.sOmniScriptId,
                              lwcId: Z.lwcId,
                              labelMap: Z.labelMap,
                              propSetMap: Z.propSetMap,
                              bpType: Z.bpType,
                              bpSubType: Z.bpSubType,
                              bpLang: Z.bpLang,
                              bpVersion: Z.bpVersion,
                          }
                        : JSON.parse(JSON.stringify(Z))),
                        (this.resume = !!this.instanceId),
                        super.connectedCallback();
                };
                if (Object(B.k)()) {
                    const t = new Date(),
                        a = () => {
                            const n = Math.round((new Date() - t) / 1e3),
                                s = Object(B.j)();
                            if (!(null != s) && n < 60) return this.waitForConnection(500).then(a);
                            e();
                        };
                    this.dispatchEvent(new CustomEvent('omnioutcomponentready', { bubbles: !0, composed: !0, detail: { omnioutcomponent: !0 } })),
                        this.runMode !== W.b.OFFLINE || this.resume ? this.waitForConnection(500).then(a) : e();
                } else e();
            }
            handleContinueInvalidSfl() {
                (this.jsonDef = JSON.parse(JSON.stringify(Z))), super.handleContinueInvalidSfl();
            }
            waitForConnection(e) {
                return new Promise(t => setTimeout(t, e));
            }
            render() {
                return 'newport' === this.layout ? te : X;
            }
        }
        Object(n.registerDecorators)(ae, {
            publicProps: {
                inline: { config: 3 },
                inlineLabel: { config: 0 },
                inlineVariant: { config: 0 },
                layout: { config: 0 },
                recordId: { config: 0 },
                dir: { config: 3 },
                connection: { config: 3 },
            },
            track: { jsonDef: 1, resume: 1 },
            fields: ['_inline'],
        });
        var ne = Object(n.registerComponent)(ae, { tmpl: X });
        const se = { 'Service Worker': 'serviceWorker' in navigator };
        Object.keys(se).some(e => !se[e])
            ? (function() {
                  const { outdated: e } = window;
                  e.style.display = 'unset';
                  let t = "This browser doesn't support all the required features";
                  t += '<ul>';
                  for (const [e, a] of Object.entries(se)) t += `<li><b>${e}:<b> ${a ? '✅' : '❌'}</li>`;
                  (t += '</ul>'), (e.querySelector('.unsupported_message').innerHTML = t);
              })()
            : (customElements.define('vlocityomniscript-offplatform-life-insurance-example2-english', Object(n.buildCustomElementConstructor)(G)),
              customElements.define('vlocityomniscript-offplatform-inline-example-english', Object(n.buildCustomElementConstructor)(ne)));
    },
});
