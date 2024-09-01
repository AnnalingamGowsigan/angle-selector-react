import React, { useState } from 'react';

function AngleSelector() {
    const [angle, setAngle] = useState(0);

    const handleInputChange = (e) => {
        let value = Math.min(Math.max(e.target.value, 0), 360);
        setAngle(value);
    };

    const handleSliderChange = (e) => {
        setAngle(e.target.value);
    };

    const handleRadioChange = (e) => {
        setAngle(e.target.value);
    };

    return (
        <div>
            <div>
                <label htmlFor="angleInput">Angle:</label>
                <input
                    type="number"
                    id="angleInput"
                    value={angle}
                    onChange={handleInputChange}
                    min="0"
                    max="360"
                />
            </div>
            <div>
                <input
                    type="range"
                    id="angleSlider"
                    className="slider"
                    value={angle}
                    onChange={handleSliderChange}
                    min="0"
                    max="360"
                />
            </div>
            <div>
                <label><input type="radio" name="angleRadio" value="0" checked={angle === "0"} onChange={handleRadioChange}/> 0</label>
                <label><input type="radio" name="angleRadio" value="45" checked={angle === "45"} onChange={handleRadioChange}/> 45</label>
                <label><input type="radio" name="angleRadio" value="60" checked={angle === "60"} onChange={handleRadioChange}/> 60</label>
                <label><input type="radio" name="angleRadio" value="90" checked={angle === "90"} onChange={handleRadioChange}/> 90</label>
                <label><input type="radio" name="angleRadio" value="180" checked={angle === "180"} onChange={handleRadioChange}/> 180</label>
            </div>
        </div>
    );
}

export default AngleSelector;
