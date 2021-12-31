import Navigation from './Navigation';
import { Link } from 'react-router-dom';

import { TiFlowSwitch } from 'react-icons/ti';
import { BsList } from 'react-icons/bs';
import { englandFlag, vietnamFlag } from '../../shared/assets/icon';
import useLocale from '../../shared/hook/useLocale';
import {
    switchToEnglish,
    switchToVietnamese,
} from '../../modules/locale/localeSlice';
import { useAppDispatch } from '../../core/store';
import HeaderCategory from '../../shared/components/category/HeaderCategory';

const HeaderBottom = () => {
    const dispatch = useAppDispatch();
    const language = useLocale();

    return (
        <div className="header__bottom">
            <div className="header__bottom-category">
                <BsList />
                <span>Shop by Department</span>

                {/* nav hover */}
                <HeaderCategory />
            </div>
            <Navigation />
            <div className="header__bottom-right">
                {language === 'eng' ? (
                    <div
                        onClick={() => dispatch(switchToVietnamese())}
                        className="header__bottom-right-switch">
                        <img src={vietnamFlag} alt="" />
                        <p>Vietnam</p>
                        <TiFlowSwitch />
                    </div>
                ) : (
                    <div
                        onClick={() => dispatch(switchToEnglish())}
                        className="header__bottom-right-switch">
                        <img src={englandFlag} alt="" />
                        <p>English</p>
                        <TiFlowSwitch />
                    </div>
                )}
            </div>
        </div>
    );
};

export default HeaderBottom;
