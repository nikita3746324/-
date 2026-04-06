import React from 'react'
import Navigation from './Navigation/Navigation'
import { LinksData } from '../../entities/linksnavigation/linksdata'

const Header = () => {
  return (
    <div>
        <Navigation Links={LinksData}/>
    </div>
  )
}

export default Header