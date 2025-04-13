import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Register() {
    let register=()=>(
        alert('Hello')
    )
  return (
    <Form>
        <h1 className='d-flex flex-wrap justify-content-center'>Register</h1>
         <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your user name" />
        <Form.Text className="text-muted">
          We'll share your user name with anyone .
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="button" onClick={()=>register()}>
        Submit
      </Button>
    </Form>
  );
}

export default Register;