module.exports = ({token}) => {

    const promise = new Promise(
        (resolve, reject) => {

            if (!token) {
                reject('Необходимо авторизоваться');
            }

            let connection;
            require('../../db/db').connector()
                .then(
                    (conn) => {
                        connection = conn;
                        return connection.query(`SELECT a.user_id FROM token a WHERE token = '${token}' AND a.active='1'`);
                    }
                )
                .then(
                    (rows) => {
                        if (rows.length === 0) {
                            reject('Пользователь не определен');
                        } else {
                            resolve(rows[0].user_id);
                        }
                        connection.end();
                    }
                )
                .catch(
                    (error) => {
                        reject(error);
                        if (connection && connection.end) connection.end();
                    }
                );

        }
    );

    return promise;

}
