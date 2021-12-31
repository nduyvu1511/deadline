const MenuHeading = ({ title }: { title: string }) => {
    return (
        <header className="menu__modal-heading">
            <p>{title}</p>
        </header>
    );
};

export default MenuHeading;
