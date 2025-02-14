
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'C:/Program Files/Git/peluqueria-canina/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/peluqueria-canina"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5306, hash: '93fe6ad7ca5084c8e9bed745bb8e255780d2a354e606d625733683997a832164', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1331, hash: '424d168a967c6f2a2067a969874cd49c36502300d0715b2081a4844b07622ee0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-VS4E73CL.css': {size: 231889, hash: 'WtbF1+tvvPE', text: () => import('./assets-chunks/styles-VS4E73CL_css.mjs').then(m => m.default)}
  },
};
