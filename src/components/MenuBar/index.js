import React, { useState, useEffect } from 'react'

import { Home } from '@styled-icons/boxicons-solid/Home'
import { SearchAlt2 as Search } from '@styled-icons/boxicons-regular/SearchAlt2'
import { UpArrowAlt as Arrow } from '@styled-icons/boxicons-regular/UpArrowAlt'
import { Bulb as Light } from '@styled-icons/boxicons-regular/Bulb'
import { Grid } from '@styled-icons/boxicons-solid/Grid'
import { ThList as List } from '@styled-icons/typicons/ThList'
import getThemeColor from '../../utils/getThemeColor'
import * as S from './styled'

const MenuBar = () => {
    const [theme, setTheme] = useState(null)
    const [display, setDisplay] = useState(null)

    const isDarkMode = theme === 'dark'
    const isListMode = display === 'list'
    // const isDown = arrow === "down"

    useEffect(() => {
        setTheme(window.__theme)
        setDisplay(window.__display)
        // window.__scrollTo(0, 0)
        window.__onThemeChange = () => setTheme(window.__theme)
        window.__onDisplayChange = () => setDisplay(window.__display)
    }, [])

    return (
    <S.MenuBarWrapper>
        <S.MenuBarGroup>
            <S.MenuBarLink cover direction="right" bg={getThemeColor()} duration={0.7} to="/" title="Voltar para a Home">
                <S.MenuBarItem><Home /></S.MenuBarItem>
            </S.MenuBarLink>
            <S.MenuBarLink cover direction="left" bg={getThemeColor()} duration={0.6} to="/search" title="Pesquisar">
                <S.MenuBarItem><Search /></S.MenuBarItem>
            </S.MenuBarLink>
        </S.MenuBarGroup>

        <S.MenuBarGroup>

            <S.MenuBarItem title="Mudar o tema" onClick={() => {
                window.__setPreferredTheme(isDarkMode ? 'light' : 'dark')
            }} className={theme}
            >
                <Light />
            </S.MenuBarItem>

            <S.MenuBarItem title="Mudar visualização" onClick={() => {
                window.__setPreferredDisplay(isListMode ? 'grid' : 'list')
            }} className="display"
            >
                {isListMode ? <Grid /> : <List />}
            </S.MenuBarItem>
            
            <S.MenuBarItem title="Ir para o topo" onClick={() => {
                window.scrollTo(0, 0)
            }}>
                <Arrow />
            </S.MenuBarItem>

        </S.MenuBarGroup>
    </S.MenuBarWrapper>
)}

export default MenuBar