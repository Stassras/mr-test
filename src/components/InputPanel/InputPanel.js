import React from 'react';

import './InputPanel.css';

const InputPanel = ({ value }) => {
    return (
        <input type="text"
            value={value}
            className="form-control inputPanel "
            placeholder="Enter a number or text..."
            max="20" />
    )
}

export default InputPanel;