"use client";
import React, { useState } from "react";
import { TEMPLATE } from "../../_components/TemplateListSection";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2Icon } from "lucide-react";

interface PROPS {
  selectedTemplate?: TEMPLATE;
  userFormInput: (formData: any) => void;
  loading: boolean;
}

function FormSection({ selectedTemplate, userFormInput, loading }: PROPS) {
  const [formData, setFormData] = useState<any>({});

  const handleInput = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    userFormInput(formData);
  };

  return (
    <div className="p-5 shadow-xl border rounded-lg bg-white">
      <Image
        src={selectedTemplate?.icon || "/fallback-icon.png"}
        alt="icon"
        width={70}
        height={70}
      />
      <h2 className="font-bold text-2xl mb-2 text-primary">
        {selectedTemplate?.name}
      </h2>
      <p className="text-sm text-slate-500">{selectedTemplate?.desc}</p>

      {/* Form Section */}
      <form className="mt-6" onSubmit={onSubmit}>
        {selectedTemplate?.form?.map((item, index) => (
          <div key={index} className="mb-7 flex flex-col my-2 gap-2">
            <label className="block font-bold text-gray-600 mb-2">
              {item.label}
            </label>
            {item.field === "input" ? (
              <Input
                className="w-full border rounded-lg p-2"
                name={item.name}
                required={item?.required}
                onChange={handleInput}
              />
            ) : item.field === "textarea" ? (
              <Textarea
                className="w-full border rounded-lg p-2"
                rows={4}
                name={item.name}
                required={item?.required}
                onChange={handleInput}
              />
            ) : null}
          </div>
        ))}
        <Button type="submit" className="w-full py-6" disabled={loading}>
          {loading && <Loader2Icon className="animate-spin mr-2" />}
          Generate Content
        </Button>
      </form>
    </div>
  );
}

export default FormSection;
