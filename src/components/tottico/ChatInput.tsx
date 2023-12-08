"use client";

import { cn } from '@/lib/utils'
import { useMutation } from '@tanstack/react-query';
import { nanoid } from 'nanoid';
import { FC, HTMLAttributes, useContext, useRef, useState } from 'react'
import TextareaAutosize from 'react-textarea-autosize'

interface ChatInputProps extends HTMLAttributes<HTMLDivElement> {}

const ChatInput: FC<ChatInputProps> = ({ className, ...props }) => {

    const [input, setInput] = useState<string>('')

    const { mutate: sendMessage } = useMutation({

        mutationFn: async () => {
          const response = await fetch('/api/message', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ messages: 'Tottico' }),
          })
    
          return response.body
        },
        onSuccess: async (stream) => {
          console.log("Bien")
          }
        })
    
    return (
        <div {...props} className={cn('border-t border-zinc-1000', className)}>
            <div className='relative mt-1 mr-5 ml-5 flex-1 overflow-hidden rounded-lg outline-none'>
                <TextareaAutosize
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey){
                            e.preventDefault()

                            const message= {
                                id: nanoid(),
                                isUserMessage: true,
                                text: input,
                            }
                        }
                    }}
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