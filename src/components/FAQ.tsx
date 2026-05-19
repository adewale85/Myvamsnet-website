"use client"
import { useState } from "react";

function FAQ() {
  const faqData = [
    {
      question: "Is my information safe on MyVamsnet?",
      answer: "Yes, absolutely. We use military-grade encryption, 2FA authentication, and store funds in secure, regulated custodial accounts. Your security is our top priority."
    },
    {
      question: "Can MyVamsnet execute on a tech product project?",
      answer: "Yes, absolutely. We use military-grade encryption, 2FA authentication, and store funds in secure, regulated custodial accounts. Your security is our top priority."
    },
    {
      question: "What countries or industries do you support?",
      answer: "Yes, absolutely. We use military-grade encryption, 2FA authentication, and store funds in secure, regulated custodial accounts. Your security is our top priority."
    },
    {
      question: "Is there customer support if I encounter issues?",
      answer: "Yes, absolutely. We use military-grade encryption, 2FA authentication, and store funds in secure, regulated custodial accounts. Your security is our top priority."
    },
    {
      question: "How do I get notified on MyVamsnet’s latest updates?",
      answer: "Yes, absolutely. We use military-grade encryption, 2FA authentication, and store funds in secure, regulated custodial accounts. Your security is our top priority."
    }
  ];

  // FIXED: Spelled openIndex correctly to match throughout the file
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="Inner-wrapper items-center justify-center py-12">
      <header className="flex lg:flex-row flex-col items-center justify-between py-8">
        <h1 className="lg:w-136.5 w-full font-heading font-normal lg:text-[44px] text-[28px] lg:leading-16.5 leading-10 text-white">
          Questions? <br /> We've Got Answers.
        </h1>
        <p className="w-[448px] lg:block hidden font-normal text-[20px] leading-9 text-[#FFFFFFBF]">
          Delivering tech-enabled growth for individuals and businesses across Africa and beyond.
        </p>
      </header>

      {/* FIXED: Removed the hardcoded h-[748px] so the container can expand naturally when panels open */}
      <div className="lg:w-300 w-full rounded-3xl bg-[#EEF6FF] flex flex-col items-center justify-center p-8 gap-4">
        {faqData.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index} 
              className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 border 
                ${isOpen ? "border-[#007FFF]" : "border-transparent"}`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left transition-colors hover:bg-gray-50/50"
                aria-expanded={isOpen}
              >
                <span className="font-bold text-[16px] leading-[180%] lg:text-[20px] text-[#232B33] pr-4">
                  {faq.question}
                </span>
                
                <span className={`text-2xl font-light text-gray-500 transition-transform duration-200 select-none ${isOpen ? 'rotate-90' : ''}`}>
                  {isOpen ? '×' : '+'}
                </span>
              </button>

              {/* FIXED: Added the missing answer collapsible container panel */}
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isOpen ? 'max-h-125 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 lg:text-[20px] text-[16px] font-normal text-[#232B33BF] leading-[180%] border-t border-gray-100 pt-4">
                  {faq.answer}
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
}

export default FAQ;