
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/peluqueria-canina/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/peluqueria-canina"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5286, hash: 'f9252e02612a071bdd9bbb74b871e9f4ed64bf831351285abcad551220ee1299', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1311, hash: '802f95b8a3d3b3b7560ba6e47a91af92c86b5964e149a48400631da3afdce508', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 17851, hash: '86a29bd20cb404db6bf18643eddaf653c52d3e74e1f69b15f694a080a4f4fc73', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-VS4E73CL.css': {size: 231889, hash: 'WtbF1+tvvPE', text: () => import('./assets-chunks/styles-VS4E73CL_css.mjs').then(m => m.default)}
  },
};
