import React from 'react';
import './AppSelect.scss'

export default function AppSelect({ placeholder = 'select', options, optionsName = null, className, defaultValue, selectedOption, required = true }, props) {
    return (
        <select className={`app-select ${className}`} autoFocus={false} defaultValue={defaultValue} onChange={(e) => selectedOption(e.target.value, optionsName)}>
            <option value="" disabled={required} selected>{placeholder}</option>
            {options.map(item => {
                return <option className='app-select__option' value={optionsName ? item[optionsName] : item} >{optionsName ? item[optionsName] : item}</option>
            })}
        </select>
    )
}
