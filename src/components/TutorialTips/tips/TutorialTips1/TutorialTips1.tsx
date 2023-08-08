import {
  PiHandSwipeRightDuotone,
  PiArrowUpBold,
  PiArrowRightBold,
  PiArrowDownBold,
  PiArrowLeftBold,
} from 'react-icons/pi'

import {
  ControllersTipsContainer,
  KeyboardArrowsContainer,
  SwipeIconContainer,
  TutorialContainer,
} from './TutorialTips1.styles'

export const TutorialTips1: React.FC = () => {
  return (
    <TutorialContainer>
      <div>welcome to the ...</div>
      <div>Puzzle Slime</div>
      <ControllersTipsContainer>
        <KeyboardArrowsContainer>
          <div>
            <PiArrowUpBold />
          </div>
          <div>
            <PiArrowLeftBold />
          </div>
          <div>
            <PiArrowDownBold />
          </div>
          <div>
            <PiArrowRightBold />
          </div>
        </KeyboardArrowsContainer>
        <div>OR</div>
        <SwipeIconContainer>
          <PiHandSwipeRightDuotone size={50} />
        </SwipeIconContainer>
      </ControllersTipsContainer>
      <div>
        <span>use the arrow buttons</span> on your keyboard <span>or swipe on your screen</span> to
        move the Slime to the tile with a round hole
      </div>
    </TutorialContainer>
  )
}
