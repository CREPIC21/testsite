// console.log(123);
// var _paq = _paq || [];
// _paq.push(["trackPageView"]);

// const contactBtn = document.querySelector(".testBeacon");

// if(contactBtn) {
//     contactBtn.addEventListener('click', function() {
//       let obj = {

//       }
//       console.log("hidden")
//       navigator.sendBeacon('http://127.0.0.1:5500/docs/index.html?data=test', 'test');
    
//   });
// }

window.addEventListener("unload", function(ev) {
    console.log(ev);
    navigator.sendBeacon('http://127.0.0.1:5500/docs/index.html?data=test', 'test');
})

function beaconVersion(ev) {
    let url = 'http://127.0.0.1:5500/docs/index.html?data=test';
    let data = 'testing';
    //Always POST
    //ArrayBuffer, ArrayBufferView, Blob, DOMString, FormData,
    // or URLSearchParams object containing the data to send.
    navigator.sendBeacon(url, data);
    console.log(data);
  }
