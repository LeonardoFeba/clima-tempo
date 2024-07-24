import { Container, InputContainer, Input } from "./styles.js";
import dayImage from "../../../assets/images/bgday.png";
import nightImage from "../../../assets/images/bgnight.png";
import React from "react";
import { KeyboardAvoidingView } from "react-native";

const isNightTime = () => {
  const now = new Date();
  const hours = now.getHours();
  return hours >= 18 || hours < 5; // Entre 18h e 5h
};

export default function Search() {
  const backgroundImage = isNightTime() ? nightImage : dayImage; // Condicional para definir a imagem de fundo
  const [text, onChangeText] = React.useState("");
  return (
    <Container source={backgroundImage} resizeMode="cover">
      <KeyboardAvoidingView>
        <InputContainer>
          <Input
            onChangeText={onChangeText}
            value={text}
            placeholder="Digite uma cidade"
          ></Input>
        </InputContainer>
      </KeyboardAvoidingView>
    </Container>
  );
}
