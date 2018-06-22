import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'

class MyPage extends React.Component{
    render(){
        return(
            <div className="Main-Container">

                <div className="Top-Part">
                    <p>This is the top</p>
                </div>


                <div className="Center-Part">
                    <div className="Center-Left">
                        <p>This is the left</p>
                    </div>
                    <div className="Center-Right">
                        <p>this is the Right</p>
                    </div>
                </div>


                <div className="Bottom-Part">
                    <p>this is the bottom</p>
                </div>

            </div>
        )
    }
}

ReactDOM.render(<MyPage />, document.getElementById('root'))