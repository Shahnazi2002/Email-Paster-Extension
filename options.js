document.getElementById("submit").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  browser.storage.local.set({ email });
});