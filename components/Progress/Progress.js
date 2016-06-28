import React, {Component} from 'react';

export default class Progress extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    let completed = this.props.completed;
    if (completed < 0) {
      completed = 0
    }

    if (completed > 100) {
      completed = 100
    }

    var style = {
      transitionDuration: "width 200ms",
      width: completed + '%'
    };

    let progressWrappedClassName = `ui progress ${this.props.className}`;

    let progressLabel = <div className="progress">{completed}%</div>;

    return (
      <div className={progressWrappedClassName}>
        <div className="bar" style={style}>
          {progressLabel}
        </div>
      </div>
    );
  }
}

Progress.propTypes = {
  completed: React.PropTypes.number.isRequired,
  className: React.PropTypes.string,

};


