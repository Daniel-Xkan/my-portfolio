import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import { mePics } from '../../constants/constants';

const Hero = (props) => (
  <section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, Welcome To <Img src={mePics.image }/> <br />
        My Personal Portfolio
      </SectionTitle> 
      <SectionText>
        My Name is Xuechen (Daniel) Kan, I am currently UC San Diego undergrade under computer science major. An aspiring Web Developer that uses tools such as React JS and Next JS.

      </SectionText>
      <Button onClick ={()=> location.href = "#footer"}>Contact Me</Button>
    </LeftSection>
  </section>
);

export default Hero;