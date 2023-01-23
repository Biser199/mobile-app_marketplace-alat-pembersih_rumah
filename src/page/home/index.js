import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
// import MaterialIconTextButtonsFooter1 from "../components/MaterialIconTextButtonsFooter1";
import MaterialIconTextButtonsFooter1 from "../../components/materialIcon";

function Home(props) {
  return (
    <View style={styles.container}>
      <MaterialIconTextButtonsFooter1
        style={styles.materialIconTextButtonsFooter1}
      ></MaterialIconTextButtonsFooter1>
      <View style={styles.rectRow}>
        <View style={styles.rect}>
          <Image
            source={require("../image/6bbfb640-0ba3-40e7-94eb-b178be87889d.jpg")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
          <Text style={styles.sapuPlastik}>Sapu Plastik</Text>
          <Text style={styles.rp15000}>Rp. 15. 000</Text>
        </View>
        <View style={styles.rect7}>
          <Image
            source={require("../image/ad3aa851-8090-4880-ad7a-2666c94573a4.jpg")}
            resizeMode="contain"
            style={styles.image2}
          ></Image>
          <Text style={styles.pelPetakCotton}>Pel Petak cotton</Text>
          <Text style={styles.rp17000}>Rp. 17. 000</Text>
        </View>
      </View>
      <Text style={styles.alperu}>ALPERU</Text>
      <View style={styles.rect8Row}>
        <View style={styles.rect8}>
          <Image
            source={require("../image/20fd64bf-03cb-47e3-9fae-45b409e82fe8.jpg")}
            resizeMode="contain"
            style={styles.image3}
          ></Image>
          <Text style={styles.kainPelWarna}>Kain Pel Warna</Text>
          <Text style={styles.rp12000}>Rp. 12. 000</Text>
        </View>
        <View style={styles.rect9}>
          <Image
            source={require("../image/4530e5e9-c053-40b5-9758-70fbf451539e.jpg")}
            resizeMode="contain"
            style={styles.image4}
          ></Image>
          <Text style={styles.kainPelReffil}>Kain Pel Reffil</Text>
          <Text style={styles.rp10000}>Rp. 10. 000</Text>
        </View>
      </View>
      <View style={styles.rect10Row}>
        <View style={styles.rect10}>
          <View style={styles.image5Stack}>
            <Image
              source={require("../image/c3ea4fb9-f379-4da5-9bcc-83db422f04c8.jpg")}
              resizeMode="contain"
              style={styles.image5}
            ></Image>
            <Text style={styles.cairanPembersih}>
              Cairan Pembersih{"\n"}Kaca
            </Text>
          </View>
          <Text style={styles.rp35000}>Rp. 35. 000</Text>
        </View>
        <View style={styles.rect11}>
          <Image
            source={require("../image/ac3006dc-bc27-45b4-b530-f4ce663025e2.jpg")}
            resizeMode="contain"
            style={styles.image6}
          ></Image>
          <Text style={styles.text}>Cairan Pembersih{"\n"}Lantai</Text>
          <Text style={styles.rp40000}>Rp. 40. 000</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  materialIconTextButtonsFooter1: {
    height: 56,
    width: 470,
    marginTop: 820
  },
  rect: {
    width: 121,
    height: 160,
    backgroundColor: "rgba(255,249,249,1)",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "rgba(201,192,192,1)"
  },
  image: {
    width: 104,
    height: 104,
    marginTop: 7,
    marginLeft: 8
  },
  sapuPlastik: {
    fontFamily: "inter-600",
    color: "#121212",
    fontSize: 12,
    marginTop: 5,
    marginLeft: 26
  },
  rp15000: {
    fontFamily: "inter-600",
    color: "#121212",
    fontSize: 12,
    textAlign: "center",
    marginTop: 2,
    marginLeft: 28
  },
  rect7: {
    width: 121,
    height: 160,
    backgroundColor: "rgba(255,249,249,1)",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "rgba(201,192,192,1)",
    marginLeft: 78
  },
  image2: {
    width: 107,
    height: 107,
    marginTop: 5,
    marginLeft: 6
  },
  pelPetakCotton: {
    fontFamily: "inter-600",
    color: "#121212",
    fontSize: 12,
    marginTop: 6,
    marginLeft: 15
  },
  rp17000: {
    fontFamily: "inter-600",
    color: "#121212",
    fontSize: 12,
    marginTop: 1,
    marginLeft: 30
  },
  rectRow: {
    height: 160,
    flexDirection: "row",
    marginTop: -630,
    marginLeft: 27,
    marginRight: 27
  },
  alperu: {
    fontFamily: "inter-600",
    color: "#121212",
    fontSize: 32,
    marginTop: -244,
    marginLeft: 122
  },
  rect8: {
    width: 121,
    height: 160,
    backgroundColor: "rgba(255,249,249,1)",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "rgba(201,192,192,1)"
  },
  image3: {
    width: 105,
    height: 105,
    marginTop: 7,
    marginLeft: 8
  },
  kainPelWarna: {
    fontFamily: "inter-600",
    color: "#121212",
    fontSize: 12,
    marginTop: 7,
    marginLeft: 17
  },
  rp12000: {
    fontFamily: "inter-600",
    color: "#121212",
    fontSize: 12,
    marginTop: 3,
    marginLeft: 27
  },
  rect9: {
    width: 121,
    height: 160,
    backgroundColor: "rgba(255,249,249,1)",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "rgba(201,192,192,1)",
    marginLeft: 78
  },
  image4: {
    width: 108,
    height: 104,
    marginTop: 7,
    marginLeft: 8
  },
  kainPelReffil: {
    fontFamily: "inter-600",
    color: "#121212",
    fontSize: 12,
    marginTop: 8,
    marginLeft: 21
  },
  rp10000: {
    fontFamily: "inter-600",
    color: "#121212",
    fontSize: 12,
    marginLeft: 28
  },
  rect8Row: {
    height: 160,
    flexDirection: "row",
    marginTop: 224,
    marginLeft: 27,
    marginRight: 27
  },
  rect10: {
    width: 121,
    height: 160,
    backgroundColor: "rgba(255,249,249,1)",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "rgba(201,192,192,1)"
  },
  image5: {
    top: 0,
    left: 2,
    width: 100,
    height: 100,
    position: "absolute"
  },
  cairanPembersih: {
    top: 99,
    left: 0,
    position: "absolute",
    fontFamily: "inter-600",
    color: "#121212",
    fontSize: 12,
    textAlign: "center"
  },
  image5Stack: {
    width: 103,
    height: 129,
    marginTop: 5,
    marginLeft: 7
  },
  rp35000: {
    fontFamily: "inter-600",
    color: "#121212",
    fontSize: 12,
    marginTop: 2,
    marginLeft: 26
  },
  rect11: {
    width: 121,
    height: 160,
    backgroundColor: "rgba(255,249,249,1)",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "rgba(201,192,192,1)",
    marginLeft: 77
  },
  image6: {
    width: 93,
    height: 92,
    marginTop: 5,
    marginLeft: 16
  },
  text: {
    fontFamily: "inter-600",
    color: "#121212",
    fontSize: 12,
    textAlign: "center",
    marginTop: 8,
    marginLeft: 8
  },
  rp40000: {
    fontFamily: "inter-600",
    color: "#121212",
    fontSize: 12,
    marginTop: 1,
    marginLeft: 26
  },
  rect10Row: {
    height: 160,
    flexDirection: "row",
    marginTop: 26,
    marginLeft: 28,
    marginRight: 27
  }
});

export default Home;
