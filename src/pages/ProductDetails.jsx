import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";
const ProductDetails = () => {
  //get id product from url

  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(ProductContext);

  const product = products.find((item) => {
    return item.id === parseInt(id);
  });
  console.log(product);
  //neu product not found
  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        loading...
      </section>
    );
  }
  const { title, price, description, image } = product;
  return (
    <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-centers">
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img className="max-w-[200px] lg:,ax-w-sm" src={image} />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-medium mb-2 mx-auto lg:mx-0">{title}</h1>
            <div className="text-xl text-red-500 font-medium mb-6">
              <span className="text-black">Price:</span> {price} $
            </div>
            <span className="text-black font-medium text-xl">
              Description:
            </span>
            <p>{description}</p>
            <div>
              <button
                onClick={() => addToCart(product, product.id)}
                className="mt-6 bg-black py-4 px-8 text-white"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
