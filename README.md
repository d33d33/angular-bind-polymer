AngularBindPolymer
==================

AngularBindPolymer allow two-way data binding between Angular and Polymer

##Usage

Just apply the `bind-polymer` directive to your Polymer elements.

    <core-input bind-polymer inputValue="{{myValue}}"></core-input>
  
Note : AngularBindPolymer use 'input' and 'change' events to trigger variable update.
