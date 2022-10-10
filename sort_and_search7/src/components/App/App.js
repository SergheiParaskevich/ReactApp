import { useEffect, useState } from "react";
import AddForm from "../pages/AddForm";
import { Context } from "../../context";
import ListProducts from "../pages/ListProducts";
import SearchForm from "../SearchForm";



function App() {
 
  const [products, setProduct] = useState([]);
  const [showProducts, setShowProducts] = useState(products);

  useEffect(() => {setShowProducts(products);
  }, [products]);

  const [searchWord, setSearchWord] = useState("");

  const searchProduct = ( title_start) => {
    const filteredProducts = products.filter(product => product.title.startsWith(title_start));
    setShowProducts(filteredProducts);
  }
 
  const addProduct = (title, price, sale) => {
    setProduct([...products,
      {
        id:Date.now(),
        title, price, sale
      }]);
    
    };

   return (
    <Context.Provider value={{addProduct, showProducts, searchProduct, setSearchWord}}>
      <AddForm/>
      <SearchForm/>
      <ListProducts/>
    </Context.Provider>
  );
}

export default App;
