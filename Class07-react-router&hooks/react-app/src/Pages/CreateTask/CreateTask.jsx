import { useEffect, useState } from "react";

export const CreateTask = (props) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskNameError, setTaskNameError] = useState(undefined);

  const handleChangeTaskName = (event) => {
    const value = event.target.value;
    setTaskName(value);
  };

  const handleChangeDescription = (event) => {
    const value = event.target.value;
    setTaskDescription(value);
  };

  const validateInputs = (inputValue) => {
    return inputValue.length > 20;
  };

  useEffect(() => {
    console.log("taskname changed", taskName);

    const isTaskNameInvalid = validateInputs(taskName);

    if (isTaskNameInvalid) {
      setTaskNameError("Task name value is to long.");
    } else {
      setTaskNameError(undefined);
    }
  }, [taskName]);

  return (
    <div>
      <h1>Create Task</h1>

      <form>
        <input
          type="text"
          placeholder="Enter Task Name"
          onChange={handleChangeTaskName}
          value={taskName}
        />
        {/* this means that we have an error in the 
        state propety taskNameError
         */}
        {Boolean(taskNameError) && (
          <p style={{ color: "red" }}>{taskNameError}</p>
        )}
        <br />
        <br />

        <input
          type="text"
          placeholder="Enter Task Description"
          onChange={handleChangeDescription}
          value={taskDescription}
        />
        <br />
        <br />

        <button
          onClick={(e) => {
            e.preventDefault();

            const newlyCreatedTask = {
              id: Date.now(),
              name: taskName,
              description: taskDescription,
            };

            props.handleAddTask(newlyCreatedTask);
          }}
        >
          Create Task
        </button>
      </form>
    </div>
  );
};
