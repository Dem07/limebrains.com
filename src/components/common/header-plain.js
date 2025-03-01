import PropTypes from 'prop-types'
import React from 'react'
import { Heading } from 'rendition'

import { Img } from '../img'
import { Link } from '../link'
import { Flex, Box } from '../flex'
import { gradients } from '../theme/colors'
import { LimeBrainsLogo } from '../theme/logos'
import { Flip } from 'react-reveal'




const HeaderPlain = ({ children }, { siteTitle }) => {

  return (

      <Flex
        style={{
          background: gradients.default,
        }}
      >
        <Box pt={10} pb={10} pr={10}>
          <Link to="/">
            <Flip left>
              <Img src={LimeBrainsLogo} responsive width={80} />
            </Flip>
          </Link>
        </Box>
        <Flex alignself={'center'}>
          <Link to="/">
            <Heading.h2>{siteTitle}</Heading.h2>
          </Link>
        </Flex>
        <Flex
          flex={1}
          justify={'flex-end'}
          align={'flex-end'}
          alignself={'center'}
        >
            {children}
        </Flex>
      </Flex>

  )
}

HeaderPlain.propTypes = {
  siteTitle: PropTypes.string,
}

HeaderPlain.defaultProps = {
  siteTitle: ``,
}

export default HeaderPlain
