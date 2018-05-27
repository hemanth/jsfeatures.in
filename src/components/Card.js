import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/styles/hljs';

class Card extends Component {
    render() {
        const data = this.props.data;
        return data.map((card, idx) => {
            return (
                <div key={idx} className="card">
                    <h1 className="card__title">{card.title}</h1>
                    <div className="card__desc">{card.info}</div>
                    <div className="card__content">
                        <SyntaxHighlighter language='javascript' style={docco}>{card.code}</SyntaxHighlighter>
                    </div>
                    {/* <ul class="card__tags">
                        <li class="tag tag--primary">ES5</li>
                        <li class="tag tag--secondary">Stable</li>
                        <li class="tag tag--tertiary">CR</li>
                    </ul>
                    <a className="card__link" href="#">Refer- MDN: Object create</a> */}
                </div>
            )
        });
    }
}

export default Card;