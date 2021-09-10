import Navbar from '../Navbar/Navbar';
import {
  HeroContainer,
  HeroContent,
  HeroContentText,
  HeroTitle,
  HeroTitleText,
  HeroSubTitle,
  HeroText,
} from './Styled';

export const Hero: React.FC = () => {
  return (
    <HeroContainer>
      <Navbar />
      <HeroContent>
        <HeroContentText>
          <HeroTitle>
            <HeroTitleText>Healthy</HeroTitleText>
            <HeroTitleText>Meals All Day</HeroTitleText>
          </HeroTitle>
          <HeroSubTitle>For a longer Life</HeroSubTitle>
          <HeroText>
            Get a fresh and tasty recepies that are well balanced and will
            improve your wellness, plus add nutrients to your body.
          </HeroText>
        </HeroContentText>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
