import config from "../config";

console.log("url: ",config.apiUrlPost)

var Api = {
     getPosts() {
        const url = config.apiUrlPost;
        return this.getUrl(url, "post" );
      },

      async getUrl(url, name) {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY2MDQ2NjQ1MywiZXhwIjoxNjYwNTUyODUzfQ.JqOoN84SMdOQE11vVpFpGCxzZDndzXcIAV2Ju36XUdA";
        try{
            let response = await fetch(url, {
                method: "get",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            response = await response.json();
            console.log( name + " : getting JSON : ", response );
            return response;
          }
          catch(error){
            console.warn(name + ' : unable to retrieve : '+ name, error.message);
          }
      }
}

export default Api;