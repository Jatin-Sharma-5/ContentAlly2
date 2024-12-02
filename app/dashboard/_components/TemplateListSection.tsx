import Templates from '@/app/(data)/Templates';
import React, { useEffect, useState } from 'react';
import TemplateCard from './TemplateCard';
import AnimatedGridPattern from '@/components/ui/animated-grid-pattern';

export interface TEMPLATE {
    name: string;
    desc: string;
    icon: string;
    category: string;
    slug: string;
    aiPrompt: string;
    form?: FORM[];
}

export interface FORM {
    label: string;
    field: string;
    name: string;
    required?: boolean;
}

function TemplateListSection({userSearchInput}:any) {
    
    const [templateList, setTemplateList]=useState(Templates)
    useEffect(()=>{
    if (userSearchInput){
        const filterData = Templates.filter(item => item.name.toLowerCase().includes(userSearchInput.toLowerCase()));
        setTemplateList(filterData)
    }
    else{
        setTemplateList(Templates)
    }
    },[userSearchInput])

    return (
        <div className="p-8">
           
          
            {Templates && Templates.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {templateList.map((item: TEMPLATE, index: number) => (
                        <TemplateCard key={index} {...item} />
                        
                    ))}
                
                </div>
            ) : (
                <div className="text-center text-gray-500">No templates available.</div>
            )}
        </div>
    );
}

export default TemplateListSection;
