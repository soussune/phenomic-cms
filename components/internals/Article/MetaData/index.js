import React from "react";
import { StyleSheet, Text, View } from "react-primitives";

import { LinkButton } from "../../Button";
import Author from "../Author";

const MetaData = ({ authors, /* date, relative, */ tags, style }) =>
  <View style={[style, styles.root]}>
    {authors && authors.length && <Author {...authors[0]} compact />}
    {tags &&
      tags.length &&
      <View>
        <LinkButton to={`/posts/tag/${tags[0]}`}>
          <Text style={[styles.text, styles.category]}>
            {tags[0]}
          </Text>
        </LinkButton>
      </View>}
  </View>;

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  text: {
    fontWeight: "400"
  }
});

export default MetaData;
