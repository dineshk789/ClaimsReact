 import React from 'react';
 import Table from 'react-bootstrap/Table'
 import{ Navbar,Nav, Form ,FormControl,Button} from 'react-bootstrap';
 import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import NavigationBar from './../common/Navigation.jsx';

//const validClaimNumber = new RegExp("[A-Za-z0-9]{3}-[A-Za-z0-9]{3}-[A-Za-z0-9]{3}");
const validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
};
function isValidateProgram(value){
  if(value=="" || value.length>20){
    return false;
  }
return true
}
class UpdateForm extends React.Component {

  constructor(props) {
    console.log('update claim');
    super(props);
    this.state = {
        showUpdate: this.props.showUpdate,    
         errors: {
            claimNumber: '',
            claimProgram: ''
          }
    };
    this.cancelUpdate = this.cancelUpdate.bind(this);
    this.submitClaim = this.submitClaim.bind(this);
    this.handleChange = this.handleChange.bind(this)
}

componentDidMount() {
    console.log('----------------emp_id------------- ', this.props.params.emp_id);
   // axios.get(`http://localhost:3000/claims/${this.props.params.claimId}`)
    axios.get(`http://localhost:8102/rest/claims/getClaim/${this.props.params.emp_id}`)
    .then(res => {
      const claim = res.data;
      console.log(claim);
      this.setState({ claim });
    })
    .catch(error => {
       this.setState({claim:null})
       console.log('error', error);
    })
 }

cancelUpdate() {        
    console.log('cancelling..');
    this.setState({showUpdate: false});
    browserHistory.push('ViewForm');
}
handleChange(event){
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;
console.log("My calim number"+name+":"+value)
    switch (name) {
      case 'claim_number': 
        errors.claimNumber = 
        validClaimNumber.test(value) 
            ? ''
            : 'Claim Number is not valid! XXX-XXX-XXX';         
        break;     
      case 'claim_program': 
        errors.claimProgram = 
        isValidateProgram(value)
            ? ''
            : 'Maximum lenght is 20';         
        break;
      default:
        break;
    }

    this.setState({errors, [name]: value}, ()=> {
      console.log(errors)
    })
  }
submitClaim(e) {

    e.preventDefault();
    console.log('Updating claim', this.refs);
    let putJson = '';
    let claimObj = {
        
        emp_id: this.refs['emp_id'].value,
        emp_name: this.refs['emp_name'].value,
        claim_number: this.refs['claim_number'].value,
        claim_type: this.refs['claim_type'].value,
        claim_program: this.refs['claim_program'].value,
        start_date: this.refs['start_date'].value,
        end_date: this.refs['end_date'].value
    };
    for (const field in this.refs) {
        console.log(field);
        putJson +=  field + ':"' + this.refs[field].value + '"';            
        if(field !== 'end_date') {
            putJson += ",";
        }
    }
    console.log('claimObj', claimObj);
    putJson += ''        
    console.log(putJson);
    
    axios.put('http://localhost:8102/rest/claims/claim/'+ this.refs['emp_id'].value, claimObj)
    .then(res => {
        console.log('res.status', res.status);
        browserHistory.push('ViewForm');
    });        
}

  render() {
     const {errors} = this.state;
    if(this.state.claim) {
      const {id, emp_id, emp_name, claim_number, claim_type, claim_program, start_date, end_date} = this.state.claim;

    return (
   <div>
<NavigationBar/>
    <Navbar  style={{backgroundColor:"#000000"}} variant="dark">
      
    <Nav className="mr-auto">   
     <Nav.Link href="#home" as={Link} to="DashboardForm">Home</Nav.Link>  
      <Nav.Link  href="#viewForm" as={Link} to="ViewForm">View Claim</Nav.Link>  
      <Nav.Link href="#updateForm" as={Link}  to="UpdateForm">Update Claim</Nav.Link>
      <Nav.Link href="#contact" as={Link} to="Contact">Contact Us</Nav.Link>
    </Nav>
  </Navbar>
      <Container className="align-items-center" style={{paddingTop : '50px'}}>
        <Form onSubmit={this.submitClaim}>  
         
          <Row className="justify-content-md-center">
            <Col >            
              
                 <input type="hidden" defaultValue={id}  name="id" ref="id"  />
                 <input type="hidden" defaultValue={emp_id}  name="emp_id" ref="emp_id" />
             
            </Col>

          </Row>
          <Row>
            <Col xs lg="4"> 
              <Form.Group>
                <Form.Label>Employee Name</Form.Label>
                <Form.Control type="text"  defaultValue={emp_name} disabled  name="emp_name" ref="emp_name"/>
              </Form.Group>
            </Col>

          </Row>
          <Row>
            <Col xs lg="4">
              <Form.Group>
                <Form.Label>Claim Number</Form.Label>
                 <Form.Control type="text" defaultValue={claim_number}  name="claim_number" ref="claim_number" maxLength="11"
                            onChange={this.handleChange} noValidate />

                 {errors.claimNumber.length > 0 && 
                <span style={{color: "red"}} className='error'>{errors.claimNumber}</span>}
              </Form.Group>
            </Col>

          </Row>
          <Row>
            <Col xs lg="4"> 
              <Form.Group>
                <Form.Label>Claim Type</Form.Label>
                <Form.Control as="select" defaultValue={claim_type} ref="claim_type">
                  <option>Submitted</option>
                  <option>Received</option>
                  <option>Pending</option>
                  <option>Paid</option>
                  <option>More Info Required</option>
                  <option>Denied</option>
                  <option>Rejected</option>
                </Form.Control>
              </Form.Group>
            </Col>

          </Row>
          <Row>
            <Col xs lg="4"> 
              <Form.Group>
                <Form.Label>Claim Programs</Form.Label>
                <Form.Control type="text" defaultValue={claim_program}  name="claim_program" ref="claim_program" onChange={this.handleChange} noValidate maxLength="20"/>
                {errors.claimProgram.length > 0 && 
                <span style={{color: "red"}} className='error'>{errors.claimProgram}</span>}
              </Form.Group>
            </Col>

          </Row>
          <Row>
            <Col xs lg="4">
              <Form.Group>
                <Form.Label>Claim Start Date</Form.Label>
                <Form.Control type="text" defaultValue={start_date} ref="start_date" />
               
              </Form.Group>
            </Col>

          </Row>
          <Row>
            <Col xs lg="4">
              <Form.Group>
                <Form.Label>Claim End Date</Form.Label>
                <Form.Control type="text" defaultValue={end_date} ref="end_date"/>
              </Form.Group>
            </Col>

          </Row>
          <Row className="mx-auto">
            <Col >
             
              <Button md={{ span: 3, offset: 3 }} variant="secondary" size="lg" active onClick={this.cancelUpdate}>
                Cancel
              </Button>
                {' '}
              <Button md={{ span: 3, offset: 3 }} variant="primary" size="lg" type="submit" active>
               Update
              </Button>
              {' '}
              {' '}
            </Col>
          </Row>
        </Form>
      </Container>
</div>
    );
    }
    return null;
  }
}
export default UpdateForm;

