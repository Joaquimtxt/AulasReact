import React from 'react'
import Promocard from './Promocard'

const Promotion = () => {
  return (
    <div id='promotion'>
        <h2>Promoções</h2>
        <div id='itensPromo' className='d-flex flex-wrap gap-4 justify-content-around'>
        {/*Inserir os cards de promoção     */}
        <Promocard/>
        <Promocard/>
        <Promocard/>
        </div>
    </div>
  )
}

export default Promotion