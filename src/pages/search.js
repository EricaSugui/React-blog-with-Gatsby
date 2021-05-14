import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import Search from '../components/Search'

const SearchPage = () => (
    <Layout>
      <Seo title="Search"/>
      <Search />
    </Layout>
)

export default SearchPage