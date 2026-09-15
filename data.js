const restaurants = [
  {
    "name": "Hyderabad Biryani House",
    "cuisine": "Biryani • Indian",
    "rating": "4.8",
    "time": "25-30 min",
    "cost": "₹350 for two",
    "offer": "50%",
    "city": "Hyderabad",
    "state": "Telangana",
    "area": "Banjara Hills",
    "delivery": "25-40 min",
    "phone": "Demo contact",
    "address": "Banjara Hills, Hyderabad, Telangana"
  },
  {
    "name": "Warangal Spice Kitchen",
    "cuisine": "Telangana • Indian • Biryani",
    "rating": "4.7",
    "time": "20-30 min",
    "cost": "₹300 for two",
    "offer": "40%",
    "city": "Warangal",
    "state": "Telangana",
    "area": "Hanamkonda",
    "delivery": "25-40 min",
    "phone": "Demo contact",
    "address": "Hanamkonda, Warangal, Telangana"
  },
  {
    "name": "Deccan Dum Biryani",
    "cuisine": "Biryani • Mughlai",
    "rating": "4.9",
    "time": "30-35 min",
    "cost": "₹400 for two",
    "offer": "30%",
    "city": "Hyderabad",
    "state": "Telangana",
    "area": "Old City",
    "delivery": "25-40 min",
    "phone": "Demo contact",
    "address": "Old City, Hyderabad, Telangana"
  },
  {
    "name": "Tandoori Trails",
    "cuisine": "North Indian • Tandoor",
    "rating": "4.6",
    "time": "25-35 min",
    "cost": "₹450 for two",
    "offer": "35%",
    "city": "Hyderabad",
    "state": "Telangana",
    "area": "Jubilee Hills",
    "delivery": "25-40 min",
    "phone": "Demo contact",
    "address": "Jubilee Hills, Hyderabad, Telangana"
  },
  {
    "name": "South Indian Corner",
    "cuisine": "South Indian • Breakfast",
    "rating": "4.7",
    "time": "15-25 min",
    "cost": "₹220 for two",
    "offer": "40%",
    "city": "Warangal",
    "state": "Telangana",
    "area": "Kazipet",
    "delivery": "25-40 min",
    "phone": "Demo contact",
    "address": "Kazipet, Warangal, Telangana"
  },
  {
    "name": "Dosa Junction",
    "cuisine": "South Indian • Tiffins",
    "rating": "4.8",
    "time": "15-20 min",
    "cost": "₹200 for two",
    "offer": "50%",
    "city": "Hyderabad",
    "state": "Telangana",
    "area": "Ameerpet",
    "delivery": "25-40 min",
    "phone": "Demo contact",
    "address": "Ameerpet, Hyderabad, Telangana"
  },
  {
    "name": "Pizza Planet",
    "cuisine": "Pizza • Italian",
    "rating": "4.7",
    "time": "25-35 min",
    "cost": "₹450 for two",
    "offer": "30%",
    "city": "Hyderabad",
    "state": "Telangana",
    "area": "Madhapur",
    "delivery": "25-40 min",
    "phone": "Demo contact",
    "address": "Madhapur, Hyderabad, Telangana"
  },
  {
    "name": "Cheese & Crust",
    "cuisine": "Pizza • Italian • Pasta",
    "rating": "4.8",
    "time": "25-30 min",
    "cost": "₹500 for two",
    "offer": "40%",
    "city": "Hyderabad",
    "state": "Telangana",
    "area": "Kukatpally",
    "delivery": "25-40 min",
    "phone": "Demo contact",
    "address": "Kukatpally, Hyderabad, Telangana"
  },
  {
    "name": "Burger Garage",
    "cuisine": "Burgers • Fast Food",
    "rating": "4.6",
    "time": "20-25 min",
    "cost": "₹300 for two",
    "offer": "45%",
    "city": "Warangal",
    "state": "Telangana",
    "area": "Nakkalagutta",
    "delivery": "25-40 min",
    "phone": "Demo contact",
    "address": "Nakkalagutta, Warangal, Telangana"
  },
  {
    "name": "Crispy Bites",
    "cuisine": "Burgers • Snacks • Shakes",
    "rating": "4.7",
    "time": "20-30 min",
    "cost": "₹280 for two",
    "offer": "50%",
    "city": "Hanamkonda",
    "state": "Telangana",
    "area": "Balasamudram",
    "delivery": "25-40 min",
    "phone": "Demo contact",
    "address": "Balasamudram, Hanamkonda, Telangana"
  },
  {
    "name": "Wok Express",
    "cuisine": "Chinese • Noodles • Rice",
    "rating": "4.5",
    "time": "20-30 min",
    "cost": "₹320 for two",
    "offer": "35%",
    "city": "Hyderabad",
    "state": "Telangana",
    "area": "Hitech City",
    "delivery": "25-40 min",
    "phone": "Demo contact",
    "address": "Hitech City, Hyderabad, Telangana"
  },
  {
    "name": "Dragon Bowl",
    "cuisine": "Chinese • Asian",
    "rating": "4.6",
    "time": "25-30 min",
    "cost": "₹350 for two",
    "offer": "30%",
    "city": "Hyderabad",
    "state": "Telangana",
    "area": "Gachibowli",
    "delivery": "25-40 min",
    "phone": "Demo contact",
    "address": "Gachibowli, Hyderabad, Telangana"
  },
  {
    "name": "Shawarma Street",
    "cuisine": "Shawarma • Rolls • Fast Food",
    "rating": "4.6",
    "time": "15-25 min",
    "cost": "₹250 for two",
    "offer": "40%",
    "city": "Warangal",
    "state": "Telangana",
    "area": "Main Road",
    "delivery": "25-40 min",
    "phone": "Demo contact",
    "address": "Main Road, Warangal, Telangana"
  },
  {
    "name": "Momo Mania",
    "cuisine": "Momos • Chinese • Snacks",
    "rating": "4.5",
    "time": "20-25 min",
    "cost": "₹240 for two",
    "offer": "45%",
    "city": "Hyderabad",
    "state": "Telangana",
    "area": "Tolichowki",
    "delivery": "25-40 min",
    "phone": "Demo contact",
    "address": "Tolichowki, Hyderabad, Telangana"
  },
  {
    "name": "Sweet Cravings",
    "cuisine": "Desserts • Cakes • Ice Cream",
    "rating": "4.8",
    "time": "20-30 min",
    "cost": "₹280 for two",
    "offer": "30%",
    "city": "Hyderabad",
    "state": "Telangana",
    "area": "Begumpet",
    "delivery": "25-40 min",
    "phone": "Demo contact",
    "address": "Begumpet, Hyderabad, Telangana"
  },
  {
    "name": "Choco Bliss",
    "cuisine": "Desserts • Bakery",
    "rating": "4.7",
    "time": "20-30 min",
    "cost": "₹300 for two",
    "offer": "40%",
    "city": "Hyderabad",
    "state": "Telangana",
    "area": "Secunderabad",
    "delivery": "25-40 min",
    "phone": "Demo contact",
    "address": "Secunderabad, Hyderabad, Telangana"
  },
  {
    "name": "Fresh Sip",
    "cuisine": "Juices • Shakes • Beverages",
    "rating": "4.6",
    "time": "15-20 min",
    "cost": "₹220 for two",
    "offer": "25%",
    "city": "Warangal",
    "state": "Telangana",
    "area": "Subedari",
    "delivery": "25-40 min",
    "phone": "Demo contact",
    "address": "Subedari, Warangal, Telangana"
  },
  {
    "name": "Cafe Neon",
    "cuisine": "Coffee • Desserts • Snacks",
    "rating": "4.7",
    "time": "15-25 min",
    "cost": "₹350 for two",
    "offer": "35%",
    "city": "Hyderabad",
    "state": "Telangana",
    "area": "Kondapur",
    "delivery": "25-40 min",
    "phone": "Demo contact",
    "address": "Kondapur, Hyderabad, Telangana"
  },
  {
    "name": "Healthy Bowl",
    "cuisine": "Salads • Wraps • Healthy",
    "rating": "4.5",
    "time": "25-35 min",
    "cost": "₹380 for two",
    "offer": "20%",
    "city": "Hyderabad",
    "state": "Telangana",
    "area": "Manikonda",
    "delivery": "25-40 min",
    "phone": "Demo contact",
    "address": "Manikonda, Hyderabad, Telangana"
  },
  {
    "name": "Street Food Hub",
    "cuisine": "Indian • Chaat • Snacks",
    "rating": "4.6",
    "time": "15-25 min",
    "cost": "₹220 for two",
    "offer": "50%",
    "city": "Warangal",
    "state": "Telangana",
    "area": "Kazipet",
    "delivery": "25-40 min",
    "phone": "Demo contact",
    "address": "Kazipet, Warangal, Telangana"
  }
];
const items = [
  {
    "name": "Classic Chicken Burger",
    "category": "Burgers",
    "price": 199,
    "rating": 4.8,
    "description": "Juicy chicken patty, lettuce, tomato and creamy sauce.",
    "restaurant": "Hyderabad Biryani House"
  },
  {
    "name": "Crispy Chicken Burger",
    "category": "Burgers",
    "price": 229,
    "rating": 4.7,
    "description": "Crunchy chicken fillet with fresh vegetables and sauce.",
    "restaurant": "Warangal Spice Kitchen"
  },
  {
    "name": "Cheese Burger",
    "category": "Burgers",
    "price": 189,
    "rating": 4.6,
    "description": "Classic burger with a melted cheese slice.",
    "restaurant": "Deccan Dum Biryani"
  },
  {
    "name": "Paneer Burger",
    "category": "Burgers",
    "price": 179,
    "rating": 4.5,
    "description": "Spiced paneer patty with crisp lettuce and sauces.",
    "restaurant": "Tandoori Trails"
  },
  {
    "name": "Veg Supreme Burger",
    "category": "Burgers",
    "price": 159,
    "rating": 4.4,
    "description": "Loaded vegetable patty with cheese and fresh salad.",
    "restaurant": "South Indian Corner"
  },
  {
    "name": "Margherita Pizza",
    "category": "Pizza",
    "price": 249,
    "rating": 4.6,
    "description": "Classic tomato, mozzarella and Italian herbs.",
    "restaurant": "Dosa Junction"
  },
  {
    "name": "Farmhouse Pizza",
    "category": "Pizza",
    "price": 299,
    "rating": 4.7,
    "description": "Loaded with capsicum, onion, tomato, corn and cheese.",
    "restaurant": "Pizza Planet"
  },
  {
    "name": "Paneer Tikka Pizza",
    "category": "Pizza",
    "price": 329,
    "rating": 4.8,
    "description": "Tandoori paneer, onion, capsicum and cheese.",
    "restaurant": "Cheese & Crust"
  },
  {
    "name": "Chicken Tikka Pizza",
    "category": "Pizza",
    "price": 349,
    "rating": 4.8,
    "description": "Chicken tikka with onion, capsicum and mozzarella.",
    "restaurant": "Burger Garage"
  },
  {
    "name": "BBQ Chicken Pizza",
    "category": "Pizza",
    "price": 379,
    "rating": 4.7,
    "description": "Smoky BBQ chicken with cheese and herbs.",
    "restaurant": "Crispy Bites"
  },
  {
    "name": "Chicken Biryani",
    "category": "Biryani",
    "price": 249,
    "rating": 4.9,
    "description": "Fragrant basmati rice with tender chicken and aromatic spices.",
    "restaurant": "Wok Express"
  },
  {
    "name": "Mutton Biryani",
    "category": "Biryani",
    "price": 329,
    "rating": 4.9,
    "description": "Slow-cooked mutton with dum rice and traditional spices.",
    "restaurant": "Dragon Bowl"
  },
  {
    "name": "Egg Biryani",
    "category": "Biryani",
    "price": 199,
    "rating": 4.6,
    "description": "Dum rice with boiled eggs and aromatic masala.",
    "restaurant": "Shawarma Street"
  },
  {
    "name": "Paneer Biryani",
    "category": "Biryani",
    "price": 219,
    "rating": 4.6,
    "description": "Aromatic rice with spiced paneer and vegetables.",
    "restaurant": "Momo Mania"
  },
  {
    "name": "Veg Biryani",
    "category": "Biryani",
    "price": 179,
    "rating": 4.5,
    "description": "Fragrant rice cooked with fresh vegetables and spices.",
    "restaurant": "Sweet Cravings"
  },
  {
    "name": "Chicken 65 Biryani",
    "category": "Biryani",
    "price": 289,
    "rating": 4.8,
    "description": "Dum biryani topped with crispy chicken 65.",
    "restaurant": "Choco Bliss"
  },
  {
    "name": "Chicken Fried Rice",
    "category": "Chinese",
    "price": 199,
    "rating": 4.6,
    "description": "Wok-tossed rice with chicken, vegetables and sauces.",
    "restaurant": "Fresh Sip"
  },
  {
    "name": "Veg Fried Rice",
    "category": "Chinese",
    "price": 169,
    "rating": 4.5,
    "description": "Fried rice with colorful vegetables and Asian seasoning.",
    "restaurant": "Cafe Neon"
  },
  {
    "name": "Schezwan Fried Rice",
    "category": "Chinese",
    "price": 189,
    "rating": 4.6,
    "description": "Spicy fried rice with Schezwan sauce.",
    "restaurant": "Healthy Bowl"
  },
  {
    "name": "Chicken Hakka Noodles",
    "category": "Chinese",
    "price": 189,
    "rating": 4.6,
    "description": "Wok-tossed noodles with chicken and vegetables.",
    "restaurant": "Street Food Hub"
  },
  {
    "name": "Veg Hakka Noodles",
    "category": "Chinese",
    "price": 159,
    "rating": 4.5,
    "description": "Classic noodles with crunchy vegetables.",
    "restaurant": "Hyderabad Biryani House"
  },
  {
    "name": "Chilli Chicken",
    "category": "Chinese",
    "price": 229,
    "rating": 4.7,
    "description": "Crispy chicken tossed in a spicy chilli sauce.",
    "restaurant": "Warangal Spice Kitchen"
  },
  {
    "name": "Chicken Manchurian",
    "category": "Chinese",
    "price": 219,
    "rating": 4.6,
    "description": "Chicken bites in a tangy Manchurian gravy.",
    "restaurant": "Deccan Dum Biryani"
  },
  {
    "name": "Chilli Paneer",
    "category": "Chinese",
    "price": 199,
    "rating": 4.5,
    "description": "Paneer cubes tossed with peppers and chilli sauce.",
    "restaurant": "Tandoori Trails"
  },
  {
    "name": "Paneer Butter Masala",
    "category": "Indian",
    "price": 219,
    "rating": 4.7,
    "description": "Soft paneer in a creamy tomato and butter gravy.",
    "restaurant": "South Indian Corner"
  },
  {
    "name": "Butter Chicken",
    "category": "Indian",
    "price": 269,
    "rating": 4.8,
    "description": "Tender chicken in a rich tomato-butter gravy.",
    "restaurant": "Dosa Junction"
  },
  {
    "name": "Kadai Paneer",
    "category": "Indian",
    "price": 229,
    "rating": 4.6,
    "description": "Paneer with peppers and aromatic kadai masala.",
    "restaurant": "Pizza Planet"
  },
  {
    "name": "Dal Tadka",
    "category": "Indian",
    "price": 159,
    "rating": 4.5,
    "description": "Yellow lentils tempered with spices and herbs.",
    "restaurant": "Cheese & Crust"
  },
  {
    "name": "Chole Bhature",
    "category": "Indian",
    "price": 189,
    "rating": 4.6,
    "description": "Spiced chickpeas with fluffy bhature.",
    "restaurant": "Burger Garage"
  },
  {
    "name": "Butter Naan",
    "category": "Indian",
    "price": 49,
    "rating": 4.7,
    "description": "Soft tandoor naan brushed with butter.",
    "restaurant": "Crispy Bites"
  },
  {
    "name": "Garlic Naan",
    "category": "Indian",
    "price": 69,
    "rating": 4.8,
    "description": "Tandoor naan topped with garlic and herbs.",
    "restaurant": "Wok Express"
  },
  {
    "name": "Masala Dosa",
    "category": "South Indian",
    "price": 129,
    "rating": 4.8,
    "description": "Crispy dosa filled with spiced potato masala.",
    "restaurant": "Dragon Bowl"
  },
  {
    "name": "Plain Dosa",
    "category": "South Indian",
    "price": 99,
    "rating": 4.6,
    "description": "Golden crispy dosa served with chutney and sambar.",
    "restaurant": "Shawarma Street"
  },
  {
    "name": "Idly Sambar",
    "category": "South Indian",
    "price": 89,
    "rating": 4.7,
    "description": "Soft steamed idlis with sambar and chutney.",
    "restaurant": "Momo Mania"
  },
  {
    "name": "Medu Vada",
    "category": "South Indian",
    "price": 99,
    "rating": 4.7,
    "description": "Crispy lentil fritters with sambar and chutney.",
    "restaurant": "Sweet Cravings"
  },
  {
    "name": "Poori Masala",
    "category": "South Indian",
    "price": 109,
    "rating": 4.6,
    "description": "Fluffy pooris served with potato masala.",
    "restaurant": "Choco Bliss"
  },
  {
    "name": "Upma",
    "category": "South Indian",
    "price": 79,
    "rating": 4.4,
    "description": "Warm savory semolina breakfast with vegetables.",
    "restaurant": "Fresh Sip"
  },
  {
    "name": "Pongal",
    "category": "South Indian",
    "price": 99,
    "rating": 4.6,
    "description": "Comforting rice and lentil pongal with chutney.",
    "restaurant": "Cafe Neon"
  },
  {
    "name": "Chicken Shawarma",
    "category": "Rolls & Shawarma",
    "price": 179,
    "rating": 4.7,
    "description": "Juicy chicken with salad, garlic sauce and flatbread.",
    "restaurant": "Healthy Bowl"
  },
  {
    "name": "Paneer Shawarma",
    "category": "Rolls & Shawarma",
    "price": 159,
    "rating": 4.5,
    "description": "Spiced paneer with fresh salad and creamy sauce.",
    "restaurant": "Street Food Hub"
  },
  {
    "name": "Chicken Kathi Roll",
    "category": "Rolls & Shawarma",
    "price": 169,
    "rating": 4.6,
    "description": "Chicken, onion and sauces wrapped in flaky paratha.",
    "restaurant": "Hyderabad Biryani House"
  },
  {
    "name": "Paneer Roll",
    "category": "Rolls & Shawarma",
    "price": 149,
    "rating": 4.5,
    "description": "Spiced paneer with vegetables in a soft wrap.",
    "restaurant": "Warangal Spice Kitchen"
  },
  {
    "name": "French Fries",
    "category": "Fast Food",
    "price": 99,
    "rating": 4.5,
    "description": "Crispy golden fries with seasoning.",
    "restaurant": "Deccan Dum Biryani"
  },
  {
    "name": "Peri Peri Fries",
    "category": "Fast Food",
    "price": 129,
    "rating": 4.6,
    "description": "Crispy fries tossed in peri peri seasoning.",
    "restaurant": "Tandoori Trails"
  },
  {
    "name": "Chicken Nuggets",
    "category": "Fast Food",
    "price": 159,
    "rating": 4.5,
    "description": "Golden crispy chicken nuggets.",
    "restaurant": "South Indian Corner"
  },
  {
    "name": "Veg Momos",
    "category": "Momos",
    "price": 129,
    "rating": 4.5,
    "description": "Steamed dumplings filled with seasoned vegetables.",
    "restaurant": "Dosa Junction"
  },
  {
    "name": "Chicken Momos",
    "category": "Momos",
    "price": 159,
    "rating": 4.7,
    "description": "Steamed chicken dumplings with spicy dip.",
    "restaurant": "Pizza Planet"
  },
  {
    "name": "Fried Chicken Momos",
    "category": "Momos",
    "price": 179,
    "rating": 4.6,
    "description": "Crispy fried chicken momos with chilli dip.",
    "restaurant": "Cheese & Crust"
  },
  {
    "name": "Chocolate Cake",
    "category": "Desserts",
    "price": 149,
    "rating": 4.7,
    "description": "Moist chocolate sponge with creamy chocolate frosting.",
    "restaurant": "Burger Garage"
  },
  {
    "name": "Chocolate Brownie",
    "category": "Desserts",
    "price": 119,
    "rating": 4.6,
    "description": "Rich chocolate brownie with a fudgy center.",
    "restaurant": "Crispy Bites"
  },
  {
    "name": "Gulab Jamun",
    "category": "Desserts",
    "price": 89,
    "rating": 4.8,
    "description": "Soft milk-solid dumplings in warm sugar syrup.",
    "restaurant": "Wok Express"
  },
  {
    "name": "Rasmalai",
    "category": "Desserts",
    "price": 129,
    "rating": 4.7,
    "description": "Soft cheese dumplings in chilled saffron milk.",
    "restaurant": "Dragon Bowl"
  },
  {
    "name": "Chocolate Donut",
    "category": "Desserts",
    "price": 99,
    "rating": 4.6,
    "description": "Soft donut with chocolate glaze.",
    "restaurant": "Shawarma Street"
  },
  {
    "name": "Vanilla Ice Cream",
    "category": "Desserts",
    "price": 89,
    "rating": 4.5,
    "description": "Classic creamy vanilla scoop.",
    "restaurant": "Momo Mania"
  },
  {
    "name": "Chocolate Ice Cream",
    "category": "Desserts",
    "price": 99,
    "rating": 4.6,
    "description": "Rich chocolate ice cream.",
    "restaurant": "Sweet Cravings"
  },
  {
    "name": "Cold Coffee",
    "category": "Drinks",
    "price": 119,
    "rating": 4.5,
    "description": "Chilled creamy coffee topped with foam.",
    "restaurant": "Choco Bliss"
  },
  {
    "name": "Chocolate Milkshake",
    "category": "Drinks",
    "price": 149,
    "rating": 4.7,
    "description": "Thick chocolate milkshake.",
    "restaurant": "Fresh Sip"
  },
  {
    "name": "Mango Milkshake",
    "category": "Drinks",
    "price": 139,
    "rating": 4.6,
    "description": "Creamy mango shake made with ripe mango.",
    "restaurant": "Cafe Neon"
  },
  {
    "name": "Fresh Lime Soda",
    "category": "Drinks",
    "price": 79,
    "rating": 4.5,
    "description": "Refreshing sweet and tangy lime soda.",
    "restaurant": "Healthy Bowl"
  },
  {
    "name": "Mango Lassi",
    "category": "Drinks",
    "price": 109,
    "rating": 4.7,
    "description": "Creamy yogurt drink blended with mango.",
    "restaurant": "Street Food Hub"
  },
  {
    "name": "Fresh Orange Juice",
    "category": "Drinks",
    "price": 119,
    "rating": 4.6,
    "description": "Freshly prepared orange juice.",
    "restaurant": "Hyderabad Biryani House"
  },
  {
    "name": "Masala Chai",
    "category": "Drinks",
    "price": 59,
    "rating": 4.5,
    "description": "Hot Indian tea with aromatic spices.",
    "restaurant": "Warangal Spice Kitchen"
  }
];
