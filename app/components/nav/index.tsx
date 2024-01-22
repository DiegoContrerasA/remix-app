import Navlinks from "../nav-links"
import styles from './styles.module.css'
const LINKS = [{
  to: '/',
  text: 'text 1',
  className: 'algooooo'
},
{
  to: '/about',
  text: 'text 2',
  className: 'algooooo'
},
{
  to: '/about2',
  text: 'text 3',
},
{
  to: '/about4',
  text: 'text 4',

},
{
  to: '/about5',
  text: 'text 5',
},
{
  to: '/about6',
  text: 'text 6',

},
{
  to: '/',
  text: 'text 7',

}]
const Nav = () => {
  return (
    <nav className={styles.nav}>
      <h1>brand</h1>
      <Navlinks links={LINKS} />
    </nav>
  )
}

export default Nav