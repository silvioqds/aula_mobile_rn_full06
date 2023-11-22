import {Dimensions,StyleSheet,TextInput,Text, View, TextInputProps} from "react-native";

interface Props extends TextInputProps { //Extende todas as caracteristicas do TextInput
  label: String
}

export default function MyInput(props: Props) {
  return (
    <View style={styles.inputView}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput style={styles.input} {...props} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputView: {
    marginBottom: 30,
  },

  label: {
    fontSize: 18,
    marginBottom: 5,
  },

  input: {
    borderWidth: 1,
    height: 40,
    padding: 10,
    fontSize: 15,
    width: Dimensions.get("screen").width - 100
  },
});
