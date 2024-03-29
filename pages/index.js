import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Info from "../components/Info";
import ImageSlider from "../components/ImageSlider";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Quicky</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <section>
          <Banner />
        </section>
        {/* TODO: HOW it Works section */}
        <section>
          <Info />
        </section>
        {/* TODO: Customer reviews section */}
        <section className="bg-pink-50">
          <h1 className="text-2xl lg:text-5xl text-center p-4  lg:pt-16 font-semibold bg-gradient-to-br bg-clip-text from-[#F72585] to-[#3A0CA3] text-transparent ">
            Our Satisfied Customers
          </h1>
          {/* <ImageSlider /> */}
        </section>
      </main>
      ;
      <Footer />
    </div>
  );
}
