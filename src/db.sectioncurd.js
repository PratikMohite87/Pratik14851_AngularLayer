const mysql = require("mysql");
const db_config = require("./db.config");
const promise = require("bluebird");

promise.promisifyAll(require("mysql/lib/Connection").prototype);
promise.promisifyAll(require("mysql/lib/Pool").prototype);

const updateSection = async(input) => {

    const con = mysql.createConnection(db_config.DB_CONFIG);
    await con.connectAsync();

    const query = "UPDATE section SET sectionName = ? WHERE sectionId = ?";
    const result = await con.queryAsync(query, [input.sectionName, input.sectionId]);

    await con.endAsync();

    return result;
};

const getAll = async() => {

    const con = mysql.createConnection(db_config.DB_CONFIG);
    await con.connectAsync();

    const query = "SELECT * FROM section";
    const result = await con.queryAsync(query, []);

    await con.endAsync();

    return result;
}

module.exports = {updateSection, getAll};