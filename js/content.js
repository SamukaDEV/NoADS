const cube_icon = /* html */`
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" 
    width="20" height="20" 
    x="0" y="0" 
    viewBox="0 0 20 20" 
    style="enable-background:new 0 0 20 20" 
    xml:space="preserve" class="" style="position: relative;top: 5px;width: 20px;"><g><path fill="#656565" d="M469.882 132.446v247.031L256 503.031V255.923z" opacity="1" data-original="#1367f7" class=""></path><path fill="#c5c5c5" d="M256 255.923v247.108L42.118 379.477V132.446z" opacity="1" data-original="#7eb4fa" class=""></path><path fill="#f3f3f3" d="M469.882 132.446 256 255.923 42.118 132.446 256 8.969z" opacity="1" data-original="#c6e2f8" class=""></path></g></svg>`

// const yt_div = document.querySelector('.ytp-left-controls')
// const div = document.createElement('div')
// div.classList.add('ytp-time-display')
// div.innerHTML = /* html */`<span>${cube_icon}Active</span>`
// yt_div.append(div)
console.log('Loaded')
let _tmr_sda = setInterval(() => {
    const overlay_slot = document.querySelector('.ytp-ad-overlay-slot')
    const skip_button = document.querySelector('.ytp-ad-skip-button')
    const progress_dot = document.querySelector('.ytp-ad-progress')

    const uol_topside = document.querySelector('.header__desktop-banner___1c05')
    const uol_botside = document.querySelector('#bp-footer > div > div.col-md-9.hidden-xs.ads__wrapper___dTcn')
    const uol_fbook = document.querySelector('#bp-footer > div > div.col-xs-2.col-sm-2.col-md-2.col-lg-2.hidden-xs > div:nth-child(2) > div')

    const yt_ads = document.querySelector('.yt-simple-endpoint.style-scope.ytd-action-companion-ad-renderer')
    const yt_ads2 = document.querySelector('.style-scope.ytd-in-feed-ad-layout-renderer')

    if (overlay_slot) overlay_slot.remove()
    if (skip_button) skip_button.click()
    if (progress_dot) progress_dot.remove()

    if (uol_topside) uol_topside.remove()
    if (uol_botside) uol_botside.remove()
    if (uol_fbook) uol_fbook.remove()

    if (yt_ads) yt_ads.remove()
    if (yt_ads2) yt_ads2.remove()

}, 100)
