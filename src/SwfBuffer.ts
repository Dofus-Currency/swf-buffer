import { SmartBuffer } from 'smart-buffer'

type Rect = {
  nBits: number
  xMin: number
  xMax: number
  yMin: number
  yMax: number
}

export default class SwfBuffer extends SmartBuffer {
  private _readBitOffset = 1
  private _byte: number = undefined

  /**
   * Read n bits from Buffer
   * @param {number} n - Number of bit to read
   * @return {number} n bits value
   */
  private readBits(n: number): number {
    let result = 0

    for (let i = 0; i < n; i++) {
      if (this._byte === undefined || this._readBitOffset > 8) {
        this._byte = this.readUInt8()
        this._readBitOffset = 1
      }

      result = (result << 1) + ((this._byte >> (8 - this._readBitOffset)) & 1)
      this._readBitOffset++
    }

    return result
  }

  /**
   *  Read RECT Structure from Buffer
   *  @return {Rect} A Rect Object
   */
  public readRect(): Rect {
    const nBits = this.readBits(5)

    return {
      nBits,
      xMin: this.readBits(nBits),
      xMax: this.readBits(nBits),
      yMin: this.readBits(nBits),
      yMax: this.readBits(nBits),
    }
  }
}
