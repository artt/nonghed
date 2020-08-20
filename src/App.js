import React from 'react';
import './main.css';
import {ReactComponent as Logo} from './images/profile.svg';
import {ReactComponent as LineSVG} from './images/line.svg';
import {ReactComponent as FacebookSVG} from './images/facebook.svg';
import {ReactComponent as DialogueSVG} from './images/dialogue.svg';
import {ReactComponent as GraphSVG} from './images/graph.svg';
import {ReactComponent as PiggySVG} from './images/piggy.svg';
import useScript from './hooks/useScript';

export default function App() {

	useScript('https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1');
	useScript('https://d.line-scdn.net/r/web/social-plugin/js/thirdparty/loader.min.js');


	return (
		<div id="main">

			<div id="header" className="section">
				<Logo id="logo"/>
				<div id="description">
					<h1>NongHed</h1>
					<p>
						NongHed is your personal assistant who could provide you with
							up-to-date economic and financial data for Thailand.
						Simply chat using the icon in the corner below,
							or add NongHed as a friend on LINE or Facebook!
					</p>
				</div>
				<div id="add">
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
			</div>

			 <div id="features" className="section">
				<h2>Features</h2>
				<div id="features-container">	
					<div>
						<div>
							<DialogueSVG />
						</div>
						<div>
							<h3>Natural</h3>
							Powered by <a href="https://cloud.google.com/dialogflow/docs/">Dialogflow</a>,
								you can talk naturally with NongHed.
							There's no predefined pattern you need to memorize.
						</div>
					</div>
					<div>
						<div>
							<GraphSVG />
						</div>
						<div>
							<h3>Accurate</h3>
							With live data from the Bank of Thailand, ThaiBMA, and more,
								you can be sure that the data you get is up-to-date.
						</div>
					</div>
					<div>
						<div>
							<PiggySVG />
						</div>
						<div>
							<h3>Free</h3>
							You can ask for NongHed's help at no cost.
							We really mean it when we say, "Feel <em>free</em> to chat."
						</div>
					</div>
				</div>
			</div>

			<div id="data" className="section">
				<h2>Available data</h2>
			</div>
			
			<div id="contact" className="section">
				<h2>Contact</h2>
			</div>

			<div id="bottom" className="section">
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