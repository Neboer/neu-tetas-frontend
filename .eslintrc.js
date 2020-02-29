module.exports = {
    extends: [
        // add more generic rulesets here, such as:
        // 'eslint:recommended',
        'plugin:vue/recommended'
    ],
    rules: {
        // override/add rules settings here, such as:
        // 'vue/no-unused-vars': 'error'
        'vue/name-property-casing': false,
        'vue/html-indent': false,
        'vue/html-quotes': false,
        'vue/html-self-closing':false,
        'vue/singleline-html-element-content-newline': false,
        'vue/max-attributes-per-line':false,
        'vue/attributes-order':false,
        'vue/html-closing-bracket-spacing':false
    }
};
