'use strict';

describe( 'Template Creation', function () {
	it( 'should create template', function () {
		templatename: {{name}}
		templatedescription: {{description}}

		{{#each groups }}
			{{> createGroupPartial this }}
		{{/each}}

    } );


