module.exports = {

    options: {
        spawn: false,
        livereload: true
    },

    html:{
        files:[
            'src/*.html'
        ],
        tasks:[
            'copy:html'
        ]
    },

     json:{
        files:[
            'src/scripts/*.json'
        ],
        tasks:[
            'copy:json'
        ]
    },

    images:{
        files:[
            'src/images/*'
        ],
        tasks:[
            'copy:images'
        ]

    },

    scripts: {
        files: [
            'src/scripts/*.js'
        ],
        tasks: [
            'jshint',
            'concat:dev'
        ]
    },

    styles: {
        files: [
            'src/styles/**/*.scss'
        ],
        tasks: [
            'sass:dev',
            'postcss:dev'
        ]
    },

    styles_prefix: {
        files: [
            'dist/styles/*.css'
        ],
        tasks: [
            'postcss:dev'
        ]
    },
};
