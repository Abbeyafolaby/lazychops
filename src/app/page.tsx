import Image from "next/image";
import Link from "next/link";
// import { getFoods } from "@/sanity/lib/client";
import zigzag from "@/public/images/body_des.png";
import grill from "@/public/images/grill.png";
import monophy from "@/public/images/monophy.png";

export default async function Home() {
  // const foods = await getFoods();
  return (
    <main className="">
      <section className="hero_section relative">
        <div className="flex flex-col pt-40  justify-center items-center">
          <h2 className="text-2xl font-Ravie font-normal px-12 leading-10 md:hidden">
            Explore the world of fast food
          </h2>
          {/* <Image src={gif} alt="" className="absolute top-40 sm:hidden" /> */}
          <button
            type="button"
            className="hero_button text-white absolute bottom-12"
          >
            Order now
          </button>
        </div>
      </section>
      <section className="features_section font-Ravie md:font-Trap text-white font-normal px-8 md:px-24 py-12">
        <h2 className="text-2xl mb-8">This Week&apos;s Highlights</h2>
        <p className="font-Trap text-base">
          From the hottest & most ordered delicacies in our menu, this
          week&apos;s highlights features the Lazy Cheese Burger, Arabian <br />
          Shawarma & Broccolli Spaghetti.
        </p>
      </section>
      <section className="flex flex-col lg:flex-row lg:justify-between items-center px-8 md:px-24 py-12">
        {/* {foods.map((food) => (
          <div key={food._id} className="w-[15rem] mb-12">
            <div>
              <div className="mb-2">
                <Image
                  src={food.image}
                  alt={food.name}
                  width={120}
                  height={85}
                  className="w-[15rem] h-[15rem]"
                />
              </div>
              <h5 className="text-[#F1CEA9] text-l font-Trap">{food.name}</h5>
              <p className="text-[#F1CEA9] text-[10px] mb-2 font-Trap">
                {food.description}
              </p>
              <div className="flex justify-between items-center text-[14px]">
                <p className="text-white text-m font-Trap">${food.price}</p>
                <Link href="/menu">view more</Link>
              </div>
            </div>
          </div>
        ))}*/}
      </section>
      <div className="flex justify-center items-center">
        <Image src={zigzag} alt="" />
      </div>
      <section className="flex flex-col justify-center items-center px-8 md:px-24 py-12">
        <h2 className="text-2xl mb-8 font-Ravie">Restaurants</h2>
        <p className="font-Trap text-base mb-8">
          From the hottest delicacies in our menu, this week&apos;s highlights
          features the Lazy Cheese Burger & Arabian Shawarma.
        </p>
        <Image src={grill} alt="" />
      </section>
      <section className="flex flex-col justify-center items-center px-8 md:px-24 ">
        <Image src={monophy} alt="" />
        <h2 className="text-2xl mb-8 font-Ravie">
          Product <br /> Spotlight
        </h2>
        <p className="text-center mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim odio
          omnis porro magnam explicabo cupiditate laborum quis molestias eius
          hic.
        </p>
        <button className="bg-[#F1CEA9] py-1 px-3 text-black text-l font-Trap cursor-pointer">
          start shopping
        </button>
      </section>
    </main>
  );
}
