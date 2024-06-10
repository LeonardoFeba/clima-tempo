import styled from "styled-components/native";

const getMarginTop = (position) => {
  return position === "center" ? "0px" : "-225px"; // Ajuste conforme necessário
};

export const Container = styled.ImageBackground`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 100%;
`;

export const ContainerLogo = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-top: ${(props) => getMarginTop(props.position)};
`;

export const ImageLogo = styled.Image`
  width: 240px;
  height: 282px;
  opacity: 1;
`;
