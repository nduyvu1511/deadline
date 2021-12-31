import { BsHeart, BsMinecart, BsBarChart } from 'react-icons/bs';
import { RiMenuFill, RiSearch2Line, RiShoppingBagLine } from 'react-icons/ri';
import { BiCategoryAlt } from 'react-icons/bi';

export const userLinks = [
    {
        titleEng: 'Account Information',
        titleVni: 'Thông tin tài khoản',
        path: '/',
    },
    {
        titleEng: 'Notification',
        titleVni: 'Thông báo',
        path: '/',
    },
    {
        titleEng: 'Invoices',
        titleVni: 'Hóa đơn',
        path: '/',
    },
    {
        titleEng: 'Address',
        titleVni: 'Địa chỉ',
        path: '/',
    },
    {
        titleEng: 'Recent viewed product',
        titleVni: 'Sản phẩm vừa xem',
        path: '/',
    },
    {
        titleEng: 'Wishlist',
        titleVni: 'Yêu thích',
        path: '/',
    },
    {
        titleEng: 'Logout',
        titleVni: 'Đăng xuất',
    },
];

export const icons = [
    { icon: <BsBarChart />, path: '/compare' },
    { icon: <BsHeart />, path: '/wishlist' },
    { icon: <BsMinecart />, path: '/cart' },
];

export const navMobileLinks = [
    { id: 'menu', icon: <RiMenuFill />, engName: 'Menu', vniName: 'Menu' },
    {
        id: 'category',
        icon: <BiCategoryAlt />,
        engName: 'Category',
        vniName: 'Danh mục',
    },
    {
        id: 'search',
        icon: <RiSearch2Line />,
        engName: 'Search',
        vniName: 'Tìm kiếm',
    },
    {
        id: 'cart',
        icon: <RiShoppingBagLine />,
        engName: 'Cart',
        vniName: 'Giỏ hàng',
    },
];
