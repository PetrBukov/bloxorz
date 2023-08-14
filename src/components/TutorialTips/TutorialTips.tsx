import { GameLevelType } from '../../types'
import { TutorialTipsContainer } from './TutorialTips.styles'
import { TutorialTipsProps } from './TutorialTips.types'
import { TutorialTips1 } from './tips'

export const TutorialTips: React.FC<TutorialTipsProps> = ({ levelSequenceNumber, levelType }) => {
  const showTutorial1 = levelType === GameLevelType.regular && levelSequenceNumber === 1

  return <TutorialTipsContainer>{showTutorial1 && <TutorialTips1 />}</TutorialTipsContainer>
}
