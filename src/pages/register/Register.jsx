import { Form, Modal,Button, Container } from 'react-bootstrap';
import {  useLocation, useNavigate } from 'react-router-dom';
function Register() {
    const navigate = useNavigate();
    const location = useLocation();
    return ( <>
        <Modal show={location.pathname === "/register"} backdrop="static" centered onHide={()=>{navigate("/")}} style={{ backgroundImage:'linear-gradient(to bottom right, #0A3E33,rgb(205, 210, 206))' }}>
        <div style={{backgroundColor:'#B9C9BC'}}>
            <Modal.Header closeButton style={{borderBottom:''}}>
                <div className="h4">Create New Account</div>
            </Modal.Header>
            <Container className='p-4'>
                <Form centered>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>NAME <span className="text-danger">*</span> </Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>EMAIL <span className="text-danger">*</span></Form.Label>
                        <Form.Control type="email" placeholder="Enter email" required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>PASSWORD <span className="text-danger">*</span></Form.Label>
                        <Form.Control type="password" placeholder="Password" required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>RE-ENTER PASSWORD <span className="text-danger">*</span></Form.Label>
                        <Form.Control type="password" placeholder="Re-enter Password" required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <div className="d-flex">
                            <Form.Check type="checkbox" label="Terms & conditions" required/> 
                            <span className="text-danger">&nbsp;*</span>
                        </div>
                    </Form.Group>
                    <div className="d-flex justify-content-center">
                        <div className="d-flex gap-3">
                            <Button type="submit" style={{backgroundColor:'#0A3E33', border:'none'}}>
                                REGISTER
                            </Button>
                        </div>
                    </div>
                </Form>
            </Container>
        </div>
      </Modal>
    </> );
}

export default Register;