const yaml = require("js-yaml");

module.exports = function(eleventyConfig) {
    eleventyConfig.addDataExtension("yml", contents => yaml.load(contents));

    eleventyConfig.addFilter("jsonify", JSON.stringify);
    eleventyConfig.addFilter("parseCollection", function(obj) {
        return obj.map(function(element) {
            output = {};
            for (const [key, value] of Object.entries(element.data)) {
                if(!["site", "types", "eleventy", "page", "collections", "content", "layoutContent", "_layoutContent"].includes(key)) {
                    output[key] = value;
                }
            }
            return output;
        });
    });

    eleventyConfig.addPassthroughCopy("static");

    return {
        dir: {
            includes: "_includes",
            layouts: "_layouts",
        }
    }
};
