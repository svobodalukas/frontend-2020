// HTML5 WebAPI scripts

/** 
Storage
 - localStorage, sessionStorage
 - https://javascript.info/localstorage
*/ 
localStorage.setItem('user', 'Lukas');
const userName = localStorage.getItem('user');
console.log(userName);

localStorage.user = 'Jirka';
console.log(localStorage.getItem('user'));

const userData = {name: "John", job: "IT dev", age: "33"};
localStorage.user = JSON.stringify(userData);
console.log(localStorage.getItem('user'));

/** 
IndexedDB
 - https://javascript.info/indexeddb
*/ 

let openDB = indexedDB.open('dbUsers', 1);
openDB.onupgradeneeded = function() {
    let db = openDB.result;

    let objectStore = db.createObjectStore('users', { keyPath: "id" });

    const userDbData = [
        {name: "John", job: "IT dev", id: "50"},
        {name: "Petr", job: "Guru", id: "52"},
        {name: "Jirka", job: "Trenér", id: "79"}
    ];

    objectStore.transaction.oncomplete = function(event) {
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

let observerOptions = {
    rootMargin: "50px 0px",
    threshold: 0.01
};

const observerEl = document.querySelector('.lazy');

let observer = new IntersectionObserver(handleIntersect, observerOptions);
observer.observe(observerEl);

function handleIntersect(entries) {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            console.log('intersect!!');
            observer.unobserve(entry.target);

            //Image switch
            const srcData = entry.target.getAttribute('data-src');
            entry.target.src = srcData;
        }
    });
}

/** 
Service workers
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

/**
Fetch
 - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
*/
fetch('https://www.lukassvoboda.cz/coding/bootstrap2020/ajax-json.php')
  .then(response => response.json())
  .then(data => {
    console.table(data);
  });
