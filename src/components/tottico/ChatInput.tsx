"use client";

import { cn } from '@/lib/utils'
import { FC, HTMLAttributes, useContext, useRef, useState } from 'react'
import TextareaAutosize from 'react-textarea-autosize'

interface ChatInputProps extends HTMLAttributes<HTMLDivElement> {}

const ChatInput: FC<ChatInputProps> = ({ className, ...props }) => {

    const [input, setInput] = useState<string>('')
    
    return (
        <div {...props} className={cn('border-t border-zinc-1000', className)}>
            <div className='relative mt-1 mr-5 ml-5 flex-1 overflow-hidden rounded-lg outline-none'>
                <TextareaAutosize
                    rows={2}
                    maxRows={4}
                    value={input}
                    autoFocus
                    onChange={(e) => setInput(e.target.value)}
                    placeholder='Escribe...'
                    className='peer disabled:opacity-1 pr-16 resize-none block w-full border-0 bg-zinc-100 py-1.5 text-gray-900 focus:ring-0 text-sm sm:leading-6'
                />
            </div>
        </div>
    )
}

export default ChatInput;