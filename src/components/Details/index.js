import React from 'react';

import './styles.css';

function Details() {
  return (
    <>
      <h3>Obrigado pelo seu pedido.</h3>
      <span>O número do seu pedido é #2001539.</span>
      <button type="button" className="btn btn-info btn-block mt-2">
        Acompanhar Pedido
      </button>
    </>
  );
}

export default Details;