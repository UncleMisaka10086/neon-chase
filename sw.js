self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('neon-chase')
      .then(c => c.addAll(['./','./index.html']))
  );
});
