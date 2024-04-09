import React from "react";
import { Header, Button, Segment, Modal, Input, Form, Radio } from "semantic-ui-react";
import firebase from "../untils/firebase";

function MyName({ user }) {
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [displayName, setDisplayName] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);


    function onSubmit() {
        setIsLoading(true);
        user.updateProfile({
            displayName,
        }).then(() => {
            setIsLoading(false);
            setDisplayName('');
            setIsModalOpen(false);
        });
    }

    return (
        <>
            <Header size="small">
                會員名稱
                <Button floated="right" onClick={() => setIsModalOpen(true)}>
                    修改
                </Button>
            </Header>
            <Segment vertical>
                {user.displayName}
            </Segment>
            <Modal open={isModalOpen} size="mini" className="modal_name">
                <Modal.Header>修改會員名稱</Modal.Header>
                <Modal.Content>
                    <Input placeholder="輸入新的會員名稱"
                        value={displayName}
                        onChange={e => setDisplayName(e.target.value)}
                        fluid
                    />
                </Modal.Content>
                <Modal.Actions>
                    <Button onClick={() => setIsModalOpen(false)}>取消</Button>
                    <Button onClick={onSubmit} loading={isLoading}>修改</Button>
                </Modal.Actions>
            </Modal>
        </>
    );
}
function MyPassword({ user }) {
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    const [oldPassword, setOldPassword] = React.useState('');
    const [newPassword, setNewPassword] = React.useState('');

    function onSubmit() {
        setIsLoading(true);
        const credential = firebase.auth.EmailAuthProvider.credential(user.email, oldPassword);
        user.reauthenticateWithCredential(credential).then(() => {
            user.updatePassword(newPassword).then(() => {
                setIsModalOpen(false);
                setOldPassword('');
                setNewPassword('');
                setIsLoading(false);
            });
        });

    }

    return (
        <>
            <Header size="small">
                會員密碼
                <Button floated="right" onClick={() => { setIsModalOpen(true) }}>修改</Button>
            </Header>
            <Segment vertical>
                *****
            </Segment>
            <Modal open={isModalOpen} size="mini" className="modal_password">
                <Modal.Header>修改會員密碼</Modal.Header>
                <Modal.Content>
                    <Header>目前密碼</Header>
                    <Input placeholder="輸入舊密碼"
                        value={oldPassword}
                        onChange={e => setOldPassword(e.target.value)}
                        fluid
                    />
                    <Header>新密碼</Header>
                    <Input placeholder="輸入新密碼"
                        value={newPassword}
                        onChange={e => setNewPassword(e.target.value)}
                        fluid
                    />
                </Modal.Content>
                <Modal.Actions>
                    <Button onClick={() => setIsModalOpen(false)}>取消</Button>
                    <Button onClick={onSubmit} loading={isLoading}>修改</Button>
                </Modal.Actions>
            </Modal>
        </>
    );
}
function MySex() {
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    const [sex, setSex] = React.useState('');

    return (
        <>
            <Header size="small">
                性別
                <Button floated="right" onClick={() => setIsModalOpen(true)}>
                    修改
                </Button>
            </Header>
            <Segment vertical>
            </Segment>
            <Modal open={isModalOpen} size="mini" className="modal_sex">
                <Modal.Header>性別</Modal.Header>
                <Modal.Content>
                    <Form>
                        <Form.Field>
                            請選擇性別：<b></b>
                        </Form.Field>
                        <Form.Field>
                            <Radio
                                label='男'
                                name='radioGroup'
                                value='男'
                                onChange={e => setSex(e.target.value)}
                            />
                        </Form.Field>
                        <Form.Field>
                            <Radio
                                label='女'
                                name='radioGroup'
                                value='女'
                                onChange={e => setSex(e.target.value)}
                            />
                        </Form.Field>
                        <Form.Field>
                            <Radio
                                label='其他'
                                name='radioGroup'
                                value='其他'
                                onChange={e => setSex(e.target.value)}
                            />
                        </Form.Field>
                    </Form>
                </Modal.Content>
                <Modal.Actions>
                    <Button onClick={() => setIsModalOpen(false)}>取消</Button>
                    <Button loading={isLoading}>修改</Button>
                </Modal.Actions>
            </Modal>
        </>
    );

}
function MyBirth() { }
function MyPhone({ user }) {
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [phoneNumber, setPhoneNumber] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);


    function onSubmit() {
        setIsLoading(true);
        user.updateProfile({
            phoneNumber,
        }).then(() => {
            setIsLoading(false);
            setPhoneNumber('');
            setIsModalOpen(false);
        });
    }

    return (
        <>
            <Header size="small">
                手機號碼
                <Button floated="right" onClick={() => setIsModalOpen(true)}>
                    修改
                </Button>
            </Header>
            <Segment vertical>
                {user.phoneNumber}
            </Segment>
            <Modal open={isModalOpen} size="mini" className="modal_name">
                <Modal.Header>修改手機號碼</Modal.Header>
                <Modal.Content>
                    <Input placeholder="輸入新的手機號碼"
                        value={phoneNumber}
                        onChange={e => setPhoneNumber(e.target.value)}
                        fluid
                    />
                </Modal.Content>
                <Modal.Actions>
                    <Button onClick={() => setIsModalOpen(false)}>取消</Button>
                    <Button onClick={onSubmit} loading={isLoading}>修改</Button>
                </Modal.Actions>
            </Modal>
        </>
    );
}
function MyAddress() { }

function MySettings({ user }) {
    return (
        <div style={{ TextAlign: 'left' }}>
            <Header textAlign="center">會員資料</Header>
            <hr />

            
            <MyName user={user} />
            <MyPassword user={user} />
            <MySex user={user} />
            <MyBirth user={user} />
            <MyPhone user={user} />
            <MyAddress user={user} />
        </div>
    );
}
export default MySettings;