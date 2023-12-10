import { FC } from 'react'
import Image from 'next/image';

const ChatHeader: FC<{ triggerEjecutado: boolean }> = ({ triggerEjecutado }) => {
  return (
    <div className='w-full flex gap-3 justify-center items-center text-zinc-800'>
      {triggerEjecutado ? (
        <div className='flex flex-col items-start text-sm justify-center'>
          <p className='text-xs'>¿Necesitas una mano para tu próxima aventura?</p>
          <div className='flex gap-1.5 items-center justify-center'>
          <div className='border-2 border-white rounded-full overflow-hidden'>
              <Image
                src="/images/logo/TOTTOid.png"
                alt="Search"
                width={50}
                height={50}
              />
            </div>
            <p className='font-medium'>Tottico: Tu consejero</p>
          </div>
        </div>
      ) : (
        <div className="flex items-center">
          <div className="relative bg-gray-300 p-4 rounded-ld shadow-md">
            <p className="text-sm">Hola soy Tottico, tu asesor virtual</p>
          </div>
          <div className="ml-2">
            <Image
              src="/images/logo/TOTTOid.png"
              alt="Search"
              width={60}
              height={60}
              className="border-2 border-white rounded-full"
            />
          </div>
        </div>
      )}
    </div>
  );
};


export default ChatHeader