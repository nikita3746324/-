
import style from './section.module.css'

const Section = ({children,className}) => {
  return (
    <section className={`${style.section} ${className || ""}`}>
        {children}
    </section>
  )
}

export default Section