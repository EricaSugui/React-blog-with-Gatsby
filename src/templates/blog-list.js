import * as React from 'react' 
import { graphql } from 'gatsby'

import Layout from "../components/Layout"
import Seo from "../components/seo"
import PostItem from '../components/PostItem'
import Pagination from '../components/Pagination'

import * as S from '../components/ListWrapper/styled'

const BlogList = props => {
    const postList = props.data.allMarkdownRemark.edges
    const siteMeta = props.data.site.siteMetadata

    const { currentPage, numPages } = props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? '/' : `/page/${currentPage -1}`
    const nextPage = `/page/${currentPage + 1}`

    return (
        <Layout>
            <Seo title={siteMeta.title} 
            description={siteMeta.description} 
            author={siteMeta.author} />
            <S.ListWrapper>
                {postList.map(({
                    node: {
                    frontmatter: {
                        background, category, date, description, title 
                    },
                    timeToRead,
                    fields: {
                        slug
                    }
                },
                }) => (
                    <PostItem
                    slug={slug}
                    background={background}
                    category={category}
                    date={date}
                    timeToRead={timeToRead}
                    title={title}
                    description={description}
                    />
                ))}
            </S.ListWrapper>
            <Pagination 
                    isFirst={isFirst} 
                    isLast={isLast} 
                    currentPage={currentPage} 
                    numPages={numPages} 
                    prevPage={prevPage} 
                    nextPage={nextPage} 
            />
    </Layout>
    )
    
}


    export const query = graphql`
        query PostList($skip: Int!, $limit: Int!) {
            site { 
                siteMetadata { 
                    title 
                    description 
                    author
                    position
                } 
            } 
            allMarkdownRemark(
                sort: {fields: frontmatter___date, order: DESC}
                limit: $limit
                skip: $skip
            ){
            edges {
                node {
                fields {
                    slug
                }
                frontmatter {
                    background
                    category
                    date(locale: "pt-br", formatString: "DD [de] MMM [de] YYYY")
                    description
                    title
                }
                timeToRead
                }
            }
            }
        }
      
    `

export default BlogList