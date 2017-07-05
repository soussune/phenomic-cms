import React from "react";
import { createContainer, query } from "@phenomic/preset-react-app/lib/client";

import ActivityIndicator from "../../internals/ActivityIndicator";
import Page, { Banner, Container, Footer, Main } from "../../internals/Page";
import { List as ArticlesList } from "../../internals/Article";
import { Message as FilterMessage } from "../../internals/Filter";
import Pagination from "../../widgets/Pagination";

const PostsList = ({ isLoading, posts, ...rest }) =>
  <Page {...rest}>
    <Banner title="soussune" />
    <Main>
      {isLoading && <ActivityIndicator />}
      {!isLoading &&
        posts &&
        posts.node &&
        posts.node.list &&
        <Container>
          {rest.params &&
            rest.params.tag &&
            <FilterMessage
              path="/posts"
              paramName="tag"
              items={rest.params.tag}
            />}
          <ArticlesList items={posts.node.list} />
          <Pagination path="posts" items={posts} />
        </Container>}
    </Main>
    <Footer />
  </Page>;

export default createContainer(PostsList, props => ({
  posts: query({
    collection: "posts",
    limit: 9,
    sortBy: "date",
    ...(props.params.after ? { after: props.params.after } : null),
    ...(props.params.tag ? { by: "tags", value: props.params.tag } : {})
  })
}));
