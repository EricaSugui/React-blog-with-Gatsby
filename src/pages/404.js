import * as React from "react"

import NotFound from "../components/NotFound"
import Seo from "../components/seo"
import * as S from "../components/Post/styled"
import getThemeColor from '../utils/getThemeColor'

const NotFoundPage = () => (
  
    <NotFound>
      <S.MainContent>
        <Seo title="404: Not found" />
          <S.PostTitle>404: Not Found</S.PostTitle>
          <p>Ops! Não tem nada aqui.</p>
          <p>Você pode <S.PostLink cover direction="right" bg={getThemeColor()} duration={0.6} to="/">
               voltar para o ínicio 
            </S.PostLink> ou <S.PostLink cover direction="right" bg={getThemeColor()} duration={0.6} to="/search">
               pesquisar o que estava procurando.
            </S.PostLink> </p>

        </S.MainContent>
    </NotFound>
    
    
  
)

export default NotFoundPage
