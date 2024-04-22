import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./homeCarousel.css";

export default function HomeCarousel() {
  const imgs = [
    "../../../public/assets/HomeCarousel/ipads.jpg",
    "../../../public/assets/HomeCarousel/iphone.jpg",
    "../../../public/assets/HomeCarousel/macbook1.jpg",
    "../../../public/assets/HomeCarousel/macbook2.jpg",
  ];

  return (
    <section>
      <Carousel data-bs-theme='dark' controls={false}>
        {imgs.map((img, index) => {
          return (
            <Carousel.Item key={index}>
              <img className='d-block w-100 carousel-item-img' src={img} alt='Apple' />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </section>
  );
}
