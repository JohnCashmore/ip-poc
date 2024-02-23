import { getIps } from 'helpers/getIps';

(() => {
	const data = getIps();
	console.log(data.join('\n'));
})();
