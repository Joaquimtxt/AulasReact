import React from 'react'

const Header = () => {
  return (
    <header className='w-100 navbar navbar-dark bg-dark justify-content-around'>
        <div id='info' className='d-flex gap-5 w-50 justify-content-between align-items-center'>
        <div id='logo' role='button' className='d-flex'>
            <i  className='bi bi-controller text-light fs-1 me-3'></i>
            <span className='navbar-brand fw-bold fs-3'>DevSteam</span>
        </div>

        <input type="text" className='w-100 d-none d-md-block border-0 rounded-1 buscar px-4 my-2' placeholder='Buscar...' />
        </div>
        <div id="carrinho" role='button'>
            <i className='bi bi-cart4 text-bg-light fs-2'></i>
        </div>
    </header>
  )
}

export default Header