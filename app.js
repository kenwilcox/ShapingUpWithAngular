(function() {
  var app = angular.module('store', [ ] );
  app.controller('StoreController', function () {
    this.products = gems;
  });

  var gems = [
  {
    name: 'Dodecahedron',
    price: 2.95,
    description: 'Some gems have hidden qualities beyond their luster, beyond their shine... Dodeca is one of those gems.',
    images: [
      {
        full: 'http://dhg7upb7j7jqa.cloudfront.net/shaping_up_with_angular_js/assets/demo/images/gem-02.gif',
        thumb: '',
      },
      {
        full: '',
        thumb: '',
      }
    ],
  },
  {
    name: 'Pentagonal Gem',
    price: 5.95,
    description: 'Origin of the Pentagonal Gem is unknown, hence its low value. It has a very high shine and 12 sides.',
    images: [
      {
        full: 'http://dhg7upb7j7jqa.cloudfront.net/shaping_up_with_angular_js/assets/demo/images/gem-01.gif',
        thumb: '',
      },
      {
        full: '',
        thumb: '',
      }
    ],
  }
];
})();
