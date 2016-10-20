module.exports = {
  config: {
    // default font size in pixels for all tabs
    fontSize: 14,

    // font family with optional fallbacks
    fontFamily: '"Source Code Pro", Menlo, "DejaVu Sans Mono", "Lucida Console", monospace',

    // terminal cursor background color and opacity (hex, rgb, hsl, hsv, hwb or cmyk)

    cursorColor: '#ff851b',
    // `BEAM` for |, `UNDERLINE` for _, `BLOCK` for █
    cursorShape: 'BLOCK',

    // color of the text
    foregroundColor: '#aaa',

    // terminal background color
    backgroundColor: '#222',

    // border color (window, tabs)
    borderColor: '#222',

    // custom css to embed in the main window
    css: '',

    // custom css to embed in the terminal window
    termCSS: '',

    // custom padding (css format, i.e.: `top right bottom left`)
    padding: '12px 12px',

    colors: {
      black: '#111111',
      red: '#ff4136',
      green: '#01ff70',
      yellow: '#ffdc00',
      blue: '#0074d9',
      magenta: '#b10dc9',
      cyan: '#7fdbff',
      white: '#dddddd',
      lightBlack: '#aaaaaa',
      lightRed: '#ff4136',
      lightGreen: '#01ff70',
      lightYellow: '#ffdc00',
      lightBlue: '#0074d9',
      lightMagenta: '#b10dc9',
      lightCyan: '#7fdbff',
      lightWhite: '#ffffff'
    },

    // the shell to run when spawning a new session (i.e. /usr/local/bin/fish)
    // if left empty, your system's login shell will be used by default
    shell: ''

    // for advanced config flags please refer to https://hyperterm.org/#cfg
  },

  // a list of plugins to fetch and install from npm
  // format: [@org/]project[#version]
  // examples:
  //   `hyperpower`
  //   `@company/project`
  //   `project#1.0.1`
  plugins: ['hyperterm-blink'],

  // in development, you can create a directory under
  // `~/.hyperterm_plugins/local/` and include it here
  // to load it and avoid it being `npm install`ed
  localPlugins: []
};
