'use client'

import { updatePier, State } from '@/app/repos/pier/actions';
import { pier } from '@/generated/prisma/client';
import { useActionState } from 'react';

export default function Form(props: { pier: pier | undefined }) {
  const updatePierWithId = updatePier.bind(null, props.pier.id);
  const initState: State = { message: null, errors: {}};
  const [state, updateAction] = useActionState(updatePierWithId, initState)
    return (
        <form action={updateAction}>
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
                defaultValue={props.pier.number}
                placeholder="Ie. 1A or 5"
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
        <button type="submit" className="ps-btn mt-6">Update pier</button>

        </form>
    )
}