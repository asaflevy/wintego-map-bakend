export class UpdateLocationDto {
    readonly userId: string;
    readonly _id: string;
    readonly latitude: number;
    readonly longitude: number;
    readonly info?: string;
    readonly iconUrl?: string;
    readonly lable?: string;
}
