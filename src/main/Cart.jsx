import React from 'react';
import { Link } from 'react-router-dom'
import { Container, Button } from 'semantic-ui-react'
import { Table, Image } from 'react-bootstrap';

import firebase from "../untils/firebase";


function Cart() {
    const uid = firebase.auth().currentUser.uid;
    const [Usercart, setUsercart] = React.useState();
    var TotalPrice = 0;

    React.useEffect(() => {
        firebase
            .firestore()
            .collection("userscart")
            .doc(uid)
            .collection("usercart")
            .onSnapshot((collectionSnapshot) => {
                const data = collectionSnapshot.docs.map(doc => {
                    const id = doc.id;
                    return { ...doc.data(), id };
                })
                setUsercart(data);
            });
    }, []);


    return (
        <Container>
            <Table>
                <tr>
                    <th width="20%"></th>
                    <th width="25%">商品名稱</th>
                    <th width="15%">單價</th>
                    <th width="15%">購買數量</th>
                    <th width="15%">總價</th>
                    <th width="10%">操作</th>
                </tr>
            </Table>
            
            {Usercart && Usercart.map((usercart) => {

                TotalPrice = TotalPrice + usercart.total;

                function deletecart() {
                    firebase
                        .firestore()
                        .collection("userscart")
                        .doc(uid)
                        .collection("usercart")
                        .doc(usercart.id)
                        .delete()

                }

                return (
                    <div key={usercart.id}>
                        <Table>
                            <tr className='cartfont'>
                                <td width="20%"><Image src={usercart.imgsrc} width="60%" /></td>
                                <td width="25%"><Link to={`/Products/${usercart.id}`}>{usercart.title}</Link></td>
                                <td width="15%">${usercart.price}</td>
                                <td width="15%">{usercart.count}</td>
                                <td width="15%">${usercart.total}</td>
                                <td width="10%"><Button onClick={deletecart}>刪除</Button></td>
                            </tr>
                        </Table>
                        <hr />
                    </div>
                );
            })}
            <div style={{textAlign:"right"}}>
                <h2>折扣後　總金額　${Math.ceil(TotalPrice = TotalPrice*0.9)}　<Button color='red'>結帳</Button></h2>
            </div>
        </Container>
    )
}
export default Cart;