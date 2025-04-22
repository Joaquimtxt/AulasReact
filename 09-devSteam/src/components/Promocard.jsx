import React from 'react'

const Promocard = (props) => {
  return (
    <div className='promoCard card border-0 overflow-hidden'>
        <img className='card-img-top object-fit-cover' src="https://placehold.co/200x200" alt="" />
        <div className='card-body'>
            <h5 className='card-title text-uppercase fw-bold'>Título</h5>
            <div className='row'>
                <span className='col-4 text-center bg-success text-success-emphasis fw-bold'>-50%</span>
                <div className='col card-text bg-dark'>
            <p className='m-0 p-0 text-end text-light'>R$ Preço</p>
            <p className='m-0 p-0 text-end text-light'>R$ Preço</p>
            </div>
            </div>
            <button className='btn btn-success w-100'>
                <i className='bi bi-cart-plus me-2'></i>
            </button>
        </div>
    </div>
  )
}

export default Promocard