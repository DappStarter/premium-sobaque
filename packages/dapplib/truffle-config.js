require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty forget spray fine note soap unable gesture merry flock gather'; 
let testAccounts = [
"0xf0cca7e37e650db4629dbcc4d3dabba252d4dd1995c7f53a7ade0211eaca06b1",
"0xa27a84fe94dddea2a025fca62a8fdc2294d6c3bfc6cbeea6b8d3de5efe4c3344",
"0x9b93f777ee80a2d32ac1e5fc53816aaf9bb9ab4dc6c54735413e94ae53836113",
"0xec5348944fc2577378dbf7d166fe7babad05c3bf79957ca35c0fc331cc8d21ea",
"0x22b2a871664ccb61f4ac710501bddf29bc445efaaf9ee978a6ad2de7f41c01d0",
"0x8fba08cdaddae2f4195a59d68d3e1210825fe0cda9927f7671d17bf42f40f6af",
"0x70459a4dfced01d6e88306b0d320a56c2fc242edbf172a246fb3ac3947166aef",
"0xadf682d59e2693937485d13457826d1aef6560aa816a3b0b5c17e8dc845d9d08",
"0xb4a2e5ab94df7d1dfed99e45d4f259c0c0bf6162a77b994d4e507ff20b12d2bc",
"0x868c065391769f87a6b534ee3a2597297f9d61388128016577bb0a387d7f4cdc"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
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
            version: '^0.8.0'
        }
    }
};

