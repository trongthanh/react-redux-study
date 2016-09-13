/* © 2016 NauStud.io
 * @author
 */
// eslint-disable-next-line
import React from 'react'; // Since we're using JSX-syntax for <App/> as below, React module is required here
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import { App } from './App';
import store from './store';

let rootEl = document.getElementById('app');

ReactDOM.render(
	<Provider store={store}>
		<AppContainer>
			<App/>
		</AppContainer>
	</Provider>,
	rootEl
);

if (module.hot) {
	module.hot.accept('./App', () => {
		// If you use Webpack 2 in ES modules mode, you can
		// use <App /> here rather than require() a <NextApp />.
		const NextApp = require('./App').App;
		ReactDOM.render(
			<Provider store={store}>
				<AppContainer>
					<NextApp />
				</AppContainer>
			</Provider>,
			rootEl
		);
	});
}
