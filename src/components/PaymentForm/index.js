import React from 'react';

import './styles.css';

function PaymentForm() {
  return (
    <>
      <h3>Metódos de Pagamento</h3>
      <div className="row">
        <div className="col-md-12 mt-3">
          <label>Observações</label>
          <textarea
            type="text"
            name="observation"
            rows="4"
            className="form-control"
          ></textarea>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 mt-2">
          <label>Forma de Pagamento</label>
          <select className="form-control">
            <option value="1">Cartão de Credito</option>
            <option value="2">Dinheiro</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default PaymentForm;