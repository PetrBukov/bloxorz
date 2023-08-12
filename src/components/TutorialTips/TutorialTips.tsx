import { TutorialTipsContainer } from './TutorialTips.styles'
import { TutorialTipsProps } from './TutorialTips.types'
import { TutorialTips1 } from './tips'

export const TutorialTips: React.FC<TutorialTipsProps> = ({ levelId }) => {
  return <TutorialTipsContainer>{levelId === 'level-1' && <TutorialTips1 />}</TutorialTipsContainer>
}
