export default function getRandomColor() {
  let backgroundColor = "#";
  let options = "0123456789ABCDEF";
  for (let i = 0; i < 6; i++) {
    backgroundColor += options[Math.floor(Math.random() * 16)];
  }
  return backgroundColor;
}
