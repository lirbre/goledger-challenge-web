import { NotFound } from "@/components/NotFound";
import { Meta } from "@/layouts";
import { Main } from "@/templates";

const PageNotFound = () => {
  return (
    <Main
      meta={
        <Meta
          title="Página não encontrada"
          description="Sorry! You probably is searching for something that doesn't exist yet."
        />
      }
    >
        <NotFound/>
    </Main>
  );
};

export default PageNotFound; 
