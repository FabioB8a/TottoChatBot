import { FC } from "react";

const Header: FC = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <nav className="absolute top-0 left-0 right-0 p-4 bg-gray-800 text-white">
        {/* Aquí puedes agregar cualquier contenido adicional que desees en tu barra de navegación */}
        Este es el Header
      </nav>
      <main className="absolute inset-0 flex justify-center items-center">
        {/* El contenido principal de tu aplicación */}
        TOTTICO por el mundo
      </main>
    </div>
  );
};

export default Header;