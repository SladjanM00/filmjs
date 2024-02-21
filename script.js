let totalPrice = 0;

function kupi(element) {
  let mainEl = element.closest(".card");
  let price = mainEl.querySelector(".price").innerText;
  let potroseno = document.querySelector(".potroseno");

  price = price.substring(1);
  price = parseInt(price);
  totalPrice += price;

  potroseno.innerText = `Potroseno novca: ${totalPrice}`;

  element.innerText = "Pogledao si";
  element.setAttribute("disabled", "true");

  if (element.innerText === "Pogledao si") {
    mainEl.style.backgroundColor = "red";
  } else {
    return;
  }
}
