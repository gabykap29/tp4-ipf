//funciones para las rutas
async function post(req,res){
    res.send('POST');
}
async function put(req,res){
    res.send('PUT');
}
async function delet(req,res){
    res.send('delete');
}

async function get (req,res){
    res.send('Get');
}

module.exports = {
    get,
    post,
    put,
    delet
}