// 本社情報
const headOffice = {
    lat: 35.644214,
    lng: 139.756507,
    imgName: 'umenetts.png',
};

const restaurantData = {
    // 飲食店情報
    restaurants: [
        {
            id: 1,
            name: 'PIASIS芝浦店',
            businessHours: [
                {dayOfWeek: '00011111', open: '11:30', close: '14:00'},
            ],
            category: {id: 3, name: '中華', imgName: 'chinese.png'},
            price: null,
            takeoutFlag: null,
            seat: null,
            photos: null,
            url: 'http://www.piasis.jp/shibaura/',
            postNumber: 1080022,
            address: '東京都港区１８ 東京都港区海岸3丁目18−6',
            lat: 35.644782,
            lng: 139.756514
        },
        {
            id: 2,
            name: '秀味 海岸店',
            businessHours: [
                {dayOfWeek: '00011111', open: '11:00', close: '21:00'},
                {dayOfWeek: '00100000', open: '11:00', close: '14:00'},
            ],
            category: {id: 3, name: '中華', imgName: 'chinese.png'},
            price: {id: 2, name: '501~1000'},
            takeoutFlag: null,
            seat: 12,
            photos: null,
            url: 'https://tabelog.com/tokyo/A1314/A131402/13108072/',
            postNumber: 1080022,
            address: '東京都港区海岸３丁目１９−２ マリンシティダイヤモンドパレス',
            lat: 35.642776,
            lng: 139.756333
        },
        {
            id: 3,
            name: '芝浦食堂',
            businessHours: [
                {dayOfWeek: '00111111', open: '06:30', close: '14:00'},
            ],
            category: {id: 4, name: '定食', imgName: 'ordinary.png'},
            price: {id: 1, name: '~500'},
            takeoutFlag: null,
            seat: 80,
            photos: null,
            url: 'https://tabelog.com/tokyo/A1314/A131402/13123903/',
            postNumber: 1050022,
            address: '東京都港区海岸３丁目２１−１',
            lat: 35.6403337,
            lng: 139.7549853
        },
        {
            id: 4,
            name: '湾岸食堂 波止場',
            businessHours: [
                {dayOfWeek: '00011111', open: '11:00', close: '14:00'},
            ],
            category: {id: 4, name: '定食', imgName: 'ordinary.png'},
            price: {id: 2, name: '501~1000'},
            takeoutFlag: null,
            seat: 95,
            photos: null,
            url: 'https://tabelog.com/tokyo/A1314/A131402/13055729/',
            postNumber: 1050022,
            address: '東京都港区海岸３丁目２６−１ 芝浦1F ＢＡＲＱＵＥ芝浦',
            lat: 35.6431064,
            lng: 139.7572705
        },
    ],
};
