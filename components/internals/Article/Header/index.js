import React from "react";
import { StyleSheet, View } from "react-primitives";

import { Heading } from "../../Typography";

const Header = ({ text, style, children }) =>
  <View style={[style, styles.root]}>
    {text && <Heading level="2">{text}</Heading>}
    <View>{children}</View>
  </View>;

const styles = StyleSheet.create({
  root: {}
});

export default Header;
