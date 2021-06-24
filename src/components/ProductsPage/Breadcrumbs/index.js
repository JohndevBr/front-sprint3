import { Navcontainer } from './styles'

function Breadcrumbs() {
    return (
        <Navcontainer>
          <ol>
            <li><a href="/">Home</a></li>
            <li>/</li>
            <li><a href="/">Infantil</a></li>
            <li>/</li>
            <li><a href="/">Personagens</a></li>
            <li>/</li>
            <li>Mario Bros</li>
          </ol>
        </Navcontainer>
    )
}

export default Breadcrumbs