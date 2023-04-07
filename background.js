browser.contextMenus.create({
  id: "paste-email",
  title: "Paste My Email Address",
  contexts: ["editable"]
});

function onClickHandler(info, tab) {
  if (info.menuItemId == "paste-email") {
    var email = "shahnazi2002@gmail.com";
    var code = `var input = document.activeElement;
            input.value = '${email}';`;
    browser.tabs.executeScript({code: code});
  }
}

browser.contextMenus.onClicked.addListener(onClickHandler);