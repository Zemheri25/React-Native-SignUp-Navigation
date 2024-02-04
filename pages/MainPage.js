import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
export const MainPage = (props) => {
  const { params } = props.route;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Username : {params.userName}</Text>
      <Text style={styles.text}>Password : {params.password}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          props.navigation.goBack();
        }}
      >
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontSize: 20,
  },

  button: {
    backgroundColor: "#81689D",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
  },

  buttonText: {
    color: "white",
    fontSize: 15,
  },
});
