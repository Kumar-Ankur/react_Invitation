import React, {useState } from "react";
import {recordRef} from './firebase';
import "../../sass/main.scss";

const Form = () => {
    const [name, setName] = useState("");
    const [chicken, setChicken] = useState(false);
    const [panner, setPanner] = useState(false);
    const [rice, setRice] = useState(false);
    const [roti, setRoti] = useState(false);
    const [raita, setRaita] = useState(false);

    const checkDisable = () => {
        if(name === "") {
            return true
        }
        return false
    }
    const onchangeHandler = e => {
        setName(e.target.value)
    }

    const onclickHandler = e => {
        e.preventDefault();
        const payload = {
            name,
            chicken,
            panner,
            roti,
            rice,
            raita
        }
        recordRef.push().set(payload);
        setName("")
        setChicken(false)
        setPanner(false)
        setRice(false)
        setRoti(false)
        setRaita(false)
        
    }
  return (
      <div className="form">
    <form>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          aria-describedby="emailHelp"
          value={name}
          onChange={e => onchangeHandler(e)}
        />
      </div>
      <div className="form-group form-check">
        <input
          type="checkbox"
          className="form-check-input box"
          id="chicken"
          checked={chicken}
          onChange = { () => setChicken(!chicken)}
        />
        <label className="checkbox form-check-label" htmlFor="chicken">
          Chicken
        </label>
      </div>
      <div className="form-group form-check">
        <input
          type="checkbox"
          className="form-check-input box"
          id="panner"
          checked={panner}
          onChange = { () => setPanner(!panner)}
        />
        <label className="checkbox form-check-label" htmlFor="panner">
          Panner
        </label>
      </div>
      <div className="form-group form-check">
        <input
          type="checkbox"
          className="form-check-input box"
          id="rice"
          checked={rice}
          onChange = { () => setRice(!rice)}
        />
        <label className="checkbox form-check-label" htmlFor="rice">
          Rice
        </label>
      </div>
      <div className="form-group form-check">
        <input
          type="checkbox"
          className="form-check-input box"
          id="roti"
          checked={roti}
          onChange = { () => setRoti(!roti)}
        />
        <label className="checkbox form-check-label" htmlFor="roti">
          Roti
        </label>
      </div>
      <div className="form-group form-check">
        <input
          type="checkbox"
          className="form-check-input box"
          id="raita"
          checked={raita}
          onChange = { () => setRaita(!raita)}
        />
        <label className="checkbox form-check-label" htmlFor="raita">
          Raita
        </label>
      </div>
      <button type="submit" className="btn btn-primary submit" disabled={checkDisable()} onClick={e => onclickHandler(e)}>
        Submit
      </button>
    </form>
    </div>
  );
};

export default Form;
