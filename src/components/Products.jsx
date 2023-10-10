import { useEffect, useState } from "react";
import axios from "axios";
import { SideMenu } from "./SideMenu";
import { Rating } from "primereact/rating";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [description, setDescription] = useState([]);
  const [close, setClose] = useState(false);
  const menuItems = [...new Set(products.map((val) => val.description))];

  const filterProducts = (cat) => {
    const newItems = products.filter((newVal) => newVal.description === cat);
    setProducts(newItems);
  };

  const popUp = (Products) => {
    setDescription([{ ...Products }]);
    setClose(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        "https://itcrowdapi.onrender.com/products/allProducts"
      );
      console.log(data);
      setProducts(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className=" grid-cols-1 md:flex mt-16 ">
        <SideMenu
          products={products}
          menuItems={menuItems}
          filterProducts={filterProducts}
          setProducts={setProducts}
        />
        <div>
          <div className=" text-white flex flex-col md:grid grid-cols-2 xl:grid-cols-3 ">
            {close ? (
              <div>
                <div>
                  {description.map((item) => {
                    return (
                      <>
                        <div className=" absolute z-10 items-center w-[30%] ml-[10%] mt-24 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-16 mb-10 p-4">
                          <img
                            className="block mx-auto max-h-72 rounded-md rounded-bl-none rounded-br-none"
                            src={item.img_Url}
                            alt="product image"
                          />
                          <div className="text-center space-y-6 md:text-left flex flex-col">
                            <p className="text-gray-500 font-medium">
                              <span className="normal-case text-white my-10">
                                {item.description}
                              </span>
                            </p>
                            <span>${item.price}</span>
                            <Rating value={5} readOnly cancel={false} />
                          </div>
                          <button className="text-white mt-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-4">
                            Add to cart
                          </button>
                          <button
                            onClick={() => {
                              setClose(false);
                            }}
                            className="text-white bg-red-600 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                          >
                            Close
                          </button>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            ) : null}

            {products.map((product) => {
              return (
                <>
                  <div className="py-6 px-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-2 my-8">
                    <img
                      className="block mx-auto max-h-72 rounded-md rounded-bl-none rounded-br-none"
                      src={product.img_Url}
                      alt="racquet"
                    />
                    <div className="text-left space-y-3 flex items-center">
                      <div className="space-y-0.5 flex-grow">
                        <p className="text-lg text-black font-semibold">
                          <span>{product.name}</span>
                        </p>
                        <p className="text-black font-medium">
                          <span>{product.price}</span>
                        </p>
                      </div>
                    </div>
                    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-4">
                      Add to cart
                    </button>
                    <button
                      onClick={() => {
                        popUp(product);
                      }}
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      More info
                    </button>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
