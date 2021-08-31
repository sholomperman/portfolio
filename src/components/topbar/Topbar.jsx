import './topbar.scss'

const Topbar = ({ menu, setMenu }) => {



    return (
        <div className={'topbar ' + (menu && 'active')}>
            <div className="wrapper">
                <div className="left">
                    <a onClick={() => { setMenu(menu ? false : null); }} href="#intro" className='logo'>S.P Dev</a>
                </div>
                <div className="right">
                    <div className='hamburger' onClick={()=>{setMenu(!menu)}}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Topbar
