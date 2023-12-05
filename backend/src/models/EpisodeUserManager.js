const AbstractManager = require("./AbstractManager");

class EpisodeUserManager extends AbstractManager {
  constructor() {
    super({ table: "episode_user" });
  }

  insert(episodeUser) {
    return this.connection.query(
      `insert into ${this.table} (id_user, id_serie, season, episode) values (?, ?, ?, ?)`,
      [
        episodeUser.id_user,
        episodeUser.id_serie,
        episodeUser.season,
        episodeUser.episode,
      ]
    );
  }

  update(episodeUser) {
    return this.connection.query(
      `update ${this.table} set id_user = ?, id_serie = ?, season = ?, episode = ? where id = ?`,
      [
        episodeUser.id_user,
        episodeUser.id_serie,
        episodeUser.season,
        episodeUser.episode,
        episodeUser.id,
      ]
    );
  }
}

module.exports = EpisodeUserManager;
