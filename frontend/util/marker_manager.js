
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

  highlightIcon(marker) {
    return (() => {
      const roomItem = document.getElementsByClassName(`room-item-${marker.zIndex}`);
      roomItem[0].classList.add('active-room-icon');
    });
  }

  removeIconHighlight(marker) {
    return (() => {
      const roomItem = document.getElementsByClassName(`room-item-${marker.zIndex}`);
      roomItem[0].classList.remove('active-room-icon');
    });
  }



  createMarkerFromRoom(room) {
    this.markers[room.id] = new google.maps.Marker({
      position: room.position,
      map: this.map,
      title: room.title,
      icon: {
        path: 'M-3,3a0.905778,0.905778,0,0,1,-1,-1v-4a1,1,0,0,1,1,-1h6a1,1,0,0,1,1,1v4a1,1,0,0,1,-1,1h-2l-0.9176470588235298,1.564705882352941l-1.015686274509804,-1.549019607843137Z',
        fillColor: "white",
        strokeColor: "gray",
        fillOpacity: 1,
        strokeWeight: 1,
        scale: 6
      },
      label: {
        text: '$'+room.price,
        fontSize: "16px",
        fontFamily: 'Roboto, sans-serif'
      },
      zIndex: room.id
    });
    // this context is lost?

    this.markers[room.id].addListener('mouseover', this.highlightIcon(this.markers[room.id]));
    this.markers[room.id].addListener('mouseout', this.removeIconHighlight(this.markers[room.id]));
  }
}
