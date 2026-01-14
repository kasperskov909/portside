'use client'

export default function Input({ onInput, model, placeholder }: {onInput?: (value: string) => void, model?: string, placeholder: string}){
    return (
        <input value={ model } placeholder={ placeholder } onInput={(e) => onInput((e.target as HTMLInputElement).value)} className="peer block w-full rounded-md border border-gray-200 py-2 pl-4 text-sm outline-2 placeholder:text-gray-500"></input>
    )
}