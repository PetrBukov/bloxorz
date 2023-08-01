import { TutorialContainer } from './Tutorial1.styles'

export const Tutorial1: React.FC = () => {
  return (
    <TutorialContainer>
      <div>welcome to the ...</div>
      <div>Puzzle Slime</div>
      <div>
        the aim of this puzzle game is to <span>guide the Slime to the tile with a round hole</span>{' '}
        in it
      </div>
      <div>
        <span>use the arrow buttons</span> on your keyboard <span>or swipe on your screen</span> to
        move the slime into it's first hole
      </div>
    </TutorialContainer>
  )
}
