import React from 'react';

export const Toast = ({ message, type }) => {
    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-header">
                    <strong className="mr-auto">{type}</strong>
                </div>
                <div className="toast-body">
                    {message}
                </div>
            </div>
        </div>
    );


}
