"use client"
import { getItemById } from '@/app/products/api';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

const AccordionDatasheet = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname: string | null = usePathname();
  const id: number | null = pathname !== null ? parseInt(pathname.split('/').pop() || '', 10) || null : null;
  const item = id !== null ? getItemById(id) : null;

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mt-4 p-4 shadow-md shadow-gray-400 rounded-lg lg:w-[70%] lg:mx-auto">
      <div
        className="flex justify-between items-center cursor-pointer lg:py-5"
        onClick={toggleAccordion}
      >

        <h2 className="text-lg font-semibold">
          Informações do produto
        </h2>

        <svg
          className={`w-6 h-6 ${isOpen ? 'transform rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          >
          </path>
        </svg>
      </div>

      {isOpen && (
        <div className="mt-4">
          <p className="text-gray-600">
            {item ? item.description : "Desculpe, não encontramos informação nenhuma!"}
          </p>
        </div>
      )}
    </div>
  );
};

export default AccordionDatasheet;