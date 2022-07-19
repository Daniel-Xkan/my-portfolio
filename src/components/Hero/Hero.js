import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, Img, ImgContainer } from './HeroStyles';
import { mePics } from '../../constants/constants';
// import { Img } from '../Projects/ProjectsStyles';

const Hero = (props) => (
  <section row nopadding>
    <LeftSection>
      
    {mePics.map((mePics) => (<Img src={mePics.image }/>))}
      <SectionTitle main center>
        Hi, Welcome To <br />
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