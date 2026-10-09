import Contactos from "./Components/Contactos";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Indicacao from "./Components/Indicacao";
import Recuperacao from "./Components/Recuperacao";
import Destaques from "./Components/Destaques";
import Services from "./Components/Services";



export default function Home() {
  return (
    <div>
      <div>
     <Navbar />
     <Hero/> 
     <Destaques/>
      <Services/>
     
     <Indicacao/>
     <Recuperacao/>
     <Contactos/>
     
     </div>
     <Footer/>
    </div>
  );
}
