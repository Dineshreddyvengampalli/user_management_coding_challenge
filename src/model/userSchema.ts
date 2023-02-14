import mongoose , { Schema, model, connect } from 'mongoose';

mongoose.set('strictQuery', false);

interface User {
    name: string;
    email: string;
    dob: string;
}

const users = new Schema<User>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    dob: { type: String, required: true },
  });

export const User = model<User>('User', users);
