let pkmn = "";
let username = "";



usernameGetter();

function usernameGetter() {
  if (document.querySelector(".username:not(.userbutton)") === null) {
    setTimeout(usernameGetter, 1000);
    console.log("no username found yet");
    return;
  }
  username = document
    .querySelector(".username:not(.userbutton)")
    .getAttribute("data-name");

  console.log("Username =" + username);
  return username;
}

function observerMain() {
  if (!window.location.href.includes("battle")) {
    console.log("Currently not in battle");
    return;
  }
  console.log("Currently in battle");



  const parent = document.querySelector(".battle-log");
  const parentText = document.querySelector(".battle-log-add");
  let formsubmit = "";
  let chatBox = parentText.querySelectorAll(".textbox")[1];
  textBoxChecker();

  function textBoxChecker() {
    if (chatBox === undefined) {
      chatBox = parentText.querySelectorAll(".textbox")[1];
      console.log("waiting for chatbox to appear...");
      setTimeout(textBoxChecker, 1000);
      return;
    } else {
      console.log(chatBox)
      console.log("ChatBox found!");

      formsubmit = document.querySelector(".chatbox");
      console.log(formsubmit);
    }
  }




  let observer = new MutationObserver(function (mutations_list) {
    mutations_list.forEach(function (mutation) {
      mutation.addedNodes.forEach(function (added_node) {
        if (
          mutation.addedNodes[0].classList.contains("battle-history") &&
          mutation.addedNodes[0].innerHTML.includes("sent out")
        ) {
          if (mutation.addedNodes[0].innerHTML.includes(username)) {
            return;
          } else {
            result = mutation.addedNodes[0].innerHTML;
            pkmn = result.match(/\>(.*?)\</);

            chatBox.value = "/weak " + pkmn[1];
           /* formsubmit.submit(function(event){
              event.preventDefault();
              console.log(formsubmit);
            }); */

            console.log("enemy pokemon is " + pkmn[1]);
          }
        } else {
          console.log("irrelevant node");
        }
      });
    });
  });
  observer.observe(parent.querySelector(".message-log"), {
    subtree: false,
    childList: true,
  });
}

let previousUrl = "";

const observerUrl = new MutationObserver(function (mutations) {
  if (location.href !== previousUrl) {
    console.log(previousUrl);
   // if (previousUrl === "") {
      console.log(`URL changed to ${location.href}`);
      previousUrl = location.href;
      observerMain();
      

    /*} else {            // WORKING ON MULTI FIGHT SUPPORT. SHOWDOWN IS A SPA
    console.log(`URL changed to ${location.href}`);
    previousUrl = location.href;
    observer.disconnect();
    observerMain();
  }*/}
});

observerUrl.observe(document, {
  subtree: true,
  childList: true,
});
