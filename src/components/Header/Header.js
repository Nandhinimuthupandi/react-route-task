import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <div className="header-container">
            <div className='head-item'>
                <Link to='/'>ALL</Link>
            </div>
            <div className='head-item'>
                <Link to='/FullStackDevelopment'>FULLSTACK DEVELOPMENT</Link>
            </div>
            <div className='head-item'>
                <Link to='/DataScience'>DATA SCIENCE</Link>
            </div>
            <div className='head-item'>
                <Link to='/CyberSecurity'>CYBER SECURITY</Link>
            </div>
            <div className='head-item'>
                <Link to='/Career'>CAREER</Link>
            </div>
        </div>
    )
}

export default Header;