import React from "react";
import { StyleSheet } from "react-primitives";

import Page, { Banner, Footer, Main } from "../../internals/Page";

const NotFound = ({ error }) => {
  const status = (error && error.status) || 404;
  const errorText = error && status !== 404
    ? error.statusText
    : "page not found";

  return (
    <Page style={styles.root}>
      <Banner title={errorText} style={styles.heading} />
      <Main />
      <Footer />
    </Page>
  );
};

const styles = StyleSheet.create({
  root: {},
  heading: {}
});

export default NotFound;
