import { useSelector } from "react-redux";

function History() {
    const recordsItems = useSelector(state => state.hoverRecords);
    let recordsContainer = null;

    if (recordsItems.length) {
        recordsContainer = (
            <div className="records">
                <div className="records-list">
                    {
                        recordsItems.map((item, index) => (
                            <div key={index} className="record">{`row ${item.row} column ${item.column}`}</div>
                        ))
                    }
                </div>
            </div>
        );
    } else {
        recordsContainer = <div className="records"></div>;
    }

    return (
        <div className="history">
            <h2>History</h2>
            { recordsContainer }
        </div>
    );
}

export default History;