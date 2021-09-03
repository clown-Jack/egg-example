'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    this.logger.debug('debug info');
    ctx.logger.debug('debug info');
    this.logger.info('111');
    this.logger.warn('warning!!!');
    ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
