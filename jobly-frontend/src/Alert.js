import React from "react";

function Alert({type, messages}) {
    return (
        <div className={`alert alert-${type}`} role="alert">
            {messages.map(error => (
                <p key={error}>
                    {error}
                </p>
            ))}
        </div>
    )
}

export default Alert;