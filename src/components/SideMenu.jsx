export const SideMenu = ({
  menuItems,
  filterProducts,
  setProducts,
  products,
}) => {
  return (
    <div className=" bg-gradient-to-r from-gray-400 via-gray-500 to-gray-700 flex-wrap md:flex-col p-8 text-center md:w-[30%]  ">
      {menuItems.map((val) => (
        <button
          onClick={() => filterProducts(val)}
          key={val.id}
          className="inline-block rounded-md border border-transparent dark:bg-gray-800 dark:border-gray-700 px-8 py-1 text-center font-medium text-white my-8 lg:w-[60%] mx-1"
        >
          {val}
        </button>
      ))}
      <button
        onClick={() => setProducts(products)}
        className="inline-block rounded-md border border-transparent dark:bg-gray-800 dark:border-gray-700 px-8 py-1 text-center font-medium text-white my-8 lg:w-[60%]"
      >
        All
      </button>
    </div>
  );
};
