import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import Logo from '../resources/logo.png';
import ScriptTag from 'react-script-tag';

class LocalPage extends React.Component {
    render() {
        return (
            <div>
                <link rel="stylesheet" type="text/css" href="/newport/assets/styles/vlocity-newport-design-system.min.css" />

                <vlocityomniscript-off-platform-life-insurance-example-2-english
                    layout="newport"
                    run-mode="localScriptDef"
                ></vlocityomniscript-off-platform-life-insurance-example-2-english>

                <ScriptTag type="text/javascript" src="/0.app.js" />
                <ScriptTag type="text/javascript" src="/2.app.js" />
                <ScriptTag type="text/javascript" src="/app.js" />
            </div>
        );
    }
}

export default LocalPage;
