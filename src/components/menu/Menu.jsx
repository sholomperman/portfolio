import './menu.scss'


const Menu = ({ menu, setMenu }) => {

    const handelChange = () => {
        setMenu(false)
    }


    return (
        <div className={'menu ' + (menu && 'active')}>
            <ul>
                <li onClick={handelChange}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={handelChange}>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li onClick={handelChange}>
                    <a href="#testimonials">Testimonials</a>
                </li>
                <li onClick={handelChange}>
                    <a href="#work">Work</a>
                </li>
                <li onClick={handelChange}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    )
}

export default Menu
