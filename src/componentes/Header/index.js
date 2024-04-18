import Logo from '../Logo'
import OpcoesHeader from '../OpcoesHeader'
import IconesHeader from '../IconesHeader'
import styled from 'styled-components'


const HeaderContainer = styled.header`
    .App-header {
    background-color: #FFF;
    display: flex;
    justify-content: center;
  }
`


function Header() {
    return (
      <HeaderContainer>
        <Logo/>
        <OpcoesHeader/>
        <IconesHeader></IconesHeader>
      </HeaderContainer>
    )
}

export default Header