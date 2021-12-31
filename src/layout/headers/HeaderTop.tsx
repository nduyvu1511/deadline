import React from 'react';
import { Link } from 'react-router-dom';
import { logo } from '../../shared/assets/icon';
import HeaderSearch from '../../shared/components/inputs/HeaderSearch';
import HeaderActions from './HeaderActions';

const HeaderTop = ({ isActive }: { isActive: string }) => {
    return (
        <header className={`header__top ${isActive}`}>
            <div className="header__top-logo">
                <Link to="/">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="header__top-search">
                <HeaderSearch type="HEADER_SEARCH" />
            </div>
            <HeaderActions />
        </header>
    );
};

export default HeaderTop;
