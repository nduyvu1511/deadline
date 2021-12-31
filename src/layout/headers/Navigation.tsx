import React from 'react';
import { Link } from 'react-router-dom';

const data = [
    { name: 'Trang chủ', path: '/home' },
    { name: 'Sản phẩm', path: '/shop' },
    { name: 'Tin tức', path: '/news' },
    { name: 'Blog', path: '/blog' },
];

const Navigation = () => {
    return (
        <div className="header__nav">
            <ul className="header__nav-list">
                {data.map((item, index) => (
                    <li key={index} className="header__nav-list-item">
                        <Link to={item.path}>{item.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navigation;
