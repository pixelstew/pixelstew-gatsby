import Link from "gatsby-link";
import React from "react";
import styled from "styled-components";

import Tag from "./tag";

const Tags = props => {
  return (
    <ul className={props.className}>
      {props.list.map(tag => (
        <li key={tag}>
          <Tag tag={tag} />
        </li>
      ))}
    </ul>
  );
};

const TagList = styled(Tags)`
  list-style: none;
  padding-left: 0;
  display: flex;
`;

export default TagList;
