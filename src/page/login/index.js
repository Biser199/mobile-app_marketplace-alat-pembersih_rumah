import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

function Login(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect4}>
        <Text style={styles.username}>Username</Text>
        <View style={styles.rect}>
          <View style={styles.rect2}></View>
        </View>
        <Text style={styles.password}>Password</Text>
        <View style={styles.rect3}></View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Home")}
          style={styles.button}
        >
          <Text style={styles.mulai}>MULAI</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.selamatDatangStack}>
        <Text style={styles.selamatDatang}>Selamat datang kembali</Text>
        <Text style={styles.loremIpsum}></Text>
      </View>
      <Text style={styles.loremIpsum2}>
        Login dengan Username &amp; Password
      </Text>
      <View style={styles.buatAkunBaruRow}>
        <Text style={styles.buatAkunBaru}>Buat akun baru?</Text>
        <Text style={styles.daftar}>Daftar</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,1)"
  },
  rect4: {
    width: 323,
    height: 333,
    backgroundColor: "rgba(241,240,240,1)",
    borderRadius: 20,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.31,
    shadowRadius: 0,
    overflow: "visible",
    marginTop: 242,
    alignSelf: 'center'
  },
  username: {
    fontFamily: "inter-700",
    color: "#121212",
    marginTop: 28,
    marginLeft: 43
  },
  rect: {
    width: 259,
    height: 50,
    backgroundColor: "#E6E6E6",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#000000",
    marginTop: 8,
    alignSelf: 'center'
  },
  rect2: {
    width: 259,
    height: 50,
    backgroundColor: "rgba(241,241,241,1)",
    borderRadius: 21,
    borderWidth: 1,
    borderColor: "#000000"
  },
  password: {
    fontFamily: "inter-700",
    color: "#121212",
    marginTop: 16,
    marginLeft: 43
  },
  rect3: {
    width: 259,
    height: 50,
    backgroundColor: "rgba(241,241,241,1)",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#000000",
    marginTop: 3,
    alignSelf: 'center'
  },
  button: {
    width: 237,
    height: 50,
    backgroundColor: "rgba(250,255,16,1)",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#000000",
    marginTop: 53,
    alignSelf: 'center'
  },
  mulai: {
    fontFamily: "inter-700",
    color: "rgba(177,43,43,1)",
    textAlign: "center",
    marginTop: 16,
    alignSelf: 'center'
  },
  selamatDatang: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "inter-regular",
    color: "#121212",
    fontSize: 18
  },
  loremIpsum: {
    top: 20,
    left: 8,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  selamatDatangStack: {
    width: 204,
    height: 21,
    marginTop: -463,
    alignSelf: 'center'
  },
  loremIpsum2: {
    fontFamily: "inter-regular",
    color: "#121212",
    fontSize: 10,
    marginTop: 1,
    alignSelf: 'center'
  },
  buatAkunBaru: {
    fontFamily: "inter-regular",
    color: "#121212",
    fontSize: 16
  },
  daftar: {
    fontFamily: "roboto-regular",
    color: "rgba(18,14,219,1)",
    fontSize: 16,
    marginLeft: 4,
    marginTop: 1
  },
  buatAkunBaruRow: {
    height: 20,
    flexDirection: "row",
    marginTop: 482,
    marginLeft: 140,
  }
});

export default Login;
