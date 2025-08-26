// WordPress compatibility script for static site
// This defines the wp object that Elementor expects

window.wp = window.wp || {};

// Define basic WordPress functions that Elementor might need
wp.i18n = wp.i18n || {
    __: function(text) { return text; },
    _x: function(text, context) { return text; },
    _n: function(single, plural, number) { return number === 1 ? single : plural; }
};

wp.hooks = wp.hooks || {
    addAction: function() {},
    addFilter: function() {},
    doAction: function() {},
    applyFilters: function(filter, value) { return value; }
};

wp.data = wp.data || {
    select: function() { return {}; },
    dispatch: function() { return {}; },
    subscribe: function() { return function() {}; }
};

wp.element = wp.element || {
    createElement: function() {},
    Fragment: function() {}
};

// Define jQuery if not already defined
if (typeof jQuery === 'undefined') {
    window.jQuery = window.$ = function() { return {}; };
}

console.log('WordPress compatibility layer loaded');
