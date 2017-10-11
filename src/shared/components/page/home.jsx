// @flow

import React from 'react'
import Helmet from 'react-helmet'
import injectSheet from 'react-jss'

import { APP_NAME } from '../../config'

const styles = {
  hoverMe: {
    '&:hover': {
      color: 'red',
    },
  },
  '@media (max-width: 800px)': {
    resizeMe: {
      color: 'teal',
    },
  },
  specialButton: {
    backgroundColor: 'limegreen',
    border: '1px solid black',
    borderRadius: '5px',
    outline: 'none',
    '&:hover': {
      borderColor: 'orange',
    },
    '&:active': {
      backgroundColor: 'green',
    },
  },
}

const HomePage = ({ classes }: { classes: Object }) => (
  <div>
    <Helmet meta={[
      { name: 'description', content: 'Hello App is an app to say hello' },
      { property: 'og:title', content: APP_NAME },
    ]}
    />
    <h1>{APP_NAME}</h1>
    <p className={classes.hoverMe}>Hover me.</p>
    <p className={classes.resizeMe}>Resize the window.</p>
    <button className={classes.specialButton}>Special</button>
  </div>
)

export default injectSheet(styles)(HomePage)
