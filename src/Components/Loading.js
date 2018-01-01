//React
import React from 'react';

//React Loading
import ReactLoading from 'react-loading';

//CSS
import '../css/loading.css';

const Loading = () => (
    <div className="loading">
        <ReactLoading 
            type="cyclon"
        />
    </div>
);

export default Loading;
