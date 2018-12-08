if (process.env.NODE_ENV === 'production'){
    module.exports = {
        mongoURI : "mongodb://devryAdmin:d3vryPassword@ds229474.mlab.com:29474/devry_prod"
    }
} else {
    module.exports = {
        mongoURI : "mongodb://localhost:27017/devry_dev"
    }
}