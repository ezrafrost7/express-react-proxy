import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import Card from '../components/Card';

function PricePage(props) {
    return (
        <div>
            <Hero title={props.title} subTitle={props.subTitle}></Hero>

            <Content>
                <div class="card-deck mb-3 text-center">
                    <Card
                        title="Free"
                        price="$0"
                        text="Sign up for Free"
                        l1="10 users included"
                        l2="2 GB of storage"
                        l3="Email support"
                        l4="Help center access"
                    />
                    <Card
                        title="Pro"
                        price="$15"
                        text="Get Started"
                        l1="20 users included"
                        l2="10 GB of storage"
                        l3="Priority email support"
                        l4="Help center access"
                    />
                    <Card
                        title="Enterprise"
                        price="$29"
                        text="Contact Us"
                        l1="30 users included"
                        l2="15 GB of storage"
                        l3="Phone and email support"
                        l4="Help center access"
                    />
                </div>
            </Content>
        </div>
    );
}

export default PricePage;
