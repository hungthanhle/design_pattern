// Hệ thống cũ đang dùng Google Maps
class GoogleMapService {
  getCoordinates(address: string) {
    console.log(`🗺️ Google Maps tìm tọa độ cho: ${address}`);
    return { lat: 10.762622, lng: 106.660172 }; // ví dụ
  }
}

// Ứng dụng chính
class LocationApp {
  constructor(private mapService: GoogleMapService) {}

  showLocation(address: string) {
    const coords = this.mapService.getCoordinates(address);
    console.log(`Vị trí: ${coords.lat}, ${coords.lng}`);
  }
}

// --- Sử dụng ---
const googleService = new GoogleMapService();

// inject googleService vào để lấy coordinates
const app = new LocationApp(googleService);
app.showLocation("TP. Hồ Chí Minh");


// PROBLEMS
// API mới từ MapBox
class MapBoxService {
  // không có hàm getCoordinates
  getLatLongByPlaceName(place: string) {
    console.log(`🗺️ MapBox tìm tọa độ cho: ${place}`);
    return { latitude: 10.762622, longitude: 106.660172 };
  }
}

const mapBoxService = new MapBoxService();
const app1 = new LocationApp(mapBoxService); // LỖI [Property 'getCoordinates' is missing in type 'MapBoxService']
app1.showLocation("TP. Hồ Chí Minh");
