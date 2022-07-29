import { List } from "@/components";
import Modal from "@/components/modal";
import { ModalProvider } from "@/context/modal-context";
import { Meta } from "@/layouts";
import { Main } from "@/templates";

const Index = () => {
  return (
    <ModalProvider>
      <Main
        meta={
          <Meta
            title={`GoLedger - List`}
            description={`List of GoLedger information.`}
          />
        }
      >
        <List />
        <Modal />
      </Main>
    </ModalProvider>
  );
};

export default Index;
