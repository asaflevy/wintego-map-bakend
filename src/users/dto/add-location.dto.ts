export class AddLocationDto {
    readonly userId: string;
    readonly latitude: number;
    readonly longitude: number;
    readonly info?: string;
}
