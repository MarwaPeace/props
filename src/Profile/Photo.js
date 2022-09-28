import Card from 'react-bootstrap/Card';

function ProfileImg(props){
    
    const imgURL = props.imgURL;
    
    return(
<Card.Img variant="top" src={imgURL} />

    )
}
export default ProfileImg;