import Image from "next/image";
import { useRouter } from "next/router";

export const Navbar = () => {
  const router = useRouter();

  return (
    <header className="width-full h-[62.48px] sticky top-0 z-10 border-b-[#e2e8f0] border-b">
      <div className="flex items-center justify-between mx-auto max-w-[1134px] h-full py-2 px-3">
        <Image
          src={"/assets/images/goledger-logo.png"}
          width={188}
          height={45.48}
          onClick={() => router.replace("/")}
          className="cursor-pointer"
        />
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/lirbre/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <small className="text-[#4a5568] hover:text-[#4299e1] font-black p-3 tracking-wider transition-all duration-[.25s] curosr-pointer">
                Contato
              </small>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};
