/**
 * ForumController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  view: async function(req, res) {
    var forum = await Forum.findOne({id: req.param('id')}).populate('threads');
    console.log(forum);
    res.view('pages/forum/view', {forum: forum})
  }

};

