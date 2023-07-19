import { ItemDetailContainer } from "./components/ItemListContainer/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { HeaderEco } from "./components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderEco/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/categories" element={<ItemListContainer/>}/>
          <Route path="/categories/:categoria" element={<ItemListContainer/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
