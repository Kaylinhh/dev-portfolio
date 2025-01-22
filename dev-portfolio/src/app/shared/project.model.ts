export class Project {
    id: number;
    path: string;
    name: string;
    image: string;
    video: string;
    description: string;
    content: string;
    stack: string[];
    link: string[];


    constructor (id: number, path: string, name: string, image: string, video: string, description: string, content: string, stack: string[], link: string[]) {
        this.id = id;
        this.path = path;
        this.name = name;
        this.image = image;
        this.video = video;
        this.description = description;
        this.content = content;
        this.stack = stack;
        this.link = link;
    }
}