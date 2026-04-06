import React from 'react'
import type{ LinkType } from '../../../entities/linksnavigation/links.types'
import { LinksData } from '../../../entities/linksnavigation/linksdata'
import { Link } from 'react-router-dom';

interface LinkProps {
    Links:LinkType[];
}

const Navigation:React.FC<LinkProps> = ({Links}) => {
  return (
    <div>
        {Links.map(link => (
            <Link key={link.id} to={link.link}>{link.title}</Link>
        ))}
    </div>
  )
}

export default Navigation