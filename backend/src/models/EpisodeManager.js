const AbstractManager = require("./AbstractManager");

class EpisodeManager extends AbstractManager {
  constructor() {
    super({ table: "episode" });
  }

  insert(episode) {
    return this.connection.query(
      `insert into ${this.table} (id_serie , season, episode, title, description) values (?, ?, ?, ?, ?)`,
      [
        episode.id_serie,
        episode.season,
        episode.episode,
        episode.title,
        episode.description,
      ]
    );
  }

  update(episode) {
    return this.connection.query(
      `update ${this.table} set id_serie = ?, season = ?, episode = ?, title = ?, description = ? where id = ?`,
      [
        episode.id_serie,
        episode.season,
        episode.episode,
        episode.title,
        episode.description,
        episode.id,
      ]
    );
  }
}

module.exports = EpisodeManager;
