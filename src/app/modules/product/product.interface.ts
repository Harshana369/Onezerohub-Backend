import { Types } from 'mongoose';
export interface TProduct {
    name: string;
    description: Map<string, string>;
    additional_info?: Map<string, any>;
    images?: [string];
    quantity: number;
    price?: {
        amount: number;
        discount?: number;
        discount_type?: string;
    };
    thumb_image?: string;
    status: boolean;
    category: Types.ObjectId;
    service_types?: {
        template_only?: {
            enabled: boolean;
            price: number;
            discount?: number;
            discount_type?: string;
        };
        full_service?: {
            enabled: boolean;
            price: number;
            discount?: number;
            discount_type?: string;
            includes_hosting: boolean;
        };
    };
}
