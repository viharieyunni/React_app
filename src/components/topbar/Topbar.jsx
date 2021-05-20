import './topbar.scss'
import { Person, Mail } from '@material-ui/icons'

const Topbar = ({ menuopen, setMenuOpen }) => {
  return (
    <div className={'topbar ' + (menuopen && 'active')}>
      <div className='wrapper'>
        <div className='left'>
          <a href='#intro' className='logo'>
            V!har;
          </a>
          <div className='itemContainer'>
            <Person className='icon' />
            <span>+1 812 671 3440</span>
          </div>
          <div className='itemContainer'>
            <Mail className='icon' />
            <span>vihari95@outlook.com</span>
          </div>
        </div>
        <div className='right'>
          <div className='hamburger' onClick={() => setMenuOpen(!menuopen)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar
