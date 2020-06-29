import React from 'react';
import './style.css'
const NotFoud = ({ location }) => {
	const { message, description, cssClass } = location;

	return (
		<div id="notfound">
			<div class="notfound">
				<div class="notfound-404">
					<h1>4<span className={cssClass}></span>{message ? 3 : 4}</h1>
				</div>
				<h2>Oops! {message ?? `Page Not Be Found`}</h2>
				<p>{description ?? 'Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable'}</p>
				<a href="/">Back to homepage</a>
			</div>
		</div>
	);
}

export default NotFoud;

