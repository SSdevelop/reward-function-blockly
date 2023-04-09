import React, { useState } from 'react';
// import toolbox from '../assets/toolbox';
import workspaceConfig from '../assets/workspaceConfig';
import '../assets/customblocks.js';
import '../assets/customblocks_generators.js';
import { BlocklyWorkspace } from 'react-blockly';
import { pythonGenerator } from 'blockly/python.js';
import '../App.css';


const BlocklySpace = ({ setXml, setPythonCode, toolbox, tutorialNum }) => {
    const initialXml = `<xml xmlns="https://developers.google.com/blockly/xml" id="workspaceBlocks" style="display: none"><block type="reward_function" deletable="false" id="Kgpk:ztKLbbMx34k:!+]" x="138" y="137"></block></xml>`;

    const workspaceChange = (workspace) => {
        const code = pythonGenerator.workspaceToCode(workspace);
        sessionStorage.setItem(`${tutorialNum}_code`, code);
        setPythonCode(prevCode => code);
    };

    // const toolboxConfig = {
    //     kind: kind,
    //     contents: toolbox,
    // };

    return(
        <BlocklyWorkspace
            toolboxConfiguration={toolbox}
            initialXml={initialXml}
            className='fill-height'
            workspaceConfiguration={workspaceConfig}
            onXmlChange={setXml}
            onWorkspaceChange={workspaceChange}
        />
    );
};

export default BlocklySpace;