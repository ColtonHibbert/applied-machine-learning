import React from 'react';

const ContentCards = (props) => {
    return (
        <div className="w-100 flex">
            {props.children}
        </div>
    )
}

export default ContentCards;