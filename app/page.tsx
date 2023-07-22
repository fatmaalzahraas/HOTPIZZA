import Footer from "./components/Footer";
import PizzaBanner from "./components/PizzaBanner";
import SinglePizza from "./components/SinglePizza";
import { getAllPizza } from "@/sanity/sanity-utilis";
export default async function Home() {
  const allPizza = await getAllPizza();
  if (allPizza.length === 0) {
    return (
      <div className="bg-hero h-screen flex flex-col items-center justify-center">
        <h1 className="text-[1.3rem] font-semibold text-white">404 | Not Found</h1>
      </div>
    )
  }
  return (
    <>
      <section>
        <PizzaBanner />
        <section className="py-10">
          <section className="container mx-auto px-4 md:px-7">
            <section className="grid xxs:grid-cols-1 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-9">
              {

                allPizza?.map((pizza) => (
                  <SinglePizza key={pizza._id} pizza={pizza} />
                ))
              }
            </section>
          </section>
        </section>

      </section>
      <Footer />

    </>
  )
}
