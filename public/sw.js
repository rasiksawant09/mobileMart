//install service worker
self.addEventListener('install', evt => {
    console.log('Service worker as been installed');
})

//activating service worker.
self.addEventListener('activate', evt => {
    console.log('Service worker was activated');
})