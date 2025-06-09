import React from 'react'
import CompanionForm from '@/components/ui/CompanionForm'
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation'; 

const NewCompanion = async () => {
    const {userId}=await auth();
   if (!userId) {
    redirect('/sign-in'); // ✅ Correct usage
  }
  return (
    <main className="flex items-center justify-center w-full px-4">
      <article className="w-full md:w-2/3 lg:w-1/3 gap-4 flex flex-col">
        <h1 className="text-xl font-bold">Companion Builder</h1>
        <CompanionForm/>
      </article>
    </main>
  );
};
export default NewCompanion
