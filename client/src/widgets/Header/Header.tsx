import Navigation from './Navigation/Navigation'
import { LinksData } from '../../entities/linksnavigation/linksdata'
import { Link } from 'react-router-dom'
import logoHell from '../../../public/Header/logoHell.svg'

import style from './header.module.css'
import Section from '../../shared/ui/Section/Section'

const Header = () => {
  return (

    <Section className={style.header}>
        <div>
          <Link to={'/'} className={style.linkhome}>
            <img src={logoHell} alt="" className={style.logo}/>
            <h2>Nikotin.ru</h2>
          </Link>
        </div>
        <Navigation Links={LinksData}/>
    </Section>
  )
}

export default Header