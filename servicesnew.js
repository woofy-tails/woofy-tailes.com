var cart = [];

function addToCart(productName, price) {
    var customerName = prompt("Enter your name:");
    var customerAddress = prompt("Enter your address:");

    if (customerName && customerAddress) {
        var item = { name: productName, price: price };
        cart.push(item);
        updateCartSummary();
        showNotification(productName);
    } else {
        alert("Name and address are required to add items to the cart.");
    }
}

function toggleCart() {
    var modal = document.getElementById("cart-modal");
    modal.style.display = (modal.style.display === "block") ? "none" : "block";

    if (modal.style.display === "block") {
        initializeCartModal();  // Ensure modal is initialized before updating summary
        updateCartSummary();
    }
}

function closeCartModal() {
    var modal = document.getElementById("cart-modal");
    modal.style.display = "none";
}

function updateCartSummary() {
    var cartItems = document.getElementById("cart-items");
    var totalPriceElement = document.getElementById("total-price");
    var totalPrice = 0;

    cartItems.innerHTML = "";

    cart.forEach(function (item) {
        var listItem = document.createElement("li");
        listItem.textContent = item.name + " - $" + item.price;
        cartItems.appendChild(listItem);
        totalPrice += item.price;
    });

    totalPriceElement.textContent = "Total Price: $" + totalPrice.toFixed(2);
}

function showNotification(productName) {
    var notification = document.getElementById("notification");
    notification.textContent = productName + " added to cart!";
    notification.style.backgroundColor = "#4CAF50";
    notification.style.display = "block";

    setTimeout(function () {
        notification.style.display = "none";
    }, 3000);
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty. Add items before checking out.");
    } else {
        var totalPrice = cart.reduce(function (total, item) {
            return total + item.price;
        }, 0);
        alert("Total Price: $" + totalPrice.toFixed(2) + "\nThank you for your purchase!");
        cart = [];
        closeCartModal();
        updateCartSummary();
    }
}