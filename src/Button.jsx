
function Button(){

    const styles = {
    backgroundColor: "green",
    color:"black",
    padding: "10px 20px",
    borderRadius: "5px",
    border:"none",
    cursor: "pointer",
}

    function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}>
      Add to bag
    </button>
  );
}
export default Button