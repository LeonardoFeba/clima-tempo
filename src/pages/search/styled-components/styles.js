import styled from "styled-components/native";

export const Container = styled.ImageBackground`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 100%;
`;

export const InputContainer = styled.SafeAreaView`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fbecf0;
  width: 225px;
  height: 41px;
  border-radius: 8px;
  margin-bottom: 10px;
`;

export const Input = styled.TextInput`
  height: 35px;
  margin: 12px;
  border-width: 1px;
  border-radius: 8px;
  width: 220px;
  text-align: center;
  margin-top: 12px;
`;
