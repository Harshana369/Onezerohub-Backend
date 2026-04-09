import { Types } from 'mongoose';

export type TOrder = {
    orderId: string;
    product?: Types.ObjectId;
    amount: number;
    name: number;
    image: string;
    status: 'pending' | 'accepted' | 'cancelled';
    payment: Types.ObjectId;
    user: Types.ObjectId;
    service_type?: 'template_only' | 'full_service';
    hosting_requirements?: {
        has_domain: boolean;
        domain_name?: string;
        domain_registrar?: string;
        dns_configuration?: {
            needs_dns_setup: boolean;
            dns_provider?: string;
            nameservers?: string[];
        };
        business_name?: string;
        business_email?: string;
        business_phone?: string;
        hosting_preferences?: {
            server_location?: string;
            ssl_required?: boolean;
            backup_frequency?: string;
        };
    };
};
