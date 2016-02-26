
module.exports = {

folder: {
    expand: true,
    cwd: 'src/assets',
    src: '**/*.**',
    dest: 'dist/assets',
    flatten: false,
    filter: 'isFile',
  },

html: {
    expand: true,
    cwd: 'src/',
    src: '**/*.html',
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

  vendor_js: {
    expand: true,
    cwd: 'bower_components',
    src: '**/*.min.js',
    dest: 'dist/scripts/vendor',
    flatten: true,
    filter: 'isFile',
  },
  vendor_css: {
    expand: true,
    cwd: 'bower_components',
    src: '**/*.min.js',
    dest: 'dist/scripts/vendor',
    flatten: true,
    filter: 'isFile',
  },

};