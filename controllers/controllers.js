//funciones para las rutas
function post(req,res){
    res.send('POST');
}
function put(req,res){
    res.send('PUT');
}
function delet(req,res){
    res.send('delete');
}

function get (req,res){
    res.send('Get');
}

module.exports = {
    get,
    post,
    put,
    delet
}