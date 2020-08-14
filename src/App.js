import React from 'react';
import './main.css';
import {ReactComponent as Logo} from './profile.svg';
import useScript from './hooks/useScript';

export default function App() {

	useScript('https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1');
	useScript('https://d.line-scdn.net/r/web/social-plugin/js/thirdparty/loader.min.js');


	return (
		<div id="main">
			<Logo id="logo"/>
			<div id="description">
				NongHed is your personal assistant who could provide you with
					up-to-date economic and financial data for Thailand.
				Simply chat using the icon in the corner below,
					or add NongHed as a friend on LINE or Facebook!
			</div>
			<div id="add">
				<div className="social-button color-line">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 326.2 310.9">
						<path fill="white" d="M163.1,0C73.2,0,0,59.4,0,132.4C0,197.8,58,252.6,136.4,263c19.1,4.1,16.9,11.1,12.6,36.8
	c-0.7,4.1-3.3,16.1,14.1,8.8c17.4-7.3,93.9-55.3,128.2-94.7c23.6-26,34.9-52.3,34.9-81.5C326.2,59.4,253,0,163.1,0z M105.5,171.3
	c0,1.8-1.4,3.2-3.2,3.2H56.6c-0.9,0-1.6-0.4-2.2-0.9c-0.6-0.6-0.9-1.3-0.9-2.2v-71.1c0-1.8,1.4-3.2,3.2-3.2h11.4
	c1.8,0,3.2,1.4,3.2,3.2v56.4h31.1c1.7,0,3.1,1.5,3.1,3.2V171.3z M133.1,171.4c0,1.8-1.4,3.2-3.2,3.2h-11.4c-1.8,0-3.2-1.4-3.2-3.2
	v-71.1c0-1.8,1.4-3.2,3.2-3.2h11.4c1.8,0,3.2,1.5,3.2,3.2V171.4z M211.9,171.4c0,1.8-1.4,3.2-3.2,3.2h-11.4c-1.1,0-2.1-0.6-2.6-1.3
	l-32.6-44v42.2c0,1.8-1.4,3.2-3.2,3.2h-11.4c-1.8,0-3.2-1.4-3.2-3.2v-71.1c0-1.8,1.4-3.2,3.2-3.2h11.3c1,0,2.1,0.5,2.6,1.4l32.6,44
	v-42.2c0-1.8,1.4-3.2,3.2-3.2h11.4c1.8-0.1,3.3,1.4,3.3,3.1V171.4z M275.1,111.7c0,1.8-1.4,3.2-3.2,3.2h-31.1v12h31.1
	c1.8,0,3.2,1.4,3.2,3.2v11.5c0,1.8-1.4,3.2-3.2,3.2h-31.1v12h31.1c1.8,0,3.2,1.4,3.2,3.2v11.4c0,1.8-1.4,3.2-3.2,3.2h-45.7
	c-1.8,0-3.2-1.5-3.2-3.2v-71.1c0-1.8,1.5-3.2,3.2-3.2h45.7c1.7,0,3.1,1.5,3.2,3.2V111.7z"/>
					</svg>
					Add Friend
				</div>
				{/*
				<div class="line-it-button" data-lang="en" data-type="friend" data-lineid="@483pjbco" data-count="true" data-home="true" style={{display: 'none'}}></div>
				<a href="https://lin.ee/biOThlf"><img src="https://scdn.line-apps.com/n/line_add_friends/btn/en.png" alt="Add Friend" height="36" border="0" /></a>
				*/}
			</div>
			<df-messenger
			  intent="WELCOME"
			  chat-title="Nong Hed"
			  agent-id="38a9f586-a309-460a-a966-d921f92bb809"
			  language-code="en"
			  wait-open={true}
			/>
		</div>
	);
}

// description
// add friend, etc.
// features (fast+natural, accurate, private)
// types of data available
// contact
// 
// <a
			// 	className="App-link"
			// 	href="https://reactjs.org"
			// 	target="_blank"
			// 	rel="noopener noreferrer"
			// >
			// 	Learn React
			// </a>