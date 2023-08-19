import { ItemDetailContainer } from "./components/ItemListContainer/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { HeaderEco } from "./components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { Contacto } from "./components/Contacto/Contacto";
import {CartProvider } from "./components/context/CartContext";
import { Carro } from "./components/ItemListContainer/carro";
import { Checkout } from "./components/ItemListContainer/Checkout";

function App() {
  return (
    <div>
     <CartProvider>
     <BrowserRouter>
          <HeaderEco />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/categorias" element={<ItemListContainer />} />
            <Route path="/categorias/:categoria" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/contacto" element={<Contacto />}></Route>
            <Route path="/carrito" element={<Carro/>}></Route>
            <Route path="/checkout" element={<Checkout/>}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
     </CartProvider>
    </div>
  );
}

export default App;
