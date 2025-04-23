import { useEffect, useState } from "react"
import "./App.css"

import Header from "./components/Header"
import Promotion from "./components/Promotion"
import CarrinhoOffCanva from "./components/CarrinhoOffCanva";

function App() {
  const [carrinhoItem, setCarrinhoItem] = useState([]);
  useEffect(()=>{
    localStorage.setItem('devcarrinho', JSON.stringify(carrinhoItem));
  },[carrinhoItem])

  useEffect(() => {
    const salvaCarrinho= localStorage.getItem('devcarrinho');
 salvaCarrinho && setCarrinhoItem(JSON.parse(salvaCarrinho));
    }, []);
    
  const handleAddCarrinho = (produto) => {
    setCarrinhoItem((itemAnterior) => {
      const existe = itemAnterior.find((item) => item.id === produto.id);
      return existe
        ? itemAnterior.map((item) =>
            item.id === produto.id
              ? { ...item, quantidade: item.quantidade + 1 }
              : item
          )
        : [...itemAnterior, { ...produto, quantidade: 1 }];
    });
  };
  const handleRemoveCarrinho = (produto) => {
    setCarrinhoItem((itemAnterior) =>
      itemAnterior.filter((item) => item.id !== produto.id)
    );
  };

  return (
    <>
    <Header contadorJogos={carrinhoItem.length} />
    <Promotion onAddCarrinho={handleAddCarrinho}/>
    <CarrinhoOffCanva onRemoveCarrinho={handleRemoveCarrinho} carrinhoItem={carrinhoItem} />
    </>
  )
}

export default App
