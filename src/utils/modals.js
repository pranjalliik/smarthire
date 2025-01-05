import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
 
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String },
  location: { type: String },
  revenue: { type: Number },
  webVisits: { type: Number },
  tags: [{ type: String }],
  lastMsgTime: { type: Date , default :  Date.now},
  lastMessage: { type: String , default : ' '},
  photo : {type : String},
  channel : {type : String} ,
});

export let user =  mongoose.models.User || mongoose.model('User', UserSchema);






const ConversationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  messages: { type: Array, default: [] },
});

export let conversation =  mongoose.models.Conversation || mongoose.model('Conversation', ConversationSchema);


