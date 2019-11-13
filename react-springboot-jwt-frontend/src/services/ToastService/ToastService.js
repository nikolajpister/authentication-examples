import React from 'react';
import toaster from 'toasted-notes';
import { Toast } from './../../elements/Toast/Toast';


export const ToastService = {

    showToast(error) {
        let message = getMessage(error.response.status);

        toaster.notify(
            <Toast message={message} type="Error" />
        );

    }
}


function getMessage(status) {
    let message = '';

    switch (status) {
        case 401:
            message = 'Bad Credentials';
            break;
        default:
            message = 'oops, something went wrong ...';
            break;
    }

    return message;
}
