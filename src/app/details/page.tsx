import InputWithLabelBox from '@/components/input-with-label-box'
import SideBar from '@/components/sidebar'
import React from 'react'

const DetailsPage = () => {
    return (
        <div className='details-page-container'>
            <SideBar />
            <div className='details-box'>
                <div className='details-box-header'>
                    <p>Details</p>
                </div>
                <div className='details-box-body'>
                    <div>
                        <InputWithLabelBox label={"Mother's Name"} type="text" />
                        <InputWithLabelBox label={"Date of Birth"} type="text" />
                        <InputWithLabelBox label={"Father's Name"} type="text" />
                        <InputWithLabelBox label={"Date of Birth"} type="text" />
                    </div>
                    <div>
                        <InputWithLabelBox label={"Email Address"} type="text" />
                        <InputWithLabelBox label={"Mobile Number"} type="text" />
                        <InputWithLabelBox label={"Email Address"} type="text" />
                        <InputWithLabelBox label={"Mobile Number"} type="text" />
                    </div>
                    <div>
                        <InputWithLabelBox label={"Occupation"} type="text" />
                        <InputWithLabelBox label={"Organization Name"} type="text" />
                        <InputWithLabelBox label={"Occupation"} type="text" />
                        <InputWithLabelBox label={"Organization"} type="text" />
                    </div>
                    <InputWithLabelBox label={"Address line-1"} type="text" />
                    <InputWithLabelBox label={"Address line-2"} type="text" />
                    <div>
                        <InputWithLabelBox label={"Near Land Mark"} type="text" />
                        <InputWithLabelBox label={"City"} type="text" />
                        <InputWithLabelBox label={"state"} type="text" />
                    </div>
                    <div>
                        <InputWithLabelBox label={"Pincode"} type="text" />
                        <InputWithLabelBox label={"Country"} type="text" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailsPage