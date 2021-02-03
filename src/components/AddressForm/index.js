import React from 'react';

import './styles.css';

function AddressForm() {
  return (
    <>
      <h3>Dados Pessoais</h3>
      <div className="row">
        <div className="col-md-12 mt-3">
          <label>Nome completo</label>
          <input type="text" name="name" className="form-control" />
        </div>
      </div>
      <div className="row">
        <div className="col-md-8 mt-2">
          <label>Endereço</label>
          <input type="text" name="address" className="form-control" />
        </div>
        <div className="col-md-4 mt-2">
          <label>Número</label>
          <input
            type="number"
            name="number"
            className="form-control"
            maxLength="6"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-8 mt-2">
          <label>Bairro</label>
          <input type="text" name="district" className="form-control" />
        </div>
        <div className="col-md-4 mt-2">
          <label>CEP</label>
          <input
            type="number"
            name="zipcode"
            className="form-control"
            maxLength="8"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-8 mt-2">
          <label>Cidade</label>
          <input
            type="text"
            name="city"
            value="São Paulo"
            className="form-control"
            disabled
          />
        </div>
        <div className="col-md-4 mt-2">
          <label>Estado</label>
          <input
            type="text"
            name="state"
            value="SP"
            className="form-control"
            disabled
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 mt-2">
          <label>Telefone</label>
          <input
            type="number"
            name="telephone"
            className="form-control"
            maxLength="15"
          />
        </div>
      </div>
    </>
  );
}

export default AddressForm;
