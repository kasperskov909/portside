'use client'

import { createPier, State } from '@/app/repos/pier/actions';
import { useActionState } from 'react';

export default function Form() {
    const initialState: State = { message: null, errors: {} };
  const [state, formAction] = useActionState(createPier, initialState)
    return (
        <form action={formAction}>
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
                aria-describedby="number-error"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-4 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>
         <div id="number-error" aria-live="polite" aria-atomic="true">
        {state.errors?.number &&
          state.errors.number.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
      </div>
        <button type="submit" className="ps-btn mt-6">Create pier</button>

        </form>
    )
}