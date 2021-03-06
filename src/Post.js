import React from 'react';
// import ReactDOM from 'react-dom';

import './Post.css'


class User extends React.Component{
    
    render(){
        return(
            <div className="User">
                <h5>@{this.props.user}</h5>
            </div>
        )
    }
}

class Content extends React.Component{

    display(){
        // console.log(this.props.img)
        if(this.props.img){
            return(
                // <div className="Content">
                    <img className="Img" src={this.props.img}/>
                //     <p className="Caption">{this.props.content}</p>
                // </div>
            )
        }
        // else{
        //     return(
        //         <div className="Content">
        //             {/* <img className="Img" src={this.props.img}/> */}
        //             <p className="Caption">{this.props.content}</p>
        //         </div>
        //     )

        }
    
    render(){
        console.log("this")
        return(
            <div className="Content">
                <div id="Postimg">
                    {this.display()}
                </div>
                <div id="Postcaption">
                    <p className="Caption">{this.props.content}</p>
                </div>                
            </div>
        //    <>
        //    </>
        )

    }
}

class Likes extends React.Component{

    constructor(props){
        super(props);
        this.state={
            likestate:false,
            likesrc:"https://img.icons8.com/material/24/000000/like--v1.png",
            unlikesrc:"https://img.icons8.com/material-outlined/24/000000/like.png",
            likes:parseInt(this.props.likes),
        }
    }
    toggle=()=>{
        
        this.setState({
            likestate:!this.state.likestate
        })
        if (this.state.likestate===false){
            this.setState({
                likes:this.state.likes+1
            })
        }
        else{
            this.setState({
                likes:this.state.likes-1
            })
        }
    }
    imgsrc(){
        if (this.state.likestate===false){
            
            return (this.state.unlikesrc)
        }
        else{
            
            return(this.state.likesrc)
        }
    }

    render(){
        return(
            <div className="Likes">
                
                <div className="Hearts" style={{display:"flex"}}>
                    <button id="likebutton" onClick={this.toggle}><img id ="likeimg" src={this.imgsrc()}/></button><p>{this.state.likes}</p>
                </div>
                <div className="Comments" style={{display:"flex"}}>
                    <button id="commentbutton" ><img src="https://img.icons8.com/material-outlined/24/000000/comments.png"/></button><p id="invis-text">Comments</p>
                </div>
                <div className="Share" style={{display:"flex"}}>
                    <button id ="sharebutton"><img src="https://img.icons8.com/ios-filled/30/000000/forward-arrow.png"/></button><p id="invis-text">Share</p>
                </div>
            </div>
        )

    }
}

class Comments extends React.Component{

    // render(){

    // }
}

class Post extends React.Component{
    constructor(props){
        super(props)
        this.state={
            user:this.props.user,
            content:this.props.content,
            likes:this.props.likes,
            img:this.props.img,
        }
    }

    render(){
        return(
            <div className='Post'>
                <User user={this.state.user}/>
                <Content content={this.state.content} img={this.state.img}/>
                <Likes likes={this.state.likes}/>
                {/* <Comments/> */}
            </div>
        )
    }
}

export default Post