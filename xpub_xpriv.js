// require necessary libs, get entropy, and create a key
const HDKey = require('hdkey');
const seed = require('crypto').randomBytes(64);
const hdkey = HDKey.fromMasterSeed(seed);

// to keep for other future uses
console.log("seed :- ",seed.toString('hex'));
console.log("hdkey.privateExtendedKey :- ",hdkey.privateExtendedKey);
console.log("hdkey.privateExtendedKey :- ",hdkey.privateExtendedKey);

// deriving the key for complex use (detailed in sip32)
const complexKey = hdkey.derive("m/3000'/0'");

// this will output expected private key used in configs
console.log("complexKey.privateExtendedKey :- ",complexKey.privateExtendedKey);

// for this config value in complex
let options = {};
options.networkPrivateExtendedKey = complexKey.privateExtendedKey;

// this is the key used in contracts and contacts
console.log("complexKey.publicExtendedKey :- ",complexKey.publicExtendedKey);