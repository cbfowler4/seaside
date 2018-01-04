
export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(rooms) {
    console.log('update rooms');

    rooms.forEach((room, idx) => {
      if (!Object.keys(this.markers).includes(room.id)) {
        this.createMarkerFromRoom(room);
      }
    });

  }

  createMarkerFromRoom(room) {
    this.markers[room.id] = new google.maps.Marker({
      position: room.position,
      map: this.map,
      title: room.title
    });
  }
}
