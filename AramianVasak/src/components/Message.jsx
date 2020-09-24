import React from 'react'

const Messages = ({ count }) => {
    return (
        <div>
            <h3>Привет, я функциональный компонент</h3>
            <p>{count}</p>
        </div>
    )
}

export default Messages