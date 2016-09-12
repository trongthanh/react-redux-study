/* © 2016 NauStud.io
 * @author
 */
// eslint-disable-next-line
import React from 'react'; // Since we're using JSX-syntax for <App/> as below, React module is required here
import { AppContainer } from 'react-hot-loader';
import { App } from './App';
import ReactDOM from 'react-dom';

let rootEl = document.getElementById('app');

ReactDOM.render(
	<AppContainer>
		<App/>
	</AppContainer>,
	rootEl
);

if (module.hot) {
	module.hot.accept('./App', () => {
		// If you use Webpack 2 in ES modules mode, you can
		// use <App /> here rather than require() a <NextApp />.
		const NextApp = require('./App').App;
		ReactDOM.render(
			<AppContainer>
				<NextApp />
			</AppContainer>,
			rootEl
		);
	});
}
