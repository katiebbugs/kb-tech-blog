const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, User, Vote, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// GET Routes
  router.get('/', (req, res) => {
    Post.findAll({
      attributes: [
        'id',
        'post_content',
        'title',
        'created_at',
        [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
      ],
      order: [['created_at', 'DESC']],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['username']
        },
      ]
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);

      res.status(500).json(err);
    });
  });

  router.get('/:id', (req, res) => {
    Post.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'post_content',
        'title',
        'created_at',
        [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
      ],
      include: [
        {
          model: User,
          attributes: ['username']
        },
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username']
          }
        }
      ]
    })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'Post Not Found' });
        return;
      }

      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);

      res.status(500).json(err);
    });
  });

// POST Routes
  router.post('/', withAuth, (req, res) => {
    Post.create({
      title: req.body.title,
      post_content: req.body.post_content,
      user_id: req.session.user_id
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);

      res.status(500).json(err);
    });
  });

// PUT Routes
  router.put('/upvote', withAuth, (req, res) => {
    if (req.session) {
      Post.upvote({ ...req.body, user_id: req.session.user_id }, { Vote, Comment, User })
      .then(updatedVoteData => res.json(updatedVoteData))
      .catch(err => {
        console.log(err);

        res.status(500).json(err);
      });
    }
  });

  router.put('/:id', withAuth, (req, res) => {
    Post.update(
      {
        title: req.body.title
      },
      {
        where: {
          id: req.params.id
        }
      }
    )
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'Post Not Found' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);

      res.status(500).json(err);
    });
  });

// DELETE Routes
  router.delete('/:id', withAuth, (req, res) => {
    Post.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'Post Not Found' });
        return;
      }
          
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);

      res.status(500).json(err);
    });
  });

module.exports = router;