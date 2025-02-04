"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import ListElement from "@/components/ListElement";
import React, { useState } from "react";

const SearchPage = () => {
  const [testsCount, setTestsCount] = useState(0);

  const selectedTestsList = [
    "Bordetella pertussis: anticorpi IgG",
    "1,25 dihidroxi vitamina D3",
    "11 deoxicortizol",
    "17-OH Progesteron",
    "1p/19q FISH tumori solide [MOHC4]",
    "1p36 FISH tumori solide - neuroblastom [MOHC4]",
    "25-OH Vitamina D",
  ];

  const handleSearch = () => {};

  const handleRemoveElement = () => {};

  return (
    <Layout>
      <div className="flex flex-col items-center">
        <input
          className="border rounded-full shadow border-[#D7D7D7] w-[342px] h-[71px] p-3 my-[40px] text-medium"
          placeholder="Cauta analize..."
          maxLength={100}
        />
        <br />
        <div className="flex flow-row">
          <div className="text-medium">{testsCount} Analize selectate</div>
          <button
            className="bg-[#FFCF9D] border rounded-md p-1 border-[#FFCF9D] flex justify-center items-center"
            onClick={() => handleSearch()}
            disabled={testsCount === 0}
          >
            Cauata laborator
          </button>
        </div>
        <div>
          {selectedTestsList.map((element) => {
            return (
              <ListElement key={element.name}>
                <div className="flex flex-row w-full">
                  <div className="flex-[5] h-[55px] flex justify-start items-center">
                    {element.name}
                  </div>
                  <div
                    className="flex-[5] flex justify-end items-center text-red-700 text-medium"
                    onClick={() => handleRemoveElement(element.name)}
                  >
                    X
                  </div>
                </div>
              </ListElement>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default SearchPage;
