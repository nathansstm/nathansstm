import AppController from '/apps/AppController.js';

const appController = new AppController();
const postController = appController.PostController;
const userController = appController.UserController;

postController.someMethod(); // Call a method on PostController
userController.anotherMethod(); // Call a method on UserController


