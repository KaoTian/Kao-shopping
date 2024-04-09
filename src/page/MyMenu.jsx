import React from "react";
import { Icon, List } from "semantic-ui-react";
import { Link,useLocation } from "react-router-dom";

function MyMenu(){
    const location = useLocation;
    const menuItems = [
        {
            name:'會員資料',
            icon:'user',
            path:'/Member/settings'
        },
        {
            name:'會員訂單',
            icon:'clipboard outline',
            path:'/Member/purchase'
        },
    ];

    return (
        <List animated selection>
            {menuItems && menuItems.map((menuItem) => {
                return (
                    <List.Item as={Link} to={menuItem.path} key={menuItem.name} active={menuItem.path === location.pathname}>
                        <Icon name={menuItem.icon} />　{menuItem.name}
                    </List.Item>
                );
            })}
        </List>
    );

}
export default MyMenu;