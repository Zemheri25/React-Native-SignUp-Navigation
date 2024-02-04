import React, { useEffect } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import { useState } from "react";

export const Register = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorText, setErroText] = useState("");
  const reDirectToMainPage = () => {
    if (!userName) {
      setErroText("Please enter a Username...");
    } else if (!password) {
      setErroText("Please enter a Password...");
    } else {
      setErroText("");
      navigation.navigate("MainPage", {
        userName: userName,
        password: password,
      });
    }
  };

  const Reset = () => {
    setPassword("");
    setUserName("");
    setErroText("");
  };
  
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Username..."
        onChangeText={(e) => {
          setUserName(e);
        }}
        style={styles.input}
        value={userName}
      />
      <TextInput
        placeholder="PassWord..."
        onChangeText={(e) => {
          setPassword(e);
        }}
        style={styles.input}
        secureTextEntry={true}
        value={password}
      />
      <TouchableOpacity style={styles.button} onPress={reDirectToMainPage}>
        <Text style={styles.text}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={Reset}>
        <Text style={styles.text}>Reset</Text>
      </TouchableOpacity>

      {errorText && <Text style={styles.errorText}>{errorText}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    justifyContent: "center",
    gap: 20,
    backgroundColor: "white",
  },
  input: {
    backgroundColor: "#C7C8CC",
    padding: 10,
    borderRadius: 10,
  },
  button: {
    backgroundColor: "#474F7A",
    padding: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
  },

  errorText: {
    backgroundColor: "#FF8080",
    color: "white",
    padding: 5,
    borderRadius: 5,
  },
});
