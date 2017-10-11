// @flow

import React from 'react'
import Helmet from 'react-helmet'

import HelloAsyncButton from '../../containers/hello-async-button'
import MessageAsync from '../../containers/message-async'

const title = 'Async Hello Page'

const HelloAsyncPage = () => (
  <div>
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: 'A page to say hello synchronously' },
        { property: 'og:title', content: title },
      ]}
    />
    <h1>{title}</h1>
    <MessageAsync />
    <HelloAsyncButton />
  </div>
)

export default HelloAsyncPage
