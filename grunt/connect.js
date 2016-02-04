module.exports = {
	server: {
       options: {
            port: 9000,
            open: true,
            livereload: 35729,
            // Change this to '0.0.0.0' to access the server from outside
            hostname: 'localhost',
            base: 'dist'
        },
    }
};