let map;

/**
 * 地図の初期化と描画
 */
function initMap() {
    let centerLatLng = new google.maps.LatLng(headOffice.lat, headOffice.lng);

    // 初期表示の倍率、中心座標を指定して地図を初期化
    map = new google.maps.Map(document.getElementById('map'), {
        center: centerLatLng,       // 初期の中心座標(必須)
        zoom: 16,                   // 初期の倍率(必須)
    });
}
