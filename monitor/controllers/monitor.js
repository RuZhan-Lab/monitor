const connection = require('../util/database');


exports.setMonitorData = (req, res, next) => {
    const content = req.body.content;
    const sql = `INSERT INTO monitor(content) VALUE('${content}')`;

    connection.query(sql, function (err, response) {
        if (err) {
           return res.send(err.message);
        }
        res.json({
            code: 0,
            data: true
        })
    })
};

exports.getMonitorData = (req, res, next) => {
    const page = req.query.page;
    const pageSize = req.query.pageSize;
    const sql = `SELECT monitor.*, (SELECT COUNT(1) FROM monitor WHERE is_deleted=0 ) as count FROM monitor WHERE is_deleted=0 ORDER BY create_date DESC LIMIT ${(page - 1) * pageSize}, ${pageSize}`;

    connection.query(sql, function (err, result) {
        if (err) {
            return res.send(err);
        }

        res.json({
            code: 0,
            desc: 'success',
            data: {
                page: page,
                pageSize: pageSize,
                total: result.length ? ((result[0]).count) : 0,
                dataList: result
            }
        });
    })
};

exports.deleteMonitorData = (req, res, next) => {

    const id = req.query.id;
    const sql = `UPDATE monitor SET is_deleted=1 WHERE id=${id}`;

    connection.query(sql, function (err, response) {
        if (err) {
            res.send(err.message);
        }
        res.json({
            code: 0,
            data: true
        })
    })

};

