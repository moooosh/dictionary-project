import React from "react"

export default function Photos(props) {
    if (props.photos) {
        return (
            <div className="Photos">
                <div className="row">
            {props.photos.map(function (photo, index) {
            return (
            <div className="col-4" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
            <img src={photo.src.landscape} alt="images" classname="photo-col" />
                </a>
                </div>
                );
        })}
        </div>
        </div>
        
            );
        } else {
            return null;
        }
    }
