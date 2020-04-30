import React, { Fragment } from 'react';
import spinner from './spinner.gif';

export default () => {
	const imgStyle = { width: '200px', margin: 'auto', display: 'block' };
	return (
		<Fragment>
			<img
				src={spinner}
				style={imgStyle}
				alt='loading...'
			/>
		</Fragment>
		);
}