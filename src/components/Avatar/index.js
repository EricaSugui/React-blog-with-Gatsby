import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from './styled'

const Avatar = () => {
    const { avatarImage } = useStaticQuery(
        graphql`
            query {
                avatarImage: file(relativePath: { eq: "profile-photo.jpeg" }) {
                    childImageSharp {
                        gatsbyImageData(
                            width: 120
                            placeholder: TRACED_SVG
                            layout: CONSTRAINED
                          )
                    }
                }
            }
        `
    )
    return <S.AvatarWrapper image={avatarImage.childImageSharp.gatsbyImageData} />
}

export default Avatar