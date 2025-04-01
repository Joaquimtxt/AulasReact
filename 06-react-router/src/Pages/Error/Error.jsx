import React from 'react'
import { Link } from 'react-router'

const Error = () => {
  return (
    <div className='container justify-content-center text-center'>
      <h1 className='display-1 text-danger'>404</h1>
    <h2 className='mb-4'>Página não encontrada</h2>
    <Link to="/" className='btn btn-danger text-light'>Voltar para a página inicial</Link>
    </div>
  )
}

export default Error