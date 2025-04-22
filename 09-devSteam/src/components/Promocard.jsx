import React from 'react'

const Promocard = (props) => {
  return (
    <div className='promoCard card border-0 overflow-hidden'>
        <img className='card-img-top object-fit-cover' src="https://placehold.co/200x200" alt="" />
        <div className='card-body'>
            <h5 className='card-title'>Título</h5>
            <p className='card-text'>R$ Preço</p>
            <button className='btn btn-success w-100'>
                <i className='bi bi-cart-plus me-2'></i>
            </button>
        </div>
    </div>
  )
}

export default Promocard