function displayNotification() {
    if (Notification.permission === 'granted') {
      navigator.serviceWorker.getRegistration().then(function(registration) {
        const options = {
          body: 'This is a sample notification!',
          icon: 'path/to/icon.png'
        };
        registration.showNotification('Hello World!', options);
      });
    }
  }
  
  if ('Notification' in window) {
    if (Notification.permission === 'default') {
      Notification.requestPermission();
    }
  }
  
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('path/to/service-worker.js').then(function() {
      console.log('Service worker registered!');
    });
  }
  