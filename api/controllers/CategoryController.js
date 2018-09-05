/**
 * CategoryController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  home: async function(req, res) {
      var categories = await Category.find().populate('forums');
      res.view('pages/homepage', {categories: categories});
  }

};

