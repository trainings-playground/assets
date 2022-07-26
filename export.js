// fix process.env used by react
window.process = { env: 'production' };

const react = { exports: window.React };

export { react as r };