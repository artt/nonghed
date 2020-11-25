import React from 'react';
import './main.css';
import {ReactComponent as LineSVG} from './images/line.svg';
import {ReactComponent as FacebookSVG} from './images/facebook.svg';
import {ReactComponent as DialogueSVG} from './images/dialogue.svg';
import {ReactComponent as GraphSVG} from './images/graph.svg';
import {ReactComponent as PiggySVG} from './images/piggy.svg';
import {ReactComponent as KofiSVG} from './images/kofi.svg';
import {ReactComponent as QRSVG} from './images/qr.svg';
import {ReactComponent as QRLineSVG} from './images/qr-line.svg';
import QRPromptPaySVG from './images/qr-promptpay.svg';
import useScript from './hooks/useScript';
import NongHed from './NongHed/NongHed'
import ReactGA from 'react-ga'

export default function App() {

	useScript('https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1');
	useScript('https://d.line-scdn.net/r/web/social-plugin/js/thirdparty/loader.min.js');

	React.useEffect(() => {
		ReactGA.initialize('UA-2995735-6')
		ReactGA.pageview('landing')
	}, [])

	return (
		<div id="main">

			<div id="header" className="section">
				{/*<Logo id="logo" />*/}
				<div id="logo">
					<NongHed />
				</div>
				<div id="description">
					<h1>NongHed</h1>
					<p>
						NongHed is your personal assistant who could provide you with
							up-to-date economic and financial data for Thailand.
						Simply chat using the icon in the corner below,
							or add NongHed as a friend on LINE or Facebook!
					</p>
					<p>
						Read more about me on <a href="https://artt.github.io/blog/2020/nonghed/" target="_blank" rel="noopener noreferrer">this blog post</a>.
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
						<span className="tooltip"><QRLineSVG /></span>
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
							Powered by <a href="https://cloud.google.com/dialogflow/docs/" target="_blank" rel="noopener noreferrer">Dialogflow</a>,
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
							With data updated daily from the <a href="https://apiportal.bot.or.th/bot/public/" target="_blank" rel="noopener noreferrer">Bank of Thailand</a> as well as live data from other sources,
								you can be sure that the data you get is up to date.
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

			<div id="changelog" className="section">
				<h2>Changelog</h2>
				<table>
					<tbody>
						<tr>
							<th>20.11.18</th>
							<th>Added price indices data from MOC</th>
						</tr>
						<tr>
							<th>20.09.20</th>
							<th>Initial public release</th>
						</tr>
						<tr>
							<th>20.07.30</th>
							<th>Added foreign exchange data</th>
						</tr>
						<tr>
							<th>20.07.27</th>
							<th>Facebook chatbot</th>
						</tr>
						<tr>
							<th>19.10.20</th>
							<th>Implement yield curve</th>
						</tr>
						<tr>
							<th>19.08.08</th>
							<th>Unofficial launch</th>
						</tr>
						<tr>
							<th>19.07.28</th>
							<th>Automatic daily database update</th>
						</tr>
						<tr>
							<th>19.07.16</th>
							<th>Initial GitHub commit</th>
						</tr>
					</tbody>
				</table>
			</div>

			<div id="support" className="section">
				<h2>Support me</h2>
				<p>
					If you find NongHed useful,
						please consider supporting me by buying me a cup of coffee,
						or, if you're in Thailand, do it via PromptPay!
				</p>
				<div className="social-button-wrapper">
					<a href="https://ko-fi.com/L3L625FLR" target="_blank" rel="noopener noreferrer">
						<div className="social-button color-kofi">
							<KofiSVG />
							Buy me a coffee
						</div>
					</a>
				</div>
				<div className="social-button-wrapper">
					<a href={QRPromptPaySVG} target="_blank" rel="noopener noreferrer">
						<div className="social-button color-qr">
							<QRSVG />
							PromptPay me
						</div>
					</a>
					<span className="tooltip"><img src={QRPromptPaySVG} alt="QR code for PromptPay" /></span>
				</div>
			</div>
			
			<div id="contact" className="section">
				<h2>Contact</h2>
				<p>
					Please email <a href="mailto:nonghed.bot@gmail.com">nonghed.bot@gmail.com</a> with any questions or suggestions.
				</p>
			</div>

			<div id="bottom" className="section">
			</div>
			
			<df-messenger
				intent="WELCOME"
				chat-title="NongHed"
				agent-id="38a9f586-a309-460a-a966-d921f92bb809"
				language-code="en"
				wait-open={true}
			/>
		</div>
	);
}
