import React, { useState } from "react"
import { Table } from 'react-bootstrap';
import { connect } from "react-redux";

function Cart(props) {

    let [신발, 신발변경] = useState(props.state);

    return (
        <div>
            <Table responsive="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경</th>
                    </tr>
                </thead>

                {

                신발.map(function(a, i){

                    return(
                    <tr>
                        <td>{props.state[i].id}</td>
                        <td>{props.state[i].name}</td>
                        <td>{props.state[i].quan}</td>
                        <td>가능</td>
                    </tr>
                    );
                    })
                }

            </Table>
        </div>
    )
}

function state를props화(state) {
    return {
        state: state
    }
}

export default connect(state를props화)(Cart)

// export default Cart;