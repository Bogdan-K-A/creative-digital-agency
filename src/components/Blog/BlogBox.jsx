import React from 'react';

import { Text } from '../ui-component/Text';

import {
  BlogContentWrapper,
  BlogHoverInfo,
  ImgWrapper,
  StyledBlogBox,
} from './Blog.styled';

export const BlogBox = ({ image, title, description, date }) => {
  return (
    <StyledBlogBox>
      <ImgWrapper>
        <img src={image} alt="blog story" />
        <BlogHoverInfo>
          <p>READ MORE</p>
        </BlogHoverInfo>
      </ImgWrapper>
      <BlogContentWrapper>
        <p>{title}</p>
        <Text>{description}</Text>
        <p>{date}</p>
      </BlogContentWrapper>
    </StyledBlogBox>
  );
};
