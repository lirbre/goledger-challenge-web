import { useModal } from "@/hooks";

interface DeleteModalProps {
  title?: string;
  handleClick(): void;
  buttonName: string
}

export const DeleteModal = ({ title, handleClick, buttonName }: DeleteModalProps) => {
  const { close } = useModal();
  return (
    <div className="p-3 flex flex-col gap-2">
      <small>{title && title}</small>
      <div className="w-full flex gap-2">
        <button
          onClick={() => handleClick()}
          className="h-[78px] w-full py-4 px-3 border-[#e2e8f0] border shadow-md flex items-center justify-center rounded-sm hover:opacity-80 transition-all duration-300"
        >
          {buttonName}!
        </button>
        <button
          onClick={() => close()}
          className="h-[78px] w-full py-4 px-3 border-[#e2e8f0] border shadow-md flex items-center justify-center rounded-sm hover:opacity-80 transition-all duration-300"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
