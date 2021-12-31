import { Link } from 'react-router-dom';

const HeaderCategory = () => {
    return (
        <div className="header__bottom-category-content">
            <ul className="header__bottom-category-content-list">
                <li className="header__bottom-category-content-list-item">
                    <Link to="/">Rau củ</Link>
                </li>
                <li className="header__bottom-category-content-list-item">
                    <Link to="/">Rau củ</Link>

                    <div className="menu__child">
                        <ul className="menu__child-list">
                            <li className="menu__child-list-item">
                                <Link to="/">Rau củ</Link>
                            </li>
                            <li className="menu__child-list-item">
                                <Link to="/">Rau củ</Link>
                            </li>
                            <li className="menu__child-list-item">
                                <Link to="/">Rau củ</Link>
                            </li>
                            <li className="menu__child-list-item">
                                <Link to="/">Rau củ</Link>
                            </li>
                            <li className="menu__child-list-item">
                                <Link to="/">Rau củ</Link>
                            </li>
                            <li className="menu__child-list-item">
                                <Link to="/">Rau củ</Link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="header__bottom-category-content-list-item">
                    <Link to="/">Rau củ</Link>
                </li>
                <li className="header__bottom-category-content-list-item">
                    <Link to="/">Rau củ</Link>
                </li>
                <li className="header__bottom-category-content-list-item">
                    <Link to="/">Rau củ</Link>
                </li>
                <li className="header__bottom-category-content-list-item">
                    <Link to="/">Rau củ</Link>
                </li>
            </ul>
        </div>
    );
};

export default HeaderCategory;
