{{#is type 'Label'}}
	it( 'should create label indicator', function () {
			{{description}}
	} );
{{/is}}
{{#is type 'Multiple Choice'}}
	it( 'should create multiple-choice indicator', function () {
			{{description}}
			{{type}}
			{{multieSelect}}
			{{#each options}}
				{{#each this}}
					{{@key}} : {{this}}
				{{/each}}
			{{/each}}
	} );
{{/is}}
{{#is type 'Open-Ended'}}
	it( 'should create open-ended indicator', function () {
			{{description}}
			{{type}}
	} );
{{/is}}
{{#is type 'Rubric'}}
	it( 'should create rubric indicator', function () {
			{{description}}
			{{type}}
			{{#each options}}
				{{#each this}}
					{{@key}} : {{this}}
				{{/each}}
			{{/each}}
	} );
{{/is}}

