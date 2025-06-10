import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import {useToast} from "@/hooks/use-toast.ts";
import {Toast} from "@/components/ui/toast.tsx";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const copyToClipboard = (text: string, toast: any, toastTitle: string) => {

  navigator.clipboard.writeText(text);
  toast({ title: toastTitle, duration: 3000 })
}