// Функция инициализации карты и добавления маркеров
function initMap() {
  // Создание новой карты
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.97156117443609, lng: 23.726764137413987},
    zoom: 7 //
  });

  // Массив с информацией о маркерах
  var markers = [
    { position: {lat: 37.97156117443609, lng: 23.726764137413987}, title: 'Парфеон', imageUrl:'img/Parfeon.jpg', date:'447—438 годы до нашей эры', descr:"Древнегреческий храм,<br> символизирующий славу<br> Афин. Построен<br> в эпоху расцвета<br> афинской демократии.<br>"}, 
    { position: {lat: 37.97153702622523, lng: 23.725748501248084}, title: 'Афинский Акрополь', imageUrl:'img/Akropol.jpeg', date:'VI век до нашей эры', descr:"Крепость на вершине<br> города Афины.<br> Содержит множество<br> древних памятников,<br> таких как Парфеон<br> и Эрехтеон.<br>"},
    { position: {lat: 37.63847846705806, lng: 21.62988392412665}, title: 'Олимпия', imageUrl:'img/Olympia.jpeg', date:'7—4 века до нашей эры.', descr:"Место проведения<br> древних олимпийских<br> игр. Здесь находится<br> статуя Зевса,<br> одно из семи<br> чудес древнего<br> мира.<br>"  },
    { position: {lat: 37.654203234515634, lng: 24.029323489233338}, title: 'Сунион', imageUrl:'img/Sunion.jpg', date:'440 год до нашей эры', descr:"Древний храм Посейдона,<br> бога морей<br> и водоворотов.<br> Расположен на мысе<br>в южной части<br> Аттики.<br>" }, 
    { position: {lat: 39.038225312934614, lng: 20.735084613304714}, title: 'Памятник <br> Октавиану Цезарю <br> Августу в Никополе', imageUrl:'img/Cezar.jpg', date: '20 год нашей эры', descr:"Обелиск, возведенный<br> в честь победы<br> Октавиана в сражении<br> при Акциуме.<br>" },
    { position: {lat: 40.63665595176012, lng: 22.944741157952222}, title: 'Статуя Элефтериоса<br> Венизелоса', imageUrl:'img/Veni.jpg', date:'В конце 1980-x<br> или начале 1990-х годов', descr:"Греческий политик,<br> игравший ключевую<br> роль в борьбе<br> за независимость Греции<br> в начале 20 века.<br>" }, 
  ];
  

  // Добавление маркеров на карту
  markers.forEach(function(markerInfo) {
    var marker = new google.maps.Marker({
      position: markerInfo.position, // Координаты маркера
      map: map,
      title: markerInfo.title // Заголовок маркера 
    });

    // Создание всплывающего окна с текстом достопримечательности
    var infowindow = new google.maps.InfoWindow({
      content: '<div>' +
      "<h3 style='font-size:16px;'>" + markerInfo.title + '</h3>' +
      '<img style="height:130px; width:180px" src="' + markerInfo.imageUrl + '" alt="Image">' +'<br>'+
      "<span style='font-size:16px;'>" + markerInfo.descr + '</span>' +
      "<span style='font-size:16px;'>" + 'Дата постройки: <br>'+ markerInfo.date + '</apan>' +
    '</div>'
      
       // Текст, который будет отображаться во всплывающем окне
    });

    // Добавление события наведения на маркер для отображения всплывающего окна
    marker.addListener('mouseover', function() {
      infowindow.open(map, marker);
    });

    // Добавление события ухода мыши с маркера для закрытия всплывающего окна
    marker.addListener('mouseout', function() {
      infowindow.close();
    });
  });
}

	
