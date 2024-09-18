import './App.css';
import Card2 from './Components/Card2';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Card from './Components/Card';



function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className='text-center'>
        <div className='text-4xl font-bold'>Browse The Range</div>
        <div>lorem ipsum dolor sit amet, slahcie lschke lasord</div>
      </div> 
      <div className='flex justify-around'>
        <div><Card2 source="/Pujo-flower.jpg"></Card2><div className='text-center m-1'>Pujo Flower</div></div>
        <div><Card2 source="/Bouquets-big.webp"></Card2><div className='text-center m-1'>Bouquets</div></div>
        <div><Card2 source="/exotic-flower.jpg"></Card2><div className='text-center m-1'>Exotic Flower</div></div>
      </div>
      <div className='text-center'>
        <div className='text-4xl font-bold'>Our Products</div>
        <div className='flex justify-around'>
          <Card source="/bouquet.webp" flower="Sunflower Bouquet" store="Meesha store" price="1800"></Card>
          <Card source="/lily.jpg" flower="Lily" store="Sharma Fourist" price="40"></Card>
          <Card source="/orange flower.jpg" flower="Orange Rose" store="Modern Flourists" price="120"></Card>
          <Card source="/marigold.webp" flower="Marigold" store="Sharma Flourist" price="20"></Card>
        </div>
        <div className='flex justify-around'>
          <Card source="/White-lotus.webp" flower="White Lotus" store="Modern Flourists" price="70"></Card>
          <Card source="/red velvet.avif" flower="Red Rose" store="Meesha store" price="19"></Card>
          <Card source="/China rose.jpg" flower="China Rose" store="Sharma Flourist" price="10"></Card>
          <Card source="/white bouquet.jpg" flower="White Gold Bouquet" store="Modern Flourists" price="2500"></Card>
        </div>
      </div>
      <Footer></Footer>
    </>  
  );
}

export default App;
