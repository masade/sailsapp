/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 */

module.exports.routes = {

  '/': {
    view: 'homepage',
    locals: {
      title : 'my sails app',
      homepage : false,
      people: [
        {firstName: "Yehuda", lastName: "Katz"},
        {firstName: "Carl", lastName: "Lerche"},
        {firstName: "Alan", lastName: "Johnson"}
      ]
    }
  },

  '/store':'StoreController.home',


};
