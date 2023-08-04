import { TutorialTipsContainer } from './TutorialTips.styles'
import { TutorialTipsProps } from './TutorialTips.types'
import { SageTips1, TutorialTips1 } from './tips'

export const TutorialTips: React.FC<TutorialTipsProps> = ({ levelId }) => {
  return (
    <TutorialTipsContainer>
      {levelId === 'tutorial-1' && <TutorialTips1 />}
      {levelId === 'stage-1' && <SageTips1 />}
    </TutorialTipsContainer>
  )
}
