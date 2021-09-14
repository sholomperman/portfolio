import './portfolioList.scss';
import { wight } from '../../globalStyles'

const PortfolioList = ({title, active, setSelected, id, onNoff}) => {
    return (
        <p style={onNoff ? wight : null} className={active ? 'portfolioList active' : 'portfolioList'} onClick={()=> {setSelected(id)}}>
            {title}
        </p>
    )
}

export default PortfolioList
