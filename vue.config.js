module.exports = {
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = 'Some Star Wars Page';
                return args;
            });
    }
};
