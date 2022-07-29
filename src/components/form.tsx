import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

interface FormProps {
  searchBar: string;
  setSearchBar: Dispatch<SetStateAction<string>>;
}

export const Form = ({ searchBar, setSearchBar }: FormProps) => {
  const [error, setError] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.split("").length > 100) {
      setError(true);
    } else {
      setError(false);
    }

    setSearchBar(e.target.value);
  };

  return (
    <div className="flex flex-col h-16">
      {error && (
        <small className="text-[#9e2e2e] transition-all">
          Máximo de 100 caracteres ultrapassado.
        </small>
      )}
      <form className="flex mt-auto">
        <small className="w-0 h-0 -m-[1px] absolute break-normal overflow-hidden">
          Pesquisar por
        </small>
        <input
          id="search--input"
          type="text"
          className="border-[#e2e8f0] bg-[#fff] border h-[42px] w-full rounded-l-[4px] px-3 py-2 text-[#4a5568] text-sm font-thin focus:outline-dotted outline-[1px] outline-offset-[-2px]"
          placeholder="Pesquisar ..."
          onChange={(e) => handleChange(e)}
          value={searchBar}
          required
        />
      </form>
    </div>
  );
};
