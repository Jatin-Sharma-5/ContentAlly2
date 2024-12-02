"use client";
import React from "react";
import { useParams } from "next/navigation"; // Import useParams
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import { TEMPLATE } from "../../_components/TemplateListSection";
import Templates from "@/app/(data)/Templates";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

function CreateNewContent() {
  const { "template-slug": templateSlug } = useParams(); // Use useParams to get the slug

  // Find the selected template based on the slug
  const selectedTemplate: TEMPLATE | undefined = Templates?.find(
    (item) => item.slug === templateSlug
  );

  const GenerateAiContent=(formData:any)=>{

  }
  return (
    <> 
    <Link href={"/dashboard"}> 
    <Button className="mt-1 ml-1"> <ArrowLeft className="mr-2" /> Back </Button>
    </Link>
    
       
  
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-5">
      {/* Form section */}
      <FormSection
        selectedTemplate={selectedTemplate}
        userFormInput={(v: any) => GenerateAiContent(v)}
      />

      {/* Output section */}
      <div className="col-span-2 gap-10 ">
        <OutputSection />
      </div>
    </div>
    </>
  );
}

export default CreateNewContent;
