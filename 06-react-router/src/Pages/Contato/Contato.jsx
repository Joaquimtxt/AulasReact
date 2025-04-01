import React from 'react';
import { useNavigate } from 'react-router';

const Contato = () => {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault(); // Evita o comportamento padrão do formulário
        alert('Formulário Enviado');
        navigate('/'); // Redireciona para a página inicial
      };
    return (
        <div className="container bg-secondary text-light p-3 p-md-5 rounded shadow mt-3 mt-md-5">
          <h2 className="text-center mb-4">Contato</h2>
          <div className="d-flex flex-column align-items-center">
            <p className="fs-6 fs-md-5 mb-2">
              <i className="bi bi-telephone-fill me-2"></i>(11) 1234-5678
            </p>
            <p className="fs-6 fs-md-5">
              <i className="bi bi-envelope-fill me-2"></i>email@exemplo.com
            </p>
          </div>
    
          {/* Formulário */}
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="mb-3">
              <label htmlFor="nome" className="form-label">
                Nome
              </label>
              <input
                type="text"
                className="form-control"
                id="nome"
                placeholder="Digite seu nome"
                required
              />
            </div>
            <div className="mb-3">
          <label htmlFor="assunto" className="form-label">
            Assunto
          </label>
          <textarea
            className="form-control"
            id="assunto"
            placeholder="Digite o assunto"
            rows="5" 
            required
          ></textarea>
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-primary w-50">
            Enviar
          </button>
        </div>
          </form>
        </div>
      );
    };

export default Contato;