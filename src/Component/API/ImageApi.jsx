import axios from 'axios';


const ImageApi = ()=>{
    const url = "https://pixabay.com/api/?key=16544639-16480b4b1dd6eba25468662b3&q=yellow+flowers&image_type=photo&pretty=true";
        return(
            axios.get(url)
            .then(res => {
              const persons = res.data;
              console.log(persons);
            })
        );
    };

export default ImageApi;