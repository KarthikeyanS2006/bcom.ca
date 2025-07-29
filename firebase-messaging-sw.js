// This must be at the root of your 'web/' folder

importScripts('https://www.gstatic.com/firebasejs/10.3.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.3.1/firebase-messaging-compat.js');

try {
  // Initialize Firebase
  firebase.initializeApp({
    apiKey: "AIzaSyBGe4AxqLzustb0pCYOyIULDR2Ls819NWY",
    authDomain: "sgac-student-hub.firebaseapp.com",
    projectId: "sgac-student-hub",
    storageBucket: "sgac-student-hub.appspot.com",
    messagingSenderId: "127886153976",
    appId: "1:127886153976:web:fdfd22f26741b8603d030d",
  });

  // Retrieve messaging instance
  const messaging = firebase.messaging();

  messaging.onBackgroundMessage(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
      icon: '/icons/icon-192.png' // optional icon path
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
  });
} catch (e) {
  // If Firebase fails to load, do nothing and avoid breaking service worker
  console.error('Firebase messaging service worker failed to initialize:', e);
}
