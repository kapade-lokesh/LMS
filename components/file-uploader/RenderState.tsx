import { cn } from "@/lib/utils";
import { CloudUploadIcon, ImageIcon } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

export const RenderEmptyState = ({
  isDragActive,
}: {
  isDragActive: boolean;
}) => {
  return (
    <div className="text-center">
      <div className="flex items-center mx-auto justify-center size-12 bg-muted rounded-full mb-4">
        <CloudUploadIcon
          className={cn(
            "size-6 text-muted-foreground",
            isDragActive && "text-primary"
          )}
        />
      </div>

      <p className="text-base font-semibold text-foreground ">
        Drop your files herr or{" "}
        <span className="text-primary font-bold cursor-pointer">
          clik to upload
        </span>
      </p>

      <Button type="button" className="mt-4">
        Select File
      </Button>
    </div>
  );
};

export const RenderErrorState = () => {
  return (
    <div className="text-center">
      <div className="flex items-center mx-auto justify-center size-12 bg-destructive/30 rounded-full mb-4">
        <ImageIcon className={cn("size-6 text-destructive")} />
      </div>
      <p className="text-base font-semibold">Upload Failed</p>
      <p className="text-xs text-muted-foreground">Something Went Wrong</p>
      <Button type="button" className="mt-4">
        Retry File Selection 
      </Button>
    </div>
  );
};
