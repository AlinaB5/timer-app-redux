import { startTimer, stopTimer } from "./actions/actions";
import { connect } from "react-redux";

function Task(props) {
  const { task, activeTask, stopTimer, startTimer } = props;
  const elapsedTimeStr = new Date(task.elapsedTime * 1000)
    .toISOString()
    .substr(14, 5);
  return (
    <div className="flex-container" key={task.id}>
      <div className="flex-child">
        <div className="taskNameDiv">
          <b>{task.name}</b>
        </div>
      </div>

      <div className="flex-child">
        <div className="timeDiv">{elapsedTimeStr}</div>
      </div>

      <div className="flex-child">
        <button
          className="btn"
          onClick={() => {
            if (activeTask === task.id) {
              stopTimer();
            } else {
              startTimer(task.id);
            }
          }}
        >
          <i
            className={activeTask === task.id ? "fa fa-pause" : "fa fa-play"}
          ></i>
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};

export default connect(mapStateToProps, { startTimer, stopTimer })(Task);
