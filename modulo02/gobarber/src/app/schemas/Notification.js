import mongoose from 'mongoose';

const NotificationSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            requires: true,
        },
        user: {
            type: Number,
            requires: true,
        },
        read: {
            type: Boolean,
            requires: true,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model('Notification', NotificationSchema);
