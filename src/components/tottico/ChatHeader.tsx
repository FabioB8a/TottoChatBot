import { FC } from 'react'

const ChatHeader: FC = () => {
  return (
    <div className='w-full flex gap-3 justify-start items-center text-zinc-800'>
      <div className='flex flex-col items-start text-sm'>
        <p className='text-xs'>¿Necesitas una mano para tu próxima aventura?</p>
        <div className='flex gap-1.5 items-center'>
          <p className='w-2 h-2 rounded-full bg-yellow-500' />
          <p className='font-medium'>Tottico: Tu consejero</p>
        </div>
      </div>
    </div>
  )
}

export default ChatHeader