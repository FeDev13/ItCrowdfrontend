import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";

const Testimonials = () => {
  return (
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32 text-center">
        <h2 className="mb-12 text-3xl font-bold">Customer reviews</h2>
        <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
          <div className="mb-12 md:mb-0">
            <div className="mb-6 flex justify-center">
              <img
                src={pic1}
                className="w-32 rounded-full shadow-lg dark:shadow-black/20"
              />
            </div>
            <h5 className="mb-2 text-lg font-bold">Mary</h5>
            <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
              Recreational player
            </h6>
            <p className="mb-4">
              Nice variety of racquets and customization
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 96 960 960"
                className="inline-block w-6"
              >
                <path
                  fill="currentColor"
                  d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z"
                />
              </svg>
            </p>
          </div>
          <div className="mb-12 md:mb-0">
            <div className="mb-6 flex justify-center">
              <img
                src={pic2}
                className="w-32 rounded-full shadow-lg dark:shadow-black/20"
              />
            </div>
            <h5 className="mb-2 text-lg font-bold">Lisa Cudrow</h5>
            <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
              Intermediate player
            </h6>
            <p className="mb-4">
              Great prices, excellent customer service
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 96 960 960"
                className="inline-block w-6"
              >
                <path
                  fill="currentColor"
                  d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z"
                />
              </svg>
            </p>
          </div>
          <div className="mb-0">
            <div className="mb-6 flex justify-center">
              <img
                src={pic3}
                className="w-32 rounded-full shadow-lg dark:shadow-black/20"
              />
            </div>
            <h5 className="mb-2 text-lg font-bold">John</h5>
            <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
              Advanced player
            </h6>
            <p className="mb-4">
              Shipping was fast, nice attention to detail
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 96 960 960"
                className="inline-block w-6"
              >
                <path
                  fill="currentColor"
                  d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z"
                />
              </svg>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
