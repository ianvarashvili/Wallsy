let artikli = [
  ["img/arcane.png", "Arcane", "#", "read more"],
  ["img/radiohead.png", "Radiohead", "#", "read more"],
  ["img/nana.jpg", "Nana", "#", "read more"],
  ["img/chase.png", "Chase Atlantic", "#", "read more"],
  ["img/csm.jpg", "Chainsaw Man", "#", "read more"],
  ["img/slowdive.jpg", "Slowdive", "#", "read more"],
  ["img/theatre.png", "Theatre: A Love Story", "#", "read more"],
    ["img/crow.png", "The Crow", "#", "read more"],
  ["img/tokyoghoul.jpg", "Tokyo Ghoul", "#", "read more"],
  ["img/uptowngirls.png", "Uptown Girls", "#", "read more"],
  ["img/evanescence.png", "Evanescence", "#", "read more"],
  ["img/onepiece.jpg", "One Piece", "#", "read more"],
  ["img/chatnoir.png", "Chat Noir", "#", "read more"],
  ["img/deathnote.jpg", "Death Note", "#", "read more"],
  ["img/blueSpringRide.jpg", "Blue Spring Ride", "#", "read more"],
];

for (i = 0; i < artikli.length; i++) {
  let article = document.createElement("article");
  article.classList.add("poster");
  let h2 = document.createElement("h2");
  let img = document.createElement("img");
  let p = document.createElement("p");
  let a = document.createElement("a");

  img.setAttribute("src", artikli[i][0]);
  article.appendChild(img);
  h2.innerHTML = artikli[i][1];
  article.appendChild(h2);
  a.setAttribute("href", artikli[i][2]);
  a.innerHTML = artikli[i][3];
  p.appendChild(a);
  article.appendChild(p);

  let button = document.createElement("button");
  button.classList.add("cart-btn");
  button.innerHTML = "Add to Cart ";

  let cartIcon = document.createElement("img");
  cartIcon.setAttribute("src", "img/cart_off.png");
  cartIcon.classList.add("cart-icon");

  button.appendChild(cartIcon);

  article.appendChild(button);

  document.getElementById("cont").appendChild(article);
}
