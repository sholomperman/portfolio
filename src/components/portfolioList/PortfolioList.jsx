import './portfolioList.scss'

const PortfolioList = ({title, active, setSelected, id}) => {
    return (
        <p className={active ? 'portfolioList active' : 'portfolioList'} onClick={()=> {setSelected(id)}}>
            {title}
        </p>
    )
}

export default PortfolioList
