import React from "react";

const ErrorMessage = () => {
  return (
    <>
      <article className="errorContainer">
        <div>
          <img src="assets/images/error.png" alt="Error en la búsqueda" />
        </div>
        <div>
          <h4>Error. No hay resultados para tu búsqueda.</h4>
          <p>Introduce de nuevo un Pokemon.</p>
        </div>

      </article>
    </>   
  )
};

export default ErrorMessage;
