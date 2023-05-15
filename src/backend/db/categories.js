import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    img: "/images/category-img-1.jpg",
    categoryName: "Flowers"
  },
  {
    _id: uuid(),
    img: "/images/category-img-2.jpg",
    categoryName: "Indoor"
  },
  {
    _id: uuid(),
    img: "/images/category-img-3.jpg",
    categoryName: "Outdoor"
  },
  {
    _id: uuid(),
    img: "/images/category-img-4.jpg",
    categoryName: "For Office Desk"
  },
];
