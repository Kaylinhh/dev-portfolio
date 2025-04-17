import { Skill } from "./skill.model";

export class Project {
    id: number;
    type: string;
    path: string;
    name: string;
    image: string;
    video: string;
    description: string;
    skill: Skill[];
    stack: string[];
    link: string[];

    constructor (id: number, type: string, path: string, name: string, image: string, video: string, description: string, skill: Skill[], example: string[], stack: string[], link: string[]) {
        this.id = id;
        this.type = type;
        this.path = path;
        this.name = name;
        this.image = image;
        this.video = video;
        this.description = description;
        this.skill = skill;
        this.stack = stack;
        this.link = link;
    }
}