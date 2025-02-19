import { useEffect } from 'react';

const EmbeddedForm = () => {
    useEffect(() => {
        if (!document.querySelector(`script[src="https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js"]`)) {
            const script = document.createElement('script');
            script.src = "https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js";
            script.setAttribute('clienthub_id', '462531c7-515f-4464-aabb-fe0dac55ed54');
            script.setAttribute('form_url', 'https://clienthub.getjobber.com/client_hubs/462531c7-515f-4464-aabb-fe0dac55ed54/public/work_request/embedded_work_request_form');
            document.body.appendChild(script);
        }
    }, []);

    return (
        <div>
            <div id="462531c7-515f-4464-aabb-fe0dac55ed54"></div>
            <link rel="stylesheet" href="https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css" media="screen" />
        </div>
    );
};

export default EmbeddedForm;