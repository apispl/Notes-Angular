export class Note {
    id!: number;
    title!: string;
    content!: string;
    created!: Date;
    modified!: Date;
    removed!: boolean;
    version!: number;
}