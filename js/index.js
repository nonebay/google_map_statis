const imgBasePath = '../img/';
let map;
let restaurants = [];

window.onload = setData();

/**
 * 地図の初期化と描画
 */
function initMap() {
    let centerLatLng = new google.maps.LatLng(headOffice.lat, headOffice.lng);

    // 初期表示の倍率、中心座標を指定して地図を初期化
    map = new google.maps.Map(document.getElementById('map'), {
        center: centerLatLng,       // 初期の中心座標(必須)
        zoom: 16,                   // 初期の倍率(必須)
        mapTypeId: 'roadmap',       // 初期の地図タイプ
        styles: [
            {featureType: 'poi.business', stylers: [{visibility: 'off'}]}   // 店舗アイコンを非表示
        ],
    });

    drawCircles([100, 500]);

    createMarker(centerLatLng, imgBasePath + headOffice.imgName);
}

/**
 * 指定した半径で同心円を描画
 * @param {Array} radiuses
 */
function drawCircles(radiuses) {
    radiuses.forEach(function (radius) {
        new google.maps.Circle({
            center: map.getCenter(),        // 中心座標
            map: map,                       // 描画対象
            radius: radius,                 // 半径（m）
            fillColor: '#FF0000',           // 塗りつぶし色
            fillOpacity: 0.02,              // 塗りつぶし透過度（0: 透明 ⇔ 1:不透明）
            strokeColor: '#FF0000',         // 外周色
            strokeOpacity: 1,               // 外周透過度（0: 透明 ⇔ 1:不透明）
            strokeWeight: 0.5               // 外周太さ
        })
    });
}

/**
 * マーカー描画
 * @param {google.maps.LatLng} latLng
 * @param {String} imgPath
 * @returns {google.maps.Marker}
 */
function createMarker(latLng, imgPath = null) {
    return new google.maps.Marker({
        position: latLng,
        map: map,
        icon: imgPath
    });
}

/**
 * 店舗データを設定
 */
function setData() {
    restaurantData.restaurants.forEach(function (restaurant) {
        restaurants.push({
            id: restaurant.id,
            name: restaurant.name,
            businessHours: restaurant.businessHours,
            category: restaurant.category,
            price: restaurant.price,
            takeoutFlag: restaurant.takeoutFlag,
            seat: restaurant.seat,
            photos: restaurant.photos,
            url: restaurant.url,
            postNumber: restaurant.postNumber,
            address: restaurant.address,
            lat: restaurant.lat,
            lng: restaurant.lng,
        });
    });
}
