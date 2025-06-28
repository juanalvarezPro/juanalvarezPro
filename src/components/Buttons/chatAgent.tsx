import React from "react";
import SystemMessage from "../ui/SystemMessage";
import Image from "next/image";

const ChatAgent = () => {
  return (
    <div
      className="fixed bottom-0 right-0 m-5 flex w-fit items-center"
      style={{ zIndex: 50 }}
    >
      <SystemMessage classNameMessage="text-sm" className="p-6" message="Hablar con mi Agente IA" />
      <Image
        src={"/logo.webp"}
        alt="Logo juanalvarez.pro"
        width={40}
        height={40}
        className="ml-2"
      />
    </div>
  );
};

export default ChatAgent;
