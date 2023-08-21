import "./Deposit.css"

function Deposit(props) {
    return (
      <>
       <div className="modal-wrapper">
            <div className="mod">
                <h6>Place a bid</h6>
                <button onClick={props}>Back</button>
            </div>
       </div>
      </>
    );
}

export default Deposit;
