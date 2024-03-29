import React, { useContext, useState, useEffect } from "react";
import Modal from "react-modal";
import { AppContext } from "../../contexts/AppContext";
import {
  ButtonArea,
  FromToContainer,
  ModalContent,
  Table,
  Title,
} from "./styles";

import { IoIosArrowBack } from "react-icons/io";
import { FaSave } from "react-icons/fa";

import ArrowRight from "../../assets/arrow-right.svg";
import { SecondaryButton } from "../SecondaryButton";
import { theme } from "../../theme";
import { createWord, getAllWords, getOneWord, updateWord } from "../../services/backendService";
import { toast } from "react-toastify";
import { IWordSpelling } from "../../interfaces/wordInterfaces";

export const ModalUpdate = () => {
  const { isModalUpdateActive, changeModalUpdateState, updateWordList, wordId } = useContext(AppContext);
  const [from, setFrom] = useState("")
  const [to, setTo] = useState("")

  useEffect(() => {
    const getData = async() => {
      const response = await getOneWord(wordId)

      setFrom(response.data.from)
      setTo(response.data.to)
    }

    getData()
  }, [wordId])

  const closeModalUpdate = () => {
    changeModalUpdateState(false);
  };

  const handleSaveWord = async() => {
    try {
      await updateWord(wordId, from, to)
      toast.success('Palavra editada com sucesso!')
      setFrom("")
      setTo("")

      updateWordList();

      closeModalUpdate()

    } catch (error) {
      toast.error('Algo deu errado.')
    }
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "61%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      padding: 0,
      borderRadius: "1rem 1rem 0 0 ",
      width: '862px'
    },
  };

  return (
    <Modal
      isOpen={isModalUpdateActive}
      onRequestClose={closeModalUpdate}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <ModalContent>
        <h3>
          <button onClick={closeModalUpdate} className="arrow-back">
          <IoIosArrowBack /></button> Editar palavra
        </h3>

        <FromToContainer>
          <Title>
            <h3>De</h3>

            <h3>Para</h3>
          </Title>

          <Table>
            <div>
              <input placeholder="Ntegra" type="text" value={from} onChange={(e) => setFrom(e.target.value)} />
              <img src={ArrowRight} />
              <input placeholder="Íntegra" type="text" value={to} onChange={(e) => setTo(e.target.value)}/>
            </div>
          </Table>
        </FromToContainer>

        <ButtonArea>
          <SecondaryButton
            icon={<FaSave size={23} color={theme.colors.tertiary} />}
            onClick={handleSaveWord}
          >
            Salvar
          </SecondaryButton>
        </ButtonArea>
      </ModalContent>
    </Modal>
  );
};
