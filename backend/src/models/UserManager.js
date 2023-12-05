const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.connection.query(
      `insert into ${this.table} (username, email, password) values (?, ?, ?)`,
      [user.username, user.email, user.password]
    );
  }

  update(user) {
    return this.connection.query(
      `update ${this.table} set username = ?, email = ?, password = ? where id = ?`,
      [user.username, user.email, user.password, user.id]
    );
  }
}

module.exports = UserManager;
