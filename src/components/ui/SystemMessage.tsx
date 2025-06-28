"use client";
import { neueMachina } from "@/src/fonts";
interface SystemMessageProps {
  message: string;
  className?: string;
  classNameMessage?: string;
}

export default function SystemMessage({ message, className, classNameMessage }: SystemMessageProps) {
  return (
    <div
      className={`w-fit max-w-80  ${neueMachina.className} h-auto relative flex items-center justify-center gap-2 px-6 py-4  text-[#202020] rounded-2xl border-2 border-[#202020] bg-[#dbdbdb] shadow-[4px_4px_0px_#bcbcbc] ring-1 ring-white/60 font-['Geist'] before:content-[''] before:absolute before:inset-0 before:rounded-2xl before:-z-10 before:shadow-[8px_8px_20px_#888,0_2px_8px_#bcbcbc_inset] ${className}`}
    >
      <p className={`text-center text-lg tracking-tighter leading-[1.03] ${classNameMessage}`}>
        {message}
      </p>
    </div>
  );
}
