const mongoose = require('mongoose');

const bcrypt = require('bcrypt-nodejs');

const { Schema } = mongoose;

mongoose.Promise = global.Promise;
const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
  },
  password: String,
});

// eslint-disable-next-line
userSchema.pre('save', function (next) {
  const user = this;
  if (!user.isModified('password')) {
    return next();
  }

  bcrypt.genSalt(10, (err, salt) => {
    if (err) { return next(err); }

    bcrypt.hash(user.password, salt, null, (error, hash) => {
      if (error) { return next(error); }

      user.password = hash;
      return next();
    });
    return { pre: true };
  });
});

// eslint-disable-next-line
userSchema.methods.comparePassword = function (candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) return cb(err);
    return cb(null, isMatch);
  });
};

const ModelClass = mongoose.model('user', userSchema);

module.exports = ModelClass;
