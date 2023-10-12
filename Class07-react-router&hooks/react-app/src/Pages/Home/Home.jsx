export const Home = (props) => {
  console.log("props in HOME", props);

  const { taskList } = props;
  return (
    <div>
      <h1>Home Page</h1>

      {taskList.length === 0 ? (
        <h1>No tasks yet</h1>
      ) : (
        taskList.map((task) => <h1 key={task.id}>{task.name}</h1>)
      )}
    </div>
  );
};
