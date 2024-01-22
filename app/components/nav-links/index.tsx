import { NavLink } from "@remix-run/react"
import styles from './styles.module.css'

interface Link {
  to: string;
  text: string;
  className?: string
}

interface Props {
  links: Array<Link>
}

const Navlinks = ({ links = [] }: Props) => {
  return (
    <ul className={`${styles.links}`}>
      {links.map(({ text, to }, index) => (
        <li key={index}>
          <NavLink
            to={to}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            {text}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}

export default Navlinks