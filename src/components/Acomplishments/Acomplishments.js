import React from 'react';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

// const data = [
//   { number: 20, text: 'Open Source Projects'},
//   { number: 1000, text: 'Students', },
//   { number: 1900, text: 'Github Followers', },
//   { number: 5000, text: 'Github Stars', }
// ];

const Acomplishments = () => (
  <Section id = "about">
    {/* <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/> */}
    <br />
    <br />
    <br />
    {/* <SectionDivider /> */}
    <SectionTitle>
      Accomplishments
    </SectionTitle>
      <SectionText>
        ...Just a newbie, come back later for more accomplishments
      </SectionText>
  </Section>
);

export default Acomplishments;
