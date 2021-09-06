import { OutlineButton, Container } from '@mfe/shared/dist/bundle';
import { images } from '../../config/images';
import {
  MealsContainer,
  MealsWrapper,
  MealsImage,
  Img,
  MealsContent,
  MealsContentTitle,
  MealsContentText,
  MealsContentItems,
  MealsContentList,
  MealsContentDetails,
  MealsContentIcon,
  MealsContentCategory,
  MealsContentBtn,
} from './Styled';

export const RecipeDetails: React.FC = () => {
  return (
    <Container>
      <MealsContainer>
        <MealsWrapper>
          <MealsImage>
            <Img
              src={images.bigChicken.default}
              alt="Personalized Chicken meal"
            />
          </MealsImage>
          <MealsContent>
            <MealsContentTitle>Personalize your Meals</MealsContentTitle>
            <MealsContentText>
              Choose your weekly or daily meal plan from our meals to kick start
              your month. All meanu are fresh and set for you in portion to make
              it easier to cook immediately.
            </MealsContentText>
            <MealsContentItems>
              <MealsContentList>
                <MealsContentDetails>
                  <MealsContentIcon />
                  <MealsContentCategory> Vegetarian</MealsContentCategory>
                </MealsContentDetails>
                <MealsContentDetails>
                  <MealsContentIcon />
                  <MealsContentCategory>Gluten-Free</MealsContentCategory>
                </MealsContentDetails>
                <MealsContentDetails>
                  <MealsContentIcon />
                  <MealsContentCategory>Card-conscious</MealsContentCategory>
                </MealsContentDetails>
                <MealsContentDetails>
                  <MealsContentIcon />
                  <MealsContentCategory>
                    Calorie -conscious
                  </MealsContentCategory>
                </MealsContentDetails>
              </MealsContentList>
              <MealsContentList>
                <MealsContentDetails>
                  <MealsContentIcon />
                  <MealsContentCategory>15 mins pre-kit</MealsContentCategory>
                </MealsContentDetails>
                <MealsContentDetails>
                  <MealsContentIcon />
                  <MealsContentCategory>Featured Meals</MealsContentCategory>
                </MealsContentDetails>
                <MealsContentDetails>
                  <MealsContentIcon />
                  <MealsContentCategory>New recipes</MealsContentCategory>
                </MealsContentDetails>
                <MealsContentDetails>
                  <MealsContentIcon />
                  <MealsContentCategory>Low fat meals</MealsContentCategory>
                </MealsContentDetails>
              </MealsContentList>
            </MealsContentItems>
            <MealsContentBtn>
              <OutlineButton big bigFont bigRadius>
                Explore Our Meals
              </OutlineButton>
            </MealsContentBtn>
          </MealsContent>
        </MealsWrapper>
      </MealsContainer>
    </Container>
  );
};
