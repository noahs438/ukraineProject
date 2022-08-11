import mongoose from 'mongoose';

// What will each post have to have to work
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    // CAN REMOVE LIKE COUNT LATER ----------- OBVIOUSLY NOT USED FOR UKRAINE WEBSITE
    likeCount: {
        type: Number,
        default: 0  // Set the default like count to 0
    },
    // When were the posts created
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;