const AbstractManager = require("./AbstractManager");

class SerieManager extends AbstractManager {
  constructor() {
    super({ table: "serie" });
  }

  findForUser(id, userId) {
    return this.connection.query(
      `select
        serie.*,
        JSON_ARRAYAGG(
          JSON_OBJECT(
            "id", episode.id,
            "season", episode.season,
            "episode", episode.episode,
            "title", episode.title,
            "description", episode.description,
            "seen", IFNULL(episode_user.seen, false)
          )
        ) as episodes
        from ${this.table}
        left join episode on serie.id = episode.id_serie
        left join episode_user on episode.id = episode_user.id_episode
        where serie.id = ? and (episode_user.id = ? or episode_user.id is null)`,
      [id, userId]
    );
  }

  insert(serie) {
    return this.connection.query(
      `insert into ${this.table} (img, title, genre, year, description) values (?, ?, ?, ?, ?)`,
      [serie.img, serie.title, serie.genre, serie.year, serie.description]
    );
  }

  update(serie) {
    return this.connection.query(
      `update ${this.table} set img = ?, title = ?, genre = ?, year = ?, description = ? where id = ?`,
      [
        serie.img,
        serie.title,
        serie.genre,
        serie.year,
        serie.description,
        serie.id,
      ]
    );
  }
}

module.exports = SerieManager;
