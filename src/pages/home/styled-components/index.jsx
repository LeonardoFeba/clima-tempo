import Logo from "../../../assets/images/logo.png";
import React from "react";

import { Container, ContainerLogo, ImageLogo } from "./styles.js";
import dayImage from "../../../assets/images/bgday.png";
import nightImage from "../../../assets/images/bgnight.png";

const isNightTime = () => {
  const now = new Date();
  const hours = now.getHours();
  return hours >= 18 || hours < 5; // Entre 18h e 5h
};

export default function Home() {
  const backgroundImage = isNightTime() ? nightImage : dayImage; // Condicional para definir a imagem de fundo
  const logoPosition = isNightTime() ? "top" : "center"; // Condicional para a posição do logo
  return (
    <Container source={backgroundImage} resizeMode="cover">
      <ContainerLogo position={logoPosition}>
        <ImageLogo source={Logo}></ImageLogo>
      </ContainerLogo>
    </Container>
  );
}
