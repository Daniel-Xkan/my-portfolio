import React from 'react';
import { DiFirebase, DiJava, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <section id = "lang">
    <SectionDivider />
    <br />
    <SectionTitle> Languages</SectionTitle>
    <SectionText>
      These are the Languages I've learned for my coding career... when I started with python in middle school, from front to back end. 
    </SectionText>
    <List>
      <ListItem>
        <DiReact size = "3rem"/>
        <ListContainer>
          <ListTitle>
            Front end
          </ListTitle>
          <ListParagraph>
            React.JS, HTML, CSS, JavaScript...
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiFirebase size = "3rem"/>
        <ListContainer>
          <ListTitle>
            Back end
          </ListTitle>
          <ListParagraph>
            Experience with Databases.
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiJava size = "3rem"/>
        <ListContainer>
          <ListTitle>
            Just coding
          </ListTitle>
          <ListParagraph>
            Java, C, C++, Python, ARM assembly... 
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </section>
);

export default Technologies;
