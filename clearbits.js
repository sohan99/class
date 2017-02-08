// Selecting an element's direct parent:
 
			// returns [ div.child ]
			$( "span.subchild" ).parent();
			
			// Selecting all the parents of an element that match a given selector:
			
			// returns [ div.parent ]
			$( "span.subchild" ).parents( "div.parent" );
			
			// returns [ div.child, div.parent, div.grandparent ]
			$( "span.subchild" ).parents();
			
			// Selecting all the parents of an element up to, but *not including* the selector:
			
			// returns [ div.child, div.parent ]
			$( "span.subchild" ).parentsUntil( "div.grandparent" );
			
			// Selecting the closest parent, note that only one parent will be selected
			// and that the initial element itself is included in the search:
			
			// returns [ div.child ]
			$( "span.subchild" ).closest( "div" );
			
			// returns [ div.child ] as the selector is also included in the search:
			$( "div.child" ).closest( "div" );
		


        $( "#head_id" ).mouseover(function() {
            $("h1").slideUp( 'fast' ).delay( 1500 ).slideDown( 300 );
        });