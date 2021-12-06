import React, { Fragment, useState } from 'react';

import Header from '../../common/Header';
import Footer from '../../common/Footer';
import './style.css';

const Attraction = (props) => {
	const MAP_NAMES = {
		lidaCastle: 'LIDA_CASTLE',
		kurganSlavy: 'KURGAN_SLAVY',
		kostel: 'KOSTEL',
		time: 'TIME',
		sobor: 'SOBOR',
		zavod: 'ZAVOD',
		banshik: 'BANSHIK',
		skorina: 'SKORINA',
		gostiniza: 'gostiniza',
	};
	const [mapName, setMapName] = useState('LIDA_CASTLE');
	return (
		<Fragment>
			<Header />
			<div className="side">
				<div className="side__content">
					<div className="side__button" onClick={() => setMapName('LIDA_CASTLE')}>
						Лидский замок
					</div>
					<div className="side__button" onClick={() => setMapName('KURGAN_SLAVY')}>
						Курган славы
					</div>
					<div className="side__button" onClick={() => setMapName('KOSTEL')}>
						Костел Воздвижения Святого Креста
					</div>
					<div className="side__button" onClick={() => setMapName('TIME')}>
						Солнечные часы
					</div>
					<div className="side__button" onClick={() => setMapName('SOBOR')}>
						Лидский Собор
					</div>
					<div className="side__button" onClick={() => setMapName(MAP_NAMES.zavod)}>
						Лидский Пивзавод
					</div>
					<div className="side__button" onClick={() => setMapName(MAP_NAMES.banshik)}>
						Скульптура банщика васи
					</div>
					<div className="side__button" onClick={() => setMapName(MAP_NAMES.skorina)}>
						Скульптура Франциску Скорина
					</div>
					<div className="side__button" onClick={() => setMapName(MAP_NAMES.gostiniza)}>
						Гостиница Лида
					</div>
				</div>
			</div>
			{mapName === MAP_NAMES.lidaCastle ? (
				<iframe
					src="https://www.google.com/maps/embed?pb=!4v1638800761867!6m8!1m7!1sCAoSLEFGMVFpcE5lZXh3SlA3ck90c3lmdElrUERxNkNrTG1hZTNmdlYxV0N6bGt3!2m2!1d53.88720619999999!2d25.3031525!3f11.683771047264528!4f-9.025134127067801!5f0.7820865974627469"
					width="100%"
					height="750"
					allowFullScreen=""
					loading="lazy"
				></iframe>
			) : (
				''
			)}
			{mapName === MAP_NAMES.kurganSlavy ? (
				<iframe
					src="https://www.google.com/maps/embed?pb=!4v1638807302132!6m8!1m7!1sCAoSLEFGMVFpcE12X2FLZFh0WlhYakJwczJUOGZhVUdXdzJSYzFVWFNSS2xBOTlF!2m2!1d53.8923199!2d25.314622!3f65.5749646178924!4f-1.4980588756193924!5f0.7820865974627469"
					width="100%"
					height="750"
					allowFullScreen=""
					loading="lazy"
				></iframe>
			) : (
				''
			)}
			{mapName === MAP_NAMES.kostel ? (
				<iframe
					src="https://www.google.com/maps/embed?pb=!4v1638807857194!6m8!1m7!1sCAoSLEFGMVFpcE1tSHU3VTBzaUo3OFh3T0lMTDBuZjRud1d4emR0UGJqRDJPcExY!2m2!1d53.8892605!2d25.3028548!3f336.2412764521848!4f8.29730115290873!5f0.7820865974627469"
					width="100%"
					height="750"
					allowFullScreen=""
					loading="lazy"
				></iframe>
			) : (
				''
			)}
			{mapName === MAP_NAMES.time ? (
				<iframe
					src="https://www.google.com/maps/embed?pb=!4v1638808078583!6m8!1m7!1sCAoSLEFGMVFpcE5TaXdSdWNURkZsck5Fa2lWb3FKWjZFMkVuSXdpTE1WREdQVjU4!2m2!1d53.68665859999999!2d23.8323243!3f3.195104546131522!4f-25.067499402865593!5f0.7820865974627469"
					width="100%"
					height="750"
					allowFullScreen=""
					loading="lazy"
				></iframe>
			) : (
				''
			)}
			{mapName === MAP_NAMES.sobor ? (
				<iframe
					src="https://www.google.com/maps/embed?pb=!4v1638808411067!6m8!1m7!1sCAoSLEFGMVFpcE9CdEpkZ01CNFY2WXZJeENkRkxQdlZrN0lNcEJDTXZUcno2aE9H!2m2!1d53.89376619999999!2d25.3028225!3f7.810219298911775!4f19.98654045189427!5f0.7820865974627469"
					width="100%"
					height="750"
					allowFullScreen=""
					loading="lazy"
				></iframe>
			) : (
				''
			)}
			{mapName === MAP_NAMES.zavod ? (
				<iframe
					src="https://www.google.com/maps/embed?pb=!4v1638811327037!6m8!1m7!1sCAoSLEFGMVFpcFBrcHRZWWYydUlQSEJGNjVoQUxiRDhYbnVjY2V3bE5RUFh2OG1V!2m2!1d53.8971340929447!2d25.30290344917295!3f130.73058683667347!4f-7.575269293518957!5f0.7820865974627469"
					width="100%"
					height="750"
					allowFullScreen=""
					loading="lazy"
				></iframe>
			) : (
				''
			)}
			{mapName === MAP_NAMES.banshik ? (
				<iframe
					src="https://www.google.com/maps/embed?pb=!4v1638811606143!6m8!1m7!1sCAoSLEFGMVFpcE5URVhqUDhjaXI2aDJxRktJMVA1UVl3b3VRd3NpcjFYR0gxanBN!2m2!1d53.8905243!2d25.3007626!3f348.93885736571303!4f-25.545823419934408!5f0.7820865974627469"
					width="100%"
					height="750"
					allowFullScreen=""
					loading="lazy"
				></iframe>
			) : (
				''
			)}
			{mapName === MAP_NAMES.skorina ? (
				<iframe
					src="https://www.google.com/maps/embed?pb=!4v1638811863953!6m8!1m7!1sCAoSLEFGMVFpcE1kUzZhUWZtVjBWNk1SMTVyUHdzMEszYzlnZklFRHdrM1RESG1Y!2m2!1d53.8897877!2d25.3031968!3f348.7463582933814!4f3.0901020754302806!5f0.7820865974627469"
					width="100%"
					height="750"
					allowFullScreen=""
					loading="lazy"
				></iframe>
			) : (
				''
			)}
			{mapName === MAP_NAMES.gostiniza ? (
				<iframe
					src="https://www.google.com/maps/embed?pb=!4v1638812002838!6m8!1m7!1sCAoSLEFGMVFpcE54Z0NIc1I1M01ZRmhQeGoxZExXbWdlX0p2ZzVCaE9ldjA4VUFC!2m2!1d53.8885231!2d25.3036514!3f98.28283498067215!4f0.5259699315781461!5f0.7820865974627469"
					width="100%"
					height="750"
					allowFullScreen=""
					loading="lazy"
				></iframe>
			) : (
				''
			)}
			<Footer />
		</Fragment>
	);
};

export default Attraction;
