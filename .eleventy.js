const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const markdownIt = require('markdown-it');
const markdownItAttrs = require('markdown-it-attrs');
const markdownItAnchor = require('markdown-it-anchor');
const pluginTOC = require('eleventy-plugin-toc');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const svgSprite = require("eleventy-plugin-svg-sprite");

module.exports = function(eleventyConfig) {

  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(syntaxHighlight);
  
  // Shortcodes
  eleventyConfig.addShortcode("icon", function(name, classes, title) {
    if (!title) {
      title = name;
    }
    return `<svg aria-hidden="true" class="${classes}">
      <title>${title}</title>
      <use xlink:href="#${name}"></use>
    </svg>`
  });

  // reload when changes to SCSS are detected
  eleventyConfig.setServerOptions({
    showAllHosts: true,
    watch: ["_site/**/*.css"]
  });

  eleventyConfig.addPlugin(pluginTOC, {
    tags: ['h2', 'h3'],
    wrapperClass: 'doc-toc'
  });

  eleventyConfig.addPlugin(svgSprite, {
    path: "./_src/assets/icons",
    globalClasses: "",
    defaultClasses: "",
    svgSpriteShortcode: "svgsprite",
    svgShortcode: "svg",
    spriteConfig:
    {
      mode: {
        inline: true,
        symbol: {
          sprite: 'sprite.svg',
          example: false,
        },
      },
      shape: {
        transform: ['svgo'],
        id: {
          generator: '',
        },
      },
      svg: {
        xmlDeclaration: false,
        doctypeDeclaration: false,
      },
    }
  });

  eleventyConfig.addPassthroughCopy("_src/assets/fonts/**/*");
  eleventyConfig.addPassthroughCopy("_src/assets/images/**/*");
  eleventyConfig.addPassthroughCopy("_src/assets/icons/**/*");
  eleventyConfig.addPassthroughCopy({"_src/pages/prototype/assets/**/*": "prototype/assets/"});

  mdOptions = {
    html: true,
    breaks: true,
    typographer:  true,
    quotes: '“”‘’',
  };

  // add anchors to h2 and h3 elements
  eleventyConfig.setLibrary("md", 
    markdownIt(mdOptions)
    .use(markdownItAttrs)
    .use(markdownItAnchor, {
      level: [2, 3],
      permalink: markdownItAnchor.permalink.headerLink({ safariReaderFix: true,
      class: 'doc-anchor' })
    })
  );

  return {
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: '_src',
      output: '_site'
    }
  };
};