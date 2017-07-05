import React from "react";
import { createContainer, query } from "@phenomic/preset-react-app/lib/client";
import { StyleSheet } from "react-primitives";

import ActivityIndicator from "../../internals/ActivityIndicator";
import Page, { Banner, Container, Footer, Main } from "../../internals/Page";
import Article, { MetaData } from "../../internals/Article";
import MarkdownGenerated from "../../internals/MarkdownGenerated";
import TagsList from "../../lists/TagsList";
import NotFound from "../NotFound";

const Post = ({ hasError, isLoading, post, ...rest }) => {
  if (hasError) return <NotFound error={post.error} />;

  return (
    <Page {...rest} style={styles.root}>
      <Banner
        title={
          (!isLoading && post && post.node && post.node.title) || "Loading..."
        }
      />
      <Main>
        <Container>
          {isLoading && <ActivityIndicator />}
          {!isLoading &&
            post &&
            post.node &&
            <Article>
              <MetaData {...post.node} />
              {post.node.body && <MarkdownGenerated body={post.node.body} />}
              {post.node.tags &&
                <TagsList path="/posts" items={post.node.tags} />}
            </Article>}
        </Container>
      </Main>
      <Footer />
    </Page>
  );
};

const styles = StyleSheet.create({
  root: {}
});

export default createContainer(Post, ({ params: { splat }, ...rest }) => ({
  post: query({ collection: "posts", id: splat, ...rest })
}));
