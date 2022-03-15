'use strict';

/**
 * our-number service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::our-number.our-number');
