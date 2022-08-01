import { CreateItemProps } from "@/components/list";
import Loading from "@/components/loading";
import { useModal, useSearch } from "@/hooks";
import { SearchProps } from "@/typing/api";
import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";

interface CreateEventProps {
  title?: string;
  handleClick({
    docType,
    changeValue,
    selectedKey,
    prize,
    date,
  }: CreateItemProps): void;
  buttonName: string;
  docType: string;
}

export const CreateEvent = ({
  title,
  handleClick,
  buttonName,
  docType,
}: CreateEventProps) => {
  const { close } = useModal();
  const [formInfo, setFormInfo] = useState({
    name: "",
    prize: 0,
    date: "",
    key: "",
  });
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

    if (formInfo.name.split("").length === 0) {
      toast.warn("You should name it.");
      return;
    }

    if (formInfo.prize === 0) {
      toast.warn("You should add a prize.");
      return;
    }

    if (formInfo.date === "") {
      toast.warn("You should add a date.");
      return; 
    }

    if (formInfo.prize < 10000) {
      toast.error("The prize should be at least 10000. Gasoline is expensive.");
      return;
    }

    if (formInfo.key === "") {
      toast.warn("You should select a Winner.");
      return;
    }

    handleClick({
      docType,
      changeValue: formInfo.name,
      selectedKey: formInfo.key,
      prize: formInfo.prize,
      date: formInfo.date,
    });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.split("").length > 50) {
      toast.warn("You should use only 50 characters.");
      return;
    }

    setFormInfo({
      ...formInfo,
      name: e.target.value,
    });
  };

  const handlePrize = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.split("").length > 12) {
      toast.warn("You should use only 12 characters.");
      return;
    }

    setFormInfo({
      ...formInfo,
      prize: Number(e.target.value),
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
            <div className="flex gap-2">
              <small className="w-0 h-0 -m-[1px] absolute break-normal overflow-hidden">
                Nomeie seu Evento
              </small>
              <input
                id="search--input"
                type="text"
                className="border-[#e2e8f0] bg-[#fff] border h-[42px] w-3/4 rounded-l-[4px] px-3 py-2 text-[#4a5568] text-sm font-thin focus:outline-dotted outline-[1px] outline-offset-[-2px]"
                placeholder="Chose a name ..."
                onChange={(e) => handleChange(e)}
                value={formInfo.name}
                required
              />
              <small className="w-0 h-0 -m-[1px] absolute break-normal overflow-hidden">
                Escolha seu Prêmio
              </small>
              <input
                id="search--input"
                type="text"
                className="border-[#e2e8f0] bg-[#fff] border h-[42px] w-1/4 rounded-l-[4px] px-3 py-2 text-[#4a5568] text-sm font-thin focus:outline-dotted outline-[1px] outline-offset-[-2px]"
                placeholder="Chose a Prize ..."
                onChange={(e) => handlePrize(e)}
                value={formInfo.prize}
                required
              />
            </div>
            <small className="w-0 h-0 -m-[1px] absolute break-normal overflow-hidden">
              Quando vai ser o seu evento
            </small>
            <input
              id="search--input"
              type="date"
              className="border-[#e2e8f0] bg-[#fff] border h-[42px] w-full rounded-l-[4px] px-3 py-2 text-[#4a5568] text-sm font-thin focus:outline-dotted outline-[1px] outline-offset-[-2px]"
              placeholder="Set a date for your event ..."
              onChange={(e) =>
                setFormInfo({ ...formInfo, date: e.target.value })
              }
              value={formInfo.date}
              required
            />
            <small className="w-0 h-0 -m-[1px] absolute break-normal overflow-hidden">
              Escolha seu Vencedor
            </small>
            <select
              id="select--input"
              className="border-[#e2e8f0] bg-[#fff] border h-[42px] w-full rounded-l-[4px] px-3 py-2 text-[#4a5568] text-sm font-thin focus:outline-dotted outline-[1px] outline-offset-[-2px]"
              placeholder="Chose a winner ..."
              onChange={(e) =>
                setFormInfo({ ...formInfo, key: e.target.value })
              }
              value={formInfo.key}
              required
            >
              <option value={""} disabled>
                Choose a winner ...
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
