import { init } from 'ityped';
import { useEffect, useRef } from 'react';

import './Intro.scss';
const Intro = () => {
	const textRef = useRef();

	useEffect(() => {
		init(textRef.current, {
			showCursor: true,
			backDelay: 1000,
			backSpeed: 60,
			strings: ['Developer', 'Designer', 'Content Creator'],
		});
	}, []);

	return (
		<div className="intro" id="intro">
			<div className="left">
				<div className="img-container">
					<img src="assets/man.png" alt="Man" />
				</div>
			</div>
			<div className="right">
				<div className="wrapper">
					<h2>Hi there, I'm</h2>
					<h1>Neo Anderson</h1>
					<h3>
						Freelance <span ref={textRef}></span>
					</h3>
				</div>
				<a href="#portfolio">
					<img src="assets/down.png" alt="down" />
				</a>
			</div>
		</div>
	);
};

export default Intro;
