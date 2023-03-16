import {Menu, Image} from "semantic-ui-react"


const Nav = () => {
    return (
        <Menu secondary>
            <Image src="./images/cashLogo.png" size="small" />

            <Menu.Item position="right">Reset Screen</Menu.Item>
            <Menu.Item >About us</Menu.Item>
            <Menu.Item position="right">Login</Menu.Item>
        </Menu>
    );
};


export default Nav;