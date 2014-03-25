describe("<x-route>", function() {

  describe("when no route/hash is defined/available on initialization", function(){

    beforeEach(function(done) {
      var playground = document.createElement('DIV');
      playground.setAttribute('id', 'playground');
      document.body.appendChild(playground);
      
      var $route = document.createElement('X-ROUTE');
      $route.setAttribute('id', 'route');
      $route.setAttribute('path', '/');
      $route.setAttribute('route', '/home');
      $route.setAttribute('auto', true);
      playground.appendChild($route);

      listener = $route.addEventListener('route-changed', function(route){              
        $route.removeEventListener('route-changed', listener);
        done();
      });

      document.location.hash='';
      $route.fireChange();
    });

    xit("should automatically navigate to the first route entry having the properties `route` and `auto` set", function(done) {
      expect(document.location.hash).toEqual('#/home');
      done();
    });
  });
  
  describe("when a parametrized route is accessed", function() {

    beforeEach(function(done) {
      var $route = document.createElement('X-ROUTE');
      $route.setAttribute('id', 'route');
      $route.setAttribute('path', '/books/view/:bookId');              
      document.body.appendChild($route);
      var listener = document.addEventListener('route-changed', function(route){
        $route.removeEventListener('route-changed', listener);
        done();     
      });        
    });

    xit("should have properties set", function(done) {
      expect(document.location.hash).toEqual('#/books/view/12345');
      done();
    });    
  });
  
});
