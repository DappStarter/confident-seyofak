require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi office spot edge rescue spawn purpose grace slice sunset segment'; 
let testAccounts = [
"0x4b5ac14e29c2ef091044aab150ec5cbee68b32c8c6ae789ceb59cdd131c7fc21",
"0x5f2b4aed30fcc8961364bbd4b95f77f56a667556ff3f1bf78ad653eef0040e4d",
"0xd2c7e72fa851ac26a4fefa7fe8cb0dca738c40d511ea62bb69620f8134825c15",
"0x49f38e37d4c15ea04f5192bfc2a2ee4e4d282a94e5cd3be0f09172c9a1672dd4",
"0xcc5cc05890a397fbaf7ab0a9001a5e20db64aed21a5a8bb27b87028a5693e7f9",
"0xb7293049e0ec352ea0dd4bf5f5fb9aa82d657b084ba4395c7dcea9798d7cefa4",
"0x3809e4d5b064aad1148fa3be6d8b0cb3cf480e07a738b8f0d70fb8f565cf64bf",
"0xa5052c0ca7b9e868d081a4f62210a030e4986c916934d7dde9b6bd090c5f079f",
"0x31fdbe716a169719f24ea071bba8038ef83a82cb8f3616ef02c6c76937a35954",
"0x183eb5e950d5f6bbf20334442f83067bd8cdc78b93a77c033499b3db5272d2a2"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
