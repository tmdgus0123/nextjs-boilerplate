import Link from "next/link";
import data from "./data.json";
import styled from "@emotion/styled";

const Nav = styled.header``;
const NavList = styled.ul`
    display: block;
`;
const NavItem = styled.li`
    list-style-type: none;
    float: left;
    outline: 1px dotted red;
    margin-left: 20px;
`;

const Header = () => {
    return (
        <Nav>
            <NavList>
                {data.map((x, i) => (
                    <NavItem key={i}>
                        <Link href={x.url}>{x.title}</Link>
                    </NavItem>
                ))}
            </NavList>
        </Nav>
    );
};

export default Header;
