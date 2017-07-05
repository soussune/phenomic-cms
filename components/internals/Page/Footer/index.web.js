import React from "react";
import { StyleSheet, Text, View } from "react-primitives";

import Link from "../../Link";
import Section from "../Section";
import Container from "../Container";

const Footer = ({ style, children }) =>
  <Section accessibilityRole="contentinfo" style={[style, styles.root]}>
    {children &&
      <View style={styles.children}>
        {children}
      </View>}
    <Container style={styles.container}>
      <Text style={styles.text}>
        {"Website by "}
      </Text>
      <Link href="https://www.syndia.nl" style={styles.link}>
        <Text style={styles.text}>
          {"Syndia.nl"}
        </Text>
      </Link>
      <Text style={styles.text}>
        {" Made with ♥ and "}
      </Text>
      <Link href="https://phenomic.io" target="_blank" style={styles.link}>
        <Text style={styles.text}>
          {"<Phenomic />"}
        </Text>
      </Link>
    </Container>
  </Section>;

const styles = StyleSheet.create({
  root: {},
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },
  link: {
    textDecorationLine: "none",
    color: "inherit"
  },
  text: {
    alignSelf: "center",
    lineHeight: 20,
    fontSize: 13,
    opacity: 0.4
  }
});

export default Footer;
