export const Footer = () => {
  return (
    <footer className="width-full h-[46px] border-t-[#e2e8f0] border-t">
      <div className="flex items-center justify-center mx-auto max-w-[1134px] h-full py-2 px-3">
        <small className="font-extralight text-[#4a5568]">
          Copyright © {new Date().getFullYear()}{" "}
          <a
            href="https://www.linkedin.com/in/lirbre/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <small className="hover:text-[#4299e1] tracking-wider transition-all duration-[.25s] curosr-pointer">
              Breno Lira
            </small>
          </a>
        </small>
      </div>
    </footer>
  );
};
