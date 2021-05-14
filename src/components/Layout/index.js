import * as React from 'react'
import propTypes from 'prop-types'
import Sidebar from '../Sidebar'
import MenuBar from '../MenuBar'

import * as S from './styled'
import GlobalStyles from '../../styles/global'

const Layout = ({ children }) => {

  return (
  
    <S.LayoutWrapper>
      <GlobalStyles />
      <Sidebar />
        <S.LayoutMain>{children}</S.LayoutMain>
        <MenuBar />
     </S.LayoutWrapper> 
     
  )
}

Layout.propTypes = {
  children: propTypes.node.isRequired,
}

export default Layout
