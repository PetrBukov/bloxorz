import { TutorialTipsContainer } from './TutorialTips.styles'
import { TutorialTipsProps } from './TutorialTips.types'
import { Tutorial1 } from './tutorials'

export const TutorialTips: React.FC<TutorialTipsProps> = ({ levelId }) => {
  return <TutorialTipsContainer>{levelId === 'tutorial-1' && <Tutorial1 />}</TutorialTipsContainer>
}
