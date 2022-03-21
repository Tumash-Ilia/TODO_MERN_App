const { Schema, model, Types} = require ('mongoose')

/**
 * Schema pro ulozeni uzivatele do DB
 * @type {module:mongoose.Schema<any, Model<any, any, any, any>, any, any>}
 */
const schema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    todos: [{type: Types.ObjectId, ref: 'Todo'}]
})

module.exports = model('User', schema)