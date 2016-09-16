var React = require('react');

var AbsDisplay = React.createClass({
  render: function(){
    return(
      <div className="abs-container">
        <div>
          <div className="left-side-ab">
            <div></div>
          </div>
        </div>
        <div>
          <div className="ab-row first">
            <div className="left-ab">
              <div></div>
            </div>
            <div className="right-ab">
              <div></div>
            </div>
          </div>
          <div className="ab-row">
            <div className="left-ab">
              <div></div>
            </div>
            <div className="right-ab">
              <div></div>
            </div>
          </div>
          <div className="ab-row">
            <div className="left-ab">
              <div></div>
            </div>
            <div className="right-ab">
              <div></div>
            </div>
          </div>
        </div>
        <div>
          <div className="right-side-ab">
            <div></div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = {
  AbsDisplay: AbsDisplay
}