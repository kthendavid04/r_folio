/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */

import { createMedia } from '@artsy/fresnel'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  
  Container,
  Header,
  Segment,
} from 'semantic-ui-react'

const { MediaContextProvider, } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
})


const HomepageLayout = ({ mobile}) => (
  <Container text
  >
    <Header
      as='h1'
      content='KS Development'
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
        fontFamily: 'Mr Bedfort, cursive',
        color: '#eaeef0',     
      }}
    />
    <Header
      as='h2'
      content='Every day is a chance to be better.'
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
        fontFamily: 'Mr Bedfort, cursive',
        color: '#eaeef0',
      }}
    />
  </Container>
)
HomepageLayout.propTypes = {
    mobile: PropTypes.bool,
}

class MobileContainer extends Component {
  state = {}
  render() {
    
    const { children } = this.props

    return (
      <Segment
              inverted
              textAlign='center'
              style={{ minHeight: 350, padding: '1em 0em' }}
              vertical>
              <HomepageLayout mobile />
              {children}
        </Segment>
    )
  }
}


class DesktopContainer extends Component {
  state = {}
  render() {
    const { children } = this.props
    return (
  
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical>
            <HomepageLayout mobile />
            {children}
          </Segment>
         
          )
          }
  }
DesktopContainer.propTypes = {
  children: PropTypes.node,
}    


const ResponsiveContainer = ({ children }) => (
  /* Heads up!
   * For large applications it may not be best option to put all page into these containers at
   * they will be rendered twice for SSR.
   */
  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}



export default HomepageLayout