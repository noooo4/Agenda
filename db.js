module.exports=function (pool) {
    const pool=mysql.createPool(options);
    return {
        studenti:  function ( username, password, callback ) {
            pool.query("SELECT * FROM studenti WHERE username=? AND password=?", [username, password], callback);
        },
        materie: function ( subject, teacher, callback ) {
            pool.query("SELECT * FROM materie WHERE subject=? AND teacher=?", [subject, teacher], callback);
        }
    }
}