import React from 'react';
import {useParams} from 'react-router-dom'
// class Detail extends Component {
//     state = {  }
//     render() {
//         console.log(this.props);
//         return (
//             <>
//                 <div>详情页</div>
//             </>
//         );
//     }
// }

const Detail = () => {
    let {id} =useParams()
    console.log(useParams());
    return (
        <>
            <h3>详情页 {id}</h3>
        </>
    );
}

export default Detail;
