module.exports = function(eleventyConfig) {
    eleventyConfig.addFilter("jsonify", JSON.stringify);

    return {
        dir: {
            includes: "_includes",
            layouts: "_layouts",
        }
    }
};
