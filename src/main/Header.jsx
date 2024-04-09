import React from "react";
import { Container, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { Table, Image } from "react-bootstrap";

import firebase from "../untils/firebase";

function Header({ user }) {

    return (
        <header className="navbar navbar-expand-lg navbar-light" style={{ margin: '10pt 0 0 0 ' }}>
            <Container>
                <Link to='/'><div style={{ textAlign: "center" }}><Image src={require("../imgs/logo_head.png")} width="20%" height="20%" /></div></Link>
                <Table>
                    <tr>
                        <td width="75%"></td>
                        {user ?
                            <>
                                <td style={{ textAlign: "right" }}><Link to="Cart"><Icon name="shopping cart" />購物車</Link></td>
                                <td style={{ textAlign: "right" }}><Link to="Member"><Icon name="user" />會員</Link></td>
                                <td style={{ textAlign: "right" }}>
                                    <Link onClick={() => firebase.auth().signOut()} as={Link} to="/">
                                        登出
                                    </Link>
                                </td>
                            </>
                            :
                            <>
                                <td style={{ textAlign: "right" }}><Link to="Cart"><Icon name="shopping cart" />購物車</Link></td>
                                <td style={{ textAlign: "right" }}><Link to='Login'>登入</Link></td>
                            </>
                        }
                    </tr>
                </Table>
                <hr />
                <h2>
                    <Table>
                        <tr>
                            <td>公告消息</td>
                            <td><Link to="Products">所有商品</Link></td>
                            <td>優質蛋白</td>
                            <td>生猛海鮮</td>
                            <td>生鮮蔬果</td>
                        </tr>
                    </Table>
                </h2>
                <hr />
            </Container>
        </header>
    );
}

export default Header;