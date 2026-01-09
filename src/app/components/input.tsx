'use client'

export default function Input({ model, placeholder }: { model: string, placeholder: string}){
    return (
        <input value={ model } placeholder={ placeholder } className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"></input>
    )
}