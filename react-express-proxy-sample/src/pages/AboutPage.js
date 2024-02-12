import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import Placeholder from '../resources/logo.png';

function AboutPage(props) {
    return (
        <div>
            <Hero title={props.title}></Hero>

            <Content>
                <div class="row featurette">
                    <div class="col-md-7">
                        <h2 class="featurette-heading">Industry-Specific Cloud Software</h2>

                        <p class="lead">
                            Vlocity is a Salesforce Company and a leading provider of industry-specific cloud and mobile software, driving digital
                            transformation for the worldâ€™s largest companies. A three-time Forbes Cloud 100 winner, Vlocity is an â€œindustry
                            cloudâ€ pioneer built on the Salesforce platform. Vlocity increases sales, service and marketing agility, operational
                            efficiency and faster time to value for cloud and digital adoption across the enterprise. Committed to innovation,
                            customer success and a values-led culture, Vlocity serves the worldâ€™s leading companies in Communications, Media &
                            Entertainment, Energy & Utilities, Insurance, Health, and Government. Salesforce is headquartered in San Francisco, with
                            offices throughout North America, Europe, Asia, and Latin America.
                        </p>

                        <button class="btn btn-lg btn-primary">Explore Further</button>
                    </div>

                    <div class="col-md-5">
                        <img src={Placeholder} alt="" height="400px" />
                    </div>
                </div>

                <div class="row featurette">
                    <div class="col-md-7 order-md-2">
                        <h2 class="featurette-heading">Omnichannel by Design</h2>

                        <p class="lead">
                            Vlocityâ€™s Industry Cloud apps are omnichannel, allowing organizations to deliver seamless, industry-specific
                            interactions across any channel: over the web, through the contact center, by field sales and service organizations, via
                            indirect partner and reseller channels, and through retail locations. By delivering both deep industry-specific and
                            omnichannel capabilities, Vlocity helps you improve customer retention, cross-sell and up-sell with more targeted offers,
                            enhance customer loyalty and improve profitability.
                        </p>

                        <button class="btn btn-lg btn-primary">Explore Further</button>
                    </div>

                    <div class="col-md-5 order-md-1">
                        <img src={Placeholder} alt="" height="400px" />
                    </div>
                </div>

                <div class="row featurette">
                    <div class="col-md-7">
                        <h2 class="featurette-heading">The Worldâ€™s Best Companies Choose Industry Cloud Apps</h2>

                        <p class="lead">
                            Customers demand more from you, so you must demand more from your customer engagement software. The leaders in CRM for
                            nearly two decades started Vlocity to continue a lifelong mission: to transform how companies engage with their customers.
                            That singular objective is now being realized in the cloud, as a Salesforce Company, the worldâ€™s #1 CRM platform. By
                            taking a process-driven approach to customer interactions and embedding deep understanding of how specific industries
                            compete, sell and serve, Vlocity creates software that delivers all the benefits of the cloud with deep industry
                            expertise. Become a Vlocity customer today.
                        </p>

                        <button class="btn btn-lg btn-primary">Explore Further</button>
                    </div>

                    <div class="col-md-5">
                        <img src={Placeholder} alt="" height="400px" />
                    </div>
                </div>
            </Content>
        </div>
    );
}

export default AboutPage;
