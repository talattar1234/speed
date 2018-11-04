import React from 'react';

const Header = (props) => {
    return (
        <h1 className="header">
            {props.title}
        </h1>
    )
}

Header.defaultProps = {
    text: 'Unknown Header'
}
export default Header;