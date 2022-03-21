const { Schema, model, Types} = require ('mongoose')


/**
 * Schema pro ukladani ukolu do DB
 * @type {module:mongoose.Schema<any, Model<any, any, any, any>, any, any>}
 */
const schema = new Schema({
    owner: {type: Types.ObjectId, ref: 'User'},
    text: {type: String},
    completed: false,
    important: false
})

module.exports = model('Todo', schema)