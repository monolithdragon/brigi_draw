import React from 'react';

import Avatar from './Avatar';
import AvatarContainer from './AvatarContainer';
import HorizontalLine from './HorizontaLine';
import Paragraph from './Paragraph';
import TextContainer from './TextContainer';
import Title from './Title';
import Wrapper from './Wrapper';

interface SectionProps {
  id: string;
  image?: string;
  title: string;
  paragraph: string;
  backgroundColor?: string;
}

const Section = ({ id, image, title, paragraph, backgroundColor }: SectionProps) => {
  return (
    <Wrapper id={id}>
      <AvatarContainer>
        {image && <Avatar src={image} />}
      </AvatarContainer>
      <TextContainer backgroundColor={backgroundColor}>
        <Title>{title}</Title>
        <HorizontalLine />
        <Paragraph>{paragraph}</Paragraph>
      </TextContainer>
    </Wrapper>
  );
};

export default Section;
