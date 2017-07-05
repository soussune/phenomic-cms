import React from "react";
import { StyleSheet, Text, View } from "react-primitives";
import styled from "styled-components/primitives";

import rem from "../../../../utilities/rem";
import Link from "../../Link";
import Avatar from "../../Avatar";

const RootView = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: ${rem(20)};
`;

const Author = ({
  id,
  name,
  headline,
  /* socials, compact, */ style,
  children
}) =>
  <RootView style={style}>
    <Avatar name={name} style={[styles.cell, styles.avatar]} />
    <View style={[styles.cell, styles.container]}>
      <Link to={`/authors/${id}`} style={styles.link}>
        <Text style={[styles.text, styles.heading]}>
          {name}
        </Text>
      </Link>
      {headline &&
        <Text style={styles.text}>
          {headline}
        </Text>}
      {children &&
        <Text style={[styles.text, styles.children]}>
          {children}
        </Text>}
    </View>
  </RootView>;

const styles = StyleSheet.create({
  cell: {},
  container: {},
  link: {
    textDecorationLine: "none",
    color: "inherit"
  },
  text: {
    lineHeight: 16 * 1.4,
    fontSize: 13,
    fontWeight: "300",
    opacity: 0.4
  },
  avatar: {
    width: 75,
    height: 75,
    marginRight: 20,
    borderColor: "#ddd"
  },
  heading: {
    fontSize: 16,
    opacity: 1
  },
  children: {}
});

export default Author;
