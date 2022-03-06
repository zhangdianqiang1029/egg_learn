"use strict";

const Controller = require("egg").Controller;

class zdqController extends Controller {
  async zdq() {
    const { ctx } = this;
    ctx.body = "<h1> 这里是自由游</h1>";
  }

  async getGrils() {
    const ctx = this.ctx;
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve((ctx.body = "<h1>轻轻 的你</h1>"));
      }, 5000);
    });
  }

  // 自由传参
  async getGril() {
    const ctx = this.ctx;
    const res = await ctx.service.zdq.getGirl('0001');
    ctx.body = res;
  }

  // post
  async addPostPage() {
    const ctx = this.ctx;
    ctx.body = {
      status:200,
      data:ctx.request.body
    };
  }
}

module.exports = zdqController;
