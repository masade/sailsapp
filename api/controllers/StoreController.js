/**
 * StoreController
 *
 * @description :: Server-side logic for managing stores
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	_config: {
    	actions: false,
    	// rest: false,
    	shortcuts: false,
  	},

  	home:	function (req,res) {
  		var slug = req.param("slug");

  		Store.findOne()
  		.where({storeAlias: slug})
  		.populate('products')
  		.then(function(result) {
  			var viewdata = [];

  			if(!result){
  				viewdata.pageTitle = "Store Not Found";
  				viewdata.errMessage= "Store Not Found";
  			}else{
  				viewdata.pageTitle = result.storeTitle +" :: Almastore"
  				viewdata.store	   = result;
  			}

  			var storesList    = 	Store.find().then(function(result){
  				return result;
  			});

  			return [viewdata,storesList];
  		})
  		.spread(function(viewdata,storesList){
  			viewdata.storesList = storesList;
			return res.view('storehome',viewdata);
  		})
  		.fail(function(err){
  			if (err) return res.negotiate(err);
  		});

	}

};