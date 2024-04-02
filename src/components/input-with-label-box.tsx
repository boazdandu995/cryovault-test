import React from 'react'

interface InputWithLabelBoxProps {
    label: string;
    type: string
}

const InputWithLabelBox = ({ label, type }: InputWithLabelBoxProps) => {
    return (
        <div className='input-with-label-box'>
            <label>{label}</label>
            <input type={type} />
        </div>
    )
}

export default InputWithLabelBox