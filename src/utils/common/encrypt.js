import CryptoJS from 'crypto-js'
export default function encrypt(word, key, iv) {
  var srcs = CryptoJS.enc.Utf8.parse(word)
  var key = CryptoJS.enc.Utf8.parse(key)
  var iv = CryptoJS.enc.Utf8.parse(iv)
  var encrypted = CryptoJS.AES.encrypt(srcs, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  })
  return encrypted.ciphertext.toString().toUpperCase()
}
