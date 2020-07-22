import React from 'react'
import {Form, FormGroup, Col, Row, FormLabel, FormControl} from 'react-bootstrap';

function SearchForm({params, onParamChange}) {
    return (
       <Form>
           <Row>
               <FormGroup as={Col} >
                    <FormLabel>
                        Description
                    </FormLabel>
                    <FormControl className="search" onChange={onParamChange} value={params.description} name="description" type="text"/>
               </FormGroup>
               <FormGroup as={Col} >
                    <FormLabel>
                        Location
                    </FormLabel>
                    <FormControl className="search" onChange={onParamChange} value={params.location} name="location" type="text"/>
               </FormGroup>
           </Row>
       </Form>
    )
}

export default SearchForm;
