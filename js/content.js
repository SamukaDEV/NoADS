// chrome.extension.onRequest.addListener(
//     function(request, sender, sendResponse) {
//         if(request.method == "getText"){
//             sendResponse({data: document.getElementById("Cookie_container").innerText, method: "getText"}); 
//         }
//     }
// );

function xst(obj){
	let a = null
	typeof(obj) == "object" ? a = true : a = false;
	return a
}

$(document).ready(function(){
	console.log('NoADS 1.0.2');
	let _div = document.createElement('div')
	_div.classList.add('ytp-time-display')
	_div.innerHTML = '<span>NoADS Active</span>'
	$('.ytp-left-controls').append(_div)

	var smk_timer = setInterval(function(){
		let overlay_slot = $('.ytp-ad-overlay-slot'), //.remove(); // this is the bottom window ads
			skip_button  = $('.ytp-ad-skip-button'), //.click(); // this is the video ads
			progress_dot = $('.ytp-ad-progress'),//.remove(); // this is the video timeline yellow dot

			uol_topside = $('.header__desktop-banner___1c05'),
			uol_botside = $('#bp-footer > div > div.col-md-9.hidden-xs.ads__wrapper___dTcn'),
			uol_fbook   = $('#bp-footer > div > div.col-xs-2.col-sm-2.col-md-2.col-lg-2.hidden-xs > div:nth-child(2) > div'); 

		if(xst(overlay_slot))
			overlay_slot.remove()

		if(xst(skip_button))
			skip_button.click()

		if(xst(progress_dot))
			progress_dot.remove();
		
		if(xst(uol_topside))
			uol_topside.remove();

		if(xst(uol_botside))
			uol_botside.remove();

		if(xst(uol_fbook))
			uol_fbook.remove();

	}, 200);
});