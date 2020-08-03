import getRandomColor from "./getRandomColor.js";
export default (userName, useravatar) => {
  let avatarElm = document.createElement("div");
  avatarElm.className = "userAvatar";
  avatarElm.style.backgroundColor = getRandomColor();
  if (useravatar) {
    let avatarImg = document.createElement("img");
    avatarImg.src = useravatar;
    avatarElm.append(avatarImg);
  } else {
    let initials = userName
      .split(" ")
      .map((n) => n[0].toUpperCase())
      .join(" ");
    console.log(initials);
    let avatarText = document.createElement("span");
    avatarText.innerText = initials;
    avatarElm.appendChild(avatarText);
  }
  return avatarElm;
};
