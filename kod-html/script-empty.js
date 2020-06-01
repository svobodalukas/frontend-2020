// HTML5 WebAPI scripts

/** 
Storage
 - localStorage, sessionStorage
 - https://javascript.info/localstorage
*/


/** 
IndexedDB
 - https://javascript.info/indexeddb
 - https://bitsofco.de/an-overview-of-client-side-storage/
*/
let openDB = indexedDB.open('dbUsers', 1);
openDB.onupgradeneeded = function () {
  let db = openDB.result;

  let objectStore = db.createObjectStore('users', { keyPath: "id" });

  const userDbData = [
    { name: "John", job: "IT dev", id: "50" },
    { name: "Petr", job: "Guru", id: "52" },
    { name: "Jirka", job: "Trenér", id: "79" }
  ];

  objectStore.transaction.oncomplete = function() {
    let userObjectStore = db.transaction("users", "readwrite").objectStore("users");

    // Add data
    userDbData.forEach(function(user) {
      userObjectStore.add(user);
      console.log(user);
    });

    // Get data
    const secondUserRequest = userObjectStore.get('52');
    secondUserRequest.onsuccess = function(event) {
      var data = event.target.result;
      console.log(data.job);
    }
  };
}


/**
Intersection Observer
 - https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
*/


/**
Service workers, PWA
 - https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API
 - https://github.com/mdn/sw-test
 - https://www.vzhurudolu.cz/prirucka/pwa
*/

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js', { scope: '/kod-html/' }).then(function(reg) {

    if(reg.installing) {
      console.log('Service worker installing');
    } else if(reg.waiting) {
      console.log('Service worker installed');
    } else if(reg.active) {
      console.log('Service worker active');
    }

  }).catch(function(error) {
    // registration failed
    console.log('Registration failed with ' + error);
  });
}

