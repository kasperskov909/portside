'use client';

import Input from "./input";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useState } from "react";
export default function Search({placeholder = "Indtast søgeord"}: {placeholder?: string}) {
      const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
    const [term, setTerm] = useState(searchParams.get('query')?.toString() ?? "")


    function handleSearch() {
        console.log('SEARCH', term);
         const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
        replace(`${pathname}?${params.toString()}`);

    }

    return (
        <div className="flex flex-1 flex-shrink-0 gap-4">
            <Input model={term} onInput={(t) => setTerm(t) } placeholder={placeholder} />
            <button onClick={(e) => handleSearch } className="ps-btn">Søg</button>
        </div>
        
    )
}