const products = [
    {id: 1, name: "Laptop", price: 799.99}, 
    {id: 2, name: "Smartwatch", price: 499.99}, 
    {id: 3, name: "Headphones", price: 199.99}
];

const productList = document.getElementById("product-list")
const cartItems = document.getElementById("cart-items")
const cartTotal = document.getElementById("cart-total")
const totalPrice = document.getElementById("total-price")
const emptyCartMsg = document.getElementById("empty-cart");
let cart = []

function displayProductItems() {
    products.innerHTML = "";
    products.forEach(product => {
        const productCard = document.createElement("div")
        productCard.classList.add("bg-white", "p-4", "rounded-md", "shadow-md", "text-center")

        productCard.innerHTML = `
        <h3 class = "text-lg font-bold">${product.name}</h3>
        <p class = "text-gray-600">$${product.price.toFixed(2)}</p>
        <button class="bg-green-600 text-white px-3 py-1 rounded-md mt-2 hover:bg-green-700 transition" onclick="addToCart(${product.id})">
                        Add to Cart
                    </button>
                `;
    productList.appendChild(productCard) 
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
}

function updateCart() {
    cartItems.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
        emptyCartMsg.style.display = "block";
        cartTotal.classList.add("hidden")
    } else {
        emptyCartMsg.style.display = "none";
        cartTotal.classList.remove("hidden")

        cart.forEach((item, index) => {
            const cartItem = document.createElement("div");
            cartItem.classList.add("flex", "justify-between", "border-b", "py-2")
            cartItem.innerHTML = `
            <span>${item.name}</span>
            <span>$${item.price.toFixed(2)}</span>
            <button class="text-red-500" onclick="removeFromCart(${index})">Remove</button>
             `;
            cartItems.appendChild(cartItem);
            total += item.price;
        });

        totalPrice.textContent = `$${total.toFixed(2)}`;
    }
}
    function removeFromCart(index) {
        cart.splice(index, 1);
        updateCart();
    }

    displayProductItems();

