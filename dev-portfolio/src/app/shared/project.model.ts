export class Project {
    id: number;
    path: string;
    name: string;
    image: string;
    content: string;

    constructor (id: number, path: string, name: string, image: string, content: string) {
        this.id = id;
        this.path = path;
        this.name = name;
        this.image = image;
        this.content = content;
    }
}