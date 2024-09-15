import { Inter } from "next/font/google";
import Header from "@/components/shared/Header/Header.jsx";
import HeadComp from "@/components/shared/HeadComp";
import ProfileInfoBar from "@/components/shared/Profile/ProfileInfoBar";


export default function Home() {
  return (
    <>
      <HeadComp></HeadComp>

      <Header />

      <main className="main_container">
       Profile Page
       <ProfileInfoBar></ProfileInfoBar>
      </main>
    </>
  );
}