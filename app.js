/*global angular */
(function () {
  'use strict';
  var app = angular.module('store', ['store-products']);
  app.controller('StoreController', ['$http', function ($http) {
    var store = this;
    store.products = [ ];
    $http.get('/products.json').success(function (data) {
      store.products = data;
    });
  }]);
  app.controller('ReviewController', function () {
    this.reviews = {};

    this.addReview = function (product) {
      product.reviews.push(this.review);
      this.review = {};
    };
  });
}());
