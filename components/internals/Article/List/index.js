import React from "react";
import { StyleSheet, View } from "react-primitives";

import Preview from "../Preview";

const List = ({ items, style }) =>
  <View style={[style, styles.root]}>
    {items && items.map(article => <Preview key={article.id} post={article} />)}
  </View>;

const styles = StyleSheet.create({
  root: {}
});

export default List;
