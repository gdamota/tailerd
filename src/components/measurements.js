import {useContext, useState} from "react";
import {ACTIONS} from "../reducer/actions.js";
import {UserContext} from "../reducer/context.js";
import {Form, Button} from "react-bootstrap";
import "./styles/measurements.scss";

const Measurements = () => {
  const {dispatch} = useContext(UserContext);
  const [brand, setBrand] = useState();
  const [size, setSize] = useState();
  const [Addidas, setAddidas] = useState();
  function subForm(e) {
    e.preventDefault();
    dispatch({
      type: ACTIONS.UPDATE_USER_SIZE,
      payload: size
    });
    dispatch({
      type: ACTIONS.UPDATE_USER_BRAND,
      payload: brand
    });
  }
  return (
    <div className="form-container">
      <h2>Welcome to Sizer!</h2>
      <p>Enter your info below</p>
      <Form onSubmit={subForm}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>
            Size: <br />
            {size}
          </Form.Label>
          <Form.Range
            type="range"
            className="form-range"
            min="1"
            max="20"
            step="0.5"
            onChange={e => setSize(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="brand">
          <label for="brand">Select Brand:</label>
          <Form.Control as="select" onChange={e => setBrand(e.target.value)}>
            <option value="" />
            <option value="Nike">Nike</option>
            <option value="Addidas">Addidas</option>
            <option value="Asics">Asics</option>
            <option value="Rebok">Rebok</option>
          </Form.Control>
        </Form.Group>

        {brand === "Addidas" && (
          <Form.Group className="mb-3" controlId="AddidasStyle">
            <label for="AddidasStyle">Select Style:</label>
            <Form.Control
              as="select"
              onChange={e => setAddidas(e.target.value)}
            >
              <option value="" />
              <option value="Yeezy">Yezzy</option>
              <option value="NMDs">NMDs</option>
              <option value="Nizza">Nizzas</option>
              <option value="Forum Lows">Forum Lows</option>
            </Form.Control>
          </Form.Group>
        )}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Measurements;
