"use client";

import Bubble from "@/components/Bubble";
import Layout from "@/components/Layout";
import ListElement from "@/components/ListElement";
import { useEffect, useState } from "react";

const LabsPage = () => {
  const [labsCount, setLabsCount] = useState(0);
  const [averagePrice, setAveragePrice] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [labsList, setLabsList] = useState([]);

  const TEMP_labsList = [
    { name: "Regina Maria", price: 1234.56, avg: 0 },
    { name: "Sante", price: 54.56, avg: 0 },
    { name: "Synevo", price: 908.56, avg: 0 },
    { name: "pipi caca", price: 99548.56, avg: 0 },
  ];

  useEffect(() => {
    const loadedList = [...TEMP_labsList];

    const avgPrice =
      loadedList.reduce((sum, lab) => sum + lab.price, 0) / loadedList.length;

    setAveragePrice(avgPrice);

    const updatedList = loadedList.map((lab) => {
      const sgn = avgPrice - lab.price > 0 ? -1 : 1;
      return { ...lab, avg: sgn * ((lab.price / avgPrice) * 100).toFixed(0) };
    });

    setLabsList(updatedList);
    setIsLoading(false);
  }, []);

  const handleLabClick = () => {};

  const handleGoBack = () => {};

  return (
    <Layout>
      <div className="flex flex-col items-center">
        <div className="text-medium mt-20 mb-20" onClick={() => handleGoBack()}>
          Inapoi
        </div>
        <br />
        <div className="flex flow-row w-screen justify-center gap-20">
          <div className="text-medium">{labsCount} Laboratoare gasite</div>
        </div>
        {!isLoading && (
          <div>
            {labsList.map((element) => {
              return (
                <ListElement
                  key={element.name}
                  onClick={() => handleLabClick()}
                >
                  <div className="flex flex-col w-full">
                    <div className="flex-[5] h-[55px] flex justify-start items-center">
                      {element.name}
                    </div>
                    <div className="flex flex-row">
                      <div className="flex-[5] h-[55px] flex justify-start items-center">
                        <Bubble value={element} />
                      </div>
                      <div
                        className="flex-[5] flex justify-end items-center text-medium"
                        onClick={() => handleRemoveElement(element.name)}
                      >
                        {element.price} RON
                      </div>
                    </div>
                  </div>
                </ListElement>
              );
            })}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default LabsPage;
