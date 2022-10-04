import React, {useContext, useEffect, useState} from "react";
import { NavigationItem } from "../NavigationItem";
import { About, Container, NavigationContainer } from "./styles";
import LogoBlendon from "../../assets/logo-blendon.svg";

import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { HiPencil } from "react-icons/hi";
import { FaLink } from "react-icons/fa";

import { AppContext } from "../../contexts/AppContext";
import { theme } from "../../theme";

export const Sidebar = () => {
  const {activeNavStep, changeNavStep} = useContext(AppContext)

  return (
    <Container>
      <div>
        <h1>
          tran<span>&lt;script&gt;</span>ON
        </h1>
        <p>versão beta</p>

        <NavigationContainer>
          <NavigationItem
            icon={
              <FaLink
                size={30}
                color={
                  activeNavStep == 1 ? theme.colors.secondary : theme.colors.tertiary
                }
              />
            }
            isActive={activeNavStep == 1}
            label="Passo 1"
          />
          <NavigationItem
            icon={
              <AiOutlineLoading3Quarters
                size={30}
                color={
                  activeNavStep == 2 ? theme.colors.secondary : theme.colors.tertiary
                }
              />
            }
            isActive={activeNavStep == 2}
            label="Passo 2"
          />
          <NavigationItem
            icon={
              <HiPencil
                size={30}
                color={
                  activeNavStep == 3 ? theme.colors.secondary : theme.colors.tertiary
                }
              />
            }
            isActive={activeNavStep == 3}
            label="Passo 3"
          />
        </NavigationContainer>

        <About>
          <p>
            transcriptON é um projeto interno da blend ON para{" "}
            <span>automação nos processos de transcrição</span>, isto é,
            transformar áudio e vídeo em texto. O projeto está em sua versão
            beta e não deve ser divulgado externamente.
          </p>
        </About>
      </div>

      <img src={LogoBlendon} />
    </Container>
  );
};
