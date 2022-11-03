import React, { useContext } from "react";
import Modal from "react-modal";
import { AppContext } from "../../contexts/AppContext";
import { ButtonArea, FromToContainer, ModalContent, Table, Title } from "./styles";

import { IoIosArrowBack } from "react-icons/io";
import { FaSave } from "react-icons/fa";

import ArrowRight from "../../assets/arrow-right.svg";
import { SecondaryButton } from "../SecondaryButton";
import { theme } from "../../theme";

export const ModalAdd = () => {
  const { isModalAddActive, changeModalAddState } = useContext(AppContext);

  const closeModalAdd = () => {
    changeModalAddState(false);
  };

  const customStyles = {
    content: {

      borderRadius: '1.5rem 1.5rem 0 0',
      border: 'none'
    },
  };

  return (
     <Modal
      isOpen={isModalAddActive}
      onRequestClose={closeModalAdd}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <ModalContent>
        <h3>
          <IoIosArrowBack /> Adicionar nova palavra
        </h3>

        <FromToContainer>
          <Title>
            <h3>De</h3>

            <h3>Para</h3>
          </Title>

          <Table>
            <div>
              <p>Ntegra</p>
              <img src={ArrowRight} />
              <p>Integra</p>
            </div>
          </Table>
        </FromToContainer>

        <ButtonArea>
          <SecondaryButton
            icon={<FaSave size={23} color={theme.colors.tertiary} />}
            onClick={() => {}}
          >
            Salvar
          </SecondaryButton>
        </ButtonArea>
      </ModalContent>
    </Modal>
  );
};
