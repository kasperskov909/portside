'use client'

import { updatePier } from '@/app/repos/pier/actions';
import { pier } from '@/generated/prisma/client';

export default function Form(props: { pier: pier }) {
     const updatePierWithId = updatePier.bind(null, props.pier.id);
    return (
        <form action={updatePierWithId}>
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
                value={props.pier.number}
                placeholder="Ie. 1A or 5"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-4 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>
        <button type="submit" className="ps-btn mt-6">Update pier</button>

        </form>
    )
}