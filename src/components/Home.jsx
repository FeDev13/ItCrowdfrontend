import { Link } from "react-router-dom";
import { Features } from "./Features";
import Testimonials from "./Testimonials";
import { motion } from "framer-motion";

export const Home = () => {
  return (
    <>
      <motion.div
        animate={{ x: 10 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        <main className="relative overflow-hidden bg-transparent mt-72 ">
          <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
            <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
              <div className="sm:max-w-lg">
                <h1 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">
                  Getting your racquet has never been so easy!
                </h1>
                <p className="mt-4 text-xl text-black">
                  Choose from our database´s selected premium racquet and start
                  your match righ now
                </p>
              </div>
              <div>
                <div className="mt-10">
                  {/* Decorative image grid */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                  >
                    <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                      <div className="flex items-center space-x-6 lg:space-x-8">
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                            <img
                              src="https://www.wilson.com/sites/default/files/media/Blade_Body.jpg"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                        </div>
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="https://www.mistertennis.com/images/2021-media/babolat-pure-aero-rafa-racchetta-tennis-yellow-orange-purple-101455_K.jpg"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVYYAqLP-3jLip7IabihGrxBZEqSvNNBzmCA&usqp=CAU"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="https://imageio.forbes.com/specials-images/imageserve/6028313f2b423fda4b0d2f21/Prince-Riptstick-tennis-racket/960x0.png?format=png&width=960"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                        </div>
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="https://www.fromuthtennis.com/skins/frm/Images/Home/wilson-shift-tennis-racquet.webp"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="https://img.tennis-warehouse.com/watermark/rsg.php?path=/marketing/ADEXTPOD-ad.jpg&nw=550"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Link to="/products">
                    {" "}
                    <button className="inline-block rounded-md border border-transparent bg-orange-700 px-8 py-3 text-center font-medium text-white">
                      See our products
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
        <div className=" mt-20">
          <Features />
        </div>
        <div className=" mt-20">
          <Testimonials />
        </div>
      </motion.div>
    </>
  );
};
