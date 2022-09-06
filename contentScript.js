// background.js

/*let pkmn = '';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
});
*/


var wakeup = function(){
  setTimeout(function(){
      chrome.runtime.sendMessage('ping', function(response){
          console.log(response);
      });
      wakeup();
  }, 1000);
}
wakeup();


function checkPkmn() {


    let test = window.getElementById("battle-history");
  console.log(test);
  /*if (test.includes("sent out")) {
  console.log(test);  
  }
  else console.log("zz");*/
  }
  
  //  console.log('Enemy used pokemon:', `${pkmn}`);
  
  checkPkmn();


  chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
    console.log(response.farewell);
  });