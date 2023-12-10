import { FC } from "react";
import Image from 'next/image';

const Advertising: FC = () => {
  return (
      <div className="adv flex flex-col justify-center items-center">
          <div className="bg-black w-screen flex justify-center py-1">
            <p>Envío GRATIS por compras superiores a $149.900 Aplican T&C.</p>
          </div>
          <div>
          <Image
                src="/images/logo/TOTTOAdd.jpg"
                alt="Search"
                width={5000}
                height={10000}
              />
          </div>
          <div className="bg-red-500 w-screen flex justify-center py-1">
            <p>Tottico, nuestro asesor virtual (inteligencia artificial) responde a tus necesidades de forma personalizada</p>
          </div>
      </div>
     
  );
};

export default Advertising;