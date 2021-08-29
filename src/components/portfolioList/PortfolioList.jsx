import './portfolioList.scss'

const PortfolioList = ({title, active, setSelected, id}) => {
    return (
        <div className={active ? 'portfolioList active' : 'portfolioList'} onClick={()=> {setSelected(id)}}>
            {title}
        </div>
    )
}

export default PortfolioList
