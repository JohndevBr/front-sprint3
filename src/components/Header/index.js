import Navbar from './Navbar'

import { AiOutlineSearch } from 'react-icons/ai'
import { Container } from './styles'

import LogoRchlo from '../../assets/riachuelo.svg'

function Header(){
    return (
        <Container>
            <div className="logo-btn">
                <h1>
                <img src={LogoRchlo} alt="logo Riachuelo" />
                </h1>
            </div>
            <div className="find-input">
                < AiOutlineSearch />
                <input type="search" placeholder="O que você está procurando?" />
            </div>
            <Navbar />
        </Container>
        
    )
}

export default Header