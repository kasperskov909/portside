import { deletePier } from '@/app/repos/pier/actions';
 
// ...
 
export function DeletePierButton({ id }: { id: number }) {
  const deletePierWithId = deletePier.bind(null, id);
 
  return (
    <form action={deletePierWithId}>
      <button type="submit" className="ps-btn">
        Delete
      </button>
    </form>
  );
}