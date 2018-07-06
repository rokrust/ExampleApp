import { CameraRoll} from 'react-native'

export default class ImageBrowser{
    constructor() {
        this.lastFetchedPhotoCursor = null;
    }

    async getPhotos(n_photos) {
        const { edges, page_info } = await CameraRoll.getPhotos({first: n_photos, after: this.lastFetchedPhotoCursor})
        this.lastFetchedPhotoCursor = page_info.end_cursor;
        
        return edges;
    }

    printPhotoUrls() {
        console.log("Photos: " + JSON.stringify(this))
        console.log("Cursor: " + JSON.stringify(this.lastFetchedPhotoCursor))
    }

    resetPhotoIndexCursor() {
        this.setState()
    }

};