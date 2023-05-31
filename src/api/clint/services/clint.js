'use strict';

/**
 * clint service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::clint.clint');
