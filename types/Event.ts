import { PortableTextBlock, Slug, ImageAsset } from "@sanity/types";

export interface Organizer {
    _id: string;
    title?: string;
}

export interface Event {
    _id: string;
    _type: "event";
    _createdAt: string;
    title?: string;
    slug: Slug;
    organizer: Organizer;
    mainImage?: ImageAsset;
    body: PortableTextBlock[];
}
