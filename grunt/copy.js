
module.exports = {
html: {
    expand: true,
    cwd: 'src/docs',
    src: '**',
    dest: 'dist/',
    flatten: true,
    filter: 'isFile',
  },

  images: {
    expand: true,
    cwd: 'src/images',
    src: '**',
    dest: 'dist/images',
    flatten: true,
    filter: 'isFile',
  },

  json: {
    expand: true,
    cwd: 'src/scripts',
    src: '**/*.json',
    dest: 'dist/scripts',
    flatten: true,
    filter: 'isFile',
  },

  vendor: {
    expand: true,
    cwd: 'src/scripts/vendor',
    src: '**/*.js',
    dest: 'dist/scripts/vendor',
    flatten: true,
    filter: 'isFile',
  },

};