import React, {Component} from 'react';
import SocialPost from './SocialPost/SocialPost'; 
import CommentForm from '../../components/comments/commentFrom';

class Feeds extends Component {
    state ={
        posts: {
            "1":   {
                "userName": 'Toronto Raptors',
                "userId": 1,
                "profileImg": "https://pbs.twimg.com/profile_images/1109489260661485570/cNx_Fi5H_bigger.png",
                "image": "https://pbs.twimg.com/media/D3KLOAlXkAE6-cU.jpg",
                "body": "Danny! Danny! Danny!\n29 Pts // 7 3PM // 5 Rebs / 3 Blk / 2 Stl\n@DGreen_14 | #WeTheNorth",
                "subtext": "Last updated 3 mins ago"
              },
            "2":   {
                "userName": 'Toronto Raptors',
                "userId": 1,
                "profileImg": "https://pbs.twimg.com/profile_images/1109489260661485570/cNx_Fi5H_bigger.png",
                "image": "https://pbs.twimg.com/media/D3KLOAlXkAE6-cU.jpg",
                "body": "Danny! Danny! Danny!\n29 Pts // 7 3PM // 5 Rebs / 3 Blk / 2 Stl\n@DGreen_14 | #WeTheNorth",
                "subtext": "Last updated 3 mins ago"
              },
        }
    }
    render(){
        return(
            <div>
                <SocialPost posts={this.state.posts}/>
                <CommentForm/>
            </div>
        );
    }
}

export default Feeds;