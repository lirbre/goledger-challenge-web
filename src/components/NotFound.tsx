import { ChangeEvent, FormEvent, useState } from "react";

export const NotFound = () => {
  const [searchBar, setSearchBar] = useState<string>('')
  const [error, setError] = useState<boolean>(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (error) {
      return
    }

    location.href = (`https://goledger.com.br/?s=${searchBar}`)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.split('').length > 100) {
      setError(true)
    } else {
      setError(false)
    }

    setSearchBar(e.target.value)
  }

  return (
    <main className="width-full" style={{ animation: "fadeIn .7s" }}>
      <div className="flex flex-col mx-auto max-w-[1134px] py-12 px-3 md:h-[264px] h-[300px]">
        <h5 className="mb-8 text-[#1a202c]">Nothing Found</h5>
        <small className="text-[#4a5568]">
          It seems we can't find what you're looking for. Perhaps searching can
          help.
        </small>
        {error && <small className="text-[#9e2e2e] transition-all">Máximo de 100 caracteres ultrapassado.</small>}
        <form onSubmit={(e) => handleSubmit(e)} className="flex mt-auto">
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
          <button type="submit" className="bg-[#4299e1] h-[42px] rounded-r-[4px] text-[#f2f2f2] font-black px-3 py-2">Pesquisar</button>
        </form>
      </div>
    </main>
  );
};
