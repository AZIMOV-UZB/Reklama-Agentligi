import Header from "@/components/header/component";
import Carousel from "@/components/carusel/Carousel";
import Footer from "@/components/footer/Footer";
import Map from "@/components/map/Map";
import Shop from "@/components/shop/Shop";
import Jobs from "@/components/jobs/Jobs";
import Big from "@/components/big/Big";
export default function Home() {
  return (
    <>
      <Header />
      <Carousel />
      <div className="container">
        <p className="text-5xl font-bold my-6 text-white">FATH PRINT</p>
        <p className="title text-4xl font-bold my-6 text-white">
          TASHQI REKLAMA AGENTLIGI
        </p>
        <p className="text-xl font-bold my-6 text-white">
          SHAXSIY BIZNESINGIZNI REKLAMA ORQALI RIVOJLANTIRING
        </p>
      </div>
      <Shop />
      <Map />
      <Jobs />
      <Big/>
      <Footer />
    </>
  );
}
