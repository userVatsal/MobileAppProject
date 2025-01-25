const localStorage = {
  data: {},

  setItem: (key, value) => {
    localStorage.data[key] = value;
    console.log(`Stored ${key}: ${value}`);
  },

  getItem: (key) => {
    return localStorage.data[key];
  },

  removeItem: (key) => {
    delete localStorage.data[key];
    console.log(`Removed ${key}`);
  },

  clear: () => {
    localStorage.data = {};
    console.log('Local storage cleared');
  }
};

module.exports = localStorage;

