// @flow

import React from 'react'
import Helmet from 'react-helmet'

import HelloButton from '../../containers/hello-button'
import Message from '../../containers/message'

const title = 'Hello Page'

const HelloPage = () => (
  <div>
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: 'A page to say hello' },
        { property: 'og:title', content: title },
      ]}
    />
    <h1>{title}</h1>
    <Message />
    <HelloButton />
  </div>
)

export default HelloPage
