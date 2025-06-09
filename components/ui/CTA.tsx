import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CTA = () => {
  return (
    <section className="cta-section bg-cta text-white rounded-4xl px-8 py-10 flex flex-col items-center text-center gap-6 w-full max-w-md mx-auto lg:max-w-lg xl:max-w-xl">
      <div className="cta-badge bg-cta-gold rounded-4xl px-4 py-2 text-sm font-medium text-black whitespace-nowrap">
        Start learning your way
      </div>
      
      <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight max-w-sm lg:max-w-md">
        Build and Personalize Learning Companion
      </h2>
      
      <p className="text-white/90 text-sm lg:text-base leading-relaxed max-w-xs lg:max-w-sm">
        Pick a name, subject, voice & personality - and start learning through voice conversations that feel natural and fun
      </p>
      
      <div className="relative w-full max-w-xs lg:max-w-sm my-4">
        <Image 
          alt="cta"
          src="/images/cta.svg"
          width={362}
          height={232}
          className="w-full h-auto"
        />
      </div>
      
      <Link href="/companion/new" className="btn-primary flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm lg:text-base hover:opacity-90 transition-opacity">
        <Image
          alt="plus"
          src="/icons/plus.svg"
          width={12}
          height={12}
          className="w-3 h-3 lg:w-4 lg:h-4"
        />
        <span>Build a new companion</span>
      </Link>
    </section>
  );
};

export default CTA;