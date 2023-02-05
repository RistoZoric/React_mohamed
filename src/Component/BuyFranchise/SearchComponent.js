import React, { useState } from 'react';
import AppSelect from '../AppSelect';
import './SearchComponent.scss';
import { Categories, countryList, Investment } from '../../Utils/constants';
import { FaArrowRight } from 'react-icons/fa';

export default function SearchComponent({ categories, handleFranchiseType, onSelectedType = '', onSearch }) {
    const [requestData, setRequestData] = useState(null)
    const handleSelectedCategory = (item) => {
        if (item === '')
            setRequestData(null)
        else
            setRequestData({ category_id: categories.filter(i => i.name == item)[0].id })
    }
    const handleSelectedInvest = (item) => {
        if (item === '')
            setRequestData(null)
        else
            setRequestData({ investment: item })
    }
    const handleSelectedNationality = (item) => {
        if (item === '')
            setRequestData(null)
        else
            setRequestData({ country: item })
    }
    const handleButtonDisabled = () => {
        return requestData === null
    }
    const onSearchSubmit = () => {
        if (!handleButtonDisabled())
            onSearch(requestData)
    }
    return (
        <div className='buy-franchise__body-search'>
            <div className='buy-franchise__body-search-one'>
                <div className='buy-franchise__body-search-one-title'>Franchise Search</div>
                <AppSelect className="buy-franchise__body-search-one-select" placeholder={'Select Category'} required={false} options={categories} optionsName={'name'} selectedOption={(item, optionName) => handleSelectedCategory(item)} />
                {/* <AppSelect className="buy-franchise__body-search-one-select" placeholder={'Select Sub Category'} options={Categories} optionsName={'name'}/> */}
                <AppSelect className="buy-franchise__body-search-one-select" placeholder={'Select Investment'} required={false} options={Investment} selectedOption={(item, optionName) => handleSelectedInvest(item)} />
                <AppSelect className="buy-franchise__body-search-one-select" placeholder={'Select Country'} required={false} options={countryList} selectedOption={(item, optionName) => handleSelectedNationality(item)} />
                <div className={`buy-franchise__body-search-one-action ${handleButtonDisabled() && 'button-disabled'} `} onClick={() => onSearchSubmit()}><h4>Search Franchises</h4><FaArrowRight /></div>
            </div>
            <div className='buy-franchise__body-search-two'>
                <div className={`buy-franchise__body-search-two-item ${onSelectedType === 'Featured' && 'tab-active'}`} onClick={() => handleFranchiseType('Featured')}>
                    Featured Franchises
                    <div className='buy-franchise__body-search-two-arrow'><FaArrowRight /></div>
                </div>
                <div className={`buy-franchise__body-search-two-item ${onSelectedType === 'Best' && 'tab-active'}`} onClick={() => handleFranchiseType('Best')}>
                    Best Franchises
                    <div className='buy-franchise__body-search-two-arrow'><FaArrowRight /></div>
                </div>
                <div className={`buy-franchise__body-search-two-item ${onSelectedType === 'Latest' && 'tab-active'}`} onClick={() => handleFranchiseType('Latest')}>
                    Latest Franchises
                    <div className='buy-franchise__body-search-two-arrow'><FaArrowRight /></div>
                </div>
            </div>
        </div>
    )
}
