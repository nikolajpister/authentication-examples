import React from 'react';

export const DateParser = ({ date }) => {
    date = String(date).split('T');
    return <small>{date[0]}</small>;
}