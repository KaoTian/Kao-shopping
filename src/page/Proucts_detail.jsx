import React from "react";
import { useParams } from "react-router-dom";
import { Item, Container, Button, Icon, Header, Input, Form, Message } from "semantic-ui-react";

import firebase from "../untils/firebase";

function Products_detail() {
    const uid = firebase.auth().currentUser.uid;
    const { productsId } = useParams();
    const [products, setProducts] = React.useState([]);
    const [isLoading,setIsLoading] = React.useState(false);
    const [count, setCount] = React.useState(1);
    const [addMessage,setAddMessage] = React.useState("");
    

    React.useEffect(() => {
        firebase
            .firestore()
            .collection("allproducts")
            .doc(productsId)
            .onSnapshot((docSnapshot) => {
                const data = docSnapshot.data();
                setProducts(data);
            });
    }, []);

    function addcart(){
        setIsLoading(true)
        const firestore = firebase.firestore();
        const cart = firestore.collection("userscart").doc(uid).collection("usercart").doc(productsId);
        cart.set({
            title: products.title,
            imgsrc:products.imgsrc,
            price:products.price,
            count:count,
            total:count * products.price,
        })

        setIsLoading(false);
        setAddMessage("已將商品加入購物車");
    };

    function minus() {
        if (count <= 1)
            setCount(1)
        else
            setCount(count - 1)
    };

    function plus(){
        setCount(count + 1)
    };


    return (
        <Container>
            <Item.Group>
                <Item>
                    <Item.Image size='medium' src={products.imgsrc} />

                    <Item.Content>
                        <Header as='h1'>{products.title}</Header>
                        <Item.Meta>Description</Item.Meta>
                        <Item.Description>
                            新鮮直送，保留最自然的風味。
                            {products.introduction}
                        </Item.Description>
                        <br />
                        <br />
                        <br />
                        <Item.Header>${products.price}</Item.Header>
                        <br />
                        <br />
                        <Form>
                            <Button onClick={minus}><Icon name="minus"/></Button>
                            <Input value={count}></Input>
                            <Button onClick={plus}><Icon name="plus"/></Button>
                        </Form>
                    </Item.Content>
                </Item>
                <Item>
                    <Item.Content>
                        <Button primary floated="right" verticalAlign="bottom" onClick={addcart} loading={isLoading}>
                            加入購物車
                            <Icon name='right chevron' />
                        </Button>
                        <br />
                        <br />
                        {addMessage&&<Message>{addMessage}</Message>}
                    </Item.Content>
                </Item>

            </Item.Group>
        </Container>
    );
}
export default Products_detail;