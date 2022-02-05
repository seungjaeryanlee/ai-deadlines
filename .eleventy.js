const yaml = require("js-yaml");

module.exports = function(eleventyConfig) {
    eleventyConfig.addDataExtension("yml", contents => yaml.load(contents));

    eleventyConfig.addFilter("jsonify", JSON.stringify);

    eleventyConfig.addPassthroughCopy("static");

    return {
        dir: {
            includes: "_includes",
            layouts: "_layouts",
        }
    }
};
