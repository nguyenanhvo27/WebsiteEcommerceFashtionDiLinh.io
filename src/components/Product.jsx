import React, { useContext } from "react";

import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import { BsCartPlusFill, BsEyeFill } from "react-icons/bs";
const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { id, image, category, title, price } = product;
  return (
    <div>
      <div className="mt-20 shadow-xl h-[250px] mb- relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          {/* img and button */}
          <div className="w-full mx-auto flex justify-center items-center">
            <img
              className="max-h-[170px] group-hover:scale-110 transition duration-300"
              src={image}
              alt="img product"
            />
          </div>
          {/* button add to cart and Product detail */}
          <div className="absolute top-1 right-1 border bg-white border-black p-2  items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all">
            <button onClick={() => addToCart(product,id)}>
              <div className="flex justify-center items-center bg-opacity-0 text-teal-800 w-5 h-5 bg-white-500 ">
                <BsCartPlusFill className="text-3xl" />
              </div>
            </button>
            <Link
              to={`/product/${id}`}
              className="w-5 h-5 bg-opacity-0 flex justify-center items-center text-black drop-shadow-xl"
            >
              <BsEyeFill />
            </Link>
          </div>
        </div>
      </div>
      <Link to={`/product/${product,id}`}>
        <h2 className="font-semibold mb-1">{title}</h2>
      </Link>
      <div>
        <h3 className="font-medium text-">Price:{price}$</h3>
        
      </div>
    </div>
  );
};

export default Product;
