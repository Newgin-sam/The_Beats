import React from 'react';

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem  from "@material-ui/core/ListItem";

function SideDrawer(props) {

    const links = [
        { where:'featured',value:'To top'},
        { where:'venuenfo',value:'Venue NFO'},
        { where:'highlights',value:'Highlights'},
        { where:'pricing',value:'Pricing'},
        { where:'location',value:'Location'}
    ]

    const renderItem = (item) => {
        return (
            <ListItem button onClick={() => {alert(item.where)}}  key={item.where}>
                {item.value}
            </ListItem>
        )
    }
    return (
        <Drawer 
            anchor='right'
            open={props.open}
            onClose={() => props.onClose(false)}
        >
            <List>
                {
                    links.map( el => 
                        renderItem(el)
                    ) 
                }
            </List>
            
        </Drawer>
    );
}

export default SideDrawer;