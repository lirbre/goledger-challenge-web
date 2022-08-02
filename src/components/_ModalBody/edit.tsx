import { useModal } from "@/hooks";
import { SearchProps } from "@/typing/api";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-toastify";

interface EditModalProps {
  title?: string;
  handleClick(newValue: string): void;
  buttonName: string;
  oldItem: SearchProps;
}

export const EditModal = ({
  title,
  handleClick,
  buttonName,
  oldItem,
}: EditModalProps) => {
  const { close } = useModal();
  const [newItem, setNewItem] = useState<string>(
    oldItem?.model || oldItem?.name || ''
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if ((newItem).split("").length === 0) {
      toast.warn("You can't edit to a empty name.");
      return;
    }

    if (newItem === (oldItem?.model || oldItem?.name || "")) {
      toast.warn("You should change something to edit it.");
      return;
    }

    handleClick(newItem);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.split("").length > 50) {
      toast.warn("You should use only 50 characters.");
      return;
    }

    setNewItem(e.target.value);
  };

  return (
    <div className="p-3 flex flex-col gap-4">
      <small>{title && title}</small>
      <form onSubmit={(e) => handleSubmit(e)} className="flex mt-auto">
        <small className="w-0 h-0 -m-[1px] absolute break-normal overflow-hidden">
          Edite o nome
        </small>
        <input
          id="search--input"
          type="text"
          className="border-[#e2e8f0] bg-[#fff] border h-[42px] w-full rounded-l-[4px] px-3 py-2 text-[#4a5568] text-sm font-thin focus:outline-dotted outline-[1px] outline-offset-[-2px]"
          placeholder="Editar ..."
          onChange={(e) => handleChange(e)}
          value={newItem}
          required
        />
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
    </div>
  );
};
