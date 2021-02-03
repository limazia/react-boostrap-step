import React from 'react';

import './styles.css';

function Review() {
  return (
    <>
      <h3>Informações do Pedido</h3>
      <ul className="list-group mt-3">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <span>
            Cookie de Chocolate <small className="text-muted">(5x)</small>
            <p className="product-p">
              <small className="text-muted">Cookie com gotas de chocolate</small>
              <br />
              <small className="text-muted">R$5,00</small>
            </p>
          </span>
          <span></span>
          <div className="image-parent">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/e5/Crystal_Project_cookie.png"
              className="img-fluid"
              alt="Produto"
            />
          </div>
        </li>
      </ul>
      <div className="row">
        <div className="col-md-10 mt-2">
          <label>Total</label>
        </div>
        <div className="col-md-2 mt-2">
          <b>R$ 25.00</b>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 mt-2">
          <h3>Detalhes</h3>
          <div className="row">
            <div className="col-md-12 mt-2">
              <p>Nome: <b>Fabio Batoni</b></p>
              <p>Endereço: <b>Rua 1 B JSP, 52 - Jardim São Paulo (13503-016)</b></p>
              <p>Cidade: <b>Rio Claro, SP</b></p>
              <p>Observações: <b>Nenhuma observação</b></p>
              <p>Forma de Pagamento: <b>Cartão de Credito</b></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Review;
