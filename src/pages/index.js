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
              <h1>Categories</h1>
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
