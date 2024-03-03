import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "James Ang",
  description: "Created by James",
};

export default function Home() {
  return (
    <main className="mx-auto w-full">
      <div className="flex justify-center items-center h-screen">
        <div className='container py-8'>
          <section className='mb-8'>
            <div><p className='text-4xl'>Welcome</p></div>
          </section>
          <section className='mb-8'>
            <div><p className='text-4xl'>Welcome</p></div>
          </section>
          <section className='mb-8'>
            <div><p className='text-4xl'>Welcome</p></div>
          </section>
          <div>
            <p className='text-4xl'>Welcome</p>
          </div>
          
        </div>
      </div>
    </main>
  );
}
