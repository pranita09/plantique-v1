import "./Slider.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const slides = [
  "https://cdn.shopify.com/s/files/1/0047/9730/0847/files/nurserylive-home-page-banner-combo-pack-v3_1346x499.jpg?v=1636743217",
  "https://cdn.shopify.com/s/files/1/0047/9730/0847/files/nurserylive-home-page-cactus-and-succulent-banner-v3_6f9a298f-e6db-4a5c-9357-2a35f512f084_1346x499.jpg?v=1637848242",
  "https://cdn.shopify.com/s/files/1/0047/9730/0847/files/nurserylive-home-page-banner-balcony-and-terrace-garden-metal-stand-v3_4976c128-13ab-4328-b195-64b88639692a_1349x500.jpg?v=1636743197",
];

function Slider() {
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setSelectedImage((selectedImage) =>
        selectedImage < 2 ? selectedImage + 1 : 0
      );
    }, 4000);
  }, []);

  return (
    <div className="slider-container">
      <Link to="/store">
        <img src={slides[selectedImage]} alt={`banner${selectedImage + 1}`} />
      </Link>
    </div>
  );
}

export default Slider;
