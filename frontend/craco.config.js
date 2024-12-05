const path = require("path");

module.exports = {
    webpack: {
        alias: {
            "@components": path.resolve(__dirname, "src/components"),
            "@services": path.resolve(__dirname, "src/services"),
            "@models": path.resolve(__dirname, "src/models"),
            "@pages": path.resolve(__dirname, "src/pages")
        },
    },
};