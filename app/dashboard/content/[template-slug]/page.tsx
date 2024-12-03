"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation"; // Import useParams
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import { TEMPLATE } from "../../_components/TemplateListSection";
import Templates from "@/app/(data)/Templates";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { stringify } from "querystring";
import { chatSession } from "@/utils/AiModel";

function CreateNewContent() {
  const { "template-slug": templateSlug } = useParams(); // Use useParams to get the slug

  const selectedTemplate: TEMPLATE | undefined = Templates?.find(
    (item) => item.slug === templateSlug
  );
  
  const [loading, setLoading] = useState(false);
  const [aiOutput,setAiOutput]=useState<string>("");

  const GenerateAiContent = async (formData: any) => {
    setLoading(true);
  
    // if (!selectedTemplate) {
    //   console.error("Selected template is missing.");
    //   setLoading(false);
    //   return;
    // }
  
    const SelectedPrompt = selectedTemplate?.aiPrompt;
    if (!SelectedPrompt) {
      console.error("AI prompt is missing in selected template.");
      setLoading(false);
      return;
    }
  
    const FinalAiPrompt = JSON.stringify(formData) + "," + SelectedPrompt;
  
    try {
      const result = await chatSession.sendMessage(FinalAiPrompt);
  
      const aiText = result?.response?.text();
  
      if (aiText) {
        console.log("Generated AI Content:", aiText);
        setAiOutput(aiText);
        
      } else {
        console.error("No 'text' content in the response.");
      }
    } catch (error) {
      console.error("Error generating AI content:", error);
    }
  
    setLoading(false);
  };
  
  
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
        loading ={loading}
      />

      {/* Output section */}
      <div className="col-span-2 gap-10 ">
        <OutputSection aiOutput={aiOutput}/>
      </div>
    </div>
    </>
  );
}

export default CreateNewContent;
