const categoryMap = {
  hc: "Hair Cut",
  ca: "Colour apply",
  ha: "Henna apply",
  hs: "Hair set",
  th: "Threading",
  cu: "Clean-Up",
  fc: "Facial",
  nw: "Normal wax",
  cw: "Chocolates wax",
  rw: "Rica wax",
  bh: "Bleaching",
  dh: "Dandruff Hair Treatment",
  pd: "Pedicure",
  mc: "Menicure",
  hm: "Head massage",
  hl: "Hands & legs",
  hh: "Hair wash"
};

const serviceData = {
  hc: [
    { name: "Kids Cut", price: "200.00" },
    { name: "Straight Cut", price: "200.00" },
    { name: "U-Cut", price: "300.00" },
    { name: "V-Cut", price: "300.00" },
    { name: "Step Cut", price: "600.00" },
    { name: "Feather Cut", price: "600.00" },
    { name: "Layer Cut", price: "600.00" },
    { name: "Volume Cut", price: "700.00" },
    { name: "Front Cut", price: "120.00" },
    { name: "Restyle Cut", price: "800.00" }
  ],
  ca: [
    { name: "Touch up (Shoulder Length)", price: "350.00" },
    { name: "Shoulder Down", price: "450.00" },
    { name: "Global (Full Hair)", price: "500.00" }
  ],
  ha: [
    { name: "Shoulder Length", price: "500.00" },
    { name: "Shoulder Down", price: "600.00" },
    { name: "Length Hair", price: "700.00" },
    { name: "Long Length Hair", price: "800.00" }
  ],
  hs: [
    { name: "Roller Set", price: "500.00" },
    { name: "Blow Dry (Short Hair)", price: "350.00" },
    { name: "Blow Dry (Long Hair)", price: "400.00" },
    { name: "Ironing", price: "500.00" }
  ],
  th: [
    { name: "Eye Brows", price: "40.00" },
    { name: "Upper Lip", price: "20.00" },
    { name: "Lower Lip", price: "20.00" },
    { name: "Chin", price: "20.00" },
    { name: "Full Chin", price: "40.00" },
    { name: "Fore-Head", price: "20.00" },
    { name: "Full Face", price: "160.00" },
    { name: "Side Lock", price: "40.00" }
  ],
  cu: [
    { name: "Herbal", price: "350.00" },
    { name: "Fruit", price: "450.00" },
    { name: "Papaya", price: "450.00" },
    { name: "Wine", price: "450.00" },
    { name: "Chocolate", price: "600.00" },
    { name: "Anti-Tan", price: "650.00" },
    { name: "Alovera", price: "550.00" },
    { name: "Pearl", price: "650.00" },
    { name: "Gold", price: "800.00" },
    { name: "Skin Glow", price: "800.00" },
    { name: "Oxy Glow Spa", price: "800.00" },
    { name: "Skin Lightening", price: "900.00" },
    { name: "Shahnaz Gold", price: "1000.00" },
    { name: "Shahnaz Diamond", price: "1500.00" }
  ],
  fc: [
    { name: "Herbal", price: "600.00" },
    { name: "Fruit", price: "750.00" },
    { name: "Papaya", price: "750.00" },
    { name: "Wine", price: "850.00" },
    { name: "Chocolate", price: "950.00" },
    { name: "Anti-Tan", price: "900.00" },
    { name: "Alovera", price: "800.00" },
    { name: "Pearl", price: "950.00" },
    { name: "Gold", price: "1300.00" },
    { name: "Skin Glow", price: "1300.00" },
    { name: "Oxy Glow Spa", price: "1300.00" },
    { name: "Skin Lightening", price: "1500.00" },
    { name: "Shahnaz Gold", price: "2000.00" },
    { name: "Shahnaz Diamond", price: "3000.00" }
  ],
  nw: [
    { name: "Under Arms", price: "300.00" },
    { name: "Full Hands", price: "450.00" },
    { name: "Full Legs", price: "700.00" },
    { name: "Full Face", price: "550.00" },
    { name: "Half Legs", price: "350.00" },
    { name: "Upper Lips", price: "150.00" }
  ],
  cw: [
    { name: "Under Arms", price: "350.00" },
    { name: "Full Hands", price: "550.00" },
    { name: "Full Legs", price: "800.00" },
    { name: "Full Face", price: "650.00" },
    { name: "Half Legs", price: "450.00" },
    { name: "Upper Lips", price: "150.00" }
  ],
  rw: [
    { name: "Under Arms", price: "400.00" },
    { name: "Full Hands", price: "650.00" },
    { name: "Full Legs", price: "900.00" },
    { name: "Full Face", price: "750.00" },
    { name: "Half Legs", price: "500.00" },
    { name: "Upper Lips", price: "150.00" }
  ],
  bh: [
    { name: "Full Face", price: "500.00" },
    { name: "Hands & Legs", price: "1000.00" }
  ],
  dh: [
    { name: "With Shampoo", price: "350.00" },
    { name: "Without Shampoo", price: "300.00" }
  ],
  pd: [
    { name: "Pedicure", price: "300.00" }
  ],
  mc: [
    { name: "Menicure", price: "300.00" }
  ],
  hm: [
    { name: "Head Massage", price: "350.00" }
  ],
  hl: [
    { name: "Hand Wax", price: "350.00" },
    { name: "Leg Wax", price: "650.00" }
  ],
  hh: [
    { name: "Hair Wash", price: "200.00" }
  ]
};

const categoryListDiv = document.getElementById('categoryList');
const servicesListDiv = document.getElementById('servicesList');
const searchInput = document.getElementById('searchInput');

// Show all categories with their codes on page load
function displayCategories() {
  const container = document.createElement('div');
  const heading = document.createElement('h2');
  heading.textContent = 'Categories';
  container.appendChild(heading);

  for (const [code, name] of Object.entries(categoryMap)) {
    const catDiv = document.createElement('div');
    catDiv.textContent = name;
    const codeSpan = document.createElement('span');
    codeSpan.textContent = `(${code})`;
    codeSpan.className = 'category-code';
    catDiv.appendChild(codeSpan);
    container.appendChild(catDiv);
  }

  categoryListDiv.appendChild(container);
}

function displayServices(categoryCode) {
  servicesListDiv.innerHTML = ''; // clear previous results

  if (!categoryCode) {
    servicesListDiv.innerHTML = '<p>Enter a valid category code or name above to see services.</p>';
    return;
  }

  const code = categoryCode.toLowerCase();

  // Match by code or by category name
  let matchedCode = null;

  // If direct code match
  if (categoryMap[code]) {
    matchedCode = code;
  } else {
    // Try matching name (case insensitive)
    for (const [c, n] of Object.entries(categoryMap)) {
      if (n.toLowerCase() === categoryCode.toLowerCase()) {
        matchedCode = c;
        break;
      }
    }
  }

  if (!matchedCode || !serviceData[matchedCode]) {
    servicesListDiv.innerHTML = '<p>No services found for this category.</p>';
    return;
  }

  const heading = document.createElement('h2');
  heading.textContent = `${categoryMap[matchedCode]} Services`;
  servicesListDiv.appendChild(heading);

  const ul = document.createElement('ul');
  ul.style.listStyle = 'none';
  ul.style.padding = '0';

  serviceData[matchedCode].forEach(service => {
    const li = document.createElement('li');
    li.className = 'service-item';

    const nameSpan = document.createElement('span');
    nameSpan.className = 'service-name';
    nameSpan.textContent = service.name;

    const priceSpan = document.createElement('span');
    priceSpan.className = 'service-price';
    priceSpan.textContent = `₹${service.price}`;

    li.appendChild(nameSpan);
    li.appendChild(priceSpan);

    ul.appendChild(li);
  });

  servicesListDiv.appendChild(ul);
}

// On input enter, display services
searchInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    const val = searchInput.value.trim();
    displayServices(val);
  }
});

// Show categories on page load
displayCategories();
