import React, { Fragment } from 'react';

import Header from '../../common/Header';
import Footer from '../../common/Footer';
import './style.css';

const Attraction = (props) => {
	const mapStyles = {
		width: '100%',
		height: '100%',
	};

	return (
		<Fragment>
			<Header />
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d75219.96811211437!2d25.222166998909223!3d53.90288660936532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46de8af09a06f69b%3A0xbf80c771f0767f03!2z0JvQuNC00LA!5e0!3m2!1sru!2sby!4v1638481627976!5m2!1sru!2sby"
				width="100%"
				height="900px"
				allowFullScreen=""
				loading="lazy"
			></iframe>
			;
			<Footer />
		</Fragment>
	);
};

export default Attraction;
