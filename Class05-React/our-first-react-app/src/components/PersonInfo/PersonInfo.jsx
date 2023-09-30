export const PersonInfo = (props) => {
  console.log("Props are: ", props);

  return (
    <>
      <h2>Person info are:</h2>
      <h3>
        Person fullname is: {props.fullName} and his favourite food is{" "}
        {props.favouriteFood}.
      </h3>
    </>
  );
};
