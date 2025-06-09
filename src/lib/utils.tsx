import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import {useToast} from "@/hooks/use-toast.ts";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const CopyToClipboard = (text: string) => {
  const { toast } = useToast()
  
  navigator.clipboard.writeText(text);
}