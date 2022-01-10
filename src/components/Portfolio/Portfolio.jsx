import { useState, useEffect } from 'react';
import {
	featuredPortfolio,
	webPortfolio,
	mobilePortfolio,
	designPortfolio,
	contentPortfolio,
} from '../../data';

import PortfolioList from '../PortfolioList/PortfolioList';
import './Portfolio.scss';
const Portfolio = () => {
	const [selected, setSelected] = useState('featured');
	const [data, setData] = useState([]);

	const list = [
		{
			id: 'featured',
			title: 'Featured',
		},
		{
			id: 'webapp',
			title: 'Web App',
		},
		{
			id: 'mobileapp',
			title: 'Mobile App',
		},
		{
			id: 'design',
			title: 'Design',
		},
		{
			id: 'branding',
			title: 'Braning',
		},
	];

	useEffect(() => {
		switch (selected) {
			case 'featured': {
				setData(featuredPortfolio);
				break;
			}
			case 'webapp': {
				setData(webPortfolio);
				break;
			}
			case 'mobileapp': {
				setData(mobilePortfolio);
				break;
			}
			case 'design': {
				setData(designPortfolio);
				break;
			}
			case 'branding': {
				setData(contentPortfolio);
				break;
			}

			default:
				setData(featuredPortfolio);
		}
	}, [selected]);

	return (
		<div className="portfolio" id="portfolio">
			<h1>Portfolio</h1>
			<ul>
				{list.map((item) => (
					<PortfolioList
						id={item.id}
						key={item.id}
						title={item.title}
						active={selected === item.id}
						setSelected={setSelected}
					/>
				))}
			</ul>
			<div className="container">
				{data.map((data) => (
					<div className="item">
						<img src={data.img} alt="data.title" />
						<h3>{data.title}</h3>
					</div>
				))}
			</div>
		</div>
	);
};

export default Portfolio;
