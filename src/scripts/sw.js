/* eslint-disable no-restricted-globals */
self.addEventListener('install', (event) => {
  console.log('Installing service worker...');
});

self.addEventListener('activate', (event) => {
  console.log('Activating service worker...');
});

self.addEventListener('fetch', (event) => {
  console.log('Request: ', event.request);

  event.waitUntil(fetch(event.request));
});
