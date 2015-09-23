'use strict';
var handlebars    = require( 'handlebars' );
var fs            = require( 'fs' );
var templatesJSON = require( './json-files/templates.json' );
var template      = fs.readFileSync( './templates/create-template.js', 'utf8' );
var createGroupPartial = fs.readFileSync( './templates/partials/create-group.js', 'utf8' );
var indicatorsPartial = fs.readFileSync( './templates/partials/indicators.js', 'utf8' );

 ( function () {

 	handlebars.registerPartial( 'createGroupPartial', createGroupPartial );
 	handlebars.registerPartial( 'indicatorsPartial', indicatorsPartial);

 	handlebars.registerHelper('ifCond', function( v1, operator, v2, options ) {
		switch (operator) {
	        case '==':
	            return (v1 == v2) ? options.fn(this) : options.inverse(this);
	        case '===':
	            return (v1 === v2) ? options.fn(this) : options.inverse(this);
	        case '<':
	            return (v1 < v2) ? options.fn(this) : options.inverse(this);
	        case '<=':
	            return (v1 <= v2) ? options.fn(this) : options.inverse(this);
	        case '>':
	            return (v1 > v2) ? options.fn(this) : options.inverse(this);
	        case '>=':
	            return (v1 >= v2) ? options.fn(this) : options.inverse(this);
	        case '&&':
	            return (v1 && v2) ? options.fn(this) : options.inverse(this);
	        case '||':
	            return (v1 || v2) ? options.fn(this) : options.inverse(this);
	        default:
	            return options.inverse(this);
	    }
	} );

	var text = handlebars.compile( template );

	console.log(text( templatesJSON ) );
	fs.writeFileSync( './spec/spec1.js', text( templatesJSON ) );

 } )();
