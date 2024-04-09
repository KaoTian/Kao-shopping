import React from "react";
import { Container, Item } from "semantic-ui-react";

import Products_list from "./Products_list";
import firebase from "../untils/firebase";

function Allproducts() {
    const [Allproducts, setAllproucts] = React.useState([]);

    React.useEffect(() => {
        firebase
            .firestore()
            .collection("allproducts")
            .get()
            .then((collectionSnapshot) => {
                const data = collectionSnapshot.docs.map(docSnapshot => {
                    const id = docSnapshot.id;
                    return {...docSnapshot.data(), id};
                })
                setAllproucts(data);
            })
    }, [])

    return (
        <Container>
            <Item.Group>
                <Item>
                    {Allproducts.map((allproduct) => {
                        return (
                            <Products_list allproduct={allproduct} key={allproduct.id} />
                        );
                    })}
                </Item>
            </Item.Group>
        </Container>
    );
}

export default Allproducts;