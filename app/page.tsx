"use client";
import ModalWrapper from "@/src/components/modal-wrapper";
import TestModal from "@/src/components/modals/test-modal";
// import erc20ABI from "@/src/constants/abis/erc20";
import CommmonUtils from "@/src/utils/common";
import React, { useState } from "react";
import toast from "react-hot-toast";

const Home: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="flex flex-col gap-4 justify-center items-center min-h-screen">
      <ModalWrapper onOpenChange={setIsOpen} isOpen={isOpen}>
        <TestModal />
      </ModalWrapper>
      <button
        onClick={() => toast.success("I am a happy toast.")}
        className="bg-gray-200 px-4 rounded-lg py-2"
      >
        Make a toast
      </button>

      <button
        onClick={() => setIsOpen(true)}
        className="bg-gray-200 px-4 rounded-lg py-2"
      >
        Open modal
      </button>
      <button
        onClick={() => CommmonUtils.openExternalLink("https://google.com")}
        className="bg-gray-200 px-4 rounded-lg py-2"
      >
        Open external website
      </button>
    </main>
  );
};

export default Home;
