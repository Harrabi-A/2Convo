import {JSEncrypt} from 'jsencrypt';

// Generate a RSA key pair using the `JSEncrypt` library.
var crypt = new JSEncrypt({default_key_size: 2048});
var PublicPrivateKey = {
    ownPublicKey: crypt.getPublicKey(),
    ownPrivateKey:crypt.getPrivateKey()
};

export const Keys = ( keysValue = PublicPrivateKey, action  ) => {
    return keysValue
}

export default Keys;