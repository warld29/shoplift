import Navbar from "../component/Navbar";
import { Link } from "react-router-dom";
import Slider from "../component/Slider";
import Headline from "../component/Headline";

const Shop = ({ text1, text2, text3 }) => {
  return (
    <>
      <Navbar />

      <section className="h-[calc(100vh-100px)]  text-black w-full  bg-slate-200">
        <div className="">
          <Headline
            text1={"FREE SHIPPING FOR EVERY DOMESTIC ORDER OVER N10,000"}
            text2={"FREE SHIPPING FOR EVERY DOMESTIC ORDER OVER N10,000"}
            text3={"FREE SHIPPING FOR EVERY DOMESTIC ORDER OVER N10,000"}
          />
          <div className="flex justify-between px-5 py-5">
            <h2 className="text-3xl font-bold font-serif">
              The Season's Best Seller
            </h2>
            <Link to={"/productcard"}>
              <p className="border-b border-black text-xl cursor-pointer">
                View All
              </p>
            </Link>
          </div>

          <Slider />
        </div>
      </section>
    </>
  );
};

export default Shop;
