"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ImageIcon, Loader2, ScanSearch } from "lucide-react";
import React, { useState } from "react";

const ImageClassificationPage = () => {
  const [url, setUrl] = useState("");
  const [label, setLabel] = useState("");
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <main className="flex flex-col items-center justify-start p-24 gap-2">
      <form onSubmit={() => {}} className="flex gap-2 items-center">
        <ImageIcon />
        <Input name="files" type="file" />
        <Button disabled={loading} type="submit">
          {loading ? <Loader2 className="animate-spin" /> : <ScanSearch />}
        </Button>
      </form>
    </main>
  );
};

export default ImageClassificationPage;
