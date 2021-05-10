const mysql = require("mysql");
const db_config = require("./db.config");
const promise = require("bluebird");

promise.promisifyAll(require("mysql/lib/Connection").prototype);
promise.promisifyAll(require("mysql/lib/Pool").prototype);

const getAll = async() => {

    const con = mysql.createConnection(db_config.DB_CONFIG);
    await con.connectAsync();

    const query = "SELECT * FROM messages";
    const result = await con.queryAsync(query,[]);

    await con.endAsync();

    return result;
}


const addMessage = async(input) => {

    const con = mysql.createConnection(db_config.DB_CONFIG);
    await con.connectAsync();

    const query = "INSERT INTO messages(message, sectionId) VALUES (?,?)";
    const result = await con.queryAsync(query, [input.msg, input.sectionId]);

    await con.endAsync();

    return result;
}


const updateMessage = async(input) => {

    const con = mysql.createConnection(db_config.DB_CONFIG);
    await con.connectAsync();

    const query = "UPDATE messages SET message = ? WHERE messageId = ?";
    const result = await con.queryAsync(query, [input.msg, input.messageId]);

    await con.endAsync();

    return result;
}


const deleteMessage = async(input) => {

    const con = mysql.createConnection(db_config.DB_CONFIG);
    await con.connectAsync();

    const query = "DELETE FROM messages WHERE messageId = ?";
    const result = await con.queryAsync(query, [input.messageId]);

    await con.endAsync();

    return result;
}

module.exports = {getAll, addMessage, updateMessage, deleteMessage};