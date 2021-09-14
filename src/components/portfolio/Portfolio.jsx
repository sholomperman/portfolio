import './portfolio.scss';
import PortfolioList from '../portfolioList/PortfolioList';
import { useState, useEffect } from 'react';
import { DataApps, DataCode } from './dataPortfolio';
import {  wight, bgWight, bgBlack, black } from '../../globalStyles';

const Portfolio = ({ onNoff }) => {
    

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
        <div style={onNoff ? bgBlack : bgWight} className='portfolio' id='portfolio'>
            <h1 style={onNoff ? wight : black}>Portfolio</h1>
            <ul>
                {list?.map((i) => (
                    <PortfolioList
                        onNoff={onNoff}
                        title={i.title}
                        id={i.id}
                        active={i.id === selected}
                        setSelected={setSelected}
                    />
                ))}
            </ul>
            <div className="container">
            {data?.map(i => (
                <div className="item" id='item'>
                    <a className='link' href={i.link} target="_blank" rel="noreferrer">
                        <img src={i.img} alt={i.title}/>
                    <h3>{i.title}</h3>
                    </a>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Portfolio
