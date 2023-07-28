import React, { useCallback } from 'react'
import { LevelButton, LevelList, LevelsMenuContainer } from './LevelsMenu.styles'
import { LEVEL_LIST } from '../../constants/levels'
import { Title, TitleVariant } from '../Title'
import { useGameCenter } from '../../providers/GameCenter'
import { GameCenterActionType } from '../../providers/GameCenter/GameCenter.types'
import { useUser } from '../../providers/UserProvider'

export const LevelsMenu: React.FC = () => {
  const { dispatch } = useGameCenter()
  const {
    state: { completedLevels },
  } = useUser()

  const onStartNewGame = useCallback((levelId: string) => {
    dispatch({ type: GameCenterActionType.startNewGame, levelId })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <LevelsMenuContainer>
      <Title text="Choose level ..." variant={TitleVariant.info} />
      <LevelList>
        {LEVEL_LIST.map(({ id, name, previousLevelId }) => (
          <LevelButton
            key={id}
            isCompleted={Boolean(completedLevels[id])}
            disabled={!!previousLevelId && !completedLevels[previousLevelId]}
            onClick={() => onStartNewGame(id)}
          >
            {name}
          </LevelButton>
        ))}
      </LevelList>
    </LevelsMenuContainer>
  )
}
