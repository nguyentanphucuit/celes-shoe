import React from "react";
import ShoeCard from "./shoe/ShoeCard";

const listCollections = [
  {
    id: "0",
    title: "Boots",
    subtitle: "Subtitle",
    price: 10.99,
    rating: 4.1,
    type: "saleBoots",
    url: "https://www.famousfootwear.com.au/cdn/shop/files/1_548b9483-f658-4e94-b3e3-a36b61d0ede6.jpg?v=1689230938",
  },
  {
    id: "1",
    title: "Heels",
    subtitle: "Subtitle",
    price: 12.99,
    rating: 4.6,
    type: "saleHeels",
    url: "https://www.famousfootwear.com.au/cdn/shop/files/2_66570120-3637-44a6-802d-1f619132023a.jpg?v=1689230938",
  },
  {
    id: "2",
    title: "Flats",
    subtitle: "Subtitle",
    price: 14.99,
    rating: 3.3,
    type: "saleFlats",
    url: "https://www.famousfootwear.com.au/cdn/shop/files/3_06f9f9be-f7d2-4672-b2ec-9aedf0700ecc.jpg?v=1689230938",
  },
  {
    id: "3",
    title: "Boots",
    subtitle: "Subtitle",
    price: 10.99,
    rating: 3.7,
    type: "saleBoots",
    url: "https://www.famousfootwear.com.au/cdn/shop/files/1_548b9483-f658-4e94-b3e3-a36b61d0ede6.jpg?v=1689230938",
  },
  {
    id: "4",
    title: "Heels",
    subtitle: "Subtitle",
    price: 12.99,
    rating: 4.1,
    type: "saleHeels",
    url: "https://www.famousfootwear.com.au/cdn/shop/files/2_66570120-3637-44a6-802d-1f619132023a.jpg?v=1689230938",
  },
  {
    id: "5",
    title: "Flats",
    subtitle: "Subtitle",
    price: 14.99,
    rating: 2.8,
    type: "saleFlats",
    url: "https://www.famousfootwear.com.au/cdn/shop/files/3_06f9f9be-f7d2-4672-b2ec-9aedf0700ecc.jpg?v=1689230938",
  },
];

const Collections = () => {
  return (
    <div className="grid grid-flow-row md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4">
      {listCollections.map((shoe) => (
        <ShoeCard
          id={shoe.id}
          key={shoe.id}
          imageUrl={shoe.url}
          title={shoe.title}
          subtitle={shoe.subtitle}
          quantity={0}
          price={shoe.price}
          rating={shoe.rating}
        />
      ))}
    </div>
  );
};

export default Collections;
