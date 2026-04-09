import { model, Schema } from 'mongoose';
import { TOrder } from './order.interface';
import aggregatePaginate from 'mongoose-aggregate-paginate-v2';

const schema = new Schema<TOrder>(
    {
        orderId: {
            type: String,
            index: true,
        },
        product: {
            type: Schema.Types.ObjectId,
            ref: 'product',
        },
        amount: {
            type: Number,
            default: 0,
        },
        name: String,
        image: String,
        status: {
            type: String,
            enum: ['pending', 'accepted', 'cancelled'],
            default: 'pending',
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'user',
        },
        payment: {
            type: Schema.Types.ObjectId,
            ref: 'payment',
        },
        service_type: {
            type: String,
            enum: ['template_only', 'full_service'],
            default: 'template_only',
        },
        hosting_requirements: {
            has_domain: Boolean,
            domain_name: String,
            domain_registrar: String,
            dns_configuration: {
                needs_dns_setup: Boolean,
                dns_provider: String,
                nameservers: [String],
            },
            business_name: String,
            business_email: String,
            business_phone: String,
            hosting_preferences: {
                server_location: String,
                ssl_required: {
                    type: Boolean,
                    default: true,
                },
                backup_frequency: String,
            },
        },
    },
    { timestamps: true },
);

schema.plugin(aggregatePaginate);
const Order = model<TOrder, any>('order', schema);
export default Order;
