import React from 'react';

const SignIn = ( {onRouteChange} ) => {
    return(
<article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center shadow-3 tc">
    <main className="pa4 black-80">
    <div className="measure ">
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
        <legend className="f2 fw6 ph0 mh0">Sign In</legend>
        <div className="mt3">
            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
        </div>
        <div className="mv3">
            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
        </div>
        {/* <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox " /> Remember me</label> */}
        </fieldset>
        <div className="center">
        <input onClick={() => onRouteChange('home')} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" />
        </div>
        <div className="lh-copy mt3">
        <p  
        onClick={() => onRouteChange('register')} 
        className="f5 link dim black db tc pointer
        ">Register</p>
        {/* <a href="#0" className="f6 link dim black db">Forgot your password?</a> */}
        </div>
    </div>
    </main>
</article> 

    );
}

export default SignIn;
