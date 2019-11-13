import React from 'react';
import { PLACEHOLDER_IMG } from './../../utils/constants';

export const Image = ({ image }) => {
    let imagePath = '';
    (isImageAvailable(image)) ? imagePath = image.imagePath : imagePath = PLACEHOLDER_IMG;
    return (
        <img className="card-img-top mt-2" src={imagePath} alt="img here" />

    )
}

function isImageAvailable(image) {
    return image !== null && image.imagePath !== null && image.imagePath !== '';
}
