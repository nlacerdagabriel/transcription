import React, { useContext, useEffect, useState } from "react";

import {
  Container,
  FromToContainer,
  InfoContainer,
  Table,
  Tip,
  Title,
} from "./styles";

import TipImg from "../../assets/tip.svg";
import { GrAddCircle } from "react-icons/gr";
import ArrowRight from "../../assets/arrow-right.svg";

import { SecondaryButton } from "../../components/SecondaryButton";
import { theme } from "../../theme";
import { AppContext } from "../../contexts/AppContext";

export const InteligenceScreen = () => {

  const {changeModalAddState} = useContext(AppContext)

  return (
    <Container>
      <InfoContainer>
        <h1>Inteligência ortográfica</h1>
        <p>
          O TranscriptON possui uma funcionalidade para{" "}
          <span>aprimoramento continuo de suas transcrições</span>. Os usuários
          do sistema podem identificar eventuais erros em palavras transcritas
          e, através da inteligência ortográfica da ferramenta, vamos ensinando
          as correções a serem aplicadas nas palavras, reduzindo assim os erros
          retornados a cada nova transcrição e tornando o TranscriptON em uma
          ferramenta mais eficiente.
        </p>
      </InfoContainer>

      <Tip>
        <img src={TipImg} />

        <div>
          <h2>Dica</h2>
          <p>
            Quando houver variações da mesma palavra com grafia diferente,
            deve-se separar pelo caractere <span>;</span>
          </p>
        </div>
      </Tip>

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
          <div>
            <p>Ntegra</p>
            <img src={ArrowRight} />
            <p>Integra</p>
          </div>
        </Table>
      </FromToContainer>

      <SecondaryButton
        icon={<GrAddCircle color={theme.colors.tertiary} />}
        onClick={() => changeModalAddState(true)}
      >
        Adicionar palavra
      </SecondaryButton>
    </Container>
  );
};
