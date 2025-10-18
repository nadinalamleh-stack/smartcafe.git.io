const menuGrid = document.getElementById("menuGrid");

const products = [
  // Hot Drinks
  { title: "Espresso", price: 3.00 },
  { title: "Cappuccino", price: 3.75 },
  { title: "Latte", price: 4.00 },
  { title: "Mocha", price: 4.50 },
  { title: "Americano", price: 3.25 },

  // Cold Drinks
  { title: "Iced Latte", price: 4.00 },
  { title: "Iced Mocha", price: 4.50 },
  { title: "Iced Hazelnut", price: 4.95 },
  { title: "Iced Caramel Latte", price: 4.50 }
];

function renderMenu() {
  menuGrid.innerHTML = "";
  products.forEach(p => {
    const card = document.createElement("div");
    card.className = "menu-item";
    card.innerHTML = `
      <h4>${p.title}</h4>
      <span>$${p.price.toFixed(2)}</span>
    `;
    menuGrid.appendChild(card);
  });
}

renderMenu();

// Simple form thank-you message
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for contacting Smart Café! ☕");
});
