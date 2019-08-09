import React, { useState, useEffect } from "react";
import axios from "axios";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

const UserForm = ({errors, touched, values, status}) => {
    const [users, setUsers] = useState([])
    console.log(users);

    useEffect(() => {
        if (status) {
          setUsers([...users, status]);
        }
      }, [status]);
    
    return(
        <div className="format">
            <Form>
                <h2>App Registration</h2>
                <h3>Username</h3>
                <Field type="text" name="username"/>
                {touched.name && errors.name && <p>{errors.name}</p>}
                <h3>Password</h3>
                <Field type="password" name="password"/>
                {touched.password && errors.password && <p>{errors.password}</p>}
                <h4>We're excited you're joining!</h4>
                <button type="submit">Submit</button>
            </Form>
            {users.map(user => (
        <p key={user.id}>{user.username}</p>
      ))}
        </div>
    )
};

const FormikForm = withFormik({
    mapPropsToValues({username, password}) {
        return {
            username: username || "",
            password: password || "",
        };
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().required("Name!"),
        password: Yup.string().required("Password!")
    }),

    handleSubmit(values, { setStatus }) {
        axios
            .post("http://localhost:5000/api/register", values)
            .then(res => {setStatus(res.data)})
            .catch(err => console.log(err.response))
    }
})(UserForm);

export default FormikForm;