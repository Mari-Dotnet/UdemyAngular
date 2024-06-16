import { Photo } from "./photo";

export interface Member {
    id: number;
    userName: string | null;
    url: string;
    age: number;
    knownAs: string;
    created: Date;
    lastActive: string;
    gender: string;
    introduction: string;
    lookingFor: string;
    interests: string;
    location: string;
    city: string;
    country: string;
    photos: Photo[];
}
