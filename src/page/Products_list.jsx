import { Item } from "semantic-ui-react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

function Products_list({ allproduct }) {
    return (
        <Item.Content className="list" as={Link} to={`/Products/${allproduct.id}`}>
            <Item.Meta>
                <Image src={allproduct.imgsrc} width="50%"></Image>
            </Item.Meta>
            <Item.Header>{allproduct.title}</Item.Header>
            <Item.Description>${allproduct.price}</Item.Description>
        </Item.Content>
    );
}

export default Products_list;