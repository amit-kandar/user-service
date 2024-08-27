import mongoose, { Schema, Document } from 'mongoose';

interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  bio?: string;
  profilePicture?: {
    public_id: string;
    url: string;
  };
  followers: Array<{
    userId: mongoose.Types.ObjectId;
    followedAt: Date;
  }>;
  following: Array<{
    userId: mongoose.Types.ObjectId;
    followedAt: Date;
  }>;
  roles: string[];
  preferences: {
    language: string;
    notifications: boolean;
  };
  resetPasswordToken?: string;
  resetPasswordExpires?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema: Schema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    bio: String,
    profilePicture: {
      type: {
        url: { type: String, required: true },
        public_id: { type: String, required: true },
      },
    },
    followers: [
      {
        userId: { type: Schema.Types.ObjectId, ref: 'User' },
        followedAt: { type: Date, default: Date.now },
      },
    ],
    following: [
      {
        userId: { type: Schema.Types.ObjectId, ref: 'User' },
        followedAt: { type: Date, default: Date.now },
      },
    ],
    roles: {
      type: [String],
      default: ['user'],
    },
    preferences: {
      language: { type: String, default: 'en' },
      notifications: { type: Boolean, default: true },
    },
    resetPasswordToken: String,
    resetPasswordExpires: Date,
  },
  { timestamps: true }
);

const User = mongoose.model<IUser>('User', UserSchema);
export default User;
