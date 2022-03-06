"use strict";

const Service = require("egg").Service;

class ZdqService extends Service {
  async getGirl(id) {
    return {
      id: id,
    };
  }
}

module.exports = ZdqService;