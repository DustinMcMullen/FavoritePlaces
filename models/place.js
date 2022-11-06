class Place {

    constructor(title, imageUri, address, location) {
        this.title = title,
        this.imageUri = imageUri,
        this.address = address,
        this.location = location   // structure: { lat: 0.234253, long: 127.283974  }
        this.id = new Date.toString() + Math.random().toString();
    }
}