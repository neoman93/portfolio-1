import './PortfolioList.scss';

const PortfolioList = ({ id, title, active, setSelected }) => {
	return (
		<li className={`portfolio-list ${active ? 'active' : ''}`} onClick={() => setSelected(id)}>
			{title}
		</li>
	);
};

export default PortfolioList;
