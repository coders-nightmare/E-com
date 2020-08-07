const updateCart = document.querySelectorAll(".update-cart");

updateCart.forEach((item) => {
  item.addEventListener("click", () => {
    let productId = item.dataset.product;
    let action = item.dataset.action;
    console.log(productId, action);

    console.log("USER: ", user);
    if (user === "AnonymousUser") {
      console.log("user is not authenticated");
    } else {
      updateUserOrder(productId, action);
    }
  });
});

function updateUserOrder(productId, action) {
  console.log("user is logged in , sending data....");

  let url = "/update_item/";
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-CSRFToken": csrftoken,
    },
    body: JSON.stringify({ productId: productId, action: action }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log("data", data);
      location.reload();
    });
}
