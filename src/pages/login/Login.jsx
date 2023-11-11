import { Form, Modal,Button, Container } from 'react-bootstrap';
import { Form as RouterForm,Link, useLocation, useNavigate } from 'react-router-dom';

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
                <RouterForm centered>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>EMAIL</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>PASSWORD</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>
                    <div className="d-flex justify-content-center">
                        <div className="d-flex gap-3">
                            <Button type="submit" style={{backgroundColor:'#0A3E33', border:'none'}}>
                                <Link to="/register" style={{color:"white", textDecoration:'none'}}>
                                    NEW USER
                                </Link>
                            </Button>
                            <Button type="submit" style={{backgroundColor:'#0A3E33', border:'none'}}>
                                LOGIN
                            </Button>
                        </div>

                    </div>
                </RouterForm>
            </Container>
        </div>
      </Modal>
    </>
  );
}

export default Login;