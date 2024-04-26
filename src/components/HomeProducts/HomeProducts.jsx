import React from "react";

import "./homeProducts.css";

export default function HomeProducts() {
  const products = [
    {
      title: "iPhone 15 Pro Max 256 GB - Azul Titanio (Titanium Blue)",
      img: "../../../public/assets/HomeProducts/iphone15.jpg",
    },
    {
      title: "iPhone 14 Pro Max 128 GB - Plateado (Silver)",
      img: "../../../public/assets/HomeProducts/iphone14.jpg",
    },
    {
      title: 'iPad Pro 12.9" M2 WiFi 128GB - Plata (Silver)',
      img: "../../../public/assets/HomeProducts/ipad.jpg",
    },
    {
      title: 'iPad Pro 11" M2 WiFi 256GB - Gris Espacial (Space Gray)',
      img: "../../../public/assets/HomeProducts/ipad2.jpg",
    },
  ];
  return (
    <section className='home-products'>
      <h2 className='home-products-title'>LOS MÁS BUSCADOS</h2>
      <div className='home-products-container'>
        {products.map((product, index) => {
          return (
            <div className='home-products-container-product' key={index}>
              <img className='home-products-container-product-img' src={product.img} alt={product.title} />
              <h4 className='home-products-container-product-title'>{product.title}</h4>
            </div>
          );
        })}
      </div>
    </section>
  );
}
