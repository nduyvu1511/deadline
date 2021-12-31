import { BsPerson } from 'react-icons/bs';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { RootState } from '../../core/store';
import { icons, userLinks } from './data';

const HeaderActions = () => {
    const language = useSelector(
        (state: RootState) => state.language.currentLanguage
    );

    return (
        <div className="header__top-actions">
            <ul className="header__top-actions-list">
                {icons.map((item, index) => (
                    <li key={index} className="header__top-actions-item">
                        <span className="header__top-actions-item-quantity">
                            2
                        </span>
                        <Link
                            className="header__top-actions-item-link"
                            to={item.path}>
                            {item.icon}
                        </Link>
                    </li>
                ))}

                {/* class to active hover: header__top-actions-user-active */}
                <div className="header__top-actions-user ">
                    <BsPerson />
                    <div className="header__top-actions-user-link">
                        <Link to="/login">
                            {language === 'vni' ? 'Đăng nhập' : 'Login'}
                        </Link>
                        <Link to="/register">
                            {language === 'vni' ? 'Đăng ký' : 'Register'}
                        </Link>
                    </div>

                    {/* Logged in user content */}
                    <div className="user__loggedin-content">
                        <ul className="user__loggedin-content-list">
                            {userLinks.map((user, index) => (
                                <li
                                    key={index}
                                    className="user__loggedin-content-list-item">
                                    {user.path ? (
                                        <Link
                                            className="user__loggedin-content-list-item-link"
                                            to={user.path}>
                                            {language === 'vni'
                                                ? user.titleVni
                                                : user.titleEng}
                                        </Link>
                                    ) : (
                                        <p
                                            className="user__loggedin-content-list-item-link"
                                            onClick={(e) => e.preventDefault()}>
                                            {language === 'vni'
                                                ? user.titleVni
                                                : user.titleEng}
                                        </p>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </ul>
        </div>
    );
};

export default HeaderActions;
