import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import * as S from "../components/Post/styled"

const NotFoundPage = () => (
  
    
    <S.MainContent>
      <Seo title="404: Not found" />
      <S.PostTitle>404: Not Found</S.PostTitle>
      <p>Ops! Não tem nada aqui.</p>
    </S.MainContent>
    
  
)

export default NotFoundPage
