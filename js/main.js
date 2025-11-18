const menuItems = [
    // Teas
    { name: "Dhum Tea", category: "Teas", description: "Clay-pot dhum brewed kadak chai.", price: "₹10" },
    { name: "Bellam Tea", category: "Teas", description: "Jaggery-sweetened milk tea with caramel notes.", price: "₹20" },
    { name: "Ginger Tea", category: "Teas", description: "Bold chai simmered with fresh ginger.", price: "₹20" },
    { name: "Badam Tea", category: "Teas", description: "Almond-rich chai with saffron warmth.", price: "₹20" },
    { name: "Masala Tea", category: "Teas", description: "House spice blend slow brewed for depth.", price: "₹20" },
    { name: "Elachi Tea", category: "Teas", description: "Fragrant cardamom-forward tea.", price: "₹20" },
    { name: "Paan Tea", category: "Teas", description: "Minty paan inspired milk tea.", price: "₹20" },
    { name: "Black Pepper Tea", category: "Teas", description: "Peppercorn-spiked chai for a spicy kick.", price: "₹20" },
    { name: "Black Tea", category: "Teas", description: "Straight-up kadak black brew.", price: "₹15" },
    { name: "Sonti Tea", category: "Teas", description: "Dry ginger (sonti) chai to warm the soul.", price: "₹20" },
    { name: "Sugar Less Tea", category: "Teas", description: "Milk tea brewed without sugar.", price: "₹15" },
    { name: "Rose Tea", category: "Teas", description: "Floral rose petal infused chai.", price: "₹20" },
    { name: "Chocolate Tea", category: "Teas", description: "Hot cocoa meets kadak chai.", price: "₹20" },

    // Wellness Teas
    { name: "Green Tea", category: "Wellness Teas", description: "Lightly brewed antioxidant-rich tea.", price: "₹20" },
    { name: "Hibiscus Tea", category: "Wellness Teas", description: "Tangy hibiscus tisane served hot.", price: "₹20" },
    { name: "Lemon Tea", category: "Wellness Teas", description: "Zesty lemon lift with gentle sweetness.", price: "₹20" },
    { name: "Ginger Lemon Tea", category: "Wellness Teas", description: "Immune loving ginger and lemon infusions.", price: "₹20" },

    // Mocktails
    { name: "Lemon Mojito", category: "Mocktails", description: "Mint, lime and fizz over crushed ice.", price: "₹50" },
    { name: "Virgin Mojito", category: "Mocktails", description: "Classic mojito profile minus the alcohol.", price: "₹50" },
    { name: "Watermelon Cooler", category: "Mocktails", description: "Fresh watermelon crush with mint.", price: "₹50" },
    { name: "Red Wine Mocktail", category: "Mocktails", description: "Grape and berry spritzer styled like wine.", price: "₹60" },
    { name: "Blue Lagoon", category: "Mocktails", description: "Citrus and blue curacao inspired refresher.", price: "₹50" },
    { name: "Orange Mojito", category: "Mocktails", description: "Sunny orange twist on the mojito.", price: "₹50" },
    { name: "Strawberry Spritzer", category: "Mocktails", description: "Strawberry, lime and soda sparkle.", price: "₹50" },

    // Milk & Coffees
    { name: "Badam Milk", category: "Milk & Coffee", description: "Almond-saffron milk served hot.", price: "₹20" },
    { name: "Boost Milk", category: "Milk & Coffee", description: "Classic Boost stirred into hot milk.", price: "₹20" },
    { name: "Horlicks", category: "Milk & Coffee", description: "Malted Horlicks beverage.", price: "₹20" },
    { name: "Pepper Milk", category: "Milk & Coffee", description: "Comforting pepper spiced milk.", price: "₹20" },
    { name: "Chocolate Milk", category: "Milk & Coffee", description: "Creamy cocoa milk.", price: "₹20" },
    { name: "Rose Milk", category: "Milk & Coffee", description: "Rose syrup, chilled milk and nuts.", price: "₹20" },
    { name: "Bru Coffee", category: "Milk & Coffee", description: "South Indian style instant coffee.", price: "₹20" },
    { name: "Black Coffee", category: "Milk & Coffee", description: "Strong decoction without milk.", price: "₹20" },

    // Milkshakes (₹59/₹69 deck)
    { name: "Rosey Rose Milkshake", category: "Milkshakes", description: "Signature rose ice-cream shake.", price: "₹59" },
    { name: "Vanilla Milkshake", category: "Milkshakes", description: "Classic vanilla scoop shake.", price: "₹59" },
    { name: "Oreo Chocolate Milkshake", category: "Milkshakes", description: "Chocolate shake blitzed with Oreos.", price: "₹59" },
    { name: "Oreo Vanilla Milkshake", category: "Milkshakes", description: "Vanilla shake with Oreo crumble.", price: "₹59" },
    { name: "Butterscotch Milkshake", category: "Milkshakes", description: "Caramel-butterscotch shake.", price: "₹59" },
    { name: "Badam Shake", category: "Milkshakes", description: "Almond loaded thick milkshake.", price: "₹59" },
    { name: "Strawberry Milkshake", category: "Milkshakes", description: "Fresh strawberry cream shake.", price: "₹59" },
    { name: "Cold Coffee Shake", category: "Milkshakes", description: "Iced coffee blended with ice cream.", price: "₹59" },
    { name: "Rose Pan Shake", category: "Milkshakes", description: "Paan and gulkand inspired shake.", price: "₹59" },
    { name: "Chocolate Shake", category: "Milkshakes", description: "Silky chocolate milkshake.", price: "₹59" },
    { name: "Dry Fruit Shake", category: "Milkshakes", description: "Cashew, almond and pista crunch.", price: "₹69" },
    { name: "Mango Shake", category: "Milkshakes", description: "Seasonal mango indulgence.", price: "₹59" },
    { name: "Watermelon Shake", category: "Milkshakes", description: "Juicy watermelon blended cold.", price: "₹59" },
    { name: "Black Currant Shake", category: "Milkshakes", description: "Black currant ice cream shake.", price: "₹59" },
    { name: "KitKat Shake", category: "Milkshakes", description: "Crunchy KitKat blended shake.", price: "₹59" },
    { name: "Dairy Milk Shake", category: "Milkshakes", description: "Cadbury Dairy Milk studded shake.", price: "₹69" },

    // Thick Shakes
    { name: "Vanilla Thick Shake", category: "Thick Shakes", description: "Dense vanilla thick shake.", price: "₹69" },
    { name: "Strawberry Thick Shake", category: "Thick Shakes", description: "Rich strawberry thick blend.", price: "₹69" },
    { name: "Butterscotch Thick Shake", category: "Thick Shakes", description: "Slow churned butterscotch indulgence.", price: "₹69" },
    { name: "Oreo Chocolate Thick Shake", category: "Thick Shakes", description: "Extra creamy Oreo chocolate shake.", price: "₹69" },
    { name: "Oreo Vanilla Thick Shake", category: "Thick Shakes", description: "Dense vanilla shake studded with Oreos.", price: "₹69" },
    { name: "Dry Fruit Thick Shake", category: "Thick Shakes", description: "Loaded with roasted nuts and khoya.", price: "₹79" },
    { name: "Belgium Chocolate Thick Shake", category: "Thick Shakes", description: "Belgian cocoa rich thick shake.", price: "₹79" },

    // Lassi
    { name: "Sweet Lassi", category: "Lassi", description: "Classic sweetened yoghurt drink.", price: "₹50" },
    { name: "Rose Lassi", category: "Lassi", description: "Rose-syrup perfumed lassi.", price: "₹50" },
    { name: "Mango Lassi", category: "Lassi", description: "Alphonso mango blended lassi.", price: "₹50" },
    { name: "Dry Fruit Lassi", category: "Lassi", description: "Dry fruit loaded creamy lassi.", price: "₹60" },

    // Snacks
    { name: "French Fries", category: "Snacks", description: "Golden fries with house seasoning.", price: "₹59" },
    { name: "Veg Nuggets", category: "Snacks", description: "Crispy crumbed veg bites.", price: "₹59" },
    { name: "Veg Fingers", category: "Snacks", description: "Herbed veg finger fritters.", price: "₹59" },
    { name: "Potato Pops", category: "Snacks", description: "Cheesy potato poppers.", price: "₹59" },
    { name: "Chicken Nuggets", category: "Snacks", description: "Juicy chicken nuggets with dip.", price: "₹79" },
    { name: "Chicken Popcorn", category: "Snacks", description: "Crispy chicken popcorn bites.", price: "₹89" },
    { name: "Osmania Biscuits", category: "Snacks", description: "Hyderabadi tea-time classic.", price: "₹5" },
    { name: "Samosa", category: "Snacks", description: "Mini samosas fried crisp.", price: "₹5" },
    { name: "Oats Meal Bowl", category: "Snacks", description: "Savory oats with veggies.", price: "₹50" },

    // Veg Sandwiches
    { name: "Paneer Sandwich", category: "Veg Sandwiches", description: "Grilled paneer tikka filling.", price: "₹69" },
    { name: "Mushroom Sandwich", category: "Veg Sandwiches", description: "Butter sautéed mushrooms with cheese.", price: "₹69" },
    { name: "Mexican Pizza Sandwich", category: "Veg Sandwiches", description: "Beans, peppers and cheese melt.", price: "₹69" },
    { name: "Mexican BBQ Pizza Sandwich", category: "Veg Sandwiches", description: "BBQ glaze, veggies and cheese.", price: "₹69" },

    // Non-Veg Sandwiches
    { name: "Chicken Sandwich", category: "Non-Veg Sandwiches", description: "Grilled chicken with house sauce.", price: "₹79" },
    { name: "Crispy Chicken Sandwich", category: "Non-Veg Sandwiches", description: "Crispy fried chicken stuffed buns.", price: "₹79" },
    { name: "Mexican Chicken Pizza Sandwich", category: "Non-Veg Sandwiches", description: "Spicy Mexican chicken filling.", price: "₹79" },
    { name: "Mexican BBQ Chicken Pizza Sandwich", category: "Non-Veg Sandwiches", description: "BBQ chicken, cheese and jalapeños.", price: "₹79" },
    { name: "Tandoori Chicken Sandwich", category: "Non-Veg Sandwiches", description: "Smoky tandoori chicken sandwich.", price: "₹79" },

    // Chicken Wings
    { name: "Chicken Wings (2 Piece)", category: "Chicken Wings", description: "Two-piece crispy wings.", price: "₹49" },
    { name: "Chicken Wings (4 Piece)", category: "Chicken Wings", description: "Four-piece crispy wings.", price: "₹99" },
    { name: "Chicken Wings (6 Piece)", category: "Chicken Wings", description: "Six-piece crispy wings.", price: "₹129" },

    // Chicken Legs
    { name: "Chicken Legs (2 Piece)", category: "Chicken Legs", description: "Two crunchy chicken drumsticks.", price: "₹79" },
    { name: "Chicken Legs (4 Piece)", category: "Chicken Legs", description: "Four crunchy chicken drumsticks.", price: "₹149" },
    { name: "Chicken Legs (6 Piece)", category: "Chicken Legs", description: "Six crunchy chicken drumsticks.", price: "₹199" },

    // Chicken Lollipop
    { name: "Chicken Lollipop (2 Piece)", category: "Chicken Lollipop", description: "Two drumette-style lollipops.", price: "₹69" },
    { name: "Chicken Lollipop (4 Piece)", category: "Chicken Lollipop", description: "Four drumette-style lollipops.", price: "₹129" },
    { name: "Chicken Lollipop (6 Piece)", category: "Chicken Lollipop", description: "Six drumette-style lollipops.", price: "₹189" },

    // Chicken Strips
    { name: "Chicken Strips (2 Piece)", category: "Chicken Strips", description: "Two breaded chicken strips.", price: "₹59" },
    { name: "Chicken Strips (4 Piece)", category: "Chicken Strips", description: "Four breaded chicken strips.", price: "₹119" },
    { name: "Chicken Strips (6 Piece)", category: "Chicken Strips", description: "Six breaded chicken strips.", price: "₹179" }
];

const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
const menuSections = document.getElementById("menuSections");

const categories = [...new Set(menuItems.map((item) => item.category))];

function highlightActiveNav() {
    if (!navLinks) return;
    const currentPage = document.body?.dataset?.page;
    if (!currentPage) return;

    navLinks.querySelectorAll("[data-nav]").forEach((link) => {
        if (link.dataset.nav === currentPage) {
            link.classList.add("is-active");
        }
    });
}

function renderMenu() {
    if (!menuSections) return;
    menuSections.innerHTML = "";

    const grouped = categories
        .map((category) => ({
            category,
            items: menuItems.filter((item) => item.category === category),
        }))
        .filter((group) => group.items.length);

    grouped.forEach(({ category, items }) => {
        const wrapper = document.createElement("section");
        const slug = category.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
        wrapper.className = `menu__category menu__category--${slug}`;

        const title = document.createElement("h3");
        title.textContent = category;

        const list = document.createElement("ul");
        list.className = "menu__list";

        items.forEach((item) => {
            const listItem = document.createElement("li");
            listItem.className = "menu__item";

            const name = document.createElement("span");
            name.textContent = item.name;

            const price = document.createElement("span");
            price.textContent = item.price;

            listItem.append(name, price);
            list.appendChild(listItem);
        });

        wrapper.append(title, list);
        menuSections.appendChild(wrapper);
    });
}

if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
        navLinks.classList.toggle("is-open");
        navToggle.classList.toggle("is-open");
    });

    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("is-open");
            navToggle.classList.remove("is-open");
        });
    });
}

highlightActiveNav();

if (menuSections) {
    renderMenu();
}
