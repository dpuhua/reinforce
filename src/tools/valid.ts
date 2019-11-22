export default class Valid {
  public static validMobile(mobile: string): boolean {
    const mobileReg = /^1[0-9]{10}$/
    return mobileReg.test(mobile)
  }
}
