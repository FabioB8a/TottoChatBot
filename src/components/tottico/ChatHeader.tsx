import { FC } from 'react'
import Image from 'next/image';

const ChatHeader: FC<{ trigger: boolean }> = ({ trigger }) => {
  return (
    <div className='w-full flex gap-2 justify-right text-zinc-800'>
      {trigger ? (
        <div className='h-12 flex flex-row items-center text-sm justify-center'>
        <div className='overflow-hidden mr-5 mt-4 mb-0 pt-0 pb-0 flex flex-col items-center'>
          <Image
            src="/images/logo/ID_3DBlack2.png"
            alt="Search"
            width={80}
            height={50}
          />
        </div>
        <div className='ml-5 mt-1 chat flex flex-col items-start'>
          <p className='font-light text-xs'>¿Necesitas una mano para</p>
          <p className='font-light text-xs mb-2'>tu próxima aventura?</p>
          <p className='font-bold'>Tottico: Tu consejero</p>
        </div>
      </div>
      
      ) : (
        <div className="flex items-center">
          <Image
              src="/images/adv/globe.svg"
              alt="Search"
              width={130}
              height={100}
              className="mb-20 -mr-3"
            />
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