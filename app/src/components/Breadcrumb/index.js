import React from 'react';

const Breadcrumb = (props) => {
	const { pageTitle, pageSubTitle } = props;

	return (
		<div className="breadcrumb-area breadcrumb-bg bg_image">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-12 breadcrumb-1">
						<h2 className="sub-title">{pageSubTitle ? pageSubTitle : 'Our Stories'}</h2>
						<h2 className="heading-title">{pageTitle ? pageTitle : 'WE CREATE AWESOME BLOG'}</h2>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Breadcrumb;




