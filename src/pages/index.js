import React from 'react'
import { Link } from 'gatsby'

const Index = (props) => {
  return (
    <>
      <h1>Collection Types</h1>

      <ul>
        {['posts', 'faq', 'kitchenSink',].map((item, index) => {
          return (<li key={index}><Link to={`/${item}`}>{item}</Link></li>)
        })}
      </ul>
    </>
  )
}

export default Index
