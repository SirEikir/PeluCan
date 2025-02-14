
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/PeluCan/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/PeluCan"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5276, hash: 'b0cbe1cbaed7cb1e2fba6946498a6f3b139425bd8afdce16b28e2dbc923395f8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1301, hash: '6ad2dfe63e62eb598ea366692572fe529db61cb9f523cd48a17ccf46dc2e0e3e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 17841, hash: '2bcd7da4c2c2c723eec0e4552ea1c80fc52cead72191f49ca6a77eb9f579a05d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-VS4E73CL.css': {size: 231889, hash: 'WtbF1+tvvPE', text: () => import('./assets-chunks/styles-VS4E73CL_css.mjs').then(m => m.default)}
  },
};
