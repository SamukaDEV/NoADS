const yt_div = document.querySelector('.ytp-left-controls')
const div = document.createElement('div')
div.classList.add('ytp-time-display')
div.innerHTML = '<span>Active</span>'
yt_div.append(div)

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
