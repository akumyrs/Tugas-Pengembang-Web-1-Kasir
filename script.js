function updatePrice(type) {
  const foodDropdown = document.getElementById("foodDropdown");
  const drinkDropdown = document.getElementById("drinkDropdown");
  const foodPrice = document.getElementById("foodPrice");
  const drinkPrice = document.getElementById("drinkPrice");

  if (type === "food") {
    const selectedFoodPrice = parseFloat(foodDropdown.value);
    foodPrice.textContent = `Harga: Rp ${selectedFoodPrice.toLocaleString(
      "id-ID"
    )}`;
  } else if (type === "drink") {
    const selectedDrinkPrice = parseFloat(drinkDropdown.value);
    drinkPrice.textContent = `Harga: Rp ${selectedDrinkPrice.toLocaleString(
      "id-ID"
    )}`;
  }

  calculateTotal();
}

function calculateTotal() {
  const foodQty = parseInt(document.getElementById("foodQty").value);
  const drinkQty = parseInt(document.getElementById("drinkQty").value);
  const foodPrice = parseFloat(document.getElementById("foodDropdown").value);
  const drinkPrice = parseFloat(document.getElementById("drinkDropdown").value);
  const totalPrice = foodQty * foodPrice + drinkQty * drinkPrice;
  document.getElementById(
    "totalPrice"
  ).textContent = `Rp ${totalPrice.toLocaleString("id-ID")}`;
}

function calculateChange() {
  const amountPaid = parseFloat(document.getElementById("amountPaid").value);
  const totalPrice = parseFloat(
    document.getElementById("totalPrice").textContent.replace("Rp ", "")
  );
  const change = amountPaid - totalPrice;
  document.getElementById("change").value = change;
}

function toggleDrinkSelection() {
  var drinkDropdown = document.getElementById("drinkDropdown");
  var includeDrinkCheckbox = document.getElementById("includeDrink");

  if (includeDrinkCheckbox.checked) {
    drinkDropdown.disabled = false;
  } else {
    drinkDropdown.disabled = true;
    drinkDropdown.selectedIndex = 0;
    document.getElementById("drinkPrice").textContent = "Harga: Rp 0";
  }

  updatePrice("drink");
}

function cetak() {
  var content = document.querySelector(".container").innerHTML;
  var mywindow = window.open("", "PRINT");
  mywindow.document.write("<html><head><title>Struk Pesanan</title>");
  mywindow.document.write("</head><body>");
  mywindow.document.write(content);
  mywindow.document.write("</body></html>");

  mywindow.document.close();
  mywindow.focus();
  mywindow.print();
  mywindow.close();
}

function resetForm() {
  // Reset nilai dropdown makanan
  document.getElementById("foodDropdown").selectedIndex = 0;
  // Reset nilai dropdown minuman
  document.getElementById("drinkDropdown").selectedIndex = 0;
  // Reset nilai checkbox termasuk minuman
  document.getElementById("includeDrink").checked = false;
  // Reset status dropdown minuman menjadi disabled
  document.getElementById("drinkDropdown").disabled = true;
  // Reset nilai input jumlah porsi makanan
  document.getElementById("foodQty").value = 0;
  // Reset nilai input jumlah porsi minuman
  document.getElementById("drinkQty").value = 0;
  // Reset nilai input jumlah yang dibayar
  document.getElementById("amountPaid").value = "";
  // Reset nilai input kembaliannya
  document.getElementById("change").value = "";
  // Reset total harga menjadi Rp 0
  document.getElementById("totalPrice").textContent = "Rp 0";
  // Reset harga makanan menjadi Rp 0
  document.getElementById("foodPrice").textContent = "Harga: Rp 0";
  // Reset harga minuman menjadi Rp 0
  document.getElementById("drinkPrice").textContent = "Harga: Rp 0";
}
