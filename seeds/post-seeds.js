const { Post } = require('../models');

const postdata = [
  {
    title: 'est ante in nibh mauris',
    post_url: 'https://images.unsplash.com/photo-1498330177096-689e3fb901ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1334&q=80',
    user_id: 1
  },
  {
    title: 'est ante in nibh mauris',
    post_url: 'https://images.unsplash.com/photo-1498330177096-689e3fb901ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1334&q=80',
    user_id: 2
  },
  {
    title: 'est ante in nibh mauris',
    post_url: 'https://images.unsplash.com/photo-1498330177096-689e3fb901ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1334&q=80',
    user_id: 3
  },
  {
    title: 'est ante in nibh mauris',
    post_url: 'https://images.unsplash.com/photo-1498330177096-689e3fb901ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1334&q=80',
    user_id: 4
  },
  {
    title: 'est ante in nibh mauris',
    post_url: 'https://images.unsplash.com/photo-1498330177096-689e3fb901ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1334&q=80',
    user_id: 5
  },
  {
    title: 'est ante in nibh mauris',
    post_url: 'https://images.unsplash.com/photo-1498330177096-689e3fb901ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1334&q=80',
    user_id: 6
  },
  {
    title: 'est ante in nibh mauris',
    post_url: 'https://images.unsplash.com/photo-1498330177096-689e3fb901ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1334&q=80',
    user_id: 7
  },
  {
    title: 'est ante in nibh mauris',
    post_url: 'https://images.unsplash.com/photo-1498330177096-689e3fb901ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1334&q=80',
    user_id: 8
  },
  {
    title: 'est ante in nibh mauris',
    post_url: 'https://images.unsplash.com/photo-1498330177096-689e3fb901ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1334&q=80',
    user_id: 9
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;