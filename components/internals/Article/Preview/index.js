import React from "react";
import { StyleSheet, View } from "react-primitives";
import styled from "styled-components/primitives";

import { LineDivider } from "../../Divider";
import Row from "../../Row";
import Link from "../../Link";
import { Headline, Title } from "../../Typography";
import { DateComponent } from "../../DateTime";

const Text = styled.Text`
  margin-bottom: 1rem;
  line-height: 1.25rem;
  font-size: 1rem;
  color: #5a5a5a;
`;

const Image = styled.Image`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  margin-right: 1rem;
`;

const Preview = ({ post, style }) =>
  <View style={style}>
    <LineDivider />
    <Link to={`/posts/${post.id}`} style={styles.link}>
      <Row>
        <Image
          source={{ uri: "https://via.placeholder.com/275x200" }}
          width={275}
          height={200}
        />

        <View>
          <Title>
            {post.title}
          </Title>
          <Headline numberOfLines={2}>
            {post.headline}
          </Headline>
          <Text>
            <DateComponent value={new Date(post.date)} />
          </Text>
        </View>
      </Row>
    </Link>
    <LineDivider />
  </View>;

const styles = StyleSheet.create({
  link: {
    textDecorationLine: "none",
    color: "inherit"
  }
});

export default Preview;
