import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const projectsTest = [{
  title: 'project 1 ',
  description: 'This is a loooooooooooooooooooooooooooooooooooog description about this project'
},{
  title: 'project 2 ',
  description: 'This is a loooooooooooooooooooooooooooooooooooog description about this project'
},{
  title: 'project 3 ',
  description: 'This is a loooooooooooooooooooooooooooooooooooog description about this project'
}
]
const Projects = () => (
  <section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main> Projects </SectionTitle>
    <GridContainer>
      {projects.map((project) => (
        <BlogCard key={project.id}>
          <Img src={project.image }/>
          <TitleContent>
            <HeaderThree title>{project.title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{project.description}</CardInfo>
          <div>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {project.tags.map((tag,i)=>(
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={project.code}> Github Codes </ExternalLinks>
            <ExternalLinks href={project.demo}> Website Demo </ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </section>
);

export default Projects;