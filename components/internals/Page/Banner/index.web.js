import React from "react";
import { StyleSheet, View } from "react-primitives";

import { Title as DocumentTitle } from "../../Document";
import { Gradient as BackgroundGradient } from "../../Background";
import { Heading } from "../../Typography";
import Section from "../Section";
import Container from "../Container";
import Masterbar from "../Masterbar";

const Banner = ({ headTitle, title, style, children }) =>
  <Section accessibilityRole="banner">
    <BackgroundGradient style={style} start="#eee" end="#ccc">
      <DocumentTitle text={headTitle || title} />
      <Masterbar />
      <Container style={styles.container}>
        <Heading level="1" style={styles.heading}>
          {title}
        </Heading>
        {children &&
          <View>
            {children}
          </View>}
      </Container>
    </BackgroundGradient>
  </Section>;

const styles = StyleSheet.create({
  container: {
    alignItems: "center"
  },
  heading: {
    paddingTop: 40,
    paddingBottom: 60
  }
});

export default Banner;
