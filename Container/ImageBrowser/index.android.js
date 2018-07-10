import { CameraRoll} from 'react-native'

export default class ImageBrowser{
    constructor() {
        this.lastFetchedPhotoCursor = null;
    }

    async getPhotos(nPhotos) {
        const { edges, page_info } = await CameraRoll.getPhotos({first: nPhotos, after: this.lastFetchedPhotoCursor})
        this.lastFetchedPhotoCursor = page_info.end_cursor;
        
        return edges;
    }

    resetPhotoIndexCursor() {
        this.setState()
    }

};