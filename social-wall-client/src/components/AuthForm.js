import React from 'react';

const AuthForm = (props) =>(
    <div>
        <input type="text" value="" placeholder="name"/>
        <input type="password" value="" placeholder="password"/>
        <button type="submit">Submit</button>
    </div>
);

export default AuthForm;