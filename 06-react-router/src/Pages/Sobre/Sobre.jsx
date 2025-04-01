import React from 'react'

const Sobre = () => {
  return (
    <div className="container bg-secondary text-light p-3 p-md-5 rounded shadow mt-5 position-relative">
    <div className="position-absolute top-0 start-50 translate-middle mt-5">
      <img
        src="https://placehold.co/200x200"
        alt="Sobre"
        className="rounded-circle border border-light"
      />
    </div>

   
    <div className="mt-5 pt-5">
      <h2 className="text-center mb-4">Sobre</h2>
      <p className="fs-6 fs-md-5 text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  </div>

  )
}

export default Sobre