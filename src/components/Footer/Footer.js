
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <section id = "footer">
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:858-568-0019">858-568-0019</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Work/School Email</LinkTitle>
          <LinkItem href="mailto:xkan@ucsd.edu">
            xkan@ucsd.edu
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Private Email</LinkTitle>
          <LinkItem href="mailto:xuechenkan@gmail.com">
            xuechenkan@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Future "Brogrammer" -- yes I work out. </Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/Daniel-Xkan">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/xuechen-kan">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/xuechenkan/">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
    </section>
  );
};

export default Footer;