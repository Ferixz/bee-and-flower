ace.define("ace/mode/rasa_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"], function(require, exports, module) {
"use strict";

var oop = require("../lib/oop");
var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;

var RasaHighlightRules = function() {
	var keywords = "تازمانیکه|بروبه|اگر";

	    var builtinConstants = (
	        "نیست|است"
	    );

	    var builtinFunctions = (
	        "فعلی|همسایه"
	    );



    var keywordMapper = this.createKeywordMapper({
        "support.function": builtinFunctions,
        "keyword": keywords,
        "constant.language": builtinConstants
    }, "identifier", true);

    this.$rules = {
        "start" : [ {
            token : "comment",
            regex : "//.*$"
        }, {
            token : "string",           // " string
            regex : '".*?"'
        }, {
            token : "string",           // ' string
            regex : "'.*?'"
        }, {
            token : keywordMapper,
            regex : "[ا-یa-zA-Z_$][ا-ی۰-۹a-zA-Z0-9_$]*"
        }, {
            token : "keyword.operator",
            regex : "\\+|\\/|\\/\\/|%|<@>|@>|<@|&|\\^|~|<|>|<=|=>|==|!=|<>|="
        }, {
            token : "paren.lparen",
            regex : "[\\(]"
        }, {
            token : "paren.rparen",
            regex : "[\\)]"
        }, {
            token : "text",
            regex : "\\s+"
        } ]
    };
};

oop.inherits(RasaHighlightRules, TextHighlightRules);

exports.RasaHighlightRules = RasaHighlightRules;
});

ace.define("ace/mode/rasa",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/rasa_highlight_rules","ace/range"], function(require, exports, module) {
"use strict";

var oop = require("../lib/oop");
var TextMode = require("./text").Mode;
var RasaHighlightRules = require("./rasa_highlight_rules").RasaHighlightRules;
var Range = require("../range").Range;

var Mode = function() {
    this.HighlightRules = RasaHighlightRules;
};
oop.inherits(Mode, TextMode);

(function() {

    this.lineCommentStart = "//";
    this.blockComment = {start: "/*", end: "*/"};

    this.$id = "ace/mode/rasa";
}).call(Mode.prototype);

exports.Mode = Mode;

});