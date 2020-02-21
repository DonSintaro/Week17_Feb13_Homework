const path = require("path");


function exercise(){
    return (path.join(__dirname , ".." , "/public/exercise.html"));
}

function stats(){
    return (path.join(__dirname , ".." , "/public/stats.html"));
}

function index(){
    return (path.join(__dirname, "..", "/public/index.html"));
}

let render = {
    index:index,
    exercise:exercise,
    stats:stats
};

module.exports = render;