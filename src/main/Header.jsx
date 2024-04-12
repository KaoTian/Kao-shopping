import React from "react";
import { Container, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

import firebase from "../untils/firebase";

function Header({ user }) {

    return (
        <header style={{ position: 'sticky' }}>
            <Container>
                <Link to='/'><div><Image src={require("../imgs/logo_head.png")} width="20%" height="20%" /></div></Link>
                <div>
                    <h3>
                        <ul  className="menu">
                            <li>公告消息</li>
                            <li><Link to="Products">所有商品</Link></li>
                            <li>優質蛋白</li>
                            <li>生猛海鮮</li>
                            <li>生鮮蔬果</li>
                        </ul>
                    </h3>
                    {user ?
                        <ul  className="member">
                            <li><Link to="Cart"><Icon name="shopping cart" />購物車</Link></li>
                            <li><Link to="Member"><Icon name="user" />會員</Link></li>
                            <li>
                                <Link onClick={() => firebase.auth().signOut()} as={Link} to="/">
                                    登出
                                </Link>
                            </li>
                        </ul>
                        :
                        <ul>
                            <li><Link to="Cart"><Icon name="shopping cart" />購物車</Link></li>
                            <li><Link to='Login'>登入</Link></li>
                        </ul>
                    }
                </div>
                <br />
            </Container>
        </header>
    );
}

export default Header;