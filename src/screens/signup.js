import React from "react";
import Seo from "../shared/Seo";
import Signupsection from "../shared/Signupsection";

function Signup() {
  return (
    <React.Fragment>
      <Seo>
        <header>
          <div className="signup-header">
        

            <img  className="signup-logo" src="./asset/img/LurisBytee.png"/>

            <h3>Create an Account and continue </h3>

          </div>
        </header>

        <section>
                <Signupsection/>
        </section>
      </Seo>
    </React.Fragment>
  );
}
export default Signup;
