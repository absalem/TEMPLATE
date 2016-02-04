module.exports = {

	
    dev: {
      src: ['src/scripts/*.js'],
      dest: 'dist/scripts/script.js',
    },
    prod: {
      src: ['src/main.js', 'src/extras.js'],
      dest: 'dist/with_extras.js',
    },
  

};