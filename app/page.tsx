import Contactos from "./Components/Contactos";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Indicacao from "./Components/Indicacao";
import Recuperacao from "./Components/Recuperacao";
import Convenios from "./Components/Convenios";
import Services from "./Components/Services";



export default function Home() {
  return (
    <div id="top">
      <div>
     <Navbar />
     <Hero/> 
    
      <Services/>
     <Convenios/>
     <Indicacao/>
     <Recuperacao/>
     <Contactos/>
     
     </div>
     <Footer/>
    </div>
  );
}
