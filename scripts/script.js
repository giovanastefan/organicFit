const products = [
  {
    id: 1,
    name: "Alface",
    description: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar.',
    imageUrl:
      "https://cdn.awsli.com.br/600x450/1304/1304130/produto/50538831/0792430fe7.jpg",
    price: 2.99,
    promotionalPrice: 3.99,
    category: "Vegetables",
  },
  {
    id: 2,
    name: "Tomate",
    description: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar.',
    imageUrl:
      "https://revistacampoenegocios.com.br/wp-content/uploads/2020/05/shutterstock_120016855.jpg",
    price: 3.49,
    promotionalPrice: 3.99,
    category: "Vegetables",
  },
  {
    id: 3,
    name: "Cenoura",
    description: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar.',
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvhGaDaTCNDT8w4tApoz-Q-M6H7ls00-7hTw&s",
    price: 4.99,
    promotionalPrice: 3.99,
    category: "Vegetables",
  },
  {
    id: 4,
    name: "Maçã",
    description: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar.',
    imageUrl:
      "https://acdn.mitiendanube.com/stores/174/441/products/maca-vermelha-italiana-d9cb5f3f39fd29943115122899225013-240-0.jpg",
    price: 5.49,
    promotionalPrice: 3.99,
    category: "Fruits",
  },
  {
    id: 5,
    name: "Banana",
    description: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar.',
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Banana.png/800px-Banana.png",
    price: 2.99,
    promotionalPrice: 3.99,
    category: "Fruits",
  },
];

const categories = [
  {
    id: 1,
    name: 'Vegetables'
  },
  {
    id: 2,
    name: 'Fruits'
  },
  {
    id: 3,
    name: 'Dairy Products'
  },
  {
    id: 4,
    name: 'Beverages'
  },
  {
    id: 5,
    name: 'Herbs and Spices'
  },
];


document.addEventListener("DOMContentLoaded", function () {
  const productsContainer = document.getElementById("home-products");

  const productCards = createProductCards(products, productsContainer);

  productsContainer.appendChild(productCards);
});

function createProductCards(products, container) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const modalName = document.getElementById("modal-name");
  const modalPrice = document.getElementById("modal-price");
  const modalPromotionalPrice = document.getElementById("modal-promotional-price");
  const modalDescription = document.getElementById("modal-description");
  const modalCategory = document.getElementById("modal-category");
  const closeButton = document.querySelector(".close-button");

  closeButton.onclick = function() {
    modal.style.display = "none";
  };

  window.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };

  products.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("card-container");

    const img = document.createElement("img");
    img.src = product.imageUrl;
    card.appendChild(img);

    const details = document.createElement("div");
    details.classList.add("card-details");
    card.appendChild(details);

    const title = document.createElement("div");
    title.classList.add("card-title");
    details.appendChild(title);

    const name = document.createElement("p");
    name.classList.add("name");
    name.textContent = product.name;
    title.appendChild(name);

    const price = document.createElement("p");
    price.classList.add("price");
    price.textContent = `$ ${product.price}`;
    title.appendChild(price);

    const button = document.createElement("button");
    button.classList.add("card-cart-button");
    details.appendChild(button);

    const cartIcon = document.createElement("img");
    cartIcon.src = "./images/icons/Cart.png";
    cartIcon.alt = "Cart";
    button.appendChild(cartIcon);

    card.onclick = function() {
      modal.style.display = "flex";
      modalImg.src = product.imageUrl;
      modalName.textContent = product.name;
      modalPrice.textContent = `$ ${product.price}`;
      modalPromotionalPrice.textContent = `$ ${product.promotionalPrice}`;
      modalCategory.textContent = product.category;
      modalDescription.textContent = product.description;
    };

    container.appendChild(card);
  });

  return container;
}

function onLoadCategories() {
  const select = document.getElementById('category');

  categories.forEach((category) => {
    const option = document.createElement('option');
    option.value = category.id;
    option.textContent = category.name;
    select.appendChild(option);
  });
}

