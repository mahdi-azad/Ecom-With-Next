import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "@/components/shared/Header/Header.jsx";
import SliderComponent from "@/components/home/SliderComponent.jsx";
import BasicService from "@/components/home/BasicService";
import dynamic from "next/dynamic";
import HeadComp from "@/components/shared/HeadComp";


const FeaturedProduct = dynamic(
  async() => await import("@/components/home/FeaturedProduct"),
  {
    ssr: false,
  }
)
// import FeaturedProduct from "@/components/home/FeaturedProduct";



const inter = Inter({ subsets: ["latin"] });

export default function Home({ featuredProduct}) {
  return (
    <>
      <HeadComp></HeadComp>

      <Header />

      <main className="main_container">
       
        
          <div className="row">

            <div className="col-lg-3">
              <h3 className="border border-dark">Electronic Devices</h3>
              <h3 className="border border-dark">Electronic Accessories</h3>
              <h3 className="border border-dark">TV & Home Appliances</h3>
              <h3 className="border border-dark">Health & Beauty</h3>
              <h3 className="border border-dark">Babies & Toys</h3>
              <h3 className="border border-dark">Groceries & Pets</h3>
              <h3 className="border border-dark">Home & Lifestyle</h3>
              <h3 className="border border-dark">Women's Fashion</h3>
              <h3 className="border border-dark">Men's Fashion</h3>
              <h3 className="border border-dark">Watches & Accessories</h3>
              <h3 className="border border-dark">Sports & Outdoor</h3>
            </div>

            <div className="col-lg-9 col-md-12">
              <div className="slider_container">
                <SliderComponent />
                <BasicService />
              </div>
            </div>
          </div>

          <div className="featured">
            <FeaturedProduct featuredProduct={featuredProduct}/>
          </div>
      </main>
    </>
  );
}

// export async function getServerSideProps() {
//   try {
//     const res = await axios.get("/product/getfeatured")
//     if (res.data?.success) {
//       const featuredProduct = res.data?.products;

//       return {
//         props: {
//           featuredProduct
//         }
//       }
//     }
//   } catch (error) {
//     console.log(error);
//     return {
//       props: {
//         featuredProduct: []
//       }
//     }
//   }
// }
