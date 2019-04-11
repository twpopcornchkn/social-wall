import React, {Component} from 'react';
import CardContent from '../../../components/card-content';

class SocialPost extends Component {
  
    render(){
        const postElements =[];
        // console.log(this.props.posts)
        for(let key in this.props.posts){
            postElements.push({
                id: key,
                ...this.props.posts[key]
            })
        }
        //sort by createdDate descendingly 
        postElements.sort(function(a, b){return b.createdDate - a.createdDate});
        
        const Posts = postElements.map(post =>{
            return <CardContent
                    key={post.id} 
                    userName={post.username}
                    image={post.image}
                    profileImg={post.profileImg}
                    text={post.text}
                    createdDate={post.createdDate}/>;
        });

        return Posts;
    }
}

export default SocialPost;