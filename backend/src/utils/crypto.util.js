import bcrypt from 'bcryptjs'

export default class CryptoUtil {

  static createHash(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
  }


  static isValidPassword(password, hashPassword) {
    return bcrypt.compareSync(password, hashPassword);
  }
}
