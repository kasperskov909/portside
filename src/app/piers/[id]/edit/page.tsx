import Form from '@/app/piers/[id]/edit/form';
import { getPier } from '@/app/repos/pier/actions';
import { notFound } from 'next/navigation';

export default async function Page(props: { params: Promise<{ id: string}>}) {
    const params = await props.params;
    const pier = await getPier(parseInt(params.id));
     if (!pier) {
      notFound();

    }
  return (
        <>
        <h1 className="font-black">EDIT PIER</h1>
        <Form pier={pier} />
        </>
  );
}