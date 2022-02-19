const tintColorLight = '#2f95dc'
const tintColorDark = '#f2f2f2'

const tintColorGray = '#c9c9c9'
const tintColorBlue = '#203699'
const tintColorOrange = '#e84b32'

export default {
  light: {
    // text: '#000',
    // background: '#fff',
    // tint: tintColorLight,
    // tabIconDefault: '#ccc',
    // tabIconSelected: tintColorLight,
    text: tintColorBlue,
    background: tintColorDark,
    tint: tintColorOrange,
    tabIconDefault: tintColorOrange,
    tabIconSelected: tintColorOrange,
  },
  colorful: {
    text: tintColorOrange,
    background: tintColorGray,
    tint: tintColorGray,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorGray,
  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  },
}
