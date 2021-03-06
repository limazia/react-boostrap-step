import React, { useState } from "react";

import AddressForm from "../../components/AddressForm";
import PaymentForm from "../../components/PaymentForm";
import Review from "../../components/Review";
import Details from "../../components/Details";

import "./styles.css";

export default function Home() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    "Dados Pessoais",
    "Detalhes de Pagamento",
    "Revisão do Pedido",
    "Detalhes",
  ];

  function showStepContent(activeStep) {
    switch (activeStep) {
      case 0:
        return <AddressForm />;
      case 1:
        return <PaymentForm />;
      case 2:
        return <Review />;
      case 3:
        return <Details />;
      default:
        return <div>Unknown Step</div>;
    }
  }

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <div className="container h-100">
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-md-7 mt-5 pb-5">
          <div className="card order-card">
            <div className="card-body">
              <ul className="step d-flex flex-nowrap mb-5">
                {steps.map((step, index) => (
                  <li className={`step-item ${activeStep === index ? "active text-dark" : "text-muted"}`}>
                    <span>{steps[index]}</span>
                  </li>
                ))}
              </ul>
              {activeStep === steps.length - 1 ? (
                <Details />
              ) : (
                <>
                  {showStepContent(activeStep)}
                  <div className={`d-flex justify-content-${activeStep === 0 ? "end" : "between"}`}>
                    {activeStep > 0 && activeStep !== steps.length - 1 && (
                      <button
                        type="button"
                        onClick={handleBack}
                        className="btn btn-link  mt-3"
                      >
                        Voltar
                      </button>
                      )}
                    {activeStep !== steps.length && (
                      <button
                        type="button"
                        onClick={handleNext}
                        className="btn btn-primary mt-4"
                      >
                        {activeStep === steps.length - 2 ? "Finalizar" : "Próximo"}
                      </button>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
