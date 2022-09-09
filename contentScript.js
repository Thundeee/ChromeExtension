let pkmn = "";
let username = "";

setTimeout(coreExtension, 5000);

function coreExtension() {
  usernameGetter();
  observerMain();
}

function usernameGetter() {
  username = document.querySelector(".username").getAttribute("data-name");
  console.log(username);
  return username;
}

function observerMain() {
  const mutationObserver = new MutationObserver((entries) => {
    console.log(entries);
    sendMsg(entries);
  });

  const parent = document.querySelector(".battle-log");
  const correctChild = parent.querySelector(".message-log");

  const observer = new MutationObserver(function (mutations_list) {
    mutations_list.forEach(function (mutation) {
      mutation.addedNodes.forEach(function (added_node) {
        if (
          mutation.addedNodes[0].classList.contains("battle-history") &&
          mutation.addedNodes[0].innerHTML.includes("sent out")
        ) {
          if (mutation.addedNodes[0].innerHTML.includes(username)) {
            return;
          } else {
            console.log(mutation.addedNodes[0].innerHTML);

            result = mutation.addedNodes[0].innerHTML;
            pkmn = result.match(/\>(.*?)\</);
            console.log(pkmn[1]);

            const parentText = document.querySelector(".battle-log-add");
            const chatBox = parentText.querySelectorAll(".textbox")[1];

            chatBox.innerHTML = "/weak " + pkmn[1];

            console.log("enemy pokemon");
            console.log(mutation.addedNodes[0]);
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
