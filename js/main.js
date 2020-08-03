import getAvatar from "./getAvatar.js";
const users = [
  {
    name: "Mohamed Samir",
    avatarSrc: "",
  },
  {
    name: "Khaled Mohamed",
    avatarSrc: "../images/avatar2.png",
  },
  {
    name: "Ahmed Samir",
    avatarSrc: "../images/avatar1.png",
  },
  {
    name: "Ahmed Atef",
    avatarSrc: "",
  },
  {
    name: "Hossam Fadl",
    avatarSrc: "../images/avatar1.png",
  },
  {
    name: "Wlaa Mamdouh",
    avatarSrc: "",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  let appElm = document.querySelector("#app");
  let listUserCards = document.createElement("div");
  listUserCards.className = "";
  users.forEach((user) => {
    // Name
    let userCardElm = document.createElement("div");
    userCardElm.innerText = user.name;
    userCardElm.className = "userCard";
    // avatar

    userCardElm.prepend(getAvatar(user.name, user.avatarSrc));
    listUserCards.appendChild(userCardElm);
  });
  appElm.appendChild(listUserCards);
});
