import crypto from 'crypto';

const { ENCRYPTION_KEY, INITIALIZATION_VECTOR } = process.env;

export function encrypt(text: string) {
	if (!ENCRYPTION_KEY) {
		throw new Error('Missing ENCRYPTION_KEY');
	}
	if (!INITIALIZATION_VECTOR) {
		throw new Error('Missing INITIALIZATION_VECTOR');
	}
	const cipher = crypto.createCipheriv(
		'aes-256-cbc',
		Buffer.from(ENCRYPTION_KEY),
		Buffer.from(INITIALIZATION_VECTOR),
	);
	let crypted = cipher.update(text, 'utf8', 'hex');
	crypted += cipher.final('hex');
	return crypted;
}

export function decrypt(text: string) {
	if (!ENCRYPTION_KEY) {
		throw new Error('Missing ENCRYPTION_KEY');
	}
	if (!INITIALIZATION_VECTOR) {
		throw new Error('Missing INITIALIZATION_VECTOR');
	}
	const decipher = crypto.createDecipheriv(
		'aes-256-cbc',
		Buffer.from(ENCRYPTION_KEY),
		Buffer.from(INITIALIZATION_VECTOR),
	);
	let dec = decipher.update(text, 'hex', 'utf8');
	dec += decipher.final('utf8');
	return dec;
}
