import React, { useContext, useEffect, useState } from "react";
import { PrimaryButton } from "../../components/PrimaryButton";
import { Container, InfoContainer, TranscriptionArea } from "./styles";
import { BsArrowRight } from "react-icons/bs";
import { theme } from "../../theme";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../contexts/AppContext";
import { toast } from 'react-toastify';


export const HomeScreen = () => {
  const regex = /(?:((?:https|http):\/\/)|(?:\/)).+(?:.mp3|mp4)/gm;
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { audioURL, changeAudioURL, changeNavStep } = useContext(AppContext);

  useEffect(() => {
    changeAudioURL("");
    changeNavStep(1)
  }, []);

  const SubmitButton = () => {
    if (audioURL.trim() === "") {
      return toast.error('O campo está vazio.')
    }

    if (!regex.exec(audioURL)) {
      return toast.error('Digite uma URL válida.')
    }

    setLoading(true);

    setTimeout(() => {
      navigate("/loading");
    }, 1000);

    changeNavStep(1);
  };

  return (
    <Container>
      <InfoContainer>
        <h1>Qual arquivo você quer transcrever?</h1>
        <p>
          O link do seu arquivo, seja ele áudio ou vídeo, precisa ser uma url
          pública e acessível sem o uso de senhas ou criptografia. Na versão
          atual da ferramenta, ainda não funcionam : links do YouTube, Vimeo,
          Zoho.
        </p>
      </InfoContainer>

      <TranscriptionArea>
        <h3>Cole o link na área abaixo</h3>
        <input
          value={audioURL}
          onChange={(t: any) => changeAudioURL(t.target.value)}
          type="text"
          placeholder="https://www.coleseulink.mp3"
        />
        <PrimaryButton onClick={SubmitButton}>
          {loading ? (
            <ClipLoader color={theme.colors.white} />
          ) : (
            <>
              Iniciar transcrição
              <BsArrowRight color={theme.colors.white} size={25} />
            </>
          )}
        </PrimaryButton>
      </TranscriptionArea>
    </Container>
  );
};
