function fnCommAjax(opt){
    try {
        if (opt && opt.url ) {
        	if(opt.action){
        		if(opt.action =="insert"){
        			waitingDialog.show('', {dialogSize: 'sm', progressType: 'warning'});
        		}else if(opt.action =="update"){
        			waitingDialog.show('', {dialogSize: 'sm', progressType: 'warning'});
        		}else if(opt.action =="select"){
        			waitingDialog.show('', {dialogSize: 'sm', progressType: 'warning'});
        		}else{
        			waitingDialog.show('', {dialogSize: 'sm', progressType: 'warning'});
        		}
        	}
            if (!opt.params) {
                opt["params"] = new Object;
            }
            $.ajax({
                type : opt.method ? 'GET' : 'POST',
                dataType : 'json',
                timeout : opt.timeout ? opt.timeout : 300000,
                url : opt.url,
                data : opt.params,
                beforeSend : function(xhr, settings) {
                },
                success : function(data, status, xhr) {
                    if ( typeof (opt.success) === 'function')
                        opt.success(data);
                    if(opt.action){
                    	waitingDialog.hide()
                    }
                    
                },
                error : function(xhr, status, strError) {//ajax Error
                	if(opt.action){
                    	waitingDialog.hide()
                    }
                }
            });
        }
    }catch(e) {
    }finally {
    }
}

function fnCommUpload( opt ){

	try{	
		var enctype = $('#'+ opt.form).attr('enctype');
		    		
		if(enctype.indexOf('multipart') >=0){
			$('#'+ opt.form).ajaxSubmit({
				 dataType: 'json'
			    ,cache   : false
				,url     : opt.fileUrl == undefined ? '/comn/fileUpload' : opt.fileUrl
			    ,contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
			    ,beforeSend : function( xhr, settings){

			    }
				,success : function(data){
					
		    	}
			});
		}
		
	}catch(e){
		console.log(e);
	}finally{
		delete opt;
	}	
}

var waitingDialog = waitingDialog || (function ($) {
    'use strict';

	// Creating modal dialog's DOM
	var $dialog = $(
		'<div class="modal fade" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-hidden="true" style="padding-top:15%; overflow-y:visible;">' +
		'<div class="modal-dialog modal-m">' +
		'<div class="modal-content">' +
			'<div class="modal-header"><h3 style="margin:0;"></h3></div>' +
			'<div class="modal-body">' +
				'<div class="progress progress-striped active" style="margin-bottom:0;"><div class="progress-bar" style="width: 100%"></div></div>' +
			'</div>' +
		'</div></div></div>');

	return {
		/**
		 * Opens our dialog
		 * @param message Custom message
		 * @param options Custom options:
		 * 				  options.dialogSize - bootstrap postfix for dialog size, e.g. "sm", "m";
		 * 				  options.progressType - bootstrap postfix for progress bar type, e.g. "success", "warning".
		 */
		show: function (message, options) {
			// Assigning defaults
			if (typeof options === 'undefined') {
				options = {};
			}
			if (typeof message === 'undefined') {
				message = 'Loading';
			}
			var settings = $.extend({
				dialogSize: 'm',
				progressType: '',
				onHide: null // This callback runs after the dialog was hidden
			}, options);

			// Configuring dialog
			$dialog.find('.modal-dialog').attr('class', 'modal-dialog').addClass('modal-' + settings.dialogSize);
			$dialog.find('.progress-bar').attr('class', 'progress-bar');
			if (settings.progressType) {
				$dialog.find('.progress-bar').addClass('progress-bar-' + settings.progressType);
			}
			$dialog.find('h3').text(message);
			// Adding callbacks
			if (typeof settings.onHide === 'function') {
				$dialog.off('hidden.bs.modal').on('hidden.bs.modal', function (e) {
					settings.onHide.call($dialog);
				});
			}
			// Opening dialog
			$dialog.modal();
		},
		/**
		 * Closes dialog
		 */
		hide: function () {
			$dialog.modal('hide');
		}
	};

})(jQuery);

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};
function fnApp2Web(type){
	if(type=="ok"){
		window.location.reload();
	}
}