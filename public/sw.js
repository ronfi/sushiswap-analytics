if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,c,n)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const i={uri:location.origin+a.slice(1)};return Promise.all(c.map(a=>{switch(a){case"exports":return s;case"module":return i;default:return e(a)}})).then(e=>{const a=n(...e);return s.default||(s.default=a),s})}))}}define("./sw.js",["./workbox-c2b5e142"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/79ed77ff8ffdfbf2aecc71d0296553f8a40363d8.7a7c445cd5350ffb435e.js",revision:"2c0b3ff1dcf5eb0da1f49c04bc9b9e50"},{url:"/_next/static/chunks/8499bd83c5fae87edb9802cc80f64d8105764b9c.2fd85dc0171f7009cbff.js",revision:"10da928b30a370eadcc9985e9a1e115a"},{url:"/_next/static/chunks/958cd6763ea358bece8e5daefd7f38218eaebc62.9824a68604d94b635965.js",revision:"1eb2b334bd4779c0866953332aee505b"},{url:"/_next/static/chunks/c265eba654a9992f2ac6895a0ddcf98a222fcaf4.ab9505d213cfc79979c8.js",revision:"917161431fef29a4b1e35217aae2dc51"},{url:"/_next/static/chunks/commons.12d29b53bc052389e728.js",revision:"882386799050a2ba5febc2967cecb7fc"},{url:"/_next/static/chunks/framework.1d36bc031662b4dc4c28.js",revision:"7eafc2b810ea3395615465510119d273"},{url:"/_next/static/chunks/main-ba0ae6fef8726d0c9fc3.js",revision:"e9d5983d9d2bc1b3fd56c4b47e0bde8b"},{url:"/_next/static/chunks/pages/_app-d139234d7419f67286c5.js",revision:"aca78b2850081169aa35582a8afabb1b"},{url:"/_next/static/chunks/pages/_error-8a40491c1ef3b1996c91.js",revision:"257bb7842b3020e840b05b8dbc63b0df"},{url:"/_next/static/chunks/pages/about-1cabdd94e7c18c49bb45.js",revision:"8636de12961176ae34ab196be4ecc46b"},{url:"/_next/static/chunks/pages/bar-2f3e2712fae83300352d.js",revision:"8248c63f19e4a776841e3cc486fb86a0"},{url:"/_next/static/chunks/pages/gainers-173e6b8028885d128313.js",revision:"a8b2bdcc32e55e32a19d1689225fe805"},{url:"/_next/static/chunks/pages/index-c38111833becc2a2d6ea.js",revision:"2a05445a76baff608ed58fdbc61fb001"},{url:"/_next/static/chunks/pages/losers-14bf55b4daac529d073b.js",revision:"f09c2643c4e3f22ab7067f2e36aefbd5"},{url:"/_next/static/chunks/pages/pairs-0983b1cf59748e3d62e1.js",revision:"632a4a8fc65a60264b707e1c2a45c252"},{url:"/_next/static/chunks/pages/pairs/%5Bid%5D-05bc05b73e724d34264f.js",revision:"6fc5f883ea0ed95480c18cc83b6dd32e"},{url:"/_next/static/chunks/pages/pools-4124ba4bff1b624e2578.js",revision:"df7fba9c624cea63fb435acd9b6fc9c4"},{url:"/_next/static/chunks/pages/pools/%5Bid%5D-8b548e63f4ec4bf796fa.js",revision:"74b322ccc7b1cf97c5cbf3ae245b80a1"},{url:"/_next/static/chunks/pages/recent-68ad90010ea008c53ea1.js",revision:"8216bb212bb215f7b26586e2a0d6955d"},{url:"/_next/static/chunks/pages/tokens-8140bd4059ba47baa07a.js",revision:"6de6a5efef96822033686f584f8aa492"},{url:"/_next/static/chunks/pages/tokens/%5Bid%5D-febd4bd6c6efb3a4a873.js",revision:"54fb61c7435f5cdd08c9d136f4cd1ca9"},{url:"/_next/static/chunks/pages/users/%5Bid%5D-1df666ce17053f24aa59.js",revision:"13c6d216059ebde4d0758476f19f0fdf"},{url:"/_next/static/chunks/polyfills-ce4d8107eefc64c12117.js",revision:"4232f199c363869049f9d40dfe739ed6"},{url:"/_next/static/chunks/webpack-eb080e3f091731f228fb.js",revision:"2019297a9ccffe0e261600bad1b1f98a"},{url:"/_next/static/css/a51d54a1415f4442adc3.css",revision:"b8f22f66a54e277d663e234eba64d67c"},{url:"/_next/static/lK9tZsWDUXnlvPStLNfPB/_buildManifest.js",revision:"275094d79df5a2a048070e230d3c8579"},{url:"/_next/static/lK9tZsWDUXnlvPStLNfPB/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/android-chrome-192x192.png",revision:"9d4dfd015b2708f927d3a31e82ccbebe"},{url:"/android-chrome-512x512.png",revision:"7791b286f9ca945f198b8058f3a2816c"},{url:"/apple-touch-icon.png",revision:"78129694971fb45a9d4469ea8e67de28"},{url:"/browserconfig.xml",revision:"51ec09fbdf53fd441bf54c05b4351b22"},{url:"/favicon-16x16.png",revision:"446a95a79186b96ed2af32ff13361591"},{url:"/favicon-32x32.png",revision:"33006ac5914ad3c7fab0ad8c608a552b"},{url:"/favicon.ico",revision:"037024efc049681aac1ba80073294f58"},{url:"/fonts/inter-var-cyrillic.woff2",revision:"f3a033068d3ed064ceaef10120190da8"},{url:"/fonts/inter-var-greek-ext.woff2",revision:"ef638a30a2682e04cd7154393e9e1385"},{url:"/fonts/inter-var-greek.woff2",revision:"d0416a1eb2ab9d501d2c4812336605f2"},{url:"/fonts/inter-var-latin-ext.woff2",revision:"dc5353820c3c55e126b633b47771d505"},{url:"/fonts/inter-var-latin.woff2",revision:"812b3dd29751112389e93387c4f7dd0a"},{url:"/fonts/inter-var-vietnamese.woff2",revision:"bb41267f8575fde2a493993ca07d71ab"},{url:"/icons/icon-128x128.png",revision:"d626cfe7c65e6e5403bcbb9d13aa5053"},{url:"/icons/icon-144x144.png",revision:"e53a506b62999dc7a4f8b7222f8c5add"},{url:"/icons/icon-152x152.png",revision:"18b3958440703a9ecd3c246a0f3f7c72"},{url:"/icons/icon-192x192.png",revision:"27dc12f66697a47b6a8b3ee25ba96257"},{url:"/icons/icon-384x384.png",revision:"a40324a3fde2b0b26eeffd4f08bf8be8"},{url:"/icons/icon-512x512.png",revision:"93d6e8e15cfa78dfee55446f607d9a28"},{url:"/icons/icon-72x72.png",revision:"f2ffc41b3482888f3ae614e0dd2f6980"},{url:"/icons/icon-96x96.png",revision:"fba02a40f7ba6fc65be8a2f245480f6d"},{url:"/manifest.json",revision:"c45dbc50ecab4aa95e104d278d693d47"},{url:"/mstile-150x150.png",revision:"df123e48cf577cec1f02010fba0c6af3"},{url:"/safari-pinned-tab.svg",revision:"fff34b4868a6232847de0bc3a207c0ba"},{url:"/service-worker.js",revision:"9caebb7ae0883e0eb7640d016e876791"},{url:"/sushi.svg",revision:"1a0941dd39729a525b7a7c0d7bd5dc84"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));