import React, {Component} from 'react';
import CardContent from '../../../components/card-content';
import './SocialPost.css';
import CommentContainer from '../../CommentContainer/CommentContainer';

class Checkout extends Component {
    componentDidMount = () =>{
        // console.log(this.props.posts)
    }
    render(){
        const postElements =[];
        for(let key in this.props.posts){
            postElements.push({
                id: key,
                ...this.props.posts[key]
            })
        }
        const Posts = postElements.map(post =>{
            return <CardContent
                    key={post.id} 
                    userName={post.userName}
                    image={post.image}
                    profileImg={post.profileImg}
                    body={post.body}
                    subtext={post.subtext}/>;
        });

        return (
            <div>
                {Posts}
                <CommentContainer/>
            </div>
        );
    }
}

export default Checkout;