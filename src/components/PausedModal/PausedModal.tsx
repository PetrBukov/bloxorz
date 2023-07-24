import React, { useCallback } from 'react'

import { Button } from '../Button'
import { PausedModalContent, PausedModalText, PausedModalActions } from './PausedModal.styles'
import { useGameCenter } from '../../providers/GameCenter'
import { GameStatus } from '../../types/game'
import { GameCenterActionType } from '../../providers/GameCenter/GameCenter.types'
import { Modal } from '../Modal/Modal'
import { TitleVariant } from '../Title'

export const PausedModal: React.FC = () => {
  const { state, dispatch } = useGameCenter()

  const onRestartGame = useCallback(() => {
    if (state.currentGame) {
      dispatch({ type: GameCenterActionType.startNewGame, levelName: state.currentGame.levelName })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state])

  const onContinueGame = useCallback(() => {
    if (state.currentGame) {
      dispatch({ type: GameCenterActionType.continueCurrentGame })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state])

  const onCancelGame = useCallback(() => {
    if (state.currentGame) {
      dispatch({ type: GameCenterActionType.cancelCurrentGame })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state])

  if (!state.currentGame || state.currentGame.status !== GameStatus.paused) {
    return null
  }

  return (
    <Modal titleText="Paused" titleVariant={TitleVariant.info}>
      <PausedModalContent>
        <PausedModalText>
          You know, when I'm in doubt I find retracing my steps to be a wise place to begin.
        </PausedModalText>
        <PausedModalActions>
          <Button onClick={onContinueGame}>Resume</Button>
          <Button variant="outlined" onClick={onRestartGame}>
            Restart
          </Button>
          <Button variant="outlined" onClick={onCancelGame}>
            Menu
          </Button>
        </PausedModalActions>
      </PausedModalContent>
    </Modal>
  )
}
