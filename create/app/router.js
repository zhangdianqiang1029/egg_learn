"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller } = app;
  router.get("/", controller.home.index);
  router.get("/zdq", controller.home.zdq);
  router.get("/zdqChild", controller.zdq.zdq);
  router.get("/getGrils", controller.zdq.getGrils);
  router.get("/getGril", controller.zdq.getGril);
  router.post("/addPostPage", controller.zdq.addPostPage);
  router.get("/textGetGirl", controller.home.textGetGirl);
};
