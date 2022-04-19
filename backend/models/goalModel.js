const mongoose = require('mongoose')

const goalSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      reqired: true,
      ref: 'User'
    },
    text: {
      type: String,
      reqired: [true, 'Please add a text value']
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Goal', goalSchema);