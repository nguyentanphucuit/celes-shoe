export const listCategories = [
  {
    id: "heels",
    name: "heels",
  },
  {
    id: "boots",
    name: "boots",
  },
  {
    id: "flats",
    name: "flats",
  },
];
export const listColors = [
  {
    class: "black",
    rgb: "",
    hex: "",
    name: "Black",
    id: "0degFPWKgU3Or52uR8xR",
  },
  {
    name: "Red",
    class: "red",
    rgb: "",
    hex: "",
    id: "60miPCsS0Arr6bD2ymGM",
  },
  {
    class: "blue",
    rgb: "",
    hex: "",
    name: "Blue",
    id: "TSImgTipxLhP6AyfhlpA",
  },
  {
    name: "White",
    hex: "",
    class: "white",
    rgb: "",
    id: "WXkvsQ46MWeedI04sWqZ",
  },
  {
    rgb: "",
    name: "Green",
    class: "green",
    hex: "",
    id: "axvU9b9Guri6Q97kFoWA",
  },
];

export const listSizes = [
  {
    id: "35",
    name: "35",
  },
  {
    id: "36",
    name: "36",
  },
  {
    id: "37",
    name: "37",
  },
  {
    id: "38",
    name: "38",
  },
  {
    id: "39",
    name: "39",
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
    type: "Flats",
    options: [
      {
        price: 456.99,
        color: "Red",
        sizes: [
          {
            size: "35",
            price: 19.99,
            inStock: true,
          },
          {
            inStock: false,
            price: 24.99,
            size: "36",
          },
          {
            inStock: true,
            price: 29.99,
            size: "37",
          },
        ],
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/celesshoe-6121f.appspot.com/o/products%2FCS-18.jpg?alt=media&token=5aa95feb-4913-4425-99e9-fa4795ab2637",
        discount: 31,
        inStock: false,
        quantity: 1,
      },
      {
        sizes: [
          {
            inStock: false,
            size: "38",
            price: 21.99,
          },
          {
            inStock: true,
            price: 26.99,
            size: "39",
          },
        ],
        color: "Black",
        inStock: true,
        discount: 31,
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/celesshoe-6121f.appspot.com/o/products%2FCS-18.jpg?alt=media&token=5aa95feb-4913-4425-99e9-fa4795ab2637",
        price: 234.99,
        quantity: 1,
      },
    ],
    title: "Flats",
    rating: 2.8,
    id: "0IkS8A1ZBu0XduaK8iai",
    subtitle: "Subtitle",
    category: "Flats",
  },
  {
    title: "Heels",
    category: "Heels",
    subtitle: "Subtitle",
    options: [
      {
        inStock: true,
        color: "Red",
        price: 12.99,
        discount: 2,
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/celesshoe-6121f.appspot.com/o/products%2FCS-18.jpg?alt=media&token=5aa95feb-4913-4425-99e9-fa4795ab2637",
        sizes: [
          {
            size: "37",
            inStock: true,
            price: 29.99,
          },
          {
            inStock: true,
            size: "38",
            price: 31.99,
          },
        ],
        quantity: 1,
      },
      {
        price: 12.99,
        inStock: true,
        color: "Black",
        quantity: 1,
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/celesshoe-6121f.appspot.com/o/products%2FCS-18.jpg?alt=media&token=5aa95feb-4913-4425-99e9-fa4795ab2637",
        discount: 2,
        sizes: [
          {
            size: "35",
            inStock: false,
            price: 24.99,
          },
        ],
      },
    ],
    type: "Heels",
    rating: 4.6,
    id: "33g7ulOloe7Ryr4ssa2r",
  },
  {
    subtitle: "Subtitle",
    id: "8uTN48myWGZspOs9vsD2",
    options: [
      {
        sizes: [
          {
            price: 22.99,
            size: "35",
            inStock: true,
          },
          {
            size: "36",
            price: 27.99,
            inStock: true,
          },
        ],
        quantity: 1,
        color: "Blue",
        inStock: true,
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/celesshoe-6121f.appspot.com/o/products%2FCS-14.jpg?alt=media&token=1137abaa-7a31-47f6-a264-1ffb83b696fb",
        discount: 25,
        price: 456.99,
      },
    ],
    type: "Flats",
    category: "Flats",
    rating: 2.8,
    title: "Flats",
  },
  {
    title: "Flats",
    type: "Flats",
    category: "Flats",
    subtitle: "Subtitle",
    options: [
      {
        price: 789.99,
        color: "Red",
        discount: 15,
        inStock: true,
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/celesshoe-6121f.appspot.com/o/products%2FCS-11.jpg?alt=media&token=201f0829-a995-4c20-938b-aebb0f7d43b0",
        sizes: [
          {
            size: "35",
            inStock: true,
            price: 19.99,
          },
          {
            price: 24.99,
            inStock: false,
            size: "36",
          },
        ],
        quantity: 1,
      },
      {
        price: 678.99,
        color: "Black",
        sizes: [
          {
            price: 29.99,
            size: "37",
            inStock: true,
          },
        ],
        inStock: true,
        quantity: 1,
        discount: 15,
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/celesshoe-6121f.appspot.com/o/products%2FCS-1.jpg?alt=media&token=16396d75-15cf-4714-b9e0-60f0b4c10cc0",
      },
      {
        price: 489.99,
        inStock: true,
        quantity: 1,
        discount: 15,
        color: "Blue",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/celesshoe-6121f.appspot.com/o/products%2FCS-18.jpg?alt=media&token=5aa95feb-4913-4425-99e9-fa4795ab2637",
        sizes: [
          {
            price: 21.99,
            inStock: true,
            size: "38",
          },
        ],
      },
    ],
    id: "AJP5RIEuMq3Sk1tXDKV7",
    rating: 3.3,
  },
  {
    type: "Boots",
    id: "CO6TUzmrOobplWSTMjfX",
    title: "Boots",
    subtitle: "Subtitle",
    category: "Boots",
    options: [
      {
        discount: 41,
        quantity: 1,
        price: 10.99,
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/celesshoe-6121f.appspot.com/o/products%2FCS-12.jpg?alt=media&token=82730e1b-b54f-4d53-9741-af858d3dfb82",
        inStock: true,
        color: "Blue",
        sizes: [
          {
            inStock: false,
            size: "37",
            price: 32.99,
          },
          {
            price: 34.99,
            size: "38",
            inStock: true,
          },
        ],
      },
    ],
    rating: 3.7,
  },
  {
    subtitle: "Subtitle",
    title: "Flats",
    rating: 3.8,
    id: "GsMOamt8WKFAkTPdaH6y",
    options: [
      {
        quantity: 1,
        sizes: [
          {
            inStock: true,
            size: "38",
            price: 21.99,
          },
        ],
        discount: 33,
        color: "Blue",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/celesshoe-6121f.appspot.com/o/products%2FCS-20.jpg?alt=media&token=df7eaf72-5275-4b35-b2e9-c988f3626579",
        inStock: true,
        price: 444.99,
      },
      {
        color: "Green",
        price: 444.99,
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/celesshoe-6121f.appspot.com/o/products%2FCS-20.jpg?alt=media&token=df7eaf72-5275-4b35-b2e9-c988f3626579",
        discount: 33,
        quantity: 1,
        sizes: [
          {
            size: "36",
            inStock: false,
            price: 24.99,
          },
        ],
        inStock: true,
      },
    ],
    type: "Flats",
    category: "Flats",
  },
  {
    subtitle: "Subtitle",
    id: "L0B96w1BBJG3sq94qTHx",
    rating: 2.8,
    category: "Flats",
    type: "Flats",
    options: [
      {
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/celesshoe-6121f.appspot.com/o/products%2FCS-2.jpg?alt=media&token=f61cd563-8c94-4cd6-97a1-bd433d78803f",
        price: 456.99,
        discount: 14,
        sizes: [
          {
            size: "38",
            inStock: true,
            price: 23.99,
          },
          {
            price: 28.99,
            inStock: false,
            size: "39",
          },
        ],
        color: "Green",
        quantity: 1,
        inStock: true,
      },
    ],
    title: "Flats",
  },
  {
    options: [
      {
        price: 10.99,
        discount: 13,
        inStock: true,
        sizes: [
          {
            size: "36",
            inStock: true,
            price: 25.99,
          },
        ],
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/celesshoe-6121f.appspot.com/o/products%2FCS-1.jpg?alt=media&token=16396d75-15cf-4714-b9e0-60f0b4c10cc0",
        quantity: 1,
        color: "White",
      },
    ],
    type: "Boots",
    id: "ORlo9jSkdS6gLlT7ruzP",
    title: "Boots",
    category: "Boots",
    rating: 4.1,
    subtitle: "Subtitle",
  },
  {
    options: [
      {
        sizes: [
          {
            price: 19.99,
            inStock: true,
            size: "35",
          },
        ],
        discount: 45,
        price: 456.99,
        inStock: true,
        quantity: 1,
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/celesshoe-6121f.appspot.com/o/products%2FCS-16.jpg?alt=media&token=4749ca07-3fcb-4083-b1f5-cd1cf91d0153",
        color: "Red",
      },
      {
        color: "Black",
        price: 456.99,
        discount: 45,
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/celesshoe-6121f.appspot.com/o/products%2FCS-16.jpg?alt=media&token=4749ca07-3fcb-4083-b1f5-cd1cf91d0153",
        inStock: true,
        quantity: 1,
        sizes: [
          {
            price: 24.99,
            inStock: false,
            size: "36",
          },
        ],
      },
      {
        color: "Green",
        price: 456.99,
        inStock: true,
        sizes: [
          {
            price: 29.99,
            inStock: true,
            size: "37",
          },
        ],
        quantity: 1,
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/celesshoe-6121f.appspot.com/o/products%2FCS-16.jpg?alt=media&token=4749ca07-3fcb-4083-b1f5-cd1cf91d0153",
        discount: 45,
      },
      {
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/celesshoe-6121f.appspot.com/o/products%2FCS-16.jpg?alt=media&token=4749ca07-3fcb-4083-b1f5-cd1cf91d0153",
        quantity: 1,
        sizes: [
          {
            size: "38",
            price: 21.99,
            inStock: true,
          },
        ],
        color: "White",
        price: 456.99,
        inStock: true,
        discount: 45,
      },
    ],
    subtitle: "Subtitle",
    id: "Xf7rrhdMLIfCZVzy6JCC",
    category: "Flats",
    title: "Flats",
    type: "Flats",
    rating: 2.8,
  },
  {
    type: "Flats",
    id: "Ya8sRH0t9LVhkJZzzlTw",
    title: "Flats",
    subtitle: "Subtitle",
    options: [
      {
        color: "Red",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/celesshoe-6121f.appspot.com/o/products%2FCS-17.jpg?alt=media&token=b4af70e4-fc43-44d6-8137-9992cc5842de",
        quantity: 1,
        inStock: true,
        sizes: [
          {
            price: 19.99,
            inStock: true,
            size: "35",
          },
        ],
        discount: 59,
        price: 456.99,
      },
      {
        price: 456.99,
        inStock: true,
        color: "Black",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/celesshoe-6121f.appspot.com/o/products%2FCS-17.jpg?alt=media&token=b4af70e4-fc43-44d6-8137-9992cc5842de",
        sizes: [
          {
            inStock: true,
            size: "37",
            price: 29.99,
          },
        ],
        discount: 59,
        quantity: 1,
      },
    ],
    category: "Flats",
    rating: 2.8,
  },
  {
    type: "Flats",
    category: "Flats",
    rating: 2.8,
    title: "Flats",
    subtitle: "Subtitle",
    options: [
      {
        sizes: [
          {
            inStock: true,
            size: "38",
            price: 21.99,
          },
        ],
        discount: 43,
        color: "Black",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/celesshoe-6121f.appspot.com/o/products%2FCS-15.jpg?alt=media&token=a9ca704c-a5c3-4c0b-821b-7f62fc951434",
        quantity: 1,
        price: 456.99,
        inStock: true,
      },
    ],
    id: "kzpdYthZATjl8c191bqj",
  },
  {
    type: "Heels",
    rating: 4.1,
    title: "Heels",
    category: "Heels",
    subtitle: "Subtitle",
    options: [
      {
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/celesshoe-6121f.appspot.com/o/products%2FCS-13.jpg?alt=media&token=8319c9c9-80b3-409a-88fd-32c541f153db",
        quantity: 1,
        color: "Red",
        inStock: true,
        discount: 27,
        price: 123.99,
        sizes: [
          {
            size: "35",
            inStock: true,
            price: 19.99,
          },
        ],
      },
    ],
    id: "o0xaqhekL3dEGEGlqjMb",
  },
  {
    id: "rEKFUdtt7Imt5qIFXAR6",
    options: [
      {
        discount: 31,
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/celesshoe-6121f.appspot.com/o/products%2FCS-19.jpg?alt=media&token=57925677-3a9a-4c32-9ce6-c05513c977e1",
        price: 456.99,
        sizes: [
          {
            size: "35",
            inStock: true,
            price: 26.99,
          },
          {
            inStock: false,
            price: 27.99,
            size: "36",
          },
          {
            size: "37",
            price: 30.99,
            inStock: true,
          },
        ],
        inStock: true,
        color: "Green",
        quantity: 1,
      },
    ],
    category: "Flats",
    subtitle: "Subtitle",
    type: "Flats",
    title: "Flats",
    rating: 2.8,
  },
  {
    title: "Flats",
    options: [
      {
        quantity: 1,
        color: "Black",
        inStock: true,
        discount: 20,
        sizes: [
          { size: "35", inStock: true, price: 19.99 },
          { size: "36", inStock: true, price: 29.99 },
        ],
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/celesshoe-6121f.appspot.com/o/products%2FCS-20.jpg?alt=media&token=df7eaf72-5275-4b35-b2e9-c988f3626579&_gl=1*r7g6ww*_ga*MTI5MjM1MTE4MS4xNjk1ODM0NTk4*_ga_CW55HF8NVT*MTY5OTExMjA4MS4zNi4xLjE2OTkxMTI3NTkuMzAuMC4w",
        price: 99.99,
      },
    ],
    category: "Flats",
    description: "Flats",
    rating: 4,
    id: "sQVW4G1zxrHIVjcxMgX4",
    subtitle: "Flats",
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

export const alertMessage = {
  success: "Item added successfully",
  warning:
    "Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.",
  error: "Remove item difficulty.",
};

export const listBlogs = [
  {
    id: "0",
    title: `Boost your conversion rate`,
    subtitle: `Boost your conversion rate`,
    date: "Mar 16, 2023",
    category: "Boots",
    contents: [
      `Secretary of State Antony Blinken on Thursday described gruesome
  photos and videos he reviewed depicting victims of Hamas'
  terrorist attack on Israeli civilians.`,
      `"It's hard to find the right words. It's beyond what anyone
  would ever want to imagine, much less, God forbid, experience,"
  he said at a press conference in Israel. "A baby, an infant,
  riddled with bullets. Soldiers beheaded. Young people burned
  alive. I could go on, but it's simply depravity in the worst
  imaginable way."`,
    ],
    featuredImage:
      "https://firebasestorage.googleapis.com/v0/b/celesshoe-6121f.appspot.com/o/products%2FCS-16.jpg?alt=media&token=4749ca07-3fcb-4083-b1f5-cd1cf91d0153",
  },
  {
    id: "1",
    title: `How to use search engine optimization to drive sales`,
    subtitle: `How to use search engine optimization to drive sales`,
    date: "Mar 10, 2023",
    category: "Flats",
    contents: [
      `Secretary of State Antony Blinken on Thursday described gruesome
  photos and videos he reviewed depicting victims of Hamas'
  terrorist attack on Israeli civilians.`,
      `"It's hard to find the right words. It's beyond what anyone
  would ever want to imagine, much less, God forbid, experience,"
  he said at a press conference in Israel. "A baby, an infant,
  riddled with bullets. Soldiers beheaded. Young people burned
  alive. I could go on, but it's simply depravity in the worst
  imaginable way."`,
    ],
    featuredImage:
      "https://firebasestorage.googleapis.com/v0/b/celesshoe-6121f.appspot.com/o/products%2FCS-17.jpg?alt=media&token=b4af70e4-fc43-44d6-8137-9992cc5842de",
  },
  {
    id: "2",
    title: `Improve your customer experience`,
    subtitle: `Improve your customer experience`,
    date: "Feb 12, 2023",
    category: "Heels",
    contents: [
      `Secretary of State Antony Blinken on Thursday described gruesome
  photos and videos he reviewed depicting victims of Hamas'
  terrorist attack on Israeli civilians.`,
      `"It's hard to find the right words. It's beyond what anyone
  would ever want to imagine, much less, God forbid, experience,"
  he said at a press conference in Israel. "A baby, an infant,
  riddled with bullets. Soldiers beheaded. Young people burned
  alive. I could go on, but it's simply depravity in the worst
  imaginable way."`,
    ],
    featuredImage:
      "https://firebasestorage.googleapis.com/v0/b/celesshoe-6121f.appspot.com/o/products%2FCS-17.jpg?alt=media&token=b4af70e4-fc43-44d6-8137-9992cc5842de",
  },
];

export const ITEMS_PER_PAGE = 8;

export const genericProducts = [
  { key: "id", title: "ID", type: "input", isDisabled: true },
  { key: "title", title: "Title", type: "input" },
  { key: "subtitle", title: "Subtitle", type: "input" },
  {
    key: "category",
    title: "Category",
    type: "select",
    listOptions: [...listCategories],
  },
];

export const genericProducts_option = [
  {
    key: "color",
    title: "Color",
    type: "select",
    listOptions: [...listColors],
  },
  { key: "price", title: "Price", type: "input" },
  {
    key: "discount",
    title: "Discount",
    type: "input",
  },
  {
    key: "imageUrl",
    title: "ImageUrl",
    type: "input",
  },
  {
    key: "quantity",
    title: "Quantity",
    type: "input",
  },
  {
    key: "size",
    title: "Size",
    type: "select",
    listOptions: [...listSizes],
  },
  {
    key: "inStock",
    title: "In Stock",
    type: "select",
    listOptions: [
      { id: "true", name: true },
      { id: "false", name: false },
    ],
  },
];

export const productTemplate = {
  id: "",
  title: "Flats",
  subtitle: "Flats",
  description: "Flats",
  category: "Flats",
  rating: 4,
  options: [
    {
      price: 99.99,
      discount: 20,
      quantity: 1,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/celesshoe-6121f.appspot.com/o/products%2FCS-20.jpg?alt=media&token=df7eaf72-5275-4b35-b2e9-c988f3626579&_gl=1*r7g6ww*_ga*MTI5MjM1MTE4MS4xNjk1ODM0NTk4*_ga_CW55HF8NVT*MTY5OTExMjA4MS4zNi4xLjE2OTkxMTI3NTkuMzAuMC4w",
      sizes: [
        { size: "35", inStock: true, price: 19.99 },
        { size: "36", inStock: true, price: 29.99 },
      ],
      color: "Black",
      inStock: true,
    },
  ],
};

export const emptyProductDetail = {
  isOpen: false,
  item: {
    id: "",
    title: "",
    subtitle: "",
    description: "",
    category: "",
    rating: "",
    options: [
      {
        price: "",
        discount: "",
        quantity: "",
        imageUrl: "",
        sizes: [""],
        color: "",
        inStock: true,
      },
    ],
  } as any,
};
