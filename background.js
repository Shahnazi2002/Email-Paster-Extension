browser.contextMenus.create({
  id: "paste-email",
  title: "Paste My Email Address",
  contexts: ["editable"],
});

let email;

function onClickHandler(info, tab) {
  browser.storage.local.get("email", (items) => {
    email = items.email;
  });

  if (info.menuItemId == "paste-email") {
    var code = `var input = document.activeElement; input.value = '${email}';`;
    browser.tabs.executeScript({ code: code });
  }
}

browser.contextMenus.onClicked.addListener(onClickHandler);