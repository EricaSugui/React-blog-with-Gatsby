import * as React from "react"
import { Link } from 'gatsby'

import Layout from "../components/Layout"
import Seo from "../components/seo"
import PostItem from '../components/PostItem'

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <PostItem 
      slug="/about/"
      background="red"
      category="Misc"
      date="12 de Maio de 2021"
      timeToRead="4"
      title="Namastê e EOF"
      description="Para quem ainda não sabe (nota: ninguém sabe), eu não sou mais prof de yoga. Namastê and EOF."
    />
    
    <h1>Home</h1>

    
    
    
  </Layout>
)

export default IndexPage
