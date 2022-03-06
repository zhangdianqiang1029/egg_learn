"use strict";

const Controller = require("egg").Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = "hi, egg";
  }

  async zdq() {
    const { ctx } = this;
    ctx.body = "hi, egg";
  }

  async textGetGirl() {
    const ctx = this.ctx;
    const id = ctx.query.id;
    const res = await ctx.service.zdq.getGirl(id);
    ctx.body = res?.id
  }
}

module.exports = HomeController;
