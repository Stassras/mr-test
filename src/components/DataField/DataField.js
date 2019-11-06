import React from 'react';

import './DataField.css';

const DataField = ({ data }) => {
    return (
        <ul className="list-group">
            {
                data.map((el, index) => {
                    return (
                        <li key={index} className="list-group-item">
                            <span>{el}</span>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default DataField;