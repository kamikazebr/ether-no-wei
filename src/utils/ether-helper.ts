export {}

export function convertEtherWithDecimals(value: string, dec: number): string {
  let s = undefined
  try {
    const wei = BigInt(value)
    const bigDec = BigInt(10 ** dec)
    const ether1 = wei / bigDec
    const wei_ether1 = ether1 * bigDec
    const ether2 = wei - wei_ether1
    s = ether1 + "." + ether2
  } catch (error) {
    console.log(error)
  }
  return s
}
