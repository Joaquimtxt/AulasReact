import React from 'react'
import Promocard from './Promocard'

const Promotion = () => {
  return (
    <div id='promotion'>
        <h2>Promoções</h2>
        <div id='itensPromo'></div>
        {/*Inserir os cards de promoção     */}
        <Promocard/>
    </div>
  )
}

export default Promotion