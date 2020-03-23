import React from "react";

class BadgeForm extends React.Component {


    handleSubmit = (event) => {  event.preventDefault();  this.sendMessage()}
    render() {
      return(
        <div>
          <h2>Let's Talk</h2>
          <form method="POST"
              action="https:google.com/forms" target="_blank" onsubmit="return window.submitGoogleForm(this);" >
              <div class="row">
                <div class="col">
                  <div class="form-group">
                    <input type="text" name="entry.2005620554" onSubmit={this.handleSubmit} class="form-control name" id="entry_2005620554" dir="auto" aria-label="Name  " aria-required="true" placeholder="Name" />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <div class="form-group">
                    <input type="email" name="entry.1045781291" onSubmit={this.handleSubmit} class="form-control email" id="entry_1045781291" dir="auto" aria-label="Email  " aria-required="true" placeholder="Email" />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <div class="form-group">
                    <input type="number" name="entry.1166974658" onSubmit={this.handleSubmit} class="form-control phone" id="entry_1166974658" dir="auto" aria-label="Phone Number  " aria-required="true" placeholder="Phone" />
                  </div>
                </div>
              </div>
              <textarea class="form-control" rows="5" dir="auto" aria-label="Message  " aria-required="true" placeholder="Message" />
              <div class="col">
                <div class="form-group">
                  <input type="submit" id="submit" class="btn btn-primary btn-sm btn-block" name="submit" value="Submit Test Form" />
                </div>
              </div>
          </form>
        </div>
      );
    }
}

export default BadgeForm;
