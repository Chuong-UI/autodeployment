/**
 * Setting up routes for app, express style routing
 * Created by tphuocthai on 3/19/16.
 */
const express = require('express');
const passport = require('passport');

module.exports = function(app) {

  app.get('/login', AuthController.login);
  app.get('/register', AuthController.renderRegister);
  app.get('/logout', AuthController.logout);
  app.get('/profile', AuthController.ensureAuth, UserController.profile);
  app.get('/auth/:provider', AuthController.provider);
  app.get('/auth/:provider/callback', AuthController.callback);
  app.post('/auth/local', AuthController.callback);
  app.post('/api/auth/jwt', AuthController.jwtLogin);
  app.post('/api/register', AuthController.register);

  app.get('/api/confirm/:token', TokenController.verifyEmail);
  app.post('/api/forgot-password', TokenController.forgotPassword);
  app.post('/api/reset-password/:token', TokenController.resetPassword);

  let apiRoutes = express.Router();
  apiRoutes.use(AuthController.ensureAuth);

  apiRoutes.get('/messages', MessageController.findAll);
  apiRoutes.get('/messages/:id', MessageController.findOne);
  apiRoutes.get('/users/:userId/messages', MessageController.findByUser);
  apiRoutes.post('/messages', MessageController.create);
  apiRoutes.put('/messages/:id', MessageController.update);

  apiRoutes.get('/messages/:messageId/comments', CommentController.findAll);
  apiRoutes.post('/messages/:messageId/comments', CommentController.create);

  apiRoutes.get('/users/astrologers', UserController.getAstrologers);
  apiRoutes.put('/users/:id', UserController.updateUser);
  apiRoutes.put('/users/:id/change-password', UserController.changePassword);

  app.use('/api/', apiRoutes);

  app.get('/*.json', IndexController.proxy);
  app.get('/*', IndexController.userhome);
};
