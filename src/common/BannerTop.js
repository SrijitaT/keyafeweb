import React from 'react'
import { Link } from "react-router-dom";
export default function BannerTop(props) {
    return (
        <React.Fragment>
            <div className="banner2-w3ls">
            </div>
            <div className="breadcrumb-agile">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb m-0">
                        <li className="breadcrumb-item">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">{props.pageName}</li>
                    </ol>
                </nav>
            </div>
        </React.Fragment>
    )
}
