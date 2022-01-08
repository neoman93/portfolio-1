import './Topbar.scss';
import { Person, Mail } from '@material-ui/icons';
const Topbar = ({ menuOpen, setMenuOpen }) => {
	return (
		<div className={`topbar ${menuOpen ? 'active' : ''}`}>
			<div className="wrapper">
				<div className="left">
					<a href="#intro" className="logo">
						Logo
					</a>
					<div className="item-container">
						<Person className="icon" />
						<span>+1 832 706 110 709</span>
					</div>
					<div className="item-container">
						<Mail className="icon" />
						<span>yunusxon@gmail.com</span>
					</div>
				</div>
				<div className="right">
					<div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
						<span className="line1"></span>
						<span className="line2"></span>
						<span className="line3"></span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Topbar;
