// @flow

import React from 'react'
import Helmet from 'react-helmet'
import injectSheet from 'react-jss'

import CardsView from '../../containers/cards-view'
import CardSearch from '../../containers/card-search'
import styles from './editor-style'

const title = 'Editor Page'

const EditorPage = ({ classes }: { classes: Object }) => (
  <div className={classes.editor}>
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: 'Deck editor page' },
        { property: 'og:title', content: title },
      ]}
    />
    <CardSearch />
    <CardsView />

  </div>
)

export default injectSheet(styles)(EditorPage)
