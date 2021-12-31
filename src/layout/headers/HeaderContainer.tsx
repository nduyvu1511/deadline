import React, { useEffect, useState } from 'react';
import HeaderBottom from './HeaderBottom';
import HeaderTop from './HeaderTop';
import NavMobile from './NavMobile';

const HeaderContainer = () => {
    const [height, setHeight] = useState<number>(0);

    useEffect(() => {
        const getHeight = () => setHeight(document.documentElement.scrollTop);
        window.addEventListener('scroll', getHeight);

        return () => window.removeEventListener('scroll', getHeight);
    }, []);

    return (
        <div>
            <section className="header">
                <div className="container">
                    <HeaderTop isActive={height > 150 ? 'header-active' : ''} />
                </div>
                <div className="header-separate"></div>
                <div className="container">
                    <HeaderBottom />
                </div>
            </section>
            <NavMobile />
        </div>
    );
};

export default HeaderContainer;
