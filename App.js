import React from "react";
import { Router, Route, browserHistory } from "react-router";
import { createApp, renderApp } from "@phenomic/preset-react-app/lib/client";

import "./styles/global.js";

import Html from "./components/internals/Document/Html";
import { Blog, Homepage, NotFound, Post } from "./components/pages";

const routes = () =>
  <Router history={browserHistory}>
    <Route path="/" component={Homepage} />
    <Route path="/posts" component={Blog} collection="posts" paginated />
    <Route
      path="/posts/tag/:tag"
      component={Blog}
      collection="posts"
      paginated
    />
    <Route
      path="/posts/after/:after"
      component={Blog}
      collection="posts"
      paginated
    />
    <Route path="/posts/*" component={Post} collection="posts" />
    <Route path="*" component={NotFound} />
  </Router>;

export default createApp(routes, Html);

if (module.hot) {
  module.hot.accept(() => renderApp(routes));
}

// kill previous website ServiceWorker
if (typeof navigator !== "undefined" && "serviceWorker" in navigator) {
  navigator.serviceWorker.getRegistrations().then(registrations => {
    for (const registration of registrations) registration.unregister();
  });
}
