import { FILE_NAME } from 'consts/file';
import fs from 'fs';
import path from 'path';
import yargs from 'yargs/yargs';
import { isIP } from 'is-ip';
import { encrypt } from './helpers/encryption';
import { getIps } from 'helpers/getIps';
const argv = yargs(process.argv.slice(2))
	.options({
		ip: { require: true, type: 'string' },
	})
	.parseSync();
const { ip } = argv;
(() => {
	if (!isIP(ip)) {
		console.error(`INVALID IP: ${ip}`);
		return;
	}

	const data = getIps();

	if (data.includes(ip)) {
		console.warn(`${ip} is already added.`);
		return;
	}
	data.push(ip);
	data.sort();
	const filePath = path.resolve(__dirname, 'data', FILE_NAME);
	fs.writeFileSync(filePath, encrypt(JSON.stringify(data)));
	console.log(`Added ${ip} to file: ${filePath}`);
})();
