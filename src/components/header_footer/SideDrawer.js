import React from 'react';
import { scroller } from 'react-scroll';
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem  from "@material-ui/core/ListItem";

const SideDrawer = (props) => {

    const scrollToElement = (element) => {
        scroller.scrollTo(element,{
            duration:1500,
            delay:100,
            offset:-150,
            smooth:true
        })
        props.onClose(false);
    }

    const links = [
        { where:'featured',value:'To top'},
        { where:'venueinfo',value:'Venue NFO'},
        { where:'highlight',value:'Highlights'},
        { where:'pricing',value:'Pricing'},
        { where:'location',value:'Location'}
    ]

    const renderItem = (item) => {
        return (
            <ListItem button onClick={() => (scrollToElement(item.where))}  key={item.where}>
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