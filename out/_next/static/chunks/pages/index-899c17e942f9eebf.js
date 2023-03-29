(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    8312: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/',
        function () {
          return n(2358);
        },
      ]);
    },
    3740: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var i = n(6495).Z,
        r = n(2648).Z,
        a = n(1598).Z,
        o = n(7273).Z,
        s = a(n(7294)),
        l = r(n(2636)),
        c = n(7757),
        d = n(3735),
        u = n(3341);
      n(4210);
      var f = r(n(7746));
      let p = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        path: '/nextjs-boilerplate/_next/image',
        loader: 'default',
        dangerouslyAllowSVG: !1,
        unoptimized: !0,
      };
      function m(e) {
        return void 0 !== e.default;
      }
      function h(e) {
        return 'number' == typeof e || void 0 === e
          ? e
          : 'string' == typeof e && /^[0-9]+$/.test(e)
          ? parseInt(e, 10)
          : NaN;
      }
      function g(e, t, n, r, a, o, s) {
        if (!e || e['data-loaded-src'] === t) return;
        e['data-loaded-src'] = t;
        let l = 'decode' in e ? e.decode() : Promise.resolve();
        l.catch(() => {}).then(() => {
          if (e.parentElement && e.isConnected) {
            if (('blur' === n && o(!0), null == r ? void 0 : r.current)) {
              let t = new Event('load');
              Object.defineProperty(t, 'target', { writable: !1, value: e });
              let n = !1,
                a = !1;
              r.current(
                i({}, t, {
                  nativeEvent: t,
                  currentTarget: e,
                  target: e,
                  isDefaultPrevented: () => n,
                  isPropagationStopped: () => a,
                  persist: () => {},
                  preventDefault: () => {
                    (n = !0), t.preventDefault();
                  },
                  stopPropagation: () => {
                    (a = !0), t.stopPropagation();
                  },
                })
              );
            }
            (null == a ? void 0 : a.current) && a.current(e);
          }
        });
      }
      let x = s.forwardRef((e, t) => {
          var {
              imgAttributes: n,
              heightInt: r,
              widthInt: a,
              qualityInt: l,
              className: c,
              imgStyle: d,
              blurStyle: u,
              isLazy: f,
              fill: p,
              placeholder: m,
              loading: h,
              srcString: x,
              config: v,
              unoptimized: j,
              loader: _,
              onLoadRef: b,
              onLoadingCompleteRef: w,
              setBlurComplete: y,
              setShowAltText: E,
              onLoad: S,
              onError: C,
            } = e,
            N = o(e, [
              'imgAttributes',
              'heightInt',
              'widthInt',
              'qualityInt',
              'className',
              'imgStyle',
              'blurStyle',
              'isLazy',
              'fill',
              'placeholder',
              'loading',
              'srcString',
              'config',
              'unoptimized',
              'loader',
              'onLoadRef',
              'onLoadingCompleteRef',
              'setBlurComplete',
              'setShowAltText',
              'onLoad',
              'onError',
            ]);
          return (
            (h = f ? 'lazy' : h),
            s.default.createElement(
              s.default.Fragment,
              null,
              s.default.createElement(
                'img',
                Object.assign(
                  {},
                  N,
                  {
                    loading: h,
                    width: a,
                    height: r,
                    decoding: 'async',
                    'data-nimg': p ? 'fill' : '1',
                    className: c,
                    style: i({}, d, u),
                  },
                  n,
                  {
                    ref: s.useCallback(
                      e => {
                        t && ('function' == typeof t ? t(e) : 'object' == typeof t && (t.current = e)),
                          e && (C && (e.src = e.src), e.complete && g(e, x, m, b, w, y, j));
                      },
                      [x, m, b, w, y, C, j, t]
                    ),
                    onLoad: e => {
                      let t = e.currentTarget;
                      g(t, x, m, b, w, y, j);
                    },
                    onError: e => {
                      E(!0), 'blur' === m && y(!0), C && C(e);
                    },
                  }
                )
              )
            )
          );
        }),
        v = s.forwardRef((e, t) => {
          let n, r;
          var a,
            {
              src: g,
              sizes: v,
              unoptimized: j = !1,
              priority: _ = !1,
              loading: b,
              className: w,
              quality: y,
              width: E,
              height: S,
              fill: C,
              style: N,
              onLoad: z,
              onLoadingComplete: k,
              placeholder: R = 'empty',
              blurDataURL: L,
              layout: P,
              objectFit: A,
              objectPosition: O,
              lazyBoundary: I,
              lazyRoot: M,
            } = e,
            D = o(e, [
              'src',
              'sizes',
              'unoptimized',
              'priority',
              'loading',
              'className',
              'quality',
              'width',
              'height',
              'fill',
              'style',
              'onLoad',
              'onLoadingComplete',
              'placeholder',
              'blurDataURL',
              'layout',
              'objectFit',
              'objectPosition',
              'lazyBoundary',
              'lazyRoot',
            ]);
          let F = s.useContext(u.ImageConfigContext),
            H = s.useMemo(() => {
              let e = p || F || d.imageConfigDefault,
                t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
                n = e.deviceSizes.sort((e, t) => e - t);
              return i({}, e, { allSizes: t, deviceSizes: n });
            }, [F]),
            T = D,
            B = T.loader || f.default;
          delete T.loader;
          let W = '__next_img_default' in B;
          if (W) {
            if ('custom' === H.loader)
              throw Error(
                'Image with src "'.concat(g, '" is missing "loader" prop.') +
                  '\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
              );
          } else {
            let e = B;
            B = t => {
              let { config: n } = t,
                i = o(t, ['config']);
              return e(i);
            };
          }
          if (P) {
            'fill' === P && (C = !0);
            let e = { intrinsic: { maxWidth: '100%', height: 'auto' }, responsive: { width: '100%', height: 'auto' } }[
              P
            ];
            e && (N = i({}, N, e));
            let t = { responsive: '100vw', fill: '100vw' }[P];
            t && !v && (v = t);
          }
          let G = '',
            U = h(E),
            V = h(S);
          if ('object' == typeof (a = g) && (m(a) || void 0 !== a.src)) {
            let e = m(g) ? g.default : g;
            if (!e.src)
              throw Error(
                'An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received '.concat(
                  JSON.stringify(e)
                )
              );
            if (!e.height || !e.width)
              throw Error(
                'An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received '.concat(
                  JSON.stringify(e)
                )
              );
            if (((n = e.blurWidth), (r = e.blurHeight), (L = L || e.blurDataURL), (G = e.src), !C)) {
              if (U || V) {
                if (U && !V) {
                  let t = U / e.width;
                  V = Math.round(e.height * t);
                } else if (!U && V) {
                  let t = V / e.height;
                  U = Math.round(e.width * t);
                }
              } else (U = e.width), (V = e.height);
            }
          }
          let q = !_ && ('lazy' === b || void 0 === b);
          ((g = 'string' == typeof g ? g : G).startsWith('data:') || g.startsWith('blob:')) && ((j = !0), (q = !1)),
            H.unoptimized && (j = !0),
            W && g.endsWith('.svg') && !H.dangerouslyAllowSVG && (j = !0);
          let [Z, J] = s.useState(!1),
            [X, Y] = s.useState(!1),
            $ = h(y),
            K = Object.assign(
              C
                ? {
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    objectFit: A,
                    objectPosition: O,
                  }
                : {},
              X ? {} : { color: 'transparent' },
              N
            ),
            Q =
              'blur' === R && L && !Z
                ? {
                    backgroundSize: K.objectFit || 'cover',
                    backgroundPosition: K.objectPosition || '50% 50%',
                    backgroundRepeat: 'no-repeat',
                    backgroundImage: 'url("data:image/svg+xml;charset=utf-8,'.concat(
                      c.getImageBlurSvg({
                        widthInt: U,
                        heightInt: V,
                        blurWidth: n,
                        blurHeight: r,
                        blurDataURL: L,
                        objectFit: K.objectFit,
                      }),
                      '")'
                    ),
                  }
                : {},
            ee = (function (e) {
              let { config: t, src: n, unoptimized: i, width: r, quality: a, sizes: o, loader: s } = e;
              if (i) return { src: n, srcSet: void 0, sizes: void 0 };
              let { widths: l, kind: c } = (function (e, t, n) {
                  let { deviceSizes: i, allSizes: r } = e;
                  if (n) {
                    let e = /(^|\s)(1?\d?\d)vw/g,
                      t = [];
                    for (let i; (i = e.exec(n)); i) t.push(parseInt(i[2]));
                    if (t.length) {
                      let e = 0.01 * Math.min(...t);
                      return { widths: r.filter(t => t >= i[0] * e), kind: 'w' };
                    }
                    return { widths: r, kind: 'w' };
                  }
                  if ('number' != typeof t) return { widths: i, kind: 'w' };
                  let a = [...new Set([t, 2 * t].map(e => r.find(t => t >= e) || r[r.length - 1]))];
                  return { widths: a, kind: 'x' };
                })(t, r, o),
                d = l.length - 1;
              return {
                sizes: o || 'w' !== c ? o : '100vw',
                srcSet: l
                  .map((e, i) =>
                    ''
                      .concat(s({ config: t, src: n, quality: a, width: e }), ' ')
                      .concat('w' === c ? e : i + 1)
                      .concat(c)
                  )
                  .join(', '),
                src: s({ config: t, src: n, quality: a, width: l[d] }),
              };
            })({ config: H, src: g, unoptimized: j, width: U, quality: $, sizes: v, loader: B }),
            et = g,
            en = { imageSrcSet: ee.srcSet, imageSizes: ee.sizes, crossOrigin: T.crossOrigin },
            ei = s.useRef(z);
          s.useEffect(() => {
            ei.current = z;
          }, [z]);
          let er = s.useRef(k);
          s.useEffect(() => {
            er.current = k;
          }, [k]);
          let ea = i(
            {
              isLazy: q,
              imgAttributes: ee,
              heightInt: V,
              widthInt: U,
              qualityInt: $,
              className: w,
              imgStyle: K,
              blurStyle: Q,
              loading: b,
              config: H,
              fill: C,
              unoptimized: j,
              placeholder: R,
              loader: B,
              srcString: et,
              onLoadRef: ei,
              onLoadingCompleteRef: er,
              setBlurComplete: J,
              setShowAltText: Y,
            },
            T
          );
          return s.default.createElement(
            s.default.Fragment,
            null,
            s.default.createElement(x, Object.assign({}, ea, { ref: t })),
            _
              ? s.default.createElement(
                  l.default,
                  null,
                  s.default.createElement(
                    'link',
                    Object.assign(
                      {
                        key: '__nimg-' + ee.src + ee.srcSet + ee.sizes,
                        rel: 'preload',
                        as: 'image',
                        href: ee.srcSet ? void 0 : ee.src,
                      },
                      en
                    )
                  )
                )
              : null
          );
        });
      (t.default = v),
        ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, '__esModule', { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    7757: function (e, t) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.getImageBlurSvg = function (e) {
          let { widthInt: t, heightInt: n, blurWidth: i, blurHeight: r, blurDataURL: a, objectFit: o } = e,
            s = i || t,
            l = r || n,
            c = a.startsWith('data:image/jpeg')
              ? "%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%"
              : '';
          return s && l
            ? "%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 "
                .concat(s, ' ')
                .concat(l, "'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='")
                .concat(i && r ? '1' : '20', "'/%3E")
                .concat(
                  c,
                  "%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='"
                )
                .concat(a, "'/%3E%3C/svg%3E")
            : "%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='"
                .concat(
                  'contain' === o ? 'xMidYMid' : 'cover' === o ? 'xMidYMid slice' : 'none',
                  "' x='0' y='0' height='100%25' width='100%25' href='"
                )
                .concat(a, "'/%3E%3C/svg%3E");
        });
    },
    7746: function (e, t) {
      'use strict';
      function n(e) {
        let { config: t, src: n, width: i, quality: r } = e;
        return ''
          .concat(t.path, '?url=')
          .concat(encodeURIComponent(n), '&w=')
          .concat(i, '&q=')
          .concat(r || 75);
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0),
        (n.__next_img_default = !0),
        (t.default = n);
    },
    2358: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          default: function () {
            return _;
          },
        });
      var i = n(5893);
      n(7294);
      var r = n(9008),
        a = n.n(r);
      let o = e => {
        let { title: t = '' } = e;
        return (0, i.jsx)(a(), {
          children: (0, i.jsx)('title', { children: t ? ''.concat(t, ' | My App') : 'My App' }),
        });
      };
      var s = n(5675),
        l = n.n(s),
        c = n(4108),
        d = n.n(c);
      let u = () =>
          (0, i.jsx)('footer', {
            className: d().container,
            children: (0, i.jsxs)('a', {
              href: 'https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
              target: '_blank',
              rel: 'noopener noreferrer',
              children: [
                'Powered by ',
                (0, i.jsx)(l(), { src: '/vercel.svg', alt: 'Vercel Logo', width: 100, height: 24, priority: !0 }),
              ],
            }),
          }),
        f = () =>
          (0, i.jsxs)(a(), {
            children: [
              (0, i.jsx)('link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' }),
              (0, i.jsx)('link', {
                rel: 'icon',
                type: 'image/png',
                sizes: '32x32',
                href: '/favicon/favicon-32x32.png',
              }),
              (0, i.jsx)('link', {
                rel: 'icon',
                type: 'image/png',
                sizes: '16x16',
                href: '/favicon/favicon-16x16.png',
              }),
              (0, i.jsx)('link', { rel: 'manifest', href: '/favicon/site.webmanifest' }),
              (0, i.jsx)('link', { rel: 'mask-icon', href: '/favicon/safari-pinned-tab.svg', color: '#000000' }),
              (0, i.jsx)('link', { rel: 'shortcut icon', href: '/favicon/favicon.ico' }),
              (0, i.jsx)('meta', { name: 'msapplication-TileColor', content: '#000000' }),
              (0, i.jsx)('meta', { name: 'msapplication-config', content: '/favicon/browserconfig.xml' }),
              (0, i.jsx)('meta', { name: 'theme-color', content: '#000' }),
              (0, i.jsx)('link', { rel: 'alternate', type: 'application/rss+xml', href: '/feed.xml' }),
              (0, i.jsx)('meta', { name: 'description', content: 'Cool description for my app.' }),
              (0, i.jsx)('meta', { property: 'og:image', content: '/logo/logo-sharing.png' }),
            ],
          });
      var p = n(353),
        m = n.n(p);
      let h = e => {
        let { title: t, children: n } = e;
        return (0, i.jsxs)('div', {
          className: m().container,
          children: [
            (0, i.jsx)(f, {}),
            (0, i.jsx)(o, { title: t }),
            (0, i.jsx)('main', { className: m().main, children: n }),
            (0, i.jsx)(u, {}),
          ],
        });
      };
      var g = n(83),
        x = n.n(g);
      let v = () =>
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsxs)('h1', {
                className: x().title,
                children: ['Welcome to ', (0, i.jsx)('a', { href: 'https://nextjs.org', children: 'Next.js!' })],
              }),
              (0, i.jsxs)('p', {
                className: x().description,
                children: [
                  'Get started by editing ',
                  (0, i.jsx)('code', { className: x().code, children: 'pages/index.js' }),
                ],
              }),
              (0, i.jsxs)('div', {
                className: x().grid,
                children: [
                  (0, i.jsxs)('a', {
                    href: 'https://nextjs.org/docs',
                    className: x().card,
                    children: [
                      (0, i.jsx)('h3', { children: 'Documentation →' }),
                      (0, i.jsx)('p', { children: 'Find in-depth information about Next.js features and API.' }),
                    ],
                  }),
                  (0, i.jsxs)('a', {
                    href: 'https://nextjs.org/learn',
                    className: x().card,
                    children: [
                      (0, i.jsx)('h3', { children: 'Learn →' }),
                      (0, i.jsx)('p', { children: 'Learn about Next.js in an interactive course with quizzes!' }),
                    ],
                  }),
                  (0, i.jsxs)('a', {
                    href: 'https://github.com/vercel/next.js/tree/master/examples',
                    className: x().card,
                    children: [
                      (0, i.jsx)('h3', { children: 'Examples →' }),
                      (0, i.jsx)('p', { children: 'Discover and deploy boilerplate example Next.js projects.' }),
                    ],
                  }),
                  (0, i.jsxs)('a', {
                    href: 'https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
                    className: x().card,
                    children: [
                      (0, i.jsx)('h3', { children: 'Deploy →' }),
                      (0, i.jsx)('p', { children: 'Instantly deploy your Next.js site to a public URL with Vercel.' }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        j = () => (0, i.jsx)(h, { children: (0, i.jsx)(v, {}) });
      var _ = j;
    },
    4108: function (e) {
      e.exports = { container: 'Footer_container__5d2_x' };
    },
    353: function (e) {
      e.exports = { container: 'Layout_container__7UE5U', main: 'Layout_main__mRH48' };
    },
    83: function (e) {
      e.exports = {
        title: 'Home_title__LzLGx',
        description: 'Home_description__gSHFD',
        code: 'Home_code__rA6tA',
        grid: 'Home_grid__vZx6V',
        card: 'Home_card__1bo03',
      };
    },
    9008: function (e, t, n) {
      e.exports = n(2636);
    },
    5675: function (e, t, n) {
      e.exports = n(3740);
    },
  },
  function (e) {
    e.O(0, [774, 888, 179], function () {
      return e((e.s = 8312));
    }),
      (_N_E = e.O());
  },
]);
