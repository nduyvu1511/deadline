import { useState } from 'react';
import useLocale from '../../hook/useLocale';
import Dropdown from '../dropdown/Dropdown';
import { RiSearchLine } from "react-icons/ri";

interface SearchType {
    type?: 'HEADER_SEARCH';
}

const HeaderSearch = ({ type }: SearchType) => {
    const [value, setValue] = useState('');
    const language = useLocale();

    return (
        <div className="header__search">
            {type === 'HEADER_SEARCH' && <Dropdown />}
            <input
                className="header__search-input"
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder={`${
                    language === 'vni'
                        ? 'Tìm kiếm sản phẩm...'
                        : "I'm shopping for..."
                }`}
            />
            <button className="btn-reset header__search-button">
                {type==='HEADER_SEARCH' ? (language === 'vni' ? 'Tìm kiếm' : 'Search') : <RiSearchLine/>}
            </button>
        </div>
    );
};

export default HeaderSearch;
