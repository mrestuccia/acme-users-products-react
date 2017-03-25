const conn = require('./conn');


const sync = ()=>{
  return conn.sync();
}

module.exports sync;
