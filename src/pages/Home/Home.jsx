import React from "react";
import HomeCarousel from "../../components/HomeCarousel/HomeCarousel";
import HomeInfo from "../../components/HomeInfo/HomeInfo";
import HomeProducts from "../../components/HomeProducts/HomeProducts";

export default function Home() {
  return (
    <main>
      <HomeCarousel />
      <HomeProducts />
      <HomeInfo />
    </main>
  );
}
