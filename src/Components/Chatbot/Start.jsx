const Start = (props) => {
  const initialAction = () => {
    props.actions.initialAction();
  };
  return (
    <div>
      <button
        className="strt ml-14 py-2 px-3 rounded-2xl"
        onClick={initialAction}
      >
        Let's get started
      </button>
    </div>
  );
};

export default Start;
