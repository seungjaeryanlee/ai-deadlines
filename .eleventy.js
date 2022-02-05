module.exports = function(eleventyConfig) {
    eleventyConfig.addFilter("jsonify", JSON.stringify);

    eleventyConfig.addPassthroughCopy("static");

    return {
        dir: {
            includes: "_includes",
            layouts: "_layouts",
        }
    }
};
