import styled from "styled-components"
import media from 'styled-media-query'
import { GatsbyImage as Img } from "gatsby-plugin-image"

export const AvatarWrapper = styled(Img)`
    border-radius: 50%;
    height: 3.75rem;
    margin: auto;
    width: 3.75rem;

    ${media.lessThan("large")`
        height: 3rem;
        width: 3rem;
    `}
`