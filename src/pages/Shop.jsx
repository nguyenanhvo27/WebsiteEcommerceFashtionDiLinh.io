import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";
import Product from "../components/Product";
import Hero from "../components/Hero";
import Header from "../components/Header";
const Home = () => {
  //get products tu products context
  const { products } = useContext(ProductContext);

  //loc san pham
  const filteredProduct = products.filter((item) => {
    return item.category;
  });
  ////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <div>
      <h1 className=" mt-5 text-center font-bold text-4xl">
        Home <Link to={"/about"}>/About</Link>
      </h1>

      <section className="py-16">
        <div className="container mx-auto">
          <div className="mx-[490px] flex w-[500px] rounded-xl bg-slate-300  items-center">
            <input
              type="search"
              mane="search"
              id="search"
              placeholder="search"
              className=" w-full border-none bg-transparent px-4 py-1 text-gray-900 outline-none"
            ></input>
            <button className="m-2 rounded bg-green-700 px-4 py-2 text-white">
              Search
            </button>
          </div>
          <div className="flex">
            <div className="flex-1 w-48">
              <h1></h1>
            </div>
            <div
              className=" flex w- grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[25px]
       "
            >
              {filteredProduct.map((product) => {
                return <Product product={product} key={product.id} />;
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
