import React from 'react';

const link = (list) => {
    const listItems = list.map((item) => 
        <li><a href={item.link}>{item.text}</a></li>
    );
    return listItems;
}

const Menu = (props) => {
    return (
        <ul className={props.className}>
            {link(props.list)}
        </ul>
    );
};

export default Menu;