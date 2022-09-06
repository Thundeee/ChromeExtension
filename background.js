/*chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: checkPkmn
  });
});*/


/*chrome.action.onClicked.addListener(async (tab) => {
  try {
    await chrome.scripting.executeScript({
      target: {
        tabId: tab.id,
        allFrames: true,
      },
      files: ["contentScript.js"],
    });
  } catch (err) {
    console.error(`failed to execute script: ${err}`);
  }
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){

  if( request == "ping" ){
      console.log(request);
      sendResponse("pong");
      return;
  }

  sendResponse();

https://developer.chrome.com/docs/extensions/mv3/messaging/#simple


});*/


