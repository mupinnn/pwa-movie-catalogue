/* eslint-disable no-restricted-globals */

// daftar aset yang secara otomatis dibuat oleh serviceworker-webpack-plugin
import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';

const { assets } = global.serviceWorkerOption;

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(CacheHelper.cachingAppShell([...assets, './']));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  event.waitUntil(CacheHelper.revalidateCache(event.request));
});
