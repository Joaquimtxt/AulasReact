import { useEffect, useState } from "react"
import "./App.css"

import Header from "./components/Header"
import Promotion from "./components/Promotion"

function App() {
const [carrinhoItem, setCarrinhoItem] = useState([]);
const[mostrarCarrinho, setMostrarCarrinho] = useState(false);

useEffect(() => {
  const salvaCarrinho = localStorage.getItem("carrinho-devSteam");
  salvaCarrinho && 
});

const handleAdicionarCarrinho = (produto) => {
setCarrinhoItem((produtosAnteriores)=>{
  const existing = produtosAnteriores.find((item) => item.id === produto.id);
  if (existing) {
    return produtosAnteriores.map((item) =>
      item.id === produto.id ? { ...item, quantidade: item.quantidade + 1 } : item
    );
  }else{
    return [...produtosAnteriores, { ...produto, quantidade: 1 }];
  }
})
}

  return (
    <>
  <Header contadorJogos={2} />
  <Promotion adicionarCarrinho={handleAdicionarCarrinho}/>
    </>
  )
}

export default App
