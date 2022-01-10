import './Works.scss';

const Works = () => {
	return (
		<div className="works" id="works">
			<div className="slider">
				<div className="container">
					<div className="item">
						<div className="left">
							<div className="left-container">
								<div className="img-container">
									<img src="assets/mobile.png" alt="Mobile" />
								</div>
								<h2>Title</h2>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. At perferendis
									accusantium laborum neque nihil modi, iure, officia explicabo error recusandae aut
									odio tenetur officiis! Unde, nobis perspiciatis? Dolores, ipsam sint.
								</p>
								<span>Projects</span>
							</div>
						</div>
						<div className="right"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Works;
