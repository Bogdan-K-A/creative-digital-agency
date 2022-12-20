//COMPONENTS
import { Container } from '../Container/Container';
import { Section } from '../ui-component/Section';
import { Flex } from '../ui-component/Flex';
import { Text } from '../ui-component/Text';
import { Title } from '../ui-component/Title';

//STYLEDCOMPONENTS
import { TitleBox } from '../Portfolio/Portfolio.styled';
import { ContentWrapper, ImgBox, NameBox } from './About.styled';

//IMAGES
import person01 from '../../assets/about/person01.png';
import person02 from '../../assets/about/person02.png';

const About = () => {
  return (
    <Section id="about" padding="100px 0">
      <Container>
        <TitleBox>
          <Title margin="0 0 40px">ABOUT US.</Title>
          <Text laptop margin="0 0 60px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt<br></br>ut labore et dolore magna aliqua.
          </Text>
        </TitleBox>
        <Flex laptop tablet justify="center">
          <ImgBox>
            <img src={person01} alt="" />
            <NameBox>
              <p>Luke Skywalker</p>
              <p>Web designer</p>
            </NameBox>
          </ImgBox>
          <ImgBox>
            <img src={person02} alt="" />
            <NameBox>
              <p>Han Solo</p>
              <p>Graphic Designer</p>
            </NameBox>
          </ImgBox>
          <ContentWrapper>
            <h4>Little About Us</h4>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod temp orincididunt ut labore et dolore magna aliqua.
            </Text>
            <p>Read More</p>
          </ContentWrapper>
        </Flex>
      </Container>
    </Section>
  );
};

export default About;
