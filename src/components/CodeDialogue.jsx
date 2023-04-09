import { Button, Dialog, DialogContent, DialogTitle } from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism';
import React from 'react';
import { copyCode, downloadCode } from '../helper/helper';

const CodeDialogue = ({ handleClose, open, tutorial }) => {
    return(
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>
                <Button onClick={() => downloadCode(tutorial)}>Download Code</Button>
                <Button onClick={() => copyCode(tutorial)}>Copy Code</Button>
            </DialogTitle>
            <DialogContent>
                <SyntaxHighlighter language="python" style={vs}>
                    {sessionStorage.getItem(`${tutorial}_code`)}
                </SyntaxHighlighter>
            </DialogContent>
        </Dialog>
    );    
};

export default CodeDialogue;
