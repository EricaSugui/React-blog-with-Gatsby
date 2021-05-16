import styled from 'styled-components'
import media from 'styled-media-query'

export const NotFoundWrapper = styled.section`
  display: flex;

  ${media.lessThan("large")`
    flex-direction: column;
  `}
`

export const NotFoundMain = styled.main`
  background: var(--background);
  min-height: 100vh;
  padding: 0 3.75rem 0 20rem;
  width: 100%;

  body#grid & {
    grid-template-areas: "posts" "pagination"; 
  }
  ${media.lessThan("large")`
    flex-direction: column;
    padding: 4rem 0 4rem 0;
    min-height: 100vh;
  `}

`