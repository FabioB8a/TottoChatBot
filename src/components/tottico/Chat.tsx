"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FC, useState } from 'react';
import ChatHeader from './ChatHeader';
import ChatInput from './ChatInput';
import ChatMessages from './ChatMessages';

const Chat: FC = () => {
  const [trigger, settrigger] = useState(false);

  const handleTrigger = () => {
    
    settrigger(!trigger);
  };

  return (
    <Accordion
      type='single'
      collapsible
      className='absolute bg-transparent z-90 shadow'
    >
      <AccordionItem value='item-1'>
        <div className='fixed right-8 w-100 bottom-0 bg-transparent rounded-md overflow-hidden'>
          <div className='w-full h-full flex flex-col'>
            <AccordionTrigger
              className={`rounded-t-2xl px-6 border-b border-zinc-300 ${trigger ? 'bg-white' : 'bg-transparent border-none'}`}
              onClick={handleTrigger}
            >
              <ChatHeader trigger={trigger}  />
            </AccordionTrigger>
            <AccordionContent className='pb-1 bg-red-500'>
              <div className='flex flex-col h-80'>
                <ChatMessages className='px-2 py-3 flex-1' />
                <ChatInput className='my-2 px-5' />
              </div>
            </AccordionContent>
          </div>
        </div>
      </AccordionItem>
    </Accordion>
  );
};

export default Chat;
