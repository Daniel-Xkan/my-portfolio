import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, Welcome To <br />
        My Personal Portfolio
      </SectionTitle> 
      <SectionText>
        In here, I will walk through all the expeirence I have and projects and stuff I've done.
      </SectionText>
      <Button onClick ={()=> window.location = "#contactinfo"}>Contact Me</Button>
    </LeftSection>
  </section>
);

export default Hero;