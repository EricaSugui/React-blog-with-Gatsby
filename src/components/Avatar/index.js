import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from './styled'

const Avatar = () => {
    const { avatarImage } = useStaticQuery(
        graphql`
            query {
                avatarImage: file(relativePath: { eq: "profile-photo.jpeg" }) {
                    childImageSharp {
                        fixed(width: 120, height: 120) {
                            ...GatsbyImageSharpFixed_tracedSVG
                        }
                    }
                }
            }
        `
    )
    return <S.AvatarWrapper fixed={avatarImage.childImageSharp.fixed} />
}

export default Avatar