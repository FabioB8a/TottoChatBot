import { FC } from "react";

const Advertising: FC = () => {
  return (
      <div className="adv flex flex-col justify-center items-center">
          <div className="bg-black-500 w-screen flex justify-center">
            <p>Envío GRATIS por compras superiores a $149.900 Aplican T&C.</p>
          </div>
          <div>
            Descubre el mundo con Tottico
            Juntos por el mundo
            <button>Conoce a Tottico</button>
          </div>
          <div className="bg-red-500 w-screen flex justify-center">
            <p>Tottico, nuestro asesor virtual (inteligencia artificial) responde a tus necesidades de forma personalizada</p>
          </div>
      </div>
     
  );
};

export default Advertising;