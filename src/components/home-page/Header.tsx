import { FC } from "react";

const Header: FC = () => {
  return (
      <div>
          <nav className="flex justify-between w-screen px-5">
            <div className="item-nav flex items-center space-x-2">
              <a>Totto Travel</a>
              <p> | </p>
              <a>Totto Kids</a>
              <p> | </p>
              <a>Totto Pets</a>
            </div>
            <div className="item-nav flex items-center space-x-2">
              <a>Escribenos por WhatsApp</a>
              <p> | </p>
              <a>Servicio al cliente</a>
            </div>
        </nav>
      </div>
     
  );
};

export default Header;