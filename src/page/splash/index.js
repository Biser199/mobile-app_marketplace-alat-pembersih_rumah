import React, { Component } from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";

function Splash(props) {
  return (
    <View style={styles.container}>
      <View style={styles.imageStack}>
        <Image
          source={require("../image/splash.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Login")}
          style={styles.button}
        >
          <Text style={styles.getStarted}>Get Started</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.loremIpsum}></Text>
      <Text style={styles.selamatDatang}>
        SELAMAT DATANG{"\n"}DI{"\n"}ALPERU
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(250,255,16,1)"
  },
  image: {
    width: 265,
    height: 443,
    position: "absolute",
    top: 0,
    alignSelf: "center"
  },
  button: {
    top: 435,
    width: 191,
    height: 44,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 15,
    alignSelf: "center"
  },
  getStarted: {
    fontFamily: "inter-700",
    color: "#121212",
    marginTop: 14,
    alignSelf: "center"
  },
  imageStack: {
    width: 265,
    height: 480,
    marginTop: 261,
    alignSelf: "center"
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: -631,
    alignSelf: "center"
  },
  selamatDatang: {
    fontFamily: "inter-800",
    color: "#121212",
    textAlign: "center",
    opacity: 0.8,
    fontSize: 20,
    marginTop: 11,
    alignSelf: "center"
  }
});

export default Splash;
