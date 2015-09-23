'use strict';
var handlebars    = require( 'handlebars' );
var fs            = require( 'fs' );
var templatesJSON = require( './json-files/templates.json' );
var template      = fs.readFileSync( './templates/create-template.js', 'utf8' );
var createGroupPartial = fs.readFileSync( './templates/partials/create-group.js', 'utf8' );
var indicatorsPartial = fs.readFileSync( './templates/partials/indicators.js', 'utf8' );

 ( function () {

 	require('./node_modules/handlebars-helpers/lib/helper-lib.js').register(handlebars, {});

 	handlebars.registerPartial( 'createGroupPartial', createGroupPartial );
 	handlebars.registerPartial( 'indicatorsPartial', indicatorsPartial);


	var spec = handlebars.compile( template );

	fs.writeFileSync( './spec/spec1.js', spec( templatesJSON ) );

 } )();
