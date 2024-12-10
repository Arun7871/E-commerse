import product1 from "./product-1.jpg";
import product2 from "./product-2.jpg";
import product3 from "./product-3.jpg";
import product4 from "./product-4.jpg";
import product5 from "./product-5.jpg";
import product6 from "./product-6.jpg";
import product7 from "./product-7.jpg";
import product8 from "./product-8.jpg";

const Product = [
  {
    id: 1,
    pro_name: "Striped Flutter Sleeve Overhands",
    category: "womens",
    image: product1,
    new_price: 150,
    old_price: 200,
  },
  {
    id: 2,
    pro_name: "Velvet Dream Wrap",
    category: "womens",
    image: product2,
    new_price: 120,
    old_price: 170,
  },
  {
    id: 3,
    pro_name: "Mystic Aura Tunic",
    category: "womens",
    image: product3,
    new_price: 180,
    old_price: 250,
  },
  {
    id: 4,
    pro_name: "Crystal Breeze Hoodie",
    category: "mens",
    image: product4,
    new_price: 90,
    old_price: 130,
  },
  {
    id: 5,
    pro_name: "Twilight Feather Scarf",
    category: "womens",
    image: product5,
    new_price: 200,
    old_price: 270,
  },
  {
    id: 6,
    pro_name: "Sapphire Glow Cardigan",
    category: "kids",
    image: product6,
    new_price: 110,
    old_price: 150,
  },
  {
    id: 7,
    pro_name: "Emerald Ripple Tee",
    category: "mens",
    image: product7,
    new_price: 140,
    old_price: 190,
  },
  {
    id: 8,
    pro_name: "Golden Horizon Jacket",
    category: "womens",
    image: product8,
    new_price: 175,
    old_price: 230,
  },
  {
    id: 9,
    pro_name: "Golden Horizon Jacket",
    category: "kids",
    image: product3,
    new_price: 175,
    old_price: 230,
  },
  {
    id: 10,
    pro_name: "Golden Horizon Jacket",
    category: "kids",
    image: product5,
    new_price: 175,
    old_price: 230,
  },
  {
    id: 11,
    pro_name: "Golden Horizon Jacket",
    category: "mens",
    image: product1,
    new_price: 175,
    old_price: 230,
  },
  {
    id: 12,
    pro_name: "Golden Horizon Jacket",
    category: "womens",
    image: product4,
    new_price: 175,
    old_price: 230,
  },
  {
    id: 13,
    pro_name: "Golden Horizon Jacket",
    category: "kids",
    image: product5,
    new_price: 175,
    old_price: 230,
  },
  {
    id: 14,
    pro_name: "Golden Horizon Jacket",
    category: "mens",
    image: product1,
    new_price: 175,
    old_price: 230,
  },
  {
    id: 15,
    pro_name: "Golden Horizon Jacket",
    category: "kids",
    image: product3,
    new_price: 175,
    old_price: 230,
  },
  // Repeated products with unique IDs
  ...Array.from({ length: 39 }, (_, i) => ({
    id: 16 + i,
    pro_name: `Product ${16 + i}`,
    category: ["mens", "womens", "kids"][(i % 3)],
    image: [product1, product2, product3, product4, product5, product6, product7, product8][i % 8],
    new_price: 100 + (i % 50),
    old_price: 150 + (i % 50),
  })),
];

export default Product;
