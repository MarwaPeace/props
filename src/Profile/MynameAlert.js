import Alert from 'react-bootstrap/Alert';

function MynameAlert(props){
    const fullName= props.fullName;
   
    return(
       
       <>
         
            <Alert key="success" variant="success">
               <h1>my Name is {fullName}, nice 😊</h1>
            </Alert>
            </>
        
    );
}
export default MynameAlert;