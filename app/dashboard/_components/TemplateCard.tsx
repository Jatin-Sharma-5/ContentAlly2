import React from 'react';
import { TEMPLATE } from './TemplateListSection';
import Link from 'next/link';
import Image from 'next/image';

function TemplateCard(item: TEMPLATE) {
  return (
    <Link 
      href={"/dashboard/content/" + (item?.slug || '')} 
      aria-label={`View details for ${item?.name}`} >
      <div className='p-5 rounded-md border bg-white/10 z-10 backdrop-filter backdrop-blur[15px] text-black 
                      flex flex-col gap-3 cursor-pointer 
                      hover:shadow-2xl duration-300 hover:scale-110 transition-all hover:shadow-teal-300'>
        <Image 
          src={item.icon} 
          alt={`${item?.name || 'template'} icon`} 
          width={50} 
          height={50} 
          className="rounded-md"
        />
        <h2 className='font-medium text-lg text-yellow-300'>{item.name || 'Untitled'}</h2>
        <p className='text-slate-300 line-clamp-3'>{item.desc || 'No description available.'}</p>
      </div>
    </Link>
  );
}

export default TemplateCard;
