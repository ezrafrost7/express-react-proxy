import React from 'react';

function Card(props) {
    return (
        <div class="card mb-4 shadow-sm">
            <div class="card-header">
                <h4 cllass="my-0 font-weight-normal">{props.title}</h4>
            </div>

            <div class="card-body">
                <h1 class="card-title pricing-card-title">
                    {props.price}
                    <small class="text-muted">/ mo</small>{' '}
                </h1>

                <ul class="list-unstyled mt-3 mb-4">
                    <li>{props.l1}</li>
                    <li>{props.l2}</li>
                    <li>{props.l3}</li>
                    <li>{props.l4}</li>
                </ul>

                <button type="button" class="btn btn-lg btn-block btn-primary">
                    {props.text}
                </button>
            </div>
        </div>
    );
}

export default Card;
