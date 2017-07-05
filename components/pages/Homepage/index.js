import React from "react";
import { StyleSheet } from "react-primitives";

import Page, { Banner, Footer, Main } from "../../internals/Page";

const Homepage = () =>
  <Page style={styles.root}>
    <Banner title="I'm a web designer / developer..." />
    <Main>
      {"<Container />"}
    </Main>
    <Footer />
  </Page>;

const styles = StyleSheet.create({
  root: {}
});

export default Homepage;
