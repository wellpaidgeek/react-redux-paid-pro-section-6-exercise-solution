import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

export default function EnhancedCheckbox ({ label, value, selected, id, onChange }) {
    const selectedClass = (
        selected
        ? ' enhanched-checkbox-container-selected'
        : ''
    );
    const className = `enhanched-checkbox-container${selectedClass}`;
    return (
        <div className={className} onClick={() => onChange()}>
            <input
                type="checkbox"
                value={value}
                id={id}
                checked={selected}
            />
            <label>{label}</label>
        </div>
    )
}

EnhancedCheckbox.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
    selected: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}
