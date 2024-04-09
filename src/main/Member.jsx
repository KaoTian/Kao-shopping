import React from "react";
import { Container,Grid } from "semantic-ui-react";
import { Route, Routes } from "react-router-dom";

import firebase from "../untils/firebase"

import MyMenu from "../page/MyMenu";
import MySettings from "../page/MySettings";
import MyPurchase from "../page/MyPurchase";

function Member(){
    const [user, setUser] = React.useState(null);
    React.useEffect(() => {
        firebase.auth().onAuthStateChanged((currentUser) => {
            setUser(currentUser);
        })
    }, []);
    return(
        <Container>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={3}>
                        <MyMenu />
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <Routes>
                            <Route path="/settings" element={<MySettings user={user} />} activeClassName="active"></Route>
                            <Route path="/purchase" element={<MyPurchase />}></Route>
                        </Routes>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    );
}
export default Member;