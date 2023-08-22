const mongoose = require('mongoose');
const Schemae = mongoose.Schema;

const crudSchema = Schemae({
    todo: { type: String },
    isDeleted: { type: Boolean, enum: [true, false], default: false }
}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('crud', crudSchema);