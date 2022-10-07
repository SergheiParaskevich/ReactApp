import { useEffect, useState } from "react";
import AddForm from "../pages/AddForm";
import { Context } from "../../context";
import ListProducts from "../pages/ListProducts";



function App() {
 
  
  const [products, setProduct] = useState([]);
  const [showProducts, setShowProducts] = useState([products]);
  const [searchWord, setSearchWord] = useState("");

  const searchProduct = ( title_start) => {
    const filteredProducts = products.filter(product => product.title.startsWith(title_start));
    setShowProducts(filteredProducts);
  }
 
  useEffect(searchProduct, [products,  searchProduct]);

  const addProduct = (title, price, sale) => {
    setProduct([...products,
      {
        id:Date.now(),
        title, price, sale
      }]);
        console.log(sale);
    };

   

  return (
    <Context.Provider value={{addProduct, showProducts, searchProduct, setSearchWord}}>
      <AddForm/>
      <ListProducts/>
    </Context.Provider>
  );
}

export default App;
