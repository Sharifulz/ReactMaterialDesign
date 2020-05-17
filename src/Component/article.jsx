import React, { Component } from 'react';
import './article.css'
import {Link} from 'react-router-dom';

class Article extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Link to="/"><li>Home</li></Link>
                 <Link to="/about"><li>About</li></Link>
                    <Link to="/shop"><li>Shop</li></Link>
                    <Link to="/article"><li>Article</li></Link>
                <h1 className="h1tag">Bio Data of Md. Shariful Islam</h1>
                <h3 className="h3tag">Lorem ipsum dolor sit amet consectetur adipisicing elit
                . Explicabo autem, iure ipsam cum suscipit temporibus deleniti sed 
                cupiditate inventore delectus molestiae amet laboriosam cumque 
                natus mollitia! Earum accusamus debitis ab corrupti nam perferendis 
                doloribus eos, laudantium laboriosam, nostrum dicta qui perspiciatis
                 amet deleniti reiciendis ex tenetur officiis recusandae voluptas, 
                 modi fuga porro necessitatibus repellendus culpa. Expedita alias 
                 harum dicta enim, labore natus voluptas nemo error, voluptatum minus
                  iste magnam consequuntur eum eligendi adipisci, nihil tenetur. 
                  Tenetur sunt nam totam modi debitis, harum maiores non adipisci
                   quas reiciendis quisquam saepe cum, facilis, similique ducimus molestias
                    vero voluptatibus dolore blanditiis quibusdam fugiat.
                    </h3>
            </div>
         );
    }
}
 
export default Article;