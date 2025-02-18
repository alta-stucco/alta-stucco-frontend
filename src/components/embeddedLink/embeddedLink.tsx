import { useEffect, useState } from 'react';

const EmbeddedForm = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const script = document.querySelector(`script[src="https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js"]`);
        if (script) {
            setIsLoaded(true);
        } else {
            const newScript = document.createElement('script');
            newScript.src = "https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js";
            newScript.setAttribute('clienthub_id', '462531c7-515f-4464-aabb-fe0dac55ed54');
            newScript.setAttribute('form_url', 'https://clienthub.getjobber.com/client_hubs/462531c7-515f-4464-aabb-fe0dac55ed54/public/work_request/embedded_work_request_form');
            newScript.onload = () => setIsLoaded(true);
            document.body.appendChild(newScript);
        }
    }, []);

    if (!isLoaded) {
        return  (
            <div>Loading...</div>
        );
    }

    return (
        <div>
            <div id="462531c7-515f-4464-aabb-fe0dac55ed54"></div>
            <link rel="stylesheet" href="https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css" media="screen" />
        </div>
    );
};

export default EmbeddedForm;