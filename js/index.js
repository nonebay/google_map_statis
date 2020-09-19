const imgBasePath = '../img/';
const animationClassLabel = 'animate__bounceInRight';
const animationClassMarker = 'animate__bounce';
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

    let centerMarker = createMarker(centerLatLng, imgBasePath + headOffice.imgName);
    this.setInfoWindow(centerMarker, '本社');

    restaurants.forEach(function (restaurant) {
        // マーカー描画
        let marker = createMarker(new google.maps.LatLng(restaurant.lat, restaurant.lng), imgBasePath + restaurant.category.imgName + '#' + restaurant.id);

        // マーカークリックで表へ移動
        google.maps.event.addListener(marker, 'click', function () {
            let nameLabel = document.getElementsByClassName('restaurant' + restaurant.id)[0];
            window.scroll({
                top: nameLabel.getBoundingClientRect().top,
                behavior: 'smooth'
            });
            nameLabel.classList.add(animationClassLabel);
            nameLabel.addEventListener('animationend', function () {
                nameLabel.classList.remove(animationClassLabel);
            });
        });

        // マーカーにマウスホバーで店舗名を表示
        setInfoWindow(marker, restaurant.name);
    });
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
        icon: {
            url: imgPath,
            scaledSize: new google.maps.Size(40, 60),
        },
    });
}

/**
 * 地図上のマーカーにツールチップを追加
 * @param {google.maps.Marker} marker
 * @param {string} content
 */
function setInfoWindow(marker, content) {
    let infoWindow = new google.maps.InfoWindow({
        content: content
    });
    google.maps.event.addListener(marker, 'mouseover', function () {
        infoWindow.open(map, marker);
    });
    google.maps.event.addListener(marker, 'mouseout', function () {
        infoWindow.close();
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

/**
 * 地図表示領域にスクロールし、指定店舗を中心に移動する
 * @param {int} id
 */
function toMarker(id) {
    // 画面スクロール
    window.scroll({
        top: 0,
        behavior: 'smooth'
    });

    // 地図の中心を移動
    let restaurant = restaurants.find(restaurant => restaurant.id = id);
    map.panTo(new google.maps.LatLng(restaurant.lat, restaurant.lng));

    // マーカーにアニメーションを実行
    let targetMarker = $('img[src $= ".png#' + id + '"]:first');
    targetMarker.addClass('animate__animated ' + animationClassMarker);
    targetMarker.on('animationend', function () {
        targetMarker.removeClass('animate__animated ' + animationClassMarker);
    });
}
