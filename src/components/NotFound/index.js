import * as React from 'react'
import PropTypes from 'prop-types'

import { TransitionPortal } from 'gatsby-plugin-transition-link'
import MenuBar from '../MenuBar'

import * as S from './styled'
import GlobalStyles from '../../styles/global'

const NotFound = ({ children }) => {

  return (
  
    <S.NotFoundWrapper>
      <GlobalStyles />
      
        <S.NotFoundMain>{children}</S.NotFoundMain>
        
        <TransitionPortal level="top">
          <MenuBar />
        </TransitionPortal>
        
     </S.NotFoundWrapper> 
     
  )
}

NotFound.propTypes = {
  children: PropTypes.node.isRequired,
}

export default NotFound
