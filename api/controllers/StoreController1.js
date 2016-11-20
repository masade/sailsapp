/**
 * StoreController
 *
 * @description :: Server-side logic for managing stores
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	_config: {

  	},
	index:	function (req,res) {


		viewdata = {
			pageTitle	: "Almastore :: IIM Ranchi",
			store		: {
				title	: "IIM Ranchi",
				subTitle: "The Official Merchandise Store of IIM Ranchi"
			},
			people: [
				{firstName: "Yehuda", lastName: "Katz"},
				{firstName: "Carl", lastName: "Lerche"},
				{firstName: "Alan", lastName: "Johnson"}
		    ],

			currentDate	: (new Date()).toString()
		}
		return res.view('storehome',viewdata);
	}
};

