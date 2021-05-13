import * as React from "react"
import { useStaticQuery, graphql } from 'gatsby'

import { Link } from 'gatsby'

import Layout from "../components/Layout"
import Seo from "../components/seo"
import PostItem from '../components/PostItem'

const IndexPage = () => {

  const { allMarkdownRemark } = useStaticQuery(graphql`
    query PostList {
      allMarkdownRemark {
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
  `)

  const postList = allMarkdownRemark.edges

  return (
    <Layout>
      <Seo title="Home" />
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
    </Layout>
  )
}



export default IndexPage
