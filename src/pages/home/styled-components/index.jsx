import Background from "../../../assets/images/bgday.png";
import Logo from "../../../assets/images/logobg.png";

import { Container, ContainerLogo, ImageLogo } from "./styles.js";

export default function Home() {
  return (
    <Container source={Background} resizeMode="cover">
      <ContainerLogo>
        <ImageLogo source={Logo}></ImageLogo>
      </ContainerLogo>
    </Container>
  );
}
