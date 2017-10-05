import React from "react"
import GatsbyLink from "gatsby-link";
import styled from "styled-components";
import Link from "gatsby-link";

const Preview = (props) => {
  return (
    <div className={props.className}>
      <div className="flex-container">
        <div className="post-image">
          <Link to={props.post.frontmatter.path}>
            <picture className="intrinsic intrinsic--16x9">
              <source media="(min-width: 500px)" srcSet={props.post.frontmatter.image} />
              <img className="intrinsic-item" srcSet={props.post.frontmatter.image} alt="" />
            </picture>
          </Link>
        </div>
        <div className="post-title">
          <h2>
            <Link to={props.post.frontmatter.path}>{props.post.frontmatter.title}</Link>
          </h2>
          <h3>Written by Rob Gilbert on {props.post.frontmatter.date}</h3>
        </div>
      </div>
      <p>{props.post.excerpt}</p>
    </div>
  )
}

const PostPreview = styled(Preview) `
  margin-bottom: 3rem;
  .flex-container{
    display: flex;    
    margin-bottom: 1rem;
  }
  h2{
    margin: 0;
  }
  h3{
    margin-top: 0;
    font-size: 90%;
    font-weight: 300;
  }
  .post-image{
    flex-shrink: 0;
    flex-grow: 0;
    flex-basis: 100px;
    &:hover{
      opacity: 0.7;
    }
  }
  .post-title{
    flex-grow: 3;
    padding-left: 1rem;
    h2{
      line-height: 1;
    }
  }
  .intrinsic {
    
    display: block;
    

    position: relative;
    height: 0;
    width: 100%;
    padding-top: 100%; 
  
    background: #f0f0f0;
    
    &.intrinsic--square {
    padding-top: 100%;
    }
  
    &.intrinsic--4x3 {
        padding-top: 75%;
    }
  
    &.intrinsic--16x9 {
      padding-top: 56.25%;
    }
        
    .intrinsic-item {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }          
  }
`

export default PostPreview