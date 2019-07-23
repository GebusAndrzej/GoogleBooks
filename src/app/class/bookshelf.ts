export class Bookshelf {
    kind: string;
    totalItems: number ;
    items: Array<Item> = new Array<Item>();
}

export class Item {
    kind: string;
    id: string;
    etag: string;
    selfLink: string;
    volumeInfo: Array<Volinfo> = new Array<Volinfo>();
}

export class Volinfo {
    title: string;
    authors?: Array<string> = new Array<string>();
    publisher?: string;
    publishedDate?: string;
    description?: string;
    pageCount?: number;
    printType?: string;
    categories?: Array<string> = new Array<string>();
    imageLinks?: Img= new Img();
    language?: string;
    previewLink?: string;
}

export class Img {
    smallThumbnail?: string = 'asdf';
    thumbnail?: string;
}

