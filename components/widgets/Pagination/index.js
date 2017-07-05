import React from "react";
import { StyleSheet, Text, View } from "react-primitives";

import Link from "../../internals/Link";

const Pagination = ({ items, path, style }) =>
  <View style={[style, styles.root]}>
    <View style={styles.cell}>
      {items.node &&
        items.node.hasNextPage &&
        <Link to={`${path}/after/${items.node.next}`} style={styles.link}>
          <Text style={styles.text}>
            {"Go Back in Time"}
          </Text>
        </Link>}
    </View>
    <View style={styles.cell}>
      {items.node &&
        items.node.hasPreviousPage &&
        <Link
          to={
            items.node.previousPageIsFirst
              ? path
              : `${path}/after/${items.node.previous}`
          }
          style={styles.link}
        >
          <Text style={styles.text}>
            {"Go Forward in Time"}
          </Text>
        </Link>}
    </View>
  </View>;

const styles = StyleSheet.create({
  root: {
    flexDirection: "row"
  },
  cell: {
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    padding: 10
  },
  link: {
    paddingVertical: 4,
    paddingHorizontal: 6,
    textDecorationLine: "none",
    color: "inherit",
    borderColor: "#222",
    borderRadius: 4,
    borderStyle: "solid",
    borderWidth: 2
  },
  text: {
    fontSize: 18,
    fontWeight: "600"
  }
});

export default Pagination;
