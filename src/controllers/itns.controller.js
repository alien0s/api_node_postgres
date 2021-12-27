const db = require('../config/database')

exports.createItem = async (req,res) => {
    const { id,nm } = req.body
    const { rows } = await db.query(
        "INSERT INTO itns (id,nm) values ($1,$2)",
        [id,nm]
    )

    res.status(201).send({
        message:"Item adicionado",
        body:{
            item:{
                id,
                nm
            }
        }
    })
}
// exports.mostrarItns = async (req,res) => {
//     const text = 'SELECT id,nm,cvr,wllp,ano,drc,snps,trlr,ttl_ornl,dt,btns, (SELECT gnr_dsc from gnr where gnr_1_id = id_gnr) as gnr1,(SELECT gnr_dsc from gnr where gnr_2_id = id_gnr) as gnr2,(SELECT gnr_dsc from gnr where gnr_3_id = id_gnr) as gnr3 FROM itns';
//     const response = async = db.query(text)
//     res.status(200).send(response.rows)
// }

