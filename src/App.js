import React from 'react';
import './main.css';
import {ReactComponent as Logo} from './images/profile.svg';
import {ReactComponent as LineSVG} from './images/line.svg';
import {ReactComponent as FacebookSVG} from './images/facebook.svg';
import {ReactComponent as DialogueSVG} from './images/dialogue.svg';
import {ReactComponent as RabbitSVG} from './images/rabbit.svg';
import {ReactComponent as GraphSVG} from './images/graph.svg';
import useScript from './hooks/useScript';

export default function App() {

	useScript('https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1');
	useScript('https://d.line-scdn.net/r/web/social-plugin/js/thirdparty/loader.min.js');


	return (
		<div id="main">
			<Logo id="logo"/>
			<div id="description" className="section">
				<h1>NongHedss</h1>
				<p>
					NongHed is your personal assistant who could provide you with
						up-to-date economic and financial data for Thailand.
				</p>
				<p>
					Simply chat using the icon in the corner below,
						or add NongHed as a friend on LINE or Facebook!
				</p>
			</div>
			<div id="add" className="section">
				<div className="social-button-wrapper">
					<a href="https://lin.ee/biOThlf" target="_blank" rel="noopener noreferrer">
						<div className="social-button color-line">
							<LineSVG />
							Add Friend
						</div>
					</a>
				</div>
				<div className="social-button-wrapper">
					<a href="https://www.facebook.com/nonghed.bot" target="_blank" rel="noopener noreferrer">
						<div className="social-button color-facebook">
							<FacebookSVG />
							Facebook
						</div>
					</a>
				</div>
			</div>
			<div id="features" className="section">
				<div>
					<DialogueSVG />
					Natural
				</div>
				<div>
					<RabbitSVG />
					Fast
				</div>
				<div>
					<GraphSVG />
					Accurate
				</div>
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