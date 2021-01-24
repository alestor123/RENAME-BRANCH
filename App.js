var axios = require('axios')
module.exports = async (username,token) => {
if(!(token&&username)) throw Error('Please enter token and username correctly ')
else axios.defaults.headers.common['Authorization'] = `bearer ${token}`;
var data = await axios.get(`https://api.github.com/users/${username}/repos?per_page=2000`)
data.data.map(async repos => await axios.post(`https://api.github.com/repos/${username}/${repos.name}/branches/main/rename`,{new_name:'master'}) )
}