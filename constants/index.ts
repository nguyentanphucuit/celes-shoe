export const footerLinks = [
  {
    title: "About",
    links: [
      { title: "How it works", url: "/" },
      { title: "Featured", url: "/" },
      { title: "Partnership", url: "/" },
      { title: "Bussiness Relation", url: "/" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "Events", url: "/" },
      { title: "Blog", url: "/" },
      { title: "Podcast", url: "/" },
      { title: "Invite a friend", url: "/" },
    ],
  },
  {
    title: "Socials",
    links: [
      { title: "Discord", url: "/" },
      { title: "Instagram", url: "/" },
      { title: "Twitter", url: "/" },
      { title: "Facebook", url: "/" },
    ],
  },
];

export const listCategories = [
  {
    name: "heels",
    value: "heels",
  },
  {
    name: "boots",
    value: "boots",
  },
  {
    name: "flats",
    value: "flats",
  },
];
export const listColors = [
  {
    name: "white",
    value: "white-500",
  },
  {
    name: "red",
    value: "red-500",
  },
  {
    name: "yellow",
    value: "yellow-500",
  },
  {
    name: "green",
    value: "green-500",
  },
  {
    name: "blue",
    value: "blue-500",
  },
  {
    name: "indigo",
    value: "indigo-500",
  },
  {
    name: "black",
    value: "black",
  },
];

export const listSizes = [
  {
    name: "S",
    value: "S",
  },
  {
    name: "M",
    value: "M",
  },
  {
    name: "L",
    value: "L",
  },
  {
    name: "XL",
    value: "XL",
  },
  {
    name: "XXL",
    value: "XXL",
  },
];

export const listSorts = [
  {
    name: "Most Popular",
    value: "most-popular",
  },
  {
    name: "Best Rating",
    value: "best-rating",
  },
  {
    name: "Newest",
    value: "newest",
  },
  {
    name: "Price: Low to High",
    value: "price-low-to-high",
  },
  {
    name: "Price: High to Low",
    value: "price-high-to-low",
  },
];

export const listProducts = [
  {
    id: "0",
    title: "Boots",
    category: "Boots",
    subtitle: "Subtitle",
    price: 10.99,
    rating: 4.1,
    quantity: 1,
    type: "Boots",
    imageUrl:
      "https://www.famousfootwear.com.au/cdn/shop/files/1_548b9483-f658-4e94-b3e3-a36b61d0ede6.jpg?v=1689230938",
    colors: [
      {
        name: "white",
        class: "bg-white",
        selectedClass: "ring-gray-400",
        inStock: true,
      },
      {
        name: "red",
        class: "bg-red-500",
        selectedClass: "ring-red-500",
        inStock: true,
      },
      {
        name: "black",
        class: "bg-black",
        selectedClass: "ring-gray-900",
        inStock: true,
      },
    ],
    sizes: [
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: false },
      { name: "XL", inStock: true },
      { name: "XXL", inStock: true },
    ],
  },
  {
    id: "1",
    title: "Heels",
    category: "Heels",
    subtitle: "Subtitle",
    price: 12.99,
    rating: 4.6,
    quantity: 1,
    type: "Heels",
    imageUrl:
      "https://www.famousfootwear.com.au/cdn/shop/files/2_66570120-3637-44a6-802d-1f619132023a.jpg?v=1689230938",
    colors: [
      {
        name: "white",
        class: "bg-white",
        selectedClass: "ring-gray-400",
        inStock: true,
      },
      {
        name: "indigo",
        class: "bg-indigo-500",
        selectedClass: "ring-indigo-500",
        inStock: true,
      },
      {
        name: "Black",
        class: "black",
        selectedClass: "ring-gray-900",
        inStock: true,
      },
    ],
    sizes: [
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: false },
      { name: "XL", inStock: true },
      { name: "XXL", inStock: true },
    ],
  },
  {
    id: "2",
    title: "Flats",
    category: "Flats",
    subtitle: "Subtitle",
    price: 789.99,
    rating: 3.3,
    quantity: 1,
    type: "Flats",
    imageUrl:
      "https://www.famousfootwear.com.au/cdn/shop/files/3_06f9f9be-f7d2-4672-b2ec-9aedf0700ecc.jpg?v=1689230938",
    colors: [
      {
        name: "White",
        class: "bg-white",
        selectedClass: "ring-gray-400",
        inStock: true,
      },
      {
        name: "Yellow",
        class: "bg-yellow-500",
        selectedClass: "ring-yellow-500",
        inStock: true,
      },
      {
        name: "Black",
        class: "bg-black",
        selectedClass: "ring-gray-900",
        inStock: true,
      },
    ],
    sizes: [
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
      { name: "XXL", inStock: true },
    ],
  },
  {
    id: "3",
    title: "Boots",
    category: "Boots",
    subtitle: "Subtitle",
    price: 10.99,
    rating: 3.7,
    quantity: 1,
    type: "Boots",
    imageUrl:
      "https://www.famousfootwear.com.au/cdn/shop/files/1_548b9483-f658-4e94-b3e3-a36b61d0ede6.jpg?v=1689230938",
    colors: [
      {
        name: "White",
        class: "bg-white",
        selectedClass: "ring-gray-400",
        inStock: false,
      },
      {
        name: "Green",
        class: "bg-green-500",
        selectedClass: "ring-green-500",
        inStock: true,
      },
      {
        name: "Black",
        class: "bg-black",
        selectedClass: "ring-gray-900",
        inStock: true,
      },
      {
        name: "Red",
        class: "bg-red-500",
        selectedClass: "ring-red-500",
        inStock: true,
      },
    ],
    sizes: [
      { name: "S", inStock: true },
      { name: "M", inStock: false },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
      { name: "XXL", inStock: true },
    ],
  },
  {
    id: "4",
    title: "Heels",
    category: "Heels",
    subtitle: "Subtitle",
    price: 123.99,
    rating: 4.1,
    quantity: 1,
    type: "Heels",
    imageUrl:
      "https://www.famousfootwear.com.au/cdn/shop/files/2_66570120-3637-44a6-802d-1f619132023a.jpg?v=1689230938",
    colors: [
      {
        name: "White",
        class: "bg-white",
        selectedClass: "ring-gray-400",
        inStock: true,
      },
      {
        name: "Blue",
        class: "bg-blue-500",
        selectedClass: "ring-blue-500",
        inStock: true,
      },
      {
        name: "Red",
        class: "bg-red-500",
        selectedClass: "ring-red-500",
        inStock: true,
      },
    ],
    sizes: [
      { name: "S", inStock: true },
      { name: "M", inStock: false },
      { name: "L", inStock: true },
      { name: "XL", inStock: false },
      { name: "XXL", inStock: true },
    ],
  },
  {
    id: "5",
    title: "Flats",
    category: "Flats",
    subtitle: "Subtitle",
    price: 456.99,
    rating: 2.8,
    quantity: 1,
    type: "Flats",
    imageUrl:
      "https://www.famousfootwear.com.au/cdn/shop/files/3_06f9f9be-f7d2-4672-b2ec-9aedf0700ecc.jpg?v=1689230938",
    colors: [
      {
        name: "White",
        class: "bg-white",
        selectedClass: "ring-gray-400",
        inStock: true,
      },
      {
        name: "Indigo",
        class: "bg-indigo-500",
        selectedClass: "ring-indigo-500",
        inStock: true,
      },
      {
        name: "Black",
        class: "bg-black",
        selectedClass: "ring-gray-900",
        inStock: true,
      },
    ],
    sizes: [
      { name: "S", inStock: false },
      { name: "M", inStock: true },
      { name: "L", inStock: false },
      { name: "XL", inStock: true },
      { name: "XXL", inStock: true },
    ],
  },
  {
    id: "6",
    title: "Flats",
    category: "Flats",
    subtitle: "Subtitle",
    price: 456.99,
    rating: 2.8,
    quantity: 1,
    type: "Flats",
    imageUrl:
      "https://www.famousfootwear.com.au/cdn/shop/files/3_06f9f9be-f7d2-4672-b2ec-9aedf0700ecc.jpg?v=1689230938",
    colors: [
      {
        name: "White",
        class: "bg-white",
        selectedClass: "ring-gray-400",
        inStock: true,
      },
      {
        name: "Green",
        class: "bg-green-500",
        selectedClass: "ring-gray-400",
        inStock: true,
      },
      {
        name: "Black",
        class: "bg-black",
        selectedClass: "ring-gray-900",
        inStock: true,
      },
    ],
    sizes: [
      { name: "S", inStock: false },
      { name: "M", inStock: true },
      { name: "L", inStock: false },
      { name: "XL", inStock: true },
      { name: "XXL", inStock: true },
    ],
  },
  {
    id: "7",
    title: "Flats",
    category: "Flats",
    subtitle: "Subtitle",
    price: 456.99,
    rating: 2.8,
    quantity: 1,
    type: "Flats",
    imageUrl:
      "https://www.famousfootwear.com.au/cdn/shop/files/3_06f9f9be-f7d2-4672-b2ec-9aedf0700ecc.jpg?v=1689230938",
    colors: [
      {
        name: "White",
        class: "bg-white",
        selectedClass: "ring-gray-400",
        inStock: true,
      },
      {
        name: "Green",
        class: "bg-green-500",
        selectedClass: "ring-gray-400",
        inStock: true,
      },
      {
        name: "Black",
        class: "bg-black",
        selectedClass: "ring-gray-900",
        inStock: true,
      },
    ],
    sizes: [
      { name: "S", inStock: false },
      { name: "M", inStock: true },
      { name: "L", inStock: false },
      { name: "XL", inStock: true },
      { name: "XXL", inStock: true },
    ],
  },
  {
    id: "8",
    title: "Flats",
    category: "Flats",
    subtitle: "Subtitle",
    price: 456.99,
    rating: 2.8,
    quantity: 1,
    type: "Flats",
    imageUrl:
      "https://www.famousfootwear.com.au/cdn/shop/files/3_06f9f9be-f7d2-4672-b2ec-9aedf0700ecc.jpg?v=1689230938",
    colors: [
      {
        name: "White",
        class: "bg-white",
        selectedClass: "ring-gray-400",
        inStock: true,
      },
      {
        name: "Blue",
        class: "bg-blue-500",
        selectedClass: "ring-blue-500",
        inStock: true,
      },
      {
        name: "Black",
        class: "bg-black",
        selectedClass: "ring-gray-900",
        inStock: true,
      },
    ],
    sizes: [
      { name: "S", inStock: false },
      { name: "M", inStock: true },
      { name: "L", inStock: false },
      { name: "XL", inStock: true },
      { name: "XXL", inStock: true },
    ],
  },
  {
    id: "9",
    title: "Flats",
    category: "Flats",
    subtitle: "Subtitle",
    price: 456.99,
    rating: 2.8,
    quantity: 1,
    type: "Flats",
    imageUrl:
      "https://www.famousfootwear.com.au/cdn/shop/files/3_06f9f9be-f7d2-4672-b2ec-9aedf0700ecc.jpg?v=1689230938",
    colors: [
      {
        name: "Red",
        class: "bg-red-500",
        selectedClass: "ring-red-500",
        inStock: true,
      },
      {
        name: "Green",
        class: "bg-green-500",
        selectedClass: "ring-gray-400",
        inStock: true,
      },
      {
        name: "Black",
        class: "bg-black",
        selectedClass: "ring-gray-900",
        inStock: true,
      },
    ],
    sizes: [
      { name: "S", inStock: false },
      { name: "M", inStock: true },
      { name: "L", inStock: false },
      { name: "XL", inStock: true },
      { name: "XXL", inStock: true },
    ],
  },
  {
    id: "10",
    title: "Flats",
    category: "Flats",
    subtitle: "Subtitle",
    price: 456.99,
    rating: 2.8,
    quantity: 1,
    type: "Flats",
    imageUrl:
      "https://www.famousfootwear.com.au/cdn/shop/files/3_06f9f9be-f7d2-4672-b2ec-9aedf0700ecc.jpg?v=1689230938",
    colors: [
      {
        name: "White",
        class: "bg-white",
        selectedClass: "ring-gray-400",
        inStock: true,
      },
      {
        name: "Green",
        class: "bg-green-500",
        selectedClass: "ring-gray-400",
        inStock: true,
      },
      {
        name: "Black",
        class: "bg-black",
        selectedClass: "ring-gray-900",
        inStock: true,
      },
    ],
    sizes: [
      { name: "S", inStock: false },
      { name: "M", inStock: true },
      { name: "L", inStock: false },
      { name: "XL", inStock: true },
      { name: "XXL", inStock: true },
    ],
  },
  {
    id: "11",
    title: "Flats",
    category: "Flats",
    subtitle: "Subtitle",
    price: 456.99,
    rating: 2.8,
    quantity: 1,
    type: "Flats",
    imageUrl:
      "https://www.famousfootwear.com.au/cdn/shop/files/3_06f9f9be-f7d2-4672-b2ec-9aedf0700ecc.jpg?v=1689230938",
    colors: [
      {
        name: "White",
        class: "bg-white",
        selectedClass: "ring-gray-400",
        inStock: true,
      },
      {
        name: "Green",
        class: "bg-green-500",
        selectedClass: "ring-gray-400",
        inStock: true,
      },
      {
        name: "Yellow",
        class: "bg-yellow-500",
        selectedClass: "ring-yellow-500",
        inStock: true,
      },
    ],
    sizes: [
      { name: "S", inStock: false },
      { name: "M", inStock: true },
      { name: "L", inStock: false },
      { name: "XL", inStock: true },
      { name: "XXL", inStock: true },
    ],
  },
  {
    id: "12",
    title: "Flats",
    category: "Flats",
    subtitle: "Subtitle",
    price: 444.99,
    rating: 3.8,
    quantity: 1,
    type: "Flats",
    imageUrl:
      "https://www.famousfootwear.com.au/cdn/shop/files/3_06f9f9be-f7d2-4672-b2ec-9aedf0700ecc.jpg?v=1689230938",
    colors: [
      {
        name: "White",
        class: "bg-white",
        selectedClass: "ring-gray-400",
        inStock: true,
      },
      {
        name: "Green",
        class: "bg-green-500",
        selectedClass: "ring-gray-400",
        inStock: true,
      },
      {
        name: "Indigo",
        class: "bg-indigo-500",
        selectedClass: "ring-indigo-500",
        inStock: true,
      },
    ],
    sizes: [
      { name: "S", inStock: false },
      { name: "M", inStock: true },
      { name: "L", inStock: false },
      { name: "XL", inStock: true },
      { name: "XXL", inStock: true },
    ],
  },
];

export const listFilters = {
  categories: [],
  colors: [],
  minPrice: 0,
  maxPrice: 0,
  sizes: [],
  text: "",
};

export const ITEMS_PER_PAGE = 8;
