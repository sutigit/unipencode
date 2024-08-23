import { auth } from '@/auth';
import { notFound } from 'next/navigation';
import { repositories } from '@/app/lib/fake-data';
import Header from '@/app/ui/header';

import CreateProject from './components/create-form';

export default async function CreateProjectPage({ params }: { params: { user: string } }) {
  const session = await auth();

  if (!session) {
    return notFound();
  }

  if (session?.user?.username !== params.user) {
    return notFound();
  }


  return (
    <main className='flex flex-col gap-10 py-20'>
      <Header title="Luo uusi projekti" />
      <CreateProject repositories={repositories} />
    </main>
  )
}
