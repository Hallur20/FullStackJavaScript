LocationBlog = require('../models/locationBlog');
module.exports = {
addLocationBlog : function(info, author, longitude, latitude) {
    var LocationBlogDetail = { info, pos: { longitude, latitude }, author };
    var blog = new LocationBlog(LocationBlogDetail);
    return blog.save()
},

likeLocationBlog : function() {

}
}