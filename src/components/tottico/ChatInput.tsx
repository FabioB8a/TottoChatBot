"use client";

import { MessagesContext } from '@/context/messages';
import { cn } from '@/lib/utils'
import { Message } from '@/lib/validators/message';
import { useMutation } from '@tanstack/react-query';
import { nanoid } from 'nanoid';
import { FC, HTMLAttributes, useContext, useRef, useState } from 'react'
import TextareaAutosize from 'react-textarea-autosize'

interface ChatInputProps extends HTMLAttributes<HTMLDivElement> {}

const ChatInput: FC<ChatInputProps> = ({ className, ...props }) => {

    const [input, setInput] = useState<string>('')
    const textareaRef = useRef<HTMLTextAreaElement | null>(null)

    const {
        messages,
        addMessage,
        removeMessage,
        updateMessage,
        setIsMessageUpdating,
      } = useContext(MessagesContext)

    const { mutate: sendMessage} = useMutation({

        mutationKey: ['sendMessage'],

        mutationFn: async (_message: Message) => {
          const response = await fetch('/api/message', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ messages: [_message]}),
          })
    
          return response.body
        },
        onMutate(message) {
          addMessage(message)
        },
        onSuccess: async (stream) => {

            if (!stream) throw new Error('No stream')
            const id = nanoid()
            const responseMessage: Message = {
                id,
                isUserMessage: false,
                text: '',
              }
        
            // add new message to state
            addMessage(responseMessage)

            setIsMessageUpdating(true)

            const reader = stream.getReader()
            const decoder = new TextDecoder()
            let done = false

            while (!done) {
                const { value, done: doneReading } = await reader.read()
                done = doneReading
                const chunkValue = decoder.decode(value)
                updateMessage(id, (prev) => prev + chunkValue)
            }
        },
        onError: async(stream) => {
            console.log("AYUDA")
        }

    })
    
    return (
        <div {...props} className={cn('border-t border-zinc-1000', className)}>
            <div className='relative mt-1 mr-5 ml-5 flex-1 overflow-hidden rounded-lg outline-none'>
                <TextareaAutosize
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey){
                            e.preventDefault()

                            const message: Message = {
                                id: nanoid(),
                                isUserMessage: true,
                                text: input,
                            }

                            sendMessage(message)
                        }
                    }}
                    ref ={textareaRef}
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