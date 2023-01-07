const newImageHandler = async(event) =>{
    event.preventDefault(); 
    if(user_name && imageURL && promptValue) {
        const response = await fetch('/api/image', {
            method: 'POST',
            body: JSON.stringify({ user_name, imageURL, promptValue }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.ok) {
            document.location.replace('/usergallery');
        }else {
            alert('Failed to create image');
        }
    }
};