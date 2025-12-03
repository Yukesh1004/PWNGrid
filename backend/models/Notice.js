const mongoose = require('mongoose');

const noticeSchema = new mongoose.Schema({
  eventName: {
    type: String,
    required: [true, 'Event name is required'],
    trim: true,
    maxlength: 300
  },
  rulesAndRegulations: {
    type: String,
    required: [true, 'Rules and Regulations are required'],
    trim: true
  },
  notifications: {
    type: String,
    required: [true, 'Notifications are required'],
    trim: true
  },
  description: {
    type: String,
    trim: true,
    default: ''
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  isActive: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

noticeSchema.index({ createdAt: -1 });
noticeSchema.index({ isActive: 1 });
noticeSchema.index({ createdBy: 1 });

module.exports = mongoose.model('Notice', noticeSchema);
