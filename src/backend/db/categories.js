import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    img: "https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-combo-packs-plants-5-best-fragrant-plants-16968509653132_210x210.jpg?v=1634209158",
    categoryName: "Flowers",
  },
  {
    _id: uuid(),
    img: "https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-combo-packs-plants-plant-pack-for-healthy-home-office-155522_210x210.jpg?v=1679750881",
    categoryName: "Indoor",
  },
  {
    _id: uuid(),
    img: "/images/categories/category-img-3.jpg",
    categoryName: "Outdoor",
  },
  {
    _id: uuid(),
    img: "https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-g-top-4-die-hard-succulents-pack-980804_210x210.jpg?v=1679751768",
    categoryName: "For TableTop",
  },
  {
    _id: uuid(),
    img: "https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-combo-packs-plants-pack-of-3-good-luck-jade-plants-in-ceramic-pots-16969154297996_210x210.jpg?v=1634225377",
    categoryName: "Medicinal",
  },
  {
    _id: uuid(),
    img: "/images/categories/category-img-6.jpg",
    categoryName: "Climbers",
  },
  {
    _id: uuid(),
    img: "/images/categories/category-img-7.jpg",
    categoryName: "Fruits",
  },
];
