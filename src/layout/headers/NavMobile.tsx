import { useState } from 'react';
import HeaderCategory from '../../shared/components/category/HeaderCategory';
import HeaderSearch from '../../shared/components/inputs/HeaderSearch';
import MenuHeading from '../../shared/components/menu-heading/MenuHeading';
import Modal from '../../shared/components/modal/Modal';
import useLocale from '../../shared/hook/useLocale';
import { navMobileLinks } from './data';
import Navigation from './Navigation';

const NavMobile = () => {
    const language = useLocale();
    const [openModal, setOpenModal] = useState({
        isOpen: false,
        modalName: '',
    });

    const handleItemClick = (name: string) => {
        setOpenModal({
            isOpen: name === openModal.modalName ? !openModal.isOpen : true,
            modalName: name,
        });
    };

    return (
        <>
            <div className="nav__mobile">
                <ul className="nav__mobile-list">
                    {navMobileLinks.map((nav) => (
                        <li
                            key={nav.id}
                            onClick={() => handleItemClick(nav.id)}
                            className="nav__mobile-list-item">
                            {nav.icon}
                            <p>
                                {language === 'vni' ? nav.vniName : nav.engName}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
            <Modal
                direction="right"
                isShowModal={openModal.modalName === 'menu' && openModal.isOpen}
                handleClickModal={() =>
                    setOpenModal({ modalName: '', isOpen: false })
                }>
                <MenuHeading title="Menu" />
                <Navigation />
            </Modal>

            <Modal
                direction="right"
                isShowModal={
                    openModal.modalName === 'category' && openModal.isOpen
                }
                handleClickModal={() =>
                    setOpenModal({ modalName: '', isOpen: false })
                }>
                <MenuHeading title="Category" />
                <HeaderCategory />
            </Modal>

            <Modal
                direction="right"
                isShowModal={
                    openModal.modalName === 'search' && openModal.isOpen
                }
                handleClickModal={() =>
                    setOpenModal({ modalName: '', isOpen: false })
                }>
                {/* <MenuHeading title="Search" /> */}
                <div className="nav__mobile-search-wrapper">
                    <HeaderSearch />
                </div>
            </Modal>
        </>
    );
};

export default NavMobile;
