import React, { useEffect } from "react";
import { WooCommerce } from "@/libs/woocommerce";

const Home = () => {
  useEffect(() => {
    WooCommerce.get("products")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, []);
  
  return <div>Home</div>;
};

export default Home;
