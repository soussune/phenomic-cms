import React from "react";
import { StyleSheet, Text, View } from "react-primitives";

import { version } from "../../../../package.json";
import Link from "../../Link";

const Masterbar = ({ style }) =>
  <View accessibilityRole="navigation" style={[style, styles.root]}>
    <View style={styles.cell}>
      <Link to="/" style={styles.link}>
        <Text style={[styles.text, styles.heading]}>
          {"soussune"}
        </Text>
      </Link>
      <Link
        href="https://github.com/soussune/phenomic-cms"
        style={styles.link}
      >
        <Text style={[styles.text, styles.version]}>{`v${version}`}</Text>
      </Link>
    </View>
    <View style={styles.cell}>
      <Link to="/posts" style={styles.link}>
        <Text style={styles.text}>
          {"Articles"}
        </Text>
      </Link>
    </View>
  </View>;

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  link: {
    padding: 10,
    textDecorationLine: "none",
    color: "inherit"
  },
  text: {
    lineHeight: 24 * 1.25
  },
  cell: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "baseline"
  },
  heading: {
    fontSize: 24
  },
  version: {
    marginLeft: -10,
    fontSize: 12,
    opacity: 0.4
  }
});

export default Masterbar;
