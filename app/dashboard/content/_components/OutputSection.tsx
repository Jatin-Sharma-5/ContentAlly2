import React, { useEffect, useRef } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";


interface props {
  aiOutput:string;
}

function OutputSection({aiOutput}:props) {
  const editorRef: any = useRef();

  useEffect(()=>{
    const editorInstance = editorRef.current.getInstance()
    editorInstance.setMarkdown(aiOutput);
  },[aiOutput])
  
  const handleCopyContent = () => {
    const editorInstance = editorRef.current?.getInstance();
    if (editorInstance) {
      const content = editorInstance.getMarkdown();
      navigator.clipboard.writeText(content);
      alert("Content copied to clipboard!");
    }
  };

  return (
    <div className="bg-white shadow-lg border rounded-xl">
      {/* Header Section */}
      <div className="flex justify-between items-center p-5  text-lg font-bold">
        <h2>Result</h2>
        <Button onClick={handleCopyContent}>
          <Copy className="mr-2" />
          Copy
        </Button>
      </div>

      {/* Editor Section */}
      
      <Editor
        ref={editorRef}
        initialValue="Output Will Display Here....." // Placeholder text
        height="500px"
        initialEditType="markdown"
        useCommandShortcut={true}
        onChange={() =>
          console.log(editorRef.current?.getInstance().getMarkdown())
        }
      />
    </div>
  );
}

export default OutputSection;
