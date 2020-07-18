import SwfBuffer from '../src/SwfBuffer'

describe(':: SwfBuffer', () => {
  it("It should read RECT structure", () => {
    const buffer = new SwfBuffer({
      buff: Buffer.from([0x78,0x00,0x05,0x5F,0x00,0x00,0x0F,0xA0,0x00]),
    })

    expect(buffer.readRect()).toEqual({
      nBits: 15,
      xMin: 0,
      xMax: 11000,
      yMin: 0,
      yMax: 8000,
    })
  })
})