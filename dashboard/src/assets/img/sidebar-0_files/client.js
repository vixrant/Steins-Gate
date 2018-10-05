/*global btf:true, stWidget:true*/
var btf;
btf = btf || {};
btf.data = btf.data || {};
btf.stores = btf.stores || {};

function facebookShareLink() {
	if (document.querySelector('body.ly_productdetails') !== null) {
		var iso = document.querySelector('html').lang,
		lang = iso === 'en-GB' ? iso : iso + '-' + iso.toUpperCase(),
		shareUrl = window.location.href + '?lng=' + lang,
		node = document.querySelector('.product_social li span'),
		$facebookElement = document.querySelector('.product_social li');

		if (node.parentNode) { node.parentNode.removeChild(node); }

		stWidget.addEntry({
			'service':'facebook',
			'element': $facebookElement,
			'url':shareUrl,
			'title':'sharethis',
			'type':'large',
		});

		$facebookElement.querySelector('.stLarge').style.backgroundImage = '';
		$facebookElement.querySelector('span').className = 'icon-facebook';
	}
}

if (document.readyState !== 'loading') {
	facebookShareLink();
} else {
	document.addEventListener("DOMContentLoaded", function() {
		facebookShareLink();
	});
}

$(document).ready(function(){
                if (document.location.hostname === 'us.farrow-ball.com') {$('#specialist-finishes').hide();}
});

/* FAB-383 */
$(window).load(function() {
    if ($('body').hasClass('StoreFinder')) {
		setTimeout(function(){
		   $('.premium-stockists').each(function() {
			   $(this).attr('alt', 'A stockist who delivers an outstanding customer experience in relation to product availability and presentation, technical and colour advice');
			   $(this).attr("title", $(this).attr("alt"));
		   });
	   }, 1000);
    }
});
/* FAB-383 */

// FAB-198 - Stop certain special characters being added
jQuery.validator.addMethod('specialCharacter', function (value, element) {
	return !(/[\%\…\„\â\,\℅]/ig).test(value);
}, 'No special characters allowed.');
$(document).ready(function() {
	$("#title, #firstName, #firstnamefield, #lastName, #lastnamefield").each(function(){
		$(this).rules( "add", {
			specialCharacter: true,
			messages: {
				specialCharacter: "You cannot enter special characters in this field"
			}
		});
	});
});
// EOF FAB-198



/* FAB-339 - updated as part of FAB433 */
if($(document.body).hasClass('ly_storefinder')) {
btf.stores.model.RequestConfig = function(config) {
    var prop;
    this.maxStores = 100;
    // FAB-310 radius set bellow wins, with the RADIUS_OF_CIRCLE sys param as a backup
    if ($('#search-country').val() === 'GB') {
        this.radius = 20;
    }
    this.findStore = true;
    // Required for the JSP
    this.action = null;
    // Required for the action class
    this.latitude = null;
    this.longitude = null;
    this.distanceUnits = 'M';
    if (typeof config === 'object') {
        for (prop in config) {
            if (config.hasOwnProperty(prop)) {
                this[prop] = config[prop];
            }
        }
    }
};
}
/* FAB-339 */


/* Footer layout fix
This is CSS, should not be here, commenting out!
.footer .footer_section {
    display: inline-block !important;
}
*/

btf.utils = btf.utils || {};

btf.utils.fileExists = function (fileLocation) { var returnValue = false;

$.ajax({
url: fileLocation,
type: 'HEAD',
async: false,
cache:false,
success: function () {
returnValue = true;
}
});

return returnValue;
};

$('.register-form input[id="title"]').attr('autocomplete', true);