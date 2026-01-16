import Form from '@/app/piers/create/form';
import { getPier } from '@/app/repos/pier/actions';
 
export default async function Page(props: { params: Promise<{ id: string}>}) {
    const params = await props.params;
    const pier = await getPier(parseInt(params.id));
  return (
        <>
        <h1 className="font-black">EDIT PIER</h1>
        <Form pier={pier} />
        </>
  );
}