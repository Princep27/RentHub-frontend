import { Form, Modal,Button, Container } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const location = useLocation();
  return (
    <>
      <Modal show={location.pathname === "/login"} centered onHide={()=>{navigate("/")}} >
        <div style={{backgroundColor:'#B9C9BC'}}>
            <Modal.Header closeButton style={{borderBottom:''}}>
                <div className="h4">Login</div>
            </Modal.Header>
            <Container className='p-4'>
                <Form centered>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>
                    <Button type="submit" style={{backgroundColor:'#0A3E33', border:'none'}}>
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
      </Modal>
    </>
  );
}

export default Login;