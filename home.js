var home = document.querySelector("#home");

var currentUser = JSON.parse(localStorage.getItem("currentUser")); // جلب المستخدم الحالي

if (currentUser) {
  var cartona = `
    <h1>Welcome <span class="text-info fw-bolder">${currentUser.name}</span></h1>
  `;
  home.innerHTML = cartona;
} else {
  home.innerHTML = "<h1>User not logged in</h1>";
}
