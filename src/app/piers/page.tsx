import PierList from "./pier_list";
import Search from "@/app/components/search";
import { Suspense } from "react";
import { ListSkeleton } from "../components/skeletons";
export default async function Page() {
    return (
        <>
            <h1 className="font-black">PIERS</h1>
            <div className="flex gap-2 flex-col justify-between">
                <Search placeholder="Search for pier number"/>
                <Suspense fallback={<ListSkeleton />}>
                    <PierList />
                </Suspense>
                      {/*  <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense> */}
            </div>
        </>
    )
}