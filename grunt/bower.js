module.exports = {

   
  dev: {
    dest: 'dist/',
    js_dest: 'dist/scripts/vendor',
    css_dest: 'dist/styles/vendor',
    options: {
      keepExpandedHierarchy: false,
      packageSpecific: {
        'html5shiv': {
          files: [
            "dist/html5shiv-printshiv.min.js"
          ]
        }
      }
    }
  }


};