import * as React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import Avatar from '../Avatar'
import getThemeColor from '../../utils/getThemeColor'
import * as S from './styled'

const Profile = () => {
    const {
        site: {
            siteMetadata: { title, position, description, author },
        },
    } = useStaticQuery(graphql`
        query MySiteMetadata { 
            site { 
                siteMetadata { 
                    title 
                    description 
                    author
                    position
                } 
            } 
        } 
    `)

    return (
        <S.ProfileWrapper>
            <S.ProfileLink
                cover 
                direction="left"
                bg={getThemeColor()}
                duration={0.6}
                to="/">
                <Avatar />
                <S.ProfileTitle>
                    {title}
                    <S.ProfilePosition>{position}</S.ProfilePosition>
                </S.ProfileTitle>  
            </S.ProfileLink>
            <S.ProfileDescription>{description}</S.ProfileDescription>
            <S.ProfileAuthor>{author}</S.ProfileAuthor>
        </S.ProfileWrapper>
    )
}

export default Profile