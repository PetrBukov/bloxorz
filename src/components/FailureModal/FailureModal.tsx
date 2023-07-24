import React, { useCallback } from 'react'

import { Button } from '../Button'
import { FailureModalContent, FailureModalText, FailureModalActions } from './FailureModal.styles'
import { useGameCenter } from '../../providers/GameCenter'
import { GameStatus } from '../../types/game'
import { GameCenterActionType } from '../../providers/GameCenter/GameCenter.types'
import { Modal } from '../Modal/Modal'
import { TitleVariant } from '../Title'

export const FailureModal: React.FC = () => {
  const { state, dispatch } = useGameCenter()

  const onReplayGame = useCallback(() => {
    if (state.currentGame) {
      dispatch({ type: GameCenterActionType.startNewGame, levelName: state.currentGame.levelName })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state])

  const onCancelGame = useCallback(() => {
    if (state.currentGame) {
      dispatch({ type: GameCenterActionType.cancelCurrentGame })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state])

  if (!state.currentGame || state.currentGame.status !== GameStatus.failure) {
    return null
  }

  return (
    <Modal titleText="Try Again!" titleVariant={TitleVariant.error}>
      <FailureModalContent>
        <FailureModalText>
          We're sure it's just an absolute accident. Press the button "Replay" soon and show us what
          you are truly capable of. We believe in you!
        </FailureModalText>
        <FailureModalActions>
          <Button variant="outlined" onClick={onReplayGame}>
            Replay
          </Button>
          <Button variant="outlined" onClick={onCancelGame}>
            Menu
          </Button>
        </FailureModalActions>
      </FailureModalContent>
    </Modal>
  )
}
