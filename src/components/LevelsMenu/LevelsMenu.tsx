import React, { useCallback } from 'react'
import { LevelButton, LevelList, LevelsMenuContainer } from './LevelsMenu.styles'
import { LEVEL_LIST } from '../../constants/levels'
import { Title, TitleVariant } from '../Title'
import { useGameCenter } from '../../providers/GameCenter'
import { GameCenterActionType } from '../../providers/GameCenter/GameCenter.types'

export const LevelsMenu: React.FC = () => {
  const { dispatch } = useGameCenter()

  const onStartNewGame = useCallback((levelName: string) => {
    dispatch({ type: GameCenterActionType.startNewGame, levelName })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <LevelsMenuContainer>
      <Title text="Choose level ..." variant={TitleVariant.info} />
      <LevelList>
        {LEVEL_LIST.map(({ name }) => (
          <LevelButton key={name} onClick={() => onStartNewGame(name)}>
            {name}
          </LevelButton>
        ))}
      </LevelList>
    </LevelsMenuContainer>
  )
}
