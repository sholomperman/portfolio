import './portfolio.scss'
import PortfolioList from '../portfolioList/PortfolioList'
import { useState, useEffect } from 'react';
import { DataFeatures, DataWeb, DataMobile, DataDesign, DataBranding } from '../../dataPortfolio'

const Portfolio = () => {
    const [selected, setSelected] = useState('features')
    const [data, setData] = useState([])
    const list = [
        {
            id: 'features',
            title: 'Features'
        },
        {
            id: 'web',
            title: 'Web App'
        },
        {
            id: 'mobile',
            title: 'Mobile App'
        },
        {
            id: 'design',
            title: 'Design'
        },
        {
            id: 'branding',
            title: 'Branding'
        }
    ]

    useEffect(() => {

        switch (selected) {
            case 'features':
                setData(DataFeatures)
                break;
            case 'web':
                setData(DataWeb)
                break;
            case 'mobile':
                setData(DataMobile)
                break;
            case 'design':
                setData(DataDesign)
                break;
            case 'branding':
                setData(DataBranding)
                break;
            default:
                setData(DataFeatures)
        }

    }, [selected])
    return (
        <div className='portfolio' id='portfolio'>
            <h1>Portfolio</h1>
            <ul>
                {list.map((i) => (
                    <PortfolioList
                        title={i.title}
                        id={i.id}
                        active={i.id === selected}
                        setSelected={setSelected}
                    />
                ))}
            </ul>
            <div className="container">
                {data.map(i => (
                        
                <div className="item">
                <img src={i.img} alt="" />
                <h3>{i.title}</h3>
                </div>
                    ))}
            </div>
        </div>
    )
}

export default Portfolio
