const CracoAntDesignPlugin = require("craco-antd")

export default module.exports = {
    plugins: [
        {
            plugin: CracoAntDesignPlugin,
            options: {
                customizeTheme: {
                    "@primary-color": "#1DA57A",
                    "@link-color": "#1DA57A",
                    "@border-radius-base": "2px"
                }
            }
        }
    ]
};
