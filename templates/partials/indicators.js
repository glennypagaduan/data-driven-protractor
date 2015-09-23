{{#ifCond type '===' 'Label'}}
	it( 'should create label indicator', function () {
			{{description}}
	} );
{{/ifCond}}
{{#ifCond type '===' 'Multiple Choice'}}
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
{{/ifCond}}
{{#ifCond type '===' 'Open-Ended'}}
	it( 'should create open-ended indicator', function () {
			{{description}}
			{{type}}
	} );
{{/ifCond}}
{{#ifCond type '===' 'Rubric'}}
	it( 'should create rubric indicator', function () {
			{{description}}
			{{type}}
			{{#each options}}
				{{#each this}}
					{{@key}} : {{this}}
				{{/each}}
			{{/each}}
	} );
{{/ifCond}}

