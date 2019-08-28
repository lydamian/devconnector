const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Scheme({
user : {
	type: mongoose.Schema.Types.ObjectId,
	ref: 'user',
}

});