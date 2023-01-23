import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-fontawesome";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

function MaterialIconTextButtonsFooter1(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity style={styles.buttonWrapper1}>
        <Icon name="home" style={styles.icon1}/>
        <Text style={styles.home}>Home</Text>
      </TouchableOpacity>
      <View style={styles.buttonWrapper1Filler}>
        <TouchableOpacity style={styles.activeButtonWrapper}>
          <Icon
            name="shopping"
            style={styles.activeIcon}
          />
          <Text style={styles.keranjang}>Keranjang</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.buttonWrapper2}>
        <Icon name="user" style={styles.icon2}/>
        <Text style={styles.profil}>Profil</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "#111",
    shadowOffset: {
      width: 0,
      height: -2
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.2,
    elevation: 3,
    flexDirection: "row"
  },
  buttonWrapper1: {
    flex: 1,
    paddingHorizontal: 12,
    maxWidth: 168,
    alignItems: "center",
    height: 56,
    width: 125
  },
  icon1: {
    backgroundColor: "transparent",
    color: "#616161",
    fontSize: 24,
    opacity: 0.8
  },
  home: {
    fontSize: 12,
    color: "#9E9E9E",
    backgroundColor: "transparent",
    paddingTop: 4
  },
  activeButtonWrapper: {
    flex: 1,
    paddingHorizontal: 12,
    maxWidth: 168,
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,1)",
    width: 125,
    height: 56
  },
  activeIcon: {
    backgroundColor: "transparent",
    color: "rgba(249,239,5,1)",
    fontSize: 24,
    opacity: 0.8
  },
  keranjang: {
    fontSize: 14,
    color: "rgba(249,239,5,1)",
    backgroundColor: "transparent",
    paddingTop: 4
  },
  buttonWrapper1Filler: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  },
  buttonWrapper2: {
    flex: 1,
    paddingHorizontal: 12,
    maxWidth: 168,
    alignItems: "center",
    height: 56,
    width: 125
  },
  icon2: {
    backgroundColor: "transparent",
    color: "#616161",
    fontSize: 24,
    opacity: 0.8
  },
  profil: {
    fontSize: 12,
    color: "#9E9E9E",
    backgroundColor: "transparent",
    paddingTop: 4
  }
});

export default MaterialIconTextButtonsFooter1;
