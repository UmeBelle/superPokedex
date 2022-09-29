import api from "./Api";

const auth= {
    login: ()=>{
        const url= "/";
        return api.get(url)
            .then((res)=>{
                console.log(res);
            }) 
            .catch((error)=>{
                console.log(error);
            })

    }
}

export default auth;
