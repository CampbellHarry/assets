let cart = [];

function addToCart() {
    let product = document.getElementById("product").value;
    let price = document.getElementById("price").value;
    let quantity = document.getElementById("quantity").value;

    if (product && price && quantity) {
        let item = {
            product: product,
            price: price,
            quantity: quantity
        };
        cart.push(item);
        displayCart();
        clearForm();
    } else {
        alert("Please fill in all fields.");
    }
}

function displayCart() {
    let cartTable = document.getElementById("cart");
    cartTable.innerHTML = "";
    let total = 0;
    cart.forEach(item => {
        let row = cartTable.insertRow();
        let productCell = row.insertCell(0);
        let priceCell = row.insertCell(1);
        let quantityCell = row.insertCell(2);
        let totalCell = row.insertCell(3);
        productCell.innerHTML = item.product;
        priceCell.innerHTML = item.price;
        quantityCell.innerHTML = item.quantity;
        let itemTotal = item.price * item.quantity;
        totalCell.innerHTML = itemTotal.toFixed(2);
        total += itemTotal;
    });
    document.getElementById("total").innerHTML = total.toFixed(2);
}

function clearForm() {
    document.getElementById("product").value = "";
    document.getElementById("price").value = "";
    document.getElementById("quantity").value = "";
}

function processPayment() {
    let total = document.getElementById("total").innerHTML;
    if (total > 0) {
        alert("Payment processed. Total: £" + total);
        cart = [];
        displayCart();
    } else {
        alert("Please add items to the cart before processing payment.");
    }
}