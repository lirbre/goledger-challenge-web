import Loading from "@/components/loading";
import { useModal, useSearch } from "@/hooks";
import { SearchProps } from "@/typing/api";
import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";

interface EditDriverProps {
  title?: string;
  handleClick(newKey: string, newValue: string): void;
  buttonName: string;
  oldItem: SearchProps;
}

export const EditDriver = ({
  title,
  handleClick,
  buttonName,
  oldItem,
}: EditDriverProps) => {
  const { close } = useModal();
  const [newValue, setNewValue] = useState<SearchProps>(oldItem);
  const [selectedKey, setSelectedKey] = useState<string>(
    oldItem?.team!["@key"]
  );
  const { callSearch, myRes, isLoading } = useSearch<SearchProps[]>();

  useEffect(() => {
    callSearch("team");
  }, []);

  const dinamicOptions = useMemo(
    () =>
      !isLoading &&
      myRes &&
      myRes
        .sort((a, b) =>
          (a.model || a.name || "")
            .toLowerCase()
            .localeCompare((b.model || b.name || "").toLowerCase())
        )
        .map((item) => (
          <option value={item["@key"]} key={item["@key"]}>
            {item.name}
          </option>
        )),
    [myRes]
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (
      (newValue?.name === oldItem?.name) &&
      (selectedKey === oldItem?.team?.["@key"])
    ) {
      toast.warn("You should change the name or the team.");
      return;
    }

    handleClick(newValue?.name || "", selectedKey);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.split("").length > 50) {
      toast.warn("You should use only 50 characters.");
      return;
    }

    setNewValue({
      ...newValue,
      name: e.target.value,
    });
  };

  return (
    <div className="p-3 flex flex-col gap-4">
      <small>{title && title}</small>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="flex flex-col gap-2 mt-auto"
          >
            <small className="w-0 h-0 -m-[1px] absolute break-normal overflow-hidden">
              Nomeie seu piloto
            </small>
            <input
              id="search--input"
              type="text"
              className="border-[#e2e8f0] bg-[#fff] border h-[42px] w-full rounded-l-[4px] px-3 py-2 text-[#4a5568] text-sm font-thin focus:outline-dotted outline-[1px] outline-offset-[-2px]"
              placeholder="Chose a new name ..."
              onChange={(e) => handleChange(e)}
              value={newValue?.name}
              required
            />
            <small className="w-0 h-0 -m-[1px] absolute break-normal overflow-hidden">
              Escolha seu Time
            </small>
            <select
              id="select--input"
              className="border-[#e2e8f0] bg-[#fff] border h-[42px] w-full rounded-l-[4px] px-3 py-2 text-[#4a5568] text-sm font-thin focus:outline-dotted outline-[1px] outline-offset-[-2px]"
              placeholder="Chose a new team ..."
              onChange={(e) => setSelectedKey(e.target.value)}
              value={selectedKey}
              required
            >
              <option value={""} disabled>
                Choose a team...
              </option>
              {dinamicOptions}
            </select>
          </form>{" "}
          <div className="w-full flex gap-4">
            <button
              onClick={(e) => handleSubmit(e)}
              type="submit"
              className="h-[78px] bg-[#4F9446] w-full py-4 px-3 text-[#fff] font-bold border-[#e2e8f0] border shadow-md flex items-center justify-center rounded-sm hover:opacity-80 transition-all duration-300"
            >
              {buttonName}!
            </button>
            <button
              onClick={() => close()}
              type="reset"
              className="h-[78px] bg-[#ff1e40] w-full py-4 px-3 text-[#fff] font-bold border-[#e2e8f0] border shadow-md flex items-center justify-center rounded-sm hover:opacity-80 transition-all duration-300"
            >
              Cancel
            </button>
          </div>
        </>
      )}
    </div>
  );
};
