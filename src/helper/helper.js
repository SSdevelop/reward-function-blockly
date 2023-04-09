import axios from 'axios';

export const downloadCode = (tutorial) => {
    const code = sessionStorage.getItem(`${tutorial}_code`);
    let textFileAsBlob = new Blob([code], {type:'text/plain'});
    let fileNameToSaveAs = "reward_function.py";
    let downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    if (window.webkitURL != null)
    {
        // Chrome
        downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    }
    else {
        // Firefox
        downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
        downloadLink.onclick = function(){
            document.body.removeChild(downloadLink);
        };
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
    }
    downloadLink.click();
};

export const copyCode = async (tutorial) => {
    const code = sessionStorage.getItem(`${tutorial}_code`);
    try {
        await navigator.clipboard.writeText(code);
        alert("Code copied to clipboard!");
    }
    catch (err){
        alert("Failed to copy code to clipboard!");
    }
};

export const isLoggedIn = async () => {
    try {
        const res = await axios.get('http://localhost:8083/api/auth/me');
        if(res.status === 200){
            return true;
        }
        return false;
    }
    catch (err){
        return false;
    }
};

export const logOut = async () => {
    try {
        const res = await axios.post('http://localhost:8083/api/auth/logout');
        if(res.status === 200){
            return true;
        }
        return false;
    }
    catch (err){
        return false;
    }
};
