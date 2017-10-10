import Link from "gatsby-link";
import React from "react";
import styled from "styled-components";

import Tag from "./tag";

const Tags = props => {
  return (
    <ul className={props.className}>
      <h3>Tags</h3>
      {props.list.map(tag => (
        <li key={tag}>
          <Tag tag={tag} />
        </li>
      ))}
    </ul>
  );
};

const TagList = styled(Tags) `
  list-style: none;
  padding-left: 0;
  display: flex;
  h3{
    margin: 0 1rem 0 0;
  }
`;

export default TagList;
