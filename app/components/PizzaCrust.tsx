import { Dispatch, SetStateAction } from "react";

type Props = {
  crust: string;
  setCrust: Dispatch<SetStateAction<string>>;
};
const PizzaCrust = ({ crust, setCrust }: Props) => {
  return (
    <div className="mt-7 flex items-center gap-x-9">
      <div className="flex items-center gap-x-2">
        <label className="cursor-pointer text-[0.85rem]">
          <input
            type="radio"
            name="crust"
            value="traditional"
            onChange={(e) => setCrust(e.target.value)}
            checked={crust === "traditional"}
            className="appearance-none w-3 h-3 border border-gray-400 rounded-full mr-2 checked:bg-orange checked:border-primary opacity-80 cursor-pointer"
          />
          Traditional
        </label>
      </div>
      <div className="flex items-center gap-x-2">
        <label className="cursor-pointer text-[0.85rem]">
          <input
            type="radio"
            name="crust"
            value="thin"
            onChange={(e) => setCrust(e.target.value)}
            checked={crust === "thin"}
            className="appearance-none w-3 h-3 border border-gray-400 rounded-full mr-2 checked:bg-orange checked:border-primary opacity-80 cursor-pointer"
          />
          Thin
        </label>
      </div>
    </div>
  );
};

export default PizzaCrust;
