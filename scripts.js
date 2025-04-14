document.addEventListener('DOMContentLoaded', function () {
  const productDropdown = document.getElementById('productDropdown');
  const dealersList = document.getElementById('dealersList');
  const productPrice = document.getElementById('productPrice');

  // Dummy data for products and dealers (you can replace it with real API calls later)
  const products = [
    { id: 1, name: 'Laptop' },
    { id: 2, name: 'Phone' },
    { id: 3, name: 'Tablet' }
  ];

  const dealers = {
    1: [
      { name: 'Dealer 1', price: 700 },
      { name: 'Dealer 2', price: 750 }
    ],
    2: [
      { name: 'Dealer 1', price: 300 },
      { name: 'Dealer 2', price: 320 }
    ],
    3: [
      { name: 'Dealer 1', price: 400 },
      { name: 'Dealer 2', price: 420 }
    ]
  };

  // Populate product dropdown
  products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    productDropdown.appendChild(option);
  });

  // Event listener to handle product selection
  productDropdown.addEventListener('change', function () {
    const productId = productDropdown.value;
    displayDealers(productId);
  });

  function displayDealers(productId) {
    // Clear the previous dealer list and price
    dealersList.innerHTML = '';
    productPrice.textContent = '';

    // Display dealer details for the selected product
    const selectedDealers = dealers[productId];
    selectedDealers.forEach(dealer => {
      const li = document.createElement('li');
      li.textContent = `${dealer.name} - $${dealer.price}`;
      dealersList.appendChild(li);
    });

    // Display price details
    if (selectedDealers && selectedDealers.length > 0) {
      productPrice.textContent = `Price Range: $${selectedDealers[0].price} - $${selectedDealers[selectedDealers.length - 1].price}`;
    }
  }

  // Initialize the first product
  displayDealers(products[0].id);
});
