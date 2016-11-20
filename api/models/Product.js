/**
 * Product.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	sku:{
  		type: 'string',
  		required: true,
  	},
  	store:{
  		model: 'store',
  	},
  	name:{
  		type: 'string',
  	},
  	description:{
  		type: 'text',
  	},
  	name:{
  		type: 'json',
  	}

  }
};

