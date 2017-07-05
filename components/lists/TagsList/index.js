import React from "react";
import { StyleSheet, Text } from "react-primitives";

import Row from "../../internals/Row";
import Link from "../../internals/Link";

const TagsList = ({ path, items, style }) =>
  <Row style={style}>
    {items &&
      items.map(tag =>
        <Link key={tag} to={`${path}/tag/${tag}`} style={styles.link}>
          <Text style={styles.text}>
            {tag}
          </Text>
        </Link>
      )}
  </Row>;

const styles = StyleSheet.create({
  link: {
    margin: 8,
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 99999,
    textDecorationLine: "none",
    backgroundColor: "rgba(0, 0, 0, 0.08)",
    color: "inherit"
  },
  text: {
    lineHeight: 20,
    fontSize: 14,
    fontWeight: "300",
    opacity: 0.5
  }
});

export default TagsList;
