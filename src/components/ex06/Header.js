import styled  from "styled-components";

const SHeader = styled.header`
padding:20px 15%;
display: flex;
justify-content: space-betewen;
font-size: 24px;
font-weight: 900;
`;

const Logo = styled.h3`

`;

const MenuWrap = styled.ul`
diplay
`;

export const Header = ()=>{
    return (
    <SHeader>
        <Logo>
            Logo
        </Logo>
        <MenuWrap>
            <li>menu</li>
            <li>menu</li>
            <li>menu</li>
            <li>menu</li>
        </MenuWrap>
    </SHeader>
    );
};