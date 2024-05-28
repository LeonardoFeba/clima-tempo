import { View, Text, StyleSheet } from "react-native";

function TextProps(props) {
  return <Text>{props.title}</Text>;
}

const arrayText = ["oi", "bem", "mal", "xau"];

export default function Home() {
  return (
    <View style={styles.container}>
      {arrayText.map((value, index) => {
        return <TextProps key={index} title={value} />;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
// -------------------- /\ estrutura base para utilizar .map e propriedades em elementos ----------------