var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
var passportLocalMongoose = require('passport-local-mongoose');
var Schema = mongoose.Schema;
var jwt = require('jsonwebtoken');

autoIncrement.initialize(mongoose.connection);

var accountSchema = new Schema({
  user_name: String,
  phonenumber:{
    type:Number,
    required: true
  },
  password: {
    type: String,
    required : true
  },
  role: {
    type: String,
    default: "user"
  },
  balance:{
    type:Number,
    required:true
  },
  referral_code:{//Who invite me 
    type:Number,
    required:true
  },
  invite_code:{//my referral Number->radom nuber I will use this with date.now
    type:Number,
    required:true
  },
  token: String,
  avatar: String,
  account_status: String,
  start_time: Date,
  end_time: Date,
},{
  usePushEach : true
});

accountSchema.plugin(autoIncrement.plugin, 'data_accounts');
accountSchema.plugin(passportLocalMongoose);

accountSchema.methods.generateJwt = function() {
  var expiry = new Date();
  expiry.setHours(expiry.getHours() + 4);

  return jwt.sign({
    userId        :   this._id,
    phonenumber   :   this.phonenumber,
    accountStatus :   this.account_status,
    avatar        :   this.avatar,
    referral_code :   this.referral_code,
    invite_code   :   this.invite_code,
    token         :   this.token,
    role          :   this.role,
    exp           :   parseInt(expiry.getTime() / 1000),
  }, this.token);
};

module.exports = mongoose.model('data_accounts', accountSchema);