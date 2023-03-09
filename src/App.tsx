import React, { MouseEventHandler, useEffect } from 'react';
import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import './iframeResizer.contentWindow.min.js';

function App() {

    const [started, setStarted] = useState<boolean>(false);
    const [level, setLevel] = useState<number>(0);
    const [finished, setFinished] = useState<boolean>(false);

    return (
        <div className="main">
            {started === false ?
                <div className="modalic start">
                    <p className="modal__title">start title</p>
                    <button className='btn btn-primary' onClick={() => { setStarted(true) }}>button text</button>
                </div>
                : null}
            {level >= 10 ?
                <div className='modalic end'>
                    <h2 className='p-2 text-center'>
                        end title
                    </h2>
                    <button className='btn btn-primary' onClick={() => { location.reload() }}>button text</button>
                </div>
                : null
            }
            <div className="view test">

            </div>


        </div>
    );
}

export default App;