module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://39.105.196.166:443',
                changeOrigin: true
            }
        }
    }
};