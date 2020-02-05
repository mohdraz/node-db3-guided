const db = require("../data/db-config.js");

function find() {
  return db("users");
}

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}

function findPosts(id) {
  return db("posts as p")
    .join("users as u", "u.id", "p.user_id")
    .select("p.id", "u.username", "p.contents")
    .where({ user_id: id });
}

function add(userData) {
  return db("users").insert(userData);
}

function update(id, changes) {
  return db("users")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("users")
    .where({ id })
    .del();
}
module.exports = {
  find,
  findById,
  findPosts,
  add,
  update,
  remove
};

// select p.id, u.username, p.contents
// from posts as p
// join users as u
// on u.id = p.user_id
// where user_id = ##
