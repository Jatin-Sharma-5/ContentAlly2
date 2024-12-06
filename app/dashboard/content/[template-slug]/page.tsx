"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import { TEMPLATE } from "../../_components/TemplateListSection";
import Templates from "@/app/(data)/Templates";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { chatSession } from "@/utils/AiModel";
import { db } from "@/utils/db";
import { AiOutput } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment";

function CreateNewContent() {
  const { "template-slug": templateSlug } = useParams();

  const selectedTemplate: TEMPLATE | undefined = Templates?.find(
    (item) => item.slug === templateSlug
  );

  const [loading, setLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState<string>("");
  const { user } = useUser();

  const GenerateAiContent = async (formData: any) => {
    setLoading(true);

    const SelectedPrompt = selectedTemplate?.aiPrompt;
    if (!SelectedPrompt) {
      console.error("AI prompt is missing in the selected template.");
      setLoading(false);
      return;
    }

    const FinalAiPrompt = JSON.stringify(formData) + "," + SelectedPrompt;

    try {
      const result = await chatSession.sendMessage(FinalAiPrompt);
      const aiText = result?.response?.text() || "";

      if (aiText) {
        console.log("Generated AI Content:", aiText);
        setAiOutput(aiText);
      } else {
        console.error("No 'text' content in the response.");
      }

      await SaveInDb(formData, selectedTemplate?.slug, aiText);
    } catch (error) {
      console.error("Error generating AI content:", error);
    } finally {
      setLoading(false);
    }
  };

  const SaveInDb = async (formData: any, slug: string, aiResp: string) => {
    try {
      const result = await db.insert(AiOutput).values({
        formData,
        templateSlug: slug,
        aiResponse: aiResp,
        createdBy: user?.primaryEmailAddress?.emailAddress || "unknown",
        createdAt: moment().format("DD/MM/YYYY"),
      });
      console.log("Database Insertion Result:", result);
    } catch (error) {
      console.error("Error inserting data into the database:", error);
    }
  };

  return (
    <>
      <Link href={"/dashboard"}>
        <Button className="mt-1 ml-1">
          <ArrowLeft className="mr-2" /> Back
        </Button>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-5">
        {/* Form Section */}
        <FormSection
          selectedTemplate={selectedTemplate}
          userFormInput={(v: any) => GenerateAiContent(v)}
          loading={loading}
        />

        {/* Output Section */}
        <div className="col-span-2 gap-10">
          <OutputSection aiOutput={aiOutput} />
        </div>
      </div>
    </>
  );
}

export default CreateNewContent;
