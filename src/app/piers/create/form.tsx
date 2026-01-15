'use client'

import { createPier } from '@/app/repos/pier/actions';

export default function Form() {
    console.log('form init');
    return (
        <form action={createPier}>
                <div className="mb-4">
          <label htmlFor="number" className="mb-2 block text-sm font-medium">
            Number
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="number"
                name="number"
                type="text"
                placeholder="Ie. 1A or 5"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-4 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>
        <button type="submit" className="ps-btn mt-6">Create pier</button>

        </form>
    )
}