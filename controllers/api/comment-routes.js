const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// GET Routes
  router.get('/', (req, res) => {
    Comment.findAll({})
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
      console.log(err);

      res.status(500).json(err);
    });
  });

// POST Routes
  router.post('/', withAuth, (req, res) => {
    if (req.session) {
      Comment.create({
        comment_text: req.body.comment_text,
        post_id: req.body.post_id,
        user_id: req.session.user_id,
      })
      .then(dbCommentData => res.json(dbCommentData))
      .catch(err => {
        console.log(err);

        res.status(400).json(err);
      });
    }
  });

// DELETE Routes
  router.delete('/:id', withAuth, (req, res) => {
    Comment.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(dbCommentData => {
      if (!dbCommentData) {
        res.status(404).json({ message: 'Comment Not Found' });
              return;
      }

      res.json(dbCommentData);
    })
    .catch(err => {
      console.log(err);

      res.status(500).json(err);
    });
  });

module.exports = router;