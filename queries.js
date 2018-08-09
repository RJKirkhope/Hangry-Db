const database = require('./database-connection')

module.exports = {
  list(){
    return database('restaurants').select()
},
  read(id){
    return database('restaurants').select().where('id', id).first()
},
  create(restaurant){
    return database('restaurants').insert(restaurant).returning('*').then(record => record[0])
},
  update(id, restaurant){
    return database('restaurants').update(restaurant).where('id', id).returning("*").then(record => record[0])
},
  delete(id){
    return database('restaurants').delete().where('id', id)
}
}