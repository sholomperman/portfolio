import './portfolio.scss'
import PortfolioList from '../portfolioList/PortfolioList'
import { useState, useEffect } from 'react';
import { DataApps, DataCode } from './dataPortfolio'

const Portfolio = () => {
    

    const [data, setData] = useState([])
    const [selected, setSelected] = useState('apps')
    const list = [
        {
            id: 'apps',
            title: 'Apps'
        },
        {
            id: 'code',
            title: 'Code'
        }
    ]



    
    useEffect(() => {
        switch (selected) {
            case 'apps':
                setData(DataApps)
                break;
            case 'code':
                setData(DataCode)
                break;
            default:
                setData(DataApps)
        }
    }, [selected])



    return (
        <div className='portfolio' id='portfolio'>
            <h1>Portfolio</h1>
            <ul>
                {list?.map((i) => (
                    <PortfolioList
                        title={i.title}
                        id={i.id}
                        active={i.id === selected}
                        setSelected={setSelected}
                    />
                ))}
            </ul>
            <div className="container">
            {data?.map(i => (
            <div className="item">
            <a className='link' href={i.link} target="_blank">
            <img src={i.img} />
            <h3>{i.title}</h3>
            </a>
            </div>
            ))}
            </div>
        </div>
    )
}

export default Portfolio
