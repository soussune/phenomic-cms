import React, { Component } from "react";
import { StyleSheet, View } from "react-primitives";
import ga from "react-google-analytics";

const GOOGLE_ANALYTICS_UA = "UA-101757562-1";
const GoogleAnalyticsInitializer = ga.Initializer;

const isProduction = process.env.NODE_ENV === "production";
const isClient = typeof window !== "undefined";

export default class GoogleAnalyticsTracker extends Component {
  componentWillMount() {
    if (isClient) {
      if (isProduction) {
        ga("create", GOOGLE_ANALYTICS_UA, "auto");
      } else {
        console.info("ga.create", GOOGLE_ANALYTICS_UA);
      }
      this.logPageview();
    }
  }

  componentWillReceiveProps(next) {
    if (
      next.location &&
      next.location.pathname !== this.props.location.pathname
    ) {
      this.logPageview();
    }
  }

  logPageview() {
    if (isClient) {
      if (isProduction) {
        ga("set", "page", window.location.pathname);
        ga("send", "pageview");
      } else {
        console.info("New pageview", window.location.href);
      }
    }
  }

  render() {
    return (
      <View style={styles.root}>
        {this.props.children}
        <GoogleAnalyticsInitializer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  }
});
