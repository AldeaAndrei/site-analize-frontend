import { Fragment } from "react";

const Header = () => {
  return (
    <div className="px-10 flex flex-col gap-2 bg-gradient-to-b from-[#FFB26F] to-transparent">
      <h1 className="text-big mt-3">PretAnalize.ro</h1>
      <h2 className="text-medium text-black font-normal">
        Cauta analizele dorite si gaseste laboratorul cu cel mai bun pret
      </h2>
    </div>
  );
};

export default Header;
