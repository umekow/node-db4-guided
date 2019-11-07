
exports.up = function(knex) {
  return knex.schema.createTable('species', table => {
      table.increments(); 
      table.string('name', 255).notNullable(); 
  })
  .createTable('animals', table => {
      table.increments(); 
      table.string('name', 255).notNullable(); 

      //define foreign keys
    table.integer('species_id').unsigned()
    .references('id')
    .inTable('species')
    .onDelete('RESTRICT') //about deleting the record from the primary table (RESTRICT, INACTION, SETNULL)
    .onUpdate('CASCADE') //about changing the value of the primary key note

  }).createTable('animal_zoos', table => {
      table.increments();
      table.integer(zoo_id).unsigned()
      .references('id')
      .inTable('zoos')
      .onDelete('RESTRICT') //about deleting the record from the primary table (RESTRICT, INACTION, SETNULL)
      .onUpdate('CASCADE');

      table.integer(animal_id).unsigned()
      .references('id')
      .inTable('animals')
      .onDelete('RESTRICT') //about deleting the record from the primary table (RESTRICT, INACTION, SETNULL)
      .onUpdate('CASCADE');

      table.string('from', 128)
      table.string('to', 128)
  }).createTable('zoos', table => {
    table.increments();
    table.string('name', 255);
    table.string('address', 255); 
})
};

exports.down = function(knex) {
  
};
